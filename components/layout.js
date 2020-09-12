/** @jsx jsx */
import {jsx} from '@emotion/core'

const mainCss = {
  width: '70%',
  margin: 'auto'
}

function Layout({ children }) {
  return <main css={mainCss}>{children}</main>
}

export default Layout