import { useRouter } from 'next/router';
import Link from 'next/link';
import classNames from 'classnames';
import { Button } from '@whammytechvn/wt-components';
import ReactTooltip from 'react-tooltip';

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
    'text-sm !leading-[3.2rem] xl:text-btn p-1 xl:p-2 w-[8rem] !min-w-fit xl:w-[15rem]',
    { 'bgg-yellow text-red-100': isActive },
    { '!bg-gray-400 !cursor-not-allowed': disabled },
    className
  );

  return (
    <Link href={href} passHref>
      <>
        <Button className={cxNavLink} color="primary" content={content} data-tip={disabled && 'Coming Soon'} />
        <ReactTooltip place="bottom" />
      </>
    </Link>
  );
}

NavLink.defaultProps = {
  exact: false
};
