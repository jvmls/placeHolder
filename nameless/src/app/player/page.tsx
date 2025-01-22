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

import PlayerDropMenu from "@/components/playerDropMenu";

import games from "../data/constants/Games";

export default function PlayerPage() {
  const [hoveredCharacter, setHoveredCharacter] = useState<string | null>(null);
  const [tablerow, setTableRow] = useState(games.map((game) => ({ ...game })));
  const router = useRouter();

  const handleRemoveGame = (gameId: string) => {
    setTableRow((prevGames) =>
      prevGames.filter((game) => game.game_id !== gameId)
    );
  };

  function handleRowClick() {
    console.log("Row clicked");
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <h1>Here, you can create your games!!</h1>
      <Button
        variant="outline"
        className="hover:bg-gray-500 transition-colors duration-300 rounded"
        type="submit"
      >
        Create a Game
      </Button>
      <h1>List of games you're in:</h1>
      <div className="w-full max-w-4xl h-full max-h-96 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>System</TableHead>
              <TableHead className="text-right">Players</TableHead>
              <TableHead>Options</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="gap-2 overflow">
            {tablerow.map((game) => (
              <TableRow
                key={game.game_id}
                // onMouseEnter={() => setHoveredCharacter(game.character)}
                //onMouseLeave={() => setHoveredCharacter(null)}
                //onClick={() => router.push("/game_screen/gameID")} Redirects to /redirecionar needs to be inplemented with the api it is a placeholder for now
                className="cursor-pointer hover:bg-gray-800 transition-colors duration-200"
              >
                <TableCell className="font-medium">{game.game_name}</TableCell>
                <TableCell>{game.game_status}</TableCell>
                <TableCell>{game.game_system}</TableCell>
                <TableCell className="text-right">{game.game_system}</TableCell>
                <TableCell>{game.game_creation_date}</TableCell>
                <TableCell>
                  <PlayerDropMenu
                    gameId={game.game_id}
                    onRemove={handleRemoveGame}
                  />
                </TableCell>
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
