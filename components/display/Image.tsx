import NextImage from 'next/image';

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
const cloudflareImageLoader = ({ src, width, quality }: { src: string; width: number; quality: number }) => {
  if (!quality) {
    quality = 75;
  }
  return `https://images.[yourprojectname].workers.dev?width=${width}&quality=${quality}&image=https://[yourdomain.com]${src}`;
};

export default function Image(props: any) {
  if (process.env.NODE_ENV === 'development') {
    return <NextImage unoptimized={true} {...props} />;
  } else {
    return <NextImage {...props} loader={cloudflareImageLoader} />;
  }
}
