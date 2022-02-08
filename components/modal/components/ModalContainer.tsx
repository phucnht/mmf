import { Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC, MouseEventHandler } from 'react';

import IconButton from '../../icon-button/IconButton';
import IconClose from '../../icon/IconClose';

export interface ModalContainerProps {
  size: 'md' | 'sm';
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalContainer: FC<ModalContainerProps> = ({ size = 'sm', decline, children }) => {
  const cxModalContainer = classNames('relative w-auto my-6 mx-auto', {
    'max-w-3xl': size === 'sm',
    'max-w-5xl': size === 'md'
  });
  return (
    <Box className={cxModalContainer}>
      <Box className="absolute block z-10 right-6 top-6">
        <IconButton icon={<IconClose />} onClick={decline} />
      </Box>
      {children}
    </Box>
  );
};

export default ModalContainer;
