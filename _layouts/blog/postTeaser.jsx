/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import propTypes from 'prop-types'
import Link from 'next/link'
import { plume as theme } from '../../helpers/themes'

const containerCss = css`
  background-color: ${theme.white};
  overflow: hidden;
  cursor: pointer;
  transition: 450ms;
  padding: 0 10px;

  &:hover {
    transform: translateY(-7.5px);
  }
`
const imageCss = css`
  height: 300px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`
const secondContainerCss = css`
  position: relative;
  top: -6%;
  text-align: center;
`
const categoryCss = css`
  background-color: ${theme.secondaryAccent};
  margin: 0 15%;
  padding: 15px 0 15px;
`
const titleCss = css`
  font-family: 'Raleway', sans-serif !important;
  font-size: 1em;
  letter-spacing: 1px !important;
  padding-top: 10px;
`

export default function PostTeaser({ post }) {
  return (
    <Link href={`blog/posts/${post.slug}`}>
      <div css={containerCss}>
        <img css={imageCss} src={post.headerImage} alt={post.headerImageAlt} />
        <div css={secondContainerCss}>
          <h3 css={categoryCss}>{post.category}</h3>
          <h2 css={titleCss}>{post.title}</h2>
          <caption>{post.introText}</caption>
        </div>
      </div>
    </Link>
  )
}

/**
 *
            <li key={index}>
              <Link href={`blog/posts/${post.slug}`}>
                {post.title}
              </Link>
            </li>
 */
