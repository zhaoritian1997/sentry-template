'use client'
import React, { useState } from "react";
import styles from './index.module.scss'
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
    <div className={styles['performance-widget']}>
      <div className={styles['performance-widget-header']}>
        <div className={styles['performance-widget-header-title']}>
          <div className='flex items-center'>
            <Popover open={isCollapse} onOpenChange={setIsCollapse}>
              <PopoverTrigger asChild>
                <Button variant="ghost" size="sm" className={styles['performance-widget-header-title-btn']}>
                  <span>{title}</span>
                  <span
                    className={clsx(styles['performance-widget-header-title-collapse'], {
                      [styles['performance-widget-header-title-collapse-active']]: isCollapse
                    })}
                    onClick={() => setIsCollapse(!isCollapse)}
                  >
                    <CollapseSvg />
                  </span>
                </Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="start" className={styles['performance-widget-popover-content']}>
                <div className={styles['performance-widget-popover-content-list']}>
                  {popoverContentList.map((item) => (
                    <div className={clsx(styles['performance-widget-popover-content-list-item'],
                      item.checked && styles['performance-widget-popover-content-list-item-checked'],
                      item.disabled && styles['performance-widget-popover-content-list-item-disabled']
                    )} key={item.name} onClick={() => handleDateChange(item)}>
                      <div className={styles['performance-widget-popover-content-list-item-text']}>
                        {item.checked ? <CheckMarkSvg className={styles['performance-widget-popover-content-list-item-text-icon']} /> : <div className={styles['performance-widget-popover-content-list-item-text-icon']} />}
                        <span>{item.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
            {isNew && <div className={styles['performance-widget-header-title-new']}>
              <span style={{ display: 'inline-block', maxWidth: '100%' }}>
                <span className={styles['performance-widget-header-title-new-text']}>new</span>
              </span>
            </div>}
          </div>
          <div className={styles['performance-widget-header-desc']}>
            {desc}
          </div>
        </div>
        <div className={styles['performance-widget-header-right']}>
          {showViewAll && <Button className={styles['performance-widget-header-right-view-all']} variant="outline" size="sm">View All</Button>}
          {chartValue && <span className={styles['performance-widget-header-right-value']}>{chartValue}</span>}
        </div>
      </div>
      <div className={styles['performance-widget-content']}>
        {chartNode}
      </div>
    </div>
  )
}