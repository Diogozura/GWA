'use client';

import { AppBar, Toolbar, Box, Select, MenuItem, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

type Props = {
  lang: string;
  setLang: (value: 'en' | 'es' | 'ca' | 'it') => void;
};

export default function Header({ lang, setLang }: Props) {
  const isMobile = useMediaQuery('(max-width:600px)');
  const { scrollYProgress } = useScroll();

  // Transições de logo grande para pequena
  const bigLogoScale = useTransform(scrollYProgress, [0, 0.1], [1, 0.6]);
  const bigLogoOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);
  const smallLogoOpacity = useTransform(scrollYProgress, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999,
        background: 'rgba(17, 17, 17, 0.95)', // fundo escuro semi-transparente
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
          <Box position="relative" display="flex" alignItems="center" justifyContent="center">
            {/* Logo grande (some com scroll) */}
            <motion.img
              src="/GWA_Logo1.png"
              alt="Logo Grande"
              style={{
                position: 'absolute',
                scale: bigLogoScale,
                opacity: bigLogoOpacity,
              }}
              width={80}
              height={80}
            />

            {/* Logo pequena (aparece com scroll) */}
            <motion.img
              src="/GWA_Logo2.png"
              alt="Logo Pequena"
              style={{
                opacity: smallLogoOpacity,
              }}
              width={60}
              height={60}
            />
          </Box>

          {/* Idioma no canto direito */}
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
