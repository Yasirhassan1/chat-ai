import { createXai } from '@ai-sdk/xai';
import { generateText } from "ai";

const xai = createXai({ apiKey: import.meta.env.VITE_GROKAI_KEY });

export function useGrok(){
     const generateWithGrok = async(prompt:string)=>{
         console.log("useGrok hook called")
     const { text } = await generateText({
      model: xai.responses("grok-4.3"),
      system: "You are Grok, a chatbot inspired by the Hitchhiker's Guide to the Galaxy.",
      prompt: prompt,
    });
    return text;
     }


return{generateWithGrok}

}