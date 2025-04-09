import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  useSidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader
} from "@/components/ui/sidebar"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import clsx from "clsx"
import Account from "./Account"
import Onboarding from "./Onboeraind"
import { menusMock, menuFooterMock, MenuItem } from "@/data/meun"
import { CollapseSvg } from '@/components/svgComponents'

export function AppSidebar() {
  const { toggleSidebar } = useSidebar()
  const [menus, setMenus] = useState(menusMock)
  const [menuFooter] = useState(menuFooterMock)
  const [currentRoute, setCurrentRoute] = useState('Performance')
  const [isCollapse, setIsCollapse] = useState(false)
  const changeRoute = (val: MenuItem) => {
    if (!val.children) {
      setCurrentRoute(val.title)
    } else {
      toggleCollapseSubMenu(val.title)
    }
  }
  const toggleCollapseSubMenu = (val: string) => {
    const selectedMenu = menus.flat().find(m => m.title === val)
    if (selectedMenu) {
      const newMenus = menus.map(item => item.map(m => m.title === val ? ({ ...m, isCollapse: !m.isCollapse }) : m))
      setMenus(newMenus)
    }
  }
  const toggleCollapse = () => {
    setIsCollapse(!isCollapse)
    toggleSidebar()
  }
  return (
    <Sidebar className='bg-[linear-gradient(294.17deg,_rgb(47,25,55)_35.57%,_rgb(69,38,80)_92.42%,_rgb(69,38,80)_92.42%)] text-[#9586a5] leading-none p-[12px_0px_2px]' collapsible="icon">
      <SidebarHeader>
        <Account />
      </SidebarHeader>
      <SidebarContent className='gap-[1px]'>
        {menus.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.map((m) => (
                  <SidebarMenuItem key={m.title} className={clsx('p-0 min-h-[30px] relative',
                    currentRoute === m.title && 'after:content-[""] after:absolute after:top-[4px] after:left-[calc(-17px)] after:w-[5px] after:h-[22px] after:bg-[#6c5fc7] after:rounded-[0_3px_3px_0px] after:z-1'
                  )}>
                    <div className='w-full h-full min-h-[30px]'>
                      {isCollapse ? <Tooltip>
                        <TooltipTrigger asChild >
                          <a href={m.url}
                            className={clsx('h-full w-full min-h-[30px] flex items-center pr-[8px] hover:text-white hover:bg-[rgba(255,255,255,0.085)] hover:rounded-[6px]',
                              currentRoute === m.title && 'text-white bg-[rgba(255,255,255,0.085)] rounded-[6px]'
                            )}
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              changeRoute(m)
                            }}
                          >
                            <span className='inline-block w-[37px] flex-shrink-0' >
                              <m.icon className='w-[18px] h-[18px] m-[0_auto] block' currentColor={currentRoute === m.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                            </span>
                            <span className='ml-[10px] whitespace-nowrap opacity-1 flex-[1_1_0%] flex items-center overflow-hidden text-[15px]'>{m.title}</span>
                            {m.children && <button className='relative inline-block text-transform-none font-semibold border-1 border-transparent text-[0.875rem] leading-[1rem] transition-[background_100ms]  min-h-auto height-[calc(100%-8px)] m-[0px_-4px] p-[0px_6px] rounded-[calc(4px)] text-[#80708f]'
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                toggleCollapseSubMenu(m.title)
                              }}>
                              <CollapseSvg className={clsx('transform rotate-[180deg]',
                                m.isCollapse && 'transform rotate-[0deg]'
                              )} />
                            </button>}
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='p-[8px_16px] bg-[#fff] text-[#3e3449] text-[12px] rounded-[6px] shadow-[0_0_4px_rgba(0,0,0,0.1)] border-[1px_solid_#e0e0e0]' >
                          <p>{m.title}</p>
                        </TooltipContent>
                      </Tooltip>
                        : <a href={m.url}
                          className={clsx('h-full w-full min-h-[30px] flex items-center pr-[8px] hover:text-white hover:bg-[rgba(255,255,255,0.085)] hover:rounded-[6px]',
                            currentRoute === m.title && 'text-white bg-[rgba(255,255,255,0.085)] rounded-[6px]'
                          )}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            changeRoute(m)
                          }}
                        >
                          <span className='inline-block w-[37px] flex-shrink-0' >
                            <m.icon className='w-[18px] h-[18px] m-[0_auto] block' currentColor={currentRoute === m.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                          </span>
                          <span className='ml-[10px] whitespace-nowrap opacity-1 flex-[1_1_0%] flex items-center overflow-hidden text-[15px]'>{m.title}</span>
                          {m.children && <button className='relative inline-block text-transform-none font-semibold border-1 border-transparent text-[0.875rem] leading-[1rem] transition-[background_100ms]  min-h-auto height-[calc(100%-8px)] m-[0px_-4px] p-[0px_6px] rounded-[calc(4px)] text-[#80708f]'
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleCollapseSubMenu(m.title)
                            }}>
                            <CollapseSvg className={clsx('transform rotate-[180deg]',
                              m.isCollapse && 'transform rotate-[0deg]'
                            )} />
                          </button>}
                        </a>
                      }
                      {!isCollapse && m.children && m.isCollapse &&
                        <div>
                          {m.children.map((c) => (
                            <div key={c.title} className='p-0 min-h-[30px] relative'>
                              <div className='w-full h-full min-h-[30px]'>
                                <a href={c.url} className={clsx('h-full w-full min-h-[30px] flex items-center pr-[8px] hover:text-white hover:bg-[rgba(255,255,255,0.085)] hover:rounded-[6px]',
                                  currentRoute === c.title && 'text-white bg-[rgba(255,255,255,0.085)] rounded-[6px] after:content-[""] after:absolute after:top-[4px] after:left-[calc(-17px)] after:w-[5px] after:h-[22px] after:bg-[#6c5fc7] after:rounded-[0_3px_3px_0px] after:z-1'
                                )}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    e.stopPropagation()
                                    changeRoute(c)
                                  }}
                                >
                                  <div className='flex items-center justify-center flex-shrink-0 w-[37px]'>
                                    <div className='w-[3px] h-[3px] bg-current rounded-full opacity-1' />
                                  </div>
                                  <span className='ml-[10px] whitespace-nowrap opacity-1 flex-[1_1_0%] flex items-center overflow-hidden text-[15px]'>{c.title}</span>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>}
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="gap-[1px] p-0 overflow-hidden">
        <SidebarGroup className="p-0 m-0">
          <SidebarGroupContent>
            <Onboarding isCollapse={isCollapse} />
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuFooter.map((item) => (
                <SidebarMenuItem key={item.title} className={clsx('p-0 min-h-[30px] relative',
                  currentRoute === item.title && 'after:content-[""] after:absolute after:top-[4px] after:left-[calc(-17px)] after:w-[5px] after:h-[22px] after:bg-[#6c5fc7] after:rounded-[0_3px_3px_0px] after:z-1 '
                )}>
                  <div className='w-full h-full min-h-[30px]'
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      changeRoute(item)
                    }}>
                    {isCollapse ?
                      <Tooltip>
                        <TooltipTrigger asChild >
                          <a className={clsx('h-full w-full min-h-[30px] flex items-center pr-[8px] hover:text-white hover:bg-[rgba(255,255,255,0.085)] hover:rounded-[6px]',
                            currentRoute === item.title && 'text-white bg-[rgba(255,255,255,0.085)] rounded-[6px]'
                          )}
                            href={item.url}>
                            <span className='inline-block w-[37px] flex-shrink-0' >
                              <item.icon className='w-[18px] h-[18px] m-[0_auto] block' currentColor={currentRoute === item.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                            </span>
                            <span className='ml-[10px] whitespace-nowrap opacity-1 flex-[1_1_0%] flex items-center overflow-hidden text-[15px]'>{item.title}</span>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent side="right" className='p-[8px_16px] bg-[#fff] text-[#3e3449] text-[12px] rounded-[6px] shadow-[0_0_4px_rgba(0,0,0,0.1)] border-[1px_solid_#e0e0e0] before:content-[""] before:absolute before:top-1/2 before:left-[-4px] before:w-[10px] before:h-[10px] before:bg-[#fff] before:transform before:-translate-y-1/2 before:rotate-45'>
                          <p>{item.title}</p>
                        </TooltipContent>
                      </Tooltip>
                      : <a className='h-full w-full min-h-[30px] flex items-center pr-[8px] hover:text-white hover:bg-[rgba(255,255,255,0.085)] hover:rounded-[6px]' href={item.url}>
                        <span className='inline-block w-[37px] flex-shrink-0' >
                          <item.icon className='w-[18px] h-[18px] m-[0_auto] block' currentColor={currentRoute === item.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                        </span>
                        <span className='ml-[10px] whitespace-nowrap opacity-1 flex-[1_1_0%] flex items-center overflow-hidden text-[15px]'>{item.title}</span>
                      </a>
                    }
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className='flex items-center w-full h-[30px] flex-shrink-0 cursor-pointer transition-[background_100ms] hover:bg-[rgba(255,255,255,0.085)] rounded-[6px] hover:text-white'
              onClick={toggleCollapse}>
              <div className={clsx('flex items-center justify-center flex-shrink-0 w-[37px] transform rotate-[-90deg]', isCollapse && 'rotate-[90deg]')}>
                <CollapseSvg className='w-[18px] h-[18px] m-0 auto block' />
              </div>
              <span className='ml-[10px] whitespace-nowrap opacity-1 flex-1 flex items-center overflow-hidden text-[15px]'>Collapse</span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
