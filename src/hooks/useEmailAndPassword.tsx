import {createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useFirebase } from "./useFirebase";
 const {app} = useFirebase();
    const auth = getAuth(app)
export function useEmailAndPassword(){
   
    async function signInWithEmailAndPassword(email:string, password:string){
         try{
    const userCredentail = await createUserWithEmailAndPassword(auth, email, password)
     const user = userCredentail.user;  
     localStorage.setItem("isloggedIn", "true")
     return true;
 
  }

  catch(err:unknown){
     
      console.log(err)
      return false
  }
    }
    return {signInWithEmailAndPassword}
}