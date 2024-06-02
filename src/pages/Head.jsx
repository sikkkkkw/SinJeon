import React, { useState, useEffect } from 'react';

export default function Head() {
  const [selectedCategory, setSelectedCategory] = useState("떡볶이");

  useEffect(() => {
    setSelectedCategory("떡볶이");
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full bg-black h-[41px] z-10 flex justify-center'>
        <div className="w-full max-w-[60%] flex justify-between items-center px-4 md:px-0">
          <div className="flex justify-start items-center gap-2 md:gap-6 text-white">
            <div
              className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                selectedCategory === "떡볶이" ? 'bg-white text-black rounded-t-lg ' : ''
              }`}
              onClick={() => handleCategoryClick("떡볶이")}
            >
              신전 떡볶이
            </div>
            <div
              className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                selectedCategory === "뮤지엄" ? 'bg-white text-black rounded-t-lg' : ''
              }`}
              onClick={() => handleCategoryClick("뮤지엄")}
            >
              신전 뮤지엄
            </div>
            <div
              className={`md:text-[1.0em] text-base px-2 md:px-[16px] py-[10px] cafefont cursor-pointer ${
                selectedCategory === "더신전" ? 'bg-white text-black rounded-t-lg' : ''
              }`}
              onClick={() => handleCategoryClick("더신전")}
            >
              더신전
            </div>
          </div>
          <div className="hidden md:flex gap-4 text-white">
            <div className='text-[10px]'>LOGIN</div>
            <div className='text-[10px]'>JOIN</div>
            <div className='text-[10px]'>ENG</div>
          </div>
        </div>
      </div>
    </div>
  );
}
