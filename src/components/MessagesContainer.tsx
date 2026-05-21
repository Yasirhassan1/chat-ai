import { MessageBox } from "./MessageBox"
import { type Message } from "../types";

interface MessagesProps {
    messages: Message[],

}

export function MessagesContainer({ messages }: MessagesProps) {
    return (
        <div className="messageContainer flex flex-col gap-6 ml-0 p-5 pb-[120px] md:ml-[270px]">
            {
                messages.map((cur, ind) => (
                    <MessageBox key={ind} message={cur} />
                ))
            }
        </div>
    )
}