"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { EllipsisVertical } from "lucide-react";

import { useRouter } from "next/navigation";

import { DropdownMenuGroup } from "@radix-ui/react-dropdown-menu";

interface PlayerDropMenuProps {
  gameId: string;
  onDelete: (game_id: String) => void;
  onEdit: (game_id: String) => void;
}

export default function PlayerDropMenu({
  gameId,
  onDelete,
  onEdit,
}: PlayerDropMenuProps) {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className=" rounded">
          <EllipsisVertical />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="text-white rounded bg-slate-900">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="divide-y-2 divide divide-slate-800">
            <DropdownMenuItem
              className="text-blue-700 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              Open
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-blue-700 cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            >
              Play
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-blue-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(gameId);
              }}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-blue-700 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(gameId);
              }}
            >
              Leave
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
