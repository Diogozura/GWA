'use client';

import { useRef, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';

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

    return (
        <Box ref={ref} sx={{ position: 'relative', height: `${sections.length * 100}vh` }}>
            <Box sx={{ position: 'sticky', top: 0, height: '100vh', bgcolor: '#111' }}>
                <Grid container alignItems="center" sx={{ height: '100%' }}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ px: { md: 8 } }}>
                        <AnimatePresence mode="wait">
                            <MotionBox
                                key={currentIndex}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Typography variant="h3" gutterBottom color="white">
                                    {sections[currentIndex].title}
                                </Typography>
                                <Typography variant="body1" color="gray">
                                    {sections[currentIndex].description}
                                </Typography>
                            </MotionBox>
                        </AnimatePresence>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <AnimatePresence mode="wait">
                            <motion.img
                                key={sections[currentIndex].image}
                                src={sections[currentIndex].image}
                                alt={sections[currentIndex].title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
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
