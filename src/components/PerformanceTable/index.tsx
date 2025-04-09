'use client'
import React, { useState } from "react";
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
    <div className='bg-[#fff] rounded-[6px] border-[1px] border-[#e4e0e9] mb-[16px] relative overflow-hidden z-[1]'>
      <Table>
        <TableHeader className='h-[45px] text-[#80708f] bg-[#faf9fb]'>
          <TableRow>
            <TableHead className='p-[8px_0_8px_20px] w-[40px] flex items-center justify-center'>
              <StarFillSvg />
            </TableHead>
            <TableHead className='p-[0_16px] text-left'>TRANSACTION</TableHead>
            <TableHead className='p-[0_16px] text-left'>PROJECT</TableHead>
            <TableHead className='p-[0_16px] text-right'>TPM</TableHead>
            <TableHead className='p-[0_16px] text-right'>P50</TableHead>
            <TableHead className='p-[0_16px] text-right'>P95</TableHead>
            <TableHead className='p-[0_16px] text-right'>FAILURE RATE</TableHead>
            <TableHead className='p-[0_16px] text-right'>APDEX</TableHead>
            <TableHead className='p-[0_16px] text-right'>USERS</TableHead>
            <TableHead className='p-[0_16px] text-right'>USERS MISERY</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((item) => (
            <TableRow key={item.id} className='whitespace-nowrap'>
              <TableCell className='h-[43px] p-[8px_0_8px_20px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] w-[40px] flex items-center justify-center cursor-pointer'
                onClick={() => handleStar(item.id)}>
                {item.isStar ? <StarFillSvg /> : <StarOutlineSvg />}
              </TableCell>
              <TableCell className='h-[43px] p-[8px_16px] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-decoration-none  cursor-pointer text-left text-[#2562d4]'>
                <span>{item.transaction}</span>
              </TableCell>
              <TableCell className='h-[43px] p-[8px_16px] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-decoration-none text-left flex gap-[6px] cursor-pointer  items-center text-[#2562d4]'>
                <Image src={matchIcon(item.project)} alt='icon' width={16} height={16} />
                <span>{item.project}</span>
              </TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right'>{item.tpm}</TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right'>{item.p50}</TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right'>{item.p95}</TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right'>{item.failureRate}</TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right '>{item.apdex}</TableCell>
              <TableCell className='h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] text-right flex items-center justify-end gap-[4px]'>
                <span>{item.users}</span>
                <UserSvg className='w-[14px] h-[14px]' />
              </TableCell>
              <TableCell className="h-[43px] p-[8px_16px] text-[#3e3446] tabular-nums whitespace-nowrap overflow-hidden text-[14px] max-w-[80px] ml-auto gap-[2px] items-center text-right">
                {createMisery(item.usersMisery).map((item, index) => (
                  <span key={index}
                    className={clsx('w-[4px] h-[20px] inline-block border-radius-[0px] m-[2px]',
                      item === 1 ? 'bg-[#444674]' : 'bg-[#e6e2e6]')} />))}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>

  )
}