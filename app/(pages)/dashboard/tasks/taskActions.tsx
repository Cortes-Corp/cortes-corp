"use server";
import { prisma } from "@/app/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
const { getUser } = getKindeServerSession();


export const createCard = async (text: string, column: string) => {
  const user = await getUser();
  if (!user) return;

  try {
    const newCard = await prisma.task.create({
      data: {
        column,
        title: text,
        user_id: user.id,
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

export const GetCards = async () => {
  const user = await getUser();
  try {
    const cards = await prisma.task.findMany({
      where: {
        user_id: user?.id,
      },
    });
    console.log(cards)
    return cards;
  } catch (error) {
    console.error("ERROR:", error)
    return null
  }
};
