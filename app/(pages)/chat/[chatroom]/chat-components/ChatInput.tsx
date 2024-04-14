"use client";
import { Input } from "@/app/components/ui/input";
import { createMessage } from "../chat-actions/actions";
interface Props {
  chatRoom: string
}
export default function ChatInput({chatRoom}: Props) {
  const handleSendMessage = async (text: string) => {
    const res = await createMessage(text, chatRoom);
    console.log(res);
  };
  return (
    <div className="p-5">
      <Input
        placeholder="send message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
          }
        }}></Input>
    </div>
  );
}
