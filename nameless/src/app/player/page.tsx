"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import CreateGame from "@/components/createGameDialog";

import PlayerDropMenu from "@/components/playerDropMenu";
import { Skeleton } from "@/components/ui/skeleton";
import useBackendHandlers from "@/hooks/useBPH"; // Import the custom hook
import UpdateGame from "@/components/updateGameDialog";
import ShowGame from "@/components/showGameDialog";
import { toast } from "sonner";

export default function PlayerPage() {
  const [isCreateGameModalOpen, setIsCreateGameModalOpen] = useState(false);
  const [isUpdateGameModalOpen, setIsUpdateGameModalOpen] = useState(false);
  const [isGameDescriptionModalOpen, setGameDescriptionModalOpen] =
    useState(false);
  const [selectedGameId, setSelectedGameId] = useState<string | null>(null);
  const handleEditClick = (gameId: string) => {
    setSelectedGameId(gameId);
    setIsUpdateGameModalOpen(true);
  };
  const handleRowClick = (gameId: string) => {
    setSelectedGameId(gameId);
    setGameDescriptionModalOpen(true);
  };

  const {
    tableRow,
    loading,
    error,
    fetchGames,
    handleUpdateGame,
    handleDeleteGame,
  } = useBackendHandlers();

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-4 bg-black text-white">
      <h1>
        Here, you can view the games you are participating or create a new
        game!!
      </h1>
      <Button
        variant="outline"
        className="hover:bg-gray-500 transition-colors  duration-300 rounded"
        type="button"
        onClick={() => setIsCreateGameModalOpen(true)}
      >
        Create a Game
        {isCreateGameModalOpen && (
          <CreateGame
            isOpen={isCreateGameModalOpen}
            onClose={() => setIsCreateGameModalOpen(false)} // Close the modal
          />
        )}
      </Button>

      <h1>Your list of Games:</h1>
      <div className="w-full max-w-4xl h-full max-h-96 overflow-auto">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center relative">
            <Skeleton className="h-full w-full rounded-xl bg-gray-500" />
          </div>
        ) : error ? (
          <p className="text-red-500">Error: {error}</p>
        ) : (
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
            <TableBody>
              {tableRow.map((game) => (
                <TableRow
                  key={game.game_id}
                  className="cursor-pointer hover:bg-gray-800 transition-colors duration-200"
                  onClick={() => handleRowClick(game.game_id)}
                >
                  <TableCell className="font-medium">
                    {game.game_name}
                  </TableCell>
                  <TableCell>{game.game_status}</TableCell>
                  <TableCell>{game.game_system}</TableCell>
                  <TableCell className="text-right">
                    {game.game_players.join(", ")}
                  </TableCell>
                  <TableCell>
                    <PlayerDropMenu
                      gameId={game.game_id}
                      onDelete={() => handleDeleteGame(game.game_id)}
                      onEdit={() => handleEditClick(game.game_id)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}

        {selectedGameId && (
          <UpdateGame
            isOpen={isUpdateGameModalOpen}
            onClose={() => setIsUpdateGameModalOpen(false)}
            game_id={selectedGameId}
          />
        )}

        {selectedGameId && (
          <ShowGame
            isOpen={isGameDescriptionModalOpen}
            onClose={() => setGameDescriptionModalOpen(false)}
            game_id={selectedGameId}
          />
        )}
      </div>
    </div>
  );
}
