import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_KEY,
  dangerouslyAllowBrowser: true
});

export function useGPT(){
 
   const generateWithGPT = async(prompt:string)=>{
      console.log("useGPT hook called")
   const response = await client.responses.create({
  model: "gpt-5.5",
  input: prompt,
});

  return response.output_text;
   }

return {generateWithGPT}
}