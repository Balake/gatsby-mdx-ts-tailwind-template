import React from "react";
import { Header } from "@/components/ui/header";
import { cn } from "@/lib/utils";

export const PageContainer: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div
      className={cn(
        "max-w-full lg:max-w-[50vw] p-2 md:p-0 items-center mx-auto"
      )}
    >
      <Header />
      {children}
    </div>
  );
};
