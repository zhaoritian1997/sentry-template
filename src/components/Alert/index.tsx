'use client'
import React from "react";
import styles from './index.module.scss'
import ExclamationSvg from "@/components/svgComponents/ExclamationSvg";
export default function Alert() {

  return (
    <div className={styles['alert-info']}>
      <div className={styles['alert-info-icon']}>
        <ExclamationSvg currentColor="#2562d4" />
      </div>
      <span className={styles['alert-info-text']}>
        To make it easier to see what&apos;s relevant for you, Sentry&apos;s Performance landing page is now being split into separate&nbsp;
        <a className={styles['alert-info-link']} href="#">Frontend</a>,&nbsp;
        <a className={styles['alert-info-link']} href="#">Backend</a>,&nbsp;
        <a className={styles['alert-info-link']} href="#">Mobile</a>, and&nbsp;
        <a className={styles['alert-info-link']} href="#">AI</a>&nbsp;performance pages. They can all be found in the Insights tab.</span>
    </div>
  )
}