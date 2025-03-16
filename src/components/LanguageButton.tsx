
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';

interface LanguageButtonProps {
  language: 'English' | 'Arabic';
  href: string;
  icon: JSX.Element;
}

const LanguageButton = ({ language, href, icon }: LanguageButtonProps) => {
  // Make Arabic button have RTL layout
  const isRTL = language === 'Arabic';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: 'spring', 
        stiffness: 100, 
        delay: language === 'English' ? 0.2 : 0.3 
      }}
    >
      <a 
        href={href} 
        target="_blank" 
        rel="noreferrer"
        className="block"
      >
        <Button 
          variant="outline" 
          size="lg"
          className={`
            w-full text-lg font-normal px-6 py-6 h-auto
            border border-gray-200 bg-white/60 backdrop-blur-sm
            hover:bg-white hover:shadow-md transition-all 
            duration-300 ease-in-out flex items-center gap-3
            ${isRTL ? 'flex-row-reverse' : ''}
          `}
        >
          <span className="text-primary">{icon}</span>
          <span className="text-balance">
            {language === 'English' ? 'English Assistant' : 'مساعد اللغة العربية'}
          </span>
        </Button>
      </a>
    </motion.div>
  );
};

export default LanguageButton;
