import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import { TextSize } from "./Text";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: TextSize;
  className?: string;
  children?: ReactNode;
}

const Heading = ({
  as: HeadingComponent = "h2",
  className,
  children,
}: TextProps) => {
  const cxText = classNames(className);

  return <HeadingComponent className={cxText}>{children}</HeadingComponent>;
};

export default Heading;
