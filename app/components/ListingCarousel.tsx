import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel"


export default function ListingCarousel() {
  const carouselItems = [
    {
      src: "/home7.jpg",
      alt: "Image description 1",
    },
    {
      src: "https://i.pinimg.com/originals/6a/5e/6d/6a5e6d3d41999e4e3e150123cb0fbbe2.jpg",
      alt: "Image description 2",
    },
    {
      src: "https://wallpapercave.com/wp/wp10822312.jpg",
      alt: "Image description 3",
    },
  ];
  return (
    <div className="flex  relative justify-center  w-[90%] m-auto   items-center  ">
      
      <Carousel
        className=""
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.src} className="">
            {/* <div className="top-black    absolute w-full h-full"></div> */}
            <img
              className="object-cover rounded-xl w-full h-[30rem] sm:h-[30rem] md:h-[38rem] 2xl:h-[50rem]"
              src={item.src}
              alt={item.alt}
            />
          </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}
