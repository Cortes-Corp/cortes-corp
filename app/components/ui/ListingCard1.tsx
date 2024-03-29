import Image from "next/image";

export type houseCardObj = {
  src: string;
  price: string;
  bedrooms: string;
  bathrooms: string;
  footage: string;
  address: string;
};
interface listingCard1Props {
  house: houseCardObj;
}

function ListingCard1({ house }: listingCard1Props) {
  return (
    <div className="w-[95%] aspect-[3.4/2.5] cursor-pointer hover:border-red-500 hover:border-[0.15rem] hover:shadow-2xl transition-all duration-200 border-[0.15rem] border-transparent relative overflow-hidden">
  <div className="z-9">
    <Image
      alt="house listing"
      layout="fill"
      objectFit="cover"
      src={house.src}
    ></Image>
    <div className="absolute inset-0 custom-vignette opacity-70"></div>
  </div>
  <div className="absolute bottom-0 bg left-0 right-0 p-2 px-3 flex justify-between text-white"> 
    <div>
        <h1 className="text-[1.4rem]">{house.price}</h1>
        <div className="text-[0.8rem] font-light">
            <p>{house.address.split("\b")[0]}<br/>{house.address.split("\b")[1]}</p>
        </div>
    </div>
    <div className="flex pt-9 gap-1 font-thin text-center">
        <div className="border-r  text-[0.8rem] px-2 border-opacity-10">
            <p>{house.bedrooms}</p>
            <p>Beds</p>
        </div>
        <div className="border-r text-[0.8rem] px-2 border-opacity-10">
            <p>{house.bathrooms}</p>
            <p>Baths</p>
        </div>
        <div className="pl-2 text-[0.8rem]">
            <p>{house.footage}</p>
            <p>Sq. ft.</p>
        </div>
    </div>
</div>
</div>
  );
}

export default ListingCard1;
