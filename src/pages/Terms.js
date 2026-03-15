import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Streamdown } from 'streamdown';
const termsContent = `
# Terms of Service

**Last Updated:** January 12, 2026

These Terms of Service ("Terms") govern your access to and use of the Unbundled Finch website and services (collectively, the "Service"). By accessing or using the Service, you agree to be bound by these Terms.

## 1. Acceptance of Terms

By accessing or using our Service, you confirm that you can form a binding contract with Unbundled Finch, that you accept these Terms and that you agree to comply with them. If you do not agree to these Terms, you must not use our Service.

## 2. Changes to Terms

We reserve the right to modify these Terms at any time. We will always post the most current version on our website. By continuing to use the Service after the changes become effective, you agree to be bound by the revised Terms.

## 3. Access and Use of the Service

### User Accounts
To access certain features of the Service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.

### Prohibited Uses
You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
*   In any way that violates any applicable federal, state, local, or international law or regulation.
*   To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
*   To impersonate or attempt to impersonate Unbundled Finch, an Unbundled Finch employee, another user, or any other person or entity.

## 4. Intellectual Property Rights

The Service and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Unbundled Finch, its licensors, or other providers of such material and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

## 5. Limitation of Liability

In no event will Unbundled Finch, its affiliates, or their licensors, service providers, employees, agents, officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in connection with your use, or inability to use, the Service, including any direct, indirect, special, incidental, consequential, or punitive damages.

## 6. Governing Law

All matters relating to the Service and these Terms, and any dispute or claim arising therefrom or related thereto, shall be governed by and construed in accordance with the internal laws of the State of New York without giving effect to any choice or conflict of law provision or rule.

## 7. Contact Information

To ask questions or comment about these Terms of Service, contact us at:

**Unbundled Finch**  
Email: Vanguard@unbundledfinch.com
`;
export default function Terms() {
    return (_jsxs("div", { className: "flex flex-col", children: [_jsx("section", { className: "bg-secondary/30 py-20 border-b border-border", children: _jsx("div", { className: "container", children: _jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight mb-6", children: "TERMS OF SERVICE" }) }) }), _jsx("section", { className: "container py-20 max-w-4xl mx-auto", children: _jsx("div", { className: "prose prose-neutral dark:prose-invert max-w-none", children: _jsx(Streamdown, { children: termsContent }) }) })] }));
}
