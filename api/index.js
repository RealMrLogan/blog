import matter from 'gray-matter'
import yaml from 'js-yaml'
import marked from 'marked'

export default null

export async function getAllPosts() {
  const context = require.context('../_posts', false, /\.md$/)
  const posts = []
  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../_posts/${post}`)
    const meta = matter(content.default)
    posts.push({
      slug: post.replace('.md', ''),
      ...meta.data
    })
  }
  posts.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1
    if (a > b) return -1
    return 0
  })
  return posts
}

export async function getConfig() {
  const config = await import('../config.yml')
  return yaml.load(config.default)
}

export async function getPostBySlug(slug) {
  const fileContent = await import(`../_posts/${slug}.md`)
  const meta = matter(fileContent.default)
  const content = marked(meta.content)
  return { ...meta.data, content }
}
