"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
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
import { Circle } from "lucide-react";

// Define the type for a spell
type Spell = {
  spellName: string;
  mpCost: string | null;
  sanityCost: string | null;
  otherCosts: string | null;
  castingTime: string | null;
  successfulFirstCast: boolean; // New field
  timeToLearn: string | null; // New field
  isEditing?: boolean;
};

export default function Spells() {
  const [spells, setSpells] = useState<Spell[]>([]);

  const handleAddSpell = () => {
    setSpells((prevSpells) => [
      ...prevSpells,
      {
        spellName: "",
        mpCost: "",
        sanityCost: "",
        otherCosts: "",
        castingTime: "",
        successfulFirstCast: false, // Default to false
        timeToLearn: "",
        isEditing: true,
      },
    ]);
  };

  const handleSaveSpell = (index: number) => {
    setSpells((prevSpells) =>
      prevSpells.map((spell, i) =>
        i === index ? { ...spell, isEditing: false } : spell
      )
    );
  };

  const handleEditSpell = (index: number) => {
    setSpells((prevSpells) =>
      prevSpells.map((spell, i) =>
        i === index ? { ...spell, isEditing: true } : spell
      )
    );
  };

  const handleChange = (
    index: number,
    field: keyof Spell,
    value: string | boolean | null
  ) => {
    setSpells((prevSpells) =>
      prevSpells.map((spell, i) =>
        i === index ? { ...spell, [field]: value } : spell
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 grid-rows-1 ">
        <h2 className="grid grid-cols-4 gap-4">Spells</h2>
        <Button
          onClick={handleAddSpell}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Spell
        </Button>
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
            <TableHead>Successful First Cast</TableHead>
            <TableHead>Time to Learn</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {spells.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No spells added yet. Click "+" to add a spell.
              </TableCell>
            </TableRow>
          ) : (
            spells.map((spell, index) => (
              <TableRow key={index}>
                {spell.isEditing ? (
                  <>
                    <TableCell>
                      <Input
                        placeholder="Spell Name"
                        value={spell.spellName}
                        onChange={(e) =>
                          handleChange(index, "spellName", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="MP Cost"
                        value={spell.mpCost ?? ""}
                        onChange={(e) =>
                          handleChange(index, "mpCost", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Sanity Cost"
                        value={spell.sanityCost ?? ""}
                        onChange={(e) =>
                          handleChange(index, "sanityCost", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Other Costs"
                        value={spell.otherCosts ?? ""}
                        onChange={(e) =>
                          handleChange(index, "otherCosts", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Casting Time"
                        value={spell.castingTime ?? ""}
                        onChange={(e) =>
                          handleChange(index, "castingTime", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Toggle
                        className="px-4 py-2 rounded"
                        pressed={spell.successfulFirstCast}
                        onPressedChange={() =>
                          handleChange(
                            index,
                            "successfulFirstCast",
                            !spell.successfulFirstCast
                          )
                        }
                      >
                        <Circle
                          className={`${
                            spell.successfulFirstCast
                              ? "bg-yellow-500 rounded-full text-white"
                              : " "
                          } `}
                        />
                      </Toggle>
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Time to Learn"
                        value={spell.timeToLearn ?? ""}
                        onChange={(e) =>
                          handleChange(index, "timeToLearn", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleSaveSpell(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{spell.spellName}</TableCell>
                    <TableCell>{spell.mpCost}</TableCell>
                    <TableCell>{spell.sanityCost}</TableCell>
                    <TableCell>{spell.otherCosts}</TableCell>
                    <TableCell>{spell.castingTime}</TableCell>
                    <TableCell>
                      {spell.successfulFirstCast ? "Yes" : "No"}
                    </TableCell>
                    <TableCell>{spell.timeToLearn}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditSpell(index)}
                        className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
        {spells.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                Total Spells: {spells.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </>
  );
}
