import React from "react";
type CardsProps = {
  image: string;
  title: {
    primary: string;
    secondary: string;
  };
  description: string;
  tags?: string[];
};

const PortfolioCard = ({ image, title, description, tags = [] }: CardsProps) => {
  return (
    <div className="rounded-[16px] border border-gray-300 shadow-sm overflow-hidden px-[18px] py-6 ">
      <div className="px-[10px] py-[10px] rounded-[10px] border border-gray-100 overflow-hidden ">
        <img src={image} alt="" className="rounded-[8px] w-[441px] h-[375px] object-cover" />
      </div>
      <div className="flex flex-col gap-[16px] pb-[16px] px-[28px]">
        <h3 className="text-[24px] font-bold mt-[24px]">
          <span className="text-[24px] font-bold"></span>
          {title.primary}
          <span className="text-[24px] font-bold text-gray-700">
            {" "}
            {title.secondary}
          </span>
        </h3>
        <p className="text-[16px] leading-[26px] text-justify text-gray-700">
          {description}
        </p>
        <hr className="1px text-gray-500 mb-[24px]" />
        <div className="flex flex-wrap gap-[16px]">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 text-xs rounded-full border border-gray-200 text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;