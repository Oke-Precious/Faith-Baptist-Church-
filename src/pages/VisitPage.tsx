import React, { useState } from 'react';
import { Page } from '../types';
import { 
  Home, 
  ChevronRight, 
  MapPin, 
  Phone, 
  Mail, 
  Compass, 
  Smile, 
  Music, 
  BookOpen, 
  HeartHandshake, 
  Clock, 
  Sparkles, 
  Accessibility, 
  Baby, 
  HelpCircle, 
  Send, 
  CheckCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PASTOR_NAME } from '../churchData';

interface VisitPageProps {
  onNavigate?: (page: Page) => void;
}

export default function VisitPage({ onNavigate }: VisitPageProps) {
  // Visitor Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    questions: ''
  });

  // Accordion State for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "01",
      title: "Arrive & Be Welcomed",
      icon: Smile,
      description: "As you drive in, you will find generous parking spaces. Our welcoming greeters will meet you at the entrance with warm smiles and direct you seamlessly into our sanctuary."
    },
    {
      step: "02",
      title: "Worship Together",
      icon: Music,
      description: "Experience authentic, spirit-led praise and deep worship. Our music style balances inspiring Baptist hymns with contemporary acoustic melodies that shift atmospheres."
    },
    {
      step: "03",
      title: "Hear the Word",
      icon: BookOpen,
      description: "Receive a bold, biblically sound, expository sermon delivered with real-world clarity. Rev. Dr. Jacob Olugbenga Ogunyode-Agbaosi shares highly practical wisdom to fuel your destiny."
    },
    {
      step: "04",
      title: "Connect with Community",
      icon: HeartHandshake,
      description: "Immediately after the benediction, meet our pastoral care team and elders at our visitors' reception. We have a special welcome pack ready just for you!"
    }
  ];

  const faqs = [
    {
      question: "Where do I park?",
      answer: "We have dedicated primary parking spaces inside the gated sanctuary compounds. Our active traffic wardens will guide you to a perfect parking spot when you arrive."
    },
    {
      question: "What about my kids?",
      answer: "We love families! Children aged 2–12 are invited to join our interactive Children's Church. It is structured to be dynamic, safe, and fun, allowing you to focus during the main service."
    },
    {
      question: "What if I'm late?",
      answer: "You are always welcome under God's roof! If you arrive after the opening prayer, our friendly ushers will silently guide you to select from our comfortable seats without disruption."
    },
    {
      question: "Is there a dress code?",
      answer: "We believe God looks heavily at the heart, not the wardrobe. You will see a beautiful diversity of smart casuals, formal suits, and striking African attire. Come as you are!"
    },
    {
      question: "Will I be asked to give money?",
      answer: "Absolutely not! Tithing and sowing cheerful seeds of offerings are entirely for our regular covenant builders. As our guest, please do not feel any pressure to contribute—this worship is our gift to you."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div id="visit-page-wrapper" className="pt-24 md:pt-28 font-sans">
      
      {/* 1. PAGE HERO */}
      <section id="visit-hero-section" className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=1200" 
            alt="Bible and sanctuary ambient lighting" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Curved Wave Bottom Divider */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="fill-accent w-full h-[30px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 h1200 v-120 Z" />
          </svg>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <nav className="flex justify-center items-center gap-2 text-xs text-white/75 font-sans mb-3 select-none">
            <button 
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-secondary hover:underline flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-secondary/70 shrink-0" />
            <span className="text-secondary font-bold">Plan Your Visit</span>
          </nav>

          <h1 id="visit-hero-title" className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            We'd Love to Have You
          </h1>
          <p id="visit-hero-subtitle" className="text-secondary-light tracking-wide font-serif italic text-base sm:text-lg max-w-2xl mx-auto font-medium">
            "Your first visit to Faith Baptist Church is just the beginning"
          </p>
        </div>
      </section>

      {/* Main Core Visit Content Sections Wrapper */}
      <section className="bg-accent py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* 2. WHAT TO EXPECT (Step-by-step) */}
          <div id="what-to-expect-section" className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Service Walkthrough</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-primary">
                What To Expect When You Visit
              </h2>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs sm:text-sm text-light leading-relaxed font-sans max-w-lg mx-auto">
                We believe steps taken in faith yield divine testimonies. Here is a brief look at how we worship together each Sunday.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div 
                    key={idx}
                    id={`expect-step-${idx + 1}`}
                    className="bg-white rounded-3xl p-6 sm:p-8 border border-secondary/10 shadow-xs hover:shadow-md transition-all relative flex flex-col items-center text-center space-y-4 group overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary/30" />
                    
                    {/* Circle Header with Step Number */}
                    <div className="relative">
                      <div className="w-14 h-14 rounded-full bg-primary/5 text-primary flex items-center justify-center border border-secondary/20 shadow-inner group-hover:scale-105 transition-transform">
                        <IconComp className="w-6 h-6 text-secondary" />
                      </div>
                      <span className="absolute -top-1 -right-2 bg-secondary text-primary font-serif font-extrabold text-[10px] w-6 h-6 rounded-full border-2 border-white flex items-center justify-center shadow-xs">
                        {item.step}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-primary group-hover:text-secondary-dark transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-light font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3. SERVICE TIMES & LOCATION (Google Maps Embed + details) */}
          <div id="visit-service-location-section" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left coordinates information */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Navigation Detail</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
                Our Oke-Owode Sanctuary Coordinates
              </h3>
              <p className="text-xs sm:text-sm font-sans text-light leading-relaxed">
                We are located right in the heart of Oke-Owode District, Ogbomoso. Our modern temple structure serves as a hub of prayer, making it highly accessible for students at Bowen and LAUTECH campuses.
              </p>

              {/* Service Details Cards */}
              <div className="space-y-4">
                <div id="card-address" className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <MapPin className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light">
                    <strong className="text-dark font-serif font-bold text-base block mb-0.5">Sanctuary Address</strong>
                    Opposite Secondary School Area, Oke-Owode, <br />
                    Ogbomoso, Oyo State, Nigeria.
                  </div>
                </div>

                <div id="card-phone" className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <Phone className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light font-medium">
                    <strong className="text-dark font-serif font-bold text-base block mb-0.5">Contact Lines</strong>
                    Admin WhatsApp: +234 803 123 4567 <br />
                    Counseling Support: +234 705 987 6543
                  </div>
                </div>

                <div id="card-email" className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs flex gap-4 items-start">
                  <Mail className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <div className="font-sans text-xs sm:text-sm text-light">
                    <strong className="text-dark font-serif font-bold text-base block mb-0.5">Email Support</strong>
                    Inquiries: <a href="mailto:info@faithbaptistogbomoso.org" className="text-primary italic hover:underline">info@faithbaptistogbomoso.org</a>
                  </div>
                </div>
              </div>

              {/* Directions CTA Button */}
              <div className="pt-2">
                <a 
                  id="btn-google-directions"
                  href="https://www.google.com/maps/dir/?api=1&destination=Faith+Baptist+Church,+Oke-Owode,+Ogbomoso,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-light text-primary font-sans font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md transform hover:scale-[1.02]"
                >
                  <Compass className="w-4 h-4" />
                  Get Driving Directions
                </a>
              </div>
            </div>

            {/* Right Map Embed Box */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[2rem] p-4 border border-secondary/10 shadow-sm">
                <div id="google-maps-embed-container" className="rounded-2xl overflow-hidden h-[355px] bg-slate-100 border border-slate-200 relative">
                  <iframe 
                    title="Faith Baptist Church Oke-Owode Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15777.41352595521!2d4.249412!3d8.6578964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370d64ea9c07cf%3A0xe7fe44a9b6c085ac!2sLautech%20Area%2C%20Ogbomosho!5e0!3m2!1sen!2sng!4v1717200000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    async
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="p-3 text-center text-dark/70 font-sans text-xs italic">
                  *Praise Chapel Campus is situated right opposite the Secondary School Area, Oke-Owode.
                </div>
              </div>
            </div>

          </div>

          {/* 4. DRESS CODE & CULTURE */}
          <div id="dress-code-culture-section" className="bg-white rounded-[2.5rem] border border-secondary/10 p-8 md:p-12 shadow-sm space-y-12">
            
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Temple Culture</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Our Dress Code & Assembly Culture
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
              {/* Card 1 - Come as you are */}
              <div id="culture-card-dress" className="bg-accent p-6 rounded-3xl border border-secondary/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white text-secondary flex items-center justify-center border border-secondary/15 shadow-xs shrink-0">
                    <Sparkles className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-primary">"Come As You Are"</h4>
                  <p className="text-xs text-light font-sans leading-relaxed">
                    At Faith Baptist, you will see a gorgeous blend of vibrant African native wear, suits, and clean casual clothing. We respect and focus on the posture of your heart over outward metrics.
                  </p>
                </div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-secondary inline-block">Flexible & Dignified Culture</span>
              </div>

              {/* Card 2 - Kids welcome */}
              <div id="culture-card-kids" className="bg-accent p-6 rounded-3xl border border-secondary/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center border border-secondary/15 shadow-xs shrink-0">
                    <Baby className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-primary">Kids & Families Welcome</h4>
                  <p className="text-xs text-light font-sans leading-relaxed">
                    Our dedicated Children's Church, led by Deaconess Esther Ajayi, delivers highly specialized Bible times with safe games, interactive lessons, and drinks, leaving you comfortable during service.
                  </p>
                </div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-secondary inline-block">Perfect for All Generations</span>
              </div>

              {/* Card 3 - Accessibility */}
              <div id="culture-card-accessibility" className="bg-accent p-6 rounded-3xl border border-secondary/10 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-white text-primary flex items-center justify-center border border-secondary/15 shadow-xs shrink-0">
                    <Accessibility className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-bold text-primary">Accessibility & Support</h4>
                  <p className="text-xs text-light font-sans leading-relaxed">
                    Praise Chapel holds accessible architecture. Our entrances feature step-free incline ramps, and our hospitable ushers are trained to offer senior sitting coordinates or any physical assistance.
                  </p>
                </div>
                <span className="text-[10px] uppercase font-sans font-bold tracking-wider text-secondary inline-block">Accessible To Everyone</span>
              </div>
            </div>

          </div>

          {/* 5. FIRST-TIME VISITOR FORM */}
          <div id="first-time-visitor-form-container" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-primary text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-lg">
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Left side text info */}
            <div className="lg:col-span-5 space-y-6 relative z-10">
              <span className="text-secondary text-xs uppercase font-sans font-bold tracking-[0.2em] block">Covenant Invitation</span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Let Us Know You're Coming!
              </h3>
              <p className="text-sm font-sans text-white/80 leading-relaxed max-w-sm">
                When you let us know you're planning a visit, we stand prepared to meet you. We will assign a hospitable host to welcome you, answer your inquiries, and guide your family to perfect coordinates.
              </p>
              
              <div className="pt-4 border-t border-white/10 space-y-2 select-none">
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Reserved seating coordinates.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Interactive welcome documentation pack.</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/90">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  <span>Special child-registration assistance.</span>
                </div>
              </div>
            </div>

            {/* Right side form block */}
            <div className="lg:col-span-7 relative z-10 w-full">
              <div className="bg-white rounded-3xl p-6 sm:p-8 text-dark shadow-md border border-secondary/5">
                {!formSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4 font-sans text-left">
                    <h4 className="font-serif text-lg sm:text-xl font-bold text-primary mb-2">Visitor Registration Form</h4>
                    
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans"
                        placeholder="e.g. Samuel Adebayo"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans"
                          placeholder="e.g. samuel@example.com"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans"
                          placeholder="e.g. +234 803 111 2222"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Number of Guests (including yourself)</label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-3 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans font-medium"
                      >
                        <option value="1">1 Person (Just Me)</option>
                        <option value="2">2 Persons</option>
                        <option value="3">3 Persons</option>
                        <option value="4">4 Persons</option>
                        <option value="5+">5 or more persons (Family Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 font-sans">Any specific questions or assistance needed?</label>
                      <textarea
                        rows={3}
                        value={form.questions}
                        onChange={(e) => setForm({ ...form, questions: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans resize-none"
                        placeholder="e.g. I need student accommodation directions or help registering kids..."
                      />
                    </div>

                    <button
                      id="btn-visitor-form-submit"
                      type="submit"
                      className="w-full bg-secondary hover:bg-secondary-light text-primary font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 text-primary fill-primary" />
                      I'm Coming Sunday!
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-10 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 font-bold" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-primary mb-2">We Are Expecting You!</h4>
                    <p className="text-xs uppercase tracking-widest font-sans font-bold text-secondary mb-4">Registration Complete</p>
                    <p className="text-sm font-sans text-light mb-6 leading-relaxed">
                      Thank you, <strong className="text-dark">{form.name}</strong>! We have locked your coordinates for Sunday. Our welcome marshals will contact your number (<strong>{form.phone}</strong>) or send a confirmation email: <em>{form.email}</em> shortly with instructions.
                    </p>
                    <button
                      onClick={() => {
                        setForm({ name: '', email: '', phone: '', guests: '1', questions: '' });
                        setFormSubmitted(false);
                      }}
                      className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-2.5 rounded-lg"
                    >
                      Register Someone Else
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 6. FAQ ACCORDION */}
          <div id="visit-faq-accordion-container" className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Visitor Inquiries</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Frequently Asked Inquiries
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs text-light font-sans pt-1">
                Have questions before walking through our doors? Expand the topics below for answers designed to put your mind at perpetual ease.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index}
                    id={`faq-item-${index}`}
                    className="border border-secondary/15 rounded-2xl bg-white overflow-hidden shadow-xs hover:shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-serif text-base font-bold text-primary hover:bg-accent transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <HelpCircle className="w-4 h-4 text-secondary shrink-0" />
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-light shrink-0" />
                      )}
                    </button>

                    {/* Collapsible details div */}
                    <div 
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'max-h-[500px] border-t border-secondary/10 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="p-6 text-xs sm:text-sm text-light font-sans leading-relaxed">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
