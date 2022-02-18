import { AnchorHTMLAttributes, DetailedHTMLProps, forwardRef, ReactNode } from 'react';
import classNames from 'classnames';

export interface LinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
}

const Link = forwardRef<any, LinkProps>(({ disabled, href, className, children, ...props }: LinkProps, ref) => {
  const cxLink = classNames(
    { 'hover:opacity-70': !disabled, 'cursor-not-allowed pointer-events-none opacity-50': disabled },
    className
  );

  return (
    <a ref={ref} href={href} className={cxLink} {...props}>
      {children}
    </a>
  );
});

Link.displayName = 'Link';

export default Link;
