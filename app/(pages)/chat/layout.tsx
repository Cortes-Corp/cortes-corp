import Chatbar from "./[chatroom]/chat-components/ChatBar";
export default function ChatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Chatbar>{children}</Chatbar>
      </body>
    </html>
  );
}
