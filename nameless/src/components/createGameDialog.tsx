"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import useBackendHandlers from "@/hooks/useBPH";

const formSchema = z.object({
  game_name: z.string().min(1, { message: "Game name is required." }),
  game_status: z.string(),
  game_creation_date: z.date(),
  game_players: z.string().optional(),
  game_system: z.string().nonempty({ message: "Game system is required." }),
});

interface CreateGameProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateGame({ isOpen, onClose }: CreateGameProps) {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      game_name: "",
      game_status: "playing",
      game_creation_date: new Date(),
      game_players: "",
      game_system: "",
    },
    mode: "onChange",
  });

  const { handleAddGame } = useBackendHandlers();
  async function onSubmit(values: z.infer<typeof formSchema>) {
    const playersArray = values.game_players
      ? values.game_players.split(",").map((player) => player.trim())
      : [];

    const formData = {
      ...values,
      game_players: playersArray,
    };

    console.log("Submitting form data:", formData);

    try {
      await handleAddGame(formData);

      onClose();
    } catch (error) {
      console.error("Error:", error);

      alert("Failed to create game. Please try again.");
    }
  }

  return (
    <div className="relative">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-10"
          onClick={onClose}
        />
      )}
      =
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-[625px] bg-black border-slate-600 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-white">Create New Game</DialogTitle>
            <DialogDescription className="text-white">
              Fill out the details to create a new game.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="game_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Game Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the game name"
                        {...field}
                        className="bg-slate-800 text-white border-slate-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="game_players"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">Players</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter player names separated by commas"
                        {...field}
                        className="bg-slate-800 text-white border-slate-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="game_system"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white">System</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the RPG system"
                        {...field}
                        className="bg-slate-800 text-white border-slate-600"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Create Game
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
