import Image from "next/image";
import ListingSearchBar from "./components/ListingSearchBar";
import Navbar from "./components/Navbar";
import ListingCarousel from "./components/ListingCarousel";
import HomeCards from "./components/HomeCards";
import UnderCarousel from "./components/UnderCarousel";
import ListingCard1, { houseCardObj } from "./components/ui/ListingCard1";
import SlideText from "./components/SlideText";
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
      {/* <Navbar /> */}
      <div className="relative   items-center">
        <div className="absolute flex-col justify-center  top-[12rem]  lg:top-[14rem] left-0 right-0 z-10 p-2 ">
          <SlideText />
          <ListingSearchBar />
        </div>
      </div>

      <div className="">
        <ListingCarousel />
      </div>

      <div className="w-[90%] mb-[8rem] md:w-[80%] lg:w-[80%]   pt-20  m-auto">
        <h1 className="text-[1.7rem]    pb-10">Featured Listings</h1>
        <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {houses.map((house) => (
            <div className="relative ">
              <ListingCard1 house={house} />
            </div>
          ))}
        </div>
      </div>

      

      <div className="w-[90%] m-auto mt-[5rem] md:w-[80%] lg:w-[80%]">
        <div className="flex  justify-between">
        <div className="w-[35rem] h-[30rem] relative">
            <Image
              quality={100}
              src="/buyImage.jpeg"
              layout="fill"
              objectFit="cover"
              alt="agent"
            ></Image>
          </div>
          <div className="w-[40%] lg:pt-[7rem]">
            <h1 className="text-[2.6rem] pb-5 font-[500] text-gray-800">
              Find Your Dream
            </h1>
            <p className="text-[1rem]  text-gray-800 font-light">
              Discover your dream home or rental with Cortez Corp. We provide personalized
              service to seamlessly guide you to the perfect property. With
              Cortez Corp, your dream home is within reach.
            </p>
            <button className=" mt-8 text-white bg-red-600 text-[1rem] hover:bg-red-700 font-medium  text-sm px-5 py-3  focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600 dark:focus:ring-red-700 self-center transition-all duration-300">
              {" "}
              Explore Listings
            </button>
          </div>
         
        </div>
      </div>

      <div className="w-[90%] m-auto mt-[5rem]  md:w-[80%] lg:w-[80%]">
        <div className="flex  justify-between">
          
          <div className="w-[40%] lg:pt-[7rem]">
            <h1 className="text-[2.6rem] pb-5 font-[500] text-gray-800">
              Sell Smarter With Us
            </h1>
            <p className="text-[1rem]  text-gray-800 font-light">
              Maximize your property's potential with Cortez Corp. We excel in
              the luxury real estate market of Brooklyn, Queens, and Long
              Island, leveraging our expertise to sell your home swiftly and at
              the best price. Trust Cortez Corp for a seamless selling
              experience.
            </p>
            <button className=" mt-8 text-white bg-red-600 text-[1rem] hover:bg-red-700 font-medium  text-sm px-5 py-3  focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600 dark:focus:ring-red-700 self-center transition-all duration-300">
              {" "}
              Schedule a consultation
            </button>
          </div>
          <div className="w-[35rem] h-[30rem] relative">
            <Image
              quality={100}
              src="/for-sale.jpg"
              layout="fill"
              objectFit="cover"
              alt="agent"
            ></Image>
          </div>
        </div>
      </div>







      <div className="w-[90%]  m-auto mt-[5rem] md:w-[80%] lg:w-[80%]">
        <div className="flex flex-wrap lg:flex-no-wrap    justify-between">
          <div className="w-[35rem]  h-[30rem] relative">
            <Image
              quality={100}
              src="/agent-photo.jpg"
              layout="fill"
              objectFit="cover"
              alt="agent"
            ></Image>
          </div>
          <div className="w-[80%] lg:w-[40%] lg:pt-[7rem]">
            <h1 className="text-[2.6rem] pb-5 font-[500] text-gray-800">
              Agents You Can Trust
            </h1>
            <p className="text-[1rem]  text-gray-800 font-light">
              Our seasoned professionals are dedicated to providing a seamless
              experience, focusing on your unique needs in buying, selling, and
              renting premium properties. With Cortez Corp, you're not just
              choosing agents; you're choosing excellence in every transaction.
            </p>
            <button className=" mt-8 text-white bg-red-600 text-[1rem] hover:bg-red-700 font-medium  text-sm px-5 py-3  focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600 dark:focus:ring-red-700 self-center transition-all duration-300">
              {" "}
              View Our Agents
            </button>
          </div>
        </div>
      </div>

      <div className=" h-[70vh] mt-20  w-[100vw]  relative">
        <div>
          
        </div>
        <div className=" z-[54] bg-white top-[0rem]    shadow-lg w-[50%]  h-[90%]  0 text-center inset-0 m-auto absolute">
          <h1 className=" el  w-full  text-[10rem] text-gray-500">“</h1>
          <h1 className="w-[80%] text-[1.2rem] font-thin m-auto text-gray-500 ">
            Gully is a hands on, experienced realtor. She was reliable with all
            my affairs while selling my house in Hempstead, LI. When a challenge
            came up, she proactively provided me with the resources I needed to
            resolve the issue. I recommend her to new buyers and sellers for her
            patience and care; as well as seasoned investors with her
            efficiencies.
          </h1>
        </div>

        <div className="z-[20] w-full h-full bg-opacity-20 bg-white  backdrop-blur-sm absolute"></div>
        <div className="z-[20] w-full h-full bg-opacity-85 white-fade  absolute"></div>
        <div
          style={{ filter: "brightness(300%)  contrast(90%) grayscale(100%)" }}
          className="w-full h-full"
        >
          <Image
            className="z-[19]"
            alt="Testimonials"
            layout="fill"
            objectFit="cover"
            src="/house2.jpg"
          ></Image>
        </div>
      </div>
    </div>
  );
}
