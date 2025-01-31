"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import axios from "axios";
import { useEffect } from "react";

import { Button } from "@/components/ui/button";

interface showGameProps {
  isOpen: boolean;
  game_id: string;
  onClose: () => void;
}

export default function ShowGame({ isOpen, game_id, onClose }: showGameProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] bg-black border-slate-600 rounded-lg ">
        <DialogHeader>
          <DialogTitle className="text-white">Create New Game</DialogTitle>
          <DialogDescription className="text-white">
            Fill out the details to create a new game.
          </DialogDescription>
        </DialogHeader>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
        >
          Start Game
        </Button>
      </DialogContent>
    </Dialog>
  );
}
