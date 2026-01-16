import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export default function NewRequest() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    toast.success("Request Submitted Successfully");
    reset();
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold uppercase tracking-tight mb-8">New Request</h1>

      <Card className="rounded-none border-border shadow-none">
        <CardHeader className="border-b border-border bg-secondary/10">
          <CardTitle className="uppercase tracking-wide text-base">Service Details</CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            <div className="space-y-4">
              <label className="text-sm font-bold uppercase block">Service Type</label>
              <Select onValueChange={(val) => console.log(val)}>
                <SelectTrigger className="rounded-none border-border bg-background w-full">
                  <SelectValue placeholder="Select a service..." />
                </SelectTrigger>
                <SelectContent className="rounded-none border-border">
                  <SelectItem value="formatting">Document Formatting</SelectItem>
                  <SelectItem value="redaction">Redaction Services</SelectItem>
                  <SelectItem value="ocr">PDF Conversion & OCR</SelectItem>
                  <SelectItem value="bates">Bates Stamping</SelectItem>
                  <SelectItem value="toa">Table of Authorities</SelectItem>
                  <SelectItem value="proof">Proofreading</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase block">Project Name / Reference</label>
              <Input {...register("projectName")} className="rounded-none border-border bg-background" placeholder="e.g. Smith v. Jones Motion" />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase block">Instructions</label>
              <Textarea {...register("instructions")} className="rounded-none border-border bg-background min-h-[150px]" placeholder="Please describe your specific requirements..." />
            </div>

            <div className="space-y-4">
              <label className="text-sm font-bold uppercase block">Deadline</label>
              <Input {...register("deadline")} type="date" className="rounded-none border-border bg-background" />
            </div>

            <div className="p-6 bg-secondary/20 border border-border border-dashed">
              <div className="text-center space-y-4">
                <div className="text-sm text-muted-foreground">
                  Drag and drop files here, or click to select files
                </div>
                <Button type="button" variant="outline" className="rounded-none uppercase font-bold text-xs tracking-wider">
                  Select Documents
                </Button>
                <p className="text-xs text-muted-foreground">
                  Supported formats: PDF, DOCX, XLSX (Max 50MB)
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border flex justify-end gap-4">
              <Button type="button" variant="outline" className="rounded-none uppercase font-bold tracking-wider">Cancel</Button>
              <Button type="submit" className="rounded-none uppercase font-bold tracking-wider">Submit Request</Button>
            </div>

          </form>
        </CardContent>
      </Card>
    </div>
  );
}
