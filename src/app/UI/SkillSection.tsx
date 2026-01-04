import React from "react";
import Skills from "./Skills";
type skillProps = {
  title: string;
  skills: string[];
};
const SkillSection = ({ title, skills }: skillProps) => {
  return (
    <div className="flex flex-col gap-[16px] ">
      <h3 className="font-semibold text-gray-700 ">{title}</h3>
      <div className="flex flex-wrap gap-4 border border-gray-300 rounded-[10px] p-6">
        {skills.map((skill, index) => (
          <Skills key={index} label={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
