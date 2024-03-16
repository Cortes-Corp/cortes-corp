"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useRouter } from "next/router";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Agents", href: "/agents" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  const handleProfileClick = () => {};

  const path = usePathname();
  if (path.includes("dashboard")) {
    return;
  }
  let isWhite = path !== "/";

  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();
  console.log(user);

  const navScroll = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState<boolean | null>(null);

  const handleScroll = () => {
    if (window.scrollY >= 5) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div
      className={`${
        isWhite
          ? "sticky border-b  bg-white"
          : `fixed   ${scrolled && " bg-white  "}  `
      }  z-[600] w-full    top-0`}>
      <nav
        className={
          "bg-transparent mx-5   border-b-gray-200  duration-300  p-2 md:p-0"
        }>
        <div className="flex mx-5  items-center justify-between ">
          <Image
            src={
              isWhite || scrolled
                ? "/cortes-corp-logo2.png"
                : "/cortes-corp-logo .svg"
            }
            width={150}
            height={1}
            alt="cortes corp logo"
            className=""></Image>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-8 h-8"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <div
            className="hidden   w-full md:block md:w-auto"
            id="navbar-default">
            <ul className="font-normal items-center flex flex-col p-3 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((link) => (
                <li key={link.name} className="">
                  <Link href={link.href}>
                    <div
                      className={`block py-0 px-3 transition-all duration-300 ${
                        (path === "/" && link.name === "Home") ||
                        path === "/" + link.name.toLowerCase()
                          ? "text-white"
                          : "text-white"
                      } ${(isWhite || scrolled) && "md:text-black"} ${
                        (!scrolled || isWhite) && "text-gray-100"
                      } font-light rounded hover:bg-gray-100  md:hover:bg-transparent md:border-0 md:pt-1 pt-1 md:hover:text-red-600   md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent`}>
                      {link.name}
                    </div>
                  </Link>
                </li>
              ))}
              {!isAuthenticated && !isLoading && (
                <LoginLink className="text-white bg-red-600 hover:bg-red-700 font-medium  text-sm px-5 py-2.5 focus:outline-none dark:bg-red-600 dark:hover:bg-red-700 focus:ring-2 focus:ring-red-600 dark:focus:ring-red-700 self-center transition-all duration-300">
                  Sign in
                </LoginLink>
              )}

              {user?.picture && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      {" "}
                      <Image
                        src={user?.picture}
                        alt="Profile Picture"
                        width={40}
                        height={40}
                        className="rounded-full mx-auto my-2"></Image>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>My Account</DropdownMenuLabel>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem>Profile</DropdownMenuItem>
                      <DropdownMenuItem>
                        <LogoutLink>Sign Out</LogoutLink>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
