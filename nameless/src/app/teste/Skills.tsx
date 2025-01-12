"use client";
import SkillTable from "../data/skillData";

function Skills() {
  return (
    <div className="grid grid-cols-4 bg-black gap-4">
      {SkillTable.map((skill) => (
        <div
          key={skill.skill}
          className="bg-green-900 p-4 rounded-lg text-center"
        >
          <p>{skill.skill}</p>
          <h4 className="text-xl font-bold">{skill.value}</h4>
        </div>
      ))}
    </div>
  );
}

export default Skills;
