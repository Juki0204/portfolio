import { NextResponse, type NextRequest } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    pool: true,
    host: 'smtp.gmail.com',
    port: 456,
    secure: true,
    tls: {
      servername: 'smtp.gmail.com',
      rejectUnauthorized: false
    },
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.NODEMAILER_EMAIL,
    to: process.env.NODEMAILER_EMAIL,
    subject: `お問い合わせ：${name} 様よりお問い合わせがありました。`,
    text: `${message} Send from ${email}`,
    html: `
    <p>【お名前】</p>
    <p>${name}</p>
    <p>【メールアドレス】</p>
    <p>${email}</p>
    <p>【お問い合わせ内容】</p>
    <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("success");
    return NextResponse.json({ message: "Success!", status: 200 });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failed!", status: 500 });
  }
}