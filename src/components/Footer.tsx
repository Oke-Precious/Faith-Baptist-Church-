import React from 'react';
import { Facebook, Youtube, MapPin, Phone, Mail, ChevronRight } from 'lucide-react';
import { Page } from '../types';
import { MISSION_STATEMENT, CHURCH_LOCATION } from '../churchData';
import ChurchLogo from './ChurchLogo';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  
  const handleQuickLink = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="main-app-footer" 
      className="bg-primary text-white pt-16 pb-8 relative overflow-hidden border-t border-white/10"
    >
      {/* Decorative vectors: subtle church building silhouette line-art at bottom */}
      <div className="absolute bottom-0 right-0 left-0 h-40 opacity-[0.03] pointer-events-none select-none overflow-hidden">
        <svg className="w-full h-full text-secondary fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120 h1200 v-80 h-100 l-20,20 h-50 l-30,-50 l-30,50 h-100 l-50,-80 l-50,80 h-200 l-10,40 h-100 l-15,-30 l-15,30 h-100 v80 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-14 pb-12 border-b border-white/10">
        
        {/* Left column - logo & mission statement */}
        <div className="lg:col-span-4 space-y-5">
          <div className="flex items-center cursor-pointer group" onClick={() => handleQuickLink('home')}>
            <ChurchLogo className="w-11 h-11 md:w-12 md:h-12" showText={true} />
          </div>

          <p className="text-sm text-white/70 font-sans leading-relaxed">
            {MISSION_STATEMENT}
          </p>

          {/* Social media channels */}
          <div className="flex items-center gap-3">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white hover:text-secondary flex items-center justify-center transition-colors border border-white/10"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="https://youtube.com/@faithbaptistchurchpraisechapel" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white hover:text-secondary flex items-center justify-center transition-colors border border-white/10"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick navigation links */}
        <div className="lg:col-span-3">
          <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-secondary mb-5">
            Quick Navigation
          </h4>
          <ul className="space-y-3 font-sans text-sm font-medium">
            {([
              { label: 'Home Tab', page: 'home' },
              { label: 'Our Story (About)', page: 'about' },
              { label: 'Sermon Archive', page: 'sermons' },
              { label: 'Departments (Ministries)', page: 'ministries' },
              { label: 'Upcoming Events', page: 'events' },
              { label: 'Give & Sowing', page: 'give' },
              { label: 'Prayer & Contacts', page: 'contact' },
            ] as const).map((link) => (
              <li key={link.page}>
                <button
                  onClick={() => handleQuickLink(link.page)}
                  className="text-white/75 hover:text-white transition-colors flex items-center gap-1 group text-left"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-secondary transition-transform group-hover:translate-x-0.5" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 - Contact Address coordinates */}
        <div className="lg:col-span-5 space-y-5">
          <h4 className="text-sm font-sans font-bold uppercase tracking-widest text-secondary mb-5">
            Church Coordinates
          </h4>
          
          <ul className="space-y-4 font-sans text-sm font-medium text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
              <span>
                <strong>Oke-Owode Praise Chapel:</strong> <br />
                Opposite Secondary School Area, Oke-Owode, <br />
                Ogbomoso, Oyo State, Nigeria.
              </span>
            </li>
            
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-secondary shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+2348030000000" className="hover:text-secondary transition-colors">
                  +234 803 123 4567
                </a>
                <a href="tel:+2348050000000" className="hover:text-secondary transition-colors">
                  +234 705 987 6543
                </a>
              </div>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-secondary shrink-0" />
              <a href="mailto:info@faithbaptistogbomoso.org" className="hover:text-secondary transition-colors truncate">
                info@faithbaptistogbomoso.org
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Extreme Footer segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
        
        <div className="space-y-1">
          <p className="text-xs text-white/60 font-sans">
            © 2026 Faith Baptist Church Praise Chapel. All Rights Reserved.
          </p>
          <p className="text-[10px] text-white/40 font-mono">
            Oke-Owode, Ogbomoso • Nigeria Baptist Convention Affiliated
          </p>
        </div>

        {/* Small italic Scripture Quotes footer */}
        <div className="max-w-md">
          <p className="font-serif italic text-xs text-secondary-light/95 leading-relaxed tracking-wide">
            "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life." <br className="hidden sm:inline" />
            <span className="font-sans text-[10px] font-bold tracking-wider uppercase ml-1 block mt-0.5">— John 3:16</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
