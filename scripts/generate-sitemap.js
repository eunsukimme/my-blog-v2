const fs = require('fs')
const path = require('path')
const globby = require('globby')
const prettier = require('prettier')
const siteMetadata = require('../data/siteMetadata')
const matter = require('gray-matter')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    'pages/*.js',
    'data/blog/**/*.mdx',
    'data/blog/**/*.md',
    'public/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api',
  ])

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                if (page.includes('mdx')) {
                  const source = fs.readFileSync(path.join(process.cwd(), page), 'utf8')
                  const frontMatter = matter(source).data
                  return `
                        <url>
                            <loc>${siteMetadata.siteUrl}/posts/${frontMatter.slug}</loc>
                        </url>
                    `
                } else {
                  const replacedPage = page
                    .replace('pages/', '/')
                    .replace('data/blog', '/posts')
                    .replace('public/', '/')
                    .replace('.js', '')
                    .replace('.mdx', '')
                    .replace('.md', '')
                    .replace('/feed.xml', '')
                  const route = replacedPage === '/index' ? '' : replacedPage
                  if (page === `pages/404.js` || page === `pages/posts/[...slug].js`) {
                    return
                  }
                  return `
                        <url>
                            <loc>${siteMetadata.siteUrl}${route}</loc>
                        </url>
                    `
                }
              })
              .join('')}
        </urlset>
    `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted)
})()
