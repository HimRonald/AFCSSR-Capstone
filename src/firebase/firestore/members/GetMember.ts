import { collection, doc, limit, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../config";
import { MemberInfo } from "@/app/members/columns";

interface useGetMemberProps {
  id: string;
  disable?: boolean;
}

const useGetMember = ({ id, disable }: useGetMemberProps) => {
  const [data, setData] = useState<MemberInfo>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    if (disable) return () => {};
    const docRef = doc(db, "members", id);
    setLoading(true);
    const unsub = onSnapshot(
      docRef,
      (doc) => {
        const tmp: MemberInfo = doc.data() as MemberInfo;
        if (tmp) {
          setData({
            ...tmp,
            business: tmp.business,
          });
        }
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
        throw error;
      },
    );
    return () => unsub();
  }, []);

  return { data, loading, error };
};

export default useGetMember;
