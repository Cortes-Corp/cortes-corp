import { prisma } from "@/app/db/db";
import supabase from "@/app/db/supabaseInstace";
import { NextRequest } from "next/server";

function extractFilePath(url: string) {
  const parts = url.split("/public/");
  if (parts.length > 1) {
    return parts[1];
  } else {
    console.error("URL does not follow the expected Supabase Storage format.");
    return null;
  }
}

export default async function deleteAgent(req: NextRequest) {
  try {
    const { agentToDelete } = await req.json();
    const { id, src } = agentToDelete;

    const filePath = extractFilePath(src);

    if (filePath) {
      const { error } = await supabase.storage
        .from("agentImages")
        .remove([filePath]);

      if (error) {
        console.error("Error deleting the file:", error);
        return new Response(JSON.stringify({ error: error }), {
          status: 500,
        });
      }
      const deletedAgent = await prisma.agent.delete({
        where: {
          id: id,
        },
      });
      return Response.json({ deleted: deletedAgent });
    } else {
      return new Response(
        JSON.stringify({
          error: "URL does not follow the expected Supabase Storage format.",
        }),
        {
          status: 500,
        }
      );
    }
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err }), {
      status: 500,
    });
  }
}
