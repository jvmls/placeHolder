"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    </section>
  );
}
