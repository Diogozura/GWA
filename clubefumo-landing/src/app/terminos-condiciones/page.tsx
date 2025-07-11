'use client';

import { Box, Container, Typography } from '@mui/material';

export default function TerminosCondiciones() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#111', color: 'white', py: 8, px: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="md">
        <Typography variant="h4" gutterBottom textAlign="center">
          Términos y Condiciones de Uso
        </Typography>

        <Typography variant="body1" sx={{ mt: 4 }}>
          Al acceder y utilizar el sitio <strong>gwasocialclub.es</strong>, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo, te pedimos que no utilices este sitio web.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          1. Objeto
        </Typography>
        <Typography variant="body1">
          El presente documento regula el uso del sitio web y el acceso a nuestros servicios, contenido e información relacionada con el GWA Social Club.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          2. Acceso y uso del sitio
        </Typography>
        <Typography variant="body1">
          El acceso al sitio es gratuito. Sin embargo, ciertos contenidos o servicios pueden estar restringidos a miembros aprobados por el club. El usuario se compromete a hacer un uso adecuado del sitio, sin incurrir en actividades ilícitas o contrarias a la buena fe.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          3. Requisitos de edad
        </Typography>
        <Typography variant="body1">
          Este sitio está destinado exclusivamente a mayores de 18 años. Al acceder, declaras tener la edad legal requerida.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          4. Propiedad intelectual
        </Typography>
        <Typography variant="body1">
          Todos los contenidos (textos, imágenes, logos, marcas, etc.) son propiedad de GWA Social Club o de terceros autorizados. Está prohibida su reproducción o distribución sin consentimiento previo.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          5. Política de privacidad
        </Typography>
        <Typography variant="body1">
          El tratamiento de los datos personales se rige por nuestra <strong>Política de Privacidad</strong>, disponible en esta misma web.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          6. Cookies
        </Typography>
        <Typography variant="body1">
          Utilizamos cookies esenciales y analíticas para mejorar tu experiencia de navegación. Puedes gestionar tus preferencias desde el aviso de cookies.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          7. Modificaciones
        </Typography>
        <Typography variant="body1">
          GWA Social Club se reserva el derecho de modificar estos términos en cualquier momento. Las modificaciones estarán disponibles en esta misma página.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          8. Limitación de responsabilidad
        </Typography>
        <Typography variant="body1">
          No nos hacemos responsables por posibles errores u omisiones en los contenidos ni por daños derivados del uso del sitio web.
        </Typography>

        <Typography variant="h5" sx={{ mt: 4 }}>
          9. Legislación aplicable
        </Typography>
        <Typography variant="body1">
          Estos términos se rigen por la legislación española y europea. Cualquier conflicto será resuelto ante los tribunales de España.
        </Typography>

        <Typography variant="body2" sx={{ mt: 6 }} textAlign="center" color="gray">
          Última actualización: julio de 2025
        </Typography>
      </Container>
    </Box>
  );
}
