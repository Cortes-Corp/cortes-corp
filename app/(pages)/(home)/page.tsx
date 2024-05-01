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

const services = [
  {
    text: "Uncover the ideal residence with Cortez Corp’s bespoke property services. We specialize in guiding you effortlessly to your dream home, making every step of the journey smooth and perfectly tailored to your needs. With Cortez Corp, the path to your perfect home is clear and achievable.",
    title: "BUY YOUR HOME",
    src: "/house_icon.png",
  },

  {
    text: " Find your next rental property with our specialized rental finding service. We'll lead the way to a place where comfort meets convenience, ensuring your rental experience is nothing short of perfect. Your ideal rental is waiting – let’s find it together. ",
    title: "RENT YOUR HOME",
    src: "/building.png",
  },

  {
    text: "Maximize your property's potential with Cortez Corp. We excel in the luxury real estate market of Brooklyn, Queens, and Long Island, leveraging our expertise to sell your home swiftly and at the best price. Trust Cortez Corp for a seamless selling experience.",
    title: "SELL YOUR HOME",
    src: "/deal.png",
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
        <h1 className="text-[1.7rem] text-gray-800 font-medium pb-5">Our Regions</h1>
        <div className="flex  gap-5 justify-center ">
          {regions.map((region: object) => {
            return (
              <div className=" shadow-md rounded-md cursor-pointer  overflow-hidden relative w-[21.5rem] h-[6rem]">
                <div>
                  <Image
                    src={region.src}
                    alt="region"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                  <div className="absolute inset-0 bg-black bg-opacity-35"></div>
                </div>

                <h2 className="absolute text-white text-center inset-0 top-1/3">
                  {region.text}
                </h2>
              </div>
            );
          })}
        </div>
        <h1 className="pt-10 text-[1.5rem] font-semibold text-red-600">Looking Beyond Our Main Regions?</h1>
        <p className="text-gray-800">We're ready to help anywhere. <span><a className="underline cursor-pointer">Contact us</a></span> to explore more opportunities.</p>
      </div>

      <FeaturedHouses></FeaturedHouses>

      <div className="w-[90%] mb-10    justify-center flex shadow-md   overflow-hidden rounded-xl border-t-[1rem] border-[0.1rem] border-t-red-600 m-auto  h-[29rem] bg-white">
        {services.map((service) => {
          return (
            <div className={`flex flex-col  ${service.title !== "SELL YOUR HOME" && 'border-r'} px-[3rem]     items-center`}>
              <div className=" flex  flex-col  mt-10 w-[7rem] m-auto  rounded-full bg-red-600 relative h-[7rem]">
                <Image
                  className="p-8 "
                  alt="service"
                  layout="fill"
                  objectFit="cover"
                  src={service.src}
                ></Image>
              </div>
              <div className="w-[22rem]   m-auto">
                <h1 className=" font-semibold text-[1.1rem] text-center">
                  {service.title}
                </h1>
                <p className=" text-[0.9rem]  text-center">{service.text}</p>
              </div>
                <button className=" shadow-xs hover:bg-red-600 rounded-md hover:text-white transition-all duration-300  mb-10 w-[7rem] bg-slate-100 h-[2.5rem] text-[0.8rem]  text-red-600 font-semibold">
                  {" "}
                  {service.title === "BUY YOUR HOME" ||
                  service.title === "RENT YOUR HOME"
                    ? "LISTINGS"
                    : "MORE INFO"}
                </button>

            </div>
          );
        })}

        
      </div>
      <Testimonials />
      <div className='mt-20'>
      <Contact />
      </div>

        
      
      <Footer />
    </div>
  );
}
