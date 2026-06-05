import React, { useState, useEffect } from 'react';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onPlanVisit: () => void;
  onWatchLive: () => void;
}

export default function Hero({ onPlanVisit, onWatchLive }: HeroProps) {
  const words = ["A Family.", "A Church.", "A Community."];
  const [index, setIndex] = useState(0);
  const [subWord, setSubWord] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Fallback chain to handle static congregation image and unsplash fallback
  const imgSources = [
    '/images/congregation2.jpg',
    'https://images.unsplash.com/photo-1544427920-c49ccfb85579?auto=format&fit=crop&q=80&w=1600'
  ];
  const [imgSourceIndex, setImgSourceIndex] = useState(0);

  const handleImageError = () => {
    if (imgSourceIndex < imgSources.length - 1) {
      setImgSourceIndex(prev => prev + 1);
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentWord = words[index];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && subWord === currentWord) {
      timer = setTimeout(() => setIsDeleting(true), 1500); // pause at full word
    } else if (isDeleting && subWord === '') {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setSubWord(
          isDeleting
            ? currentWord.substring(0, subWord.length - 1)
            : currentWord.substring(0, subWord.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [subWord, isDeleting, index]);

  return (
    <section 
      id="hero-section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16"
    >
      {/* Background Graphic Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src={imgSources[imgSourceIndex]} 
          alt="Faith Baptist Church Congregation" 
          referrerPolicy="no-referrer"
          onError={handleImageError}
          className="w-full h-full object-cover object-center opacity-80 filter brightness-95 md:brightness-85 scale-100 transition-opacity duration-500"
        />
        {/* Softened blue background overlay with reduced opacity for enhanced background image clarity */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/45 via-primary/25 to-primary/75" />
        {/* Subtle decorative golden glowing rays in the top-right */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[60%] h-[60%] bg-secondary/5 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Pane */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        
        {/* Decorative Badge */}
        <motion.div 
          id="hero-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-secondary/15 border border-secondary/35 text-secondary px-4 py-1.5 rounded-full mb-8"
        >
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="text-xs uppercase font-sans font-bold tracking-[0.2em]">
            Oke-Owode, Ogbomoso • Nigeria
          </span>
        </motion.div>

        {/* Big Displays */}
        <motion.h1 
          id="hero-main-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.1] mb-6"
        >
          Where Faith is Strengthened <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light via-secondary to-secondary-light">
            & Lives are Transformed
          </span>
        </motion.h1>

        {/* Typewriter text assembly */}
        <div className="h-10 md:h-12 flex justify-center items-center mb-8">
          <p id="hero-typewriter-text" className="text-xl md:text-2xl font-sans text-accent/80 font-medium">
            Faith Baptist Praise Chapel —{' '}
            <span className="text-secondary font-bold underline decoration-secondary/30 decoration-2 underline-offset-4">
              {subWord}
              <span className="animate-[ping_0.8s_infinite] inline-block font-extrabold pb-1 ml-0.5 text-secondary text-base">|</span>
            </span>
          </p>
        </div>

        {/* Sub-headline */}
        <motion.p 
          id="hero-sub-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-sm sm:text-base md:text-lg text-white/75 font-sans max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A vibrant worship family led by <strong className="text-accent">Rev. Dr. J. O. Ogunyode-Agbaosi</strong>. Join us this Sunday at <strong className="text-secondary">7:30 AM</strong> for Sunday School and Divine Praise Worship.
        </motion.p>

        {/* CTA Actions Group */}
        <motion.div 
          id="hero-actions-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <button
            id="hero-button-plan-visit"
            onClick={onPlanVisit}
            className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-primary font-sans font-bold px-8 py-4 rounded-full transition-all hover:shadow-[0_0_20px_rgba(201,150,12,0.4)] transform hover:-translate-y-0.5"
          >
            Plan Your Visit
          </button>
          <button
            id="hero-button-watch-live"
            onClick={onWatchLive}
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-sans font-semibold px-8 py-4 rounded-full border border-white/20 hover:border-white transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
          >
            <Play className="w-4 h-4 text-secondary fill-secondary" />
            Watch Divine Service
          </button>
        </motion.div>
      </div>

      {/* Wave Section Divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden line-none">
        <svg 
          className="relative block w-full h-[60px] md:h-[100px] text-accent fill-current translate-y-[2px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,42.4V0Z" />
        </svg>
      </div>

      {/* Floating Scroll Indicator */}
      <div className="absolute bottom-[80px] md:bottom-[120px] left-1/2 transform -translate-x-1/2 z-10">
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            const nextSec = document.getElementById('announcement-ticker-panel');
            nextSec?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase font-sans tracking-[0.2em] text-white/55 font-bold">
            Scroll Down
          </span>
          <ArrowDown className="w-4 h-4 text-secondary" />
        </motion.div>
      </div>
    </section>
  );
}
