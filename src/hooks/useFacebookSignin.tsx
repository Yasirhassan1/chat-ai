import { FacebookAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { useFirebase } from "./useFirebase";
const provider = new FacebookAuthProvider();

export function useFacebookSignin(){
  
 const {app}  = useFirebase();
const auth = getAuth(app);


        async function signInWithFacebook(){
               try{
                  const result =  await signInWithPopup(auth, provider)
                  const credential = FacebookAuthProvider.credentialFromResult(result)
                  const token = credential?.accessToken;
                  const user = result.user;
                  console.log(user)
                  window.location.href="/"
               }
               catch(error){
                   console.log(error)
               }
           
           }
           return {signInWithFacebook};
    
}