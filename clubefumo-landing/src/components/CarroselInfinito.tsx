'use client';

import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface InfiniteCarouselProps {
  images: string[];
  imgHeight?: {
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
  speed?: number; // em segundos
  reverse?: boolean;
}

export default function InfiniteCarousel({
  images,
  imgHeight = { xs: 30, md: 50 },
  gap = { xs: 30, md: 50 },
  // background = '#111',
  speed = 30,
  reverse = false,
}: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      track.innerHTML += track.innerHTML; // duplicar para efeito infinito
    }
  }, []);

    const animationName = reverse ? 'scroll-carousel-reverse' : 'scroll-carousel';

  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        py: 2,
        // background,
      }}
    >
      <Box
        ref={trackRef}
        sx={{
          display: 'flex',
          width: 'max-content',
          animation: `${animationName} ${speed}s linear infinite`,
          gap,
        }}
        className="carousel-track"
      >
        {images.map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`Image ${idx + 1}`}
            sx={{
              height: imgHeight,
              gap: gap,
              width: 'auto',
              objectFit: 'contain',
              flexShrink: 0,
            }}
          />
        ))}
      </Box>

         <style jsx global>{`
        @keyframes scroll-carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-carousel-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </Box>
  );
}
