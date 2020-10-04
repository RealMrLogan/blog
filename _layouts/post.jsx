/** @jsx jsx */
import propTypes from 'prop-types'
import Head from 'next/head'
import { jsx, css } from '@emotion/core'
import DefaultLayout from './default'

const containerCss = css`
  margin: 0 50px;
  max-width: 635px;

  h1, h2, h3 {
    font-family: 'Oswald';
  }

  p, ol, ul {
    font-family: 'Raleway';
    line-height: 2em;
    font-size: 14pt;
    letter-spacing: 0.5pt;
  }

  ol, ul {
    line-height: 1.25em;
  }

  blockquote {
    border-left: 5px solid;
    margin: 15px;
    padding-left: 30px;
  }
`

const Layout = ({ title, content }) => (
  <DefaultLayout title={title}>
    <Head>
      <title>{title}</title>
    </Head>
    <article css={containerCss}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </DefaultLayout>
)

export default Layout
