import React from 'react';

interface ChurchLogoProps {
  className?: string; // e.g. "w-10 h-10"
  showText?: boolean;
}

export default function ChurchLogo({ className = "w-12 h-12", showText = false }: ChurchLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${showText ? '' : 'inline-block'}`}>
      <div className={`relative shrink-0 ${className}`}>
        {/* Faith Baptist Church Logo Image */}
        <img 
          src="/src/assets/images/faith logo.png" 
          alt="Faith Baptist Church Logo" 
          className="w-full h-full object-contain filter drop-shadow-md"
          referrerPolicy="no-referrer"
        />
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className="font-serif text-lg md:text-xl font-bold text-white tracking-wide leading-none group-hover:text-secondary-light transition-colors">
            Faith Baptist Church
          </span>
          <span className="text-[10px] uppercase font-sans tracking-[0.18em] text-secondary font-bold leading-none mt-1 group-hover:text-white transition-colors">
            Praise Chapel • Oke-Owode
          </span>
        </div>
      )}
    </div>
  );
}
