"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/app/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { createKindeManagementAPIClient } from "@kinde-oss/kinde-auth-nextjs/server";
export const createMessage = async (text: string, roomID: string) => {
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
    const chatRoom = await prisma.chat_room.update({
      where: {
        id: roomID,
      },
      data: {
        last_commented_at: new Date(),
      },
    });
    revalidatePath(`/chat`);
    return message;
  } catch (err) {
    console.error("err: unable to save message", err);
    return {
      error: err,
    };
  }
};

export const getMessages = async (roomID: string) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) return { error: "unauthorized" };
  try {
    const messages = await prisma.message.findMany({
      where: {
        chat_room_id: roomID,
      },
    });
    messages.sort((a, b) => a.created_at.getTime() - b.created_at.getTime());
    return messages;
  } catch (err) {
    console.error(err);
    return {
      error: err,
    };
  }
};

export const getRooms = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) return { error: "unauthorized" };
  try {
    const rooms = await prisma.chat_room.findMany({
      where: {
        members: {
          has: user.id,
        },
      },
      orderBy: {
        last_commented_at: "desc",
      },
    });
    console.log(rooms);
    return rooms;
  } catch (err) {
    return { error: err };
  }
};

export const getUsers = async () => {
  const apiClient = await createKindeManagementAPIClient();
  const users = await apiClient.usersApi.getUsers();
  if (users) {
    console.log("users:", users.users);
    return users.users;
  }
  return { error: "unable to get users" };
};

export const createNewRoom = async (userId: string, othersID: string) => {
  try {
    const chatRoom = await prisma.chat_room.create({
      data: {
        members: [userId, othersID],
      },
    });
    return chatRoom;
  } catch (err) {
    alert(err);
  }
};
