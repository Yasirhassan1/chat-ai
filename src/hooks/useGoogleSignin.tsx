import { GoogleAuthProvider, getAuth, signInWithPopup  } from "firebase/auth";
import { useFirebase } from "../hooks/useFirebase";
 const provider = new GoogleAuthProvider();
    const {app}  = useFirebase();
    
    const auth = getAuth(app);
  
export function useGoogleSignin(){
       
 

      async function signInWithGoogle(){
        try{
           const result =  await signInWithPopup(auth, provider)
        //    const credential = GoogleAuthProvider.credentialFromResult(result)
        //    const token = credential?.accessToken;
           const user = result.user;
           console.log(user)
           window.location.href="/"
        }
        catch(error){
            console.log(error)
        }
    
    }
    return {signInWithGoogle};
}