import { create } from "zustand";
import { Agent } from "@prisma/client";

interface AgentStore {
  agents: null | Array<Agent>;
  isLoading: boolean;
  setIsLoading: (bool: boolean) => void;
  setAgents: (newAgents: Array<Agent>) => void;
  refetchAgents: () => Promise<void>;
  fetchAgents: () => Promise<void>;
}
export const useAgents = create<AgentStore>((set, get) => ({
  agents: null,
  isLoading: false,
  setIsLoading: (bool: boolean) => set({ isLoading: bool }),
  setAgents: (newAgents: Array<Agent>) => {
    set({ agents: newAgents });
  },
  refetchAgents: async () => {
    try {
      const BASE_URL =
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

      const res = await fetch(`${BASE_URL}/api/agent`);
      if (!res.ok) {
        throw new Error("Failed to fetch agents");
      }
      const parsedData = await res.json();
      set({ agents: parsedData });
      localStorage.setItem("agents", JSON.stringify(get().agents));
    } catch (err) {
      console.error(err);
    }
  },
  fetchAgents: async () => {
    const { refetchAgents, agents } = get();
    if (agents !== null) return;

    const localAgents = JSON.parse(localStorage.getItem("agents") as string);
    if (localAgents) {
      set({ agents: localAgents });
    } else {
      await refetchAgents();
      const updatedAgents = get().agents;
      localStorage.setItem("agents", JSON.stringify(updatedAgents));
    }
  },
}));
