'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import GearUp from './gearup'

const Featured = () => {
    return (
        <div className='h-screen'>
            <div className='w-[1344px] h-[760px] '>
                <p className="justify-start ml-3 mt-7 font-normal text-[23px] leading-7 font-Roboto text-[#111111] top-[52px]">Featured</p>
                <div className='flex justify-center'>
                    <Image src={'/featured.png'} alt='Shoes' width={1320} height={925} className='md:w-[760px] sm:w-[500px] lg:w-[1320px] mt-2 bg-position:center' />
                </div>
            </div>

            <div className='grid items-center justify-center   text-center font-Roboto font-normal '>
            <p className='w-[806px] h-[60px] text-[56px] leading-[60px] font-Roboto mx-auto text-center mt-0 '>STEP INTO WHAT FEELS GOOD</p>
            <p className='w-[473px] h-[24px] top-[84px]  font-normal mt-8 text-[15px] leading-6 mx-auto text-center font-Roboto '>Cause everyone should know the feeling of running in that perfect pair</p>
            

            <div className='font-roboto font-normal text-center'>
            <Button variant={'default'} className='w-[152.16px] h-[39px] rounded-[30px] pt-[7.5px] pb-[7.5px] pr-[22.66px] pl-[21.5px] mt-8 mr-1 font-Roboto'>Find Your Shoe</Button>
            </div>
            </div>
            <GearUp/>
            <div>
            <div className='w-[1344px] h-[900px] '>
                <p className="justify-start ml-3 mt-16 font-normal text-[23px] leading-7 font-Roboto text-[#111111] top-[52px]">Don't Miss</p>
                <div className='flex justify-center'>
                    <Image src={'/personhangingjacket.png'} alt='Shoes' width={1320} height={925} className='md:w-[760px] sm:w-[500px] lg:w-[1320px] mt-2 bg-position:center' />
</div>
                    <div className='grid items-center justify-center   text-center font-Roboto font-normal '>
            <p className='w-[806px] h-[60px] text-[56px] leading-[60px] font-Roboto mx-auto text-center mt-10 '>FLIGHT ESSENTIALS</p>
            <p className='w-[531px] h-[24px] top-[84px]  font-normal mt-5 text-[15px] leading-6 mx-auto text-center font-Roboto '>Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.</p>


            <div className='font-roboto font-normal text-center'>
            <Button variant={'default'} className='w-[152.16px] h-[39px] rounded-[30px] pt-[7.5px] pb-[7.5px] pr-[22.66px] pl-[21.5px] mt-4 mr-1 font-Roboto'>Shop</Button>
           
            
                <div>
                    <p className="flex p-6 justify-start 7 font-normal text-[23px] leading-7 font-Roboto text-[#111111] top-[52px]">The Essentials</p>
                   <div className='flex  gap-4'> 
                   <Image src={'/1.png'} alt="Image" width={440} height={540} ></Image>
                    <Image src={'/2.png'} alt="Image " width={440} height={540} ></Image>
                    <Image src={'/3.png'} alt="Image"  width={440} height={540}></Image>
                    </div> 
                    </div>
                    </div>
            </div>

            </div>
            </div>
            
       
        
         </div>
    )
}

export default Featured
