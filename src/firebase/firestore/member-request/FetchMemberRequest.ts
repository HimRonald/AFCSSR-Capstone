import { collection, limit, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../config";

const useFetchMemberRequests = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<String>("");

  useEffect(() => {
    const q = query(collection(db, "member_request"), limit(10));
    let data: any = [];
    setLoading(true);
    const unsub = onSnapshot(q, (querySnapshot) =>{
      querySnapshot.forEach((doc) => {
        data.push({id: doc.id,...doc.data()});
      }),
     setData(data);
     setLoading(false)
    }
    ,(error => {
        setError(error.message)
        setLoading(false)
    }),() => {
    });
    return () => unsub();
  }, []);

  return { data, loading, error };
};

export default useFetchMemberRequests;
