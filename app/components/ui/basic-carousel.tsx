import { ImagePreview } from "@/app/(pages)/dashboard/edit-website/AddListingForm";
import React from "react";
import { useState, useCallback } from "react";
interface CarouselProps {
    images: ImagePreview[];
  }
const BasicCarousel = React.memo(({ images } : CarouselProps) => { // Use React.memo to prevent unnecessary re-renders
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextImage = useCallback(() => { // Use useCallback to ensure function stability
      setCurrentIndex(prevIndex => prevIndex < images.length - 1 ? prevIndex + 1 : prevIndex);
    }, [images.length]);
  
    const goToPreviousImage = useCallback(() => {
      setCurrentIndex(prevIndex => prevIndex > 0 ? prevIndex - 1 : prevIndex);
    }, []);
  
   if (!images.length) return null; // Return null if there are no images to display
  return (
    <div className="flex translate-x-[-5rem] align-middle justify-center">
      <div  style={{ position: "relative", maxWidth: "400px " }}>
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].name}
          style={{ width: "auto", height: "9rem", display: "block" }}
        />
        <div className="flex pt-2 gap-10">
          <p onClick={goToPreviousImage} className='bg-red-600 w-[5rem] rounded-sm text-white' style={{ visibility: currentIndex === 0 ? "hidden" : "visible" }}>
            Previous
          </p>
          <p onClick={goToNextImage} className='bg-red-600 w-[5rem] rounded-sm text-white' style={{ visibility: currentIndex === images.length - 1 ? "hidden" : "visible" }}>
            Next
          </p>
        </div>
      </div>
    </div>
  );
});

export default BasicCarousel;
