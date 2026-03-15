import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Documents() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold uppercase tracking-tight">Documents</h1>
        <Button className="rounded-none uppercase font-bold tracking-wider">Upload New</Button>
      </div>



      <Card className="rounded-none border-border shadow-none">
        <CardHeader>
          <CardTitle className="uppercase tracking-wide">File Repository</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-secondary/30 border-b border-border">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Type</th>
                  <th className="px-6 py-3">Size</th>
                  <th className="px-6 py-3">Date Uploaded</th>
                  <th className="px-6 py-3">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-medium">Smith_Motion_FINAL.pdf</td>
                  <td className="px-6 py-4">PDF</td>
                  <td className="px-6 py-4 font-mono">2.4 MB</td>
                  <td className="px-6 py-4 font-mono">2024-01-12</td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">Download</Button></td>
                </tr>
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-medium">Discovery_Batch_01.zip</td>
                  <td className="px-6 py-4">ZIP</td>
                  <td className="px-6 py-4 font-mono">145.2 MB</td>
                  <td className="px-6 py-4 font-mono">2024-01-10</td>
                  <td className="px-6 py-4"><Button variant="link" className="p-0 h-auto text-primary">Download</Button></td>
                </tr>
                <tr className="bg-background hover:bg-secondary/10">
                  <td className="px-6 py-4 font-medium">Exhibit_A_Redacted.pdf</td>
                  <td className="px-6 py-4">PDF</td>
                  <td className="px-6 py-4 font-mono">4.1 MB</td>
                  <td className="px-6 py-4 font-mono">2024-01-05</td>
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
