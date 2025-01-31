'use client'
import React, { useState } from "react";
import styles from './index.module.scss'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { StarFillSvg, StarOutlineSvg, UserSvg } from "@/components/svgComponents";
import clsx from "clsx";
import Image from "next/image";
import ReactSvg from "@/assets/images/reactjs.svg";
import { nextjsIconBas64 } from "@/lib/utils";

interface Data {
  id: number
  isStar: boolean
  transaction: string
  project: string
  tpm: string
  p50: string
  p95: string
  failureRate: string
  apdex: string
  users: string
  usersMisery: string
}

const mockData: Data[] = [
  {
    id: 1,
    isStar: true,
    transaction: '/path-1',
    project: 'javascript-react',
    tpm: '<0.01/min',
    p50: '321.00ms',
    p95: '953.15ms',
    failureRate: '0.00%',
    apdex: '0.99',
    users: '100',
    usersMisery: '1',
  },
  {
    id: 2,
    isStar: false,
    transaction: '/path-2',
    project: 'javascript-nextjs',
    tpm: '<0.01/min',
    p50: '321.00ms',
    p95: '953.15ms',
    failureRate: '0.00%',
    apdex: '0.99',
    users: '100',
    usersMisery: '0',
  },
  {
    id: 3,
    isStar: false,
    transaction: '/path-3',
    project: 'javascript-react',
    tpm: '<0.01/min',
    p50: '321.00ms',
    p95: '953.15ms',
    failureRate: '0.00%',
    apdex: '0.99',
    users: '100',
    usersMisery: '5',
  },
  {
    id: 4,
    isStar: false,
    transaction: '/path-4',
    project: 'javascript-react',
    tpm: '<0.01/min',
    p50: '321.00ms',
    p95: '953.15ms',
    failureRate: '0.00%',
    apdex: '0.99',
    users: '100',
    usersMisery: '10',
  }
]

export default function PerformanceTable() {
  const [datas, setDatas] = useState<Data[]>(mockData)
  const matchIcon = (project: string) => {
    if (project === 'javascript-react') {
      return ReactSvg
    }
    return nextjsIconBas64
  }

  const handleStar = (id: number) => {
    const newDatas = datas.map((item) => ({ ...item, isStar: item.id === id ? !item.isStar : item.isStar }))
    setDatas(newDatas)
  }
  const createMisery = (usersMisery: string) => {
    const max = 10
    const len = Number(usersMisery)
    const arr = []
    for (let i = 0; i < max; i++) {
      arr.push(i < len ? 1 : 0)
    }
    return arr
  }
  return (
    <div className={styles['performance-table']}>
      <Table>
        <TableHeader className={styles['performance-table-header']}>
          <TableRow>
            <TableHead className={clsx(styles['performance-table-header-star'],
              styles['performance-table-header-th'])}>
              <StarFillSvg />
            </TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-left')}>TRANSACTION</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-left')}>PROJECT</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>TPM</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>P50</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>P95</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>FAILURE RATE</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>APDEX</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th'], 'text-right')}>USERS</TableHead>
            <TableHead className={clsx(styles['performance-table-header-th']
              , 'text-right')}>USERS MISERY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className={styles['performance-table-body']}>
          {datas.map((item) => (
            <TableRow key={item.id} className={styles['performance-table-body-tr']}>
              <TableCell className={clsx(styles['performance-table-body-td'],
                styles['performance-table-body-star'])}
                onClick={() => handleStar(item.id)}>
                {item.isStar ? <StarFillSvg /> : <StarOutlineSvg />}
              </TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'],
                styles['performance-table-body-link'],
                "text-left")}>{item.transaction}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'],
                styles['performance-table-body-link'],
                styles['performance-table-body-project'],
                "text-left")}>
                <Image src={matchIcon(item.project)} alt='icon' width={16} height={16} />
                <span>{item.project}</span>
              </TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'],
                "text-right")}>{item.tpm}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'], "text-right")}>{item.p50}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'], "text-right")}>{item.p95}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'], "text-right")}>{item.failureRate}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'], "text-right")}>{item.apdex}</TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'],
                styles['performance-table-body-users'], "text-right")}>
                <span>{item.users}</span>
                <UserSvg className={styles['performance-table-body-users-icon']} />
              </TableCell>
              <TableCell className={clsx(styles['performance-table-body-td'],
                styles['performance-table-body-users-misery'],
                "text-right")}>
                {createMisery(item.usersMisery).map((item, index) => (
                  <span key={index}
                    className={clsx(styles['performance-table-body-users-misery-item'],
                      item === 1 ? styles['performance-table-body-users-misery-item-active'] : '')} />))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  )
}