import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight">Dashboard</h1>
        <Link href="/portal/new-request">
          <Button className="rounded-none uppercase font-bold tracking-wider">New Request</Button>
        </Link>
      </div>

      {/* Status Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="rounded-none border-border shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Active Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">2</div>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Pending Action</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold text-orange-600">1</div>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">14</div>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border shadow-none">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase">Total Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">$450</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity Table */}
      <Card className="rounded-none border-border shadow-none">
        <CardHeader>
          <CardTitle className="uppercase tracking-wide">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                <tr>
                  <th className="px-6 py-3">ID</th>
                  <th className="px-6 py-3">Service</th>
                  <th className="px-6 py-3">Date</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-mono">REQ-2024-089</td>
                  <td className="px-6 py-4">PDF Conversion & OCR</td>
                  <td className="px-6 py-4 font-mono">2024-01-12</td>
                  <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded-none uppercase">Processing</span></td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">View</Button></td>
                </tr>
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-mono">REQ-2024-088</td>
                  <td className="px-6 py-4">Document Formatting</td>
                  <td className="px-6 py-4 font-mono">2024-01-10</td>
                  <td className="px-6 py-4"><span className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded-none uppercase">Needs Info</span></td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">Respond</Button></td>
                </tr>
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-mono">REQ-2024-085</td>
                  <td className="px-6 py-4">Redaction Services</td>
                  <td className="px-6 py-4 font-mono">2024-01-05</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-none uppercase">Complete</span></td>
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
