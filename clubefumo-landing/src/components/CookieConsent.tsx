'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack, useMediaQuery, Container, Link } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { initGA } from '../types/gtag';


export default function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');
    const [consentGiven, setConsentGiven] = useState(false);
    const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);


    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            setVisible(true);
        } else {
            const parsed = JSON.parse(consent);
            if (parsed.analytics) {
                initGA();
            }
            setConsentGiven(true);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie_consent', JSON.stringify({ essential: true, analytics: true }));
        initGA(); // Ativa o Google Analytics
        setVisible(false);
        // Aqui você pode ativar scripts analíticos, ex: Google Analytics
    };

    const handleRejectAll = () => {
        localStorage.setItem('cookie_consent', JSON.stringify({ essential: true, analytics: false }));
        setVisible(false);
    };

    const handleSavePreferences = () => {
        const consent = {
            essential: true,
            analytics: analyticsEnabled,
        };
        localStorage.setItem('cookie_consent', JSON.stringify(consent));
        setShowPreferences(false);
        setVisible(false);
        setConsentGiven(true);

        if (analyticsEnabled) {
            initGA();
        }
    };
    return (
        <>


            {visible && (

                <Container maxWidth="md" >
                    <Box
                        sx={{
                            position: 'fixed',
                            bottom: 24,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: '#111',
                            color: 'white',
                            px: { xs: 2, md: 4 },
                            py: 3,
                            zIndex: 1300,
                            boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
                            borderRadius: 2,
                            maxWidth: '90vw',
                            width: '100%',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold" gutterBottom textAlign="center">
                            Valoramos tu privacidad
                        </Typography>

                        <Typography variant="body2" textAlign="center" color="gray" mb={2}>
                            Utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio, y cookies analíticas para entender el uso del mismo.
                            Puedes elegir aceptar o rechazar estas cookies.
                        </Typography>

                        <Stack
                            direction={isMobile ? 'column' : 'row'}
                            spacing={2}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Button
                                onClick={handleRejectAll}
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'white',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,0.1)',
                                    },
                                }}
                            >
                                Solo esenciales
                            </Button>

                            <Button
                                onClick={handleAcceptAll}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#ffa500',
                                    color: '#111',
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        backgroundColor: '#ff9900',
                                    },
                                }}
                            >
                                Aceptar todas
                            </Button>
                            <Button
                                onClick={() => setShowPreferences(true)}
                                variant="text"
                                sx={{ color: '#aaa', textTransform: 'none', fontSize: '0.8rem' }}
                            >
                                Configurar preferencias
                            </Button>
                        </Stack>

                        <Typography
                            variant="caption"
                            display="block"
                            textAlign="center"
                            mt={2}
                            color="gray"
                        >
                            Puedes leer más en nuestra{' '}
                            <Link href="/politica-privacidad" underline="hover" color="inherit">
                                Política de Privacidad
                            </Link>{' '}
                            ·{' '}
                            <Link href="/cookies" underline="hover" color="inherit">
                                Política de Cookies
                            </Link>{' '}
                            ·{' '}
                            <Link href="/terminos-condiciones" underline="hover" color="inherit">
                                Términos y Condiciones
                            </Link>
                        </Typography>
                    </Box>
                </Container>

            )}

            {!visible && consentGiven && (
                <Box
                    onClick={() => setVisible(true)}
                    sx={{
                        position: 'fixed',
                        bottom: 16,
                        left: 16,
                        zIndex: 1200,
                        backgroundColor: '#222',
                        color: '#fff',
                        px: 2,
                        py: 1,
                        borderRadius: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        boxShadow: '0 2px 6px rgba(0,0,0,0.4)',
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }}
                >
                    <FontAwesomeIcon icon={faCookieBite} />
                    <Typography variant="caption">Cookies accepted</Typography>
                </Box>
            )}
            {showPreferences && (
                <Box
                    sx={{
                        position: 'fixed',
                        bottom: 24,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#111',
                        color: 'white',
                        px: 4,
                        py: 4,
                        zIndex: 1400,
                        boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
                        borderRadius: 2,
                        maxWidth: 400,
                        width: '90vw',
                        textAlign: 'center',
                    }}
                >
                    <Typography variant="h6" gutterBottom>Preferencias de cookies</Typography>
                    <Typography variant="body2" color="gray" mb={2}>
                        Selecciona qué tipos de cookies deseas permitir.
                    </Typography>

                    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mb={3}>
                        <input
                            type="checkbox"
                            id="analytics"
                            checked={analyticsEnabled}
                            onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                            style={{ transform: 'scale(1.2)' }}
                        />
                        <label htmlFor="analytics">Cookies analíticas</label>
                    </Stack>

                    <Stack direction="row" spacing={2} justifyContent="center">
                        <Button
                            onClick={() => {
                                setShowPreferences(false);
                                setVisible(true);
                            }}
                            variant="outlined"
                            sx={{ color: 'white', borderColor: 'white' }}
                        >
                            Cancelar
                        </Button>

                        <Button
                            onClick={handleSavePreferences}
                            variant="contained"
                            sx={{
                                backgroundColor: '#ffa500',
                                color: '#111',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: '#ff9900',
                                },
                            }}
                        >
                            Guardar preferencias
                        </Button>
                    </Stack>
                </Box>
            )}
        </>
    );
}
