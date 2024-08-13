import { useState, useEffect } from "react";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../config";

const useFetchNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "news"),
        where("status", "==", "published"),
        // orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(q);
      const items = await Promise.all(
        querySnapshot.docs.map(async (doc) => {
          const docData = doc.data();
          const thumbnailRef = ref(storage, `news/${docData.thumbnail}`);
          let thumbnailURL = "";
          try {
            thumbnailURL = await getDownloadURL(thumbnailRef);
          } catch (imageError) {
            console.warn(
              `Failed to fetch image for document ID: ${doc.id}`,
              imageError
            );
          }
          return {
            id: doc.id,
            title: docData.title,
            content: docData.content,
            status: docData.status,
            thumbnailName: docData.thumbnail,
            thumbnail: thumbnailURL,
            createdAt: docData.createdAt,
          };
        })
      );
      setData(items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchNews;
