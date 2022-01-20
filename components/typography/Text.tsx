import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";

export type TextSize = "4xl" | "3xl" | "2xl" | "xl" | "lg" | "md" | "sm" | "xs";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: TextSize;
  className?: string;
  children?: ReactNode;
}

const Text = ({ size = "xl", className, children }: TextProps) => {
  const cxText = classNames({ [`text-${size}`]: size }, className);

  return <p className={cxText}>{children}</p>;
};

export default Text;
