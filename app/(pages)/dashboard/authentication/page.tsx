import { HoverEffect } from "@/app/components/ui/card-hover-effect";
import { Cog, BookUser, UsersRound } from "lucide-react";
import HamburgerButton from "../edit-website/HamburgerButton";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
export default async function Authentication() {
  const { getPermissions } = getKindeServerSession();
  const permissions = await getPermissions();
  if (!permissions?.permissions?.includes("is:admin")) return;
  return (
    <div>
      <div className="flex p-5  gap-3 items-center">
        <div className="flex z-[100000]   md:hidden">
          <HamburgerButton />
        </div>

        <h2 className="text-2xl  font-medium">Authentication</h2>
      </div>
      <div className="  w-full md:h-[90vh] flex items-center justify-center  mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Users",
    description: <UsersRound size={60}></UsersRound>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:users::_:submenu&s:list",
  },
  {
    title: "Roles",
    description: <BookUser size={60}></BookUser>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:roles",
  },
  {
    title: "Settings",
    description: <Cog size={60}></Cog>,
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:business_details",
  },
];
