"use client"
import { useState, useEffect } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/AppSidebar"
import TopBar from "@/components/TopBar"
import { ScrollArea } from "@/components/ui/scroll-area"
import useResponsive, { configResponsive } from "@/hooks/useResponsive"
import { isBrowser } from "@/lib/utils"

configResponsive({
  md: 1000,
})

export default function Layout({ children }: { children: React.ReactNode }) {
  const responsive = useResponsive()
  const [showSidebar, setShowSidebar] = useState(false)
  const [showTopBar, setShowTopBar] = useState(false)

  useEffect(() => {
    if (isBrowser) {
      setShowSidebar(responsive.md)
      setShowTopBar(!responsive.md)
    }
  }, [responsive])
  return (
    <SidebarProvider>
      {showSidebar && <AppSidebar />}
      <main>
        {showTopBar && <TopBar />}
        <ScrollArea className="h-screen">
          {children}
        </ScrollArea>
      </main>
    </SidebarProvider>
  )
}