import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";
import { arrayBuffer } from "stream/consumers";
interface FormDataObject {
    name: string;
    email: string;
    cell: string;
    office: string;
    bio: string;
    img?: File | null; // Optional file for the 'img' field
  }
export default async function createAgent(req: NextRequest) {
  const data = await req.formData();

  const agent: FormDataObject = {
    name: data.get("name") as string,
    email: data.get("email") as string,
    cell: data.get("cell") as string,
    office: data.get("office") as string,
    bio: data.get("bio") as string,
  };
  const img = data.get("img") as File;

  const bytes = await img.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const mimeType = img.type;
  const fileName = img.name;

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
