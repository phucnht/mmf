import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import { Button } from '@whammytechvn/wt-components';

interface NavLinkProps {
  content: string;
  href: string;
  exact?: boolean;
  disabled?: boolean;
  className?: string;
}
export default function NavLink({ content, href, exact, disabled, className }: NavLinkProps) {
  const { pathname } = useRouter();
  const isActive = disabled ? false : exact ? pathname === href : pathname.startsWith(href);
  const cxNavLink = classNames(
    'text-sm !leading-[3.2rem] xl:text-btn p-1 xl:p-3 w-[9rem] !min-w-fit xl:w-[15rem]',
    { 'bgg-yellow text-red-100': isActive },
    className
  );

  return (
    <Link href={href} passHref>
      <Button disabled={disabled} className={cxNavLink} color="primary" content={content} />
    </Link>
  );
}

NavLink.defaultProps = {
  exact: false
};
