"use server";
import { prisma } from "@/app/db/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import contactRequests from "./task-components/ContactRequests";
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
    console.log(cards);
    return cards;
  } catch (error) {
    console.error("ERROR:", error);
    return null;
  }
};

export const updateCard = async (id: string, column: string) => {
  try {
    const updatedCard = await prisma.task.update({
      where: {
        id,
      },
      data: {
        column,
      },
    });
    return updatedCard;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteCard = async (id: string) => {
  try {
    const deletedCard = await prisma.task.delete({
      where: {
        id,
      },
    });
    return deletedCard;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getContactRequests = async () => {
  try {
    const contactRequests = await prisma.contact_request.findMany();
    return contactRequests;
  } catch (error) {
    return null
  }
};

export const claimContactRequests = async (id: string) => {
  const user = await getUser();
  try {
    const updatedReq = await prisma.contact_request.update({
      where: {
        id,
      },
      data: {
        claimed_by: user?.id,
      },
    });
    return updatedReq
  } catch (error) {
    console.log(error)
    return null
  }
};
