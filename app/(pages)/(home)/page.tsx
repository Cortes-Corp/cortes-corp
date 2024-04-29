import Image from "next/image";
import ListingSearchBar from "../../components/ListingSearchBar";
import Navbar from "../../components/Navbar";
import ListingCarousel from "../../components/ListingCarousel";
import HomeCards from "../../components/HomeCards";
import UnderCarousel from "../../components/UnderCarousel";
import ListingCard1, { houseCardObj } from "../../components/ui/ListingCard1";
import SlideText from "../../components/SlideText";
import FeaturedHouses from "./home-components/FeaturedHouses";
import HomeContent from "./home-components/HomeContent";
const houses = [
  {
    src: "https://www.chicagomag.com/wp-content/uploads/2022/08/C202209-312-Bauer-Mansion-exterior.jpg",
    price: "$1,400,000",
    bedrooms: "2",
    bathrooms: "3",
    footage: "3,500",
    address: "41 Alexander Drive,\bTuxedo Park, New York 10987",
  },
  {
    src: "https://www.locationlincoln.com/wp-content/uploads/sites/76/2020/01/House-at-Twilight-Background-Image-1080x675.jpg",
    price: "$2,350,000",
    bedrooms: "5",
    bathrooms: "3",
    footage: "5,000",
    address: "78 Meadow Lane,\bPinebush, New York 10348",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5999034e8419c215258174c7/36be7054-d369-4010-ba10-eac9d3f82fc5/Z72_6081_78_79.jpg",
    price: "$3,200,000",
    bedrooms: "6",
    bathrooms: "4",
    footage: "6,000",
    address: "76 Midwood Drive,\bBridgeport, New York 10987",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5999034e8419c215258174c7/36be7054-d369-4010-ba10-eac9d3f82fc5/Z72_6081_78_79.jpg",
    price: "$3,200,000",
    bedrooms: "6",
    bathrooms: "4",
    footage: "6,000",
    address: "76 Midwood Drive,\bBridgeport, New York 10987",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5999034e8419c215258174c7/36be7054-d369-4010-ba10-eac9d3f82fc5/Z72_6081_78_79.jpg",
    price: "$3,200,000",
    bedrooms: "6",
    bathrooms: "4",
    footage: "6,000",
    address: "76 Midwood Drive,\bBridgeport, New York 10987",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/5999034e8419c215258174c7/36be7054-d369-4010-ba10-eac9d3f82fc5/Z72_6081_78_79.jpg",
    price: "$3,200,000",
    bedrooms: "6",
    bathrooms: "4",
    footage: "6,000",
    address: "76 Midwood Drive,\bBridgeport, New York 10987",
  },
];

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
const mock =
  "https://squarefootphotography.com/wp-content/uploads/2024/01/9-print-SQFT-0058_-scaled.jpg";
export default function Home() {
  return (
    <div className="  w-full ">
      {/* <Navbar /> */}

      <div className=" flex-col justify-center   relative   z-10  ">
        <ListingCarousel />
        <ListingSearchBar />
      </div>
      <div className="w-[90%] m-auto pt-10">
      <h1 className="text-[1.7rem] pb-5">
    Our Regions
  </h1>
        <div className="flex  gap-5 justify-center ">
          {regions.map((region: object) => {
            return (
              <div className=" rounded-md cursor-pointer  overflow-hidden relative w-[21.5rem] h-[6rem]">
                <div>
                <Image
                className="   transform transition-transform duration-300 origin-center"
                  src={region.src}
                  alt="region"
                  layout="fill"
                  objectFit="cover"
                ></Image>
                <div className="absolute inset-0 bg-black bg-opacity-35"></div>
                </div>
                
                <h2 className='absolute text-white text-center inset-0 top-1/3'>{region.text}</h2>
                
              </div>
            );
          })}
        </div>
      </div>

      <FeaturedHouses></FeaturedHouses>
      

      <HomeContent></HomeContent>
    </div>
  );
}
