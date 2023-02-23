import { styled } from '@linaria/react'

export default function Footer() {
  return (
    <FooterStyles>
      <div>
        <p>
          © 2023 Clovis Rosa, author of{' '}
          <a href="https://clovis-rosa.vercel.app">clovis-rosa.vercel.app</a>
        </p>
      </div>
    </FooterStyles>
  )
}

const FooterStyles = styled.footer``
