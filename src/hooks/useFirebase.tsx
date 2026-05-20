import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
export function useFirebase(){
const app = initializeApp(firebaseConfig);
return {app}
}