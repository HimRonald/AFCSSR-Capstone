import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../config";

const updateEvent = async (id, data) => {
  try {
    const docRef = doc(db, "events", id);
    await updateDoc(docRef, {
      ...data,
      updatedAt: serverTimestamp(),
    });
    console.log("Document updated with ID: ", id);
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export default updateEvent;
