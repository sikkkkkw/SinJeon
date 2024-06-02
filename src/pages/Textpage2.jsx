import React from 'react'

export default function Textpage() {
  return (
    <>
    {/* 텍스트2 */}
    <div className='flex py-16 p-5 '>
    <div className='w-[50%] flex justify-end'>
        <img width="621px"  src="http://sinjeon.co.kr/img/main_re/main_list-img2.png" alt="" />
    </div>
    <div className='w-[50%] flex flex-col items-start pl-[5%]'>
        <div className='w-[47%]'>
          <p className='flex justify-start text-5xl text-[#FF8088] cafefont'>02</p>
          <div className='flex flex-col mt-[20px]  gap-x-2'>
            <p className='text-4xl cafefont'>떡볶이 프랜차이즈 업계</p>
            <p className='text-4xl text-[#FF8088] cafefont'>최초 HACCP 위생안전시설</p>
          </div>
          <div className='mt-[50px]'>
            <p className='text-lg text-[#FF8088] cafefont'>위생적인 신전떡볶이 양념</p>
          </div>
          <div className='w-[125%] py-[20px] border-b-2 '>
            <p>신전은 떡볶이 프랜차이즈 업계 최초 HACCP 위생시설 인증을 받은 5단계의 시스템이 구축되어 있습니다. 단계별 위생설비를 통해 양념에 유입될 수 있는 모든 이물질을 제거하여 안전하고 믿을 수 있는 떡볶이를 만들어가고 있습니다.</p>
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
