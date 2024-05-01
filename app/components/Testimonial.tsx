import React from "react";
export default function Testimonials() {
  return (
    <div>
      <div className="lg:px-20 md:px-6 px-4 py-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="lg:text-4xl text-3xl font-bold text-center border-b-red-600 border-b-[0.5rem] text-gray-800">
            Hear from our clients
          </h1>
          <p className="text-base leading-6 mt-4 text-center text-gray-600 2xl:w-2/5 ">
            Here is why you should trust us with your real estate
          </p>
        </div>
        <div className="w-full lg:flex items-center gap-6 mt-10">
          <div className="lg:w-1/2">
            <div className="bg-white border  rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img src="/comma1.svg" alt="commas" />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
                Gully is a hands on, experienced realtor. She was reliable with
                all my affairs while selling my house in Hempstead, LI. When a
                challenge came up, she proactively provided me with the
                resources I needed to resolve the issue....
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-red-600 rounded-full flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Amber F.
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Client
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 lg:mt-0 mt-16">
            <div className="bg-white border rounded-md border-gray-200 relative sm:p-10 p-6">
              <div>
                <img src="/comma1.svg" alt="commas" />
              </div>
              <p className="text-base leading-6 text-gray-600 mt-4">
              Gully is a hands on, experienced realtor. She was reliable with all
            my affairs while selling my house in Hempstead, LI. When a challenge
            came up, she proactively provided me with the resources I needed to
            resolve the issue.
              </p>
              <div className="absolute bottom-0 -mb-4 ml-10">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonials-4-svg2.svg"
                  alt="sharp"
                />
              </div>
            </div>
            <div className="flex items-center mt-7">
              <div className="w-12 h-12 border border-red-600 rounded-full flex items-center justify-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                  className="w-10 h-10 rounded-full"
                  alt="profile"
                />
              </div>
              <div className="flex flex-col items-start ml-4">
                <p className="text-base font-semibold leading-4 text-gray-800">
                  Amber F.
                </p>
                <p className="text-base leading-4 mt-2 text-center text-gray-600">
                  Client
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
