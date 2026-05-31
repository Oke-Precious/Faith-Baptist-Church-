import React from 'react';
import { Volume2, ChevronRight, Calendar } from 'lucide-react';

interface SermonTickerProps {
  onEventClick: () => void;
}

export default function SermonTicker({ onEventClick }: SermonTickerProps) {
  const announcements = [
    "🔥 EXCITING NEWS: The Annual Praiseworthy Glory & Grace Conference starts June 15th - June 21st! Join us daily at 5:00 PM.",
    "📢 SPECIAL SUMMIT: Men's Missionary Union (MMU) Empowerment Summit set for Saturday June 27th, 9:00 AM.",
    "⭐ MISSION FELLOWSHIP: Youth Blaze Outreach 'Light of Ogbomoso' holds on July 4th, visiting surrounding Oke-Owode communities.",
    "🕊️ SUNDAY GLORY: Join Rev. Dr. J. O. Ogunyode-Agbaosi this Sunday for Sunday School (8:00 AM) & Communion Service (9:30 AM)."
  ];

  return (
    <div 
      id="announcement-ticker-panel"
      className="bg-secondary text-dark overflow-hidden border-b border-secondary/20 shadow-inner relative z-20 py-3.5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Ticker Actionable Banner Header */}
        <div className="flex items-center gap-2 pr-4 bg-secondary z-10 shrink-0 font-sans font-bold text-xs uppercase tracking-wider border-r border-dark/15">
          <Volume2 className="w-4 h-4 text-dark animate-bounce" />
          <span className="hidden sm:inline">Latest Announcements</span>
          <span className="inline sm:hidden">News</span>
        </div>

        {/* Scrolling core component */}
        <div id="ticker-slide-lane" className="flex-1 overflow-hidden relative flex items-center select-none font-sans text-xs md:text-sm font-medium">
          <div className="flex animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] whitespace-nowrap gap-16 cursor-pointer">
            <div className="flex gap-16">
              {announcements.map((text, idx) => (
                <span key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {text}
                </span>
              ))}
            </div>
            {/* Repeat exact set to assure seamless scroll */}
            <div className="flex gap-16" aria-hidden="true">
              {announcements.map((text, idx) => (
                <span key={`dup-${idx}`} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Clickable Quick Action */}
        <button
          id="ticker-view-events-btn"
          onClick={onEventClick}
          className="ml-4 shrink-0 flex items-center gap-1 bg-primary text-white hover:bg-primary-dark font-sans font-bold text-[10px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded transition-all duration-200 shadow-sm"
        >
          <Calendar className="w-3.5 h-3.5" />
          View Events
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
