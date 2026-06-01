import React from 'react';
import { Calendar, Clock, MapPin, Sparkles, BookOpen, Flame, ShieldAlert, Users } from 'lucide-react';
import { STUDY_AND_WORSHIP_TIMES } from '../churchData';

interface ServiceTimesProps {
  onPlanVisit: () => void;
}

export default function ServiceTimes({ onPlanVisit }: ServiceTimesProps) {
  
  // Dynamic icon selector helper
  const renderServiceIcon = (id: string) => {
    switch (id) {
      case "wt-1":
        return <Sparkles className="w-6 h-6 text-secondary" />;
      case "wt-2":
        return <Users className="w-6 h-6 text-secondary" />;
      case "wt-3":
        return <BookOpen className="w-6 h-6 text-secondary" />;
      default:
        return <Calendar className="w-6 h-6 text-secondary" />;
    }
  };

  return (
    <section 
      id="service-times-section" 
      className="bg-white py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-3">
            Worship and Study Encounters
          </span>
          <h2 id="service-times-title" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mb-4">
            Our Regular Service Times
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-light font-sans">
            "For where two or three are gathered together in my name, there am I in the midst of them." — Matthew 18:20. Find a service that fits your schedule.
          </p>
        </div>

        {/* 3-Column Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {STUDY_AND_WORSHIP_TIMES.map((service, idx) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-accent hover:bg-primary group hover:text-white rounded-2xl p-8 border border-secondary/10 transition-all duration-300 hover:shadow-2xl flex flex-col justify-between transform hover:-translate-y-2"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-primary/5 group-hover:bg-white/10 flex items-center justify-center mb-6 border border-secondary/20">
                  {renderServiceIcon(service.id)}
                </div>

                {/* Day Badge */}
                <span className="text-xs font-sans font-bold tracking-widest text-secondary uppercase bg-secondary/15 group-hover:bg-secondary/25 px-3 py-1 rounded-full mb-3 inline-block">
                  {service.day}
                </span>

                {/* Main Heading title */}
                <h3 className="text-xl font-serif font-bold text-primary group-hover:text-white mb-3 mt-1">
                  {service.title}
                </h3>

                {/* Body paragraph */}
                <p className="text-sm text-light group-hover:text-white/80 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Time & Location details footer */}
              <div className="border-t border-secondary/10 group-hover:border-white/10 pt-5 mt-auto space-y-3">
                <div className="flex items-center gap-2.5 text-xs font-sans font-medium text-primary group-hover:text-secondary-light">
                  <Clock className="w-4 h-4 text-secondary group-hover:text-secondary-light shrink-0" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-sans font-medium text-light group-hover:text-white/90">
                  <MapPin className="w-4 h-4 text-secondary shrink-0" />
                  <span className="tracking-wide">{service.location} ({service.day})</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA prompt Visit */}
        <div className="text-center">
          <p className="text-sm text-light font-sans mb-4">
            Visiting for the first time? We have hostesses and ministers waiting to welcome you customly!
          </p>
          <button
            id="service-times-cta"
            onClick={onPlanVisit}
            className="bg-primary hover:bg-primary-dark text-white hover:text-secondary font-sans font-bold text-sm px-8 py-3.5 rounded-full transition-all tracking-wide shadow-md hover:shadow-xl"
          >
            Plan My Visit This Sunday
          </button>
        </div>

      </div>
    </section>
  );
}
