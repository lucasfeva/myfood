import { Pie, PieChart } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart } from "lucide-react"

const chartData = [
  { product: "Pepperoni", amount: 10, fill: "hsl(var(--chart-1))" },
  { product: "Mussarela", amount: 19, fill: "hsl(var(--chart-2))" },
  { product: "Calabresa", amount: 25, fill: "hsl(var(--chart-3))" },
  { product: "Frango com catupiry", amount: 14, fill: "hsl(var(--chart-4))" },
  { product: "Brocolis com bacon", amount: 2, fill: "hsl(var(--chart-5))" },
]

const chartConfig = {
  product: {
    label: "Produtos",
  }
} satisfies ChartConfig

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Produtos populares</CardTitle>
            <CardDescription>Numero de produtos pedidos no periodo</CardDescription>
          </div>
          <BarChart className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[248px]">
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="amount"
              nameKey="product"
              innerRadius={64}
              stroke=""
              strokeWidth={0}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}