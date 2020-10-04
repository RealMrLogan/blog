# Get Started
- clone the repo
- `npm install`
- `npm run dev`

Built with [Next JS](https://nextjs.org/)

# Modifying this repo
## Add a Post
Posts are rendered from a Markdown file and put into a React component (template).

1. Create a `.md` file under `_posts`. 
2. Everything else is automagic.

In order to get a basic page to compile, you need at least a `title` in the front matter of the md file. It uses YAML to read the md files. The url for the page will be `/posts/{your_md_filename}`.
