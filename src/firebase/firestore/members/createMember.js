import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";

const createNews = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "member_request"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default createNews;
