'use client';

import { Box } from '@mui/material';
import { useAnimationFrame } from 'framer-motion';
import { useRef } from 'react';

interface CarroselInfinitoProps {
  imagePaths: string[];
  reverse?: boolean;
  speed?: number; // pixels por segundo
  height?: number; // altura das imagens
  gap?: number; // espaçamento entre imagens
  background?: string;
}

export default function CarroselInfinito2({
  imagePaths,
  reverse = false,
  speed = 20,
  height = 32,
  gap = 32,
  background = '#111',
}: CarroselInfinitoProps) {
  const baseSpeed = reverse ? -speed : speed;

  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useAnimationFrame((_, delta) => {
  if (!containerRef.current || !contentRef.current) return;

  const containerWidth = containerRef.current.offsetWidth;
  const contentWidth = contentRef.current.scrollWidth / 2;

  x.current += (baseSpeed * delta) / 1000;

  if (!reverse && x.current <= -contentWidth) {
    x.current = 0;
  }

  if (reverse && x.current >= 0) {
    x.current = -contentWidth;
  }

  if (contentRef.current) {
    contentRef.current.style.transform = `translateX(${x.current}px)`;
  }
});

 const duplicated = Array(5).fill(imagePaths).flat();

  return (
    <Box
      ref={containerRef}
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 3,
        backgroundColor: background,
      }}
    >
      <Box
        ref={contentRef}
        sx={{
          display: 'flex',
          width: 'fit-content',
          whiteSpace: 'nowrap',
          transition: 'transform 0.1s linear',
        }}
      >
        {duplicated.map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`carousel-${idx}`}
            sx={{
              height,
              width: 'auto',
              mx: `${gap / 2}px`,
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
