import { NextRequest } from "next/server";
import Agent from "./agent-controller";

export const GET = async (req: NextRequest) => await Agent.read(req);