import React from 'react'
import TextBox from './TextBox'

export default function Franchisee() {
  return (
    <>
    <div className='pt-[90px] pb-[180px] bg-[#F9F3EF]'>
      <div className='w-full flex justify-center bg-[#F9F3EF] pb-[100px]'>
        <div className='w-[65%] '>
          <div className='w-full flex '>
            <div className='w-[50%] flex justify-start'>
              <div className='flex flex-col items-start'>
                <p className='text-[#7E7E7E] text-[24px] font-bold cafefont'>신전떡볶이</p>
                <p className='text-[#FF8088] font-bold cafefont text-6xl'>800호점 달성</p>
                <p className='text-[#FF8088] text-lg pt-[36px] font-bold cafefont'>떡볶이 프랜차이즈 매장수 1위</p>
                <p className='text-[#7E7E7E] text-lg pt-[16px]  cafefont'>2024년 4월 기준, 국내 및 해외가맹점 800호점 달성</p>
              </div>
            </div>
            <div className='w-[50%] flex justify-end  '>
              <img width="546px" height="169px" src="http://sinjeon.co.kr/img/main_re/m_store-img1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#F9F3EF] flex justify-center items-center'>
        <div className='w-[70%] flex justify-around '>
          <TextBox newtext="new" name="우정혁신점" num="000-0000-0000"/>
          <TextBox newtext="new" name="과천점" num="000-0000-0000"/>
          <TextBox newtext="new" name="충남대 로데오점" num="000-0000-0000"/>
        </div>
      </div>
    </div>
    </>
  )
}
