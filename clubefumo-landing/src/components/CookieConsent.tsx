'use client';

import { useEffect, useState } from 'react';
import { Box, Button, Typography, Stack, useMediaQuery, Container } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';

type CookieConsentTranslations = {
    cookies_privacy: string;
    cookies_consent: string;
    cookies_reject: string;
    cookies_accept: string;
};

export default function CookieConsent({t}: { t: CookieConsentTranslations }) {
    const [visible, setVisible] = useState(false);
    const isMobile = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        const accepted = localStorage.getItem('cookie_consent');
        if (!accepted) setVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'rejected');
        setVisible(false);
    };


    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.4 }}
                >
                    <Container maxWidth="md" >


                        <Box
                            sx={{
                                bottom: 0,
                                backgroundColor: '#111',
                                color: 'white',
                                px: { xs: 2, md: 4 },
                                display: 'grid',
                                justifyItems: 'center',
                                py: 3,
                                zIndex: 1300,
                                boxShadow: '0 -2px 10px rgba(0,0,0,0.5)',
                            }}
                        >
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {t.cookies_privacy}
                            </Typography>
                            <Typography variant="body2" color="gray" maxWidth="600px" mb={2}>
                                {t.cookies_consent}
                            </Typography>

                            <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                                <Button
                                    onClick={handleReject}
                                    variant="outlined"
                                    sx={{
                                        color: 'white',
                                        borderColor: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(255,255,255,0.1)',
                                        },
                                    }}
                                >
                                    {t.cookies_reject}
                                </Button>

                                <Button
                                    onClick={handleAccept}
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
                                    {t.cookies_accept}
                                </Button>
                            </Stack>
                        </Box>
                    </Container>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
