import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#f5f5f5',
    },
    background: {
      default: '#111',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#fff',
      secondary: '#ccc',
    },
  },
  typography: {
    fontFamily: 'Exo, sans-serif',
  },
   components: {
    MuiTextField: {
      defaultProps: {
        variant: 'filled',
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
          '&.Mui-focused': {
            backgroundColor: '#ffffff',
          },
        },
        input: {
          color: '#000000',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000000',
          '&.Mui-focused': {
            color: '#000000',
          },
        },
      },
    },
  },
});

export default theme;
