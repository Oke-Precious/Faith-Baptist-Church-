import React from 'react';
import { Shield, Heart, Music, Flame, Baby, Globe2, BookOpen, ChevronRight, Compass, Crown, Gem } from 'lucide-react';
import { MINISTRIES } from '../churchData';

interface MinistriesGridProps {
  onLearnMore: () => void;
}

export default function MinistriesGrid({ onLearnMore }: MinistriesGridProps) {
  
  // Lucide dynamic mapping helper
  const renderMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-6 h-6 text-secondary" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-secondary" />;
      case "Music":
        return <Music className="w-6 h-6 text-secondary" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-secondary" />;
      case "Baby":
        return <Baby className="w-6 h-6 text-secondary" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-secondary" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-secondary" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-secondary" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-secondary" />;
      case "Gem":
        return <Gem className="w-6 h-6 text-secondary" />;
      default:
        return <Heart className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section 
      id="ministries-overview-section" 
      className="bg-white py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block layout */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-3">
            Fellowships & Departments
          </span>
          <h2 id="ministries-overview-title" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mb-4">
            Our Thriving Church Ministries
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-light font-sans">
            At Praise Chapel, everyone is a valued member of the family. Partner with us and grow spiritually inside these specialized ministries.
          </p>
        </div>

        {/* 3x2 Icon Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
          {MINISTRIES.map((min, idx) => (
            <div
              key={min.id}
              id={`ministry-overview-card-${min.id}`}
              className="bg-accent rounded-2xl p-8 border border-secondary/10 transition-all duration-300 hover:shadow-lg hover:bg-gradient-to-br hover:from-accent hover:to-white flex flex-col justify-between group h-full cursor-pointer"
              onClick={onLearnMore}
            >
              <div>
                {/* Circle icon frame */}
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-105 transition-all duration-300">
                  <div className="group-hover:text-white">
                    {renderMinistryIcon(min.iconName)}
                  </div>
                </div>

                {/* Ministry Title */}
                <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors mb-2">
                  {min.name}
                </h3>

                {/* Short line-tagline description */}
                <p className="text-xs uppercase font-sans tracking-widest text-secondary font-semibold mb-3">
                  {min.leaderTitle || 'Leader'}: {min.leader}
                </p>

                {/* Brief details body */}
                <p className="text-sm text-light font-sans mb-4 group-hover:text-dark transition-colors line-clamp-3">
                  {min.tagline}
                </p>
              </div>

              {/* Action item link */}
              <div className="pt-4 border-t border-secondary/10 group-hover:border-secondary/20 flex items-center justify-between mt-auto">
                <span className="text-xs text-secondary-light font-sans font-medium">
                  {min.meetingTime}
                </span>
                <span className="text-xs font-sans font-bold text-primary group-hover:text-secondary inline-flex items-center gap-1 transition-colors">
                  Learn More
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Core CTA */}
        <div className="text-center font-sans">
          <p className="text-sm text-light mb-4 text-center">
            Are you loaded with spiritual talents or willing to learn and serve? Get involved in our departments today.
          </p>
          <button
            id="ministries-full-cta"
            onClick={onLearnMore}
            className="bg-secondary hover:bg-secondary-light text-primary font-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all shadow-md transform hover-scale-105"
          >
            Explore Department Details
          </button>
        </div>

      </div>
    </section>
  );
}
