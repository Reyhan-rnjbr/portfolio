import React from "react";
type WorkProps = {
  company: string;
  role: string;
  date: string;
  description: string[];
  tags: string[];
};

const Work = ({ company, role, date, description, tags }: WorkProps) => {
  return (
    <div className="flex border border-gray-300 rounded-[10px] px-[20px] py-[20px]">
      <div className="flex flex-col">
        <div className="flex items-center">
          <img src="/logo.jpg" alt="" className="mx-[20px] w-[60px] h-[60px]" />
          <div>
            <p className="text-[16px] font-bold">{company}</p>
            <p className="text-[14px] text-gray-500">{role}</p>
          </div>
        </div>
        <p className="text-[11px] font-medium text-gray-400 mt-[14px] mb-[6px] ml-[90px] ">
          {date}
        </p>
        <div>
          {description.map((item, index) => (
            <p key={index} className="text-gray-500 text-[14px] leading-[23px] max-w-[560px]">
              {item}
            </p>
          ))}
        </div>
        <hr className="bg-gray-200 2px mt-[14px] mb-[14px]" />
        <div className="flex gap-[16px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-[12px] py-[4px] font-medium rounded-full border border-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
