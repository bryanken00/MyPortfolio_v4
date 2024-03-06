import React from "react";
import SkillsData from "../../Contents/SkillsData";
import { v4 as uuidv4 } from "uuid";

const Skills = () => {
  const { MySkills } = SkillsData();

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold mb-4 text-custom-fontColor">
        My Skills
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MySkills.map((skill) => {
          const uniqueKey = uuidv4(); // Generate unique key for each skill
          return (
            <div
              key={uniqueKey}
              className="bg-white rounded-lg shadow-md p-8 hover:bg-gray-300"
            >
              <h3 className="text-lg font-semibold text-black mb-4">
                {skill.name}
              </h3>
              <div className="flex items-center justify-center mb-4">
                <img src={skill.image} alt={skill.name} className="w-48 h-48" />
              </div>
              <blockquote className="text-xl text-black mb-4">
                {skill.description}
              </blockquote>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Skills;
