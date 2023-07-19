import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon, target }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target={target}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-emerald-500 dark:text-zinc-200 dark:hover:text-emerald-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-emerald-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Benjamin Harden</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Benjamin Harden. <br/>
              Living in Salt Lake City. <br/>
              Loving to code!
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have always considered myself the creative type. As a kid I constantly felt the desire to create new things.
                Before I discovered programming I felt like an artist without a canvas. Now I feel like I can build anthing.
              </p>
              <p>
                These days, as a Software Engineer with a degree in Computer Science, my love for innovation continues to thrive. 
                I relish the opportunity to work with cutting-edge products and witness the unfolding of groundbreaking advancements. 
                Beyond the world of technology, I find solace in rock climbing, where the thrill of conquering challenges fuels my spirit. 
                As a co-founder of a new tech startup called phantomb, I bring my expertise and experience to drive our venture forward.
              </p>
              <p>
                I am incredibly grateful to be living in such a unique era, where technological advancements and transformative ideas are shaping the world at an unprecedented pace.
                It's a time of boundless possibilities, where innovation knows no bounds. 
                I am excoted to witness and participate in this remarkable period.
                I am determined to leave my mark. I am driven to contribute my skills, knowledge, and passion to make a lasting impact on society, pushing the boundaries of what is possible and leaving a positive legacy for future generations.
              </p>
              <p>
                Although I have worked on many exciting projects already.
                I firmly believe the best days are still ahead. If you have an idea that you think will change the world <b>Let me know</b>.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink 
                href="https://twitter.com/hardhacking"
                target="_blank"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
              >Follow on Twitter</SocialLink>

              <SocialLink
                href="https://www.instagram.com/benjaminhrden/"
                target="_blank"
                aria-label="Follow on Instagram"
                icon={InstagramIcon}
                className="mt-4"
                >Follow on Instagram</SocialLink>

              <SocialLink
                href="https://www.instagram.com/benjaminhrden/"
                target="_blank"
                aria-label="Follow on Instagram"
                icon={GitHubIcon}
                className="mt-4"
                >Follow on Github</SocialLink>

              <SocialLink
                href="https://www.instagram.com/benjaminhrden/"
                target="_blank"
                aria-label="Follow on Instagram"
                icon={LinkedInIcon}
                className="mt-4"
                >Follow on Linkedin</SocialLink>
                
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                benjaminharden0@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
