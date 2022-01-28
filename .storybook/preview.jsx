import { CssBaseline } from '@mui/material';
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from '@mui/material/styles';
import { themeOptions } from '../src/themes/default';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withThemeProvider = (Story, context) => {
  const theme = createTheme(themeOptions);
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Story {...context} />
      </StyledEngineProvider>
    </ThemeProvider>
  );
};
export const decorators = [withThemeProvider];
