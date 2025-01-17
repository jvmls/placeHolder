"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

import { useState } from "react";

import DraggableSidebar from "./draggableSidebar";
import DefaultSidebarContent from "./defaultSidebarContent";

export default function GameSidebar() {
  const [view, setView] = useState("default");

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-black text-white">
        {view === "default" ? (
          // Default Sidebar Content
          <DefaultSidebarContent setView={setView} />
        ) : (
          // EnemiesList Sidebar Content
          <DraggableSidebar setView={setView} />
        )}
      </SidebarContent>
    </Sidebar>
  );
}
