"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface ContactDialogProps {
  open: boolean;
  prefillEmail?: string;
  onClose: () => void;
}

export default function ContactDialog({ open, prefillEmail, onClose }: ContactDialogProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(prefillEmail || "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("Usually responds within 24 hours.");

  useEffect(() => {
    if (open && prefillEmail) setEmail(prefillEmail);
  }, [open, prefillEmail]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus("Please complete all fields.");
      return;
    }
    setStatus("Sending…");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "ANU-Q landing page" }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("Thank you. We'll be in touch soon.");
      setName(""); setEmail(""); setMessage("");
      setTimeout(() => onClose(), 1300);
    } catch {
      const subject = encodeURIComponent(`Website enquiry from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nWhat's not working:\n${message}\n\nSent from anuqtech.com`);
      window.location.href = `mailto:hello@anuqtech.com?subject=${subject}&body=${body}`;
    }
  }

  if (!open) return null;

  return (
    <div className="contact-dialog-backdrop" onClick={onClose}>
      <div className="contact-dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-card">
          <button className="dialog-close" onClick={onClose} aria-label="Close">×</button>
          <Image className="dialog-logo" src="/logo-icon.webp" alt="" width={62} height={62} />
          <p className="eyebrow">START WITH THE PROBLEM</p>
          <h2>What would you like to make simpler?</h2>
          <p>Leave a few details. We&#39;ll take it from there.</p>

          <form onSubmit={handleSubmit}>
            <label>
              Name
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </label>
            <label>
              Email
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
            <label>
              What&#39;s not working?
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </label>
            <button className="btn btn-primary dialog-submit" type="submit">
              Send enquiry →
            </button>
          </form>
          <small id="dialog-status">{status}</small>
        </div>
      </div>
    </div>
  );
}
