'use client'
import React from "react";
import styles from './index.module.scss'
import TabList from "../TabList";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { QuestionSvg, UserFeedbackSvg } from "../svgComponents";
export default function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['header-title-container']}>
        <h1 className={styles['header-title']}>
          Performance
          <Tooltip>
            <TooltipTrigger asChild>
              <a href="#" className={styles['header-title-tooltip-trigger']}>
                <QuestionSvg />
              </a>
            </TooltipTrigger>
            <TooltipContent className={styles['header-tooltip-content']} side="right">
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
        <div className={styles['header-button-container']}>
          <Button size="sm" className={styles['header-button-container-trends']}>View Trends</Button>
          <Button size="sm" variant="outline">
            <div className={styles['header-button-container-feedback']}>
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