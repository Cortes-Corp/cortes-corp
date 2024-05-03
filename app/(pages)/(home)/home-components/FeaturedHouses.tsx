"use client";
import Image from "next/image";
import ListingCard1 from "@/app/components/ui/ListingCard1";
import { useRef } from "react";

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

export default function FeaturedHouses() {
   const gridContainerRef = useRef<HTMLDivElement>(null);

   const scrollRight = () => {
     if (gridContainerRef.current) {
       gridContainerRef.current.scrollBy({ left: 350, behavior: 'smooth' }); // Change 300 to desired scroll amount
     }
   };
 
   // Function to scroll left
   const scrollLeft = () => {
     if (gridContainerRef.current) {
       gridContainerRef.current.scrollBy({ left: -350, behavior: 'smooth' }); // Change 300 to desired scroll amount
     }
   };
 
   return (
    <div className="w-[95%] mt-20 m-auto">
      <h1 className="text-[1.7rem] text-gray-800 font-medium pb-10 text-center md:text-left md:w-[95%] lg:w-[95%] m-auto">
    Featured Listings
  </h1>
      <div className="flex pt-5  justify-center">
       {/* Left arrow with click handler */}
       <Image 
         className=" h-[3.2rem] w-[1.8rem] m-auto rotate-180 cursor-pointer" 
         src="/arr-r.png" 
         alt="arrow" 
         width={40} 
         height={40}
         onClick={scrollLeft} // Attach the scrollLeft function
       />
        
       <div className="w-[100%] mb-[8rem] md:w-[80%]  lg:w-[80%]  m-auto">
         
         <div 
           className="grid grid-flow-col auto-cols-max scrollbar-hide gap-5 overflow-x-auto"
           ref={gridContainerRef} 
         >
           {houses.map((house, index) => (
             <div key={index} className="relative">
               <ListingCard1 house={house} />
             </div>
           ))}
         </div>
       </div>
 
       {/* Right arrow with click handler */}
       <Image 
         className=" h-[3.2rem] w-[1.8rem] m-auto cursor-pointer" 
         src="/arr-r.png" 
         alt="arrow" 
         width={40} 
         height={40}
         onClick={scrollRight} // Attach the scrollRight function
       />
     </div>
    </div>
     
   );
}
