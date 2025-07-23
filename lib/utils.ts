import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSlug = (contentFilePath: string) => {
  const name = contentFilePath.split("/").slice(-1)[0].split(".")[0];
  return `/blog/${name}`;
};

export const getDateString = (date: string) => {
  const dateObj = new Date(date);

  return dateObj.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
