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
import axios from "axios";
import { useEffect } from "react";

const formSchema = z.object({
  game_name: z.string().min(1, { message: "Game name is required." }),
  game_status: z.enum(["playing", "hiatus", "finished"]),
  game_players: z.string().optional(),
  game_system: z.string().nonempty({ message: "Game system is required." }),
});

interface CreateGameProps {
  isOpen: boolean;
  game_id: string;
  onClose: () => void;
}

export default function UpdateGame({
  isOpen,

  game_id,
  onClose,
}: CreateGameProps) {
  const { handleUpdateGame, fetchGames } = useBackendHandlers();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      game_name: "",
      game_status: "playing",
      game_players: "",
      game_system: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/games/${game_id}`
        );

        form.reset({
          game_name: response.data.game_name,
          game_status: response.data.game_status,
          game_players: response.data.game_players,
          game_system: response.data.game_system,
        });
      } catch (err) {
        console.error("Error fetching game:", err);
      }
    };
    fetchGamesData();
  }, [game_id, form]);

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
      await handleUpdateGame(game_id, formData);
      onClose();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to update game. Please try again.");
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[625px] bg-black border-slate-600 rounded-lg">
        <DialogHeader>
          <DialogTitle className="text-white">Edit Game</DialogTitle>
          <DialogDescription className="text-white">
            Update the details of the game.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="game_name"
              render={({ field }) => (
                <FormItem className="text-white">
                  <FormLabel>Game Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Update the game name"
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
                <FormItem className="text-white">
                  <FormLabel>Players</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Update player names separated by Spaces"
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
                <FormItem className="text-white">
                  <FormLabel>System</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Update the RPG system"
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
              {game_id ? "Update Game" : "Create Game"}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
