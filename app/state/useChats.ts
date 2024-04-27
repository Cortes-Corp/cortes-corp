import { create } from "zustand";


interface roomState {
    refetchRoom: boolean;
    setRefetchRoom: (bool: boolean) => void;
}

export const useRooms = create<roomState>((set, get) => ({
    refetchRoom: false,
    setRefetchRoom: (bool: boolean) => {set({refetchRoom: bool})}
}))