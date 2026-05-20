import { twMerge } from "tailwind-merge"
interface ProfileProp{
    RIcon: React.ElementType,
    type: "user"|"none"| "gpt"|"gemini"|"grok"|"claude"|"auto",
    className1?: string,
    className2?: string,
}
export function Profile({RIcon, type, className1, className2}: ProfileProp){

    return(
         <div className={twMerge(`p-1.5 rounded-full ${type == "user"? "bg-green-200": "bg-blue-200"}  border border-gray-300 absolute top-0 left-0 flex items-center justify-center ${className1}`)}>
           <RIcon className={twMerge(`${type == "user"? "text-green-800": "text-blue-800"} ${className2}`)}/>
            </div>
    )

}