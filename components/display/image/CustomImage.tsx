import Image from 'next/image';
import { useState } from 'react';
import imgBlank from 'public/assets/default/img-blank.png';

export const externaImageLoader = ({ src }: { src: string }) => src;

export default function CustomImage({ alt, ...props }: any) {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src || imgBlank}
      alt={alt} // To fix lint warning
      onError={() => setSrc('/assets/default/img-blank.png')}
      blurDataURL="/assets/default/img-blank.png"
    />
  );
}
