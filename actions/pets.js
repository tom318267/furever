import { GET_PETS } from "./types";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

// Get Pets
export const getPets = () => async (dispatch) => {
  const petCollectionRef = collection(db, "pets");
  try {
    const data = await getDocs(petCollectionRef);
    dispatch({
      type: GET_PETS,
      payload: data.docs.map((doc) => ({ ...doc.data() })),
    });
  } catch (error) {
    console.log(error.message);
  }
};
