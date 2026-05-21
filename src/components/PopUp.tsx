import { type SetStateAction } from "react";

interface PopUpProps{
    message: string,
    variant: "success"|"error"|"none",
    showFor: number,
    className?: string,
    showPopUp: boolean,
    setShowPopUp: React.Dispatch<SetStateAction<boolean>>
  

}

export function PopUp({message, variant, showFor,  showPopUp, setShowPopUp, className}:PopUpProps){
   
    const variantStyle= {
        "success": "bg-green-200 text-green-800",
        "error": "bg-red-200 text-red-800",
        "none":""
    }
   
   function showAndHideAfter(){
        setTimeout(()=>{
            setShowPopUp(false)
        }, showFor)
    }
    showAndHideAfter();
    return (
    <p className={`p-3 fixed top-0 transition-all duration-500 ease-out  left-1/2 ${showPopUp ? "block top-5":"hidden"} -translate-x-1/2 rounded-xl ${variantStyle[variant]} shadow w-fit ${className}`}>{message}</p>)
}