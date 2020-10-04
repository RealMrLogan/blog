/** @jsx jsx */
import { jsx } from '@emotion/core'
import propTypes from 'prop-types'

const mainCss = {
  width: '70%',
  margin: 'auto',
}

function Layout({ children }) {
  return <main css={mainCss}>{children}</main>
}
Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.element),
}
Layout.defaultProps = {
  children: null,
}

export default Layout
