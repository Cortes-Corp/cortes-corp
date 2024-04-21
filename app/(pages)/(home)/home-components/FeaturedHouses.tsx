"use client"

import ListingCard1 from "@/app/components/ui/ListingCard1";

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
    return (
        
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
    )
}