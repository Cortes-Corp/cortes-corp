"use client";
import { Input } from "@/app/components/ui/input";
import { createMessage } from "../chat-actions/actions";
import { revalidatePath } from "next/cache";
import { useState, useRef } from "react";
export interface Props {
  chatRoom: string;
}
export default function ChatInput({ chatRoom }: Props) {
  const [text, setText] = useState("");
  
  const handleSendMessage = async (message: string) => {
    const res = await createMessage(message, chatRoom);
    setText("");
    console.log(res);
  };

 

  return (
    <div className="p-5">
      <Input
        
        placeholder="send message"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
          }
        }}></Input>
    </div>
  );
}
