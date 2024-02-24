import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
import HomeCards from "./components/HomeCards";
import UnderCarousel from "./components/UnderCarousel";
export default function Home() {
  return (
    <div className="">
      <Navbar></Navbar>
      <div className="">
        <div className="absolute w-full py-3 z-10   bg-black bg-opacity-50">
          <ListingSearchBar />
        </div>
        <ListingCarousel />
      </div>{" "}
      <div className=" ">
        <UnderCarousel></UnderCarousel>
      </div>
    </div>
  );
}
