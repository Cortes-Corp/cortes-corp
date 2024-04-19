import ChatInput from "./chat-components/ChatInput";
import Messages from "./chat-components/Messages";

interface Props {
  params: { chatroom: string };
}
export default function Chat({ params }: Props) {
  const chatRoom = params.chatroom;
  
  

  return (
    <div className="flex justify-end flex-col h-full">
      <Messages  chatRoom={chatRoom}></Messages>
      <ChatInput  chatRoom={chatRoom}></ChatInput>
    </div>
  );
}
