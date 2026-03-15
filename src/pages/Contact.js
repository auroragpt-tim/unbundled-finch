import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (e) => {
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
            }
            else {
                toast.error("Failed to send message. Please try again.");
            }
        }
        catch (error) {
            toast.error("An error occurred. Please try again later.");
        }
        finally {
            setIsSubmitting(false);
        }
    };
    return (_jsxs("div", { className: "flex flex-col", children: [_jsx("section", { className: "bg-secondary/30 py-20 border-b border-border", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight mb-6", children: "CONTACT" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl font-light", children: "Get in touch with our team." })] }) }), _jsx("section", { className: "container py-20", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-16", children: [_jsx("div", { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-bold uppercase", children: "First Name" }), _jsx(Input, { name: "firstName", required: true, className: "rounded-none border-border bg-background", placeholder: "Jane" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-bold uppercase", children: "Last Name" }), _jsx(Input, { name: "lastName", required: true, className: "rounded-none border-border bg-background", placeholder: "Doe" })] })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-bold uppercase", children: "Email" }), _jsx(Input, { name: "email", type: "email", required: true, className: "rounded-none border-border bg-background", placeholder: "jane@example.com" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "text-sm font-bold uppercase", children: "Message" }), _jsx(Textarea, { name: "message", required: true, className: "rounded-none border-border bg-background min-h-[150px]", placeholder: "How can we help you?" })] }), _jsx(Button, { type: "submit", size: "lg", disabled: isSubmitting, className: "w-full rounded-none uppercase font-bold tracking-wider", children: isSubmitting ? "Sending..." : "Send Message" })] }) }), _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold uppercase mb-2", children: "Email" }), _jsx("p", { className: "text-muted-foreground", children: "Vanguard@unbundledfinch.com" })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold uppercase mb-2", children: "Office" }), _jsxs("p", { className: "text-muted-foreground", children: ["123 Legal Ave, Suite 400", _jsx("br", {}), "New York, NY 10001"] })] })] })] }) })] }));
}
