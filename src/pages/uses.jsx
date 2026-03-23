import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Benjamin Harden</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, and make my life easier. Here are just few:"
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title='14" MacBook Pro, M4 Pro, 48GB RAM'>
              The best computer for developing in a hybrid or work from home environment. If you disagree with me let me know and I will be more than happy to tell you why you are wrong.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio Code">
              Their may be many language specific IDEs out their with amazing features. I am more than willing to use them when appropriate. But for a fullstack developer flexibility is the most important thing and for that Visual Studio Code takes the cake.
            </Tool>
            <Tool title="Supabase">
              Hands down the best product since sliced bread. Whether you are a seasoned veteran or still coding on your mom's computer, use supabase for your database needs and you will be a more productive developer.
            </Tool>
            <Tool title="Claude Code">
              An agentic coding tool that lives in the terminal. Perfect for tackling complex, multi-step tasks across your codebase with natural language.
            </Tool>
            <Tool title="GitHub Copilot">
              AI pair programming right in your editor. It autocompletes code, answers questions, and helps you ship faster without breaking your flow.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Great software for design and prototyping. 
              I Cannot tell you how many deals have been closed and bosses impressed by a quick 
              figma prototype with a sharable link. Don't under estimate it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="TickTick">
              My go-to for personal task management and small projects. Clean interface, natural language input, and built-in calendar and habit tracking make it perfect for staying on top of everything.
            </Tool>
            <Tool title="Linear">
              For team projects Linear is unmatched. Fast, beautifully designed, and opinionated in all the right ways. Cycles, roadmaps, and triage workflows keep the whole team moving.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
