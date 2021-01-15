/**
 * This file is to hold all of the themes that the site can use.
 * This includes colors, fonts, etc...
 * Required keys are `Primary`, `Secondary`, `Tertiary`, `Accent`, `SecondaryAccent`.
 * Optional (but recommended) keys are `Black`, `White`, `Grey`
 */
import { css } from '@emotion/core'

const plume = {
  // boilerplate
  setup: css`
    @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

    h1, h2, h3, h4, h5, h6 {
      font-family: 'Oswald', sans-serif;
      text-transform: uppercase;
      letter-spacing: 3px;
    }
    h1 {
      font-size: 4em;
    }
    h3 {
      font-size: 1em;
    }
    p, caption {
      font-family: 'Raleway', sans-serif;
      font-size: 14pt;
      line-height: 2em;
      letter-spacing: 0.5pt;
    }
    caption {
      display: block;
    }

    @media only screen and (max-width: 450px) {
      h1 {
        font-size: 2em;
      }
      p {
        font-size: 12pt;
      }
    }
  `,
  // colors
  primary: '#4319B9',
  secondary: '#7662F1',
  tertiary: '#A3A1F6',
  accent: '#C37921',
  secondaryAccent: '#FFB84D',
  black: '#181818',
  white: '#FFFFFF',
  grey: '#6F6F6F',
  lightGrey: '#eaeaea'
}

export default plume
