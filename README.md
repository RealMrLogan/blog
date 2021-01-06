# Get Started
- `git clone https://github.com/loganes1/blog.git`
- `npm install`
- `npm run dev`

Built with [Next JS](https://nextjs.org/)

# Modifying this repo
## Add a Post
Posts are rendered from a Markdown file and put into a React component (template).

1. Create a `.md` file under `_posts`. 
2. Everything else is automagic.

In order to get a basic page to compile, you need at least a `title` in the front matter of the md file. It uses YAML to read the md files. The url for the page will be `/posts/{your_md_filename}`.

## Add an image
Images must be stored in the `public` folder and then referenced starting with `/`. Read the [docs about static file serving](https://nextjs.org/docs/basic-features/static-file-serving).

# Acknowledgements
This [tutorial on Next.js](https://css-tricks.com/building-a-blog-with-next-js/) helped me get started.

# Potential Features:
- **Playbook**. A companion to Storybook, take storybook stories and use them in a sandbox. Or at least the components from those stories.