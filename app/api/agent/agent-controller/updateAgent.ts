import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";
import { extractFilePath } from "./deleteAgent";
import { arrayBuffer } from "stream/consumers";
export interface FormDataObject {
  name: string;
  email: string;
  cell: string;
  office: string;
  bio: string;
  img?: File | null;
}

export default async function updateAgent(req: NextRequest) {
  const data = await req.formData();
  const id = data.get("id") as string;
  const oldSrc = data.get("oldSrc") as string;

  const agent: FormDataObject = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    cell: data.get("cell") as string,
    office: data.get("office") as string,
    bio: data.get("bio") as string,
  };
    let img = data.get("img");
    console.log("img:", img)

    if (img instanceof File) {
    const bytes = await img.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = img.type;
        const fileName = img.name;
        console.log("old source: ", oldSrc)
    const oldFilePath = extractFilePath(oldSrc) as string;

    const { error } = await supabase.storage
      .from("agentImages")
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

    const bucketName = "agentImages";
    const filePath = `uploads/${fileName}`;
        const supabaseUrl = process.env.SUPABASE_URL;
      
    const projectID = supabaseUrl?.split(".")[0].split("//")[1];
    const fileUrl = `https://${projectID}.supabase.co/storage/v1/object/public/${bucketName}/${filePath}`;

    try {
      const newAgent = await prisma.agent.update({
        where: { id: parseInt(id) },

        data: {
          ...agent,
          src: fileUrl,
        },
      });
      deleteOldSrc(oldFilePath);
      return new Response(JSON.stringify(newAgent), {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: err }), {
        status: 500,
      });
    }
  } else {
    try {
      const newAgent = await prisma.agent.update({
        where: { id: parseInt(id) },
        data: {
          ...agent,
        },
      });
      return new Response(JSON.stringify(newAgent), {
        status: 200,
      });
    } catch (err) {
      console.error(err);
      return new Response(JSON.stringify({ error: err }), {
        // More informative error
        status: 500,
      });
    }
  }
}

async function deleteOldSrc(oldSrc: string) {
  const oldFilePath = extractFilePath(oldSrc);
  if (oldFilePath) {
    const { error } = await supabase.storage
      .from("agentImages")
      .remove([oldFilePath]);

    if (error) {
      console.error("Error deleting the file:", error);
      return new Response(JSON.stringify({ error: error }), {
        status: 500,
      });
    }
  }
}
