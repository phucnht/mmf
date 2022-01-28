import NextImage from 'next/image';

const cloudflareImageLoader = ({ src, width, quality }: { src: string; width: number; quality: number }) => {
  if (!quality) {
    quality = 75;
  }
  return `https://images.mymetafarm.workers.dev?width=${width}&quality=${quality}&image=https://mymetafarm.pages.dev${src}`;
};

export default function Image(props: any) {
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...props} />;
  } else {
    return <NextImage {...props} loader={cloudflareImageLoader} />;
  }
}
