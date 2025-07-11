'use client';

import { Box } from '@mui/material';
import { useAnimationFrame } from 'framer-motion';
import React, { useRef } from 'react';

interface CarroselInfinitoProps {
  imagePaths: string[];
  reverse?: boolean;
  speed?: number; // pixels por segundo
  height?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  background?: string;
}

export default function CarroselInfinito({
  imagePaths,
  reverse = false,
  speed = 20,
  height = { xs: 40, md: 300 }, // altura das imagens
  gap = { xs: 1, md: 2 }, // espaçamento horizontal entre
  background = '#111',
}: CarroselInfinitoProps) {
  const baseSpeed = reverse ? -speed : speed;

  const x = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentWidth = useRef(0);

  const tripled = [...imagePaths, ...imagePaths, ...imagePaths];

  React.useEffect(() => {
    if (contentRef.current) {
      contentWidth.current = contentRef.current.scrollWidth / 3;

      // Começa no meio (segunda repetição)
      x.current = -contentWidth.current;
      contentRef.current.style.transform = `translateX(${x.current}px)`;
    }
  }, [tripled]);

  useAnimationFrame((_, delta) => {
    if (!containerRef.current || !contentRef.current) return;


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

  const duplicated = [...imagePaths, ...imagePaths]; // duplicado só 2x é suficiente
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
              height: height,
              mx: gap,
              width: 'auto',
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
