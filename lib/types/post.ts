export type Post = {
  node: {
    frontmatter: {
      title: string;
      description: string;
      date: string;
    };
    internal: {
      contentFilePath: string;
    };
  };
};
