import { LocalizationProvider } from '@mui/lab';
import { default as DateAdapter } from '@mui/lab/AdapterLuxon';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

export const appTheme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        color: 'primary',
        size: 'medium',
        disableElevation: true,
      },
      styleOverrides: {
        sizeLarge: { minHeight: 48, minWidth: 48, fontSize: 18 },
        sizeMedium: { minHeight: 40, minWidth: 40, paddingTop: 8 },
        sizeSmall: { minHeight: 32, minWidth: 32 },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root.Mui-focused fieldset': {
            borderWidth: 1,
            boxShadow: '0px 0px 4px 0px #FFDE48',
            borderColor: '#FFDE48A0',
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 40,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minHeight: 40,
        },
      },
    },
    MuiMenu: {
      defaultProps: {
        transformOrigin: { horizontal: 'right', vertical: 'top' },
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
      },
    },
  },
  typography: {
    fontFamily: 'Nunito',
    button: { fontWeight: 700, textTransform: 'none' },
  },
  palette: {
    primary: {
      main: '#FFDE48',
    },
    secondary: {
      main: '#FC9669',
    },
    info: {
      main: '#3FB2FF',
      light: '#00CBFF',
      dark: '#0071BC',
    },
    action: {
      active: '#CECECE',
    },
  },
});

const Theme = ({ children }: any) => {
  return (
    <ThemeProvider theme={responsiveFontSizes(appTheme)}>
      <LocalizationProvider dateAdapter={DateAdapter}>{children}</LocalizationProvider>
    </ThemeProvider>
  );
};

export default Theme;
