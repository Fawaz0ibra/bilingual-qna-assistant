
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero = ({ title, subtitle }: HeroProps) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="mb-4"
      >
        <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
          NDMO-Agent
        </div>
      </motion.div>
      
      <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 max-w-2xl mx-auto tracking-tight"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h1>
      
      <motion.p 
        className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  );
};

export default Hero;
