import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";

const createEvent = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "events"), {
      ...data,
      createdAt: serverTimestamp(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export default createEvent;
