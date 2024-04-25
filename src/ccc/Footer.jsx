import React from 'react'
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center bg-[#f1f1f1] py-[1.5%]'>
        <div className='w-[50%] flex justify-between pb-3'>
          <div>
            <img src="http://sinjeon.co.kr/img/common/f_logo_new.jpg" alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <p className=' text-[12px] text-[#666]  font-semibold'>회사소개 | 찾아오시는 길</p>
          </div>
        </div>
        <div className='w-[50%] flex justify-between'>
          <div>
            <p className='text-[12px] text-[#666]  font-semibold'>사업자등록번호 : 504-22-36813　대표:하성호</p>
            <p className='text-[12px] text-[#666] font-semibold'>우)41448 대구광역시 북구 관음로 43　E-mail : sinjeon@sinjeon.co.kr</p>
          </div>
          <div>
              <FaInstagram />
          </div>
        </div>
        <div className='w-[50%] flex justify-start'>
            <p className='text-[12px] text-[#666]  font-semibold'>Copyright © SINJEON FOOD SYS all rights reserved.</p>
        </div>
    </div>
    </>
  )
}
