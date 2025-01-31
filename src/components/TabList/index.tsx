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
              <span className={styles['tab-list-item-hover']} />
              <div className={styles['tab-list-item-div']} />
              {tab.name}
              <div className={styles['tab-list-item-underline']} />
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}