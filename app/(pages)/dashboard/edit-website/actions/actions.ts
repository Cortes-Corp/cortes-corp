'use server'
import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";
import { arrayBuffer } from "stream/consumers";
import { ListingFormData } from "../AddListingForm";
export default async function createListing(req: NextRequest) {
  const data = await req.formData();


    interface FormDataObject {
    address: string;
    price: string;
    beds: string;
    footage: string;
    baths: string;
  }
 

  const listing: FormDataObject = {
    price: data.get("price") as string,
    beds: data.get("beds") as string,
    baths: data.get("baths") as string,
    footage: data.get("footage") as string,
    address: data.get("address") as string,
  };

  const imgs = data.getAll("imgs");

  imgs.forEach(async (file) => {
    if (file instanceof File) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const mimeType = file.type;
      const fileName = file.name;

      
      const { error } = await supabase.storage
      .from("listingPhotos")
      .upload(`uploads/${fileName}`, buffer, {
        contentType: mimeType,
        upsert: true,
      });
      if (error) {
        console.error(error);
        return new Response("Failed to upload file", {
          status: 500,
        });
      }
      const bucketName = "listingPhotos";
      const filePath = `uploads/${fileName}`;
      const supabaseUrl = process.env.SUPABASE_URL;
      const projectID = supabaseUrl?.split(".")[0].split("//")[1];
      const fileUrl = `https://${projectID}.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;
        try {
            const newListing = await prisma.listing.create({
            data: {
                ...listing,
                src: fileUrl,
            },
            });
            return new Response(JSON.stringify(newListing), {
            status: 200,
            });
        } catch (err) {
            console.error(err);
            return new Response(JSON.stringify({ error: err }), {
            status: 500,
            });
        }
    }
  });

  

  


  try {
    const newAgent = await prisma.agent.create({
      data: {
        ...agent,
        src: fileUrl,
      },
    });
    return new Response(JSON.stringify(newAgent), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
}