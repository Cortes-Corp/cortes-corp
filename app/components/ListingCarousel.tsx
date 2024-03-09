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
      src: "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1638285654/architecturaldigest_on-the-market-on-the-market-sunset-noir.jpg",
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
    <div className="flex justify-center   items-center  ">
      
      <Carousel
        className=""
        opts={{
          align: "center",
          loop: true,
        }}>
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.src} className="">
              <div className="bg-black bg-opacity-40 absolute w-full h-full"></div>
              <img
                className="object-cover w-full h-[20rem] sm:h-[30rem] md:h-[34rem] 2xl:h-[50rem]"
                src={item.src}
                alt={item.alt}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute left-14 top-1/2 transform -translate-y-1/2 z-10">
          <CarouselPrevious className="bg-gray-700 border-none bg-opacity-50 text-white " />
        </div>
        <div className="absolute right-14 top-1/2 transform -translate-y-1/2 z-10">
          <CarouselNext className="bg-gray-700 bg-opacity-50 border-none text-white" />
        </div>
      </Carousel>
    </div>
  );
}
