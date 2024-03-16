import { Agent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

const getAgents = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/agent`);
  if (!res.ok) {
    throw new Error("Failed to fetch agents");
  }
  return res.json();
};
export default async function AgentCards() {
  const agents: Array<Agent> = await getAgents();

  return (
    <div className=" ">
      <div className="p-5 flex flex-col items-center">
        <h1 className="text-xl">AGENTS</h1>
        <div></div>
        <ul className="mt-16 flex  gap-10">
          {agents.map((agent, index) => {
            return (
              <li
                key={index}
                className=" transition-all duration-500   flex-col  gap-20">
                <div className="flex   flex-col items-center">
                  <div className="flex shadow-md border-[5px] border-white z-[200]  justify-center  items-center rounded-full overflow-hidden w-[5rem] h-[5rem]">
                    <Image
                      src={agent.src}
                      alt={agent.name}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="rounded-full scale-[1.35]"
                    />
                  </div>
                  <p className="font-medium text-md text-center">
                    {agent.name}
                  </p>
                  <button className="bg-red-600 font-medium p-1 px-2 text-sm  text-white  hover:bg-red-700 transition duration-300">
                    More Info
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
