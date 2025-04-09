'use client'
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button";
export default function Pagination() {
  return (
    <div className='mt-[4px] flex justify-end'>
      <div className='grid grid-flow-col gap-[0px] items-center border border-[rgb(224,220,229)] rounded-[6px]'>
        <Button className='w-[40px] h-[32px]'
          variant="ghost" size="icon">
          <ChevronLeft color="#80708f" />
        </Button>
        <Button
          className='w-[40px] h-[32px] border-l border-[rgb(224,220,229)] rounded-none'
          variant="ghost" size="icon">
          <ChevronRight color="#80708f" />
        </Button>
      </div>
    </div>
  )
}