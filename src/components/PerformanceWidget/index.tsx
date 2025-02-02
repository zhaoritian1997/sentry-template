'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { CollapseSvg, CheckMarkSvg } from "../svgComponents";

import clsx from 'clsx'
export interface PopoverContentItem {
  name: string,
  desc: string,
  checked: boolean
  disabled: boolean
}

interface PerformanceWidgetProps {
  title: string,
  isNew: boolean,
  desc: string,
  showViewAll: boolean,

  chartValue?: string,
  chartNode: React.ReactNode
  popoverContentList: PopoverContentItem[]
  onDateChange: (val: PopoverContentItem) => void
}

export default function PerformanceWidget(props: PerformanceWidgetProps) {
  const { title, chartNode, popoverContentList = [], onDateChange, desc, isNew, showViewAll, chartValue } = props
  const [isCollapse, setIsCollapse] = useState(false)
  const handleDateChange = (val: PopoverContentItem) => {
    onDateChange(val)
    setIsCollapse(false)
  }
  return (
    <div className='bg-[#fff] rounded-[6px] border-[1px] border-[#e4e0e5] relative flex flex-col mb-[0px]'>
      <div className='flex justify-between items-center p-[8px_10px]'>
        <div>
          <div className='flex items-center'>
            <Popover open={isCollapse} onOpenChange={setIsCollapse}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className='p-[4px_8px] flex items-center justify-between gap-[8px] text-[16px] font-semibold'>
                  <span>{title}</span>
                  <span
                    className={clsx('transition-transform duration-300 ease-in-out',
                      isCollapse ? 'rotate-0' : 'rotate-180'
                    )}
                    onClick={() => setIsCollapse(!isCollapse)}
                  >
                    <CollapseSvg />
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="start" className='p-[0px] flex flex-col'>
                <div className='flex flex-col gap-[8px] p-[8px]'>
                  {popoverContentList.map((item) => (
                    <div className={clsx('flex items-center justify-between p-[4px] rounded-[4px] cursor-pointer',
                      item.checked && 'bg-[#f0f0f0] hover:bg-[rgba(101, 89, 197, 0.085)]',
                      item.disabled && 'cursor-not-allowed'
                    )} key={item.name} onClick={() => handleDateChange(item)}>
                      <div className='flex items-center gap-[4px]'>
                        {item.checked ?
                          <CheckMarkSvg className='w-[16px] h-[16px]' /> :
                          <div className='w-[16px] h-[16px]' />}
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            {isNew && <div className='relative top-[-2px] ml-[2px]'>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span style={{ display: 'inline-block', maxWidth: '100%' }}>
                    <span className='inline-block min-w-[20px] rounded-[20px] text-center text-[#fff] bg-[linear-gradient(90deg,_#3c74dd,_#2ba185)] transition-bg-100 linear duration-100 relative px-[6px] m-0 text-[11px] font-normal leading-[16px] h-[16px]'>new</span>
                  </span>
                </TooltipTrigger>
                <TooltipContent className='p-[8px_16px] bg-[#fff] rounded-[8px] border-[1px] border-[#e4e0e5] box-shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] text-[#000] text-[12px] font-normal letter-spacing-[-0.01em] before:content-[""] before:absolute before:top-[28px] before:left-[-7px] before:w-[10px] before:h-[10px] before:border-l-[1px] before:border-b-[1px] before:border-[#e4e0e5] before:bg-[#fff] before:rotate-[45deg] before:translate-y-[-50%] before:z-[1]' side="right" sideOffset={10}>
                  <p className="w-[225px]">This feature is new!Try it out and let us know what you think
                  </p>
                </TooltipContent>
              </Tooltip>
            </div>}
          </div>
          <div className='pl-[8px] text-[14px] text-[#80708f]'>
            {desc}
          </div>
        </div>
        <div>
          {showViewAll && <Button className='h-[32px] text-transform-none font-bold text-[#3e3446] text-[14px]' variant="outline" size="sm">View All</Button>}
          {chartValue && <span>{chartValue}</span>}
        </div>
      </div>
      <div className='p-[8px_10px] flex-grow flex items-center justify-center'>
        {chartNode}
      </div>
    </div>
  )
}