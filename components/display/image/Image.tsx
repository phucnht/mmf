import NextImage from 'next/image';

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

export default function Image({ isExternal, ...props }: any) {
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...props} />;
  } else {
    return <NextImage {...props} loader={loader => cloudflareImageLoader(loader, isExternal)} />;
  }
}
