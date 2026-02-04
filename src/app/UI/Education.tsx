import React from "react";

type EducationProps = {
  title: string;
  field: string;
  date: string;
  description: string[];
};

const Education = ({
  title,
  field,
  date,
  description,
}: EducationProps) => {
  return (
    <div
      className="
        flex
        border border-gray-300
        rounded-[10px]
        px-4 sm:px-[20px]
        py-4 sm:py-[20px]
      "
    >
      <div className="flex flex-col w-full">
        {/* HEADER */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt=""
            className="
              w-[48px] h-[48px]
              sm:w-[60px] sm:h-[60px]
              flex-shrink-0
            "
          />
          <div>
            <h3 className="text-[14px] sm:text-[16px] font-bold">
              {title}
            </h3>
            <p className="text-[12px] sm:text-[14px] text-gray-500">
              {field}
            </p>
          </div>
        </div>

        <hr className="bg-gray-100 h-px mt-3 mb-4" />

        {/* DATE */}
        <p className="text-[10px] sm:text-[11px] font-medium text-gray-700 mb-2">
          {date}
        </p>

        {/* DESCRIPTION */}
        <div className="flex flex-col gap-2">
          {description.map((item, index) => (
            <p
              key={index}
              className="
                text-gray-500
                text-[13px] sm:text-[14px]
                leading-[22px] sm:leading-[23px]
                max-w-full sm:max-w-[560px]
              "
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
