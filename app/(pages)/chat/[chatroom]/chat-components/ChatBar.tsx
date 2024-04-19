"use client";
import Link from "next/link";
import { Bell, Home, Menu, Banknote, PieChart, Landmark } from "lucide-react";
import { chat_room } from "@prisma/client";
import { BadgePlus } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";
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
import { useState, useEffect, ReactNode } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getRooms, getUsers } from "../chat-actions/actions";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

type UserProfile = {
  createdOn: string;
  email: string;
  failedSignIns: number;
  firstName: string;
  id: string;
  isSuspended: boolean;
  lastName: string;
  lastSignedIn: string;
  picture: string;
  totalSignIns: number;
};
export default function Chatbar({ children }: { children: ReactNode }) {
  const [rooms, setRooms] = useState<chat_room[]>();
  const [users, setUsers] = useState<UserProfile[]>();
  const router = useRouter()
  const path = usePathname();
  console.log(path)
  
  const { user } = useKindeBrowserClient();

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await getRooms();
      if (!Array.isArray(res)) {
        console.error(res);
        return;
      } else {
        console.log(res);
        setRooms(res);
        console.log(res[0].member_names);
      }
    };
    fetchRooms();
  }, []);
  useEffect(() => {
    if (!rooms) return;

    if (path === "/chat") {
    router.push(`/chat/${rooms[0].id}`)
  }
}, [rooms])
  
  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      if (!Array.isArray(res)) {
        console.error("error", res);
        return;
      } else {
        console.log("hello", res);
        setUsers(res as UserProfile[]);
      }
    };
    fetchUsers();
  }, []);

  const chatbarItems = rooms?.map((room) => {
    const otherPerson = room.members.filter((member) => member !== user?.id)[0];
    const otherPersonsInfo = users?.find((user) => user.id === otherPerson);

    return {
      src: otherPersonsInfo?.picture,
      firstName: otherPersonsInfo?.firstName,
      lastName: otherPersonsInfo?.lastName,
      path: `/chat/${room.id}`,
    };
  });
  console.log(rooms);
  




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
              <button className="bg-red-500 items-center gap-2 flex p-2 w-fit text-white rounded-md">
                <BadgePlus></BadgePlus>
                <p>Create new message</p></button>
              <p className="p-3 text-md">Messages</p>
              {chatbarItems?.map((item) => {
                return (
                  <Link
                    className={`${
                      path.includes(item.path)
                        ? "bg-muted text-primary"
                        : "text-muted-foreground"
                    } flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground  transition-all duration-300 hover:text-primary `}
                    href={item.path}>
                    <Avatar>
                      <Image
                        alt={"profile pic"}
                        src={item.src!}
                        width={50}
                        height={50}></Image>
                    </Avatar>
                    <div className="flex gap-1 text-sm">
                      <div>{item.firstName}</div>
                      <div>
                        {item.lastName}
                      </div>
                      
                    </div>
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
