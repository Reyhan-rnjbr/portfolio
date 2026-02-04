import React from "react";
import SkillSection from "./SkillSection";

const SkillSet = () => {
  return (
    <div
      className="
        mx-auto
        max-w-[960px]
        mt-16 sm:mt-24 lg:mt-[138px]
        mb-16 sm:mb-24 lg:mb-[138px]
        px-4
      "
    >
      <div
        className="
          flex flex-col
          lg:flex-row
          gap-8 lg:gap-[164px]
        "
      >
        {/* TITLE */}
        <div>
          <h2 className="font-bold text-[28px] sm:text-[32px] lg:text-[38px]">
            Skill
            <span className="text-gray-700">set </span>
          </h2>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col gap-6 sm:gap-[34px]">
          <SkillSection
            title="Programming"
            skills={[
              "Javascript",
              "TypeScript",
              "HTML/CSS",
              "React",
              "Next.Js",
              "React Router",
              "React Query",
              "Zustand",
              "React HookForm",
            ]}
          />

          <SkillSection
            title="Styling & UI"
            skills={[
              "TailwindCSS",
              "Responsive Design",
              "RTL",
              "Component Based Architecture",
              "UIUX Principles",
              "Accessibility Basics",
              "Framer Motion",
              "Swiper",
              "Appex Charts",
              "Mind Mapping",
              "User Flows",
              "Information Architecture",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSet;
