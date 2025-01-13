import React, { useState } from "react";

interface PlayerInfo {
  label: string;
  value: string;
}

export default function PlayerInfo() {
  const [playerInfo, setPlayerInfo] = useState([
    { label: "Character Name", value: "" },
    { label: "Occupation", value: "Sexologist" },
    { label: "Age", value: "69" },
    { label: "Birthplace", value: "" },
    { label: "Residence", value: "Xique Xique Bahia" },
  ]);

  const handleChange = (index: number, newValue: string) => {
    const updatedInfo = playerInfo.map((info, i) =>
      i === index ? { ...info, value: newValue } : info
    );
    setPlayerInfo(updatedInfo);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>,
    index: number
  ) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent line break
      (e.target as HTMLTextAreaElement).blur(); // Unfocus the textarea
    }
  };

  return (
    <section className="bg-green-900 p-6 rounded">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {playerInfo.map((info, index) => (
          <div key={info.label}>
            <p>{info.label}</p>
            <h3 className="text-xl">
              <textarea
                className="bg-green-900 border resize-none overflow-hidden text-white w-full h-8 placeholder:text-slate-500"
                placeholder={`Name your ${info.label.toLowerCase()}`}
                value={info.value}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
