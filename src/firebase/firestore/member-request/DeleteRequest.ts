import { db, storage } from "../../config";
import { deleteDoc, doc } from "firebase/firestore";
import { useState } from "react";

const deleteMemberRequest = async (id:string) => {
  try {
    await deleteDoc(doc(db, "member_request", id));
  } catch (error) {
    throw error
  }
}
export const useDeleteRequest = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setError] = useState<String>("");
  const run = async(id: string) => {
            console.log(id);
            return new Promise((resolve, reject) => {
                setLoading(true);
                deleteMemberRequest(id)
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
  return { loading, errorMsg ,run};
}

