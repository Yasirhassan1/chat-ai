import { PromptInput } from './components/PromptInput'
import { MessagesContainer } from './components/MessagesContainer'
import { useEffect, useState } from 'react'
import { useAI } from './hooks/useAI'
import { type Model, type Message} from "./types"
import { Loader } from './components/Loader'
import { SideBar } from './components/SideBar'
import { useIsloggedIn } from './hooks/useIsLoggedIn.js'
// import { useFirestore } from './hooks/useFirestore.js'
// import { PopUp } from './components/PopUp.js'
// import { CopyProvider } from './context/clipboard.js'
// import { useContext } from 'react'
// import { CopyContext } from './context/clipboard.js'

function App() {
  // const { isCopied } = useContext(CopyContext);


  const {isLoggedIn} = useIsloggedIn();
  useEffect(()=>{
    isLoggedIn()
  }, [])


    const [ai, setAI] = useState<Model>('gemini');
    const [isLoading, setIsLoading] = useState<boolean>(false)
   const {generate} = useAI(ai);

  const [messages, setMessages] = useState<Message[]>([])

  useEffect(()=>{
   async function gen(){
    try{
      const aiRes = await generate(messages[messages.length-1].text)
      setMessages([...messages, {text: aiRes.text, type: aiRes.model as Model}]) 
     
      setIsLoading(false)
      // console.log(aiRes.text)
    }
    catch(error:unknown){
      setIsLoading(false)
       setMessages([...messages, {text: "Your free trail period is over", type: ai}])
    }

   }  
   if(messages.length>0){
    // storeData("usersMessagesCollection", {
    //   uid: localStorage.getItem("userId"),
    //    messages: messages[messages.length-1]
    //   })
    }

   if(messages.length%2 !== 0){
  gen()
   }
   window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
});
  }, [messages])

  return (
    // <CopyProvider>
   <div className='relative'>
  
    {
      isLoading && (<div className='fixed z-40 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'><Loader/></div>)
    }
      <SideBar/>
      
    <MessagesContainer messages = {messages}/>
    
    <PromptInput messages={messages}  setMessages = {setMessages} ai={ai} setAI={setAI} setIsLoading={setIsLoading}/> 
        {/* {
    isCopied && <PopUp message='Copied to clipboard' variant='success' showFor={2000}/>
   } */}
   </div>
  
   
   
 
  )
}

export default App
