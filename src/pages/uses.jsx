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
            <Tool title="16” MacBook Pro, M1 Max, 64GB RAM (2022s)">
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
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              Great software for design and prototyping. 
              I Cannot tell you how many deals have been closed and bosses impressed by a quick 
              figma prototype with a sharable link. Don't under estimate it.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Trello">
              For small or personal projects I find this is the best place to keep track of my work.
              I would highly recommend this to any indie developer and even to some startups.
              The fact that it is free and even has an integration with unsplash are just icing on the cake.
            </Tool>
            <Tool title="Jira">
              For large projects and teams I love Jira, the sprint creation features are life changing. Jira analytics are also vital to keeping a healthy development cycle.
              It can feel a little tedious when you first start using it but the results are worth it.
            </Tool>
          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
