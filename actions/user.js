import { LOGIN, LOGIN_FAIL, SIGN_OUT, SIGN_UP, SIGN_UP_FAIL } from "./types";
import { auth, db } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

// Register User
export const register = (name, email, password) => async (dispatch) => {
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userAuth) => {
      updateProfile(auth.currentUser, {
        displayName: name,
        email,
      }).then(async () => {
        await setDoc(doc(db, "users", auth.currentUser.uid), {
          name,
          email,
        });

        dispatch({
          type: SIGN_UP,
          payload: auth.currentUser,
        });
      });
    })
    .catch((error) => {
      dispatch({
        type: SIGN_UP_FAIL,
        payload: error.message,
      });
    });
};

// Login User

export const signIn = (email, password) => async (dispatch) => {
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      dispatch({
        type: LOGIN,
        payload: user,
      });
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.message,
      });
    });
};

// Sign Out User
export const signOutUser = () => async (dispatch) => {
  try {
    await auth.signOut();
    dispatch({
      type: SIGN_OUT,
    });
  } catch (error) {
    dispatch({
      type: SIGN_OUT,
      payload: error.message,
    });
  }
};
