import { type Model, type Message } from "../types"
import { IoPaperPlaneSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { useState } from "react";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

interface MessageProp {
    messages: Message[],
    setMessages: React.Dispatch<React.SetStateAction<Message[]>>,
    ai: Model,
    setAI: React.Dispatch<React.SetStateAction<Model>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
}
export function PromptInput({ messages, setMessages, ai, setAI, setIsLoading }: MessageProp) {
    const [inputVal, setInputVal] = useState("")
    const { startSpeechRecognition } = useSpeechRecognition({
        continous: false,
        lang: "en-US",
        interimResults: false,
        maxAlternatives: 1,
    })
    async function submitPrompt(formData: FormData) {
        const prompt = formData.get("prompt")?.toString()
        if (!prompt) return;
        setIsLoading(true)
        setMessages([...messages, { text: prompt, type: "user" }])
        setInputVal('')
    }


    return (
        <div className="fixed w-full md:w-[calc(100%-270px)] right-0 bottom-0 p-2 z-50 bg-white border-l flex items-center gap-3 border-t border-gray-200  justify-center">
            <div className="w-full max-w-3xl items-center border  py-1 px-4 shadow rounded-full border-gray-100 flex items-center justify-center gap-2">
                <select name="" id="" value={ai} onChange={(e) => setAI(e.target.value as Model)} className="p-3   rounded-full text-gray-500">
                    <option value="gemini">Gemini</option>
                    <option value="gpt">GPT</option>
                    <option value="grok">Grok</option>
                    <option value="claude">Claude</option>
                    <option value="auto">Auto</option>
                </select>
                <form action={submitPrompt} className='relative w-full  rounded-full'>
                    <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} type="text" name="prompt" className=' text-gray-500 border-l border-gray-200 p-4 pr-[58px] placeholder:text-text/50   w-full outline-none' placeholder='Write your prompt...' />
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 bg-gray-800 rounded-full  flex items-center justify-center cursor-pointer hover:bg-blue-500 active:scale-75">
                        <IoPaperPlaneSharp className="text-sm text-gray-200" />
                    </button>
                </form>
                <button onClick={async () => {
                    const text = await startSpeechRecognition()
                    if (text) {
                        setInputVal(text)
                    }

                }} className="bg-gray-800  rounded-full p-2.5 text-white hover:bg-blue-500 active:scale-75 cursor-pointer"> 
                    <FaMicrophone className="text-sm cursor-pointer" />
                </button>



            </div>
        </div>
    )
}