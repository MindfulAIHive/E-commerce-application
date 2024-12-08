
'use client'
import React from 'react'

import Link from "next/link";

import { BsSuitHeart } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";




const Header = () => {
  return (
    <div className='h-[60px] w-[1440px] ht-[36px] mb-10 '>
      <header className="font-Roboto font-normal text-base bg-white text-[#111111] body-font h-[60px] w-[1440px] ht-[36px] mb-10                   ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

<img src={"Nikelogo.png"} alt="Nike" className='w-[78.85px] h-[78.47px] mt-[-8.74px] l-[9.81px]'/>           
          </Link>
          <nav className="font-Roboto font-normal ml-42 md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/'} className="mr-5 ">Men</Link>
            <Link href={'/'} className="mr-5 ">Women</Link>
            <Link href={'/'} className="mr-5 ">Kids</Link>
            <Link href={'/'} className="mr-5 ">Sale</Link>
            <Link href={'/'} className="mr-5 ">SNKRS</Link>
            <Link href={'/'} className="mr-5">New & Featured</Link>
          </nav>
          <div className="flex  mb-3 items-center w-[180px] h-[40px] bg-[#f5f5f5] rounded-full px-4 mr-3">
            <IoSearch className=" w-[24px] h-[24px]" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent focus:outline-none text-gray-600 placeholder-gray-400"
            />
          </div>

          <span className='h-[60px] w-[84px] flex p-3 gap-3'>
            <BsSuitHeart className='w-[24px] h-[24px]  ' />
            <IoBagHandleOutline className='w-[24px] h-[24px]' />






          </span>
        </div>
      </header>

    </div>
  )
}

export default Header





