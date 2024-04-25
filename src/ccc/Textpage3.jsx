import React from 'react'

export default function Textpage() {
  return (
    <>
    {/* 텍스트2 */}
    <div className='flex py-16 bg-[#F9F9F9] p-5 '>
    <div className='w-[50%] flex flex-col items-center'>
      <div className='w-[30%]'>
        <p className='flex justify-start text-5xl text-[#FF8088] cafefont'>03</p>
        <div className='w-[140%] flex mt-[20px] gap-x-2'>
          <p className='text-4xl cafefont'>체계적인</p>
          <p className='text-4xl text-[#FF8088] cafefont' >물류 관리시스템</p>
        </div>
        <div className='mt-[50px]'>
          <p className='text-lg text-[#FF8088] cafefont'>본사 통제 물류시스템</p>
        </div>
        <div className='w-[170%] py-[20px] border-b-2 '>
          <p>신전푸드시스는 물류센터를 자체적으로 운영하고 있습니다. 통합적인 물류관리시스템으로 물류 발주와 운송이 이루어지기에 보다 정확하고 신속하게 물류 전달이 가능합니다.</p>
        </div>
        <div className='w-[170%] py-[20px] flex justify-between'>
          <p className='text-lg text-[#BBBBBB]'>더 알아보기</p>
          <p className='text-lg text-[#BBBBBB]'>o</p>
        </div>
      </div>
    </div>
    <div className='w-[50%]'>
      <img  src="http://sinjeon.co.kr/img/main_re/main_list-img3.png" alt="" />
    </div>
  </div>
  </>
  )
}
