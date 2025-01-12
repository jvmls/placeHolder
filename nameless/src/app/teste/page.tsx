"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Skills from "./skills";
import Combat from "./Combat";
import Backstory from "./Backstory";
import Spells from "./Spells";
import MainStats from "./mainStats";

export default function CharacterSheet() {
  const [editMode, setEditMode] = useState(false);

  return (
    <div className="bg-black text-white p-8 font-sans flex-col h-full w-full">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">Call of Cthulhu</h1>
        <div className="flex items-center gap-4">
          <div>
            <span className="mr-2">Whisper to Keeper</span>
            <button
              className="bg-gray-800 text-sm px-4 py-2 rounded"
              onClick={() => alert("Whisper toggled")}
            >
              OFF
            </button>
          </div>
          <div>
            <span className="mr-2">Edit Mode</span>
            <button
              className={`text-sm px-4 py-2 rounded ${
                editMode ? "bg-green-600" : "bg-gray-800"
              }`}
              onClick={() => setEditMode(!editMode)}
            >
              {editMode ? "ON" : "OFF"}
            </button>
          </div>
        </div>
      </header>

      {/* Character Info Section */}
      <section className="bg-green-900 p-6 rounded-lg">
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div>
            <p>Character Name</p>
            <h2 className="text-xl font-bold">Rose Preston</h2>
          </div>
          <div>
            <p>Occupation</p>
            <h2 className="text-xl font-bold">Medical Student</h2>
          </div>
          <div>
            <p>Age</p>
            <h2 className="text-xl font-bold">21</h2>
          </div>
          <div>
            <p>Gender</p>
            <h2 className="text-xl font-bold">Female</h2>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div>
            <p>Residence</p>
            <h2 className="text-xl font-bold">Boston, Massachusets</h2>
          </div>
          <div>
            <p>Birthplace</p>
            <h2 className="text-xl font-bold">Brockton, Massachusets</h2>
          </div>
          <div>
            <p>Luck</p>
            <h2 className="text-xl font-bold">50</h2>
          </div>
        </div>
      </section>

      {/* Attributes Section */}
      <section>
        <MainStats />
      </section>

      {/* Skills Section */}
      <section>
        <Tabs defaultValue="Skills" className="w-full text-2xl font-bold mb-4">
          <TabsList className="flex w-full justify-between grid-cols-2  flex-row">
            <TabsTrigger className="border" value="Skills">
              Skills
            </TabsTrigger>
            <TabsTrigger className="border" value="Combat">
              Combat
            </TabsTrigger>
            <TabsTrigger className="border" value="Backstory">
              Backstory
            </TabsTrigger>
            <TabsTrigger className="border" value="Spells">
              Spells
            </TabsTrigger>
            <TabsTrigger className="border" value="Possessions">
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
          <TabsContent value="Backstory"></TabsContent>
          <TabsContent value="Spells"></TabsContent>
          <TabsContent value="Possessions"></TabsContent>
        </Tabs>
      </section>

      {/* Footer Section */}
      <footer className="mt-8">
        <p className="text-center bg-black text-gray-500">
          © Call of Cthulhu Character Sheet
        </p>
      </footer>
    </div>
  );
}
