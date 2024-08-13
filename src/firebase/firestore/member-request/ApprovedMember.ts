import { collection, addDoc, serverTimestamp, setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../config";
import { useEffect, useState } from "react";
import { MemberRequest } from "@/app/(default)/member-requests/columns";
import { MemberInfo } from "@/app/members/columns";

const updateMemberRequest = async (data: MemberRequest) => {
  try {
    const docRef = await addDoc(collection(db, "member-request"), {
      ...data,
      checkedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    throw e;
  }
};
const rejectMemberRequest = async (id:string) => {
  try {
    const docRef = await updateDoc(doc(db, "member_request",id), {
      checkedAt: serverTimestamp(),
      requestStatus: "rejected",
    });
  } catch (e) {
    throw e;
  }
};
const approveMemberRequest = async (id:string) => {
  try {
    const docRef = await updateDoc(doc(db, "member_request",id), {
      checkedAt: serverTimestamp(),
      requestStatus: "approved",
    });
  } catch (e) {
    throw e;
  }
};
const addMember = async (data: MemberInfo) => {
  try {
    const docRef = await addDoc(collection(db, "members"), {
      ...data,
      business : data?.business?.map(item => ({...item})),
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    throw e;
  }
};


const useValidatedRequest = (id:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<String>("");
  const reject = async() => {
            return new Promise((resolve, reject) => {
                setLoading(true);
                rejectMemberRequest(id)
                .then(res => {
                    console.log(res)
                    resolve(res);
                })
                .catch(error => {
                    console.log(error)
                    setError(error)
                    throw error;
                }).finally(() => {
                    setLoading(false);
                });
            })

  }
  const approve = async(data:MemberInfo) => {
    return await Promise.all([approveMemberRequest(id), addMember(data)])

  }

  return { data, loading, errorMsg ,approve,reject};
};


export { useValidatedRequest };
