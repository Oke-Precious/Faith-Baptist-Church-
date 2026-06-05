import React, { useState, useRef } from 'react';
import { MINISTRIES } from '../churchData';
import { 
  Shield, 
  Heart, 
  Flame, 
  Baby, 
  Music, 
  Globe2, 
  BookOpen, 
  Clock, 
  User, 
  Mail, 
  Phone, 
  MessageSquare, 
  Calendar, 
  CheckCircle,
  HelpCircle,
  Compass,
  Crown,
  Gem
} from 'lucide-react';

export default function MinistriesPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ministryId: 'min-1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Dynamic Lucide icon selection for each ministry card
  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-6 h-6 text-secondary-dark" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-secondary-dark" />;
      case "Flame":
        return <Flame className="w-6 h-6 text-secondary-dark" />;
      case "Baby":
        return <Baby className="w-6 h-6 text-secondary-dark" />;
      case "Music":
        return <Music className="w-6 h-6 text-secondary-dark" />;
      case "Globe2":
        return <Globe2 className="w-6 h-6 text-secondary-dark" />;
      case "BookOpen":
        return <BookOpen className="w-6 h-6 text-secondary-dark" />;
      case "Compass":
        return <Compass className="w-6 h-6 text-secondary-dark" />;
      case "Crown":
        return <Crown className="w-6 h-6 text-secondary-dark" />;
      case "Gem":
        return <Gem className="w-6 h-6 text-secondary-dark" />;
      default:
        return <HelpCircle className="w-6 h-6 text-secondary-dark" />;
    }
  };

  // Scroll to the volunteer join form and pre-select the clicked ministry
  const handleJoinClick = (ministryId: string) => {
    setFormData(prev => ({ ...prev, ministryId }));
    
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Handle volunteer form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      ministryId: 'min-1',
      message: ''
    });
    setSubmitted(false);
  };

  // Find the selected ministry details to display in the success message
  const selectedMinistryName = MINISTRIES.find(m => m.id === formData.ministryId)?.name || 'the select team';

  return (
    <div id="ministries-page-wrapper" className="pt-20 md:pt-24 bg-accent/30 min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section 
        id="ministries-page-hero" 
        className="relative bg-primary text-white py-20 md:py-28 overflow-hidden"
      >
        {/* Background Overlay Graphic */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
            alt="Faith and Prayer Group" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Curved decorative divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="fill-accent w-full h-[24px] md:h-[40px] block" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 h1200 v-120 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-secondary uppercase tracking-[0.25em] font-sans font-bold text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 inline-block">
            Praise Chapel Departments
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-none mb-6">
            Our Ministries
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-secondary-light max-w-2xl mx-auto font-sans font-medium text-amber-200">
            Find your place to serve and grow
          </p>
        </div>
      </section>

      {/* 2. MINISTRY CARDS GRID */}
      <section 
        id="ministries-section-cards" 
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 tracking-tight">
            Ministries & Fellowships
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-light font-sans">
            Every member is uniquely gifted to serve. Go through our departments, connect with a leader, and declare your willingness to serve today!
          </p>
        </div>

        {/* 2-Column Grid */}
        <div id="ministries-cards-grid" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {MINISTRIES.map((min) => (
            <div 
              key={min.id}
              id={`ministry-card-${min.id}`}
              className="bg-white rounded-3xl overflow-hidden border border-secondary/15 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Image Banner */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img 
                  src={min.image} 
                  alt={min.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div>
                    <span className="text-[10px] uppercase font-sans font-bold tracking-widest text-secondary-light bg-primary/80 px-2.5 py-1 rounded-md border border-secondary/20 mb-2 inline-block">
                      {min.leaderTitle || 'Leader'}: {min.leader}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-tight">
                      {min.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Card Body Details */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between space-y-6">
                <div>
                  {/* Icon & Mini-tagline info */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0 border border-secondary/25">
                      {getMinistryIcon(min.iconName)}
                    </div>
                    <div>
                      <p className="text-xs font-sans font-bold text-secondary-dark italic tracking-wide">
                        "{min.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Complete 3-4 sentence description */}
                  <p className="text-sm text-light leading-relaxed font-sans">
                    {min.description}
                  </p>
                </div>

                {/* Logistics details and Submit Trigger */}
                <div className="pt-6 border-t border-accent border-dashed space-y-4">
                  <div className="flex items-center gap-2 text-xs text-primary font-sans font-bold bg-accent/60 px-4 py-2.5 rounded-xl border border-secondary/5">
                    <Clock className="w-4 h-4 text-secondary-dark shrink-0" />
                    <span>Schedule: <strong className="text-secondary-dark">{min.meetingTime}</strong></span>
                  </div>

                  <button
                    id={`cta-join-${min.id}`}
                    onClick={() => handleJoinClick(min.id)}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase py-3 px-4 rounded-xl tracking-wider shadow-sm transition-all group-hover:bg-secondary group-hover:text-primary duration-300"
                  >
                    Join {min.name}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. VOLUNTEER/JOIN FORM SECTION */}
      <section 
        ref={formRef}
        id="ministries-join-form-section" 
        className="bg-primary text-white py-16 md:py-24 relative overflow-hidden"
      >
        {/* Subtle radial light glow from bottom */}
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-0 pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
            <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-[11px] block mb-2">
              Expression of Interest
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white tracking-tight mb-4">
              Get Involved Personally
            </h2>
            <div className="h-0.5 w-16 bg-secondary mx-auto rounded-full mb-4" />
            <p className="text-xs sm:text-sm text-secondary-light/80 font-sans leading-relaxed">
              Serving is a privilege that brings spiritual fruit. Complete our confidential volunteering profile below, and our pastoral and leadership team will contact you directly to organize your placement.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 text-dark font-sans shadow-2xl border border-secondary/10">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-secondary-dark" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-accent/45 border border-secondary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                      placeholder="e.g. Brother Samuel Adebayo"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-secondary-dark" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-accent/45 border border-secondary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                      placeholder="e.g. samuel.adebayo@gmail.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone field */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-secondary-dark" />
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-accent/45 border border-secondary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                      placeholder="e.g. 08012345678"
                    />
                  </div>

                  {/* Ministry of Interest dropdown selection list */}
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-2 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-secondary-dark" />
                      Ministry of Interest *
                    </label>
                    <select
                      value={formData.ministryId}
                      onChange={(e) => setFormData({ ...formData, ministryId: e.target.value })}
                      className="w-full bg-accent/45 border border-secondary/20 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                    >
                      {MINISTRIES.map((min) => (
                        <option key={min.id} value={min.id}>
                          {min.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Personal Message/Why serve context */}
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-2 flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-secondary-dark" />
                    How would you like to serve in this department? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-accent/45 border border-secondary/20 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium resize-none"
                    placeholder="Tell us a little bit about your experiences, expectations, or background..."
                  />
                </div>

                {/* "I want to serve" button with rich loading feedback */}
                <button
                  type="submit"
                  id="ministries-submit-serve-btn"
                  className="w-full bg-secondary hover:bg-secondary-light text-primary font-sans font-bold uppercase text-xs sm:text-sm tracking-widest py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-2 block"
                >
                  I want to serve
                </button>
              </form>
            ) : (
              /* Submission Successful State */
              <div className="text-center py-6 font-sans">
                <div className="w-16 h-16 bg-green-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10" />
                </div>
                
                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-2">
                  Thank You for Offering!
                </h4>
                <p className="text-xs text-secondary-dark font-sans font-extrabold tracking-widest uppercase mb-5">
                  Registration Successful
                </p>

                <div className="max-w-md mx-auto bg-accent/50 rounded-2xl p-5 border border-secondary/15 text-left mb-6 space-y-3.5">
                  <p className="text-xs text-light leading-relaxed font-semibold">
                    God bless your willing heart, <strong className="text-primary">{formData.name}</strong>! Your application to serve within the <strong className="text-primary">{selectedMinistryName}</strong> team has been registered in our central administrator database.
                  </p>
                  <p className="text-xs text-light leading-relaxed">
                    Our department leaders and deacon-in-charge have received your contact number (<em>{formData.phone}</em>) and email address (<em>{formData.email}</em>). We will follow up with you on WhatsApp within the next 48 hours.
                  </p>
                </div>

                <button
                  onClick={resetForm}
                  className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl tracking-wider shadow-sm transition-all inline-block"
                >
                  Submit Another Response
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
