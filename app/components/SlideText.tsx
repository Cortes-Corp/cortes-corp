"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
function SlideText() {
  const words = ["home", "retreat", "happy-place", "comfort"];
  const [word, setWord] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    Aos.init();
  },[]);
  useEffect(() => {
      setIsFirstRender(false);
  }, [word]);
  useEffect(() => {
    
    const interval = setInterval(() => {
      setWord((word) => (word >= words.length - 1 ? 0 : word + 1));
      
    }, 2500);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);
 
  return (
    <div className="flex relative gap-3 justify-center">
      <h1
        style={{ fontFamily: "Merriweather" }}
        className=" font-bold text-center  text-white pb-5 text-[3rem]"
      >
        Find your
      </h1>
      <span style={{ fontFamily: "Merriweather" }}
        className=" font-bold text-center  text-white pb-5 text-[3rem] " key={word}  data-aos={ !isFirstRender &&`zoom-out`}>
        {words[word]}
      </span>
    </div>
  );
}

export default SlideText;
