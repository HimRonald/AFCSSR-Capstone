import { useState, useEffect } from "react";
import { db, storage } from "../../config";
import { doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

const useFetchNewsDetail = (id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNewsDetail = async () => {
    try {
      const docRef = doc(db, "news", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const items = docSnap.data();
        if (items.thumbnail) {
          const thumbnailRef = ref(storage, `news/${items.thumbnail}`);
          const thumbnailURL = await getDownloadURL(thumbnailRef);
          items.thumbnail = thumbnailURL;
        }
        setData(items);
      } else {
        setError("Document not found!");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) fetchNewsDetail();
  }, [id]);

  return { data, loading, error };
};

export default useFetchNewsDetail;
