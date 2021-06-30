import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import React from 'react'
import matter from 'gray-matter'
import ReactMarkdown from "react-markdown";


function PostTemplate({ content, data }) {
  // This holds the data between `---` from the .md file
  const frontmatter = data
  const router = useRouter()
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <img src={frontmatter.coverImage} />
      <p>Createt on: {frontmatter.date}</p>
      <p>Post by: {frontmatter.author}</p>
      <ReactMarkdown children={content} />
    </>
  )
}

PostTemplate.getInitialProps = async (context) => {
  const { slug } = context.query
  
  // Import our .md file using the `slug` from the URL
  const content = await import(`../../_posts/${slug}.md`)
  
  // Parse .md data through `matter`
  const data = matter(content.default)
  
  // Pass data to our component props
  return { ...data }

  return { slug }
}

export default PostTemplate