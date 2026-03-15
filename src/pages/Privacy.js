import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Streamdown } from 'streamdown';
const privacyContent = `
# Privacy Policy

**Last Updated:** January 12, 2026

Unbundled Finch ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our document processing services.

## 1. Information We Collect

We may collect information about you in a variety of ways. The information we may collect on the Site includes:

### Personal Data
Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.

### Derivative Data
Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.

## 2. Use of Your Information

Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:

*   Create and manage your account.
*   Process your document requests and deliver services.
*   Email you regarding your account or order.
*   Fulfill and manage purchases, orders, payments, and other transactions related to the Site.
*   Generate a personal profile about you to make future visits to the Site more personalized.
*   Increase the efficiency and operation of the Site.
*   Monitor and analyze usage and trends to improve your experience with the Site.
*   Notify you of updates to the Site.
*   Offer new products, services, and/or recommendations to you.

## 3. Disclosure of Your Information

We may share information we have collected about you in certain situations. Your information may be disclosed as follows:

### By Law or to Protect Rights
If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.

### Third-Party Service Providers
We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.

## 4. Security of Your Information

We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.

## 5. Contact Us

If you have questions or comments about this Privacy Policy, please contact us at:

**Unbundled Finch**  
Email: Vanguard@unbundledfinch.com
`;
export default function Privacy() {
    return (_jsxs("div", { className: "flex flex-col", children: [_jsx("section", { className: "bg-secondary/30 py-20 border-b border-border", children: _jsx("div", { className: "container", children: _jsx("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight mb-6", children: "PRIVACY POLICY" }) }) }), _jsx("section", { className: "container py-20 max-w-4xl mx-auto", children: _jsx("div", { className: "prose prose-neutral dark:prose-invert max-w-none", children: _jsx(Streamdown, { children: privacyContent }) }) })] }));
}
