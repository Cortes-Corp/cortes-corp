import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
import ListingCard1, { houseCardObj } from "./components/ui/ListingCard1";

const house1 : houseCardObj = {
  price: '$1,400,000',
  bedrooms: '2',
  bathrooms: '3',
  footage: '3,500',
  address: '41 Alexander Drive,\bTuxedo Park, New York 10987',
};

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative mb-5">
        <div className="absolute w-full py-3 z-10  bg-black bg-opacity-50">
          <ListingSearchBar />
        </div>
        <ListingCarousel />
      </div>
      <div className='pl-5 mb-10'>
        {/* <ListingCard1 house={house1} /> */}
      </div>
      
    </div>
  );
}
