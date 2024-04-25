import React from 'react'

export default function Textpage() {
  return (
    <>
    {/* 텍스트2 */}
    <div className='flex py-16 p-5 '>
    <div className='w-[50%] flex justify-end'>
        <img  src="http://sinjeon.co.kr/img/main_re/main_list-img4.png" alt="" />
    </div>
    <div className='w-[50%] flex flex-col items-start pl-[5%]'>
        <div className='w-[47%]'>
          <p className='flex justify-start text-5xl text-[#FF8088] cafefont'>04</p>
          <div className='flex mt-[20px] gap-x-2'>
            <p className='text-4xl cafefont'>세계로 나아가는</p>
            <p className='text-4xl text-[#FF8088] cafefont'>신전떡볶이</p>
          </div>
          <div className='mt-[50px]'>
            <p className='text-lg text-[#FF8088] cafefont'>위생적인 신전떡볶이 양념</p>
          </div>
          <div className='w-[125%] py-[20px] border-b-2 '>
            <p>신전은 현재 미국, 캐나다, 호주 등 각지로 수출을 진행하고 2024년 현재, 약 20개의 해외 가맹점이 운영중입니다. 더 많은 곳에서 신전을 즐길 수 있도록 해외로의 진출을 계획하고 있습니다.</p>
          </div>
          <div className='w-[125%] py-[20px] flex justify-between'>
            <p className='text-lg text-[#BBBBBB]'>더 알아보기</p>
            <p className='text-lg text-[#BBBBBB]'>o</p>
          </div>
      </div>
    </div>
  </div>
  </>
  )
}
