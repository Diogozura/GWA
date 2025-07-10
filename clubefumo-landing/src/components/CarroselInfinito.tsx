'use client';

import { Box } from '@mui/material';
import { motion, useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

interface CarroselInfinitoProps {
  imagePaths: string[];
  reverse?: boolean;
  speed?: number; // px/segundo
}

export default function CarroselInfinito({ imagePaths, reverse = false, speed = 10 }: CarroselInfinitoProps) {
  const baseSpeed = reverse ? -speed : speed;

  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || !contentRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const contentWidth = contentRef.current.scrollWidth / 2;

    x.current -= (baseSpeed * delta) / 1000;

    if (Math.abs(x.current) >= contentWidth) {
      x.current = 0;
    }

    if (contentRef.current) {
      contentRef.current.style.transform = `translateX(${x.current}px)`;
    }
  });

  const duplicated = [...imagePaths, ...imagePaths];

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 3,
        backgroundColor: '#111',
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          display: 'flex',
          width: 'fit-content',
          whiteSpace: 'nowrap',
        }}
      >
        {duplicated.map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`carousel-${idx}`}
            sx={{
              height: 24,
              width: 'auto',
              mx: 8,
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
