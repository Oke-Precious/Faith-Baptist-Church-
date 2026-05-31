import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, CheckCircle, Flame, Star, X } from 'lucide-react';
import { Page } from '../types';

export default function ContactPage() {
  const [activeFormTab, setActiveFormTab] = useState<'contact' | 'prayer'>('contact');
  const [submittedContact, setSubmittedContact] = useState(false);
  const [submittedPrayer, setSubmittedPrayer] = useState(false);

  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [prayerForm, setPrayerForm] = useState({ name: '', topic: 'Family Breakthrough', request: '', isUrgent: false });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedContact(true);
  };

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedPrayer(true);
  };

  return (
    <div id="contact-page-wrapper" className="pt-24 md:pt-28">
      
      {/* Banner */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Intercessory hands" 
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
            Prayer & Contacts
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-bold text-xs sm:text-sm">
            We are here to listen and pray with you
          </p>
        </div>
      </section>

      {/* Main interactive layouts */}
      <section className="bg-accent py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Coordinates & Maps panel */}
            <div className="lg:col-span-5 space-y-8">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Parish Location</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
                Our Oke-Owode Sanctuary Coordinates
              </h2>
              <p className="text-sm font-sans text-light leading-relaxed">
                We are conveniently located in the Oke-Owode district of Ogbomoso. If you are dynamic or studying around Bowen / LAUTECH campus, dropping by for Sunday School and communion worship is incredibly convenient.
              </p>

              {/* Vector Address Cards */}
              <div className="space-y-4">
                <div className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <MapPin className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light">
                    <strong className="text-dark font-serif font-bold text-base block mb-1">Sanctuary Address</strong>
                    Opposite Secondary School Area, Oke-Owode, <br />
                    Ogbomoso, Oyo State, Nigeria.
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <Phone className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light font-medium">
                    <strong className="text-dark font-serif font-bold text-base block mb-1">Pastorate Lines</strong>
                    Admin WhatsApp: +234 803 123 4567 <br />
                    Counseling Hot line: +234 705 987 6543
                  </div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light">
                    <strong className="text-dark font-serif font-bold text-base block mb-1">Official Mailbox</strong>
                    General inquiry: <a href="mailto:info@faithbaptistogbomoso.org" className="text-primary italic hover:underline">info@faithbaptistogbomoso.org</a>
                  </div>
                </div>
              </div>

              {/* Map Static Placeholder */}
              <div className="relative group rounded-3xl overflow-hidden shadow-md h-[220px] bg-primary border-4 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1524661135339-9140b00787e3?auto=format&fit=crop&q=80&w=800" 
                  alt="City street map placeholder" 
                  className="w-full h-full object-cover filter brightness-[70%] contrast-[110%]"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-primary/20 flex flex-col items-center justify-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center animate-bounce mb-3 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h4 className="font-serif text-sm font-extrabold text-white tracking-wide">Praise Chapel Sanctuary</h4>
                  <p className="text-[10px] text-white/80 font-sans uppercase font-bold tracking-widest mt-0.5">Oke-Owode Area • Ogbomoso</p>
                </div>
              </div>

            </div>

            {/* Right Card Panel supporting Tab Swapping (Inquiry vs Prayer request) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-secondary/10">
                
                {/* Form Tab selectors */}
                <div className="flex bg-accent p-1 rounded-xl mb-8">
                  <button
                    onClick={() => setActiveFormTab('contact')}
                    className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all ${
                      activeFormTab === 'contact'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-light hover:text-dark'
                    }`}
                  >
                    <Mail className="w-4 h-4" />
                    Inquiries
                  </button>
                  <button
                    onClick={() => setActiveFormTab('prayer')}
                    className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all ${
                      activeFormTab === 'prayer'
                        ? 'bg-primary text-white shadow-md'
                        : 'text-light hover:text-dark'
                    }`}
                  >
                    <Flame className="w-4 h-4 text-secondary" />
                    Prayer Requests
                  </button>
                </div>

                {/* Form fields rendering */}
                {activeFormTab === 'contact' ? (
                  <>
                    {!submittedContact ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4 font-sans text-left">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block">Full Name</label>
                          <input
                            type="text"
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                            placeholder="e.g. Deaconess Deborah Alao"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block font-sans">Email Address</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                            placeholder="e.g. deborah@example.com"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block font-sans">Message</label>
                          <textarea
                            required
                            rows={4}
                            value={contactForm.message}
                            onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark resize-none"
                            placeholder="Type details about your inquiry or visit requests here..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4 text-secondary" />
                          Send Inquiry Message
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-10 animate-in fade-in duration-300">
                        <div className="w-16 h-16 bg-blue-50 text-secondary border border-secondary/15 rounded-full flex items-center justify-center mx-auto mb-6">
                          <CheckCircle className="w-8 h-8 font-extrabold" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-primary mb-2">Message Dispatched!</h3>
                        <p className="text-sm font-sans text-light mb-6">
                          Thank you, <strong className="text-dark">{contactForm.name}</strong>! We have logged your general inquiry securely. Our admin assistants will review and reply back to your email: <em>{contactForm.email}</em> shortly.
                        </p>
                        <button
                          onClick={() => setSubmittedContact(false)}
                          className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-2.5 rounded-lg"
                        >
                          Send Another Message
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <>
                    {!submittedPrayer ? (
                      <form onSubmit={handlePrayerSubmit} className="space-y-4 font-sans">
                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block">Your Name (or write "Anonymous")</label>
                          <input
                            type="text"
                            required
                            value={prayerForm.name}
                            onChange={(e) => setPrayerForm({ ...prayerForm, name: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                            placeholder="e.g. Bro. Olusola Babalola"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block font-sans">Prayer Topic</label>
                            <select
                              value={prayerForm.topic}
                              onChange={(e) => setPrayerForm({ ...prayerForm, topic: e.target.value })}
                              className="w-full bg-accent border border-secondary/15 rounded-xl px-2.5 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark font-medium"
                            >
                              <option value="Family Breakthrough">Family Breakthrough</option>
                              <option value="Healing & Wholeness">Divine Healings</option>
                              <option value="Academic success">LAUTECH / Bowen Academics</option>
                              <option value="Business & Finance success">Business Growth & Career</option>
                              <option value="Salvation & spiritual growth">Spiritual Growth & Salvation</option>
                            </select>
                          </div>
                          
                          <div className="flex items-center gap-2.5 h-full self-stretch justify-start pt-5 pl-2">
                            <input
                              type="checkbox"
                              id="checkbox-is-urgent"
                              checked={prayerForm.isUrgent}
                              onChange={(e) => setPrayerForm({ ...prayerForm, isUrgent: e.target.checked })}
                              className="w-4 h-4 rounded text-primary focus:ring-primary focus:ring-1 cursor-pointer accent-secondary"
                            />
                            <label htmlFor="checkbox-is-urgent" className="text-xs font-sans font-semibold text-primary uppercase tracking-wide cursor-pointer flex items-center gap-1">
                              <span className="text-red-500 font-extrabold animate-pulse">●</span> Urgent Request
                            </label>
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 inline-block">Describe Your Prayer Request</label>
                          <textarea
                            required
                            rows={4}
                            value={prayerForm.request}
                            onChange={(e) => setPrayerForm({ ...prayerForm, request: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark resize-none"
                            placeholder="Write your brief requests in detail. Our elders and intercessory teams will speak into your situation..."
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                        >
                          <Flame className="w-4 h-4 text-secondary fill-secondary animate-pulse" />
                          Log Spiritual Intercession Target
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-10 animate-in fade-in duration-350">
                        <div className="w-16 h-16 bg-red-50 text-red-600 border border-red-200 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Flame className="w-8 h-8 fill-red-600 animate-pulse" />
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-primary mb-2">Prayer request received!</h3>
                        <p className="text-xs text-secondary-light font-sans font-bold uppercase tracking-wider mb-4">
                          Intercessors Standing in Covenant
                        </p>
                        <p className="text-sm font-sans text-light mb-6">
                          Hallelujah! <strong className="text-dark">{prayerForm.name}</strong>, your prayer request regarding <strong>"{prayerForm.topic}"</strong> is logged into our temple sanctuary program. <strong>Rev. Dr. J. O. Ogunyode-Agbaosi</strong> and our intercessors team will pray over this request this Friday. Walk in faith!
                        </p>
                        <button
                          onClick={() => setSubmittedPrayer(false)}
                          className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-2.5 rounded-lg"
                        >
                          Submit Another Prayer Point
                        </button>
                      </div>
                    )}
                  </>
                )}

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
