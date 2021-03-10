import { getConfig, getAllPosts } from '../api'
import Layout from '../_layouts/blog/landingPage'

export default function Blog({ description, posts }) {
  return (
    <Layout title="Blog" description={description} {...{ posts }} />
  )
}

export async function getStaticProps() {
  const config = await getConfig()
  const allPosts = await getAllPosts()
  return {
    props: {
      posts: allPosts,
      title: config.title,
      description: config.description
    }
  }
}
