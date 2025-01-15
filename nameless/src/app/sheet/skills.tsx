"use client";
import { Toggle } from "@radix-ui/react-toggle";
import SkillTable from "../data/skillData";
import { CircleFadingArrowUp } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Pencil } from "lucide-react"; // Edit icon
import { Button } from "@/components/ui/button";

function Skills() {
  const [toggledStates, setToggledStates] = useState(
    SkillTable.map(() => false) // Initialize with all toggles off
  );

  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [updatedValue, setUpdatedValue] = useState<number | string>("");

  const handleToggle = (index: number) => {
    setToggledStates((prevState) =>
      prevState.map((state, i) => (i === index ? !state : state))
    );
  };

  const handleEditClick = (index: number, currentValue: number) => {
    if (editingIndex === index) {
      // Confirm the change
      console.log(currentValue); // Update the SkillTable (or save the changes)
      setEditingIndex(null); // Exit edit mode
    } else {
      // Enter edit mode
      setEditingIndex(index);
      setUpdatedValue(currentValue);
    }
  };

  const logToggledSkills = () => {
    // Log the toggled skills for leveling up TODO
    const toggledSkills = SkillTable.filter((_, index) => toggledStates[index]);
    console.log("toggleSkills :", toggledSkills);
  };

  return (
    <div className="mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {SkillTable.map((skill, index) => (
          <div
            key={skill.skill}
            className="flex items-center justify-between gap-4 py-2 px-2 border border-gray-600"
          >
            {/* Left-aligned circle toggle */}
            <Toggle
              pressed={toggledStates[index]} // Toggle state
              onPressedChange={() => handleToggle(index)} // Update state on click
              className="flex-none"
            >
              <CircleFadingArrowUp
                className={`h-4 w-4 ${
                  toggledStates[index] ? "text-yellow-400" : "text-gray-500"
                }`}
              />
            </Toggle>

            {/* Skill name in the middle */}
            <span className="flex-1 text-white text-lg">{skill.skill}</span>

            {/* Right-aligned value and pencil icon */}
            <div className="flex items-center gap-2">
              {editingIndex === index ? (
                <Input
                  value={updatedValue}
                  onChange={(e) => setUpdatedValue(e.target.value)}
                  className="text-gold text-lg font-bold px-2 w-16"
                />
              ) : (
                <span className="text-gold text-lg font-bold px-2">
                  {skill.value}
                </span>
              )}

              <Toggle
                onClick={() => handleEditClick(index, skill.value)}
                className="h-6 w-6 p-1 cursor-pointer"
              >
                <Pencil className="h-full w-full text-gray-500 hover:text-yellow-400" />
              </Toggle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
