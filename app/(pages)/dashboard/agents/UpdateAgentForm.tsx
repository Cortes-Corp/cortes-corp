"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/app/components/ui/updateDialog";
import { ReactNode, useRef } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useAgents } from "@/app/state/useAgents";
import { useState, useEffect } from "react";

import { Agent } from "@prisma/client";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  cell: string;
  office: string;
  bio: string;
  img: File | null;
}


interface Props {
  agent: Agent;

  open: boolean;
  setOpen: (bool: boolean) => void;
}

export default function updateAgentForm({
  agent,

  open,
  setOpen,
}: Props) {
  console.log(agent);
  const [formData, setFormData] = useState<FormData>({
    name: agent.name,
    email: agent.email,
    cell: agent.cell,
    office: agent.office,
    bio: agent.bio,
    img: null,
  });
  const [isValidated, setIsValidated] = useState(false);

  const { fetchAgents, refetchAgents, setIsLoading, setOpenUpdateForm } =
    useAgents();

  const formRef = useRef<HTMLFormElement>(null);
  const adjustFormData = (
    name: string,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = name === "img" ? event.target.files![0] : event.target.value;
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
      data.append("id", agent.id.toString());
      console.log("old agent: ", agent.src);
      data.append("oldSrc", agent.src);
      const res = await fetch("/api/agent", {
        method: "PUT",
        body: data,
      });
      console.log(res);
      await refetchAgents();
      setFormData((FormData) => ({
        name: "",
        email: "",
        cell: "",
        office: "",
        bio: "",
        img: null,
      }));
      setOpenUpdateForm(false);
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
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-fit">
        <DialogHeader>
          <DialogTitle>Add an Agent</DialogTitle>
        </DialogHeader>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col  ">
          <div className="w-fit  rounded-lg flex items-center justify-center">
            <div className=" border-gray-900/10 pb-12 flex items-center flex-col">
              <div className="mt-5  justify-center flex gap-3 flex-col">
                <div className="flex gap-2">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="blocktext-sm font-medium leading-6 text-gray-900">
                      name
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("name", e)}
                          value={formData.name}
                          type="text"
                          name="name"
                          id="name"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="blocktext-sm font-medium leading-6 text-gray-900">
                      email
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("email", e)}
                          type="email"
                          value={formData.email}
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
                      htmlFor="name"
                      className="blocktext-sm font-medium leading-6 text-gray-900">
                      cell phone
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("cell", e)}
                          value={formData.cell}
                          type="number"
                          name="cell"
                          id="cell"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="name"
                      className="blocktext-sm font-medium leading-6 text-gray-900">
                      office phone
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm  w-fit ">
                        <input
                          onChange={(e) => adjustFormData("office", e)}
                          value={formData.office}
                          type="number"
                          name="office"
                          id="office"
                          className=" rounded-md ring-1 ring-inset ring-gray-300 "
                          required
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="bio"
                    className="block text-sm font-medium leading-6 text-gray-900">
                    bio
                  </label>
                  <div className="mt-2">
                    <textarea
                      onChange={(e) => adjustFormData("bio", e as any)}
                      value={formData.bio}
                      id="bio"
                      name="bio"
                      rows={3}
                      className="block w-64 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="cover-photo"
                    className="flex items-center text-sm font-medium leading-6 text-gray-900">
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center items-center rounded-lg  border-gray-900/25 ">
                    <div className="text-center">
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="cover-photo"
                          className=" cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none ">
                          <input
                            onChange={(e) => adjustFormData("img", e)}
                            id="cover-photo"
                            name="file"
                            type="file"
                            className="flex items-center justify-center"
                          />
                        </label>
                      </div>
                    </div>
                    <div>
                      <Image
                        src={agent.src}
                        alt={agent.name}
                        width={50}
                        height={50}
                        objectFit="cover"
                        className="rounded-full scale-[1.35]"
                      />
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


