"use client";

import { Sidebar } from "lucide-react";
import GamePanel from "./gamePanel";
import GameSidebar from "./gameSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function GameScreen() {
  return (
    <SidebarProvider>
      <GameSidebar />

      <div className="flex h-screen w-screen">
        <SidebarTrigger className="bg-white p-2 border rounded shadow-md m-2 absolute" />
        <GamePanel />
      </div>
    </SidebarProvider>
  );
}
