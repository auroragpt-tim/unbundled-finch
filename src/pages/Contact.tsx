import { useState } from "react";
import { toast } from "sonner";

export default function Contact(){
  const [sending,setSending]=useState(false);
  const submit=async (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const form=event.currentTarget;
    setSending(true);
    try{
      const response=await fetch("https://formspree.io/f/meeeqkyp",{method:"POST",body:new FormData(form),headers:{Accept:"application/json"}});
      if(!response.ok) throw new Error("Submission failed");
      toast.success("Your message was sent.");
      form.reset();
    }catch{
      toast.error("The form could not send. Please try again or contact us by email.");
    }finally{setSending(false);}
  };
  return <div className="uf-site">
    <section className="uf-page-intro"><div className="uf-shell">
      <p className="uf-eyebrow">05 / Contact</p><h1>Tell us what<br/><em>you need organized.</em></h1>
      <p className="uf-lede">Share a brief description of the technical work. We'll discuss scope and next steps before requesting project files.</p>
    </div></section>
    <section className="uf-section"><div className="uf-shell uf-contact-grid">
      <div><p className="uf-eyebrow">Start an inquiry</p>
        <form className="uf-form" onSubmit={submit}>
          <div className="uf-form-two"><div><label htmlFor="uf-first">First name</label><input id="uf-first" name="firstName" autoComplete="given-name" required /></div>
          <div><label htmlFor="uf-last">Last name</label><input id="uf-last" name="lastName" autoComplete="family-name" required /></div></div>
          <label htmlFor="uf-email">Email address</label><input id="uf-email" name="email" type="email" autoComplete="email" required />
          <label htmlFor="uf-project">What kind of technical production do you need?</label><textarea id="uf-project" name="message" rows={6} required placeholder="For example: eBinder assembly, internal hyperlinks, OCR, or a Table of Authorities." />
          <p className="uf-small-note">Please don't include confidential case details or upload sensitive documents in this initial inquiry.</p>
          <button className="uf-button uf-button-dark" type="submit" disabled={sending}>{sending?"Sending…":"Send inquiry"} <span aria-hidden="true">↗</span></button>
        </form>
      </div>
      <aside className="uf-contact-aside"><p className="uf-eyebrow">Get in touch</p>
        <h2>Clarity starts<br/>with a conversation.</h2>
        <p>For technical document projects, questions about scope, or production requirements, reach out through the form or email.</p>
        <a className="uf-text-link" href="mailto:atticus@unbundledfinch.com">atticus@unbundledfinch.com <span aria-hidden="true">↗</span></a>
        <div className="uf-aside-rule"/><p className="uf-small-note">Unbundled Finch provides technical document production only—not legal advice or representation.</p>
      </aside>
    </div></section>
  </div>;
}
