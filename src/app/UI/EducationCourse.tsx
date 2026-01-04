import React from "react";
import Education from "./Education";

const EducationCourse = () => {
  return (
    <div className="mx-auto flex max-w-[960px] mt-[138px] ">
      <div className="grid grid-cols-[220px_1fr] gap-[80px]">
        <div>
          <h2 className="text-[38px] font-bold">Education</h2>
          <span className="text-[38px] font-bold text-gray-700">&</span>{" "}
          <span className="text-[38px] font-bold text-gray-700">Courses </span>
        </div>
        <div className="flex flex-col gap-[34px]">
          <Education
            title="International University"
            field="Design"
            date="Oct 2017 – Feb 2020"
            description={[
              "Completed a BA Certificate in Graphic Design and applied arts at international",
              " university.",
            ]}
          />

          <Education
            title="International University"
            field="Design"
            date="Oct 2017 – Feb 2020"
            description={[
              "Completed a BA Certificate in Graphic Design and applied arts at international",
              " university.",
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationCourse;
