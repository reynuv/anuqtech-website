import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Resend integration — set RESEND_API_KEY in Vercel env vars
    const resendKey = process.env.RESEND_API_KEY;
    if (!resendKey) {
      // Dev fallback: just log and succeed
      console.log("Contact form submission:", { name, email, subject, message });
      return NextResponse.json({ ok: true });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "AnuQ Website <noreply@anuqtech.com>",
        to: ["hello@anuqtech.com"],
        reply_to: email,
        subject: `[AnuQ Website] ${subject || "New enquiry"} — from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      throw new Error("Resend API error");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
