import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";
import { useEffect, useState } from "react";
import { MemberRequest } from "@/app/(default)/member-requests/columns";

const updateMemberRequest = async (data: MemberRequest) => {
  try {
    const docRef = await addDoc(collection(db, "member-request"), {
      ...data,
      //checkedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    throw e;
  }
};


export const useEditMemberRequest = (id:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<String>("");
  const post = async(data:MemberRequest) => {
            return new Promise((resolve, reject) => {
                setLoading(true);
                const modifiedData:MemberRequest = {
                    ...data,
                    business : data?.business?.map(item => ({...item})),
                    checkedAt: serverTimestamp(),
                }
                updateMemberRequest(modifiedData)
                .then(res => {
                    if( !res ){
                        setLoading(false);
                        return reject(data);
                    }
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

  return { data, loading, errorMsg ,post};
};


export default updateMemberRequest;

