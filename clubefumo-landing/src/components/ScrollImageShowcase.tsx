'use client';

import { Box, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const MotionBox = motion(Box);

interface Section {
  title: string;
  description: string;
  image: string;
}

interface Props {
  sections: Section[];
}

export default function CreativityScroll({ sections }: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const progress = useTransform(scrollYProgress, [0, 1], [0, sections.length - 1]);

  useMotionValueEvent(progress, 'change', (v) => {
    const nextIndex = Math.floor(v);
    if (nextIndex !== currentIndex) setCurrentIndex(nextIndex);
  });

  useEffect(() => {
    // Pré-carregar imagens
    sections.forEach(section => {
      const img = new Image();
      img.src = section.image;
    });
  }, [sections]);

  return (
    <Box ref={ref} sx={{ position: 'relative', height: `${sections.length * 100}vh` }}>
      <Box sx={{ position: 'sticky', top: 0, height: '100vh', bgcolor: '#111' }}>
        <Grid container alignItems="center" sx={{ height: '100%' }}>
          <Grid
             size={{xs:12, md:6}}
            sx={{ px: { md: 8 }, display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            {sections.map((section, i) => {
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
                  >
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
          size={{xs:12, md:6}}
            sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={sections[currentIndex].image}
                src={sections[currentIndex].image}
                alt={sections[currentIndex].title}
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
      </Box>
    </Box>
  );
}
