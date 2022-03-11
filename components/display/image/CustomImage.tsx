import Image from 'next/image';
import { useState } from 'react';

export const externaImageLoader = ({ src }: { src: string }) => src;

export default function CustomImage({ alt, ...props }: any) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt} // To fix lint warning
      onError={() => setSrc('/assets/default/img-blank.png')}
      placeholder="blur"
      blurDataURL="/assets/default/img-blank.png"
    />
  );
}
