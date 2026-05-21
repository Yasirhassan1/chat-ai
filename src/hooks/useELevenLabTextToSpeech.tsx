import { ElevenLabsClient, play } from "@elevenlabs/elevenlabs-js";
// import "dotenv/config";

export function useElevenLabTextToSpeech(){
 const elevenlabs = new ElevenLabsClient({
    apiKey: import.meta.env.VITE_ELEVENLABS_API_KEY
 });
 async function textToSpeech(text:string){
   
const audio = await elevenlabs.textToSpeech.convert(
	"JBFqnCBsd6RMkjVDRZzb", // "George" - browse voices at elevenlabs.io/app/voice-library
	{
		text: text,
		modelId: "eleven_v3",
		outputFormat: "mp3_44100_128",
	},
);
console.log(audio)



// await play(audio);
 }

 return {textToSpeech}



}