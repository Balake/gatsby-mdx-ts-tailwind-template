import { graphql, useStaticQuery } from "gatsby";
import type { Post } from "@/lib/types/post";

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query BlogPosts {
      posts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/posts/life/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        edges {
          node {
            frontmatter {
              title
              description
              date
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `);
  return data.posts.edges as Post[];
};

export { usePosts };
