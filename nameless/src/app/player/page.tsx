"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const tables = [
  {
    table_name: "Table 1",
    table_status: "Complete",
    players: "@x, @y, @z, @w, @a",
    system: "DnD 5e",
    character: "Daniel Paladino",
  },
  {
    table_name: "Table 2",
    table_status: "Currently Playing",
    players: "@x, @y, @z, @w, @a",
    system: "Call of Cthulhu",
    character: "Chigga",
  },
  {
    table_name: "Table 3",
    table_status: "Not Started",
    players: "@x, @y, @z, @w, @a",
    system: "Vampire The Masquerade",
    character: "Wigga",
  },
  {
    table_name: "Table 4",
    table_status: "Complete",
    players: "@x, @y, @z, @w, @a",
    system: "DnD 3.5",
    character: "Nigga",
  },
  {
    table_name: "Table 5",
    table_status: "Hiatus",
    players: "@x, @y, @z, @w, @a",
    system: "Call of Cthulhu",
    character: "Alberto Roberto",
  },
];

export default function PlayerPage() {
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
  const router = useRouter();
  function handleRowClick() {
    console.log("Row clicked");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <h1>Welcome to the player page!</h1>
      <h1>Here, you can view all your RPG tables and/or characters</h1>
      <Button
        variant="outline"
        className="hover:bg-gray-500 transition-colors duration-300 rounded"
        type="submit"
      >
        Character List
      </Button>
      <h1>List of tables you're in:</h1>
      <div>
        <Table>
          <TableCaption>YOUR RPG TABLES.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>System</TableHead>
              <TableHead className="text-right">Players</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tables.map((table) => (
              <TableRow
                key={table.table_name}
                onMouseEnter={() => setHoveredCharacter(table.character)}
                onMouseLeave={() => setHoveredCharacter(null)}
                onClick={() => router.push("/redirecionar")} // Redirects to /redirecionar needs to be inplemented with the api it is a placeholder for now
                className="cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              >
                <TableCell className="font-medium">
                  {table.table_name}
                </TableCell>
                <TableCell>{table.table_status}</TableCell>
                <TableCell>{table.system}</TableCell>
                <TableCell className="text-right">{table.players}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                {hoveredCharacter && (
                  <span className="text-green-500">
                    You're playing as: {hoveredCharacter}
                  </span>
                )}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
