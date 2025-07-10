'use client';

import { Box } from '@mui/material';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Imagens da pasta /public/carrosel
interface CarroselInfinitoProps {
  imagePaths: string[]; // lista de imagens já prontas
  reverse?: boolean; // define direção
  speed?: number; // opcional: duração
}


export default function CarroselInfinito({ imagePaths,reverse = false, speed = 20 }: CarroselInfinitoProps) {

      const direction = reverse ? ['-50%', '0%'] : ['0%', '-50%'];
  return (
    <Box
      sx={{
        overflow: 'hidden',
        width: '100%',
        backgroundColor: '#111',
        py: 3,
      }}
    >
      <MotionBox
        sx={{
          display: 'flex',
          width: 'max-content',
        }}
        animate={{ x: direction }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}
      >
        {/* Duplicar as imagens para loop suave */}
        {[...imagePaths, ...imagePaths].map((src, idx) => (
          <Box
            key={idx}
            component="img"
            src={src}
            alt={`img-${idx}`}
            sx={{ height: 50, width: 'auto', marginRight: 4, borderRadius: 2 }}
          />
        ))}
      </MotionBox>
    </Box>
  );
}
