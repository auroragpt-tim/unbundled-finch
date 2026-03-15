import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/meeeqkyp", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        form.reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">CONTACT</h1>
          <p className="text-xl text-muted-foreground max-w-2xl font-light">
            Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">First Name</label>
                  <Input name="firstName" required className="rounded-none border-border bg-background" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase">Last Name</label>
                  <Input name="lastName" required className="rounded-none border-border bg-background" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Email</label>
                <Input name="email" type="email" required className="rounded-none border-border bg-background" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase">Message</label>
                <Textarea name="message" required className="rounded-none border-border bg-background min-h-[150px]" placeholder="How can we help you?" />
              </div>

              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-none uppercase font-bold tracking-wider">
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Email</h3>
              <p className="text-muted-foreground">Vanguard@unbundledfinch.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold uppercase mb-2">Office</h3>
              <p className="text-muted-foreground">
                123 Legal Ave, Suite 400<br/>
                New York, NY 10001
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
