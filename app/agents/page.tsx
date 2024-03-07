'use client'
import Navbar from "../components/Navbar";
import Image from "next/image";
import AgentPopup from "./AgentPopup";
import { useState } from "react";
import { Agent } from "./AgentPopup";
export default function Agents() {
  const [agent, setAgent] = useState<Agent | null>(null)
   const agents = [
    {
      name: "Cathia Lhanat",
      cell: "(347)-993-2555",
      office: "(516)-620-9059",
      email: "ckhanat@yahoo.com",
      bio: "Cathia Khanat is an exceptional real estate professional who consistently demonstrates her expertise, strong negotiation skills, and unmatched dedication to achieving outstanding results for her clients. With over 20 years of experience in the industry, Cathia has developed an extensive network and a deep understanding of the local real estate market. Known for her exceptional customer service and responsiveness, Cathia puts her client’s needs and goals at the forefront of every transaction. Whether buying or selling a property, she takes the time to carefully listen to her clients, understand their unique requirements, and provide them with tailored solutions.\nOne of Cathias key strengths is her ability to accurately analyze market trends and price properties competitively. By conducting thorough market research and utilizing cutting-edge technologies, she ensures that her clients receive the maximum value for their investment. Throughout the sales process, Cathia remains proactive in her communication, keeping clients updated on the progress of their transactions and providing detailed insights and recommendations. She handles negotiations with finesse and determination, consistently achieving favorable outcomes that exceed client expectations.\nCathias success in the real estate industry can be attributed to her strong work ethic, attention to detail, and utmost professionalism. She is a dependable and trustworthy partner, guiding clients through the complex process of buying or selling a property with ease. With a proven track record of achieving exceptional sales results, Cathia Khanat is the go-to real estate expert for anyone seeking a top-tier professional to navigate the intricacies of the market and ensure a seamless and rewarding real estate experience.",
      src: "/cathia.png", // Make sure the path is correct and the image exists in your public directory
      width: 80, // Example width, adjust as needed
      height: 80, // Example height, adjust as needed to maintain the aspect ratio
    },
    {
      name: "Humna Imran",
      cell: "(516)-405-9640",
      office: "(516)-292-2131",
      email: "humna.cortescorp@gmail.com",
      bio:"Meet Humna Imran – your dedicated real estate expert renowned for personalized service and unmatched market knowledge. With a passion for exceeding expectations, Humna offers tailored solutions, expert negotiation, and unwavering integrity. Whether buying, selling, or investing, trust Humna to guide you to success in the competitive real estate market.",
      src: "/humna.png", // Make sure the path is correct and the image exists in your public directory
      width: 80, // Adjust as needed
      height: 80, // Adjust as needed
    },
  ];

  
  return (
    <div>
      <Navbar />
      <AgentPopup agent={agent} />
      <div className="p-5 flex flex-col items-center">
        <h1 className="text-3xl">Agents</h1>
        <div>
        
        </div>
        <ul className="mt-16 flex flex-col gap-10">
          {agents.map((agent, index) => {
            const [expand, setExpand] = useState(false)
            const handleExpand = () => {
              setAgent(agents[index])
              setExpand(true)
            }
            
              return (
                <li
                
                key={index}
                className={`w-[96vw] sm:w-[34rem] bg-slate-50 p-5     justify-between   transition-all duration-500 rounded-xl shadow flex  gap-20`}>
                <div className="flex flex-col items-center">
                  <div className="flex shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20">
                    <Image
                      src={agent.src}
                      alt={agent.name}
                      width={agent.width}
                      height={agent.height}
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <p className="font-bold text-center">{agent.name}</p>
                </div>
                <div className={`flex flex-col items-center`}>
                  <p >
                    <span className='font-bold'>Cell:</span> {agent.cell}
                  </p>
                  <p>
                    <span className="font-bold">Office:</span> {agent.office}
                  </p>
                  {agent.email && (
                    <p>
                      <span className="font-bold">Email:</span> {agent.email}
                    </p>
                  )}
                  <button onClick={handleExpand} className="bg-red-600 mt-2 text-white p-1 px-2 rounded-md hover:bg-red-700 transition duration-300">
                    More Info
                  </button>
                </div>
                
                
                
              </li>
              )
          })}
        </ul>
        
      </div>
      
    </div>
  );
}
