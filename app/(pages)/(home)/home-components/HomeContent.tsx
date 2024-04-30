"use client";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

export default function HomeContent() {
  useEffect(() => {

  }, []);
  return (
    <div>
      
      <div  className=" h-[70vh] mt-20  w-[100vw]  relative">
        <div></div>
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
          className="w-full h-full">
          <Image
            className="z-[19]"
            alt="Testimonials"
            layout="fill"
            objectFit="cover"
                      src="/house2.jpg"></Image>
                  
        </div>
          </div>
          
    </div>
  );
}
