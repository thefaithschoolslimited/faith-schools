import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TO = "thefaithschoollimited@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const schema = z.object({
  parent: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().max(40).optional().default(""),
  child: z.string().trim().min(1).max(120),
  klass: z.string().trim().min(1).max(40),
  dob: z.string().trim().max(20).optional().default(""),
  message: z.string().trim().max(3000).optional().default(""),
});

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
const header = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);
const clean = (v: string) => v.replace(/[\r\n]+/g, " ");

export const submitApplication = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => schema.parse(d))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const gmailKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!lovableKey || !gmailKey) throw new Error("Email is not configured");

    const body = [
      "New admission application received from the website.",
      "",
      `Parent / Guardian: ${data.parent}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Child's name: ${data.child}`,
      `Class applying for: ${data.klass}`,
      `Date of birth: ${data.dob || "-"}`,
      "",
      "Message:",
      data.message || "-",
    ].join("\r\n");

    const raw = [
      `To: ${TO}`,
      `Reply-To: ${clean(data.email)}`,
      `Subject: ${header(clean(`New application: ${data.child} (${data.klass})`))}`,
      "MIME-Version: 1.0",
      'Content-Type: text/plain; charset="UTF-8"',
      "",
      body,
    ].join("\r\n");

    const res = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": gmailKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: b64(raw).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "") }),
    });
    if (!res.ok) {
      const t = await res.text();
      console.error(`Gmail send failed [${res.status}]: ${t}`);
      throw new Error(`Could not send application [${res.status}]`);
    }
    return { ok: true };
  });
