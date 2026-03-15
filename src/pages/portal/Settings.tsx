import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-3xl font-bold uppercase tracking-tight">Settings</h1>

      <Card className="rounded-none border-border shadow-none">
        <CardHeader className="border-b border-border bg-secondary/10">
          <CardTitle className="uppercase tracking-wide text-base">Profile Information</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">First Name</label>
              <Input defaultValue="Jane" className="rounded-none border-border bg-background" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold uppercase">Last Name</label>
              <Input defaultValue="Doe" className="rounded-none border-border bg-background" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold uppercase">Email Address</label>
            <Input defaultValue="jane.doe@example.com" className="rounded-none border-border bg-background" />
          </div>
          <Button className="rounded-none uppercase font-bold tracking-wider">Save Changes</Button>
        </CardContent>
      </Card>

      <Card className="rounded-none border-border shadow-none">
        <CardHeader className="border-b border-border bg-secondary/10">
          <CardTitle className="uppercase tracking-wide text-base">Notifications</CardTitle>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-bold uppercase">Email Notifications</label>
              <p className="text-xs text-muted-foreground">Receive updates about your requests via email.</p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label className="text-sm font-bold uppercase">Marketing Updates</label>
              <p className="text-xs text-muted-foreground">Receive news about new services and features.</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-none border-border shadow-none border-red-200">
        <CardHeader className="border-b border-red-200 bg-red-50">
          <CardTitle className="uppercase tracking-wide text-base text-red-800">Danger Zone</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <p className="text-sm text-muted-foreground mb-4">
            Once you delete your account, there is no going back. Please be certain.
          </p>
          <Button variant="destructive" className="rounded-none uppercase font-bold tracking-wider">Delete Account</Button>
        </CardContent>
      </Card>
    </div>
  );
}
