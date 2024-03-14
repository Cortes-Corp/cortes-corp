"use client";
import Navbar from "../components/Navbar";
import Image from "next/image";
import AgentPopup from "./AgentPopup";
import { useState } from "react";
import { Agent } from "./AgentPopup";
import Link from "next/link";

export const agents = [
  {
    name: "Cathia Khanat",
    cell: "(347)-993-2555",
    office: "(516)-620-9059",
    email: "ckhanat@yahoo.com",
    bio: "Cathia Khanat is an exceptional real estate professional with over 20 years of experience, known for her expertise, strong negotiation skills, and dedication to her clients. She has developed an extensive network and understands the local market deeply, always prioritizing her client’s needs in every transaction. Cathia's ability to analyze market trends and price properties effectively ensures maximum value for her clients’ investments. She maintains proactive communication throughout the sales process, offering detailed insights and handling negotiations with finesse to exceed client expectations.\nCathia's success stems from her strong work ethic, attention to detail, and professionalism, making her a dependable partner in navigating the complex real estate market. Her track record of exceptional sales results establishes her as a top-tier real estate expert for those seeking a rewarding property buying or selling experience.",
    src: "/cathia.png", // Make sure the path is correct and the image exists in your public directory
    width: 80, // Example width, adjust as needed
    height: 80, // Example height, adjust as needed to maintain the aspect ratio
  },
  {
    name: "Humna Imran",
    cell: "(516)-405-9640",
    office: "(516)-292-2131",
    email: "humna.cortescorp@gmail.com",
    bio: "Meet Humna Imran – your dedicated real estate expert renowned for personalized service and unmatched market knowledge. With a passion for exceeding expectations, Humna offers tailored solutions, expert negotiation, and unwavering integrity. Whether buying, selling, or investing, trust Humna to guide you to success in the competitive real estate market.",
    src: "/humna.png", // Make sure the path is correct and the image exists in your public directory
    width: 80, // Adjust as needed
    height: 80, // Adjust as needed
  },
];
export default function Agents() {
  const [agent, setAgent] = useState<Agent | null>(null);

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
