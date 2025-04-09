import {
  AlertsSvg,
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
export interface MenuItem {
  title: string
  url: string
  icon: React.FC<{ className?: string, currentColor?: string }>
  children?: MenuItem[]
  isCollapse?: boolean
}
export const menusMock: MenuItem[][] = [[
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
export const menuFooterMock = [
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