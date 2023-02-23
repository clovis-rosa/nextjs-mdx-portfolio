import BlogList from '@/components/BlogList'
import Contact from '@/components/Contact'
import Knowledge from '@/components/Knowledge'
import Projects from '@/components/Projects'

import { styled } from '@linaria/react'

export default function Home() {
  return (
    <>
      <section>
        <article>
          <H1>👋 Hey!</H1>
          <p>My name is Clovis Rosa.</p>
          <p>
            Lorem Ipsum doesn’t exist because people think the content is
            meaningless window dressing, only there to be decorated by designers
            who can’t be bothered to read. Lorem Ipsum exists because words are
            powerful. If you fill up your page with draft copy about your
            client’s business, they will read it. They will comment on it.
          </p>
          <p>
            Here’s my email:{' '}
            <a
              href="mailto:clovis.souzarosa@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              clovis.souzarosa@gmail.com
            </a>
          </p>
          <p>Let&apos;s get in touch.</p>
        </article>
      </section>

      <Knowledge />
      <Projects />
      <BlogList />
      <Contact />
    </>
  )
}

const H1 = styled.h1`
  font-size: 1.5rem;
  color: #fff;
`
