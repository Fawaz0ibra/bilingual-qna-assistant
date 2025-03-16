
import React from 'react';
import { motion } from 'framer-motion';

interface GlassPanelSectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const GlassPanelSection = ({ id, title, subtitle, children, className }: GlassPanelSectionProps) => {
  return (
    <section id={id} className={`mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="rounded-2xl overflow-hidden glass-panel p-8 md:p-10"
      >
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-medium mb-3">{title}</h2>
          {subtitle && <p className="text-muted-foreground text-balance">{subtitle}</p>}
        </div>
        
        {children}
      </motion.div>
    </section>
  );
};

export default GlassPanelSection;
