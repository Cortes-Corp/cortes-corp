"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import { ChangeEvent, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useAgents } from "@/app/state/useAgents";
import { useState, useEffect, useCallback } from "react";
import BasicCarousel from "@/app/components/ui/basic-carousel";
import { File } from "buffer";


export interface ListingFormData {
  address: string;
  price: string;
  beds: string;
  footage: string;
  baths: string;
  img: File | null;
}

export interface ImagePreview {
  name: string;
  url: string;
}
export default function AddListingForm() {
  const [formData, setFormData] = useState<ListingFormData>({
    address: "",
    price: "",
    beds: "",
    footage: "",
    baths: "",
    img: null,
  });
  const [previews, setPreviews] = useState<Array<ImagePreview>>([]);
  const [isValidated, setIsValidated] = useState(false);

  const { fetchAgents, refetchAgents, setIsLoading } = useAgents();

  const formRef = useRef<HTMLFormElement>(null);
  const adjustFormData = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = name === "img" ? event.target.files![0] : event.target.value;
    console.log(value)
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });

      const res = await fetch("/api/listing", {
        method: "POST",
        body: data,
        cache: "no-store"
      });
      console.log(res);
      setFormData({
        address: "",
        price: "",
        beds: "",
        footage: "",
        baths: "",
        img: null,
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  const resetForm = useCallback(() => {
    setFormData({
        address: "",
        price: "",
        beds: "",
        footage: "",
        baths: "",
        img: null,
      });
    setPreviews([]);
    setIsValidated(false);
  }, []);
  
  useEffect(() => {
    if (formRef.current && formRef.current.checkValidity()) {
      setIsValidated((isValidated) => !isValidated);
    }
  }, [formData]);

  // const handleFileChange = useCallback((event : any ) => { // Use useCallback to memoize the function
  //   const files = event.target.files;
  //   if (files) {
  //     const newPreviews = Array.from(files).map(file => ({
  //       name: (file as File).name,
  //       url: URL.createObjectURL(file as Blob | MediaSource),
  //     }));
  //     setPreviews([...previews, ...newPreviews]);
  //     console.log(formData)
  //     setFormData((formData) => {
  //       return {
  //         ...formData,
  //         imgs: [...formData.imgs as any, event.target.files![0]],
  //       };
        

        
  //     })
  //   }
  // }, [previews]); // Dependencies include previews


  const removeImage = (image: ImagePreview) => {
    const filteredPreviews = previews.filter((preview) => preview !== image);
    setPreviews(filteredPreviews);

    // Update form data
    const newImageFiles = filteredPreviews.map(
      (preview) => new File([preview.url], preview.name)
    );
    adjustFormData("imgs", newImageFiles as any);

    // Cleanup memory
    URL.revokeObjectURL(image.url);
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className=" rounded-md bg-red-600 text-white p-2 px-3  font-medium text-sm hover:bg-red-700 transition-all duration-300">
          Add a Listing
        </button>
      </DialogTrigger>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>Add a Listing</DialogTitle>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col  ">
          <div className="w-fit  rounded-lg flex items-center justify-center">
            <div className=" border-gray-900/10 pb-12 flex items-center flex-col">
              <div className="mt-5  justify-center flex gap-3 flex-col">
                <div className="flex gap-2">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="price"
                      className="blocktext-sm font-medium leading-6 text-gray-900"
                    >
                      Price
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("price", e)}
                          value={formData.price}
                          type="number"
                          name="price"
                          id="price"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="address"
                      className="blocktext-sm font-medium leading-6 text-gray-900"
                    >
                      Address
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("address", e)}
                          type="address"
                          value={formData.address}
                          name="email"
                          id="email"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="beds"
                      className="blocktext-sm font-medium leading-6 text-gray-900"
                    >
                      Beds
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("beds", e)}
                          value={formData.beds}
                          type="number"
                          name="beds"
                          id="beds"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="blocktext-sm font-medium leading-6 text-gray-900"
                    >
                      Baths
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("baths", e)}
                          value={formData.baths}
                          type="number"
                          name="baths"
                          id="baths"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="fottage"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Footage
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) => adjustFormData("footage", e)}
                      value={formData.footage}
                      type="number"
                      name="footage"
                      id="footage"
                      className=" rounded-md ring-1 ring-inset ring-gray-300 "
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="images"
                    className="flex items-center text-sm font-medium leading-6 text-gray-900"
                  >
                    Images
                  </label>
                  <div className="mt-2 flex justify-center items-center rounded-lg  border-gray-900/25 ">
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="cover-photo"
                          className=" cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none "
                        >
                          <input
                            onChange={(e) => adjustFormData("img", e)}
                            id="images"
                            name="files"
                            type="file"
                            className="flex items-center justify-center"
                            required
                          />
                        </label>
                  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isValidated && (
            <DialogPrimitive.Close className="flex items-center flex-col w-full">
              <button className="  w-full rounded-md bg-red-600 text-white p-2 px-3  font-medium text-sm hover:bg-red-700 transition-all duration-300">
                Add
              </button>
            </DialogPrimitive.Close>
          )}
          {!isValidated && (
            <button className="  rounded-md bg-red-600 text-white p-2 px-3 w-[85%]  font-medium text-sm hover:bg-red-700 transition-all duration-300">
              Add
            </button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
