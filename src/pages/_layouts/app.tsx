import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/sidebar/sidebar";

export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <div className="">
        <SidebarProvider>
          <AppSidebar />
          <main className="p-3 w-full">
            <SidebarTrigger />
            <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
            <Outlet />

            </div>
          </main>
        </SidebarProvider>
        
      </div>
    </div>
  )
}