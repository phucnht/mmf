import { Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export default function BackgroundFlare() {
  const { pathname } = useRouter();
  const cxFlare = classNames(
    "h-full w-full bg-[url('/assets/bg/flare.svg')] bg-cover bg-left bg-no-repeat fixed top-0 z-[3]",
    { 'opacity-50': pathname !== '/' }
  );
  return <Box className={cxFlare} />;
}
