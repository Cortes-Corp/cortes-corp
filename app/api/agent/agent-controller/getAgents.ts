import { prisma } from "@/app/db/db";
import { NextRequest, NextResponse } from "next/server";

export default async function getAgents(req: NextRequest) {
  try {
    const agents = await prisma.agent.findMany();
   
    return NextResponse.json(agents);
  } catch (error) {
    console.error("error fetching agents",error);
    return new Response(JSON.stringify({ error }), {
      status: 500,
    });
  }
}
