import { Box } from '@whammytechvn/wt-components';
import classNames from 'classnames';
import { FC, MouseEventHandler } from 'react';
import { ModalSize } from 'store/modal-confirmation/modalConfirmation.slice';

import IconButton from '../../icon-button/IconButton';
import IconClose from '../../icon/IconClose';

export interface ModalContainerProps {
  size?: ModalSize;
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalContainer: FC<ModalContainerProps> = ({ size = 'sm', decline, children }) => {
  const cxModalContainer = classNames(`relative w-full my-6 mx-auto`, {
    'max-w-3xl': size === 'sm',
    'max-w-[68rem]': size === 'md',
    'max-w-max': size === 'max',
    'max-w-min': size === 'min',
    'max-w-fit': size === 'fit'
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
