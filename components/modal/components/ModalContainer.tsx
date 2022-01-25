import { Box } from '@whammytechvn/wt-components';
import { FC, MouseEventHandler } from 'react';

import IconButton from '../../icon-button/IconButton';
import IconClose from '../../icon/IconClose';

export interface ModalContainerProps {
  decline: MouseEventHandler<HTMLButtonElement> | undefined;
}

const ModalContainer: FC<ModalContainerProps> = ({ decline, children }) => (
  <Box className="relative w-auto my-6 mx-auto max-w-3xl">
    <Box className="absolute block z-10 right-4 top-4">
      <IconButton icon={<IconClose />} onClick={decline} />
    </Box>
    {children}
  </Box>
);

export default ModalContainer;
