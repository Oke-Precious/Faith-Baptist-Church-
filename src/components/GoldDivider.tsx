import React from 'react';
import { motion } from 'motion/react';

interface GoldDividerProps {
  className?: string;
  centered?: boolean;
}

export default function GoldDivider({ className = '', centered = true }: GoldDividerProps) {
  return (
    <div className={`w-full flex ${centered ? 'justify-center animate-pulse-slow' : 'justify-start'} ${className}`}>
      <motion.div
        initial={{ width: '0%', opacity: 0.2 }}
        whileInView={{ width: '5rem', opacity: 1 }}
        viewport={{ once: false, margin: '-20px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="h-1 bg-secondary rounded-full"
      />
    </div>
  );
}
