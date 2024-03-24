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
    <div className="w-[25rem] cursor-pointer hover:border-red-500 hover:border-[0.15rem] hover:shadow-2xl transition-all duration-100 border-[0.15rem] hover:rounded  border-transparent  h-[18rem] relative  overflow-hidden">
      <div className="z-[9]">
        <Image
          alt="house listing"
          layout="fill"
          objectFit="cover"
          src={
            "https://www.chicagomag.com/wp-content/uploads/2022/08/C202209-312-Bauer-Mansion-exterior.jpg"
          }
        ></Image>
        <div className="absolute inset-0 custom-vignette opacity-70"></div>
      </div>
      <div className="flex justify-between text-white pt-[52%]">
        <div className=" relative  pl-5 ">
          <h1 className="text-[1.4rem]">{house.price}</h1>
          <div className="text-[0.8rem] font-light">
            <p>
              {house.address.split("\b")[0]}
              <br />
              {house.address.split("\b")[1]}
            </p>
          </div>
        </div>


        <div className=" h-[4rem] gap-1 pr-5 pt-5 font-thin relative flex text-center ">
          <div className="border-r px-2 border-opacity-10">
            <p>{house.bedrooms}</p>
            <p>Beds</p>
          </div>

          <div className="border-r px-2 border-opacity-10">
            <p>{house.bathrooms}</p>
            <p>Baths</p>
          </div>
          <div  className="pl-2">
            <p>{house.footage}</p>
            <p>Sq. ft.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingCard1;
