/** @jsx jsx */
import propTypes from 'prop-types'
import Head from 'next/head'
import { jsx, css } from '@emotion/core'
import DefaultLayout from './default'

const containerCss = css`
  margin: auto;
  padding: 0 50px;
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

  img {
    width: 100%;
  }
`
const mobileCss = css`
  @media only screen and (max-width: 450px) {
    padding 0 15px;

    h1 {
      font-size: 1.75em;
    }

    picture {
      display: block;
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: 100vw;
      position: relative;
      right: 50%;
      width: 100vw;
    }
  }
`

const Layout = ({
  title, content, headerImage, headerImageAlt
}) => (
  <DefaultLayout title={title}>
    <Head>
      <title>{title}</title>
    </Head>
    <article css={[containerCss, mobileCss]}>
      <picture>
        <img src={headerImage} alt={headerImageAlt} />
      </picture>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </DefaultLayout>
)

export default Layout
