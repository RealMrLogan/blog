import Head from 'next/head'
import Header from '../_includes/header'
import Footer from '../_includes/footer'

export default function DefaultLayout({ title, description, children }) {
  return (
    <main>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
