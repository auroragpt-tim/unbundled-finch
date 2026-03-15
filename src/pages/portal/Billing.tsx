import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Billing() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-tight">Billing</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="rounded-none border-border shadow-none bg-primary text-primary-foreground">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium opacity-80 uppercase">Current Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$150.00</div>
            <div className="text-xs opacity-80 mt-2">Due Feb 01, 2024</div>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Last Payment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$300.00</div>
            <div className="text-xs text-muted-foreground mt-2 font-mono">Jan 05, 2024</div>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-none flex items-center justify-center p-6">
          <Button className="w-full h-full rounded-none uppercase font-bold tracking-wider text-lg">Pay Now</Button>
        </Card>
      </div>

      <Card className="rounded-none border-border shadow-none">
        <CardHeader>
          <CardTitle className="uppercase tracking-wide">Invoice History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                <tr>
                  <th className="px-6 py-3">Invoice #</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Amount</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-mono">INV-2024-002</td>
                  <td className="px-6 py-4 font-mono">2024-01-15</td>
                  <td className="px-6 py-4 font-mono">$150.00</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-none uppercase">Unpaid</span></td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">Download</Button></td>
                </tr>
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-mono">INV-2024-001</td>
                  <td className="px-6 py-4 font-mono">2024-01-01</td>
                  <td className="px-6 py-4 font-mono">$300.00</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-none uppercase">Paid</span></td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">Download</Button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
