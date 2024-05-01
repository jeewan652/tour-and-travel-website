import React from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../redux/AuthReducer/auth.actions";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import LogginButton from "./LogginButton";

firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  apiKey: "AIzaSyB3TPaoTPPNiaRzqLSkJDr6hWRASuwlooY",
  authDomain: "tour-and-travel-f248c.firebaseapp.com",
  projectId: "tour-and-travel-f248c",
  storageBucket: "tour-and-travel-f248c.appspot.com",
  messagingSenderId: "897519824465",
  appId: "1:897519824465:web:968928adfdeabcc0eb9270",
  measurementId: "G-2FQCPE6CR5"
});
const googleProvider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default function Login() {
  const dispatch = useDispatch();
  const SignInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, email } = res.user;
        dispatch(loginAction(res.user.providerData));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return <LogginButton SignInWithGoogle={SignInWithGoogle}></LogginButton>;
}
