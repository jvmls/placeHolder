export default function Skills() {
  return (
    <div className="grid grid-cols-4 bg-black gap-4">
      {[
        { skill: "Accounting", value: 5 },
        { skill: "Anthropology", value: 1 },
        { skill: "Appraise", value: 5 },
        { skill: "Archeology", value: 1 },
        { skill: "Charm", value: 15 },
        { skill: "Climb", value: 20 },
        { skill: "Credit Rating", value: 35 },
        { skill: "First Aid", value: 70 },
        { skill: "Psychology", value: 50 },
        { skill: "Navigate", value: 10 },
        { skill: "History", value: 5 },
      ].map((skill) => (
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
