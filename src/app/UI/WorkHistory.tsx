import React from "react";
import Work from "./Work";

const WorkHistory = () => {
  return (
    <div className="mx-auto flex max-w-[960px] mt-[138px] gap-[164px]">
      <div className="">
        <p className="text-[38px] font-bold ">Work</p>
        <p className="text-[38px] font-bold text-gray-700">History </p>
      </div>
      <div className="flex flex-col  gap-[34px]">
        <Work 
          company="Company Name"
          role="Senior Product Designer"
          date="March 2024 - Present"
          description={[
            "I play a pivotal role in shaping the product checkout experience and developing the EPOS mobile app. My responsibilities include integrating third-party plugins, as well as structuring and maintaining the comprehensive design system to ensure a seamless user interface across platforms.",
          ]}
          tags={["Fintech", "Full Time", "Dubai, United Arab Emirates"]}
        />

        <Work
          company="Company Name"
          role="Senior Product Designer"
          date="March 2022 - Feb 2024"
          description={[
            "Led design initiatives across multiple platforms.",
            "Collaborated closely with developers and product managers.",
          ]}
          tags={["SaaS", "Remote", "Berlin, Germany"]}
        />
      </div>
    </div>
  );
};

export default WorkHistory;
