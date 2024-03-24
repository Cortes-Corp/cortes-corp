"use client";
import { useAgents } from "@/app/state/useAgents";
import { Agent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function AgentCards() {
  const { agents, fetchAgents } = useAgents();

  useEffect(() => {
    fetchAgents();
  }, []);
  if (!agents) return;

  return (
    <div className=" ">
      <div className="p-5 flex flex-col   ">
        <div className="flex gap-5 items-center">
          <h1 className="text-xl font-medium">Agents</h1>
          <button className=" rounded-md bg-red-600 text-white p-2 px-3  font-medium text-sm hover:bg-red-700 transition-all duration-300">
            Add a new Agent
          </button>
        </div>
        <div></div>
        <ul className="mt-16 flex items-center  gap-10">
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
                  <button className="bg-red-600 rounded-md mt-3 font-medium p-1 px-3 text-sm  text-white  hover:bg-red-700 transition duration-300">
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
