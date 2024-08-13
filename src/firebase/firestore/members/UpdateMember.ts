import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";
import { MemberInfo } from "@/app/members/columns";
import { useEffect, useState } from "react";

const updateMember = async (data: MemberInfo) => {
  try {
    const docRef = await addDoc(collection(db, "members"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (e) {
    throw e;
  }
};


export const useEditMember = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<String>("");
  const post = async(data:MemberInfo) => {
            return new Promise((resolve, reject) => {
                setLoading(true);
                const modifiedData:MemberInfo = {
                    ...data,
                    business : data?.business?.map(item => ({...item})),
                    updatedAt: serverTimestamp(),
                }
                updateMember(modifiedData)
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


export default updateMember;


