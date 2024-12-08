
'use client'
import React from 'react'
import { GearCarousel1 } from "./gearcarorsel";
import { GearCarousel2 } from "./GearCarousel2";


export default function GearUp() {
  return (
    <section>
      <h1 className=" w-[1344px]  font-normal flex justify-start ml-3 mt-7 text-[23px] leading-7 font-Roboto text-[#111111] top-[52px] mb-3">Gear Up</h1>
      <div className="md:flex space-y-10 md:space-y-0 md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>

  
  );
}