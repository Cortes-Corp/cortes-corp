"use client";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Search,
  Banknote,
  PieChart,
  Landmark,
  MessageCircleMore,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/app/components/ui/button";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Input } from "@/app/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/app/components/ui/sheet";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Chatbar({ children }: { children: ReactNode }) {
  const path = usePathname();
  const { user } = useKindeBrowserClient();
  return (
    <div className="grid h-screen fixed w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex  max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <p className="text-2xl  text-black">Cortes Corp</p>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 transition-all text-sm font-medium lg:px-4">
              {items.map((item) => {
                return (
                  <Link
                    className={`${
                      path.includes(item.path)
                        ? "bg-muted text-primary"
                        : "text-muted-foreground"
                    } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all duration-300 hover:text-primary `}
                    href={item.path}>
                    {item.icon}
                    {item.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="mt-auto p-4"></div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="#"
                  className="flex items-center gap-2 text-lg font-semibold">
                  <p className="text-2xl  text-white">Cortes Corp</p>
                </Link>

                {items.map((item) => {
                  return (
                    <Link
                      className={`${
                        path.includes(item.path)
                          ? "bg-muted text-primary"
                          : "text-muted-foreground"
                      } mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 transition-all duration-300`}
                      href={item.path}>
                      {item.icon}
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex justify-end w-full">
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full ">
                  <Avatar>
                    <AvatarImage src={user?.picture!}></AvatarImage>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>{" "}
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutLink>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </LogoutLink>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex h-full overflow-scroll  flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

const items = [
  {
    title: "Overview",
    icon: <Home className="h-4 w-4" />,
    path: "/dashboard/overview",
  },
  {
    title: "Budgets",
    icon: <Banknote className="h-4 w-4" />,
    path: "budgets",
  },
  {
    title: "Reports",
    icon: <PieChart className="h-4 w-4" />,
    path: "reports",
  },
  {
    title: "Connect Your Bank",
    icon: <Landmark className="h4 w-4" />,
    path: "connect-your-bank",
  },
];
