"use client";
import SkillTable from "../data/skillData";

function Skills() {
  return (
    <div className="h-full w-full mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {SkillTable.map((skill) => (
          <div
            key={skill.skill}
            className="flex items-center justify-between border border-gray-600 py-2"
          >
            <span className="text-white text-lg">{skill.skill}</span>

            <span className="text-gold text-lg font-bold px-2">
              {skill.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
