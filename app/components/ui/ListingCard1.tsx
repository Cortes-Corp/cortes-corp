import Image from "next/image";
import { useState, useCallback } from "react";
export type houseCardObj = {
  src: string;
  price: string;
  beds: string;
  baths: string;
  footage: string;
  address: string;

};
interface listingCard1Props {
  house: houseCardObj;
}

function ListingCard1({ house }: listingCard1Props) {
  const [liked, setLiked] = useState<Boolean>(false)
  return (
    <div className="w-[21.6rem] shadow mb-2 rounded-md  border-[1px]   aspect-[2.5/2.5] cursor-pointer  transition-all duration-200  relative overflow-hidden">
  <div className=" ">
    <Image
      alt="house listing"
      layout="fill"
      objectFit="cover"
      src={house.src}
    ></Image>
    <div className="absolute inset-0 custom-vignette opacity-70"></div>
  </div>
  <div className="absolute bottom-0 bg-white bg left-0 right-0 p-2 px-1  flex justify-between text-black"> 
    <div>
      <div className="flex">
      <h1 className="text-[1.3rem]">{house.price}</h1>
      <div className="flex  gap-1 font-thin  text-center">
        <div className="border-r  text-[0.7rem] px-2 border-opacity-10">
            <p>{house.beds}</p>
            <p>Beds</p>
        </div>
        <div className="border-r text-[0.7rem] px-2 border-opacity-10">
            <p>{house.baths}</p>
            <p>Baths</p>
        </div>
        <div className="pl-2 text-[0.7rem]">
            <p>{house.footage}</p>
            <p>Sq. ft.</p>
        </div>
    </div>
      </div>
        
        
        <div className="text-[0.7rem] font-light">
            <p>{house.address.split("\b")[0]}<br/>{house.address.split("\b")[1]}</p>
        </div>
    </div>
    
    {/* <Image onClick={() => setLiked(!liked)}  className='m-auto translate-y-[-13px] ml-[3rem]' alt='heart' src={liked? '/heart-red.png' : '/heart.png'} width={30} height={30}></Image>
    */}
</div>
</div>
  );
}

export default ListingCard1;
