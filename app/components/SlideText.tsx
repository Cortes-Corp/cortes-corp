"use client";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
function SlideText() {
  let words = ["home", "retreat", "comfort", "happy-place"];

  useEffect(() => {
    const handleSmallScreen = () => {
      if (window.innerWidth > 420) {
        words.splice(3,1)
      }
    }

    window.addEventListener('resize', handleSmallScreen);
    handleSmallScreen()
     return () => window.removeEventListener('resize', handleSmallScreen);
  })
  

  const [word, setWord] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    Aos.init();
  },[]);
  useEffect(() => {
    console.log(process.env.DATABASE_URL)
      setIsFirstRender(false);
  }, [word]);
  useEffect(() => {
    
    const interval = setInterval(() => {
      setWord((word) => (word >= words.length - 1 ? 0 : word + 1));
      
    }, 2500);

    return () => clearInterval(interval); 
  }, []);
 
  return (
    <div className="flex relative gap-3 justify-center">
      <h1
        style={{ fontFamily: "Merriweather" }}
        className=" font-bold text-center  text-white pb-5  lg:text-[3rem] md:text-[3rem] sm:text-[2.8rem] text-[2.2rem]"
      >
        Find your
      </h1>
      <span style={{ fontFamily: "Merriweather" }}
        className=" text-white font-bold text-center   pb-5 lg:text-[3rem] md:text-[3rem] sm:text-[2.8rem] text-[2.2rem]  " key={word}  data-aos={ !isFirstRender &&`zoom-out`}>
        {words[word]}
      </span>
    </div>
  );
}

export default SlideText;
