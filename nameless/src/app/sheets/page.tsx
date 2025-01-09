"use client";
import React, { useState } from "react";

const CallOfCthulhuSheet: React.FC = () => {
  // State to manage character attributes
  const [attributes, setAttributes] = useState({
    name: "",
    strength: 50,
    dexterity: 50,
    intelligence: 50,
    sanity: 50,
    luck: 50,
  });

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAttributes((prev) => ({
      ...prev,
      [name]: name === "name" ? value : parseInt(value, 10),
    }));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Call of Cthulhu Character Sheet
      </h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Character Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Character Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={attributes.name}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Attributes */}
        {[
          { label: "Strength", name: "strength" },
          { label: "Dexterity", name: "dexterity" },
          { label: "Intelligence", name: "intelligence" },
          { label: "Sanity", name: "sanity" },
          { label: "Luck", name: "luck" },
        ].map((attr) => (
          <div key={attr.name}>
            <label
              htmlFor={attr.name}
              className="block text-sm font-medium text-gray-700"
            >
              {attr.label}
            </label>
            <input
              type="number"
              id={attr.name}
              name={attr.name}
              value={attributes[attr.name as keyof typeof attributes]}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
          </div>
        ))}

        {/* Display Attributes */}
        <div className="md:col-span-2 mt-6">
          <h2 className="text-xl font-semibold">Summary</h2>
          <ul className="mt-4">
            {Object.entries(attributes).map(([key, value]) => (
              <li key={key} className="flex justify-between border-b py-2">
                <span className="font-medium capitalize">{key}:</span>
                <span>{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default CallOfCthulhuSheet;
