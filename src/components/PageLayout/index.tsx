"use client"
import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import TopBar from "@/components/TopBar"
import useResponsive, { configResponsive } from "@/hooks/useResponsive"
import { isBrowser } from "@/lib/utils"
import { TooltipProvider } from "@/components/ui/tooltip"
import Loading from "@/components/Loading"
configResponsive({
  md: 1000,
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const responsive = useResponsive()
  const [loading, setLoading] = useState(true)
  const [showSidebar, setShowSidebar] = useState(false)
  const [showTopBar, setShowTopBar] = useState(false)

  useEffect(() => {
    if (isBrowser) {
      setShowSidebar(responsive.md)
      setShowTopBar(!responsive.md)
    }
  }, [responsive])
  useEffect(() => {
    setLoading(false)
  }, [])
  return (
    <TooltipProvider>
      <SidebarProvider>
        {showSidebar && <AppSidebar />}
        <Loading loading={loading}>
          <div className="flex-1 flex flex-col h-screen w-full overflow-x-hidden">
            {showTopBar && <TopBar />}
            {children}
          </div>
        </Loading>
      </SidebarProvider>
    </TooltipProvider>
  )
}