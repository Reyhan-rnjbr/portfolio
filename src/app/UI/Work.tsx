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
    <div className="flex border border-gray-300 rounded-[10px] p-4 sm:p-5">
      <div className="flex flex-col">
        <div className="flex items-center gap-4">
  <img
    src="/logo.jpg"
    alt=""
    className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px]"
  />
  <div>
    <p className="text-[14px] sm:text-[16px] font-bold">{company}</p>
    <p className="text-[13px] sm:text-[14px] text-gray-500">{role}</p>
  </div>
</div>

        <p className="text-[11px] font-medium text-gray-400 mt-3 ">
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
        <div className="flex flex-wrap gap-2 ">
  {tags.map((tag, index) => (
    <p
      key={index}
      className="text-gray-500 text-[14px] border border-gray-300 rounded-full px-3 py-1"
    >
      {tag}
    </p>
  ))}
</div>

      </div>
    </div>
  );
};

export default Work;
