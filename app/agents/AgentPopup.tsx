import Image from "next/image";
export type Agent = {
  name: string;
  cell: string;
  office: string;
  email: string;
  bio: string
  src: string; // Make sure the path is correct and the image exists in your public directory
  width: number; // Example width, adjust as needed
  height: number; // Example height, adjust as needed to maintain the aspect ratio
};
interface agentProps {
  agent: Agent | any;
}
export default function AgentPopup({ agent }: agentProps) {
  return (
    agent && (
      <div className="flex-col absolute z-[100] inset-0 m-auto text-left bg-black bg-opacity-[40%] pt-[10rem] w-screen h-screen">
        <div className="flex-col bg-white border w-[50%] h-[70%] rounded-[1rem]  overflow-scroll m-auto">
          <div className=" flex pt-5 justify-between pb-2 px-[10%] items-center sticky bg-white top-0 m-auto">
            <div className="flex  flex-col items-center">
              <div className="  shadow-md justify-center items-center rounded-full overflow-hidden w-20 h-20">
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
          <div className=" bg-gray-50 px-[10%] m-auto pt-5 ">
            <p>{agent.bio}</p>
          </div>
        </div>
      </div>
    )
  );
}
