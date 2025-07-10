'use client';

import { useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

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

  return (
    <Box ref={ref} sx={{ position: 'relative', height: `${sections.length * 100}vh` }}>
      <Box sx={{ position: 'sticky', top: 0, height: '100vh', bgcolor: '#111' }}>
        <Grid container alignItems="center" sx={{ height: '100%' }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ px: { md: 8 }, position: 'relative', height: '100%' }}
          >
            {sections.map((content, index) => (
              <ScrollItem
                key={index}
                index={index}
                total={sections.length}
                scrollYProgress={scrollYProgress}
                type="text"
                content={content}
              />
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ position: 'relative', height: '100%' }}
          >
            {sections.map((content, index) => (
              <ScrollItem
                key={index}
                index={index}
                total={sections.length}
                scrollYProgress={scrollYProgress}
                type="image"
                content={content}
              />
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

interface ScrollItemProps {
  index: number;
  total: number;
  scrollYProgress: any;
  type: 'text' | 'image';
  content: {
    title: string;
    description: string;
    image: string;
  };
}

function ScrollItem({ index, total, scrollYProgress, type, content }: ScrollItemProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const y = useTransform(scrollYProgress, [start, end], type === 'text' ? [0, -50] : [0, 0]);

  if (type === 'text') {
    return (
      <MotionBox
        style={{ opacity, y }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
        }}
      >
        <Typography variant="h3" color="white" gutterBottom>
          {content.title}
        </Typography>
        <Typography color="gray">{content.description}</Typography>
      </MotionBox>
    );
  }

  return (
    <motion.img
      src={content.image}
      alt={content.title}
      style={{
        opacity,
        y,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      }}
    />
  );
}
