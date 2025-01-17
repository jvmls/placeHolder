import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { useState } from "react";
import EnemiesList from "../data/draggableList";

export default function DraggableSidebar({
  setView,
}: {
  setView: (view: string) => void;
}) {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
        <Button
          variant="ghost"
          size="sm"
          className="text-white"
          onClick={() => setView("default")}
        >
          <ArrowLeft />
          <span className="ml-2">Back</span>
        </Button>
      </div>
      <Separator className="my-4 h-0.5 bg-slate-800 rounded" />
      <SidebarGroup>
        <SidebarGroupLabel className="text-white">Enemies</SidebarGroupLabel>
        <SidebarGroupContent>
          {EnemiesList.map((enemy, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) =>
                e.dataTransfer.setData("enemy", JSON.stringify(enemy))
              }
              className="cursor-pointer"
            >
              <Avatar className="h-16 w-16">
                <AvatarImage src={enemy.style.backgroundImage.slice(5, -2)} />
                <AvatarFallback>{enemy.enemy[0]}</AvatarFallback>
              </Avatar>
              <div className="text-center text-sm mt-2">{enemy.enemy}</div>
            </div>
          ))}
        </SidebarGroupContent>
      </SidebarGroup>
    </>
  );
}
