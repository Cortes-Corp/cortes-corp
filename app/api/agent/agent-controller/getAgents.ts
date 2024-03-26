import { prisma } from "@/app/db/db";
import { NextRequest } from "next/server";

export default async function getAgents(req: NextRequest) {
  try {
    const agents = await prisma.agent.findMany();
   
    return Response.json(agents);
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error }), {
      status: 200,
    });
  }
}
