"use client";
import { MutableRefObject } from "react";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Avatar, AvatarImage } from "@/app/components/ui/avatar";
import { useEffect, useState, useRef } from "react";
import { useRooms } from "@/app/state/useChats";
import supabase from "@/app/db/supabaseInstace";
import { getMessages, getRooms } from "../chat-actions/actions";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import ClipLoader from "react-spinners/ClipLoader";
export type Message = {
  id: string;
  created_at: Date;
  text: string | null;
  is_edited: boolean | null;
  sent_by: string | null;
  imgURL: string;
  chat_room_id: string;
};
interface Props {
  chatRoom: string;
}
export default function Messages({ chatRoom }: Props) {
  const { user } = useKindeBrowserClient();
  const chatRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>();
  const [fetchMessages, setFetchMessages] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { refetchRoom, setRefetchRoom } = useRooms();

  useEffect(() => {
    const getRoomMessages = async () => {
      const res = await getMessages(chatRoom);
      if (!Array.isArray(res)) {
        console.error("unable to get messages");
        throw new Error("unable to get messages");
      }
      const rooms = await getRooms();
      setMessages(res);
    };
    getRoomMessages();
  }, [fetchMessages]);
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
    });
  }, [messages]);


  useEffect(() => {
    supabase
      .channel("message_changes")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "message",
        },

        (payload) => {
          console.log("")
          setFetchMessages((fetchMessages) => !fetchMessages);
          setRefetchRoom(!refetchRoom);
        }
      )
      .subscribe();
  }, []);


  return (
    <div ref={chatRef} className="w-full overflow-y-scroll h-[80vh]">
      {messages &&
        messages.map((message) => {
          return (
            <div
              key={Math.random() * 1243234423234}
              className="flex m-4 text-white">
              <div
                className={` w-full flex ${
                  message.sent_by !== user?.id ? "justify-start" : "justify-end"
                }`}>
                <div className="flex gap-2">
                  <p
                    className={` w-fit p-3 rounded-lg flex ${
                      message.sent_by !== user?.id
                        ? "justify-start bg-slate-100 text-black"
                        : "justify-end bg-red-500"
                    }`}>
                    {message.text}
                  </p>
                  <div>
                    {message.sent_by !== user?.id && (
                      <Avatar>
                        <AvatarImage
                          src={message.imgURL}
                          alt="profile-pic"></AvatarImage>
                      </Avatar>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
