import { storage } from "../config";
import { ref, deleteObject } from "firebase/storage";

const deleteNewsImage = async (imagePath) => {
  try {
    if (imagePath) {
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
    }
  } catch (error) {
    console.error("Error deleting image: ", error);
  }
};

export default deleteNewsImage;
