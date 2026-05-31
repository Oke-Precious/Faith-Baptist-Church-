import React, { useState } from 'react';
import { Play, Calendar, BookOpen, Volume2, X, ChevronRight, Video } from 'lucide-react';
import { SERMONS } from '../churchData';
import { Sermon } from '../types';

interface SermonPreviewProps {
  onViewAllSermons: () => void;
  onSermonClick?: (sermon: Sermon) => void;
}

export default function SermonPreview({ onViewAllSermons, onSermonClick }: SermonPreviewProps) {
  const [selectedSermon, setSelectedSermon] = useState<Sermon | null>(null);
  const previewSermons = SERMONS.slice(0, 3);

  const handlePlayClick = (e: React.MouseEvent, sermon: Sermon) => {
    e.stopPropagation();
    if (onSermonClick) {
      onSermonClick(sermon);
    } else {
      setSelectedSermon(sermon);
    }
  };

  return (
    <section 
      id="sermon-preview-section" 
      className="bg-accent py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-3">
              Spiritual Nourishment
            </span>
            <h2 id="sermon-preview-title" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight">
              Recent Message Library
            </h2>
            <div className="h-1 w-20 bg-secondary mt-3 mx-auto md:mx-0 rounded-full" />
          </div>
          <div>
            <button
              id="view-all-sermons-top-btn"
              onClick={onViewAllSermons}
              className="flex items-center gap-1.5 text-primary hover:text-secondary font-sans font-bold text-sm tracking-wide transition-colors group"
            >
              Explore Full Library
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3-Card Sermon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewSermons.map((sermon) => (
            <div
              key={sermon.id}
              id={`sermon-preview-card-${sermon.id}`}
              onClick={(e) => handlePlayClick(e, sermon)}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-secondary/10 transition-all duration-300 transform hover:-translate-y-1.5 group cursor-pointer"
            >
              {/* Thumbnail with overlay play */}
              <div className="relative h-[200px] overflow-hidden bg-primary">
                <img 
                  src={sermon.thumbnail} 
                  alt={sermon.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-primary/50 transition-colors duration-350" />
                
                {/* Float Series Tag badge */}
                <span className="absolute top-4 left-4 bg-primary text-secondary text-[10px] sm:text-xs font-sans font-bold uppercase tracking-wider px-3 py-1 rounded-md border border-secondary/20 shadow-md">
                  {sermon.series}
                </span>

                {/* Centered Play Button Circle overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-secondary text-primary flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 fill-primary ml-1" />
                  </div>
                </div>
              </div>

              {/* Sermon text details body */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs font-sans font-medium text-light mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-secondary" />
                    {new Date(sermon.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span className="w-1.5 h-1.5 bg-secondary/30 rounded-full" />
                  <span className="text-secondary font-bold uppercase tracking-wide">
                    {sermon.duration} Mins
                  </span>
                </div>

                {/* Sermon Title heading */}
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors line-clamp-2 leading-snug mb-3">
                  {sermon.title}
                </h3>

                {/* Speaker indicator */}
                <p className="text-xs font-sans text-light font-medium mb-4">
                  Delivered by <strong className="text-dark font-semibold">{sermon.speaker}</strong>
                </p>

                {/* Scripture indicator quotes */}
                <div className="bg-accent/80 p-3.5 rounded-xl border border-secondary/10 flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-sans font-bold text-primary block uppercase tracking-wide leading-none mb-1">
                      Scripture Anchor
                    </span>
                    <span className="font-serif italic text-light italic scripture-quote text-xs block truncate">
                      "{sermon.scripture}"
                    </span>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Alternate Bottom Button */}
        <div className="text-center md:hidden">
          <button
            id="mobile-view-all-sermons-btn"
            onClick={onViewAllSermons}
            className="bg-primary hover:bg-primary-dark text-white font-sans font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
          >
            Explore Full Library
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Embedded Light Video / sermon detail Popup Modal */}
      {selectedSermon && (
        <div 
          id="sermon-modal-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
          onClick={() => setSelectedSermon(null)}
        >
          <div 
            id="sermon-modal-pane"
            className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl relative border-t-4 border-secondary animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button modal */}
            <button 
              id="sermon-modal-close"
              onClick={() => setSelectedSermon(null)}
              className="absolute top-4 right-4 text-white md:text-primary bg-primary/50 md:bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full z-10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Video preview / visual representation */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedSermon.youtubeId}?autoplay=1`}
                title={selectedSermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Modal metadata text */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-wider text-secondary mb-2">
                <span>{selectedSermon.series}</span>
                <span className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                <span className="text-light">{selectedSermon.date}</span>
              </div>
              
              <h4 className="font-serif text-xl md:text-2xl font-bold text-primary mb-3">
                {selectedSermon.title}
              </h4>

              <p className="text-xs text-secondary-light font-sans font-bold tracking-wider uppercase mb-4">
                Preached by: {selectedSermon.speaker} • Scripture Anchor: {selectedSermon.scripture}
              </p>

              <hr className="border-secondary/15 my-4" />

              <h5 className="font-serif text-sm font-bold text-primary mb-1">Message Summary</h5>
              <p className="text-sm font-sans text-light leading-relaxed">
                {selectedSermon.summary}
              </p>

              {/* Footer action */}
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-light italic">
                  Watch this service online on YouTube @faithbaptistchurchpraisechapel
                </span>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-5 py-2.5 rounded-lg tracking-wider"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
