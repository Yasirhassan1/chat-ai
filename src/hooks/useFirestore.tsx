import { getFirestore } from "firebase/firestore";
import { useFirebase } from "./useFirebase";
import { collection, addDoc } from "firebase/firestore"; 
export function useFirestore(){

    const {app} = useFirebase()
    const db = getFirestore(app)
    async function storeData(collectionName:string, data:any){
        try {
  const docRef = await addDoc(collection(db, collectionName), data);
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}
    }

    return {storeData}


}