"use server";

import { prisma } from "@/app/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export const createMessage = async (
  text: string,
  roomID: string,
) => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user) {
      return { error: "unauthorized" };
    }
    const message = await prisma.message.create({
      data: {
        text: text,
        sent_by: user?.id,
        imgURL:
          user.picture ||
          "https://ih1.redbubble.net/image.1380092762.9137/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
        chat_room_id: roomID,
      },
    });
    return message;
  } catch (err) {
    console.error("err: unable to save message", err);
    return {
      error: err,
    };
  }
};
