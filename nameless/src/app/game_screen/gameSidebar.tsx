"use client";

import { Home, Search, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const SIDEBAR_KEYBOARD_SHORTCUT = "b";

// Menu items.
const items = [
  {
    title: "Back to Player Page",
    url: "player",
    icon: Home,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export default function GameSidebar() {
  const router = useRouter();

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
      </SidebarContent>
      <SidebarFooter className="bg-black text-white">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="flex h-12">
                  <Avatar>
                    <AvatarImage src="https://cdn.discordapp.com/attachments/687389331920519203/1326749882702102629/token_1.png?ex=67808f9d&is=677f3e1d&hm=ec4635b8d4626362099b2d6a17478121054757243506bb95b5f452f9971c7a26&" />
                    <AvatarFallback>HH</AvatarFallback>
                  </Avatar>
                  Chigga Orc
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="bottom"
                className="w-[--radix-popper-anchor-width] text-white"
              >
                <DropdownMenuItem>
                  <Button className="w-full">Character</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button className="w-full">Features</Button>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    className="w-full hover:bg-red-600"
                    onClick={() => router.push("/login")}
                  >
                    Exit
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
