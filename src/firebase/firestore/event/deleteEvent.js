import { db, storage } from "../../config";
import { deleteDoc, doc } from "firebase/firestore";
import { ref, deleteObject } from "firebase/storage";

const deleteEvent = async (id, imagePath) => {
  try {
    const docRef = doc(db, "events", id);
    await deleteDoc(docRef);

    if (imagePath) {
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
    }
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
};

export default deleteEvent;
