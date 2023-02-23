import { css } from '@linaria/core'

export const globals = css`
  :global() {
    :root {
      --bg-color: rgba(29, 29, 30, 1);
      --fg-color: rgba(255, 255, 255, 0.06);

      --card-bkg-color: rgba(34, 34, 35, 1);
      --card-text-color: rgba(122, 122, 123, 1);
      --card-text-color-small: rgba(231, 229, 228, 1);
      --card-border-color: rgba(255, 255, 255, 0.04);
      --card-fg-color-dark: rgba(43, 43, 44, 1);
      --card-fg-color-light: rgba(47, 47, 48, 1);

      --btn-border-color: rgb(87, 83, 78);

      /* --tx-color: #f5f5f4; */
      --tx-color: rgb(255, 255, 255);
      --tx-color-sub: rgba(96, 96, 97, 1);
      --tx-anchor: #0070c9;
      /* --tx-anchor: #f2f8fc; */

      --animation-default: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      --animation-fast: all 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      margin: 0;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: var(--font-inter);
      font-size: 16px;
      line-height: 1.5;
      font-weight: 300;
      text-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
      background-color: var(--bg-color);
      color: var(--tx-color);

      display: flex;
      flex-direction: column;
      min-height: 100vh;
      padding: 5vh clamp(1rem, 5vw, 3rem) 1rem;

      > * {
        --layout-spacing: max(7vh, 3rem);
        --max-width: 70ch;
        width: min(100%, var(--max-width));
        margin-left: auto;
        margin-right: auto;
      }

      div[data-nextjs-scroll-focus-boundary] {
        isolation: isolate;
      }
    }

    img,
    picture,
    video,
    canvas,
    svg {
      display: block;
      max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
      font: inherit;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      overflow-wrap: break-word;
    }

    small {
      font-size: 0.75rem;
      letter-spacing: 0.025em;
    }

    :is(h1, h2, h3) {
      line-height: 1.2;
    }

    :is(h2, h3):not(:first-child) {
      margin-top: 2em;
    }

    a {
      color: var(--tx-anchor);
      text-underline-offset: 0.15em;
    }

    main {
      margin-top: var(--layout-spacing);
    }

    section {
      margin-top: var(--layout-spacing);

      :is(:first-child) {
        margin-top: 0;
      }

      & > :is(h4:first-child) {
        margin-bottom: 1rem;
      }
    }

    article {
      margin-top: var(--layout-spacing);

      &:first-child {
        margin-top: 0;
      }

      > * + * {
        margin-top: 1em;
      }
    }

    footer {
      margin-top: auto;
      padding-top: var(--layout-spacing);

      div {
        border-top: 1px solid #ccc;
        padding-top: 0.25em;

        p {
          margin: 1rem 0;
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--tx-color-sub);
        }
      }
    }
  }
`
