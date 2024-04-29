"use client"
import { Menu } from "lucide-react"
import { useAgents } from "@/app/state/useAgents"
export default function HamburgerButton() {
    const { isActive, setIsActive } = useAgents();
    return (
        <div>
            <button className="block  md:hidden" onClick={() => setIsActive(!isActive)}>
               <Menu color={isActive ? "white" : "black"} size={30} /> 
            </button>
            
        </div>
    )
}