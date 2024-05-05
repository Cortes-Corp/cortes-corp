import HamburgerButton from "../edit-website/HamburgerButton";
import KanbanBoard from "@/app/(pages)/dashboard/tasks/task-components/KanbanBoard";
import ContactRequests from "./task-components/ContactRequests";

export default function Tasks() {
  return (
    <div className="overflow-scroll h-screen">
      <div className="flex p-5  gap-3 items-center">
        <div className="flex z-[100000] md:hidden">
          <HamburgerButton />
        </div>

        <h2 className="text-2xl  font-medium">Tasks</h2>
      </div>

      <div className="p-5">
        <KanbanBoard />
        <div className="mt-5  text-lg font-semibold">
          <h2 className="mb-5">Contact Requests</h2>
          <div>
            <ContactRequests />
          </div>
        </div>
        
      </div>
    </div>
  );
}
