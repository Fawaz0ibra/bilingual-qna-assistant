
import React from 'react';
import { motion } from 'framer-motion';

interface FeatureItemProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay: number;
}

const FeatureItem = ({ icon, title, description, delay }: FeatureItemProps) => {
  return (
    <motion.div 
      className="flex gap-4 items-start"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        delay: delay
      }}
    >
      <div className="p-3 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground text-balance">{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureItem;
