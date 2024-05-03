
import Image from 'next/image';
import { Region } from '../Regions';

function RegionCard({src, text}: Region) {
  return (
    <div className=" shadow-md rounded-md cursor-pointer  overflow-hidden relative w-[21.5rem] h-[6rem]">
                <div>
                  <Image
                    src={src}
                    alt="region"
                    layout="fill"
                    objectFit="cover"
                  ></Image>
                  <div className="absolute inset-0 bg-black bg-opacity-35"></div>
                </div>

                <h2 className="absolute text-white text-center inset-0 top-1/3">
                  {text}
                </h2>
              </div>
  )
}

export default RegionCard