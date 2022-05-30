import { Backdrop, CircularProgress } from '@mui/material';

type SpinnerType = {
  spinning?: boolean;
  icon?: JSX.Element;
  children?: React.ReactNode;
};

const Spinner = ({ spinning, icon, children }: SpinnerType) => {
  return (
    <div className='relative' style={{ minHeight: 120 }}>
      {children}
      <Backdrop
        open={spinning ?? false}
        sx={{
          position: 'absolute',
          borderRadius: 2,
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: 'rgba(18, 18, 18, 0.1)',
        }}
      >
        {icon ?? <CircularProgress />}
      </Backdrop>
    </div>
  );
};

export default Spinner;
