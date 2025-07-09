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
    fontFamily: 'Inter, sans-serif',
  },
});

export default theme;
