import Image from "next/image";

export default function UnderCarousel() {
  // Define an array of objects for the items
  const items = [
    {
      src: "/outsideHouse.jpg",
      title: "Gallery View",
      description: "Photo Gallery of properties",
    },
    {
      src: "/mapView.jpeg",
      title: "Map View",
      description: "Map view of properties",
    },
    {
      src: "/speakToAgent.png",
      title: "Speak to an Agent",
      description: "Have a question?",
    },
  ];

  return (
    <>
      <div className="flex  mt-[-2.5rem] justify-center gap-5 sm:gap-20 lg:gap-32">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="rounded-full z-[101] border-gray-50 border-[1px]">
              <div className=" rounded-full w-[7rem] h-[7rem] overflow-hidden  relative shadow-lg border-white border-[8px]  cursor-pointer transition-all duration-300 bg-slate-50 se:w-[8rem] se:h-[8rem] md:w-[10rem] md:h-[10rem] lg:w-[12rem] lg:h-[12rem]">
                <Image
                  src={item.src}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt={item.title}
                />
              </div>
            </div>

            <h3 className="text-black pt-2 text-center">{item.title}</h3>
            <p className="text-xs mt-1 text-gray text-opacity-80 text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
