'use client'
import React from "react";
import styles from './index.module.scss'
import { Input } from "@/components/ui/input";
import { ExploreSvg } from "@/components/svgComponents";
export default function SearchBar() {
  return (
    <div className={styles['search-bar']}>
      <Input className={styles['search-bar-input']} placeholder="Search Transactions" />
      <div className={styles['search-bar-icon']}>
        <ExploreSvg  currentColor="#80708f"/>
      </div>
    </div>
  )
}