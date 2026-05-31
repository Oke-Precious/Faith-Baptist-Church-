import React from 'react';

interface ChurchLogoProps {
  className?: string; // e.g. "w-10 h-10"
  showText?: boolean;
}

export default function ChurchLogo({ className = "w-12 h-12", showText = false }: ChurchLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${showText ? '' : 'inline-block'}`}>
      <div className={`relative shrink-0 ${className}`}>
        {/* Universal High-Definition Vector Representation of the Faith Baptist Church Logo */}
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Glow Circle */}
          <circle cx="100" cy="100" r="98" fill="#ffffff" stroke="#f4f4f4" strokeWidth="2" />
          <circle cx="100" cy="100" r="93" fill="none" stroke="#e0e0e0" strokeWidth="1" strokeDasharray="3,3" />

          {/* Central Green Triangle (Symbol of the Trinity) */}
          {/* Outer triangle path */}
          <polygon 
            points="100,18 185,155 15,155" 
            fill="#ffffff" 
            stroke="#00A859" 
            strokeWidth="8" 
            strokeLinejoin="round"
          />

          {/* Solid Green Bottom Bar of Triangle for the Text "FAITH BAPTIST CHURCH" */}
          <path 
            d="M 21,135 L 179,135 L 183.5,151 L 16.5,151 Z" 
            fill="#00A859" 
          />

          {/* Text: FAITH BAPTIST CHURCH inside the bottom bar */}
          <text 
            x="100" 
            y="146" 
            textAnchor="middle" 
            fill="#ffffff" 
            fontSize="9" 
            fontFamily="'Inter', sans-serif" 
            fontWeight="bold"
            letterSpacing="0.2"
          >
            FAITH BAPTIST CHURCH
          </text>

          {/* Red Cross (Upper Center) */}
          <path 
            d="M 94,48 L 106,48 L 106,64 L 120,64 L 120,74 L 106,74 L 106,108 L 94,108 L 94,74 L 80,74 L 80,64 L 94,64 Z" 
            fill="#C1272D" 
            className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.15)]"
          />

          {/* Detailed Open Bible at the Bottom */}
          <g transform="translate(100, 114) scale(0.85)">
            {/* Pages shadow/cover background underneath */}
            <path 
              d="M -42,12 Q -20,2 -2,12 Q 2,2 24,12 L 24,-12 Q 2,-22 -2,-12 Q -20,-22 -42,-12 Z" 
              fill="#5C3A21" 
            />
            {/* Golden edges ribbon styling */}
            <path 
              d="M -41,11 Q -20,1 -2,11 Q 2,1 23,11 L 23,-11 Q 2,-21 -2,-11 Q -20,-21 -41,-11 Z" 
              fill="#D4AF37" 
            />
            {/* White Left Page */}
            <path 
              d="M -40,8 Q -20,-2 -2,8 L -2,-14 Q -20,-24 -40,-14 Z" 
              fill="#ffffff" 
              stroke="#2e2e2e" 
              strokeWidth="0.75"
            />
            {/* White Right Page */}
            <path 
              d="M 2,8 Q 20,-2 40,8 L 40,-14 Q 20,-24 2,-14 Z" 
              fill="#ffffff" 
              stroke="#2e2e2e" 
              strokeWidth="0.75"
            />
            {/* Book Spine Center Ribbon */}
            <path d="M -2,8 L 0,16 L 2,8 L 1,-16 L -1,-16 Z" fill="#9e1f1f" />
            
            {/* Text lines simulator loops for left page */}
            <line x1="-32" y1="-7" x2="-10" y2="-1" stroke="#555555" strokeWidth="1" />
            <line x1="-32" y1="-3" x2="-10" y2="3" stroke="#555555" strokeWidth="1" />
            <line x1="-32" y1="1" x2="-14" y2="6" stroke="#555555" strokeWidth="1" />
            
            {/* Text lines simulator loops for right page */}
            <line x1="10" y1="-1" x2="32" y2="-7" stroke="#555555" strokeWidth="1" />
            <line x1="10" y1="3" x2="32" y2="-3" stroke="#555555" strokeWidth="1" />
            <line x1="14" y1="6" x2="32" y2="1" stroke="#555555" strokeWidth="1" />
          </g>

          {/* Flying White Dove (Overlapping the Left Triangle Border) */}
          <g transform="translate(82, 68) scale(0.85)" className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
            {/* Dove Shape path representation based on actual wings layout */}
            <path 
              d="M -30,-5 
                 C -24,-18 -15,-28 -5,-32 
                 C -7,-24 -5,-15 -2,-10 
                 C 2,-20 8,-28 18,-32 
                 C 15,-22 10,-12 6,-6 
                 C 14,-6 24,-4 32,-1 
                 C 22,2 14,4 12,8 
                 C 16,14 18,22 18,28 
                 C 12,24 8,16 5,10 
                 C 2,14 -2,20 -10,24 
                 C -6,16 -4,10 -5,6 
                 C -12,8 -20,10 -28,8 
                 C -22,5 -17,2 -16,0 
                 C -22,0 -26,-2 -30,-5 Z" 
              fill="#ffffff" 
              stroke="#e0e0e0" 
              strokeWidth="0.5"
            />
            {/* Soft Feather detailing lines */}
            <path d="M -5,-30 Q -8,-18 -2,-11" stroke="#d6d6d6" strokeWidth="0.5" fill="none" />
            <path d="M 16,-28 Q 12,-16 6,-8" stroke="#d6d6d6" strokeWidth="0.5" fill="none" />
            <path d="M 30,-2 Q 18,2 12,6" stroke="#d6d6d6" strokeWidth="0.5" fill="none" />
          </g>
        </svg>
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
