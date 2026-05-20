import { MdAssistant } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { chats } from "../chats"
import { FaRegUserCircle } from "react-icons/fa";
import { useSignOut } from "../hooks/useSignOut";
import { MdLogout } from "react-icons/md";
export function SideBar() {
    const {logOut} = useSignOut("/sign-up")
    return (
        <aside className=" fixed left-0 z-40 h-screen   flex-col gap-3 bg-white shadow hidden md:flex p-4 max-w-[270px] w-full">
            <div className="top flex justify-between gap-4">
                <MdAssistant className="text-2xl" />

            </div>
            <button className="flex gap-4  items-center bg-gray-200 p-2 rounded-lg cursor-pointer mt-3 hover:bg-gray-300">
                <IoCreateOutline className="text-2xl" />
                <span className="font-semibold">New Chat</span>


            </button>
            <div className="recentchats border border-gray-200 p-3 rounded-xl mt-6 h-[calc(100%-200px)]">
                <strong className="text-gray-500">Recent chats</strong>
                <div className="chats flex flex-col gap-4 mt-3 overflow-auto h-[calc(100%-46px)] p-1">
                    {
                        chats.map((cur) => (
                            <div key={cur.id} className="bg-gray-200 p-2 rounded-lg hover:bg-gray-300 cursor-pointer">
                                <p className="text-gray-500 truncate text-sm">{cur.title}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className="userlogin flex flex-col gap-3 mt-auto">
                <div className="w-full flex gap-3">
                <FaRegUserCircle className="text-2xl text-gray-600"/>
                <span className="text-sm text-gray-500">yasuhassan7896@gmail.com</span>
                </div>
                <button className="flex gap-3 items-center text-gray-500 cursor-pointer" onClick={()=>{
                   logOut()
                }} >
                    <MdLogout className="text-lg text-gray-500"/>
                    logout</button>
            </div>
        </aside>
    )
}