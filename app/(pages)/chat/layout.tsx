import Chatbar from "./[chatroom]/chat-components/ChatBar";
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
