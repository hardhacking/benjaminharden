import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

// import { EmailTemplate } from "../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend('re_65Zp6L5p_F349U5UMkHnUopw6Job8bh4X');

async function sendEmail() {
    console.log('sending');
  try {
    const data = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'ben9harden9@gmail.com',
        subject: 'Hello World',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
    //   from: "Acme <onboarding@resend.dev>",
    //   to: ["delivered@resend.dev"],
    //   subject: "Hello world",
    //   react: EmailTemplate({ firstName: "John" }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Benjamin Harden</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="Thanks for subscribing."
        intro="I’ll send you an email any time I publish a new blog post, release a new project, or have anything interesting to share that I think you’d want to hear about. You can unsubscribe at any time, no hard feelings."
      />
    </>
  )
}
