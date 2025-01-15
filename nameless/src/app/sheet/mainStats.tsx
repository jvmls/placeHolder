"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Toggle } from "@radix-ui/react-toggle";
import { useState } from "react";

export default function MainStats() {
  const [stats, setStats] = useState([
    { label: "Strength", value: 0 },
    { label: "Dexterity", value: 0 },
    { label: "Intelligence", value: 0 },
    { label: "Constitution", value: 0 },
    { label: "Appearance", value: 0 },
    { label: "Power", value: 0 },
    { label: "Size", value: 0 },
    { label: "Education", value: 0 },
    { label: "Luck", value: 0 },
  ]);

  const [vitals, setVitals] = useState([
    { label: "Hit Points", value: 0, value2: 0 },
    { label: "Magic Points", value: 0, value2: 0 },
    { label: "Sanity Points", value: 0, value2: 0 },
  ]);

  const handleInputChangeStats = (index: number, newValue: string): void => {
    const updatedStats = stats.map((attr, i) =>
      i === index ? { ...attr, value: parseInt(newValue, 10) || 0 } : attr
    );
    setStats(updatedStats);
  };

  const handleInputChangeVitals = (index: number, newValue: string): void => {
    const updatedVitals = vitals.map((attr, i) =>
      i === index ? { ...attr, value: parseInt(newValue, 10) || 0 } : attr
    );
    setVitals(updatedVitals);
  };

  const [majorWound, setMajorWound] = useState(false);
  const [unconscious, setUnconscious] = useState(false);
  const [dying, setDying] = useState(false);
  const [tempInsane, setTempInsane] = useState(false);
  const [indefInsane, setIndefInsane] = useState(false);

  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="grid grid-cols-3 grid-row-4 gap-4 mt-6">
        {stats.map((attr, index) => (
          <div key={attr.label} className=" p-4 rounded text-center mb-4">
            <Button>{attr.label}</Button>
            <Input
              className="text-2xl font-bold text-center bg-slate-900 placeholder:text-slate-500"
              placeholder={attr.value === 0 ? "50" : attr.value.toString()}
            />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4 mt-6">
        {vitals.map((attr, index) => (
          <div key={attr.label} className=" p-4 rounded text-center mb-3">
            <p>{attr.label}</p>
            <div className="grid grid-cols-2 gap-4">
              <Input
                className="text-2xl font-bold text-center placeholder:text-slate-500 bg-slate-900"
                placeholder={attr.value === 0 ? "25" : attr.value.toString()}
              />
              <Input
                className="text-2xl font-bold text-center placeholder:text-slate-500 bg-slate-900"
                placeholder={attr.value === 0 ? "25" : attr.value.toString()}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-slate-950 flex flex-col place-items-center justify-center w-full h-full gap-5">
        <h2>Conditions</h2>
        <div
          onClick={() => setMajorWound(!majorWound)}
          className={`text-center select-none w-4/5 h-22 cursor-pointer ${
            majorWound ? "bg-red-600" : "bg-slate-400"
          }`}
        >
          Major Wound
        </div>
        <div
          onClick={() => setUnconscious(!unconscious)}
          className={`text-center select-none w-4/5 h-22 cursor-pointer ${
            unconscious ? "bg-red-600" : "bg-slate-400"
          }`}
        >
          Unconscious
        </div>
        <div
          onClick={() => setDying(!dying)}
          className={`text-center select-none w-4/5 h-22 cursor-pointer ${
            dying ? "bg-red-600" : "bg-slate-400"
          }`}
        >
          Dying
        </div>
        <h2>Insanities</h2>
        <div
          onClick={() => setTempInsane(!tempInsane)}
          className={`text-center select-none w-4/5 h-22 cursor-pointer ${
            tempInsane ? "bg-red-600" : "bg-slate-400"
          }`}
        >
          Temp Insane
        </div>
        <div
          onClick={() => setIndefInsane(!indefInsane)}
          className={`text-center select-none w-4/5 h-22 cursor-pointer ${
            indefInsane ? "bg-red-600" : "bg-slate-400"
          }`}
        >
          Indef. Insane
        </div>
      </div>
    </section>
  );
}
