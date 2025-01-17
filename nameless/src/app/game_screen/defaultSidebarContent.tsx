import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Dices, Hand, Home, Settings } from "lucide-react";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { useState } from "react";

export default function DefaultSidebarContent({
  setView,
}: {
  setView: (view: string) => void;
}) {
  const [rola, setRola] = useState<string[]>([]);

  function rolaAgen() {
    const rolada = `ROOOOOOOOLA: ${Math.floor(Math.random() * 20) + 1}`;
    setRola((prev) => [...prev, rolada]);
  }

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
  return (
    <>
      <SidebarTrigger className="shadow-sm hover:bg-white" />
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
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
        <SidebarGroupContent className="space-y-4 flex flex-row items-center justify-between">
          <SidebarMenu className="w-full gap-2 flex-row">
            <SidebarMenuItem>
              <SidebarMenuButton
                className="w-full"
                onClick={() => setView("enemies")}
              >
                <Hand />
                <span>Draggables:</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
      <Separator className="my-4 h-0.5 bg-slate-800 rounded" />
      <SidebarGroup>
        <SidebarGroupLabel className="w-full gap-5 items-start text-white flex flex-col">
          <Dices /> Rolls:
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <ScrollArea className="w-full h-40 bg-gray-800 p-2 rounded overflow-y-scroll text-sm scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700">
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
    </>
  );
}
