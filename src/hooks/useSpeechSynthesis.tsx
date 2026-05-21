export function useSpeechSynthesis(){
    const SpeechSynthesis = (window as any).SpeechSynthesisUtterance;
   
   
    function speakTheText(text:string){
         const utterance = new SpeechSynthesis(text)
 
           utterance.lang = 'en-US'
    utterance.pitch = 1.2;
    utterance.volume = 1;  
 


utterance.onend = () => {
    console.log('Speech synthesis has ended');
};
utterance.onerror = (event:any) => {
    console.error('Speech synthesis error detected: ' + event.error);
};

window.speechSynthesis.speak(utterance);
  
    }
    return {speakTheText}
}