import React from 'react'

export default function Img() {
  return (
    <div className='pt-[90px] pb-[145px] '>
      <div className='flex justify-center relative'>
        <img className=' imgtest z-20' src="http://sinjeon.co.kr/img/main_re/main_btm-img1.png" alt="" />
        <div className='absolute bg-cover mt-14 mr-0 md:mr-16 imgtest bg-[#FFE6E7] w-full h-40 md:w-[1200px] md:h-[397px] '></div>
      </div>
      <div className='flex justify-center pt-40'>
        <img src="http://sinjeon.co.kr/img/main_re/main_btm-img2.png" alt="" />
      </div>
    </div>
  )
}

