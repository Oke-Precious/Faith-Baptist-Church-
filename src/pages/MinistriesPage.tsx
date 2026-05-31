import React, { useState } from 'react';
import { MINISTRIES } from '../churchData';
import { Shield, Heart, Music, Flame, Baby, Globe2, BookOpen, Clock, Calendar, Check, X } from 'lucide-react';

export default function MinistriesPage() {
  const [activeMinistryId, setActiveMinistryId] = useState<string | null>(null);
  const [joined, setJoined] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', reason: '' });

  const renderMinIcon = (iconName: string, sizeClass = "w-6 h-6") => {
    switch (iconName) {
      case "Shield":
        return <Shield className={`${sizeClass} text-secondary`} />;
      case "Heart":
        return <Heart className={`${sizeClass} text-secondary`} />;
      case "Music":
        return <Music className={`${sizeClass} text-secondary`} />;
      case "Flame":
        return <Flame className={`${sizeClass} text-secondary`} />;
      case "Baby":
        return <Baby className={`${sizeClass} text-secondary`} />;
      case "Globe2":
        return <Globe2 className={`${sizeClass} text-secondary`} />;
      default:
        return <Heart className={`${sizeClass} text-secondary`} />;
    }
  };

  const handleEnrollClick = (minId: string) => {
    setActiveMinistryId(minId);
    setJoined(false);
    setFormData({ name: '', phone: '', reason: '' });
  };

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoined(true);
  };

  const currentMinistry = MINISTRIES.find(m => m.id === activeMinistryId);

  return (
    <div id="ministries-page-wrapper" className="pt-24 md:pt-28">
      
      {/* Banner segment */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Worship departments" 
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
            Departments & Fellowships
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-bold text-xs sm:text-sm">
            Serving the Body of Christ in Unity
          </p>
        </div>
      </section>

      {/* Main details list layout of Ministries */}
      <section className="bg-accent py-14 md:py-20 animate-in fade-in duration-750">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 gap-12 lg:gap-16">
            {MINISTRIES.map((min, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={min.id}
                  id={`ministry-detail-row-${min.id}`}
                  className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-secondary/10 flex flex-col lg:flex-row gap-8 items-center"
                >
                  {/* Photo Section */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:order-first' : 'lg:order-last'}`}>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video lg:aspect-square max-h-[350px]">
                      <img 
                        src={min.image} 
                        alt={min.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-primary/10" />
                    </div>
                  </div>

                  {/* Copy details */}
                  <div className="w-full lg:w-7/12 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center border border-secondary/20">
                        {renderMinIcon(min.iconName)}
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-primary">
                        {min.name}
                      </h2>
                    </div>

                    <div className="h-0.5 w-16 bg-secondary" />

                    <p className="text-xs uppercase font-sans font-extrabold tracking-widest text-secondary inline-block bg-secondary/15 px-3 py-1 rounded-full">
                      Leader-in-charge: {min.leader}
                    </p>

                    <p className="font-sans text-sm sm:text-base text-dark leading-relaxed font-semibold">
                      {min.tagline}
                    </p>

                    <p className="font-sans text-xs sm:text-sm text-light leading-relaxed">
                      {min.description}
                    </p>

                    {/* Operational Details bullet coordinates */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-accent/60 p-4 rounded-2xl border border-secondary/10">
                      <div className="flex items-center gap-2.5 text-xs text-primary font-sans font-bold">
                        <Clock className="w-4 h-4 text-secondary shrink-0" />
                        <span>Schedule: {min.meetingTime}</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-xs text-light font-sans font-semibold">
                        <Calendar className="w-4 h-4 text-secondary shrink-0" />
                        <span>Frequency: Weekly Encounter</span>
                      </div>
                    </div>

                    <button
                      id={`enroll-btn-${min.id}`}
                      onClick={() => handleEnrollClick(min.id)}
                      className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-5 py-3 rounded-lg tracking-wide shadow-sm transition-all"
                    >
                      Get Involved in {min.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Enroll Form Popup Modal */}
      {activeMinistryId && currentMinistry && (
        <div 
          id="enroll-modal-overlay"
          onClick={() => setActiveMinistryId(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative border-t-8 border-secondary"
          >
            <button 
              onClick={() => setActiveMinistryId(null)}
              className="absolute top-4 right-4 text-primary bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              {!joined ? (
                <>
                  <div className="flex items-center gap-2 bg-secondary/15 text-secondary w-fit px-3 py-1 rounded-full text-[10px] uppercase font-sans font-bold mb-4 tracking-wider">
                    {renderMinIcon(currentMinistry.iconName ?? 'Heart', 'w-3.5 h-3.5')}
                    Department Volunteer
                  </div>

                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2">
                    Join {currentMinistry.name}
                  </h4>
                  <p className="text-xs text-light font-sans mb-6">
                    Express your interest to minister with this team. Deacon {currentMinistry.leader.split(" ").slice(-1)[0]} or department leaders will respond back to you!
                  </p>

                  <form onSubmit={handleEnrollSubmit} className="space-y-4 font-sans">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                        placeholder="e.g. Bro. Caleb Adebayo"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block font-sans">WhatsApp Phone</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                        placeholder="e.g. 08012345678"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block font-sans">Why do you want to serve?</label>
                      <textarea
                        required
                        rows={3}
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark resize-none"
                        placeholder="Tell us about yourself or how you'd like to help..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all mt-2"
                    >
                      Submit Expression of Interest
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 bg-blue-50 text-secondary border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-serif text-2xl font-bold text-primary mb-1">
                    Application Sent!
                  </h4>
                  <p className="text-xs text-secondary-light font-sans font-bold tracking-wider uppercase mb-5">
                    {currentMinistry.name}
                  </p>

                  <p className="text-sm font-sans text-light mb-6">
                    God bless your willing heart, <strong className="text-dark">{formData.name}</strong>! We have passed your contact details (<em>{formData.phone}</em>) to <strong>{currentMinistry.leader}</strong>. Expect call feedback soon!
                  </p>

                  <button
                    onClick={() => setActiveMinistryId(null)}
                    className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-sm px-6 py-2.5 rounded-lg"
                  >
                    Close
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
