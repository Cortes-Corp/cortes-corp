import { create } from "zustand";


interface tasksState {
    addThis: string
    setAddThis: (text: string) => void;
}

export const useTasks = create<tasksState>((set, get) => ({
    addThis: "",
    setAddThis: (text: string) => set({addThis: text})
}))