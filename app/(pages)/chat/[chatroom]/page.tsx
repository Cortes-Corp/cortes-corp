import ChatInput from "./chat-components/ChatInput";
interface Props {
  params: { chatroom: string };
}
export default function Chat({ params }: Props) {
  const chatRoom = params.chatroom;

  return (
    <div className="flex justify-end flex-col h-full">
      <ChatInput chatRoom={chatRoom? chatRoom : "123"}></ChatInput>
    </div>
  );
}
