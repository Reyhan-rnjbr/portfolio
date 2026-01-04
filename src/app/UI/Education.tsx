import React from 'react'
type EducationProps = {
    title: string
  field: string
  date: string
   description: string[]
}

const Education=({
    title,
  field,
  date,
  description,
}:EducationProps)=> {
  return (
    <div className='flex border border-gray-300 rounded-[10px] px-[20px] py-[20px]'>
        <div className='flex flex-col'>
            <div className='flex'>
                <img src="/logo.jpg" alt="" className='w-[60px] h-[60px]'/>
                <div>
                    <h3 className="text-[16px] font-bold">{title}</h3>
                    <p className="text-[14px] text-gray-500">{field}</p>
                </div>
            </div>
            <hr className="bg-gray-100 2px mt-[11px] mb-[15px]" />
            <div>
                <p className="text-[11px] font-medium text-gray-700 mt-[15px] mb-[9px]  ">
                  {date}
                 </p>
            </div>
           <div>
             {description.map((item, index) => (
            <p key={index} className="text-gray-500 text-[14px] leading-[23px] max-w-[560px]">
              {item}
            </p>
          ))}
           </div>
        </div>
    </div>
  )
}

export default Education