import Link from 'next/link'
import { styled } from '@linaria/react'
import { HiArrowUpRight } from 'react-icons/hi2'
import { formateDate } from '@/lib/formateDate'

interface PostCardProp {
  id: string
  title: string
  slug: string | any
  date: string
}

const posts: PostCardProp[] = [
  {
    id: '01',
    title: 'ArtMuseum Sao Paulo',
    slug: 'https://google.com',
    date: '2022-11-09',
  },
  {
    id: '02',
    title: 'Senju Motomachi Souko',
    slug: 'https://google.com',
    date: '2022-12-16',
  },
  {
    id: '03',
    title: 'Pangram Pangram',
    slug: 'https://google.com',
    date: '2023-01-06',
  },
  {
    id: '04',
    title: 'Milan Vučković',
    slug: 'https://google.com',
    date: '2023-02-05',
  },
  {
    id: '05',
    title: 'The decade that brought us Star Trek and Doctor Who',
    slug: 'https://google.com',
    date: '2023-02-17',
  },
  {
    id: '06',
    title: 'As front-end developer Kyle Fiedler put it',
    slug: 'https://google.com',
    date: '2022-12-28',
  },
]

export default function PostsCard() {
  const sortedPosts = posts.sort((a, z) => {
    if (new Date(a.date) > new Date(z.date)) return -1
    if (new Date(a.date) < new Date(z.date)) return 1
    return 0
  })

  return (
    <>
      {sortedPosts.map(({ id, title, slug, date }) => (
        <PostArticle key={id}>
          <Link href={slug}>
            <PostTitle>
              <h3>{title}</h3>
            </PostTitle>
            <PostDate>
              <time>{formateDate(date)}</time>
              <HiArrowUpRight />
            </PostDate>
          </Link>
        </PostArticle>
      ))}
    </>
  )
}

const PostArticle = styled.article`
  margin: 0;
  transition: var(--animation-default);

  :hover {
    a {
      border-color: rgb(255, 255, 255);
      border-style: solid;
      border-width: 0 0 1px;
    }

    div {
      transform: translate3d(0px, 0px, 0px);

      h3 {
        color: rgb(255, 255, 255);
      }

      svg {
        opacity: 1;
        visibility: visible;
      }
    }
  }

  a {
    border-color: var(--card-fg-color-dark);
    border-style: solid;
    border-width: 0 0 1px;

    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    overflow: hidden;
    padding: 1rem 0;
    text-decoration: none;
    transition: var(--animation-default);
    border-color: #57534e;
  }
`

const PostTitle = styled.div`
  h3 {
    font-weight: 400;
    color: var(--card-text-color);
    transition: var(--animation-default);
  }
`

const PostDate = styled.div`
  transform: translate3d(32px, 0px, 0px);
  transform-style: preserve-3d;
  transition: var(--animation-fast);

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  time {
    color: var(--card-text-color);
  }

  svg {
    opacity: 0;
    visibility: hidden;
    fill: var(--card-text-color-small);
    transition: var(--animation-fast);
    width: 1rem;
    height: auto;
  }
`
