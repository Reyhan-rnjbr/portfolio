import React from "react";
import Work from "./Work";

const WorkHistory = () => {
  return (
    <div className="mx-auto flex flex-col lg:flex-row max-w-[960px] mt-[80px] lg:mt-[138px] gap-8 lg:gap-[164px] px-4">
      <div className="">
        <p className="text-[38px] font-bold ">Work</p>
        <p className="text-[38px] font-bold text-gray-700">History </p>
      </div>
      <div className="flex flex-col  gap-[34px]">
        <Work
          company="CodeCoterie"
          role="Front-End Developer"
          date="Aug 2025 - present"
          description={["Developed and optimized cross-browser compatible front-end applications using React.js, Next.js and Tailwind CSS Designed and implemented reusable UI components with Hooks and Zustand, enhancing UI consistency and reducing development time by 25% Collaborated with UX/UI designers and backend developers. Collaborated with UX/UI designers to implement mobile-first and responsive designs, increasing user engagement by 20%  "]}
          tags={["tech", "Full Time", "Tehran, "]}
        />

        <Work
          company="Sanjab Startup"
          role="Wordpress designer"
          date="Mar 2025 - Aug 2025"
          description={[
            "Designed and customized responsive web pages based on client requirements and brand identity.",
            "Applied modern UI/UX principles to ensure user-friendly, visually appealing, and functional website designs.",
            "Developed creative page concepts and storytelling structures to enhance user engagement and navigation flow.",
          ]}
          tags={["design", "Hibrid", "Tehran"]}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
