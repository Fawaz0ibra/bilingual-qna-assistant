
import React from 'react';
import { motion } from 'framer-motion';

interface WorkflowStepProps {
  number: number;
  title: string;
  description: string;
  delay?: number;
}

const WorkflowStep = ({ number, title, description, delay = 0 }: WorkflowStepProps) => {
  return (
    <motion.div 
      className="flex gap-5 items-start"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring',
        stiffness: 100,
        delay: 0.1 * (number + delay)
      }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-medium">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-medium mb-1">{title}</h3>
        <p className="text-muted-foreground text-balance">{description}</p>
      </div>
    </motion.div>
  );
};

export default WorkflowStep;
