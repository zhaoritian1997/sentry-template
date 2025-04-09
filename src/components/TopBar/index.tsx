import { useState } from 'react'
import { menusMock, menuFooterMock, MenuItem } from "@/data/meun"
import clsx from 'clsx'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ProgressRingSvg } from '@/components/svgComponents'
const Account = () => {
  return <div className='relative p-[0_3px]'>
    <span className='inline-block border-none shadow-[rgba(0,0,0,0.08)_0px_2px_0px] rounded-[6px] w-[32px] h-[32px] relative align-middle' >
      <svg viewBox="0 0 120 120" className='absolute top-0 left-0 rounded-[3px] user-select-none overflow-hidden'>
        <rect x="0" y="0" width="120" height="120" rx="15" ry="15" fill="#3fa372"></rect>
        <text x="50%" y="50%" fontSize="65" textAnchor="middle" fill="#FFFFFF" style={{ dominantBaseline: 'central' }}>Pro</text>
      </svg>
    </span>
  </div>
}

export default function TopBar() {
  const [currentRoute, setCurrentRoute] = useState('Performance')
  const [menus] = useState(menusMock)
  const [menuFooter] = useState(menuFooterMock)
  const MenuItemComponent = ({ menus }: { menus: MenuItem[] }) => {
    return <div className='flex items-center gap-[2px]'>
      {menus.map((menu) => (
        <Tooltip key={menu.title}>
          <TooltipTrigger asChild>
            <a className={clsx('flex items-center justify-center w-[37px] h-[30px] border-none shadow-[rgba(0,0,0,0.08)_0px_2px_0px] rounded-[6px] cursor-pointer hover:bg-[rgba(255,255,255,0.085)] hover:text-[#fff] hover:rounded-[6px]', 
              currentRoute === menu.title && 'relative after:content-[""] after:absolute after:inset-[auto_5px_-12px] after:h-[5px] after:w-auto after:bg-[#6c5fc7] after:rounded-[3px_3px_0px_0px]')} key={menu.title} onClick={() => setCurrentRoute(menu.title)}>
              <menu.icon className='w-[18px] h-[18px] text-current' currentColor={currentRoute === menu.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={10} className='bg-white text-black shadow-md before:content-[""] before:absolute before:top-[-5px] before:left-1/2 before:w-2 before:h-2 before:bg-white before:transform before:-translate-x-1/2 before:rotate-45'  >
            <p>{menu.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  }
  return <div className='fixed top-0 left-0 right-0 bg-[linear-gradient(294.17deg,_rgb(47,25,55)_35.57%,_rgb(69,38,80)_92.42%,_rgb(69,38,80)_92.42%)] inset-0 h-[54px] w-auto p-[0_8px] flex items-center justify-between z-[1] border-b border-transparent z-[1]'>
    <div className='flex items-center gap-[2px]'>
      <div>
        <Account />
      </div>
      <div className='flex items-center gap-[2px]'>
        {menus.map((menu, index) => (
          <div key={index}>
            <MenuItemComponent menus={menu} />
          </div>
        ))}
      </div>
    </div>
    <div className='flex items-center gap-[2px]'>
      <ProgressRingSvg progress={7} />
      <div>
        <MenuItemComponent menus={menuFooter} />
      </div>
    </div>
  </div>
}

