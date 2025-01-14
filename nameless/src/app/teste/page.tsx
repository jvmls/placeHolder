"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Skills from "./skills";
import Combat from "./Combat";
import Backstory from "./Backstory";
import Spells from "./Spells";
import MainStats from "./mainStats";
import PlayerInfo from "./playerInfo";
import { useState } from "react";

export default function CharacterSheet() {
  const [whisper, setWhisper] = useState(false);
  return (
    <div
      className="bg-black text-white p-8 font-sans flex-col h-full w-full bg-no-repeat bg-cover "
      style={{ backgroundImage: "url('/assets/images/sBg.jpeg')" }}
    >
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Call of Cthulhu</h1>
        <div className="flex items-center gap-4">
          <div>
            <span className="mr-2">Whisper to Keeper</span>
            <button
              className="bg-gray-800 text-sm px-4 py-2 rounded"
              onClick={() => setWhisper(!whisper)}
            >
              {whisper ? "On" : "Off"}
            </button>
          </div>
        </div>
      </header>

      {/* Character Info Section */}
      <PlayerInfo />

      {/* Attributes Section */}
      <MainStats />

      {/* Skills Section */}
      <section>
        <Tabs defaultValue="Skills" className="text-2xl font-bold mb-4">
          <TabsList className="flex w-full gap-4">
            <TabsTrigger
              className="border flex-1 px-4 py-2 text-center transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400"
              value="Skills"
            >
              Skills
            </TabsTrigger>
            <TabsTrigger
              className="border flex-1 px-4 py-2 text-center transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400"
              value="Combat"
            >
              Combat
            </TabsTrigger>
            <TabsTrigger
              className="border flex-1 px-4 py-2 text-center transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400"
              value="Backstory"
            >
              Backstory
            </TabsTrigger>
            <TabsTrigger
              className="border flex-1 px-4 py-2 text-center transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400"
              value="Spells"
            >
              Spells
            </TabsTrigger>
            <TabsTrigger
              className="border flex-1 px-4 py-2 text-center transition-colors data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=inactive]:bg-gray-800 data-[state=inactive]:text-gray-400"
              value="Possessions"
            >
              Possessions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Skills">
            <Skills />
          </TabsContent>
          <TabsContent value="Combat">
            <Combat />
          </TabsContent>
          <TabsContent value="Backstory">
            <Backstory />
          </TabsContent>
          <TabsContent value="Spells">
            <Spells />
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
