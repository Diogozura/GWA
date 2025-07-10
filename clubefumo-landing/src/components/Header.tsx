'use client';

import { AppBar, Toolbar, Box, Select, MenuItem, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import React from 'react';

type Props = {
  lang: string;
  open: boolean;
  setLang: (value: 'en' | 'es' | 'ca' | 'it') => void;
};

export default function Header({ open, lang, setLang }: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { scrollYProgress } = useScroll();

  // Transição: imagem aparece com o scroll
  const logoOpacity = useTransform(scrollYProgress, [0.01, 0.06], [0, 1]);
  const logoScale = useTransform(scrollYProgress, [0.01, 0.06], [0.6, 1]);


  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999,
        background: 'rgba(17, 17, 17, 0.95)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            py: 1,
            px: 2,
            minHeight: { xs: 64, md: 80 },
          }}
        >
          <Box display="flex"  alignItems="center" justifyContent="center">
            <motion.img
              src="/GWA_logo_header.svg"
              alt="Logo GWA social club"
              width={60}
              height={60}
             
              style={{
                display: open ? 'none' : 'block',
                opacity: logoOpacity as MotionValue<number>,
                scale: logoScale as MotionValue<number>,
              }}
            />
          </Box>

          {!isMobile && (
            <Box sx={{ position: 'absolute', right: 16 }}>
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
          )}
        </Toolbar>
      </AppBar>
    </motion.div>
  );
}
