import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
export default function Services() {
    const services = [
        {
            id: "01",
            title: "Document Formatting",
            description: "Standardizing fonts, margins, and styles to meet court or corporate requirements. We ensure every page looks professional and consistent.",
            price: "From $50/doc"
        },
        {
            id: "02",
            title: "Redaction Services",
            description: "Secure removal of sensitive information from legal documents. We use industry-standard tools to ensure redacted data is permanently unrecoverable.",
            price: "From $0.50/page"
        },
        {
            id: "03",
            title: "PDF Conversion & OCR",
            description: "Converting physical documents to searchable digital formats. Optical Character Recognition (OCR) ensures your files are text-searchable.",
            price: "From $0.10/page"
        },
        {
            id: "04",
            title: "Bates Stamping",
            description: "Sequential numbering for legal exhibits and discovery documents. Customizable prefixes and positioning.",
            price: "Flat fee + volume"
        },
        {
            id: "05",
            title: "Table of Authorities",
            description: "Generating accurate tables of authorities for briefs and motions. We verify citations and ensure proper formatting.",
            price: "Custom Quote"
        },
        {
            id: "06",
            title: "Proofreading",
            description: "Technical proofreading for spelling, grammar, and punctuation errors. We do not provide legal advice or substantive editing.",
            price: "$60/hour"
        }
    ];
    return (_jsxs("div", { className: "flex flex-col", children: [_jsx("section", { className: "bg-secondary/30 py-20 border-b border-border", children: _jsxs("div", { className: "container", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold tracking-tight mb-6", children: "SERVICES" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-2xl font-light", children: "Modular document solutions designed for efficiency. Select only what you need." })] }) }), _jsx("section", { className: "container py-20", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16", children: services.map((service) => (_jsxs("div", { className: "group", children: [_jsxs("div", { className: "text-xs font-mono text-muted-foreground mb-4 border-b border-border pb-2 flex justify-between", children: [_jsxs("span", { children: ["REF. ", service.id] }), _jsx("span", { children: service.price })] }), _jsx("h3", { className: "text-2xl font-bold uppercase mb-4 group-hover:text-primary transition-colors", children: service.title }), _jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: service.description }), _jsx(Link, { href: "/portal", children: _jsx(Button, { variant: "outline", className: "rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full uppercase font-bold text-xs tracking-wider", children: "Request Service" }) })] }, service.id))) }) }), _jsx("section", { className: "border-t border-border", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2", children: [_jsxs("div", { className: "p-12 md:p-20 bg-primary text-primary-foreground", children: [_jsx("h2", { className: "text-3xl font-bold uppercase mb-6", children: "Custom Projects" }), _jsx("p", { className: "text-lg opacity-90 mb-8 leading-relaxed", children: "Have a complex requirement that doesn't fit into a standard category? We offer bespoke document processing solutions for large-scale litigation or corporate needs." }), _jsx(Link, { href: "/contact", children: _jsx(Button, { variant: "secondary", className: "rounded-none uppercase font-bold tracking-wider", children: "Contact Us" }) })] }), _jsx("div", { className: "relative h-64 md:h-auto bg-secondary/20", children: _jsx("img", { src: "/images/architecture-detail.jpg", alt: "Structure Detail", className: "absolute inset-0 w-full h-full object-cover grayscale" }) })] }) })] }));
}
