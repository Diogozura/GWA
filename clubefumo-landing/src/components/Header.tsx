'use client';

import { AppBar, Toolbar, Box, Select, MenuItem, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';

type Props = {
  lang: string;
  setLang: (value: 'en' | 'es' | 'ca' | 'it') => void;
};

export default function Header({ lang, setLang }: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2, py: 1 }}>
          {/* Logo e nome */}
          <Box display="flex" alignItems="center" gap={1}>
            <img
              src="/GWA_Logo2.png" // Coloque sua logo em /public/logo.svg ou logo.png
              alt="Logo SmokeClub"
              width={80}
              height={80}
            />
            {!isMobile && (
              <Box fontWeight="bold" fontSize="1.2rem" color="white">
                GWA Social Club
              </Box>
            )}
          </Box>

          {/* Seletor de idioma com bandeiras */}
          <Box>
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value as 'en' | 'es' | 'ca' | 'it')}
              size="small"
              variant="outlined"
              sx={{
                color: 'white',
                borderColor: 'white',
                '.MuiOutlinedInput-notchedOutline': {
                  borderColor: 'white',
                },
                '& .MuiSvgIcon-root': {
                  color: 'white',
                },
                minWidth: 100,
              }}
            >
              <MenuItem value="en">🇬🇧 English</MenuItem>
              <MenuItem value="es">🇪🇸 Español</MenuItem>
              <MenuItem value="ca">🇨🇦 Català</MenuItem>
              <MenuItem value="it">🇮🇹 Italiano</MenuItem>
            </Select>
          </Box>
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
