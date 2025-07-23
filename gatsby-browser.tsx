import "./src/styles/global.css";

import React from "react";
import { PageContainer } from "./components/containers/page";
import { WrappedMDXProvider } from "./components/containers/mdx";

export const wrapPageElement = ({ element, props }) => {
  return (
    <PageContainer {...props}>
      <WrappedMDXProvider>{element}</WrappedMDXProvider>
    </PageContainer>
  );
};
