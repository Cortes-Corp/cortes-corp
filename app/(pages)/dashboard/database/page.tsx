"use client";
import React from "react";
import { Database } from "lucide-react";
import { PinContainer } from "@/app/components/ui/3d-pin";
import HamburgerButton from "../edit-website/HamburgerButton";
export default function AnimatedPinDemo() {
  return (
    <div>
       <div className="flex p-5  gap-3 items-center">
          <div className="flex z-[100000]   md:hidden">
            <HamburgerButton />
          </div>

          <h2 className="text-2xl  font-medium">Database</h2>
        </div>
      <div className="h-[90vh] w-full flex-col flex items-center justify-center ">
        <PinContainer
          title="/supabase.com"
          href="https://twitter.com/mannupaaji">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-black">
              Supabase DB
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">
                Supabase is where your database is hosted
              </span>
            </div>
            <div
              className="flex flex-1 items-center justify-center w-full rounded-lg mt-4 bg-gradient-to-br from-red-600 via-red-600 
                  to-red-500">
              <Database size="70" color="white"></Database>
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
