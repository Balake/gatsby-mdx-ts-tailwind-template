import { Mermaid } from "mdx-mermaid/lib/Mermaid";
import { Callout } from "@/components/composed/callout";
import { PrismSyntaxHighlight } from "@/components/containers/code";
import { MDXProvider } from "@mdx-js/react";
import React from "react";

export function WrappedMDXProvider({ children }: React.PropsWithChildren) {
  return (
    <MDXProvider
      components={{
        Callout,
        Mermaid,
        pre: (props) => (
          <div className="code-container">
            <pre>{props.children}</pre>
          </div>
        ),
        code: (props) =>
          props.className ? (
            <PrismSyntaxHighlight className={props.className}>
              {props.children as string}
            </PrismSyntaxHighlight>
          ) : (
            <code className="language-text">{props.children}</code>
          ),
      }}
    >
      <div className="mdx-revert">{children}</div>
    </MDXProvider>
  );
}
