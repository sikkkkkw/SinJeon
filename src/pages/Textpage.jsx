import React from 'react'

export default function Textpage() {
  return (
    <>
    {/* 텍스트2 */}
    <div className='flex py-16 bg-[#F9F9F9] p-5 '>
    <div className='w-[50%] flex flex-col items-center'>
      <div className='w-[30%]'>
        <p className='flex justify-start text-5xl text-[#FF8088] cafefont'>01</p>
        <div className='flex flex-col mt-[20px]'>
          <p className='text-4xl cafefont'>떡볶이 양념 최초</p>
          <p className='text-4xl text-[#FF8088] cafefont' >HACCP 인증</p>
        </div>
        <div className='mt-[50px]'>
          <p className='text-lg text-[#FF8088] cafefont'>건강한 음식 문화 "신전떡볶이"</p>
        </div>
        <div className='w-[170%] py-[20px] border-b-2 '>
          <p>HACCP는 가장 효과적인 식품안전관리체계로 인정받고 있습니다. 품격있는 떡볶이 문화를 만들기 위해서 신전은 떡볶이 프랜차이즈 업계 최초로 떡볶이 양념 HACCP인증을 받았습니다.</p>
        </div>
        <div className='w-[170%] py-[20px] flex justify-between'>
          <p className='text-lg text-[#BBBBBB]'>더 알아보기</p>
          <p className='text-lg text-[#BBBBBB]'>o</p>
        </div>
      </div>
    </div>
    <div className='w-[50%]'>
      <img  src="http://sinjeon.co.kr/img/main_re/main_list-img1.png" alt="" />
    </div>
  </div>
  </>
  )
}
