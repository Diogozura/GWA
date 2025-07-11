'use client';

import { Box, Typography, Container } from '@mui/material';

export default function PoliticaPrivacidad() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#111', color: 'white', py: 8, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom textAlign="center">
          Política de Privacidad
        </Typography>

        <Typography variant="body1" sx={{ mt: 4 }}>
          En <strong>gwasocialclub.es</strong>, valoramos tu privacidad y nos comprometemos a proteger tus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica de Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD).
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          1. Responsable del tratamiento
        </Typography>
        <Typography variant="body1">
          El responsable del tratamiento de los datos es GWA Social Club. Para cualquier consulta puedes escribirnos a: <strong>info@gwasocialclub.es</strong>
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          2. Datos personales que recopilamos
        </Typography>
        <Typography variant="body1">
          Podemos recopilar los siguientes datos:
        </Typography>
        <ul>
          <li>Nombre y apellidos</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Dirección IP y datos de navegación</li>
          <li>Cualquier otra información facilitada a través de formularios del sitio</li>
        </ul>

        <Typography variant="h5" sx={{ mt: 4 }}>
          3. Finalidad del tratamiento
        </Typography>
        <Typography variant="body1">
          Utilizamos tus datos para:
        </Typography>
        <ul>
          <li>Gestionar tu solicitud de ingreso al club</li>
          <li>Comunicarnos contigo vía email o teléfono</li>
          <li>Enviar información relevante (sin SPAM)</li>
          <li>Analizar el uso del sitio y mejorar la experiencia del usuario</li>
        </ul>

        <Typography variant="h5" sx={{ mt: 4 }}>
          4. Base legal
        </Typography>
        <Typography variant="body1">
          El tratamiento se basa en tu consentimiento, que puedes retirar en cualquier momento.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          5. Conservación de datos
        </Typography>
        <Typography variant="body1">
          Conservaremos tus datos durante el tiempo necesario para cumplir con la finalidad para la que fueron recogidos, o mientras no revoques tu consentimiento.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          6. Compartición de datos
        </Typography>
        <Typography variant="body1">
          No compartimos tus datos personales con terceros salvo por obligación legal o para servicios estrictamente necesarios para el funcionamiento del sitio web.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          7. Tus derechos
        </Typography>
        <Typography variant="body1">
          Puedes ejercer los siguientes derechos:
        </Typography>
        <ul>
          <li>Acceso a tus datos</li>
          <li>Rectificación de datos inexactos</li>
          <li>Supresión de tus datos</li>
          <li>Limitación u oposición al tratamiento</li>
          <li>Portabilidad de los datos</li>
        </ul>
        <Typography variant="body1">
          Para ejercer tus derechos, envíanos un email a <strong>info@gwasocialclub.es</strong>.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          8. Seguridad
        </Typography>
        <Typography variant="body1">
          Adoptamos las medidas técnicas y organizativas necesarias para garantizar la seguridad y confidencialidad de tus datos.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          9. Cambios en esta política
        </Typography>
        <Typography variant="body1">
          Podemos actualizar esta política para reflejar cambios legales o funcionales. La versión actualizada estará disponible en esta misma página.
        </Typography>

        <Typography variant="body2" sx={{ mt: 6 }} textAlign="center" color="gray">
          Última actualización: julio de 2025
        </Typography>
      </Container>
    </Box>
  );
}
