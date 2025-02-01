'use client'
import React from "react";
import { Input } from "@/components/ui/input";
import { ExploreSvg } from "@/components/svgComponents";
export default function SearchBar() {
  return (
    <div className='relative'>
      <Input className='h-[38px] p-[10px_12px_10px_38px] border-[rgb(224,220,229)] focus:border-[rgb(108,95,199)]' placeholder="Search Transactions" />
      <div className='absolute left-[16.5px] top-[50%] -translate-y-[50%]'>
        <ExploreSvg  currentColor="#80708f"/>
      </div>
    </div>
  )
}