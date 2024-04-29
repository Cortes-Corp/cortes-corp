
import Chatbar from "./[chatroom]/chat-components/ChatBar";
import { useState } from "react";
export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <div>
      <Chatbar>{children}</Chatbar>
    </div>
  );
}
