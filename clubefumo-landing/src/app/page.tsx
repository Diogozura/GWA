'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Stack,
  Grid,
  Card,
  CardContent
} from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [lang, setLang] = useState<'en' | 'es' | 'ca' | 'it'>('es');
  const [t, setT] = useState<any>({});

  useEffect(() => {
    fetch(`/locales/${lang}.json`)
      .then(res => res.json())
      .then(setT);
  }, [lang]);

  if (!ageVerified) {
    return (
      <Container maxWidth="sm" sx={{ textAlign: 'center', py: 12 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h3" gutterBottom>{t.age_title}</Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
            <Button variant="contained" color="primary" onClick={() => setAgeVerified(true)}>{t.yes}</Button>
            <Button variant="outlined" color="secondary" onClick={() => alert("Access denied")}>{t.no}</Button>
          </Stack>
        </motion.div>
      </Container>
    );
  }

  return (
    <>
    <Header lang={lang} setLang={setLang}/>
      {/* Hero Section */}
      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" gutterBottom>{t.welcome}</Typography>
          <Typography variant="h6" color="text.secondary">{t.description}</Typography>
          <Box mt={4}>
            <img
              src="https://assets.imgix.net/examples/kingfisher.jpg?auto=format&fit=crop&w=1200&h=600&blend=000000&blend-mode=multiply"
              alt="Hero"
              style={{ maxWidth: '100%', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}
            />
          </Box>
        </motion.div>
      </Container>

      {/* About Section */}
      <Container maxWidth="md" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h4" gutterBottom>{t.who_we_are}</Typography>
          <Typography variant="body1" color="text.secondary">
            {t.about_description}
          </Typography>
        </motion.div>
      </Container>

      {/* Partners Section */}
      <Container maxWidth="lg" sx={{ py: 8, textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" gutterBottom>{t.partners_title}</Typography>
          <Grid container spacing={4} justifyContent="center" mt={2}>
            {[1, 2, 3].map((item) => (
              <Grid item xs={6} sm={4} md={2} key={item}>
                <motion.img
                  src={`/img/partner${item}.png`}
                  alt={`Partner ${item}`}
                  style={{ width: '100%', maxHeight: 60, objectFit: 'contain', opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.05 }}
                />
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Form Section */}
      <Container maxWidth="md" sx={{ py: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h4" gutterBottom>{t.headline}</Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>{t.subheadline}</Typography>
          <Typography variant="body2" color="text.secondary" mb={4}>{t.form_intro}</Typography>

          <Box component="form">
            <Stack spacing={3}>
              <TextField
                label={t.name}
                name="name"
                fullWidth
                variant="outlined"
              />
              <TextField
                label={t.email}
                name="email"
                fullWidth
                variant="outlined"
                type="email"
              />
              <TextField
                label={t.why_join}
                name="why"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
              />
              <TextField
                label={t.favorite_smoke}
                name="smoke"
                fullWidth
                variant="outlined"
              />
              <TextField
                label={t.three_words}
                name="threeWords"
                fullWidth
                variant="outlined"
              />
              <Button variant="contained" size="large" type="submit">
                {t.submit}
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
      <Footer/>
    </>
  );
}
