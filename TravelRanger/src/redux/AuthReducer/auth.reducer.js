import { LOGIN, LOGOUT } from "./auth.types"

const initialstate=JSON.parse(localStorage.getItem("cache")) || {
    isLoggedIn:false,
    user:[]
}

export const authReducer=(state=initialstate,{type,payload})=>{
       
    switch(type){
        case LOGIN:{
            localStorage.setItem("cache", JSON.stringify({
                isLoggedIn:true,
                user:payload
            }));
            return {
                isLoggedIn:true,
                user:payload
            }
        }
        case LOGOUT:{
            // Clear localStorage here
            localStorage.removeItem("cache");
            return {
                isLoggedIn:false,
                user:[]
            }
        }

        default:{
            return state
        }
    }
}