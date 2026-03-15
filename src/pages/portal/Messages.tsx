import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Messages() {
  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-8">Messages</h1>

      <Card className="rounded-none border-border shadow-none flex-1 flex flex-col">
        <CardContent className="p-0 flex-1 flex flex-col">
          {/* Message History */}
          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-secondary/5">
            
            {/* Message Item */}
            <div className="flex gap-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xs shrink-0">
                UF
              </div>
              <div className="space-y-1 max-w-[80%]">
                <div className="flex items-baseline gap-2">
                  <span className="font-bold text-sm">Unbundled Finch Support</span>
                  <span className="text-xs text-muted-foreground font-mono">Today, 10:23 AM</span>
                </div>
                <div className="bg-background border border-border p-4 text-sm leading-relaxed">
                  Hello Jane, your request REQ-2024-089 has been received. We will begin processing shortly.
                </div>
              </div>
            </div>

            {/* Message Item (User) */}
            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-xs shrink-0 border border-border">
                JD
              </div>
              <div className="space-y-1 max-w-[80%]">
                <div className="flex items-baseline gap-2 justify-end">
                  <span className="font-bold text-sm">Jane Doe</span>
                  <span className="text-xs text-muted-foreground font-mono">Today, 10:45 AM</span>
                </div>
                <div className="bg-primary text-primary-foreground p-4 text-sm leading-relaxed">
                  Thank you. Please ensure the Bates stamping starts at 001500.
                </div>
              </div>
            </div>

          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background">
            <div className="flex gap-4">
              <Input className="rounded-none border-border bg-background" placeholder="Type a message..." />
              <Button className="rounded-none uppercase font-bold tracking-wider">Send</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
