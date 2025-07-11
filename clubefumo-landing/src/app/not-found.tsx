// app/not-found.tsx
'use client';

import { Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function NotFound() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: '#111',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                p: 4,
            }}
        >
            {/* LOGO */}
            <Box
                component="img"
                src="/GWA_logo1.png" // <- ajuste para o caminho correto da sua logo
                alt="GWA Logo"
                sx={{
                    width: 120,
                    mb: 4,
                }}
            />
            <Typography variant="h2" gutterBottom>
                404
            </Typography>
            <Typography variant="h5" gutterBottom>
                 Página no encontrada 😢
            </Typography>
            <Typography variant="body1" gutterBottom>
                parece que has llegado a un lugar que no existe.
            </Typography>

            <Button
                component={Link}
                href="/"
                variant="contained"
                sx={{ mt: 3, backgroundColor: '#ffa500', color: '#111', fontWeight: 'bold' }}
            >
                Volver al inicio
            </Button>
        </Box>
    );
}
