import {twMerge} from "tailwind-merge"
import ReactMarkdown from "react-markdown";
import { Profile } from "./Profile";
import {type Message } from "../types";
import { AiOutlineOpenAI } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { GiMoonOrbit } from "react-icons/gi";
import { BsClaude } from "react-icons/bs";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { TbClipboardText } from "react-icons/tb";
import { useClipboard } from "../hooks/useClipboard";
import { PopUp } from "./PopUp";
import { useState } from "react";
import { useSpeechSynthesis } from "../hooks/useSpeechSynthesis";
// import { useElevenLabTextToSpeech } from "../hooks/useELevenLabTextToSpeech";
interface MessageBoxProps{
    message:Message
    className?: string
}
export function MessageBox({message, className=""}:MessageBoxProps){
  const {copyText} = useClipboard();
   const [showPopUp, setShowPopUp] = useState(false)
   const {speakTheText} = useSpeechSynthesis();
  //  const {textToSpeech} = useElevenLabTextToSpeech();

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
              
       
        <div className={twMerge(`messageBox max-w-[600px] flex flex-col  text-sm border w-fit ${message.type === "user"?"bg-green-100 text-green-800 border-green-200":"bg-blue-100 text-blue-800 border-blue-200"} shadow px-3 pt-3 pb-2 rounded-lg  ${className}`)}>
      <ReactMarkdown>{message.text}</ReactMarkdown>
      <div className="flex gap-2 mt-2">
       
      <Profile onClick={()=>{
        speakTheText(message.text)
        // textToSpeech(message.text)
     
      }} RIcon={HiOutlineSpeakerWave} type={message.type} className1="cursor-pointer static w-fit" className2="text-xs"/>
   
      <Profile onClick={()=>{
       copyText(message.text)
       setShowPopUp(true)

      }} RIcon={TbClipboardText} type={message.type} className1="cursor-pointer static w-fit" className2="text-xs"/>

    </div>
    </div>
    <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} message="Copied to clipboard" showFor={2000}  variant="success"/>

    </div>
    )
}