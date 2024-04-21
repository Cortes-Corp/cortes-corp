"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar({ items }: any) {
  const path = usePathname();
  return (
    <div>
      <nav className="bg-red-600 h-screen p-5 w-[260px]">
        <Link href="/">
          <p className="text-2xl mb-6 text-white">Cortes Corp</p>
        </Link>
      
    
        <h2 className="text-gray-200 mb-2">MAIN MENU</h2>
        <ul className="flex flex-col gap-5">
          {items.map((item: any) => {
            const includes = path
              .toLowerCase()
              .includes(item.link);
            return (
              <Link href={`/dashboard/${item.link}`}>
                <li
                  className={`flex transition-all  gap-2 items-center ${
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
    </div>
  );
}
