"use client"

import Navbar from "../components/Navbar";
import Image from "next/image";
import AgentPopup from "./AgentPopup";
import { useEffect, useState } from "react";
import { Agent } from "./AgentPopup";
import Link from "next/link";
import { useAgents } from "../state/useAgents";



export default  function Agents() {
  const { agents, fetchAgents} = useAgents();

  useEffect(() => {
    fetchAgents()
  })
  if (!agents) return;

  return (
    <div className=" bg-gray-100 h-screen ">
      <div className="p-5 flex flex-col items-center">
        <h1 className="text-[2rem]">AGENTS</h1>
        <div></div>
        <ul className="mt-16 flex  gap-10">
          {agents.map((agent, index) => {
            return (
              <li
                key={index}
                className={` w-[19rem]  hover:shadow-lg relative py-20 pt-15  bg-white p-5     justify-between   transition-all duration-500   flex-col  gap-20`}>
                <div className="absolute translate-y-[-5rem] translate-x-[-1.2rem] bg-red-600 h-[30%] w-full">
                  {" "}
                </div>
                <div className="flex mb-5 gap-2  flex-col items-center">
                  <div className="flex shadow-md border-[5px] border-white z-[200]  justify-center  items-center rounded-full overflow-hidden w-[9rem] h-[9rem]">
                    <Image
                      src={agent.src}
                      alt={agent.name}
                      width={100}
                      height={100}
                      objectFit="cover"
                      className="rounded-full scale-[1.35]"
                    />
                  </div>
                  <p className="font-medium text-[1.3rem] text-center">
                    {agent.name}
                  </p>
                </div>
                <div className={`flex flex-col text-[0.9rem] items-center`}>
                  <p>
                    <span className="font-medium ">Cell:</span> {agent.cell}
                  </p>
                  <p>
                    <span className="font-medium">Office:</span> {agent.office}
                  </p>
                  {agent.email && (
                    <p>
                      <span className="font-medium">Email:</span> {agent.email}
                    </p>
                  )}
                  <Link href={`/agents/${index}`}>
                    <button className="bg-red-600 mt-2 font-medium translate-y-[1rem] scale-[1.1] text-white py-[0.4rem] px-4  hover:bg-red-700 transition duration-300">
                      More Info
                    </button>
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
