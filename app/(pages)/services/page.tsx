import Image from "next/image";
import Link from "next/link";
const services = [
  {
    text: " Find your next rental property with our specialized rental finding service. We'll lead the way to a place where comfort meets convenience, ensuring your rental experience is nothing short of perfect. Your ideal rental is waiting – let’s find it together. ",
    title: "RENT YOUR HOME",
    src: "/building.png",
  },
  {
    text: "Uncover the ideal residence with Cortez Corp’s bespoke property services. We specialize in guiding you effortlessly to your dream home, making every step of the journey smooth and perfectly tailored to your needs. With Cortez Corp, the path to your perfect home is clear and achievable.",
    title: "BUY YOUR HOME",
    src: "/house_icon.png",
  },
  {
    text: "Maximize your property's potential with Cortez Corp. We excel in the luxury real estate market of Brooklyn, Queens, and Long Island, leveraging our expertise to sell your home swiftly and at the best price. Trust Cortez Corp for a seamless selling experience.",
    title: "SELL YOUR HOME",
    src: "/deal.png",
  },
];

function Services() {
  return (
    <div className="flex gap-10 h-[90vh] items-center flex-wrap ">
      {services.map((service) => {
        return (
          <div className="w-[25rem] sm:w-[30rem] mb-10 mt-20    justify-center flex shadow-md   overflow-hidden rounded-xl border-t-[1rem] border-[0.1rem] border-t-red-600 m-auto  h-[29rem] bg-white">
            <div
              className={`flex flex-col  ${
                service.title !== "SELL YOUR HOME" && ""
              } px-[3rem]     items-center`}>
              <div className=" flex  flex-col  mt-10 w-[7rem] m-auto  rounded-full bg-red-600 relative h-[7rem]">
                <Image
                  className="p-8 "
                  alt="service"
                  layout="fill"
                  objectFit="cover"
                  src={service.src}></Image>
              </div>
              <div className="w-[22rem]   m-auto">
                <h1 className=" font-semibold text-[1.1rem] text-center">
                  {service.title}
                </h1>
                <p className=" text-[0.9rem]  text-center">{service.text}</p>
              </div>
              <Link href="contact">
                {" "}
                <button className=" shadow-xs hover:bg-red-600 rounded-md hover:text-white transition-all duration-300  mb-10 w-[7rem] bg-slate-100 h-[2.5rem] text-[0.8rem]  text-red-600 font-semibold">
                  {" "}
                  Contact us
                </button>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Services;
