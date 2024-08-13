import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";
import { MemberInfo } from "@/app/members/columns";
import { useEffect, useState } from "react";
import Page from "@/app/events/page";

const addMember = async (data: MemberInfo) => {
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


export const useAddMember = () => {
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
                }
                addMember(modifiedData)
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


export default addMember;


