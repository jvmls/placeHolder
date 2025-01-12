"use client";

import { useState } from "react";
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

// Define the type for a spell
type Spell = {
  spellName: string;
  mpCost: string | null;
  sanityCost: string | null;
  otherCosts: string | null;
  castingTime: string | null;
};

export default function Spells() {
  const [spells, setSpells] = useState<Spell[]>([]); // Explicitly define the state type

  const handleAddSpell = () => {
    const spellName = prompt("Enter the spell name:");
    const mpCost = prompt("Enter the MP cost:");
    const sanityCost = prompt("Enter the sanity cost:");
    const otherCosts = prompt("Enter other costs (if any):");
    const castingTime = prompt("Enter the casting time:");

    if (spellName) {
      setSpells((prevSpells) => [
        ...prevSpells,
        { spellName, mpCost, sanityCost, otherCosts, castingTime },
      ]);
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Spells</h2>
        <button
          onClick={handleAddSpell}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Spell
        </button>
      </div>
      <Table>
        <TableCaption>A list with your spells.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Spell Name</TableHead>
            <TableHead>MP Cost</TableHead>
            <TableHead>Sanity Cost</TableHead>
            <TableHead>Other Costs</TableHead>
            <TableHead>Casting Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spells.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                No spells added yet. Click "+" to add a spell.
              </TableCell>
            </TableRow>
          ) : (
            spells.map((spell, index) => (
              <TableRow key={index}>
                <TableCell>{spell.spellName}</TableCell>
                <TableCell>{spell.mpCost}</TableCell>
                <TableCell>{spell.sanityCost}</TableCell>
                <TableCell>{spell.otherCosts}</TableCell>
                <TableCell>{spell.castingTime}</TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
        {spells.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5} className="text-center">
                Total Spells: {spells.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </div>
  );
}
