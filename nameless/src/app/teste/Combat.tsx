"use client";

import { Input } from "@/components/ui/input";

export default function Combat() {
  const combatSkills = [
    { skill: "Dexterity", value: <Input /> },
    { skill: "Dodge", value: <Input /> },
    { skill: "Build", value: <Input /> },
    { skill: "Damage Bonus", value: <Input /> },
    { skill: "Movement Rate", value: <Input /> },
    { skill: "Armor Type", value: <Input /> },
    { skill: "Armor Value", value: <Input /> },
  ];
  return (
    <div className="grid grid-cols-7 bg-black gap-4 grid-rows-1 ">
      {combatSkills.map((skill) => (
        <div
          key={skill.skill}
          className="bg-green-900 p-4 rounded-lg text-center"
        >
          <p>{skill.skill}</p>
          <h4 className="text-xl font-bold">{skill.value}</h4>
        </div>
      ))}
      <div className="grid grid-cols-4 bg-black gap-4">Weapons</div>
    </div>
  );
}
