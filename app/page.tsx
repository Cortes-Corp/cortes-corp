import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
import HomeCards from "./components/HomeCards";
import UnderCarousel from "./components/UnderCarousel";
import ListingCard1, { houseCardObj } from "./components/ui/ListingCard1";
import SlideText from "./components/SlideText";

const house1: houseCardObj = {
  src: '/house-1.jpeg',
  price: "$1,400,000",
  bedrooms: "2",
  bathrooms: "3",
  footage: "3,500",
  address: "41 Alexander Drive,\bTuxedo Park, New York 10987",
};

export default function Home() {

  return (
    <div className="  w-full ">
      
      
      
      {/* <Navbar /> */}
      <div className="relative   items-center">
        
        <div className="absolute flex-col justify-center   top-[12rem] left-0 right-0 z-10 p-2 ">
          <SlideText />
          <ListingSearchBar />
        </div>
       
      </div>
      
      <div className="">
        
      <ListingCarousel />
      </div>
      
     
      {/* <UnderCarousel /> */}
      <div className="pl-5 pb-10">
        {/* <ListingCard1 house={house1} /> */}
      </div>

      <div className="w-[80%] m-auto">
        <h1 className="text-[1.7rem]" >Featured Listings</h1>
        <ListingCard1 house={house1} />
      </div>
    </div>
  );
}
