"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { useAgents } from "../state/useAgents";
import HamburgerButton from "../(pages)/dashboard/edit-website/HamburgerButton";
export default function Sidebar({ items }: any) {
  const path = usePathname();
  const {isActive, setIsActive} = useAgents();
  console.log
  return (
    <div className="transition-all">
      <nav className="hidden bg-red-600 h-screen p-5 w-[260px] md:block">
        <Link href="/">
          <p className="text-2xl mb-6 text-white">Cortes Corp</p>
        </Link>

        <h2 className="text-gray-200 mb-2">MAIN MENU</h2>
        <ul className="flex flex-col gap-5">
          {items.map((item: any) => {
            const includes = path.toLowerCase().includes(item.link);
            return (
              <Link href={`/dashboard/${item.link}`}>
                <li
                  className={`flex transition-all duration-300  gap-2 items-center ${
                    includes
                      ? "text-white bg-red-700 p-2 rounded-md"
                      : "text-slate-200"
                  } cursor-pointer `}>
                  <div className="">{item.icon}</div>
                  <p className="  ">
                    {item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>


      <nav className={`flex items-center h-screen flex-col transition-all duration-300 ${isActive ? "right-0" : "right-[100%]" } bg-red-600 absolute h-screen z-[10000] p-5 w-screen md:hidden`}>
        <Link href="/">
          <p className="text-2xl mb-6 text-white">Cortes Corp</p>
        </Link>

       
        <ul className="flex flex-col items-center gap-20 justify-center mt-20">
          {items.map((item: any) => {
            const includes = path.toLowerCase().includes(item.link);
            return (
              <Link href={`/dashboard/${item.link}`}>
                <li onClick={() => setIsActive(!isActive)}
                  className={`flex transition-all text-4xl   items-center ${
                    includes
                      ? "text-white bg-red-700  p-2 rounded-md"
                      : "text-slate-200"
                  } cursor-pointer px-10 gap-5`}>
                  <div className="">{item.icon}</div>
                  <p className="  ">
                    {item.title.slice(0, 1).toUpperCase() + item.title.slice(1)}
                  </p>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
