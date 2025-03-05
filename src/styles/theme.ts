//src/styles/theme.ts

import { createTheme } from '@mui/material/styles';

// Define the light theme palette
const lightPalette = {
  primary: {
    main: '#0C4FF7', // pink
  },
  secondary: {
    main: '#0C4FF7', // pink
  },
  background: {
    default: '#fafafa', // light background
    paper: '#ffffff', // paper background
  },
  text: {
    primary: '#000000', // black text
    secondary: '#555555', // gray text
  },
  action: {
    hover: 'rgba(0, 0, 0, 0.04)',
    selected: 'rgba(0, 0, 0, 0.08)',
  },
};

// Define the dark theme palette (slightly lighter dark colors)
const darkPalette = {
  primary: {
    main: '#0C9AF7', // light pink
  },
  secondary: {
    main: '#0C9AF7', // pink
  },
  background: {
    default: '#1a1a1a', // slightly lighter than #121212
    paper: '#2c2c2c', // lighter paper background
  },
  text: {
    primary: '#e0e0e0', // light white text (instead of pure white)
    secondary: '#a0a0a0', // lighter gray text
  },
  action: {
    hover: 'rgba(255, 255, 255, 0.12)',
    selected: 'rgba(255, 255, 255, 0.16)',
  },
};

// Create the theme
export const lightTheme = createTheme({
  palette: {
    mode: 'light', // Set the mode to 'light'
    ...lightPalette, // Add light palette colors
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Set global font family
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: lightPalette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: lightPalette.secondary.main,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.2s ease',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark', // Set the mode to 'dark'
    ...darkPalette, // Add dark palette colors
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Set global font family
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: darkPalette.primary.main,
          textDecoration: 'none',
          '&:hover': {
            textDecoration: 'underline',
            color: darkPalette.secondary.main,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'background-color 0.2s ease',
        },
      },
    },
  },
});