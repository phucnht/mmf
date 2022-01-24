import { useRouter } from "next/router";
import Link from "next/link";
import { ReactNode } from "react";
import classNames from "classnames";

interface NavLinkProps {
  href: string;
  exact?: boolean;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
}

export default function NavLink({
  href,
  exact,
  disabled,
  children,
  className,
  ...props
}: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = disabled
    ? false
    : exact
    ? pathname === href
    : pathname.startsWith(href);

  console.log(pathname, href, isActive);

  const cxNavLink = classNames({ active: isActive }, className);

  return (
    <Link href={href} passHref>
      <a className={cxNavLink} {...props}>
        {children}
      </a>
    </Link>
  );
}

NavLink.defaultProps = {
  exact: false,
};
