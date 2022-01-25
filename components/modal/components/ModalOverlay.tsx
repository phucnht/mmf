import { Box, Stack } from '@whammytechvn/wt-components';
import { FC } from 'react';

const ModalOverlay: FC = ({ children }) => (
  <>
    <Stack className="justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      {children}
    </Stack>
    <Box className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
);

export default ModalOverlay;
