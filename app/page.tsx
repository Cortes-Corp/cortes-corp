import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="relative">
        <div className="absolute w-full py-3 z-10  bg-black bg-opacity-50">
          <ListingSearchBar />
        </div>
        <ListingCarousel />
      </div>
    </div>
  );
}
