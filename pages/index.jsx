import Head from 'next/head'
import Link from 'next/link'
import propTypes from 'prop-types'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

const utilStyles = {}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>…</Head>
      <section className={`${utilStyles?.headingMd} ${utilStyles?.padding1px}`}>
        <h2 className={utilStyles?.headingLg}>Blog</h2>
        <ul className={utilStyles?.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles?.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
Home.propTypes = {
  allPostsData: propTypes.arrayOf(propTypes.object),
}
Home.defaultProps = {
  allPostsData: null,
}
