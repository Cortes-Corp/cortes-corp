import { NextRequest } from "next/server";
import Agent from "./agent-controller";

export const GET = async (req: NextRequest) => await Agent.read(req);
export const POST = async (req: NextRequest) => await Agent.create(req)
export const DELETE = async (req: NextRequest) => await Agent.destroy(req)