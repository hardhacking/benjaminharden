// import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const { emailContent } = req.body;

  try {
    const data = await sendEmail(emailContent);
    // Perform any additional actions after sending the email
    res.status(200).json({ success: true, data });
  } catch (error) {
    // Handle error if sending the email fails
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Email sending failed' });
  }
}

async function sendEmail(emailContent) {
  console.log('sending');
  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'ben9harden9@gmail.com',
      subject: 'Hello World',
      html: emailContent,
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
}