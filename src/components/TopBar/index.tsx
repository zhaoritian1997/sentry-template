import { useState } from 'react'
import styles from './index.module.scss'
import { menusMock, menuFooterMock, MenuItem } from "@/data/meun"
import clsx from 'clsx'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { ProgressRingSvg } from '@/components/svgComponents'
const Account = () => {
  return <div className={styles['top-bar-left-logo-avatar']}>
    <span className={styles['top-bar-left-logo-avatar-icon']} title="logo">
      <svg viewBox="0 0 120 120" className={styles['top-bar-left-logo-avatar-icon-svg']}>
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
    return <div className={styles['menus']}>
      {menus.map((menu) => (
        <Tooltip key={menu.title}>
          <TooltipTrigger asChild>
            <a className={clsx(styles['menus-item'], currentRoute === menu.title && styles['active'])} key={menu.title} onClick={() => setCurrentRoute(menu.title)}>
              <menu.icon className={styles['menus-item-icon']} currentColor={currentRoute === menu.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
            </a>
          </TooltipTrigger>
          <TooltipContent side="bottom" sideOffset={10} className={styles['menus-item-tooltip-content']}
          >
            <p>{menu.title}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  }
  return <div className={clsx(styles['top-bar'])}>
    <div className={styles['top-bar-left']}>
      <div className={styles['top-bar-left-logo']}>
        <Account />
      </div>
      <div className={styles['top-bar-left-menus']}>
        {menus.map((menu, index) => (
          <div key={index}>
            <MenuItemComponent menus={menu} />
          </div>
        ))}
      </div>
    </div>
    <div className={styles['top-bar-right']}>
      <ProgressRingSvg progress={7} />
      <div className={styles['top-bar-right-menus']}>
        <MenuItemComponent menus={menuFooter} />
      </div>
    </div>
  </div>
}

