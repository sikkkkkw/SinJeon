import React, { useState, useEffect } from 'react';

export default function Head() {
  const [selectedCategory, setSelectedCategory] = useState("떡볶이");

  useEffect(() => {
    // 페이지가 처음 로드될 때 "신전 떡볶이" 카테고리에 대한 상태를 설정합니다.
    // 다른 카테고리로 변경할 수 있도록 하려면 초기 상태를 변경하세요.
    setSelectedCategory("떡볶이");
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='w-full flex justify-center'>
      <div className='w-full bg-black h-[41px] z-10 flex justify-center '>
        <div className="w-full max-w-[60%] flex justify-center items-center ">
          {/* 대가리 */}
          <div className="w-full flex justify-between items-center">
            <div className='flex md:justify-center items-center  justify-around gap-2 text-white'>
              <div
                className={`md:text-[1.0em] text-xl md:px-[49px] md:py-[10px] cafefont ${
                  selectedCategory === "떡볶이" ? 'bg-white text-black rounded-t-lg ' : ''
                }`}
                onClick={() => handleCategoryClick("떡볶이")}
              >
                신전 떡볶이
              </div>
              <div
                className={`md:text-[1.0em] text-xl md:px-[49px] md:py-[10px] cafefont ${
                  selectedCategory === "뮤지엄" ? 'bg-white text-black rounded-t-lg' : ''
                }`}
                onClick={() => handleCategoryClick("뮤지엄")}
              >
                신전 뮤지엄
              </div>
              <div
                className={`md:text-[1.0em] text-xl md:px-[49px] md:py-[10px] cafefont ${
                  selectedCategory === "더신전" ? 'bg-white text-black rounded-t-lg' : ''
                }`}
                onClick={() => handleCategoryClick("더신전")}
              >
                더신전
              </div>
            </div>
            <div className="md:flex gap-4 hidden text-white">
              <div className='text-[10px]'>LOGIN</div>
              <div className='text-[10px]'>JOIN</div>
              <div className='text-[10px]'>ENG</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
