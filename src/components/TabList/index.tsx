'use client'
import React, { useState } from "react";
import clsx from 'clsx'
const tabsMock = [
  {
    name: 'All Transactions',
    isActive: true,
  },
  {
    name: 'Frontend',
    isActive: false,
  },
  {
    name: 'Backend',
    isActive: false,
  },
  {
    name: 'Mobile',
    isActive: false,
  }
]
export default function TabList() {
  const [tabs, setTabs] = useState(tabsMock)
  const handleTabClick = (tab: string) => {
    setTabs(tabs.map(t => ({ ...t, isActive: t.name === tab })))
  };
  return (
    <div className='relative'>
      <ul className='relative grid grid-cols-auto grid-flow-col justify-start gap-[16px] line-height-[1.4] p-[0px] m-[0px] list-none flex-shrink-0'>
        {tabs.map(tab => (
          <li tabIndex={tab.isActive ? 0 : -1}
            className={clsx('text-[87.5%] leading-[1.4] list-none box-border text-[#3e3446] whitespace-nowrap cursor-pointer ', tab.isActive && 'text-[#6559c5]')} key={tab.name} onClick={() => handleTabClick(tab.name)}>
            <span className='text-current text-[14px] leading-[1.4] text-[#3e3446] whitespace-nowrap cursor-pointer box-border flex items-center relative h-[calc(38px)] rounded-[6px] transform-translate-y-[1px] p-[6px_8px_12px] m-l-[-8px] m-r-[-8px]'>
              <span className='box-border pointer-events-none text-current rounded-[inherit] border-[inherit] bg-current border-current opacity-0 absolute w-auto h-auto transform-none inset-0 hover:opacity-[0.085]' />
              <div className='absolute pointer-events-none rounded-[inherit] z-[0] transition-shadow ease-out delay-100 text-[#2b2233]' />
              {tab.name}
              <div className={clsx('absolute rounded-[2px] pointer-events-none  transition-colors delay-100 ease-out w-[calc(100%-16px)] h-[3px] bottom-0 left-[50%] translate-x-[-50%]',
                tab.isActive && 'bg-[#6c5fc7]')} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}