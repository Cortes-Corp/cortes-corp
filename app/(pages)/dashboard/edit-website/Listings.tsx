"use client";
import Image from "next/image";
import ListingCard1 from "@/app/components/ui/ListingCard1";
import { useEffect, useRef, useState } from "react";
import { Listing } from "@prisma/client";
import { getHouses } from "./actions/actions";
import { Button } from "@/app/components/ui/button";
import { deleteHouse } from "./actions/actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
export default function Listings() {
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
    return (
      <div className="w-full flex items-center justify-center">None so far</div>
    );
  }

  const scrollRight = () => {
    if (gridContainerRef.current) {
      gridContainerRef.current.scrollBy({ left: 350, behavior: "smooth" }); // Change 300 to desired scroll amount
    }
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (gridContainerRef.current) {
      gridContainerRef.current.scrollBy({ left: -350, behavior: "smooth" }); // Change 300 to desired scroll amount
    }
  };


  return (
    <div className="  flex justify-center mt-20 sm:m-auto">
    

      <div className="w-[100%] mb-[8rem] md:w-[80%]  lg:w-[80%]  m-auto">
        <div className=" flex justify-center  flex-wrap md:flex-row " ref={gridContainerRef}>
          {houses.map((house, index) => (
            <div key={index} className="">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div>
                    <ListingCard1 house={house} />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuSeparator />

                          <DropdownMenuItem onClick={() => {
                              deleteHouse(house.id)
                              setHouses(houses.filter(house => house.id !== house.id))
                          }}>
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
