'use client'
import React from "react";
import ExclamationSvg from "@/components/svgComponents/ExclamationSvg";
export default function Alert() {

  return (
    <div className='grid grid-cols-[minmax(0px,max-content)_minmax(0px,1fr)] gap-[8px] m-[0_0_16px] text-[14px] rounded-[6px] border-[1px] border-[rgba(60,116,221,0.5)] bg-[rgba(60,116,221,0.09)] p-[12px_16px]'>
      <div className='flex items-center h-[calc(19.6px)]'>
        <ExclamationSvg currentColor="#2562d4" />
      </div>
      <span className='relative line-height-[1.4] text-[#2562d4]' >
        To make it easier to see what&apos;s relevant for you, Sentry&apos;s Performance landing page is now being split into separate&nbsp;
        <a className='text-[#2562d4] underline underline-offset-[0.06em] decoration-[#2562d4] decoration-[0.08em] decoration-solid' href="#">Frontend</a>,&nbsp;
        <a className='text-[#2562d4] underline underline-offset-[0.06em] decoration-[#2562d4] decoration-[0.08em] decoration-solid' href="#">Backend</a>,&nbsp;
        <a className='text-[#2562d4] underline underline-offset-[0.06em] decoration-[#2562d4] decoration-[0.08em] decoration-solid' href="#">Mobile</a>, and&nbsp;
        <a className='text-[#2562d4] underline underline-offset-[0.06em] decoration-[#2562d4] decoration-[0.08em] decoration-solid' href="#">AI</a>&nbsp;performance pages. They can all be found in the Insights tab.</span>
    </div>
  )
}