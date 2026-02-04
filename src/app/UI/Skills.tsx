import React from "react";

type SkillProps = {
  label: string;
};

const Skills = ({ label }: SkillProps) => {
  return (
    <div
      className="
        rounded-full
        border border-gray-300
        px-3 sm:px-4
        py-1
        text-gray-600 font-medium
        text-[13px] sm:text-[14px]
        cursor-pointer

        transition-all duration-300 ease-out
        transform

        hover:border-yellow-400
        hover:text-yellow-400
        hover:scale-110
        hover:shadow-[0_4px_15px_rgba(250,204,21,0.4)]
        hover:-translate-y-1
      "
    >
      {label}
    </div>
  );
};

export default Skills;
