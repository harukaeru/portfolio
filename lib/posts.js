import fs from 'fs'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getHomeData() {
  const content = new TextDecoder('utf-8').decode(
    fs.readFileSync(`${postsDirectory}/home.mdx`)
  )
  return {
    content,
  }
}
