'use client'
import React from "react";
import TabList from "../TabList";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QuestionSvg, UserFeedbackSvg } from "../svgComponents";
export default function Header() {
  return (
    <header className='flex flex-col p-[16px_16px_0px] bg-[#FAF9FB] border-b border-b-[rgb(224,220,229)] p-[16px_30px_0px]'>
      <div className='flex flex-col justify-between mb-[16px] overflow-hidden max-w-full lg:flex-row'>
        <h1 className='w-full whitespace-nowrap overflow-hidden text-overflow-ellipsis text-[1.625rem] font-semibold letter-spacing-[-0.01em] text-[rgb(43,34,51)] m-[0_0_10px] leading-[40px] flex gap-[8px] items-center lg:mb-[0px]'>
          Performance
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#" className='h-[14px] leading-[14px] cursor-pointer'>
                <QuestionSvg className='h-[14px] w-[14px] transition-opacity duration-120ms opacity-[0.6] hover:opacity-[1]' />
              </a>
            </TooltipTrigger>
            <TooltipContent className='p-[8px_16px] bg-[#fff] rounded-[8px] border border-[rgb(224,220,229)] shadow-[0px_0px_16px_0px_rgba(0,0,0,0.08)] text-[#000] text-[12px] font-normal letter-spacing-[-0.01em] translate-y-[10px]' side="right">
              <div className="flex flex-col gap-2">
                <p className="w-[210px]">Your main view for transaction data with graphs that visualize transactions or trends, as well as a table where you can drill down on individual transactions.
                </p>
                <a href="#">
                  Read the Docs
                </a>
              </div>
            </TooltipContent>
          </Tooltip>
        </h1>
        <div className='flex gap-[8px] items-center'>
          <Button size="sm" className='bg-[rgb(108,95,199)] text-[#fff] text-[0.875rem] font-semibold whitespace-nowrap hover:bg-[rgba(108,95,199,0.8)]'>View Trends</Button>
          <Button size="sm" variant="outline">
            <div className='flex gap-[4px] items-center text-[0.875rem] font-semibold whitespace-nowrap'>
              <UserFeedbackSvg />
              <span>Give Feedback</span>
            </div>
          </Button>
        </div>
      </div>
      <TabList />
    </header>
  )
}