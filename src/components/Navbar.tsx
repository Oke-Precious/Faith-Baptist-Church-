import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { Page } from '../types';
import { motion, AnimatePresence } from 'motion/react';
import ChurchLogo from './ChurchLogo';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
  onPlanVisit: () => void;
}

export default function Navbar({ activePage, onNavigate, onPlanVisit }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Sermons', value: 'sermons' },
    { label: 'Ministries', value: 'ministries' },
    { label: 'Prayer', value: 'prayer' },
    { label: 'Events', value: 'events' },
    { label: 'Give', value: 'give' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-primary shadow-xl py-3 border-b border-white/10' 
          : 'bg-primary/95 md:bg-transparent md:backdrop-blur-none py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div 
            id="brand-logo"
            className="flex items-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <ChurchLogo className="w-11 h-11 md:w-12 md:h-12" showText={true} />
          </div>

          {/* Desktop Navigation links */}
          <div id="desktop-links" className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <button
                key={item.value}
                id={`nav-link-${item.value}`}
                onClick={() => handleNavClick(item.value)}
                className={`px-3 py-2 text-sm font-sans font-medium tracking-wide rounded-md transition-colors ${
                  activePage === item.value
                    ? 'text-secondary font-bold relative after:absolute after:bottom-0 after:left-3 after:right-3 after:h-[2px] after:bg-secondary'
                    : 'text-white/85 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Plan Your Visit CTA */}
          <div className="hidden md:block">
            <button
              id="cta-plan-visit-header"
              onClick={onPlanVisit}
              className="bg-secondary hover:bg-secondary-light text-primary font-sans font-bold text-sm px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-md flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 text-primary animate-pulse" />
              Plan Your Visit
            </button>
          </div>

          {/* Mobile hamburger menu toggle */}
          <div className="md:hidden">
            <button
              id="mobile-nav-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-secondary p-1"
              aria-label="Toggle main menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  id={`mobile-nav-link-${item.value}`}
                  onClick={() => handleNavClick(item.value)}
                  className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md font-sans transition-colors ${
                    activePage === item.value
                      ? 'bg-white/10 text-secondary border-l-4 border-secondary'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 px-4">
                <button
                  id="mobile-cta-plan-visit"
                  onClick={() => {
                    setIsOpen(false);
                    onPlanVisit();
                  }}
                  className="w-full text-center bg-secondary hover:bg-secondary-light text-primary font-sans font-bold py-3 px-4 rounded-full transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Flame className="w-4 h-4 text-primary animate-pulse" />
                  Plan Your Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
