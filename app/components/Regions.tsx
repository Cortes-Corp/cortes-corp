import Image from "next/image";
import RegionCard from "./ui/regionCard";

export type Region = {
    text: string;
    src: string
}
const regions = [
    {
      text: "Queens",
      src: "/queens.jpg",
    },
    {
      text: "Brooklyn",
      src: "/brooklyn.jpg",
    },
    {
      text: "Suffolk County",
      src: "/suffolk.jpg",
    },
    {
      text: "Nassau County",
      src: "/nasu.jpg",
    },
  ];
function Regions() {
  return (
    <div className="w-[90%] m-auto pt-10">
        <h1 className="text-[1.7rem] mt-12 text-gray-800 font-medium pb-5">
          Our Regions
        </h1>
        <div className="flex  gap-5 justify-center ">
          {regions.map((region: Region) => {
            return (
              <RegionCard src={region.src} text={region.text} />
            );
          })}
        </div>
        <h1 className="pt-10 text-[1.5rem] font-semibold text-red-600">
          Looking Beyond Our Main Regions?
        </h1>
        <p className="text-gray-800">
          We're ready to help anywhere.{" "}
          <span>
            <a className="underline cursor-pointer">Contact us</a>
          </span>{" "}
          to explore more opportunities.
        </p>
      </div>
  )
}

export default Regions