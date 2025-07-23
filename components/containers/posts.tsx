import { Post } from "@/lib/types/post";
import { Link } from "gatsby";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getDateString, getSlug } from "@/lib/utils";

export const PostsContainer: React.FC<{ posts: Post[] }> = ({ posts }) => (
  <div className="py-4 flex flex-wrap gap-4 flex-row">
    {posts.map(({ node }) => (
      <div
        key={node.internal.contentFilePath}
        className="w-full sm:basis-[calc(50%-0.5rem)] flex-shrink-0"
      >
        <Link
          to={getSlug(node.internal.contentFilePath)}
          className="no-underline cursor-pointer"
        >
          <Card className="group w-full hover:-translate-y-1 will-change-transform transition-all duration-300 ease-out hover:bg-primary">
            <CardHeader>
              <CardTitle className="will-change-transform transition-all duration-300 ease-out group-hover:text-primary-foreground">
                {node.frontmatter.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <CardDescription className="will-change-transform transition-all duration-300 ease-out group-hover:text-muted">
                {node.frontmatter.description}
              </CardDescription>
              <CardDescription className="will-change-transform transition-all duration-300 ease-out group-hover:text-muted">
                {getDateString(node.frontmatter.date)}
              </CardDescription>
            </CardContent>
          </Card>
        </Link>
      </div>
    ))}
  </div>
);
