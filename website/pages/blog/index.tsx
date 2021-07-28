import { InferGetStaticPropsType } from "next"
import * as React from "react"
import { Divider, VStack } from "@chakra-ui/react"
import { BlogPostCard } from "components/blog-post-card"
import { getBlogPosts } from "utils/get-blog-posts"
import PageContainer from "components/page-container"

export type BlogIndexProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogIndex: React.FC<BlogIndexProps> = ({ posts }) => {
  return (
    <PageContainer frontmatter={{ slug: "/blog", title: "Latest" }}>
      <VStack mt="10" spacing="6" align="stretch">
        {posts.map((post, index) => (
          <React.Fragment key={index}>
            <BlogPostCard key={post.slug} post={post} />
            <Divider />
          </React.Fragment>
        ))}
      </VStack>
    </PageContainer>
  )
}

export async function getStaticProps() {
  const posts = await getBlogPosts()
  return {
    props: {
      posts,
    },
  }
}

export default BlogIndex
