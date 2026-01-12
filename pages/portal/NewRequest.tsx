import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Upload, CheckCircle2, AlertCircle } from "lucide-react";

export default function NewRequest() {
  const { user } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add user email if not present
    if (user?.email && !formData.get("requester-email")) {
      formData.append("requester-email", user.email);
    }

    try {
      const response = await fetch("https://formspree.io/f/meeeqkyp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset();
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to submit form. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="max-w-3xl mx-auto">
        <Card className="border-border shadow-sm">
          <CardContent className="pt-6 text-center py-16">
            <div className="flex justify-center mb-6">
              <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">Request Submitted Successfully</h2>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Your work order has been received. We will review the details and get back to you shortly at {user?.email}.
            </p>
            <Button onClick={() => setIsSuccess(false)} variant="outline">
              Submit Another Request
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">New Work Order</h1>
        <p className="text-muted-foreground">Submit a new document processing request.</p>
      </div>

      <Card className="border-border shadow-sm">
        <CardHeader className="border-b border-border bg-secondary/5">
          <CardTitle className="text-lg font-medium">Project Details</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Project Information */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Project Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="project-name">Project Name</Label>
                  <Input id="project-name" name="project-name" placeholder="Enter project name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-number">Project Number</Label>
                  <Input id="project-number" name="project-number" placeholder="Enter project number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="client-name">Client/Customer Name</Label>
                  <Input id="client-name" name="client-name" placeholder="Enter client name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-phone">Contact Phone Number</Label>
                  <Input id="contact-phone" name="contact-phone" placeholder="Enter phone number" required />
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Change Order Details */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="change-order-number">Order Number (if applicable)</Label>
                  <Input id="change-order-number" name="change-order-number" placeholder="Enter order number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date-of-request">Date of Request</Label>
                  <Input id="date-of-request" name="date-of-request" type="date" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requested-by">Requested By</Label>
                  <Input id="requested-by" name="requested-by" defaultValue={user?.user_metadata?.full_name} placeholder="Enter requester name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requester-email">Requester Email</Label>
                  <Input id="requester-email" name="requester-email" type="email" defaultValue={user?.email} placeholder="Enter email" required />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="change-description">Description of Request</Label>
                  <Textarea 
                    id="change-description" 
                    name="change-description" 
                    placeholder="Provide details about the requested change" 
                    className="min-h-[100px]"
                    required 
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="reason-for-change">Reason for Change</Label>
                  <Textarea 
                    id="reason-for-change" 
                    name="reason-for-change" 
                    placeholder="e.g., 'Client request', 'Budget adjustments', etc." 
                    className="min-h-[80px]"
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* File Upload Section */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Attachments</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:bg-secondary/5 transition-colors cursor-pointer relative">
                <input 
                  type="file" 
                  name="attachment" 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  multiple
                />
                <div className="flex flex-col items-center gap-2">
                  <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center">
                    <Upload className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="text-sm font-medium">Click to upload or drag and drop</div>
                  <p className="text-xs text-muted-foreground">PDF, DOCX, JPG up to 10MB</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Cost and Schedule (Optional) */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Cost and Schedule Impact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="additional-cost">Estimated Additional Cost</Label>
                  <Input id="additional-cost" name="additional-cost" placeholder="Enter estimated additional cost" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="adjusted-total-cost">Adjusted Total Cost</Label>
                  <Input id="adjusted-total-cost" name="adjusted-total-cost" placeholder="Enter adjusted total cost" />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="schedule-impact">Impact on Schedule</Label>
                  <Textarea 
                    id="schedule-impact" 
                    name="schedule-impact" 
                    placeholder="Describe the schedule impact, if any" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="new-completion-date">New Completion Date</Label>
                  <Input id="new-completion-date" name="new-completion-date" type="date" />
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Approval and Acknowledgment */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Approval and Acknowledgment</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="approval-by">Approval By (Name)</Label>
                  <Input id="approval-by" name="approval-by" placeholder="Enter approver name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="approval-date">Approval Due Date</Label>
                  <Input id="approval-date" name="approval-date" type="date" required />
                </div>
                <div className="col-span-full space-y-2">
                  <Label htmlFor="comments-notes">Comments/Notes</Label>
                  <Textarea 
                    id="comments-notes" 
                    name="comments-notes" 
                    placeholder="Add any additional remarks (optional)" 
                  />
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Terms */}
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Checkbox id="acknowledge-terms" name="acknowledge-terms" required />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="acknowledge-terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Acknowledgment of Terms
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    I understand and agree to the changes outlined above.
                  </p>
                </div>
              </div>
            </div>

            {error && (
              <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                {error}
              </div>
            )}

            <div className="flex justify-end pt-4">
              <Button type="submit" size="lg" className="w-full md:w-auto" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Work Order"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
