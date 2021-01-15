/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import Head from 'next/head'
import propTypes from 'prop-types'
import Header from '../../_includes/header'
import Footer from '../../_includes/footer'
import Normalize from '../../lib/normalize.css.jsx'
import { plume as theme } from '../../helpers/themes'
import PostTeaser from './postTeaser'

const mainCss = css`
  padding: 0 30px;
  background-color: ${theme.lightGrey};
  margin-bottom: -400px;

  * {
    z-index: 1;
  }

  ul {
    padding: 0;
  }
  
  @media only screen and (max-width: 450px) {
    margin-bottom: 0;
  }
`
const backgroundBlockCss = css`
  background-color: ${theme.black};
  width: calc(100% + 60px);
  height: 400px;
  position: relative;
  z-index: 0;
  left: -30px;
`
const contentCss = css`
  position: relative;
  top: -400px;
`
const headingCss = css`
  padding: 40px 0 20px;
  margin: 0;
`
const strongCss = css`
  font-family: 'Oswald', sans-serif;
  color: ${theme.secondary};
`
const spanCss = css`
  font-family: 'Raleway', sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75em !important;
  color: ${theme.grey};
  letter-spacing: 0;
`
const gridCss = css`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 30px;
  
  @media only screen and (max-width: 450px) {
    grid-template-columns: 100%;
  }
`

export default function BlogLayout({
  title, description, children, posts
}) {
  let postCounter = 0
  return (
    <section css={{ overflow: 'hidden' }}>
      <Normalize />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main css={[theme.setup, mainCss]}>
        <div css={backgroundBlockCss} />
        <section css={contentCss}>
          <h1 css={headingCss}>
            <strong css={strongCss}>Blog</strong>
            <span css={spanCss}>posts</span>
          </h1>
          <ul css={gridCss}>
            {posts.map((post) => <PostTeaser key={`post_${postCounter++}`} {...{ post }} />)}
          </ul>
          {children}
        </section>
      </main>
      <Footer />
    </section>
  )
}
BlogLayout.propTypes = {
  title: propTypes.string.isRequired
}
