'use client';

import { Box, Typography, Container } from '@mui/material';

export default function PoliticaCookies() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#111', color: 'white', px: 3 }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom textAlign="center">
          Política de Cookies
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
          Este sitio web utiliza cookies propias y de terceros para mejorar tu experiencia de navegación, personalizar contenido y analizar el tráfico.
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
          Las cookies se clasifican en dos categorías:
        </Typography>
        <ul style={{ textAlign: 'center', listStyle: 'none', paddingLeft: 0 }}>
          <li><strong>Esenciales:</strong> necesarias para el funcionamiento básico del sitio. No pueden desactivarse.</li>
          <li><strong>Analíticas:</strong> nos ayudan a comprender cómo se utiliza el sitio y mejorar su rendimiento.</li>
        </ul>
        <Typography variant="body1" textAlign="center" sx={{ mt: 2 }}>
          Puedes gestionar tu consentimiento en cualquier momento desde la configuración de cookies disponible en la parte inferior del sitio.
        </Typography>
        <Typography variant="body2" textAlign="center" sx={{ mt: 4, color: 'gray' }}>
          Para más información, consulta nuestra Política de Privacidad.
        </Typography>
      </Container>
    </Box>
  );
}
