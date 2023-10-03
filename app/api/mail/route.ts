import { NextResponse } from "next/server";
var nodemailer = require("nodemailer");

export async function POST(request: Request) {
  const res = await request.json();
  if (request.body) {
    await sendMail(res.name, res.email, res.message);
  }
  return NextResponse.json({ message: "Success" });
}

//-----------------------------------------------------------------------------
export async function sendMail(
  subject: string,
  fromEmail: string,
  otpText: string
) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  var mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "naoltamrat36@gmail.com",
    subject: subject,
    text: otpText + " " + fromEmail,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}
