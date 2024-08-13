import { collection, doc, limit, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react";

import { db } from "../../config";
import { MemberRequest } from "@/app/(default)/member-requests/columns";

interface useGetMemberProps {
    id: string,
    disable?: boolean,
}

const useGetMemberRequest = ({ id, disable }: useGetMemberProps) => {
    const [data, setData] = useState<MemberRequest>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<String>("");

    useEffect(() => {
        if (disable) return () => { }
        const docRef = doc(db, "member_request", id);
        setLoading(true);
        const unsub = onSnapshot(
            docRef,
            (doc) => {
                const tmp: MemberRequest = doc.data() as MemberRequest;
                setData({
                    ...tmp,
                });
                setLoading(false);
            },
            (error) => {
                setError(error.message);
                setLoading(false);
            },
        );
        return () => unsub();
    }, []);

    return { data, loading, error };
};

export default useGetMemberRequest;
