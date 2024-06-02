import React from 'react'

export default function TextBox({newtext,name,num}) {
  return (
    <div className='w-[350px] h-[180px] bg-white rounded-3xl flex shadow-indigo-500/40'>
              <div className=' w-full flex justify-center items-center  flex-col'>
                <div className='bg-[#FF8088] w-[170px] h-[38px] text-[16px] flex justify-center items-center font-bold cafefont text-white rounded-2xl'>
                    {newtext}
                </div>
                <div className='flex py-[7px] items-center '>
                  <div>
                    <img src="http://sinjeon.co.kr/img/main_re/m_store_tit_ico2.png" alt="" />  
                  </div>
                  <div className='text-[20px] text-[#FF8088] font-bold pt-4'>{name}</div>
                </div>
                <div>
                  {num}
                </div>
              </div>
          </div>
  )
}
