import { ReactElement } from 'react'
import Link from 'next/link'
import { styled } from '@linaria/react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiWebpack,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si'

interface SocialsProps {
  id: string
  name: string
  url: string
  logo: ReactElement
}

const socials: SocialsProps[] = [
  { id: '1', name: 'HTML', url: 'http://google.com', logo: <SiHtml5 /> },
  { id: '2', name: 'CSS', url: 'http://google.com', logo: <SiCss3 /> },
  { id: '3', name: 'Java', url: 'http://google.com', logo: <SiJavascript /> },
  { id: '4', name: 'ReactJS', url: 'http://google.com', logo: <SiReact /> },
  { id: '5', name: 'NextJS', url: 'http://google.com', logo: <SiNextdotjs /> },
  {
    id: '6',
    name: 'Tailwind',
    url: 'http://google.com',
    logo: <SiTailwindcss />,
  },
  { id: '7', name: 'Webpack', url: 'http://google.com', logo: <SiWebpack /> },
]

export default function Socials() {
  return (
    <SocialStyles>
      {socials.map(({ id, name, url, logo }) => (
        <Link href={url} key={id}>
          <SocialBtn>
            {logo}
            <small>{name}</small>
          </SocialBtn>
        </Link>
      ))}
    </SocialStyles>
  )
}

const SocialStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 0.75rem;
  column-gap: 0.5rem;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      div {
        transform: translate3d(0px, -2px, 0px);
        border: 1px solid transparent;
        background-color: var(--card-fg-color-light);
      }
    }
  }
`
const SocialBtn = styled.div`
  transform: translate3d(0px, 0px, 0px);
  border: 1px solid rgb(87, 83, 78);
  background-color: transparent;
  transform-style: preserve-3d;
  transition: var(--animation-default);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 1e5px;
  padding: 12px 24px 12px 20px;

  svg {
    width: 1rem;
    height: auto;
    fill: var(--card-text-color-small);
  }

  small {
    font-weight: 500;
    color: var(--card-text-color-small);
    margin: 0;
  }
`
