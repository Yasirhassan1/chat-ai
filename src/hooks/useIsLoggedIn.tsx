import {onAuthStateChanged, type Auth } from "firebase/auth";
import { useFirebase } from "./useFirebase";
import { getAuth } from "firebase/auth";

export function useIsloggedIn(){
      const {app} =useFirebase();
      const auth:Auth =getAuth(app)
function isLoggedIn(){
  onAuthStateChanged(auth, (user)=>{
  if(!user){
    window.location.href = "/sign-up"
  }
})

}
return {isLoggedIn};

}