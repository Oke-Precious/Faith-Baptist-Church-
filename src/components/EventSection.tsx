import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Check, BookmarkMinus, ChevronRight, X, Sparkles } from 'lucide-react';
import { EVENTS } from '../churchData';
import { ChurchEvent } from '../types';

interface EventSectionProps {
  onLearnMore: () => void;
}

export default function EventSection({ onLearnMore }: EventSectionProps) {
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
  const [userRegistered, setUserRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleRegisterClick = (e: React.MouseEvent, event: ChurchEvent) => {
    e.stopPropagation();
    setSelectedEvent(event);
    setUserRegistered(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserRegistered(true);
  };

  return (
    <section 
      id="events-section" 
      className="bg-white py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-3">
              Mark Your Calendar
            </span>
            <h2 id="events-section-title" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight">
              Upcoming Faith Encounters
            </h2>
            <div className="h-1 w-20 bg-secondary mt-3 mx-auto md:mx-0 rounded-full" />
          </div>
          <div>
            <button
              id="view-all-events-top-btn"
              onClick={onLearnMore}
              className="flex items-center gap-1.5 text-primary hover:text-secondary font-sans font-bold text-sm tracking-wide transition-colors group"
            >
              See Full Calendar
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* 3-Column Event Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {EVENTS.map((item) => {
            // Pick a month/day mock from the event dates so it displays clean badge text
            const dateSplits = item.date.split(" ");
            const monthText = dateSplits[0] || "JUN";
            const dayText = dateSplits[1]?.replace(",", "") || "15";

            return (
              <div
                key={item.id}
                id={`event-card-${item.id}`}
                className="bg-accent rounded-3xl overflow-hidden border border-secondary/10 hover:border-secondary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group h-full"
              >
                {/* Visual Cover */}
                <div className="relative h-[210px] overflow-hidden bg-primary">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/30 transition-colors" />

                  {/* Absolute date badge floating top right */}
                  <div className="absolute top-4 right-4 bg-primary text-secondary rounded-2xl p-2.5 shadow-lg border border-secondary/20 text-center w-14">
                    <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest block text-secondary leading-none mb-1">
                      {monthText.substring(0, 3)}
                    </span>
                    <span className="text-xl font-serif font-bold block text-white leading-none">
                      {dayText.substring(0, 2)}
                    </span>
                  </div>

                  {/* Absolute category badge */}
                  <span className="absolute bottom-4 left-4 bg-black/50 text-white rounded-md px-3 py-1 text-[11px] font-sans font-bold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Event Card Info */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title heading */}
                    <h3 className="font-serif text-lg md:text-xl font-bold text-primary group-hover:text-secondary transition-colors mb-4 line-clamp-2 leading-tight">
                      {item.title}
                    </h3>

                    {/* Meta stats lines */}
                    <div className="space-y-2.5 mb-6">
                      <div className="flex items-center gap-2.5 text-xs text-light font-sans font-medium">
                        <Calendar className="w-4 h-4 text-secondary shrink-0" />
                        <span>{item.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-light font-sans font-medium">
                        <Clock className="w-4 h-4 text-secondary shrink-0" />
                        <span>{item.time}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-light font-sans font-medium">
                        <MapPin className="w-4 h-4 text-secondary shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Item Buttons */}
                  <div className="border-t border-secondary/10 pt-5 mt-auto flex items-center justify-between gap-2.5">
                    <button
                      onClick={onLearnMore}
                      className="text-xs font-sans font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                    >
                      More Info
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={(e) => handleRegisterClick(e, item)}
                      className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs px-4 py-2.5 rounded-lg transition-all shadow-sm shrink-0"
                    >
                      Register Seat
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Alternate Bottom Button */}
        <div className="text-center md:hidden">
          <button
            onClick={onLearnMore}
            className="bg-primary hover:bg-primary-dark text-white font-sans font-bold px-6 py-3 rounded-full text-sm inline-flex items-center gap-2"
          >
            See Full Calendar
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Register Seat Popup Modal Dialog */}
      {selectedEvent && (
        <div 
          id="event-register-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative border-t-8 border-secondary animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button modal */}
            <button 
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 text-primary bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              {!userRegistered ? (
                <>
                  <div className="flex items-center gap-2 bg-secondary/10 text-secondary w-fit px-3 py-1 rounded-full text-[10px] uppercase font-sans font-bold mb-4 tracking-wider">
                    <Sparkles className="w-3 h-3 text-secondary" />
                    Register for Event
                  </div>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-3 leading-snug">
                    {selectedEvent.title}
                  </h4>

                  <p className="text-xs text-light font-sans mb-6">
                    Fill out the short registration below to secure your seat. We will send reminders and specialized conference materials to your inbox.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 gray-label">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm text-dark font-sans focus:outline-none focus:border-secondary transition-colors"
                        placeholder="e.g. Bro. Caleb Adebayo"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 gray-label">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm text-dark font-sans focus:outline-none focus:border-secondary transition-colors"
                        placeholder="e.g. caleb@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 gray-label">Phone Number (WhatsApp preferred)</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm text-dark font-sans focus:outline-none focus:border-secondary transition-colors"
                        placeholder="e.g. 08012345678"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all hover:shadow-lg mt-2 tracking-wide"
                    >
                      Complete Registration
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-serif text-2xl font-bold text-primary mb-2">
                    Seat Registered!
                  </h4>
                  <p className="text-xs text-secondary-light font-sans font-bold tracking-wider uppercase mb-4">
                    Praise Chapel Oke-Owode
                  </p>

                  <p className="text-sm font-sans text-light mb-6">
                    Thank you, <strong className="text-dark">{formData.name}</strong>! Your seat at the <strong>{selectedEvent.title}</strong> is fully secured. We have logged your email (<em>{formData.email}</em>) for updates.
                  </p>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-sm px-6 py-2.5 rounded-lg"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
