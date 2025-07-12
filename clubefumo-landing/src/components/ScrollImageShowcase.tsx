'use client';

import { faBagShopping, faBong, faSeedling } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Typography, Grid, useTheme, useMediaQuery } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

const MotionBox = motion(Box);


interface CreativityScrollProps {
  t: Record<string, string>;
}

export default function CreativityScroll({ t }: CreativityScrollProps) {
  const ref = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

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
      image: '/hero/hero_1.png',
    },
    {
      iconSvg: '/GWA_Puff_icon.svg',
      icon: '',
      image: '/hero/hero_2.png',
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
      const img = new window.Image(); // ✅ sem erro
      img.src = section.image;
    });
  }, [steps]);
  return (
    <Box ref={ref} sx={{ position: 'relative', height: `${steps.length * 85}vh` }}>
      <Box sx={{ position: 'sticky', top: 0, height: { xs: 'auto', }, bgcolor: '#111' }}>
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
            <Box sx={{ position: 'relative', height: 300, width: '100%', mt: 4 }}>
              {steps.map((step, index) => (
                <motion.img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 10,
                    margin: 'auto',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </Box>
          </Box>
        ) : isTablet ? (
          // TABLET
          <Box
            sx={{
              minHeight: '100vh',
              px: 6,
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
              <Box sx={{ fontSize: 48, color: 'white', mb: 2 }}>
                {steps[currentIndex].icon}
              </Box>
            )}
            {steps[currentIndex].iconSvg && (
              <Box
                component="img"
                src={steps[currentIndex].iconSvg}
                alt="Icon"
                sx={{ width: 40, height: 40, mb: 2 }}
              />
            )}

            <Typography variant="h4" color="white" gutterBottom>
              {steps[currentIndex].title}
            </Typography>
            <Typography variant="body1" color="gray" gutterBottom>
              {steps[currentIndex].description}
            </Typography>

            <Box sx={{ position: 'relative', height: 600, width: '100%', mt: 4, zIndex: 1 }}>
              {steps.map((step, index) => (
                <motion.img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    zIndex: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 10,
                    margin: 'auto',
                    maxWidth: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </Box>
          </Box>
        ) : (
          // DESKTOP: lista lateral + imagem grande
          <Grid container alignItems="center" sx={{
            minHeight: '80vh', // ← menor que 100vh
          }}>
            <Grid
              size={{ xs: 12, md: 6 }}
              sx={{ px: { md: 4 }, display: 'flex', flexDirection: 'column', gap: 2 }}
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
                      {section.iconSvg && <Image src={section.iconSvg} width={24} height={24} alt="icon" />}
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
                height: 500,
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              {steps.map((step, index) => (
                <motion.img
                  key={index}
                  src={step.image}
                  alt={step.title}
                  initial={false}
                  animate={{
                    opacity: index === currentIndex ? 1 : 0,
                    scale: index === currentIndex ? 1 : 1.02,
                    zIndex: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: 10,
                    margin: 'auto',
                    maxWidth: '80%',
                    height: 'auto',
                    objectFit: 'contain',
                    pointerEvents: 'none',
                  }}
                />
              ))}
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
}
