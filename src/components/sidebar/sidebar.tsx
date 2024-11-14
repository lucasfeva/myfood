import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import { NavSecondary } from "./nav-secundary"
import { Pizza, Home, UtensilsCrossed, LifeBuoy, Send } from "lucide-react"

const data = {
  enterprise: {
    title: "Pizza shop",
    enterprise: "Nome do estabelecimento",
    icon: Pizza,
  },
  user: {
    name: "Lucas Ferreira",
    email: "lucas.ferreira@gmail.com",
    avatar: "https://github.com/luscasPng.png",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/",
      icon: Home,
    },
    {
      title: "Pedidos",
      url: "/orders",
      icon: UtensilsCrossed,
    },
  ],
  navSecondary: [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
}

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center">
            <data.enterprise.icon className="size-8" />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">{data.enterprise.title}</span>
            <span className="truncate text-xs">{data.enterprise.enterprise}</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
