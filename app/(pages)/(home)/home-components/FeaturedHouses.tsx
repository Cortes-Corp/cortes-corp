"use client";
import Image from "next/image";
import ListingCard1 from "@/app/components/ui/ListingCard1";
import { useRef , useEffect, useState} from "react";
import { getHouses } from "../../dashboard/edit-website/actions/actions";
import { Listing } from "@prisma/client";
export default function FeaturedHouses() {
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const [houses, setHouses] = useState<Listing[] | null>(null);
  useEffect(() => {
    const fetchHouses = async () => {
      const res = await getHouses();
      setHouses(res);
    };
    fetchHouses();
  }, []);
  if (houses === null) {
    return <div className="w-full flex justify-center">None so far</div>;
  }

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
    <div className="w-[80%] md:w-[95%] mt-20 m-auto">
      <h1 className="text-[1.7rem] text-gray-800 font-medium pb-10 text-center md:text-left md:w-[95%] lg:w-[95%] m-auto">
    Featured Listings
  </h1>
      <div className="flex pt-5  justify-center">
       {/* Left arrow with click handler */}
       <Image 
         className=" h-[3.2rem] mr-5 w-[1.8rem] m-auto rotate-180 cursor-pointer" 
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
         className=" h-[3.2rem] ml-5 w-[1.8rem] m-auto cursor-pointer" 
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
