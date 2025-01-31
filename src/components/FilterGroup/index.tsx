'use client'
import styles from './index.module.scss'
import ProjectSelecter from "./ProjectSelecter";
import DateSelecter from "./DateSelecter";
import EvnSelecter from "./EvnSelecter";

export default function FilterGroup() {
  return (
    <div className={styles['filter-group']}>
      <div className={styles['filter-group-item']}>
        <ProjectSelecter />
      </div>
      <div className={styles['filter-group-item']}>
        <EvnSelecter />
      </div>
      <div className={styles['filter-group-item']}>
        <DateSelecter />
      </div>
    </div>
  )
}