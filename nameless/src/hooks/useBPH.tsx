import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const useBackendHandlers = () => {
  const [tableRow, setTableRow] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchGames = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/games");
      setTableRow(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(
          err.response?.data?.message ||
            "An error occurred while fetching data."
        );
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleAddGame = async (newGame: any) => {
    try {
      await axios.post("http://localhost:5000/api/games", newGame, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Game created successfully!");
      await fetchGames();
    } catch (err) {
      console.error("Error adding game:", err);
    }
  };

  const handleUpdateGame = async (gameId: string, updatedGame: any) => {
    try {
      await axios.put(`http://localhost:5000/api/games/${gameId}`, updatedGame);
      await fetchGames();
    } catch (err) {
      console.error("Error updating game:", err);
    }
  };

  const handleDeleteGame = async (gameId: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/games/${gameId}`);
      await fetchGames();
    } catch (err) {
      console.error("Error deleting game:", err);
    }
  };

  return {
    tableRow,
    loading,
    error,
    fetchGames,
    handleAddGame,
    handleUpdateGame,
    handleDeleteGame,
  };
};

export default useBackendHandlers;
