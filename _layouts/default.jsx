/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Head from 'next/head'
import propTypes from 'prop-types'
import Header from '../_includes/header'
import Footer from '../_includes/footer'
import Normalize from '../lib/normalize.css.jsx'
import Fonts from '../lib/fonts.css.jsx'

const mainCss = css`
  min-height: 87vh;
`

export default function DefaultLayout({ title, description, children }) {
  return (
    <>
      <Normalize />
      <Fonts />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main css={mainCss}>
        {children}
      </main>
      <Footer />
    </>
  )
}
DefaultLayout.propTypes = {
  title: propTypes.string.isRequired
}
