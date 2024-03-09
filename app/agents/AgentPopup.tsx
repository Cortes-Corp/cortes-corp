import Image from "next/image";
export type Agent = {
  name: string;
  cell: string;
  office: string;
  email: string;
  bio: string;
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
      <div className="flex-col absolute z-[100] inset-0 m-auto text-left bg-black bg-opacity-[40%]  w-screen h-screen">
        <div className="flex bg-white border w-sreen h-screen   overflow-scroll m-auto">
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
                  <p key={index}>
                    {section} <br /> <br />
                  </p>
                );
              })}
            </div>
            <button
                type="button"
                className="text-red-600 border border-red-600 hover:text-white bg-white hover:bg-red-600 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600 dark:focus:ring-red-700 self-center transition-all duration-300">
                CONTACT
              </button>
          </div>
        </div>
      </div>
    )
  );
}
