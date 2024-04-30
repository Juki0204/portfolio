import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { env } from "process";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: env.NODEMAILER_EMAIL,
    to: env.NODEMAILER_EMAIL,
    subject: `お問い合わせフォーム：${name} 様よりお問い合わせがありました。`,
    text: `
    【お名前】
    ${name}
    【メールアドレス】
    ${email}
    【お問い合わせ内容】
    ${message}
    `,
  };

  try {
    await transport.sendMail(mailOptions);
    return NextResponse.json({ message: "SUCCESS", status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "FAILED", status: 500 });
  }
}