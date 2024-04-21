"use client";
import { useAgents } from "@/app/state/useAgents";
import { useState } from "react";
import { Agent } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import UpdateAgentForm from "./UpdateAgentForm";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,

} from "@/app/components/ui/alert-dialog";
export default function AgentCards() {

const { agents, fetchAgents, refetchAgents, isLoading, setIsLoading, setOpenUpdateForm, openUpdateForm } =
    useAgents();
  const [openAlert, setOpenAlert] = useState(false);
  const [agentToDelete, setAgentToDelete] = useState<Agent>();
  const [agentToUpdate, setAgentToUpdate] = useState<Agent>();
 

  

  const handleDelete = async () => {
    try {
      if (!agentToDelete) {
        console.error("no agent to delete");
        throw new Error("no agent was selected");
      }
      setIsLoading(true);
      const res = await fetch("/api/agent", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ agentToDelete }),
      });
      if (!res.ok) {
        console.error(res);
        throw new Error("unable to delete");
      }
      await refetchAgents();
      setIsLoading(false);
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAgents();
  }, []);
  if (!agents) return;
  if (isLoading) {
    return (
      <div className="h-[80vh] w-full flex items-center justify-center">
        <ClipLoader color="#DC2626" loading={true} size={50} />
      </div>
    );
  }

  const handleUpdate = async () => {};
  
  if (!agents) return;
  
  return (
    <div>
      <div className="p-5 flex flex-col ">

        {agentToUpdate && (<UpdateAgentForm agent={agentToUpdate!} setOpen={setOpenAlert} open={openUpdateForm}></UpdateAgentForm>)}
        <AlertDialog open={openAlert} onOpenChange={setOpenAlert}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this
                agent and remove the agents data from your database.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction
                className="bg-red-600 hover:bg-red-700"
                onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ul className="mt-16 flex items-center flex-wrap  gap-10">
          {agents.map((agent, index) => {
            return (
              <li
              
                key={index}
                className=" transition-all duration-500   flex-col  gap-20">
                <div className="flex   flex-col items-center">
                  <div className="flex shadow-md border-[5px] border-white  justify-center  items-center rounded-full overflow-hidden w-[5rem] h-[5rem]">
                    <Image
                      src={agent.src}
                      alt={agent.name}
                      width={50}
                      height={50}
                      objectFit="cover"
                      className="rounded-full scale-[1.35]"
                    />
                  </div>
                  <p className="font-medium text-md text-center">
                    {agent.name}
                  </p>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button onClick={() => setAgentToDelete(agent) } className="bg-red-600 rounded-md mt-3 font-medium p-1 px-3 text-sm  text-white  hover:bg-red-700 transition duration-300">
                        More options
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                      <DropdownMenuLabel>Options</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuGroup>
                        <DropdownMenuItem
                          onSelect={() => {
                            setOpenAlert(true);
                            setAgentToDelete((agentToDelete) => agent);
                          }}>
                          Delete Agent
                          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                        </DropdownMenuItem>{" "}
                        
                          <DropdownMenuItem
                            onSelect={() => {
                              setOpenUpdateForm(true);
                              setAgentToUpdate((agentToUpdate) => agent);
                            }}>
                            Edit Agent
                            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                          </DropdownMenuItem>
                   
                        <DropdownMenuItem>
                          Chats
                          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
