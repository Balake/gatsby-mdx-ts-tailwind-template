import React from "react";
import { graphql } from "gatsby";
import { WrappedMDXProvider } from "@/components/containers/mdx";

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
      }
    }
  }
`;

const PostTemplate = ({ data: { mdx }, children }: any) => {
  return <WrappedMDXProvider>{children}</WrappedMDXProvider>;
};

export default PostTemplate;
