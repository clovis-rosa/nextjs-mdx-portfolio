import { styled } from '@linaria/react'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowUpRight } from 'react-icons/hi2'

interface ProjectProp {
  id: string
  name: string
  details: string
  url: string
  image: string
}

const projects: ProjectProp[] = [
  {
    id: '1',
    name: 'ArtMuseum Sao Paulo',
    details: 'HygraphCMS, NextJS, Styled-Components',
    url: 'artmuseum-sao-paulo',
    image: '/assets/chrisbiron.jpg',
  },
  {
    id: '2',
    name: 'Senju Motomachi Souko',
    details: 'PrismicCMS, NextJS, LinariaJS,',
    url: 'senju-motomachi-souko',
    image: '/assets/korty.jpg',
  },
  {
    id: '3',
    name: 'Pangram Pangram',
    details: 'NextJS, TailwindCSS',
    url: 'pangram-pangram',
    image: '/assets/happyplates.jpg',
  },
  {
    id: '4',
    name: 'Milan Vučković',
    details: 'ReactJS, Vite, SCSS',
    url: 'milan-vuckovic',
    image: '/assets/conradstel.jpg',
  },
]

export default function ProjectsCard() {
  return (
    <ProjectCardStyles>
      {projects.map(({ id, name, details, url, image }) => (
        <article key={id}>
          <Link href={url}>
            <ProjectImage>
              <Image src={image} alt={name} width={300} height={200} />
              <span>
                <HiArrowUpRight />
              </span>
            </ProjectImage>
            <ProjectText>
              <h3>{name}</h3>
              <small>{details}</small>
            </ProjectText>
          </Link>
        </article>
      ))}
    </ProjectCardStyles>
  )
}

const ProjectCardStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  article {
    margin: 0;
    border-radius: 0.75rem;

    a {
      width: 100%;
      color: #fff;
      text-decoration: none;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 1rem;
    }

    /* Group hover goes here */
    :hover {
      div {
        img {
          transform: translate3d(0px, 0px, 0px) scale3d(0.99, 0.99, 1)
            skew(-0.2deg);
          filter: brightness(45%);
        }

        span {
          transform: translate3d(0px, 0px, 0px);
          transform-style: preserve-3d;
          visibility: visible;
          opacity: 1;

          svg {
            filter: brightness(75%);
          }
        }
      }

      summary {
        h3 {
          color: rgb(255, 255, 255);
        }
        small {
          color: rgb(255, 255, 255);
        }
      }
    }
  }
`

const ProjectImage = styled.div`
  position: relative;
  display: block;

  img {
    border-radius: 0.75rem;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) skew(0deg);
    transition: var(--animation-default);
    filter: brightness(100%);
  }

  span {
    transform: translate3d(-24px, 24px, 0px);
    transform-style: preserve-3d;
    transition: var(--animation-default);
    visibility: hidden;
    opacity: 0;

    position: absolute;
    left: 16px;
    top: auto;
    right: auto;
    bottom: 16px;
    display: block;
    object-fit: cover;

    svg {
      stroke: #fff;
      width: 1.6rem;
      height: 1.6rem;
      display: block;
      filter: brightness(100%);
    }
  }
`

const ProjectText = styled.summary`
  width: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 0.75rem;
  margin-bottom: 0.75rem;
  gap: 0.75rem;

  h3 {
    margin-top: 0;
    color: rgb(231, 229, 228);
    transition: var(--animation-default);
  }

  small {
    display: inline-block;
    color: rgb(168, 162, 158);
    transition: var(--animation-default);
  }
`
