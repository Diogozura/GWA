'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import Head from './head'
import './globals.css'; // ou '../styles/global.css', dependendo de onde estiver
import { Exo } from 'next/font/google';

const exo = Exo({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '700'], // coloque os pesos que você realmente usa
});
// pages/_app.tsx
import '@/lib/fontawesome'; // certifique-se que o caminho está certo

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <Head />
      <body className={exo.className}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {children}
              
            </ThemeProvider>
          </body>
        </html>
        );
}
