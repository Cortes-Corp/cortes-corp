import Navbar from "../components/Navbar";
import Image from "next/image";
import AgentPopup from "./AgentPopup";
export default function Agents() {
  const agents = [
    {
      name: "Cathia Lhanat",
      cell: "(347)-993-2555",
      office: "(516)-620-9059",
      email: "ckhanat@yahoo.com",
      src: "/cathia.png", 
      width: 80, 
      height: 80,
    },
    {
      name: "Humna Imran",
      cell: "(516)-405-9640",
      office: "(516)-292-2131",
      email: "humna.cortescorp@gmail.com",
      src: "/humna.png", 
      height: 80,
      width: 80
    },
  ];

  return (
    <div>
      <Navbar />

      <div className="p-5 flex flex-col items-center">
        <h1 className="text-3xl">Agents</h1>
        <div>
          <AgentPopup></AgentPopup>
        </div>
        <ul className="mt-16 flex flex-col gap-10">
          {agents.map((agent, index) => (
            <li
              key={index}
              className="w-[96vw] sm:w-[34rem] bg-slate-50 p-5 rounded-xl flex justify-around items-center gap-20">
              <div className="flex flex-col items-center">
                <div className="flex justify-center items-center rounded-full overflow-hidden w-20 h-20">
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
              <div className="flex flex-col items-center">
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
                <button className="bg-red-600 mt-2 text-white p-1 px-2 rounded-md hover:bg-red-700 transition duration-300">
                  More Info
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
