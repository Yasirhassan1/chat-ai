import {twMerge} from "tailwind-merge"
import ReactMarkdown from "react-markdown";
import { Profile } from "./Profile";
import {type Message } from "../types";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { GiMoonOrbit } from "react-icons/gi";
import { BsClaude } from "react-icons/bs";
interface MessageBoxProps{
    message:Message
    className?: string
}
export function MessageBox({message, className=""}:MessageBoxProps){
    const logo = {
        "gpt": AiOutlineOpenAI,
        "user": FaUser,
        "gemini": RiGeminiFill,
         "grok": GiMoonOrbit,
         "claude": BsClaude,
         "none": GiMoonOrbit,
         "auto": GiMoonOrbit
         
    }

    return(
        <div className="relative pl-8 pt-6">
          
          <Profile  RIcon={logo[message.type]} type = {message.type}/>
              
       
        <div className={twMerge(`messageBox max-w-[600px] text-sm border w-fit ${message.type === "user"?"bg-green-100 text-green-800 border-green-200":"bg-blue-100 text-blue-800 border-blue-200"} shadow p-3 rounded-lg  ${className}`)}>
      <ReactMarkdown>{message.text}</ReactMarkdown>
     
    </div>
    </div>
    )
}