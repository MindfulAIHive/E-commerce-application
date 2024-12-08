import React from 'react'

import Link from 'next/link'

const Topbar = () => {
  return (
    <div className='bg-[#f5f5f5]'>

      <div className=" container mx-auto flex flex-wrap h-[36px] w-[1440px] p-3  py-1 flex-col md:flex-row items-center justify-center">
        <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb- md:mb-0">
   <img src={"/jordanlogo.png"} alt='Jordan' className='w-[24px] h-[24px]'></img>
      
         
        </Link>
        <nav className=" font-Roboto md:ml-auto flex flex-wrap items-center text-base justify-end text-[#111111] gap-[15.38px]
">
          <a className="mr-5 hover:text-gray-900"><pre className='font-Roboto font-medium'>Find a Store  |</pre></a>
          <a className="mr-5 hover:text-gray-900"><pre className='font-Roboto'>Help  |</pre></a>
          <a className="mr-5 hover:text-gray-900"><pre className='font-Roboto'>Join Us  |</pre></a>
          <a className="mr-5 hover:text-gray-900"><pre className='font-Roboto'>Sign In  |</pre></a>
        </nav>


      </div>


    </div>
  )
}

export default Topbar
