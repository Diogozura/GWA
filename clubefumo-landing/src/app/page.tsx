'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Container,
  Typography,
  Button,
  TextField,
  Box,
  Stack,
  Grid,
  MenuItem,
} from '@mui/material';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false);
  const [lang, setLang] = useState<'en' | 'es' | 'ca' | 'it'>('es');
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
    form_intro?: string;
    name?: string;
    email?: string;
    phone?: string;
    how_found_us?: string;
    member_name?: string;
    why_join?: string;
    submit?: string;
    [key: string]: string | undefined;
  }

  const [t, setT] = useState<Translations>({});

  useEffect(() => {
    fetch(`/locales/${lang}.json`)
      .then(res => res.json())
      .then(setT);
  }, [lang]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    howFoundUs: "",
    memberName: "",
    why: "",
  });

  const [sending, setSending] = React.useState(false);

  if (!ageVerified) {
    return (
      <Container maxWidth="sm" sx={{ height: '100vh', display: 'grid', alignItems: 'center', textAlign: 'center', py: 12 }}>
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    try {
      await fetch("https://v1.nocodeapi.com/gwa/google_sheets/ilwfHHMKVdprsqbV?tabId=contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [
            formData.name,
            formData.email,
            formData.phone,
            formData.howFoundUs,
            formData.memberName,
            formData.why,
            new Date().toLocaleString(),
            lang,
          ]
        ]),
      });
    } catch (err) {
      console.error(err);
      alert("Erro ao enviar.");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <Header lang={lang} setLang={setLang} />
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
              <Grid size={{ xs: 6, sm: 4, md: 2 }} key={item}>
                <motion.img
                  src={`/GWA_logo${item}.png`}
                  alt={`Partner ${item}`}
                  style={{ width: '100%', maxHeight: 120, objectFit: 'contain', opacity: 0.8 }}
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

          <Box component="form" onSubmit={handleSubmit}>
            <Stack spacing={3}>
              <TextField
                label={t.name}
                name="name"
                fullWidth
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <TextField
                label={t.email}
                name="email"
                fullWidth
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <TextField
                label={t.phone}
                name="phone"
                fullWidth
                variant="outlined"
                value={formData.phone}
                onChange={handleChange}
              />
              <TextField
                label={t.how_found_us}
                name="howFoundUs"
                select
                fullWidth
                value={formData.howFoundUs}
                onChange={handleChange}
                required
              >
                <MenuItem value="social">Instagram / Social Media</MenuItem>
                <MenuItem value="web">Google / Website</MenuItem>
                <MenuItem value="friend">Referred by a Member</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>

              {formData.howFoundUs === "friend" && (
                <TextField
                  label={t.member_name}
                  name="memberName"
                  fullWidth
                  variant="outlined"
                  value={formData.memberName}
                  onChange={handleChange}
                  required
                />
              )}

              <TextField
                label={t.why_join}
                name="why"
                multiline
                rows={3}
                fullWidth
                variant="outlined"
                value={formData.why}
                onChange={handleChange}
              />

              <Button
                variant="contained"
                size="large"
                type="submit"
                disabled={sending}
              >
                {sending ? "Enviando..." : t.submit}
              </Button>
            </Stack>
          </Box>
        </motion.div>
      </Container>
      <Footer />
    </>
  );
}
