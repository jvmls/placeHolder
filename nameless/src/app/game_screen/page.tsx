"use client";

import { Sidebar } from "lucide-react";
import GamePanel from "./gamePanel";
import GameSidebar from "./gameSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function GameScreen() {
  return (
    <SidebarProvider className=" ">
      <GameSidebar />

      <div className="flex h-screen w-screen">
        <GamePanel />
      </div>
    </SidebarProvider>
  );
}
