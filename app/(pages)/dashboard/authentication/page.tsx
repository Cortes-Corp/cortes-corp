import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { Cog, BookUser, UsersRound } from "lucide-react";
export default function Authentication() {
  return (
    <div className="w-full h-full flex items-center justify-center  mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Users",
    description:
      <UsersRound size={60} ></UsersRound>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:users::_:submenu&s:list",
  },
  {
    title: "Roles",
    description: <BookUser size={60}></BookUser>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:roles",
  },
  {
    title: "Settings",
    description:
    <Cog size={60}></Cog>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:business_details",
  },
  
  
];
