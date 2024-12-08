'use client'
import Link from 'next/link'
import React from 'react'
// import shoes1 from '.../public/shoes1.png'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Featured from './featured'

import { Firstproductcaroursel } from '@/components/ui/firstproductcaroursel'





const Hero = () => {
    return (<div className='h-full'>
        <div className=' w-[1350px] h-[55px] bg-[#e5e5e5] '>
            <section className="flex flex-col text-center     ">


                <p className="text-[15px] font-Roboto  leading-4 text-[#111111] mt-[10px] top-[-1px] font-medium title-font mb-1">
                    Hello Nike App
                </p>
                <p className=" pr-[11.53px] pl-[11px] font-Roboto leading-6 text-[11px] font-normal items-center top-4  h-[24px] text-[#111111]">
                    Download the app to access everything Nike. <Link href={'/'} className='text-[11px] leading-6  decoration-solid font-normal underline'>Get Your Great</Link>
                </p>


            </section>
            {/* <img src={'public\shoes1.png'} alt=';' ></img> */}

            <div className='flex justify-center'>
                <Image src={'/shoes1.png'} alt='Shoes' width={1320} height={700} className=' bg-position:center' />
            </div>

            <div className='flex items-center justify-center   text-center font-Roboto font-normal '>
                <div className='width-[1008px] h-[229px] left-[168px] top-[748px] space-y-'>
                    
                    <p className='h-[24px] w-[70px] text-[15px] mx-auto text-center mt-10'>First Look</p>

                    <p className='w-[574px] h-[60px] text-[56px] leading-[60px] font-Roboto '>Nike Air Max Pulse</p>

                    <p className='text-[15px] font-normal  leading-6 font-Roboto w-[511px] h-[48px] top-[112px] mt-[10px]'>Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
                        —designed to push you past your limits and help you go to the max.
                        </p>
                </div>
                </div>


            <div className='font-roboto font-normal text-center'>
                <Button variant={'default'} className='w-[138.16px] h-[39px] rounded-[30px] pt-[7.5px] pb-[7.5px] pr-[22.66px] pl-[21.5px] mr-1'>Notify Me</Button>
                <Button variant={'default'} className='ml-1 w-[138.16px] h-[39px] rounded-[30px] pt-[7.5px] pb-[7.5px] pr-[22.66px] pl-[21.5px] mb-16'>Shop Air Max</Button>
            </div>
            <div className="w-[1440px]"></div>

            <Firstproductcaroursel/>
        <Featured/>
      
        </div>
        </div>
    )
}

export default Hero


