import * as React from "react";
import { Link } from "gatsby";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const links = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/blog",
    name: "Blog",
  },
  {
    to: "/about",
    name: "About",
  },
];

const Header = () => (
  <div className={cn("flex items-center py-8 justify-between w-full")}>
    <Link to={"/"} className={cn("no-underline hover:opacity-100")}>
      <h2>{"My name"}</h2>
    </Link>
    <div className={cn("space-x-4 flex flex-row items-center justify-between")}>
      {links.map(({ to, name }, i) => (
        <React.Fragment key={to}>
          <Link to={to}>{name}</Link>
          {i !== links.length - 1 && (
            <Separator
              orientation="vertical"
              className={cn("data-[orientation=vertical]:h-4")}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export { Header };
