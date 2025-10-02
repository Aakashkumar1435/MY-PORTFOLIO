// src/app/api/contact/route.ts
import nodemailer from "nodemailer";

export const runtime = "nodejs"; // nodemailer needs Node runtime

type Body = {
  name?: string;
  email?: string;
  message?: string;
  // Honeypot (should remain empty)
  company?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    // Simple anti-spam: if honeypot is filled, pretend success
    if (body.company && body.company.trim().length > 0) {
      return Response.json({ ok: true });
    }

    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const message = (body.message || "").trim();

    if (!name || !email || !message) {
      return Response.json({ ok: false, error: "Missing required fields." }, { status: 400 });
    }

    // Gmail SMTP via App Password
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // your Gmail
        pass: process.env.SMTP_PASS, // 16-char app password
      },
    });

    // Where to receive the message
    const to = process.env.TO_EMAIL ?? "aakashus01@gmail.com";

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email, // so you can reply to the sender directly
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `
        <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;line-height:1.6">
          <p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error("CONTACT_ROUTE_ERROR", err);
    return Response.json({ ok: false, error: "Failed to send message." }, { status: 500 });
  }
}

// Tiny helper to avoid breaking HTML
function escapeHtml(input: string) {
  return input.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
