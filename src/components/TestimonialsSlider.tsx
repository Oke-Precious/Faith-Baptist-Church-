import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../churchData';
import { motion, AnimatePresence } from 'motion/react';

export default function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPaused) {
        handleNext();
      }
    }, 5000); // responsive auto slider transition
    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const active = TESTIMONIALS[activeIndex];

  return (
    <section 
      id="testimonials-slider-section" 
      className="bg-accent py-20 md:py-24 relative overflow-hidden"
    >
      {/* Wave shape boundary background subtle details */}
      <div className="absolute inset-0 z-0 opacity-[0.03] select-none pointer-events-none">
        <svg className="w-full h-full text-primary" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="10" cy="10" r="40" fill="currentColor" />
          <circle cx="90" cy="90" r="30" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Module */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-secondary font-sans font-bold text-xs uppercase tracking-[0.25em] mb-3 block">
            Words of Witness
          </span>
          <h2 id="testimonials-panel-title" className="text-3xl font-serif text-primary font-bold tracking-tight">
            Praiseworthy Testimonies
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto mt-3 rounded-full" />
        </div>

        {/* Carousel Pane */}
        <div 
          className="relative bg-white border border-secondary/15 rounded-3xl p-8 sm:p-12 shadow-xl cursor-default transition-all duration-300 hover:shadow-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* Absolute Quote Design element */}
          <Quote className="absolute top-6 right-8 text-secondary/10 w-24 h-24 pointer-events-none" />

          {/* Dynamic Testimonial Display Slider */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left flex flex-col md:flex-row items-center gap-8 md:gap-10"
            >
              
              {/* Profile Photo */}
              <div className="shrink-0 relative">
                <div className="absolute inset-0 bg-secondary rounded-full transform rotate-6 border border-secondary" />
                <img 
                  src={active.avatar} 
                  alt={active.name} 
                  className="relative w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>

              {/* Testimony text */}
              <div className="flex-1">
                {/* Visual Stars Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary" />
                  ))}
                </div>

                <p className="font-serif italic text-base sm:text-lg scripture-quote leading-relaxed text-primary mb-6">
                  "{active.quote}"
                </p>

                <div>
                  <h4 className="font-serif text-base font-bold text-primary">
                    {active.name}
                  </h4>
                  <p className="text-xs text-light font-sans font-medium mt-0.5">
                    {active.role}
                  </p>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>

          {/* Slider controls buttons */}
          <div className="flex items-center justify-between mt-10 md:mt-6 pt-6 border-t border-secondary/10">
            {/* Index Dot indicator list */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? 'w-6 bg-secondary' : 'w-2 bg-primary/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                id="testimonial-prev-arrow"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-secondary/20 hover:border-secondary bg-white hover:bg-accent text-primary flex items-center justify-center transition-all shadow-xs"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-arrow"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-secondary/20 hover:border-secondary bg-white hover:bg-accent text-primary flex items-center justify-center transition-all shadow-xs"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
