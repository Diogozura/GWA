'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Head from './head'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head />
      <body>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
              
            </ThemeProvider>
          </body>
        </html>
        );
}
