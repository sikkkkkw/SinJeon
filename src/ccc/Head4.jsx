import React from 'react'

export default function Head4() {
  return (
    <div className='w-full justify-center'>
      {/* 텍스트1 */}
      <div className='w-full flex flex-col items-center gap-y-10 py-12'>
        <img className='w-[504px] h-[53px]' src="http://sinjeon.co.kr/img/main_re/main_top-logo.png" alt="" />
        <div className='flex flex-col items-center'>
          <p className=' font-bold text-6xl flex items-center text-[#FF8088] cafefont '>우리는 꿈을 심고, </p>
          <p className=' font-bold text-6xl flex text-[#FF8088] cafefont'>새로운 문화를 만들어 갑니다.</p>
          <p className='text-[#999] font-bold pt-6'>WE PLANT DREAMS AND CREATE NEW CULTURES.</p>
          <img className='pt-6' src="http://sinjeon.co.kr/img/main_re/main_top-img1.png" alt="" />
        </div>
      </div>
    </div>
  )
}
