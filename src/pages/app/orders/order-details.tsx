import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 32jh4hjghjhjg23hj42gh4</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <div className="border rounded-md border-muted">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span className="font-medium text-muted-foreground">Pendente</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Cliente</TableCell>
                <TableCell className="flex justify-end">
                  Lucas Ferreira Silva
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Telefone</TableCell>
                <TableCell className="flex justify-end">
                  +19 99134-6439
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">E-mail</TableCell>
                <TableCell className="flex justify-end">
                  luscas.png@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="text-muted-foreground">Realizado há</TableCell>
                <TableCell className="flex justify-end">
                  3 minutos
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="border rounded-md border-muted">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Produto</TableHead>
                <TableHead className="text-right">Qtd.</TableHead>
                <TableHead className="text-right">Preço</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Pizza calabresa</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">R$ 40,00</TableCell>
                <TableCell className="text-right">R$ 80,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Pizza Mussarela</TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">R$ 45,00</TableCell>
                <TableCell className="text-right">R$ 45,00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Refrigerante Coca-Cola</TableCell>
                <TableCell className="text-right">1</TableCell>
                <TableCell className="text-right">R$ 12,00</TableCell>
                <TableCell className="text-right">R$ 12,00</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total do pedido</TableCell>
                <TableCell className="text-right">R$ 137,00</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </DialogContent>
  )
}
