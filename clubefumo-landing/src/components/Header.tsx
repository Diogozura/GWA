'use client';

import { AppBar, Toolbar, Typography, Box, Select, MenuItem } from '@mui/material';
import { motion } from 'framer-motion';

type Props = {
  lang: string;
  setLang: (value: 'en' | 'es' | 'ca' | 'it') => void;
};

export default function Header({ lang, setLang }: Props) {
  return (
    <motion.div initial={{ y: -40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
          <Typography variant="h6" fontWeight="bold">
            SmokeClub
          </Typography>

          <Box>
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              size="small"
              sx={{ color: 'white', borderColor: 'white' }}
            >
              <MenuItem value="en">🇬🇧 EN</MenuItem>
              <MenuItem value="es">🇪🇸 ES</MenuItem>
              <MenuItem value="ca">🇨🇦 CA</MenuItem>
              <MenuItem value="it">🇮🇹 IT</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
