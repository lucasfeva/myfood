import { Soup } from "lucide-react";
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased p-4 bg-primary">
      <div className="h-full p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg font-medium text-foreground">
          <Soup className="h-5 w-5 text-primary-foreground" />
          <span className="font-semibold text-primary-foreground">myFood</span>
        </div>
        <footer className="text-sm text-primary-foreground">Painel do parceiro &copy; myFood - {new Date().getFullYear()}</footer>
      </div>
      <div className="flex justify-center items-center flex-col relative bg-background rounded-md">
        <Outlet />
      </div>
    </div>
  )
}