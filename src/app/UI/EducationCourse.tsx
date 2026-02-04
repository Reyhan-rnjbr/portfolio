import React from "react";
import Education from "./Education";

const EducationCourse = () => {
  return (
    <div
      className="
        mx-auto
        max-w-[960px]
        mt-16 sm:mt-24 lg:mt-[138px]
        px-4
      "
    >
      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[220px_1fr]
          gap-8 lg:gap-[80px]
        "
      >
        {/* TITLE */}
        <div className="flex flex-col">
          <h2 className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold">
            Education
          </h2>
          <div className="flex gap-2">
            <span className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-gray-700">
              &
            </span>
            <span className="text-[28px] sm:text-[32px] lg:text-[38px] font-bold text-gray-700">
              Courses
            </span>
          </div>
        </div>

        {/* LIST */}
        <div className="flex flex-col gap-6 sm:gap-[34px]">
          <Education
            title="Semnan University"
            field="Chemical Enginnering"
            date="Oct 2017 – Sep 2021"
            description={[
              "Completed a BA degree in Chemical Enginnering at ElmoSanat university.",
              
            ]}
          />

          <Education
            title="Bamdad Academy"
            field="Frond-End"
            date="Jun 2025 – Jan 2026"
            description={[
              "Completed a Certificate in Frond-End Development at Bamdad Academy",
             
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationCourse;
