

interface InitializationProps{
    continous: boolean,
    lang: string,
    interimResults: boolean,
    maxAlternatives: number,
}
export function useSpeechRecognition({continous, lang, interimResults, maxAlternatives}:InitializationProps){

   const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
const recognition = new SpeechRecognition();

    recognition.continuous = continous;
    recognition.lang = lang;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

  function run(){
   return new Promise((resolve, reject)=>{
          recognition.start();
        recognition.onresult = (event:any) => {
  const text = String(event.results[0][0].transcript);
  console.log(`Confidence: ${event.results[0][0].confidence}`);
 resolve(text)

 
};
recognition.onerror  = (event:any)=>{
    reject(event.error)
}


   })
  



    }

    async function startSpeechRecognition(){
        try{
            const text = String(await run());
            return text
        }
        catch(error){
            console.log(error)
            
         
        }

    }

    return {startSpeechRecognition}
   
    
}