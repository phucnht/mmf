import NextImage from 'next/image';
import { useState } from 'react';

const cloudflareImageLoader = (
  { src, width, quality }: { src: string; width: number; quality?: number },
  isExternal?: boolean
) => {
  if (!quality) {
    quality = 75;
  }
  const imgSrc = isExternal ? src : `https://mymetafarm.pages.dev${src}`;
  return `https://images.mymetafarm.workers.dev?width=${width}&quality=${quality}&image=${imgSrc}`;
};

export default function Image({ isExternal, src: _src, ...props }: any) {
  const [src, setSrc] = useState(_src);
  const imgProps = {
    ...props,
    src,
    onError: () => {
      setSrc('/assets/default/img_blank.svg');
    }
  };

  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...imgProps} />;
  } else {
    return <NextImage {...imgProps} loader={loader => cloudflareImageLoader(loader, isExternal)} />;
  }
}
