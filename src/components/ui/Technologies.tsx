import { ReactElement } from 'react'
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

interface TechnologiesProps {
  id: string
  name: string
  icon: ReactElement
}

const tech: TechnologiesProps[] = [
  { id: '1', name: 'HTML', icon: <SiHtml5 /> },
  { id: '2', name: 'CSS', icon: <SiCss3 /> },
  { id: '3', name: 'JavaScript', icon: <SiJavascript /> },
  { id: '4', name: 'ReactJS', icon: <SiReact /> },
  { id: '5', name: 'NextJS', icon: <SiNextdotjs /> },
  { id: '8', name: 'TailwindCSS', icon: <SiTailwindcss /> },
  { id: '6', name: 'Webpack', icon: <SiWebpack /> },
  { id: '7', name: 'Vite', icon: <SiVite /> },
]

export default function Technologies() {
  return (
    <TechnologiesStyles>
      {tech.map((tech) => (
        <TechCard key={tech.id}>
          {tech.icon}
          <small>{tech.name}</small>
        </TechCard>
      ))}
    </TechnologiesStyles>
  )
}

const TechnologiesStyles = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  row-gap: 0.75rem;
  column-gap: 0.5rem;
`
const TechCard = styled.div`
  transform: translate3d(0px, 0px, 0px);
  transform-style: preserve-3d;

  display: flex;
  padding: 0.375rem 1.5rem 0.375rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: var(--card-fg-color-light);
  border-radius: 1e5px;
  transition: var(--animation-default);

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
