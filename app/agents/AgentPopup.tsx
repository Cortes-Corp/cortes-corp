
import Image from "next/image"
export type Agent = {
    name: string,
      cell: string,
      office: string,
      email: string,
      src: string, // Make sure the path is correct and the image exists in your public directory
      width: number, // Example width, adjust as needed
      height: number, // Example height, adjust as needed to maintain the aspect ratio
}
interface agentProps {
    agent: Agent | any
}
export default function AgentPopup({agent}: agentProps) {
     return (
        agent && <div
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
         
        </div>
      </div>
    )
    
}