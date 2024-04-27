import Navbar from "@/app/components/Navbar";

import Image from "next/image";


interface PageProps {
  params: any;
}
interface Agent {
  id: number;
  name: string;
  bio: string;
  src: string;
  cell: string;
  email: string;
  office: string;
}

const getAgents = async () => {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${BASE_URL}/api/agent`);
  if (!res.ok) {
    throw new Error("Failed to fetch agents");
  }

  return res.json()
};

export default async function page({ params }: PageProps) {
  
  const agents: Array<Agent> = await getAgents();
  console.log("agents: ", agents)
  const agent = agents[params.person];
  
  if (agent)
    return (
      <div className="flex-col absolute pt-[4rem] z-[100] inset-0 m-auto text-left   w-screen h-screen">
        <div className="flex bg-white  w-screen h-screen   overflow-scroll m-auto">
          <div className="    pb-2 items-center sticky top-0  bg-white  mx-auto pt-6">
            <div className="flex    flex-col">
              <div className="    justify-center items-center pl-5  overflow-hidden w-[32rem] h-[35rem] ">
                <Image
                  src={agent.src}
                  alt={agent.name}
                  width={500}
                  height={500}
                  objectFit="cover"
                  className="scale-[1] "
                />
              </div>
            </div>
            <div className={`flex flex-col items-center`}></div>
          </div>
          <div className="    w-[80%] h-[screen]  px-[10%] pt-10 ">
            <div className="pb-10 flex items-center justify-between">
              <div>
                <div className="border-b border-[0.3rem]  mt-5 mb-5 w-[15rem]  border-red-600"></div>
                <h1 className="text-[3rem] font-light">{agent.name}</h1>
                <h1 className="text-[1.3rem] text-red-600">
                  Real Estate Agent
                </h1>
              </div>
              <div className="pt-10">
                <p>
                  <span className="font-bold">Cell:</span> {agent.cell}
                </p>
                <p>
                  <span className="font-bold">Office:</span> {agent.office}
                </p>
                {agent.email && (
                  <p>
                    <span className="font-bold">Email:</span> {agent.email}
                  </p>
                )}
              </div>
            </div>
            <div className="flex-col gap-[5rem]">
              {agent.bio.split("\n").map((section: string, index: number) => {
                return (
                  <p className="font-light" key={index}>
                    {section} <br /> <br />
                  </p>
                );
              })}
            </div>
            <button
              type="button"
              className="text-red-600 border border-red-600 hover:text-white bg-white hover:bg-red-600 font-medium text-sm px-5 py-2.5 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600  self-center transition-all duration-300">
              CONTACT
            </button>
          </div>
        </div>
      </div>
    );
}
