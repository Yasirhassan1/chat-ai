import { getAuth, signOut } from "firebase/auth";
import { useFirebase } from "./useFirebase";
export function useSignOut(navigate:string=""){
    const {app}  = useFirebase();
    const auth = getAuth(app);
    async function logOut(){
        try{
           await signOut(auth);
           window.location.href = navigate
        }
        catch(error){
            console.log(error)
        }
// signOut(auth).then(() => {

// }).catch((error) => {
//     console.log(error)
  
// });
    }

    return {logOut}

}