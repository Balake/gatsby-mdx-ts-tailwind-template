import remarkGfm from "remark-gfm";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: `balake_blog`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@/*": "./*",
        },
        extensions: ["js", "jsx", "ts", "tsx"],
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `main`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
  ],
};

export default config;
