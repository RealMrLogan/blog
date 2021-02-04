/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const footerCss = css`
  font-family: 'Oswald', sans-serif;
  padding: 20px 25px;
  background-color: lightgrey;
`

const Footer = () => (
  <footer css={footerCss}>
    <div>A personal site</div>
  </footer>
)

export default Footer
