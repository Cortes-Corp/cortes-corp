import { Carousel } from "flowbite-react";

export default function ListingCarousel() {
  return (
    <div className="h-96 md:h-[40rem]">
      <Carousel indicators={false}>
        <img
          src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_architecturaldigest.png,fl_progressive,g_face,h_1080,q_80,w_1920/v1638285654/architecturaldigest_on-the-market-on-the-market-sunset-noir.jpg"
          alt="..."
        />
        <img
          src="https://i.pinimg.com/originals/6a/5e/6d/6a5e6d3d41999e4e3e150123cb0fbbe2.jpg"
          alt="..."
        />
        <img src="https://wallpapercave.com/wp/wp10822312.jpg" alt="..." />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
