import HamburgerButton from "../edit-website/HamburgerButton";
import KanbanBoard from "@/app/(pages)/dashboard/tasks/task-components/KanbanBoard";

export default function Tasks() {

  return (
    <div>
      <div className="flex p-5  gap-3 items-center">
        <div className="flex z-[100000] md:hidden">
          <HamburgerButton />
        </div>

        <h2 className="text-2xl  font-medium">Contact Requests</h2>
          </div>
          
          <div>
              <KanbanBoard />
    
          </div>
    </div>
  );
}
