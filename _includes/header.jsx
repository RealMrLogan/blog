/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Link from 'next/link'

const headerCss = css`
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;

  a {
    text-decoration: none;
    letter-spacing: .1em;
    font-size: 1.3em;

    margin-left: 25px;
  }

  padding: 20px 25px;
`

const Header = () => (
  <header css={headerCss}>
    <div>
      {/* Logo */}
      <div />
      <div>
        <Link href="/">Home</Link>
      </div>
    </div>
  </header>
)

export default Header
