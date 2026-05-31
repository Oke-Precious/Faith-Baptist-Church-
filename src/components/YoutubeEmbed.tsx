import React from 'react';
import { Youtube, ExternalLink, Play, Airplay, Radio } from 'lucide-react';

export default function YoutubeEmbed() {
  const channelUrl = "https://www.youtube.com/@faithbaptistchurchpraisechapel"; // representative

  return (
    <section 
      id="youtube-embed-section" 
      className="bg-white py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Metadata Block Column */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-secondary font-sans font-bold text-xs uppercase tracking-[0.25em] mb-3 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-secondary" />
              Broadcasting the Word
            </span>

            <h2 id="youtube-section-title" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mb-6">
              Watch Our Live & <br /> Record Services
            </h2>

            <p className="text-sm text-light font-sans leading-relaxed mb-6">
              Even when distance separates us, we remain one family under God's grace. Join our live-streamed services or catch up on historic spiritual coordinates from anywhere in the world.
            </p>

            {/* Feature lists */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3 text-left">
                <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Play className="w-3.5 h-3.5 fill-current" />
                </span>
                <div>
                  <h4 className="text-sm font-serif font-bold text-primary">High Definition Streaming</h4>
                  <p className="text-xs text-light font-sans">Full service coverage including praise and pastor messages.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 text-left">
                <span className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                  <Radio className="w-3.5 h-3.5" />
                </span>
                <div>
                  <h4 className="text-sm font-serif font-bold text-primary">Every Sunday at 9:30 AM</h4>
                  <p className="text-xs text-light font-sans font-medium">Stream direct covenant Word from Oke-Owode, Ogbomoso.</p>
                </div>
              </div>
            </div>

            {/* Direct Channel External Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                id="btn-goto-youtube-channel"
                href={channelUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="w-full sm:w-auto bg-[#FF0000] hover:bg-[#D00000] text-white font-sans font-bold text-sm px-6 py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2 transform hover:scale-[1.03]"
              >
                <Youtube className="w-5 h-5 text-white" />
                Subscribe on YouTube
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Video Iframe Column */}
          <div className="lg:col-span-7">
            <div className="relative group">
              {/* Backing structural border card */}
              <div className="absolute inset-0 bg-primary rounded-3xl transform translate-x-2.5 translate-y-2.5 opacity-10" />
              
              {/* Main TV Frame */}
              <div className="relative bg-[#111] rounded-3xl overflow-hidden shadow-2xl border-4 border-primary">
                <div className="aspect-video">
                  {/* Embedded representative iframe link */}
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                    title="Faith Baptist Church Praise Chapel Latest Sermon"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                {/* Visual Audio Line decoration bottom card */}
                <div className="bg-primary px-6 py-4 flex items-center justify-between text-white border-t border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-2.5 w-2.5 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                    </span>
                    <span className="text-xs uppercase font-sans font-bold tracking-widest text-secondary-light">
                      Sunday Broadcast Recents
                    </span>
                  </div>
                  <span className="text-xs font-sans text-white/60">
                    Ogbomoso, Oyo State
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
