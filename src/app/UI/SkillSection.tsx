import React from "react";
import Skills from "./Skills";

type SkillSectionProps = {
  title: string;
  skills: string[];
};

const SkillSection = ({ title, skills }: SkillSectionProps) => {
  return (
    <div className="flex flex-col gap-3 sm:gap-[16px]">
      <h3 className="font-semibold text-gray-700 text-[14px] sm:text-[16px]">
        {title}
      </h3>

      <div
        className="
          flex flex-wrap gap-2 sm:gap-4
          border border-gray-300
          rounded-[10px]
          p-4 sm:p-6
        "
      >
        {skills.map((skill, index) => (
          <Skills key={index} label={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;
