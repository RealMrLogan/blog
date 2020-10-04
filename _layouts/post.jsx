import propTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import DefaultLayout from './default'

function Layout({ title, content }) {
  return (
    <DefaultLayout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </DefaultLayout>
  )
}
Layout.propTypes = {
  children: propTypes.arrayOf(propTypes.element)
}
Layout.defaultProps = {
  children: null
}

export default Layout
