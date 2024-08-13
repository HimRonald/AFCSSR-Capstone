import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";
import { MemberInfo } from "@/app/members/columns";
import { useState } from "react";

const editMember = async (id:string, data:MemberInfo) => {
  try {
    const docRef = doc(db, "members", id);
    const res = await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    return  res;
  } catch (e) {
    console.error("Error updating document: ", e);
    throw e;
  }
};
export const useEditMember = (id: string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<String>("");
  const post = async(data:MemberInfo) => {
            return new Promise((resolve, reject) => {
                setLoading(true);
                const modifiedData:MemberInfo = {
                    ...data,
                    business : data?.business?.map(item => ({...item})),
                    createdAt: serverTimestamp(),
                    businessTypes: data?.business.map(item => item.type),
                }
                console.log(modifiedData);
                editMember(id, modifiedData)
                .then(res => {
                     setLoading(false);
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




export default editMember;

