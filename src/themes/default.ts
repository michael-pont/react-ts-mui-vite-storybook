import { ThemeOptions } from '@mui/material';

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#446d96',
    },
    secondary: {
      main: '#b0bec5',
    },
  },
  typography: {
    fontFamily: 'Source Sans Pro',
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false,
      },
    },
  },
};
