"use client";
import { useEffect, useState } from "react";
import { claimContactRequests, getContactRequests } from "../taskActions";
import { contact_request as ContactRequest } from "@prisma/client";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
type ErrorObj = {
  error: Error;
};
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useTasks } from "@/app/state/useTasks";
import { createCard } from "../taskActions";
export default function ContactRequests() {
  const { setAddThis } = useTasks();
  const { user } = useKindeBrowserClient();
  const [refetchReqs, setRefetchReqs] = useState(false);
  console.log(user);
  const [contactRequests, setContactRequests] = useState<
    ContactRequest[] | null
  >(null);

  useEffect(() => {
    const fetchContactRequests = async () => {
      const res = await getContactRequests();
      setContactRequests(res);
    };
    fetchContactRequests();
  }, [refetchReqs]);

  const handleContactClaim = async (name: string, id: string) => {
    const createdCard = await createCard(`Contact ${name} `, "todo");
    const claimed = await claimContactRequests(id);
    setRefetchReqs(!refetchReqs);
    setAddThis(`Contact ${name}`);
  };
  console.log(contactRequests);
  if (!contactRequests || !contactRequests.length) return <div>None so far</div>;
  return (
    <div className="flex flex-col gap-5">
      {contactRequests?.map((client) => {
        if (client.claimed_by !== "" && client.claimed_by !== user?.id) return;

        return (
          <div className="flex items-center gap-5">
            <div className="bg-gray-100 flex gap-5 px-4 items-center font-normal p-3 w-fit rounded-md ">
              <div className="flex gap-1">
                <p className="text-red-600">{client.name.split(" ")[0]}</p> made
                a contact request
              </div>
              <Dialog>
                <DialogTrigger>
                  <Button className="bg-red-600 hover:bg-red-700">
                    More info
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <div className="flex flex-col gap-2 text-lg">
                    <p>Name: {client.name}</p>
                    <p>email: {client.email}</p>
                    <p>number: {client.phone_number}</p>
                    <p>Message:</p>
                    <p className="text-red-600">{client.message}</p>
                  </div>
                </DialogContent>
              </Dialog>
              {client.claimed_by === "" && (
                <Button
                  onClick={() => handleContactClaim(client.name, client.id)}
                  className="bg-red-600 hover:bg-red-700">
                  Claim Request
                </Button>
              )}
              {client.claimed_by !== "" && <p>Claimed by you</p>}
                </div>
              
          </div>
        );
      })}
    </div>
  );
}
