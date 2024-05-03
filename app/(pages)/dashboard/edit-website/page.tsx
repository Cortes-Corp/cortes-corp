import HamburgerButton from "./HamburgerButton";
import AgentCards from "./AgentCards";
import AddAgentForm from "./AddAgentForm";
import { Menu } from "lucide-react";
import AddListingForm from "./AddListingForm";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Agents() {
  const { getPermissions } = getKindeServerSession();
  const permissions = await getPermissions();
  console.log(permissions)
  if (!permissions?.permissions?.includes("is:admin")) return;

  return (
    <div className="overflow-y-scroll">
      <div className="w-full p-5">
        <div className="flex  gap-3 items-center">
          <div className="flex z-[100000]   md:hidden">
            <HamburgerButton />
          </div>

          <h2 className="text-2xl  font-medium">Edit Website</h2>
        </div>

        <div className="w-full flex flex-col items-center border-b-2 pb-10 justify-center">
          <div className="flex gap-5   items-center mt-5">
            <h2 className="text-xl font-medium">Featured Agents</h2>
            <AddAgentForm></AddAgentForm>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Agents that will show for clients on the website
          </p>
          <div className="">
            <AgentCards></AgentCards>
          </div>{" "}
        </div>
        <div className="w-full flex flex-col items-center justify-center">
          <div className="flex gap-5   items-center mt-10">
            <h2 className="text-xl font-medium">Featured Listings</h2>
            <AddListingForm />
          </div>

          <p className="text-slate-500 text-sm mt-1">
            Listings that will show for clients on the website

          </p>
        </div>
      </div>
    </div>
  );
}
