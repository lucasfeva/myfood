import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianGrid } from "recharts"
import { violet } from "tailwindcss/colors"

const data = [
  { date: '10/12', revenue: 1320 },
  { date: '11/12', revenue: 1020 },
  { date: '12/12', revenue: 1260 },
  { date: '13/12', revenue: 1470 },
  { date: '14/12', revenue: 910 },
  { date: '15/12', revenue: 1630 },
  { date: '16/12', revenue: 1510 },
]

export function RevenueCharts() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex flex-row justify-between items-center pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">Receita no periodo</CardTitle>
          <CardDescription>Receita diária no periodo</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={248}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <CartesianGrid vertical={false} className="stroke-muted" />
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
              dy={16}
            />
            <Line type="linear" strokeWidth={2} dataKey="revenue" stroke={violet['500']} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
