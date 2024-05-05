import { NextRequest } from "next/server";
import Listing from './listing-controllers'

// export const GET = async (req: NextRequest) => await Li.read(req);
export const POST = async (req: NextRequest) => await Listing.create(req)
// export const DELETE = async (req: NextRequest) => await Agent.destroy(req)
// export const PUT = async (req: NextRequest) => await Agent.update(req)