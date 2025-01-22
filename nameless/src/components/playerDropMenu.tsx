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
  onRemove: (gameId: string) => void;
}

// when implement roles change name from leave to remove game and edit to only show for the DM
export default function PlayerDropMenu({
  gameId,
  onRemove,
}: PlayerDropMenuProps) {
  const router = useRouter();
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
              onClick={() => {
                router.push(`/player/${gameId}`);
              }}
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
              onClick={(e) => e.stopPropagation()}
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              className="text-blue-700 cursor-pointer"
              onClick={() => onRemove(gameId)}
            >
              Leave
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
