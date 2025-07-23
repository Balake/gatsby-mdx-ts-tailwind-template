import * as path from "path";
import type { GatsbyNode } from "gatsby";

type Post = {
  frontmatter: {
    title: string;
    date: Date;
  };
  internal: {
    contentFilePath: string;
  };
  id: string;
};

// copied from @/lib/utils because this isn't initialized before it's called for some reason?
const getSlug = (contentFilePath: string) => {
  const name = contentFilePath.split("/").slice(-1)[0].split(".")[0];
  return `/blog/${name}`;
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const result = await graphql<{
    posts: { nodes: Post[] };
  }>(`
    query Posts {
      posts: allMdx(
        filter: { internal: { contentFilePath: { regex: "/posts/life/" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            date
          }
          internal {
            contentFilePath
          }
          id
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }
  if (!result.data) {
    reporter.panicOnBuild("No MDX result data", result.errors);
    return;
  }
  const posts = result.data.posts;

  posts.nodes.forEach((node) => {
    actions.createPage({
      path: getSlug(node.internal.contentFilePath),
      component: `${path.resolve("./templates/post.tsx")}?__contentFilePath=${
        node.internal.contentFilePath
      }`,
      context: {
        id: node.id,
      },
    });
  });
};
