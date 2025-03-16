
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface GithubLinkProps {
  url: string;
}

const GithubLink = ({ url }: GithubLinkProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, delay: 0.4 }}
    >
      <a 
        href={url} 
        target="_blank" 
        rel="noreferrer"
        className="block"
      >
        <Button 
          variant="secondary" 
          className="rounded-full px-6 py-2 h-12 gap-2"
        >
          <Github size={18} />
          <span>View on GitHub</span>
        </Button>
      </a>
    </motion.div>
  );
};

export default GithubLink;
