import {
  DetailedHTMLProps,
  forwardRef,
  LinkHTMLAttributes,
  ReactNode,
} from "react";
import classNames from "classnames";

export interface LinkProps
  extends DetailedHTMLProps<
    LinkHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  className?: string;
  children?: ReactNode;
}

const Link = ({ href, className, children, ...props }: LinkProps) => {
  const cxLink = classNames("hover:opacity-70", className);

  return !href ? (
    <div className={cxLink}>{children}</div>
  ) : (
    <a href={href} className={cxLink} {...props}>
      {children}
    </a>
  );
};

Link.displayName = "Link";

export default Link;
