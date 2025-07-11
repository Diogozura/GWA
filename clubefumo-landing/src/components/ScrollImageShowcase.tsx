'use client';

import { faBagShopping, faBong, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MotionBox = motion(Box);


interface CreativityScrollProps {
  t: Record<string, string>;
}

export default function CreativityScroll({ t }: CreativityScrollProps) {
  const ref = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  // use t para traduzir os títulos
  const stepsBase = [
    {
      iconSvg: '',
      icon: <FontAwesomeIcon icon={faBong} />,
      image: '/hero/hero_2.png',
    },
    {
      iconSvg: '/GWA_Puff_icon.svg',
      icon: '',
      image: '/hero/hero_1.png',
    },
    {
      iconSvg: '',
      icon: <FontAwesomeIcon icon={faBagShopping} />,
      image: '/hero/hero_3.png',
    },
    {
      iconSvg: '',
      icon: <FontAwesomeIcon icon={faSeedling} />,
      image: '/hero/hero_4.png',
    },
  ];

  // Mapeando dinamicamente os títulos e descrições
  const steps = stepsBase.map((step, index) => ({
    ...step,
    title: t[`hero_title${index + 1}`] ?? `Step ${index + 1}`,
    description: t[`hero_subtitle${index + 1}`] ?? '',
  }));

  const progress = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  useMotionValueEvent(progress, 'change', (v) => {
    const nextIndex = Math.floor(v);
    if (nextIndex !== currentIndex) setCurrentIndex(nextIndex);
  });

  // Pré-carrega as imagens quando `steps` mudar
  useEffect(() => {
    steps.forEach(section => {
      const img = new Image();
      img.src = section.image;
    });
  }, [steps]);
  return (
    <Box ref={ref} sx={{ position: 'relative', height: `${steps.length * 100}vh` }}>
      <Box sx={{ position: 'sticky', top: 0, height: { xs: 'auto', md: '100vh' }, bgcolor: '#111' }}>
        {isMobile ? (
          // MOBILE: apenas o item atual centralizado
          <Box
            sx={{
              minHeight: '100vh',
              px: 3,
              py: 6,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
            }}
          >
            {/* Ícone */}
            {steps[currentIndex].icon && (
              <Box sx={{ fontSize: 40, color: 'white', mb: 1 }}>
                {steps[currentIndex].icon}
              </Box>
            )}
            {steps[currentIndex].iconSvg && (
              <Box
                component="img"
                src={steps[currentIndex].iconSvg}
                alt="Icon"
                sx={{ width: 32, height: 32, mb: 1 }}
              />
            )}

            {/* Título e descrição */}
            <Typography variant="h5" color="white" gutterBottom>
              {steps[currentIndex].title}
            </Typography>
            <Typography variant="body2" color="gray" gutterBottom>
              {steps[currentIndex].description}
            </Typography>

            {/* Imagem */}
            <motion.img
              key={steps[currentIndex].image}
              src={steps[currentIndex].image}
              alt={steps[currentIndex].title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              style={{
                maxWidth: '100%',
                height: 'auto',
                marginTop: 16,
              }}
            />
          </Box>
        ) : (
          // DESKTOP: lista lateral + imagem grande
          <Grid container alignItems="center" sx={{ height: '100%' }}>
            <Grid
             size={{ xs: 12, md: 6 }}
              sx={{ px: { md: 8 }, display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              {steps.map((section, i) => {
                const opacity = i === currentIndex ? 1 : 0.4;
                const scale = i === currentIndex ? 1.1 : 1;
                return (
                  <MotionBox
                    key={i}
                    animate={{ opacity, scale }}
                    transition={{ duration: 0.4 }}
                  >
                    <Typography
                      variant={i === currentIndex ? 'h3' : 'h5'}
                      gutterBottom
                      color="white"
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      {section.icon}
                      {section.iconSvg && <img src={section.iconSvg} width={24} alt="icon" />}
                      {section.title}
                    </Typography>
                    {i === currentIndex && (
                      <Typography variant="body1" color="gray">
                        {section.description}
                      </Typography>
                    )}
                  </MotionBox>
                );
              })}
            </Grid>

            <Grid
             size={{ xs: 12, md: 6 }}
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={steps[currentIndex].image}
                  src={steps[currentIndex].image}
                  alt={steps[currentIndex].title}
                  initial={{ opacity: 1, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 1, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    maxWidth: '80%',
                    height: 'auto',
                    objectFit: 'contain',
                  }}
                />
              </AnimatePresence>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
