import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
import HomeCards from "./components/HomeCards";
import UnderCarousel from "./components/UnderCarousel";
import ListingCard1, { houseCardObj } from "./components/ui/ListingCard1";

const house1: houseCardObj = {
  price: "$1,400,000",
  bedrooms: "2",
  bathrooms: "3",
  footage: "3,500",
  address: "41 Alexander Drive,\bTuxedo Park, New York 10987",
};

export default function Home() {
  return (
    <div className="  w-full ">
      
      
      <div className="sticky z-[600] top-0">
      <Navbar />
      <div className="relative  items-center">
        <div className="absolute top-0 left-0 right-0 z-10 p-2 bg-black bg-opacity-75">
          <ListingSearchBar />
        </div>
       
      </div>
      
      </div>
      <ListingCarousel />
     
      <UnderCarousel />
      <div className="pl-5 mb-10">
        {/* <ListingCard1 house={house1} /> */}
      </div>
    </div>
  );
}
