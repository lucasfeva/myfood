import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-8xl text-primary font-extrabold">404</h1>
      <h1 className="text-4xl font-bold ">Página não encontrada</h1>
      <p className="text-accent-foreground">A página que você está tentando acessar não existe</p>
      <Link to="/">
        <Button variant={"ghost"}>Retornar para Dashboard</Button>
      </Link>
    </div>
  )
}