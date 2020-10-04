import Head from 'next/head'
import propTypes from 'prop-types'
import Header from '../_includes/header'
import Footer from '../_includes/footer'
import Normalize from '../lib/normalize.css.jsx'
import Fonts from '../lib/fonts.css.jsx'

export default function DefaultLayout({ title, description, children }) {
  return (
    <>
      <Normalize />
      <Fonts />
      <main>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  )
}
DefaultLayout.propTypes = {
  title: propTypes.string.isRequired
}
