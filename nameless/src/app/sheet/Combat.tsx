"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import SkillTable from "../data/skillData";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Weapon = {
  weaponName: string;
  skill: string | null;
  damage: string | null;
  range: string | null;
  attacks: string | null;
  ammo: string | null;
  malfunction: string | null;
  isEditing?: boolean;
};

function SkillCombobox({
  selected,
  onChange,
}: {
  selected: string | null;
  onChange: (value: string) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selected
            ? SkillTable.find((SkillTable) => SkillTable.skill === selected)
                ?.skill
            : "Select skill..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 " />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 bg-white rounded">
        <Command>
          <CommandInput placeholder="Search skill..." />
          <CommandList>
            <CommandEmpty>No skill found.</CommandEmpty>
            <CommandGroup>
              {SkillTable.map((SkillTable) => (
                <CommandItem
                  key={SkillTable.skill}
                  onSelect={(currentValue) => {
                    onChange(currentValue);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      selected === SkillTable.skill
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {SkillTable.skill}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function Combat() {
  const [Weapons, setWeapons] = useState<Weapon[]>([]);

  const handleAddWeapon = () => {
    setWeapons((prevWeapons) => [
      ...prevWeapons,
      {
        weaponName: "",
        skill: null,
        damage: "",
        range: "",
        attacks: "",
        ammo: "",
        malfunction: "",
        isEditing: true,
      },
    ]);
  };

  const handleSaveWeapon = (index: number) => {
    setWeapons((prevWeapons) =>
      prevWeapons.map((weapon, i) =>
        i === index ? { ...weapon, isEditing: false } : weapon
      )
    );
  };

  const handleEditWeapon = (index: number) => {
    setWeapons((prevWeapons) =>
      prevWeapons.map((weapon, i) =>
        i === index ? { ...weapon, isEditing: true } : weapon
      )
    );
  };

  const handleChange = (
    index: number,
    field: keyof Weapon,
    value: string | null
  ) => {
    setWeapons((prevWeapons) =>
      prevWeapons.map((weapon, i) =>
        i === index ? { ...weapon, [field]: value } : weapon
      )
    );
  };

  return (
    <>
      <div className="grid grid-cols-7 gap-4 grid-rows-1 ">
        <h2 className="grid grid-cols-4 gap-4">Weapons</h2>
        <Button
          onClick={handleAddWeapon}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + Add Weapon
        </Button>
      </div>
      <Table>
        <TableCaption>A list with your weapons.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Weapon Name</TableHead>
            <TableHead>Skill</TableHead>
            <TableHead>Damage</TableHead>
            <TableHead>Range</TableHead>
            <TableHead>Attacks</TableHead>
            <TableHead>Ammo</TableHead>
            <TableHead>Malfunction</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Weapons.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                No weapons added yet. Click "+" to add a weapon.
              </TableCell>
            </TableRow>
          ) : (
            Weapons.map((weapon, index) => (
              <TableRow key={index}>
                {weapon.isEditing ? (
                  <>
                    <TableCell>
                      <Input
                        placeholder="Weapon Name"
                        value={weapon.weaponName}
                        onChange={(e) =>
                          handleChange(index, "weaponName", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <SkillCombobox
                        selected={weapon.skill}
                        onChange={(value) =>
                          handleChange(index, "skill", value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Damage"
                        value={weapon.damage ?? ""}
                        onChange={(e) =>
                          handleChange(index, "damage", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Range"
                        value={weapon.range ?? ""}
                        onChange={(e) =>
                          handleChange(index, "range", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Attacks"
                        value={weapon.attacks ?? ""}
                        onChange={(e) =>
                          handleChange(index, "attacks", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Ammo"
                        value={weapon.ammo ?? ""}
                        onChange={(e) =>
                          handleChange(index, "ammo", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        placeholder="Malfunction"
                        value={weapon.malfunction ?? ""}
                        onChange={(e) =>
                          handleChange(index, "malfunction", e.target.value)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleSaveWeapon(index)}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                      >
                        Save
                      </Button>
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>{weapon.weaponName}</TableCell>
                    <TableCell>{weapon.skill}</TableCell>
                    <TableCell>{weapon.damage}</TableCell>
                    <TableCell>{weapon.range}</TableCell>
                    <TableCell>{weapon.attacks}</TableCell>
                    <TableCell>{weapon.ammo}</TableCell>
                    <TableCell>{weapon.malfunction}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleEditWeapon(index)}
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
        {Weapons.length > 0 && (
          <TableFooter>
            <TableRow>
              <TableCell colSpan={8} className="text-center">
                Total Weapons: {Weapons.length}
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </Table>
    </>
  );
}
