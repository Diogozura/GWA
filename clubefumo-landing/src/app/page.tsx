'use client';

import React, { useEffect, useState } from 'react';
import { motion, } from 'framer-motion';
import {
  Container,
  Typography,
  Button,
  Box,
  Stack,
  Grid,
  useTheme,
  Fab,
} from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormContact from '@/components/FormContact';
import ScrollImageShowcase from '@/components/ScrollImageShowcase';
import CookieConsent from '@/components/CookieConsent';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCannabis, faComment, faDoorOpen, faJoint, faMapLocationDot, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import InfiniteCarousel from '@/components/CarroselInfinito';


export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [lang, setLang] = useState<'en' | 'es' | 'ca' | 'it'>('en');
  interface Translations {
    age_title?: string;
    yes?: string;
    no?: string;
    welcome?: string;
    description?: string;
    who_we_are?: string;
    about_description?: string;
    partners_title?: string;
    headline?: string;
    subheadline?: string;
    name?: string;
    email?: string;
    phone?: string;
    how_found_us?: string;
    member_name?: string;
    why_join?: string;
    submit?: string;
    [key: string]: string | undefined;
  }
  const [visible, setVisible] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [t, setT] = useState<Translations>({});

  useEffect(() => {
    fetch(`/locales/${lang}.json`)
      .then(res => res.json())
      .then(setT);
  }, [lang]);

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age_verified');
    if (verified === 'true') setAgeVerified(true);
    setHydrated(true);
  }, []);


  if (!hydrated) return null;

  if (!ageVerified) {
    return (
      <>
        <Header open={true} lang={lang} setLang={setLang} />
        <Container maxWidth="sm" sx={{ height: '80vh', display: 'grid', alignItems: 'center', textAlign: 'center', py: 12 }}>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography variant={theme.breakpoints.down('sm') ? 'h5' : 'h3'} gutterBottom>{t.age_title}</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
              <Button variant="contained" color="primary" onClick={() => setAgeVerified(true)}>{t.yes}</Button>
              <Button variant="outlined" color="secondary" onClick={() => alert("Access denied")}>{t.no}</Button>
            </Stack>
            <Box sx={{ textAlign: 'left', mt: 4 }}>
              <motion.img
                src="/GWA_only_water.svg"
                alt="GWA Logo"
                style={{
                  width: '100%',
                  maxWidth: 300,
                  opacity: 0.8,
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  height: 'auto',
                }}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05, rotate: -5 }}
                whileTap={{ scale: 0.95, rotate: 5 }}
              />
            </Box>
          </motion.div>
        </Container>
        <CookieConsent

        />
        <Footer />
      </>

    );
  }



  return (
    <>
      <Header open={false} lang={lang} setLang={setLang} />

      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="start"
            mb={4}
            sx={{
              backgroundColor: '#111',
              paddingTop: { xs: 10, md: 16 },
              position: 'relative',
              
            }}
          >
            {/* Fundo branco com background image e glow */}
            <Box
              sx={{
                position: 'relative',
                width: { xs: '90%', md: '70%' },
                maxWidth: 900,
                minHeight: 400,
                backgroundColor: '#fff',
                borderRadius: '24px',
                paddingTop: '140px',
                paddingBottom: '40px',
                px: { xs: 2, md: 4 },
                zIndex: 1,

                // Adicionado:
                backgroundImage: 'url(/bg_main_logo.png)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow: '0 0 25px 4px #ff3399',
              }}
            >
              {/* conteúdo interno opcional */}
            </Box>

            {/* Logo principal por cima */}
            <Box
              component="img"
              src="/GWA_Logo1.png"
              alt="GWA Logo"
              sx={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                top: {
                  xs: '35px',
                  sm: '30px',
                  md: '60px',
                  lg: '80px',
                  xl: '100px',
                },
                width: {
                  xs: '90%',
                  sm: '60%',
                  md: '35%',
                  lg: '45%',
                  xl: '30%',
                },
                zIndex: 2,
              }}
            />
          </Box>
        </motion.div>


        <Typography variant="h6" color="text.secondary">{t.description}</Typography>
        <Button
          component="a"
          href="#formcontact"
          variant="contained"
          endIcon={<FontAwesomeIcon icon={faPenToSquare} />}
          sx={{
            background: 'linear-gradient(90deg, #8f00ff, #a300d6)',
            color: '#FFA500', // ou '#FFB300' para mais amarelo
            fontWeight: 600,
            borderRadius: '12px',
            px: 3,
            py: 1.5,
            boxShadow: '0 0 0 2px #222', // contorno escuro
            textTransform: 'uppercase',
            '&:hover': {
              background: 'linear-gradient(90deg, #9b00ff, #b300ff)',
              boxShadow: '0 0 0 2px #444',
            },
          }}
        >
          Request Invitation
        </Button>
      </Container>

      {/* Brands Section */}
      <Box sx={{ backgroundColor: '#111' }}>
        <Typography
          variant="h6"
          component={'h3'}
          gutterBottom
          sx={{ textAlign: 'center', color: 'white', mb: 2, textTransform: 'lowercase' }}
        >
          {t.partners_title}
        </Typography>

        <InfiniteCarousel images={[
          '/brands/cola.png',
          '/brands/fanta.png',
          '/brands/raw.png',
          '/brands/stoners.png',
          '/brands/estathe.png',
          '/brands/puffco.png',
          '/brands/riptips.png',
          '/brands/Snail.png',
        ]}
          speed={30}     // pixels/segundo
          imgHeight={{ xs: 20, md: 25, }} // altura das imagens
          gap={{ xs: 3, md: 7 }}// espaçamento horizontal entre as imagens 
        />

      </Box>




      {/* Showcase Section */}
      <Container maxWidth="lg" sx={{ py: 2, textAlign: 'center' }}>

        <ScrollImageShowcase t={Object.fromEntries(Object.entries(t).map(([k, v]) => [k, v ?? ""]))} />
      </Container>



      <Box height={{ xs: 'auto', md: '80vh' }}>
        {/* Brands 2 Section */}
        <Box sx={{ backgroundColor: '#111' }}>
          <InfiniteCarousel images={[
            '/glass/glass_1.png',
            '/glass/glass_2.png',
            '/glass/glass_3.png',
            '/glass/glass_4.png',
            '/glass/glass_5.png',
          ]}
            reverse={true}
            speed={50}     // pixels/segundo
            imgHeight={{ xs: 150, md: 300, }} // altura das imagens
            gap={{ xs: 3, md: 5 }}// espaçamento horizontal entre as imagens 
          />
        </Box>

        {/* Brands 2 Section */}
        <Box sx={{ backgroundColor: '#111' }}>

          <InfiniteCarousel images={[
            '/merch/merch_1.png',
            '/merch/merch_2.png',
            '/merch/merch_3.png',
            '/merch/merch_4.png',
          ]}
            reverse={false}
            speed={50}     // pixels/segundo
            imgHeight={{ xs: 150, md: 300, }} // altura das imagens
            gap={{ xs: 3, md: 5 }}// espaçamento horizontal entre as imagens 
          />
        </Box>

      </Box>

      <Box
        sx={{
          position: 'relative',
          height: { xs: 'auto', md: '100vh' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
        id="formcontact"
      >
        {/* Imagem de fundo coberta pela section */}
        <Box
          component="img"
          src="/GWA_fundo_form.png"
          alt="Fundo GWA"
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            pointerEvents: 'none',
          }}
        />


        <Container maxWidth="lg" id="formcontact" sx={{ position: 'relative', zIndex: 2, pt: 12 }}>
          <Box
            sx={{
              background: 'linear-gradient(to right, #ff5e00, #ffc800)',
              borderRadius: 4,
              p: { xs: 4, md: 6 },
              color: 'white',
              mt: 6,
            }}
          >
            <Grid container spacing={4}>

              <Grid size={{ xs: 12 }} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant={theme.breakpoints.down('sm') ? 'h5' : 'h3'} fontWeight="bold" gutterBottom>
                  <FontAwesomeIcon icon={faDoorOpen} /> {t.headline}
                </Typography>
                <Typography variant="h5" fontWeight={300} gutterBottom>
                  {t.subheadline} <FontAwesomeIcon icon={faJoint} />
                </Typography>
              </Grid>
              {/* Textos e Form */}
              <Grid size={{ xs: 12, md: 6 }}>


                <Typography variant="body2" color="rgba(255,255,255,0.7)" mb={4}>
                  Complete the form below to request an invitation to GWA Social Club.
                </Typography>

                <FormContact t={Object.fromEntries(Object.entries(t).map(([k, v]) => [k, v ?? ""]))} lang={lang} />
              </Grid>


              <Grid size={{ xs: 12, md: 6 }}>
                <Box>
                  <Typography variant="h6" fontWeight="bold" mb={1}>
                    GWA Social Club <FontAwesomeIcon icon={faCannabis} />
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)" mb={1}>
                    <FontAwesomeIcon icon={faMapLocationDot} />  Carrer de Sant Antoni Maria Claret, 25<br />
                    Gràcia, 08037 - Barcelona
                  </Typography>
                  <Typography variant="body2" color="rgba(255,255,255,0.8)" mb={2}>
                    <FontAwesomeIcon icon={faComment} /> info@gwasocialclub.es
                  </Typography>

                  <Box
                    component="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.610671155578!2d2.1648533!3d41.4042607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a3e2c57cd0bd%3A0x3fe09c75bd92c2c7!2sGWA%20Social%20Club!5e0!3m2!1ses!2ses!4v1752144497798!5m2!1ses!2ses"
                    width="100%"
                    height="400"
                    sx={{
                      border: 0,
                      borderRadius: 2,
                      mb: 2,
                      height: { xs: 300, md: 345 },
                    }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <Button
                    variant="contained"
                    color="secondary"
                    href="https://maps.app.goo.gl/hH2L3ZyPNVACKfdb6"
                    target="_blank"
                    fullWidth
                    startIcon={<FontAwesomeIcon icon={faMapLocationDot} />}
                    sx={{
                      mt: 1,
                      background: '#ffa500',
                      color: '#111',
                      fontWeight: 'bold',
                      '&:hover': {
                        background: '#ff9900',
                      },
                    }}
                  >
                    open in google maps
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {visible ? (
        <Fab
          color="secondary"
          size="small"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: theme.spacing(4),
            right: theme.spacing(4),
            zIndex: 999,
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      ) : null}
      <CookieConsent />
      <Footer />
    </>
  );
}
