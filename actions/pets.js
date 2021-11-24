import { GET_PETS } from "./types";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { data } from "autoprefixer";

// Get Pets
export const getPets = () => async (dispatch) => {
  const res = await fetch("https://furever-pets-api.herokuapp.com/pets");
  const data = await res.json();
  try {
    dispatch({
      type: GET_PETS,
      payload: data,
    });
  } catch (error) {
    console.log(error.message);
  }
};
