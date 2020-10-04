import Link from 'next/link'
import { getConfig, getAllPosts } from '../../api'
import DefaultLayout from '../../_layouts/default'

export default function Blog({ description, posts }) {
  return (
    <DefaultLayout title="Blog" description={description}>
      <p>List of posts:</p>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link href={`blog/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </DefaultLayout>
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
