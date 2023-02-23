import { styled } from '@linaria/react'
import PostsCard from './ui/PostsCard'

export default function BlogList() {
  return (
    <BlogListStyles>
      <h4>Blog</h4>
      <PostsCard />
    </BlogListStyles>
  )
}

const BlogListStyles = styled.section``
