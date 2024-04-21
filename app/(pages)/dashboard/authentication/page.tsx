import { HoverEffect } from "@/app/components/ui/card-hover-effect";

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
      "View / access information for all users. This is also where you can assign roles to your agents",
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:users::_:submenu&s:list",
  },
  {
    title: "Roles",
    description:
      "View and update available roles. This is wher you can give exclusive access to features on the website to your agents",
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:roles",
  },
  {
    title: "Settings",
    description:
      "Access general Authentication settings for your website",
    link: "https://cortescorp.kinde.com/admin/cx/_:nav&m:settings::_:submenu&s:business_details",
  },
  
  
];
