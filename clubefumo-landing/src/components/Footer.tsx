'use client';

import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box sx={{ py: 4, backgroundColor: '#111', color: '#fff', mt: 8 }}>
        <Container maxWidth="md">
          <Stack direction="row" justifyContent="space-between" alignItems="center" flexWrap="wrap">
            <Typography variant="body2">© {new Date().getFullYear()} SmokeClub. All rights reserved.</Typography>
            <Stack direction="row" spacing={1}>
              <IconButton href="https://instagram.com" target="_blank" color="inherit">
                <InstagramIcon />
              </IconButton>
              <IconButton href="mailto:contact@smokeclub.com" color="inherit">
                <EmailIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}
