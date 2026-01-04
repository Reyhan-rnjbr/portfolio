import React from "react";
import SkillSection from "./SkillSection";
import Skills from "./Skills";

const SkillSet = () => {
  return (
    <div className="mx-auto flex max-w-[960px] mt-[138px] mb-[138px] gap-[164px]">
      <div>
        <h2 className="font-bold text-[38px] items-baseline gap-4">
          Skill
          <span className="font-bold text-[38px] text-gray-700">set </span>
        </h2>
      </div>
      <div className="flex flex-col gap-[34px]">
        <SkillSection
          title="Product"
          skills={[
            "Design System",
            "Lean UX",
            "Agile Methodology",
            "Data Analysis",
            "Startups",
            "Data-Driven Design",
            "User Centered Design",
            "UI Kits",
          ]}
        />

        <SkillSection
          title="UX Design"
          skills={[
            "User Interviews",
            "Surveys",
            "Personas",
            "Competitor Audits",
            "User Journey Maps",
            "Empathy Maps",
            "User Stories",
            "Usability Testing",
            "A/B Testing",
            "Mind Mapping",
            "User Flows",
            "Information Architecture",
          ]}
        />
      </div>
    </div>
  );
};

export default SkillSet;
