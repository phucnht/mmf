import classNames from 'classnames';
import IconLeftChevron from 'components/icon/IconLeftChevron';
import { useRouter } from 'next/router';
import { MouseEvent } from 'react';

interface ButtonBackProps {
  content?: string;
  className?: string;
}

export default function ButtonBack({ content = 'Back', className }: ButtonBackProps) {
  const router = useRouter();
  const { pathname } = router;
  const btnBackClassName = classNames(
    'flex items-center gap-3 text-lg text-white font-black hover:bg-black/30 p-4 rounded-[2rem]',
    className
  );

  const handleBackToParent = (e: MouseEvent<HTMLElement>) => {
    if (e) {
      e.preventDefault();
    }
    const parentPath = pathname.substring(0, pathname.lastIndexOf('/'));
    router.push(parentPath);
  };

  return (
    <button className={btnBackClassName} onClick={handleBackToParent}>
      <IconLeftChevron />
      {content}
    </button>
  );
}
