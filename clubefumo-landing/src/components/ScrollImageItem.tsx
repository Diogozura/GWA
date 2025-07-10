'use client';

import { Box, Typography } from '@mui/material';
import { motion, useTransform, MotionValue } from 'framer-motion';

const MotionBox = motion(Box);

interface ScrollImageItemProps {
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  type: 'text' | 'image';
  content: {
    title: string;
    description: string;
    image: string;
  };
}

export default function ScrollImageItem({
  index,
  total,
  scrollYProgress,
  type,
  content,
}: ScrollImageItemProps) {
  const start = index / total;
  const end = (index + 1) / total;

  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);
  const y = useTransform(
    scrollYProgress,
    [start, end],
    type === 'text' ? [0, 50] : [20, -20]
  );

  if (type === 'text') {
    return (
      <MotionBox
        style={{ opacity, y }}
        sx={{
          position: index === 0 ? 'relative' : 'absolute',
          top: 0,
          left: 0,
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
