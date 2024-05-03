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
import Testimonials from "@/app/components/Testimonial";
import Contact from "../contact/page";
import Contact2 from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import Services from "@/app/components/Services";
import Regions from "@/app/components/Regions";
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

const mock =
  "https://squarefootphotography.com/wp-content/uploads/2024/01/9-print-SQFT-0058_-scaled.jpg";
export default function Home() {
  return (
    <div className="  w-full ">
      <div className=" flex-col justify-center   relative   z-10  ">
        <ListingCarousel />
        <ListingSearchBar />
      </div>
      <Regions />
      <FeaturedHouses></FeaturedHouses>
      <Services />
      <div className="my-[10rem]">
        <Testimonials />
      </div>

      <div className="mt-20">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}
