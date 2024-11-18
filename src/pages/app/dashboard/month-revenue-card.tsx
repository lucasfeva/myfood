import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export function MonthRevenueCard() {
  return (
    <Card>
      <CardHeader className="flex items-center justify-between pb-2 flex-row space-y-0">
        <CardTitle className="text-base font-semibold">Receita total mensal</CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground"/>
      </CardHeader>
      <CardContent className="space-y-1 flex flex-col">
        <span className="text-2xl font-bold tracking-tight">R$ 1820,95</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">+1%</span>{' '}
          em relaçao ao mês passado
          </p>
      </CardContent>
    </Card>
  )
}
