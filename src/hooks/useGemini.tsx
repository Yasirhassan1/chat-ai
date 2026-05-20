import { GoogleGenAI } from "@google/genai";
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  export function useGemini(){
    const generateWithGemini = async(prompt:string)=>{
          console.log("useGemini hook called")
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
  });
  return response.text;

    }

  
return {generateWithGemini}
}
