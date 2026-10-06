"use client";

import { useState } from "react";

interface ContactCTAProps {
  onContact: (email?: string) => void;
}

export default function ContactCTA({ onContact }: ContactCTAProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input[type=email]") as HTMLInputElement;
    if (!input?.checkValidity()) {
      input?.reportValidity();
      return;
    }
    onContact(email.trim());
  }

  return (
    <section className="contact-band" id="contact">
      <div className="contact-waves" aria-hidden="true"></div>
      <div className="container contact-grid reveal">
        <div>
          <p className="eyebrow light">LET&#39;S BUILD WHAT&#39;S NEXT</p>
          <h2>You don&#39;t need the tech answer.<br />Just the problem.</h2>
          <p>Tell us what&#39;s not working and we&#39;ll show you what&#39;s possible.</p>
        </div>
        <div className="lead-wrap">
          <form className="lead-form" id="lead-form" noValidate onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="lead-email">Your work email</label>
            <span className="mail-icon" aria-hidden="true">✉</span>
            <input
              id="lead-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Your work email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <button type="submit">Get in touch <span aria-hidden="true">→</span></button>
          </form>
          <p className="form-note" id="form-note">No obligation. Just a conversation.</p>
        </div>
      </div>
    </section>
  );
}
