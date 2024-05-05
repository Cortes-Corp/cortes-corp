"use server";
import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";
import { File } from "buffer";

export const getHouses = async () => {
  try {
    const houses = await prisma.listing.findMany();
    return houses;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const deleteHouse = async (id: number) => {
  try {
    const deletedHouse = await prisma.listing.delete({
      where: { id },
    });
  } catch (err) {
    console.error(err);
  }
};

// export default async function createListing(formData: FormData) {
//     const data = formData;

//     interface FormDataObject {
//         address: string;
//         price: string;
//         beds: string;
//         footage: string;
//         baths: string;
//         imgs?: File[];
//     }

//     const listing: FormDataObject = {
//         price: data.get("price") as string,
//         beds: data.get("beds") as string,
//         baths: data.get("baths") as string,
//         footage: data.get("footage") as string,
//         address: data.get("address") as string,
//     };

//     const imgs = data.getAll("imgs");
//     let img_arr: string[] = []
//     for (const file  of imgs as any) {
//             const bytes = await file.arrayBuffer();
//             const buffer = Buffer.from(bytes);
//             const mimeType = file.type;
//             const fileName = file.name;

//             const { error } = await supabase.storage
//                 .from("listingPhotos")
//                 .upload(`${fileName}`, buffer, {
//                     contentType: mimeType,
//                     upsert: true,
//                 });
//             if (error) {
//                 console.error(error);
//                 return new Response("Failed to upload file", {
//                     status: 500,
//                 });
//             }
//             const bucketName = "listingPhotos";
//             const filePath = `uploads/${fileName}`;
//             const supabaseUrl = process.env.SUPABASE_URL;
//             const projectID = supabaseUrl?.split(".")[0].split("//")[1];
//             const fileUrl = `https://${projectID}.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;
//             img_arr.push(fileUrl)

//     };

//     try {
//         const newListing = await prisma.listing.create({
//             data: {
//                 ...listing,
//                 imgs: img_arr,
//             },
//         });
//         return new Response(JSON.stringify(newListing), {
//             status: 200,
//         });
//     } catch (err) {
//         console.error(err);
//         return new Response(JSON.stringify({ error: err }), {
//             status: 500,
//         });
//     }

// }
