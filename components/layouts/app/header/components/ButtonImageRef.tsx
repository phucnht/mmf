import { ButtonImage } from '@whammytechvn/wt-components';

import { forwardRef } from 'react';
import { ButtonImageProps } from '@whammytechvn/wt-components/dist/controls/button-image/ButtonImage.i';

const ButtonImageRef = forwardRef<any, ButtonImageProps>(({ children, ...props }: ButtonImageProps, ref) => {
  return (
    <div ref={ref} className="flex items-center justify-center">
      <ButtonImage {...props}>{children}</ButtonImage>
    </div>
  );
});

ButtonImageRef.displayName = 'ButtonImageRef';

export default ButtonImageRef;
