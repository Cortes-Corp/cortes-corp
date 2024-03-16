"use client"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar({ items }: any) {
    const path = usePathname()
  return (
    <div>
      <nav className="bg-slate-50 h-screen p-5 w-[300px]">
        <Image
          className="mb-6"
          src="/cortes-corp-logo2.png"
          alt="logo"
          width={200}
          height={200}></Image>
        <h2 className="text-slate-400 mb-2">MAIN MENU</h2>
        <ul className="flex flex-col gap-5">
                  {items.map((item: any) => {
               const includes = path.toLowerCase().includes(item.title.toLowerCase());
            return (
              <Link href={`/dashboard/${item.title}`}>
                <li className={`flex transition-all  gap-2 items-center ${includes ? "text-red-600 bg-white p-2 rounded-md": "text-dash-gray" } ` }>
                  <div className="">{item.icon}</div>
                  <p className="font-medium  ">
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
