"use server";
import { prisma } from "@/app/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const AddCard = async (text: string, column: string) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  try {
    const newCard = await prisma.task.create({
      data: {
        column,
        title: text,
        user_id: user?.id,
      },
    });
    return newCard;
  } catch (error) {
    console.log(error);
    return {
      error,
    };
  }
};
