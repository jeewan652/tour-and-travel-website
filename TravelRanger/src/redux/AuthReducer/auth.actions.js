import { LOGIN, LOGOUT } from "./auth.types"
import firebase from "firebase/compat/app";
import { signInWithEmailAndPassword, getAuth} from "firebase/auth";
import axios from "axios"

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

const firebaseAuth = getAuth();


export const loginAction=(payload)=>async(dispatch)=>{
  Post(payload[0])

  let obj={
    isLoggedIn:true,
    user:payload
  }

  localStorage.setItem("cache",JSON.stringify(obj))
dispatch({
        type:LOGIN,
        payload:payload
      })
}

export const logoutAction=()=>{
  localStorage.setItem("cache",null)
    return {
        type:LOGOUT
    }
}

export function signup(email, password) {
    return async (dispatch, getState) => {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
       
        // Dispatch a success action
        Post({email})
        alert("Sign Up Successfull")
      } catch (error) {
        // Dispatch an error action
     
      }
    };
  }

  export function manualSignin(email, password) {
    return async (dispatch, getState) => {
      try {
        await signInWithEmailAndPassword(firebaseAuth, email, password);
        // Dispatch a success action
        let obj={
          isLoggedIn:true,
          user:[{email:email,displayName:email}]
        }
      
        localStorage.setItem("cache",JSON.stringify(obj))

        dispatch({type:LOGIN,
         payload:[{email:email,displayName:email}]
        })
      } catch (error) {
        // Dispatch an error action
        alert("Incorrect Credentials")
      }
    };
  }

  function Post(data){
    axios.post(`https://musafir-backend.onrender.com/users`,data)
    .then((res)=>console.log("added to admin side"))
  }