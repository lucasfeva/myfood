import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { rose } from "tailwindcss/colors"

const data = [
  { date: '10/12', revenue: 1320 },
  { date: '11/12', revenue: 1020 },
  { date: '12/12', revenue: 370 },
  { date: '13/12', revenue: 1470 },
  { date: '14/12', revenue: 910 },
  { date: '15/12', revenue: 1630 },
  { date: '16/12', revenue: 1510 },
]

const chartConfig = {
  revenue: {
    label: "Receita",
  },
} satisfies ChartConfig

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader>
        <CardTitle>Receita no periodo</CardTitle>
        <CardDescription>Receita diária no periodo</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[248px] w-full">
          <LineChart accessibilityLayer data={data} margin={{ left: 12, right: 12, }}>
            <CartesianGrid vertical={true} className="stroke-muted" />
            <YAxis 
              stroke="#888" 
              axisLine={false} 
              tickLine={false} 
              width={80}
              tickFormatter={(value: number) => 
                value.toLocaleString('pt-BR', {
                  style: "currency", currency: "BRL"
                }
              )} 
            />
            <XAxis
              dataKey="date" 
              tickLine={false}
              axisLine={false}
              dy={8}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="revenue"
              type="natural"
              stroke={rose['500']}
              strokeWidth={2}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}