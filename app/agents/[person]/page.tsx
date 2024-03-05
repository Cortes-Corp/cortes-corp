import Navbar from "@/app/components/Navbar";
import data from "./data.json";
import Image from "next/image";
interface PageProps {
  params: { person: string };
}
interface PersonInfo {
  fullName: string;
  bio: string;
  img: string;
}

interface Data {
  [key: string]: PersonInfo;
}
function page({ params }: PageProps) {
  const agent = (data as Data)[params.person];
  if (agent) {
    return (
      <div>
        <Navbar />
        
        <div className="flex  w-full gap-0 pt-10">
          <div className="w-[40%] pt-[2rem] m-auto">
            <h1 className="text-[3rem]">{agent.fullName.toUpperCase()}</h1>
            <h3 className="text-[0.9rem]">{agent.bio}</h3>
          </div>
          <div className=" pr-[10%]">
            <Image
              src={agent.img}
              alt={agent.fullName}
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-[100%]"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default page;
