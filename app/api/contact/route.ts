import { NextRequest, NextResponse } from "next/server";
import Mailjet from "node-mailjet";

const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY!,
  apiSecret: process.env.MAILJET_SECRET_KEY!,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, company, phone, email, from, to, cargo, deadline, message } =
      body;

    if (!name || !phone || !from || !to) {
      return NextResponse.json(
        { error: "Nedostaju obavezna polja." },
        { status: 400 }
      );
    }

    const htmlBody = `
      <h2>Novi upit za transport – Biznis Cargo</h2>
      <table cellpadding="6" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="font-weight:bold;width:160px;">Ime i prezime</td><td>${name}</td></tr>
        ${company ? `<tr><td style="font-weight:bold;">Firma</td><td>${company}</td></tr>` : ""}
        <tr><td style="font-weight:bold;">Telefon</td><td>${phone}</td></tr>
        ${email ? `<tr><td style="font-weight:bold;">E-mail</td><td>${email}</td></tr>` : ""}
        <tr><td style="font-weight:bold;">Polazište</td><td>${from}</td></tr>
        <tr><td style="font-weight:bold;">Odredište</td><td>${to}</td></tr>
        ${cargo ? `<tr><td style="font-weight:bold;">Vrsta robe</td><td>${cargo}</td></tr>` : ""}
        ${deadline ? `<tr><td style="font-weight:bold;">Željeni rok</td><td>${deadline}</td></tr>` : ""}
        ${message ? `<tr><td style="font-weight:bold;">Napomena</td><td>${message}</td></tr>` : ""}
      </table>
    `;

    await mailjet.post("send", { version: "v3.1" }).request({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER!,
            Name: "Biznis Cargo – Upit",
          },
          To: [
            {
              Email: process.env.SITE_MAIL_RECEIVER!,
              Name: "Biznis Cargo",
            },
          ],
          Subject: `Novi upit: ${from} → ${to} | ${name}`,
          HTMLPart: htmlBody,
          TextPart: `Upit od: ${name}\nTelefon: ${phone}\nPolazište: ${from}\nOdredište: ${to}`,
        },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mailjet greška:", err);
    return NextResponse.json(
      { error: "Greška pri slanju. Pokušajte ponovo." },
      { status: 500 }
    );
  }
}
