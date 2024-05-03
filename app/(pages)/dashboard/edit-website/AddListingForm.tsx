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
import { useState, useEffect } from "react";

interface FormData {
  address: string;
  price: string;
  beds: string;
  footage: string;
  baths: string;
  imgs: Array<File> | null;
}

interface ImagePreview {
  name: string;
  url: string;
}
export default function AddListingForm() {
  const [formData, setFormData] = useState<FormData>({
    address: "",
    price: "",
    beds: "",
    footage: "",
    baths: "",
    imgs: null,
  });
  const [previews, setPreviews] = useState<Array<ImagePreview>>([]);
  const [isValidated, setIsValidated] = useState(false);

  const { fetchAgents, refetchAgents, setIsLoading } = useAgents();

  const formRef = useRef<HTMLFormElement>(null);
  const adjustFormData = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value =
      name === "imgs" ? Array.from(event.target.files!) : event.target.value;
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

      const res = await fetch("/api/agent", {
        method: "POST",
        body: data,
      });
      console.log(res);
      await refetchAgents();
      setFormData({
        address: "",
        price: "",
        beds: "",
        footage: "",
        baths: "",
        imgs: null,
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (formRef.current && formRef.current.checkValidity()) {
      setIsValidated((isValidated) => !isValidated);
    }
  }, [formData]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newPreviews: ImagePreview[] = Array.from(files).map((file) => ({
        name: file.name,
        url: URL.createObjectURL(file),
      }));
      setPreviews([...previews, ...newPreviews]);
    }
  };

  const removeImage = (name: string) => {
    adjustFormData('imgs', (previews.filter(image => image.name !== name)) as any);
    URL.revokeObjectURL(name); // Cleanup memory
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true
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
                            onChange={(e) => handleFileChange(e)}
                            id="images"
                            name="files"
                            type="file"
                            multiple
                            className="flex items-center justify-center"
                            required
                          />
                        </label>
                        {previews.map((image) => (
                          <div key={image.name} style={{ margin: 10 }}>
                            <img
                              src={image.url}
                              alt={image.name}
                              style={{ width: 100, height: 100 }}
                            />
                            <button onClick={() => removeImage(image.name)}>
                              Remove
                            </button>
                          </div>
                        ))}
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
            <button className="  rounded-md bg-red-600 text-white p-2 px-3  font-medium text-sm hover:bg-red-700 transition-all duration-300">
              Add
            </button>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
