"use client";

import { Home, Search, Settings } from "lucide-react";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

import { ScrollArea } from "@radix-ui/react-scroll-area";

import EnemiesList from "../data/draggableList";

const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Menu items.
const items = [
  {
    title: "Back to Player Page",
    url: "player",
    icon: Home,
  },

  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const searchItems = [
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
];

export default function GameSidebar() {
  const [rola, setRola] = useState<string[]>([]);

  function rolaAgen() {
    const rolada = `ROOOOOOOOLA: ${Math.floor(Math.random() * 20) + 1}`;
    setRola((prev) => [...prev, rolada]);
  }

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-black text-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-white">
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarTrigger className=" shadow-sm hover:bg-white" />

              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator className="my-4 h-0.5 bg-slate-800 rounded" />
        <SidebarGroup>
          <SidebarGroupLabel className="w-full gap-5 items-start text-white flex flex-col">
            Draggable Objects:
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div
              className="h-10 w-10 bg-pink-500 text-black cursor-pointer select-none"
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("objectType", "pinkBox")
              }
            >
              Pink Box
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-4 h-0.5 bg-slate-800 rounded" />
        <SidebarGroup>
          <SidebarGroupLabel className="w-full gap-5 items-start text-white flex flex-col">
            Rolls:
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <ScrollArea className="w-full h-40 bg-gray-800 p-2 rounded overflow-y-scroll text-sm scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
              <></>
              {rola.length > 0 ? (
                rola.map((rola, index) => (
                  <div key={index} className="text-white">
                    {rola}
                    <Separator className="my-2 bg-slate-500" />
                  </div>
                ))
              ) : (
                <div className="text-white">CADE A BINBADAAAAAAAAAAAAAA</div>
              )}
            </ScrollArea>
            <Button
              onClick={rolaAgen}
              className="mt-4 bg-blue-600 hover:bg-blue-500 text-white"
            >
              BINBE!
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
