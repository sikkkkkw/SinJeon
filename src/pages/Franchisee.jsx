import React from 'react';
import TextBox from './TextBox';

export default function Franchisee() {
  return (
    <>
      <div className='pt-20 pb-20 bg-[#F9F3EF]'>
        <div className='w-full flex justify-center pb-24'>
          <div className='w-full max-w-5xl px-4'>
            <div className='flex flex-wrap'>
              <div className='w-full md:w-1/2 flex justify-start'>
                <div className='flex flex-col items-start'>
                  <p className='text-gray-600 text-2xl font-bold cafefont'>신전떡볶이</p>
                  <p className='text-pink-500 font-bold cafefont text-6xl'>800호점 달성</p>
                  <p className='text-pink-500 text-lg pt-9 font-bold cafefont'>떡볶이 프랜차이즈 매장수 1위</p>
                  <p className='text-gray-600 text-lg pt-4 cafefont'>2024년 4월 기준, 국내 및 해외가맹점 800호점 달성</p>
                </div>
              </div>
              <div className='w-full md:w-1/2 flex justify-end mt-4 md:mt-0'>
                <img className='max-w-full h-auto' src="http://sinjeon.co.kr/img/main_re/m_store-img1.png" alt="신전떡볶이 이미지" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='w-full max-w-4xl px-4 py-2 flex flex-wrap justify-around'>
            <div className='w-full sm:w-auto mt-4 sm:mt-0 flex justify-center'>
              <TextBox newtext="new" name="우정혁신점" num="000-0000-0000"/>
            </div>
            <div className='w-full sm:w-auto mt-4 sm:mt-0 flex justify-center'>
              <TextBox newtext="new" name="과천점" num="000-0000-0000"/>
            </div>
            <div className='w-full sm:w-auto mt-4 sm:mt-4 flex justify-center'>
              <TextBox newtext="new" name="충남대 로데오점" num="000-0000-0000"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
