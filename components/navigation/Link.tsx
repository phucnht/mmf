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

const Link = forwardRef<any, LinkProps>(
  ({ href, className, children, ...props }: LinkProps, ref) => {
    const cxLink = classNames("hover:opacity-70", className);

    return (
      <a ref={ref} href={href} className={cxLink} {...props}>
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
