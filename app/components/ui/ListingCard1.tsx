import Image from "next/image";

export type houseCardObj = {
  price: string;
  bedrooms: string;
  bathrooms: string;
  footage: string;
  address: string;
};
interface listingCard1Props {
  house: houseCardObj;
}

function ListingCard1({house} : listingCard1Props) {
  return (
    <div className='text-gray-600' >
      <div className="w-[15rem] ">
        <div className="w-[15rem] rounded-[0.5rem] mb-2 overflow-hidden" >
          <Image className=" transition-all duration-[400ms] scale-[1]  hover:scale-[1.1]" layout='responsive'  width={100} height={110} objectFit="cover" alt="listing" src='/house-1.jpeg'></Image>
        </div>

        <p className="font-bold text-[1.2rem] mb-1">$1,200,000</p>

        <div id="specs" className='flex gap-3 mb-1'>
          <div className="flex  gap-1">
            <Image alt="metric" width="20" height='20' src="/bed.png" />
            <p>{`${house.bedrooms}bd`}</p>
          </div>

          <div className="flex  gap-1">
            <Image  alt="metric" width="20" height='20' src="/bath-tub.png" />
            <p>{`${house.bathrooms}ba`}</p>
          </div>

          <div className="flex  gap-1">
            <Image className="scale-[0.9] rotate-[90deg]" alt="metric" width="20" height='20' src="/ruler.png" />
            <p>{`${house.footage}sqft`}</p>
          </div>
        </div>

        <div>
          <p>{house.address.split('\b')[0]}<br />{house.address.split('\b')[1]}</p>
        </div>
      </div>
    </div>
  );
}

export default ListingCard1;
