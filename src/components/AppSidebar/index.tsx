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
import clsx from "clsx"
import Account from "./Account"
import Onboarding from "./Onboeraind"
import styles from "./index.module.scss"
import {
  AlertsSvg,
  CollapseSvg,
  CronsSvg,
  DashboardSvg,
  ExploreSvg,
  HelpSvg,
  InsightsSvg,
  IssuesSvg,
  MySentryTrialSvg,
  PerformanceSvg,
  ProjectsSvg,
  ReleasesSvg,
  SettingsSvg,
  StatsSvg,
  UserFeedbackSvg,
  WhatIsNewSvg
} from '@/components/svgComponents'
interface MenuItem {
  title: string
  url: string
  icon: React.FC<{ className?: string, currentColor?: string }>
  children?: MenuItem[]
  isCollapse?: boolean
}
const menusMock: MenuItem[][] = [[
  {
    title: "Issues",
    url: "#",
    icon: IssuesSvg,
  },
  {
    title: "Projects",
    url: "#",
    icon: ProjectsSvg,
  }
], [
  {
    title: "Explore",
    url: "#",
    icon: ExploreSvg,
    isCollapse: false,
    children: [
      {
        title: "Traces",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "Profiles",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "Replays",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "Discover",
        url: "#",
        icon: IssuesSvg,
      }
    ]
  },
  {
    title: "Insights",
    url: "#",
    icon: InsightsSvg,
    isCollapse: false,
    children: [
      {
        title: "Frontend",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "Backend",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "Mobile",
        url: "#",
        icon: IssuesSvg,
      },
      {
        title: "AI",
        url: "#",
        icon: IssuesSvg,
      }
    ]
  }
], [
  {
    title: "Performance",
    url: "#",
    icon: PerformanceSvg,
  },
  {
    title: "User Feedback",
    url: "#",
    icon: UserFeedbackSvg,
  },
  {
    title: "Crons",
    url: "#",
    icon: CronsSvg,
  },
  {
    title: "Alerts",
    url: "#",
    icon: AlertsSvg,
  },
  {
    title: "Dashboards",
    url: "#",
    icon: DashboardSvg,
  },
  {
    title: "Releases",
    url: "#",
    icon: ReleasesSvg,
  },
], [
  {
    title: "Stats",
    url: "#",
    icon: StatsSvg,
  },
  {
    title: "Settings",
    url: "#",
    icon: SettingsSvg,
  }
]]
const menuFooterMock = [
  {
    title: "My Sentry Trial",
    url: "#",
    icon: MySentryTrialSvg,
  },
  {
    title: "Help",
    url: "#",
    icon: HelpSvg,
  },
  {
    title: "What's new",
    url: "#",
    icon: WhatIsNewSvg,
  }
]
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
  function toggleCollapseSubMenu(val: string) {
    const selectedMenu = menus.flat().find(m => m.title === val)
    if (selectedMenu) {
      const newMenus = menus.map(item => item.map(m => m.title === val ? ({ ...m, isCollapse: !m.isCollapse }) : m))
      setMenus(newMenus)
    }
  }
  function toggleCollapse() {
    setIsCollapse(!isCollapse)
    toggleSidebar()
  }
  return (
    <Sidebar className={styles['app-sidebar']} collapsible="icon">
      <SidebarHeader>
        <Account />
      </SidebarHeader>
      <SidebarContent className='gap-[1px]'>
        {menus.map((item, index) => (
          <SidebarGroup key={index}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.map((m) => (
                  <SidebarMenuItem key={m.title} className={styles['app-sidebar-link']}>
                    <div className={styles['app-sidebar-link-container']}>
                      <a href={m.url} className={
                        clsx(styles['app-sidebar-link-a'],
                          currentRoute === m.title && styles['app-sidebar-link-active']
                        )
                      }
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          changeRoute(m)
                        }}
                      >
                        <span className={styles['app-sidebar-link-icon']} >
                          <m.icon className={styles['app-sidebar-link-icon-svg']} currentColor={currentRoute === m.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                        </span>
                        <span className={styles['app-sidebar-link-title']}>{m.title}</span>
                        {m.children && <button className={clsx(styles['app-sidebar-link-collapse-button'],
                          m.isCollapse && styles['app-sidebar-link-collapse-button-active']
                        )}
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleCollapseSubMenu(m.title)
                          }}>
                          <CollapseSvg className={styles['app-sidebar-link-collapse-svg']} />
                        </button>}
                      </a>
                      {!isCollapse && m.children && m.isCollapse && <div className={styles['app-sidebar-link-collapse-content']}>
                        {m.children.map((c) => (
                          <div key={c.title} className={clsx(styles['app-sidebar-link'],
                            currentRoute === c.title && styles['app-sidebar-link-active']
                          )}>
                            <div className={styles['app-sidebar-link-container']}>
                              <a href={c.url} className={styles['app-sidebar-link-a']}
                                onClick={(e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  changeRoute(c)
                                }}
                              >
                                <div className={styles['app-sidebar-link-sub-item']} >
                                  <div className={styles['app-sidebar-link-sub-item-dot']} />
                                </div>
                                <span className={styles['app-sidebar-link-sub-item-title']}>{c.title}</span>
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
                <SidebarMenuItem key={item.title} className={clsx(styles['app-sidebar-link'],
                  currentRoute === item.title && styles['app-sidebar-link-active']
                )}>
                  <div className={styles['app-sidebar-link-container']}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      changeRoute(item)
                    }}>
                    <a className={styles['app-sidebar-link-a']}
                      href={item.url}>
                      <span className={styles['app-sidebar-link-icon']} >
                        <item.icon className={styles['app-sidebar-link-icon-svg']} currentColor={currentRoute === item.title ? "rgb(255, 255, 255)" : "rgb(149, 134, 165)"} />
                      </span>
                      <span className={styles['app-sidebar-link-title']}>{item.title}</span>
                    </a>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <div className={clsx(styles['app-sidebar-collapse'], isCollapse && styles['app-sidebar-collapse-active'])} onClick={toggleCollapse}>
              <div className={styles['app-sidebar-collapse-icon']}>
                <CollapseSvg />
              </div>
              <span className={styles['app-sidebar-collapse-title']}>Collapse</span>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
