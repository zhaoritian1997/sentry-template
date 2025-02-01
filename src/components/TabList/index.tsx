'use client'
import React, { useState } from "react";
import styles from './index.module.scss'
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
    <div className={styles['tab-list']}>
      <ul className={styles['tab-list-wrapper']}>
        {tabs.map(tab => (
          <li tabIndex={tab.isActive ? 0 : -1} className={clsx(styles['tab-list-item'], tab.isActive && styles['tab-list-item-active'])} key={tab.name} onClick={() => handleTabClick(tab.name)}>
            <span className={styles['tab-list-item-wrapper']}>
              <span className='box-border text-[currentcolor] pointer-events-none'/>
              <div className='absolute pointer-events-none rounded-[inherit] z-[0] transition-shadow ease-out delay-100'/>
              {tab.name}
              <div className={clsx('absolute rounded-[2px] pointer-events-none bg-transparent transition-colors delay-100 ease-out w-[calc(100%-16px)] h-[3px] bottom-0 left-[50%] translate-x-[-50%]', tab.isActive && 'bg-[rgb(108,95,199)]')}/>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}