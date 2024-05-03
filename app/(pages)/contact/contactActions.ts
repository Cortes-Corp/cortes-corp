"use server";
import { prisma } from "@/app/db/db";
interface FormData {}

export const submitRequest = async (data: any) => {
  try {
    const newContactRequest = await prisma.contact_request.create({
      data: data,
    });
    return newContactRequest;
  } catch (err) {
    console.error(err);
    return {
      err: err,
    };
  }
};
