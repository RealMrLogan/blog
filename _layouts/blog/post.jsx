/** @jsx jsx */
import propTypes from 'prop-types'
import Head from 'next/head'
import { jsx, css } from '@emotion/core'
import DefaultLayout from '../default'
import { plume as theme } from '../../helpers/themes'

const containerCss = css`
  margin: auto;
  padding: 0 50px;
  max-width: 635px;

  li {
    margin-bottom: 5px;
  }

  blockquote {
    border-left: 5px solid;
    margin: 15px;
    padding-left: 30px;
  }

  img {
    width: 100%;
  }

  caption {
    display: block;
    text-align: left;
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
  title, content, headerImage, headerImageAlt, date
}) => (
  <DefaultLayout title={title}>
    <Head>
      <title>{title}</title>
    </Head>
    <article css={[containerCss, mobileCss, theme.setup]}>
      <picture>
        <img src={headerImage} alt={headerImageAlt} />
      </picture>
      <h1>{title}</h1>
      <span>{date}</span>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  </DefaultLayout>
)

export default Layout
