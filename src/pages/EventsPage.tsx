import React, { useState } from 'react';
import { EVENTS } from '../churchData';
import { ChurchEvent } from '../types';
import { Calendar, Clock, MapPin, Sparkles, Check, ChevronRight, X } from 'lucide-react';

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<ChurchEvent | null>(null);
  const [userRegistered, setUserRegistered] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const pastEvents = [
    { title: "2025 Christmas Carol & Praise Concert", date: "Dec 14, 2025", image: "https://picsum.photos/seed/carol/800/500", desc: "Our annual grand music festival gathering over 800 worshippers." },
    { title: "Young Scholars Spiritual Reorientation", date: "April 18, 2026", image: "https://picsum.photos/seed/lautech/800/500", desc: "Strategic campus focus session for LAUTECH students." },
    { title: "Ogbomoso Baptist Association Youth Rally", date: "May 10, 2026", image: "https://picsum.photos/seed/youthrally/800/500", desc: "Acclaimed Ogbomoso gathering encouraging spiritual resilience." },
  ];

  const handleRegisterClick = (item: ChurchEvent) => {
    setSelectedEvent(item);
    setUserRegistered(false);
    setFormData({ name: '', email: '', phone: '' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserRegistered(true);
  };

  return (
    <div id="events-page-wrapper" className="pt-24 md:pt-28">
      
      {/* Banner segment */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Events assembly" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="fill-accent w-full h-[30px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 h1200 v-120 Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 animate-in fade-in duration-500">
            Church Calendar & Events
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-bold text-xs sm:text-sm">
            Be part of our next encounter
          </p>
        </div>
      </section>

      {/* Core Upcoming Events */}
      <section className="bg-accent py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="space-y-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center md:text-left">
              Upcoming Faith Calendars
            </h2>
            <div className="h-1 w-20 bg-secondary" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {EVENTS.map((item) => {
                const dateSplits = item.date.split(" ");
                const monthText = dateSplits[0] || "JUN";
                const dayText = dateSplits[1]?.replace(",", "") || "15";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-secondary/15 flex flex-col justify-between group h-full"
                  >
                    <div className="relative h-[200px] overflow-hidden bg-primary">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/25" />
                      
                      <div className="absolute top-4 right-4 bg-primary text-secondary rounded-2xl p-2.5 text-center w-14 border border-secondary/20 shadow-md">
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest block text-secondary leading-none mb-1">
                          {monthText.substring(0, 3)}
                        </span>
                        <span className="text-xl font-serif font-bold block text-white leading-none">
                          {dayText.substring(0, 2)}
                        </span>
                      </div>

                      <span className="absolute bottom-4 left-4 bg-black/60 text-white rounded-md px-2.5 py-1 text-[10px] font-sans font-bold uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-primary group-hover:text-secondary transition-colors leading-snug mb-4 line-clamp-2">
                          {item.title}
                        </h3>

                        <div className="space-y-2.5 mb-6 text-xs text-light font-sans font-semibold">
                          <div className="flex items-center gap-2.5">
                            <Calendar className="w-4 h-4 text-secondary shrink-0" />
                            <span>{item.date}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <Clock className="w-4 h-4 text-secondary shrink-0" />
                            <span>{item.time}</span>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <MapPin className="w-4 h-4 text-secondary shrink-0" />
                            <span className="truncate">{item.location}</span>
                          </div>
                        </div>

                        <p className="text-xs text-light leading-relaxed font-sans mb-6">
                          {item.description}
                        </p>
                      </div>

                      <button
                        onClick={() => handleRegisterClick(item)}
                        className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-sm"
                      >
                        Reserve My Free Spot
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Past Event Chronicles */}
          <div className="space-y-8 pt-6 border-t border-secondary/20">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary text-center md:text-left">
              Past Event Chronicles
            </h2>
            <div className="h-1 w-20 bg-secondary" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pastEvents.map((pe, idx) => (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden border border-secondary/10 shadow-xs group"
                >
                  <div className="h-[180px] overflow-hidden relative">
                    <img 
                      src={pe.image} 
                      alt={pe.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300 filter grayscale-[20%] hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-primary/20" />
                    <span className="absolute bottom-4 left-4 bg-primary text-secondary text-[10px] font-sans font-bold uppercase py-1 px-2.5 rounded">
                      Completed • {pe.date}
                    </span>
                  </div>
                  <div className="p-5 font-sans">
                    <h4 className="font-serif text-base font-bold text-primary mb-2 line-clamp-1">{pe.title}</h4>
                    <p className="text-xs text-light leading-relaxed font-sans">{pe.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Seat Registration Popup Modal */}
      {selectedEvent && (
        <div 
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative border-t-8 border-secondary animate-in zoom-in-95 duration-250"
          >
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
                    <Sparkles className="w-3 h-3" />
                    Instant Reservation
                  </div>
                  
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2 leading-tight">
                    {selectedEvent.title}
                  </h4>

                  <p className="text-xs text-light font-sans mb-6">
                    Join this glorious encounter. We will lock down your seat registration and alert you with WhatsApp schedule details leading up to {selectedEvent.date}.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[10px] font-sans uppercase font-bold tracking-wider text-primary mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                        placeholder="e.g. Sis. Helen Okonta"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans uppercase font-bold tracking-wider text-primary mb-1">Active Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                        placeholder="e.g. helen@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-sans uppercase font-bold tracking-wider text-primary mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                        placeholder="e.g. 08012345678"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-4 rounded-xl shadow-md mt-2 transition-all"
                    >
                      Lock Down My Seat
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-serif text-2xl font-bold text-primary mb-2">
                    Registration Verified!
                  </h4>
                  <p className="text-xs text-secondary font-sans font-bold tracking-widest uppercase mb-4">
                    Oke-Owode Praise Chapel
                  </p>

                  <p className="text-sm font-sans text-light mb-6">
                    Hallelujah, <strong className="text-dark">{formData.name}</strong>! We have processed your seat reservation for the <strong>{selectedEvent.title}</strong>. Updates will be sent to <em>{formData.email}</em> and your line <em>{formData.phone}</em>.
                  </p>

                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-sm px-6 py-2.5 rounded-lg"
                  >
                    Alright
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
