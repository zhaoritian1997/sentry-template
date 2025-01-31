'use client'
import React from "react";
import { ChevronRight, ChevronLeft } from "lucide-react"
import styles from './index.module.scss'
import { Button } from "@/components/ui/button";
export default function Pagination() {
  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination-wrapper']}>
        <Button className={styles['pagination-btn']}
          variant="ghost" size="icon">
          <ChevronLeft color="#80708f" />
        </Button>
        <Button
          className={styles['pagination-btn']}
          variant="ghost" size="icon">
          <ChevronRight color="#80708f" />
        </Button>
      </div>
    </div>
  )
}