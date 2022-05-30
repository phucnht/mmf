import { Close } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';

const CloseButton = (props: IconButtonProps) => {
  return (
    <IconButton
      sx={{
        position: 'absolute',
        top: 12,
        right: 16,
      }}
      color='info'
      {...props}
    >
      <Close />
    </IconButton>
  );
};

export default CloseButton;
