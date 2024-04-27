"use client";
import Link from "next/link";
import { Search } from "lucide-react";
import {
  Bell,
  Home,
  Menu,
  Banknote,
  PieChart,
  Landmark,
  UserPlus,
} from "lucide-react";
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
import { Sheet, SheetContent, SheetTrigger } from "@/app/components/ui/sheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { useState, useEffect, ReactNode } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { usePathname } from "next/navigation";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { createNewRoom, getRooms, getUsers } from "../chat-actions/actions";
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
  const [formData, setFormData] = useState<string>("");
  const [chatterID, setChatterId] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<UserProfile[]>([]);
  const [isSelected, setisSelected] = useState(false);
  const router = useRouter();
  const path = usePathname();


  const { user } = useKindeBrowserClient();

  useEffect(() => {
    if (!users) return;
    setFilteredUsers(users);
  }, [users]);
  useEffect(() => {
    const fetchRooms = async () => {
      const res = await getRooms();
      if (!Array.isArray(res)) {
        console.error(res);
        return;
      } else {
        console.log(res);
        setRooms(res);
        
      }
    };
    fetchRooms();
  }, []);
  useEffect(() => {
    if (!rooms) return;

    if (path === "/chat") {
      router.push(`/chat/${rooms[0].id}`);
    }
  }, [rooms]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers();
      if (!Array.isArray(res)) {
        console.error("error", res);
        return;
      } else {
        setUsers(res as UserProfile[]);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = users?.filter((user) => {
      return user.firstName
        .toLowerCase()
        .includes(formData.split(" ")[0].toLowerCase());
    });
    setFilteredUsers(filtered ?? []);
  }, [formData]);
 
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

  const handleCreateChat = () => {
    if (
      !users?.find((user) => {
        const [first, last] = formData.split(" ");

        return (
          user.firstName.toLowerCase() === first.toLowerCase() &&
          user.lastName.toLowerCase() === last.toLowerCase() &&
          user.id == chatterID
        );
      })
    ) {
      alert("Could not find User");
    } else {
      const newRoom = createNewRoom(user?.id!, chatterID)
      console.log(newRoom)
    }
  };

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
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-red-500 items-center gap-2 flex p-2 w-fit text-white rounded-md">
                    <BadgePlus></BadgePlus>

                    <p>Create new message</p>
                  </button>
                </DialogTrigger>
                <DialogContent className=" w-[23rem] h-[15rem] sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create new chat</DialogTitle>
                    <DialogDescription>
                      Select who you want to chat with
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center">
                    <div className="relative flex gap-4 py-4">
                      <form className="">
                        <div className="flex items-center gap-2">
                          <Search></Search>
                          <Input
                            autoComplete="off"
                            id="username"
                            value={formData}
                            onChange={(e) => {
                              setFormData(e.target.value);
                              setisSelected(false);
                            }}
                            className="col-span-3 focus:ring-red-600"
                          />
                        </div>

                        {filteredUsers?.length > 0 &&
                          formData !== "" &&
                          !isSelected && (
                            <ul className="absolute  left-0 right-0  mt-1 p-1 z-10 bg-white w-full rounded-md shadow-lg overflow-scroll">
                              {filteredUsers.map((user) => (
                                <div className="w-full">
                                  <AlertDialog>
                                    <AlertDialogTrigger className="w-full flex flex-col items-center">
                                      <li
                                        className="hover:bg-slate-50 flex flex-col items-center justify-center  w-40 cursor-pointer  "
                                        key={user.id}
                                        value={user.id}>
                                        {user.firstName + " " + user.lastName}
                                      </li>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>
                                          Is this the person you want to chat
                                          with
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                          <div>
                                            <p>
                                              Name:
                                              {" " +
                                                user.firstName +
                                                " " +
                                                user.lastName}
                                            </p>
                                            <p>Email: {"" + user.email}</p>
                                          </div>
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>
                                          No
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="bg-red-600 hover:bg-red-700"
                                          onClick={() => {
                                            setFormData(
                                              user.firstName +
                                                " " +
                                                user.lastName
                                            );
                                            setChatterId(user.id);
                                            setisSelected(true);
                                          }}>
                                          Yes
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>{" "}
                                </div>
                              ))}
                            </ul>
                          )}
                      </form>
                    </div>
                    <DialogFooter></DialogFooter>
                    <Button className="bg-red-600 hover:bg-red-700" onClick={handleCreateChat} type="submit">
                      Create Chat
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
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
                      <div>{item.lastName}</div>
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
            <Link href="/" className="flex items-center  font-semibold">
              <p className="text-2xl  text-black">Cortes Corp</p>
            </Link>
              <nav className="grid gap-2 text-lg font-medium">
                
                
                <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-red-500 items-center gap-2 text-sm mb-4 flex p-2 w-fit text-white rounded-md">
                    <BadgePlus></BadgePlus>
                    <p>Create new message</p>
                  </button>
                </DialogTrigger>
                <DialogContent className=" rounded-md w-[23rem] h-[15rem] sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Create new chat</DialogTitle>
                    <DialogDescription>
                      Select who you want to chat with
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col items-center">
                    <div className="relative flex gap-4 py-4">
                      <form className="">
                        <div className="flex items-center gap-2">
                          <Search></Search>
                          <Input
                            autoComplete="off"
                            id="username"
                            value={formData}
                            onChange={(e) => {
                              setFormData(e.target.value);
                              setisSelected(false);
                            }}
                            className="col-span-3 focus:ring-red-600"
                          />
                        </div>

                        {filteredUsers?.length > 0 &&
                          formData !== "" &&
                          !isSelected && (
                            <ul className="absolute  left-0 right-0  mt-1 p-1 z-10 bg-white w-full rounded-md shadow-lg overflow-scroll">
                              {filteredUsers.map((user) => (
                                <div className="w-full">
                                  <AlertDialog>
                                    <AlertDialogTrigger className="w-full flex flex-col items-center">
                                      <li
                                        className="hover:bg-slate-50 flex flex-col items-center justify-center  w-40 cursor-pointer  "
                                        key={user.id}
                                        value={user.id}>
                                        {user.firstName + " " + user.lastName}
                                      </li>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>
                                          Is this the person you want to chat
                                          with
                                        </AlertDialogTitle>
                                        <AlertDialogDescription>
                                          <div>
                                            <p>
                                              Name:
                                              {" " +
                                                user.firstName +
                                                " " +
                                                user.lastName}
                                            </p>
                                            <p>Email: {"" + user.email}</p>
                                          </div>
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>
                                          No
                                        </AlertDialogCancel>
                                        <AlertDialogAction className="bg-red-600 hover:bg-red-700"
                                          onClick={() => {
                                            setFormData(
                                              user.firstName +
                                                " " +
                                                user.lastName
                                            );
                                            setChatterId(user.id);
                                            setisSelected(true);
                                          }}>
                                          Yes
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>{" "}
                                </div>
                              ))}
                            </ul>
                          )}
                      </form>
                    </div>
                    <DialogFooter></DialogFooter>
                    <Button className="bg-red-600 hover:bg-red-700" onClick={handleCreateChat} type="submit">
                      Create Chat
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

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
                        <div>{item.lastName}</div>
                      </div>
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
