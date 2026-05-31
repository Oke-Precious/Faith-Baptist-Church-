import React, { useState } from 'react';
import { Page } from '../types';
import { 
  BookOpen, 
  Music, 
  Flame, 
  Users, 
  Globe, 
  HeartHandshake, 
  ChevronDown, 
  ChevronUp, 
  MapPin, 
  Award, 
  Milestone, 
  Quote, 
  Home, 
  ChevronRight, 
  Camera, 
  ShieldAlert 
} from 'lucide-react';
import { MISSION_STATEMENT, PASTOR_NAME, PASTOR_SHORT_NAME } from '../churchData';

interface AboutPageProps {
  onNavigate?: (page: Page) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  // Accordion state for Statement of Faith
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0); // First item open by default

  const timelineEvents = [
    {
      year: "2008",
      title: "Humble Assembly Beginnings",
      desc: "We began as a small home prayer cell fellowship in the Oke-Owode district of Ogbomoso. Meeting inside a living room with just a handful of families, we prioritized daily bible studies and intercession for LAUTECH scholars and indigenes."
    },
    {
      year: "2012",
      title: "Inception of Sanctuary Work",
      desc: "As our local numbers grew, we broke ground on our permanent temple sanctuary structure. Sowing cheerful seeds of commitment, the joint effort of our faithful dynamic families saw the walls of Praise Chapel rising in glory."
    },
    {
      year: "2018",
      title: "Dedication under Rev. Dr. J. O. Ogunyode-Agbaosi",
      desc: "Under the spirit-led appointment of Rev. Dr. Jacob Olugbenga Ogunyode-Agbaosi, we officially dedicated our expanded modern worship center. Consecrated to holiness, we pledged ourselves to raise an active army of biblical champions."
    },
    {
      year: "2023",
      title: "Student Ministry & Digital Growth",
      desc: "We expanded our ministries to Bowen University and LAUTECH scholars. Initiating our interactive and powerful Youth and Teens Blaze fellowships, we witnessed massive digital integrations and expanded local outreaches."
    },
    {
      year: "2026 & Beyond",
      title: "Expanding Oyo State Legacies",
      desc: "Remaining true to our deep Baptist lineage, we continue implementing localized welfare programs for Ogbomoso micro-traders, funding rural missions, and driving global digital discipleship networks."
    }
  ];

  const visionMissionData = {
    vision: {
      title: "Our Kingdom Vision",
      text: "To be a thriving community of believers making disciples of all nations, fully rooted in God's Holy Word, operating in apostolic unity, and saturated with active evangelism across Ogbomoso and the globe."
    },
    mission: {
      title: "Our Spiritual Mission",
      text: "To preach the Word of God with uncompromised boldness, worship God authentically in Spirit and in Truth, and serve our surrounding communities with hands of active compassion and welfare."
    }
  };

  const coreValues = [
    {
      title: "Biblical Teaching",
      desc: "Upholding the raw, inspired, and errorless authority of the Holy Scriptures as our permanent life map.",
      icon: BookOpen
    },
    {
      title: "Authentic Worship",
      desc: "Engaging in divine, prophetic praise and deep coordinate worship that honors God and shifts atmospheres.",
      icon: Music
    },
    {
      title: "Prayer & Intercession",
      desc: "Remaining vigilant in spiritual warfare and continuous intercession, acknowledging that prayer fuels our destiny.",
      icon: Flame
    },
    {
      title: "Koinonia Fellowship",
      desc: "Fostering an open, warm, and transparent family bond where students, elders, and visitors grow together.",
      icon: Users
    },
    {
      title: "Evangelism Outreach",
      desc: "Mobilizing local missions, rural campaigns, and church planting programs to seek and save the lost.",
      icon: Globe
    },
    {
      title: "Compassion & Benevolence",
      desc: "Sponsoring welfare kits for students and traders and standing with families in their times of physical need.",
      icon: HeartHandshake
    }
  ];

  const leaders = [
    {
      name: "Deacon Amos Oyebade",
      role: "Chairman, Board of Deacons",
      initials: "AO",
      avatarBg: "bg-blue-100 text-blue-700 hover:bg-blue-200"
    },
    {
      name: "Deaconess Comfort Ogunyode-Agbaosi",
      role: "WMU Advisor & Pastor's Wife",
      initials: "CO",
      avatarBg: "bg-amber-100 text-amber-700 hover:bg-amber-200"
    },
    {
      name: "Deaconess Deborah Alao",
      role: "Secretary & Finance Advisor",
      initials: "DA",
      avatarBg: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
    },
    {
      name: "Deaconess Esther Ajayi",
      role: "Children's Church Principal & Welfare",
      initials: "EA",
      avatarBg: "bg-purple-100 text-purple-700 hover:bg-purple-200"
    },
    {
      name: "Deacon Philip Olayinka",
      role: "Evangelism Coordinator",
      initials: "PO",
      avatarBg: "bg-sky-100 text-sky-700 hover:bg-sky-200"
    },
    {
      name: "Bro. Emmanuel Adeleke",
      role: "Music Director & Praise Leader",
      initials: "EA",
      avatarBg: "bg-rose-100 text-rose-700 hover:bg-rose-200"
    }
  ];

  const articlesOfFaith = [
    {
      topic: "The Holy Bible",
      text: "We believe that the Holy Bible (comprising the 66 traditional books of the Old and New Testaments) is fully inspired by God, infallible, and the absolute divine arbiter for Christian doctrine, practical living, and spiritual growth. It stands as the supreme yardstick for our faith."
    },
    {
      topic: "The Triune God",
      text: "We believe in one true, eternal God, co-equal and co-existent in three distinct Persons: God the Father, God the Son (our Savior Jesus Christ), and God the Holy Spirit. He is omnipotent, holy, and infinite in love and covenant mercies."
    },
    {
      topic: "Salvation by Grace",
      text: "We believe that salvation is entirely a work of God's free grace. It is received exclusively through personal repentance and faith in the vicarious, substitutionary death and victorious bodily resurrection of Jesus Christ. No amount of human effort or religious works can purchase justification."
    },
    {
      topic: "Christian Baptism",
      text: "As Baptist believers, we advocate for the water baptism of confessing believers by full immersion in water, performed in the name of the Father, Son, and Holy Spirit. This acts as a beautiful public seal of our union with Christ's death, burial, and resurrection."
    },
    {
      topic: "The Church",
      text: "We believe the Church is the mystical Body of Christ on earth, with Jesus operating as the supreme Head. It consists of all true believers, localized as congregations assembled for regular fellowship, communion, theological growth, and standard-setting world missions."
    },
    {
      topic: "The Second Coming",
      text: "We believe in the personal, imminent, visible, and glorious return of our Lord Jesus Christ. His second coming is our ultimate blessed hope, bringing about the dynamic judgment of the living and dead, and culminating in the eternal establishment of His glorious, unshakeable Kingdom."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div id="about-page-wrapper" className="pt-24 md:pt-28 font-sans">
      
      {/* 1. PAGE HERO */}
      <section className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Church facade sanctuary details" 
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
          {/* Breadcrumb Navigation */}
          <nav className="flex justify-center items-center gap-2 text-xs text-white/75 font-sans mb-3 select-none">
            <button 
              onClick={() => onNavigate && onNavigate('home')}
              className="hover:text-secondary hover:underline flex items-center gap-1 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <ChevronRight className="w-3 h-3 text-secondary/70 shrink-0" />
            <span className="text-secondary font-bold">About Us</span>
          </nav>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            About Faith Baptist Church Praise Chapel
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-extrabold text-[10px] sm:text-xs">
            A pillar of truth, love, and apostolic praise in Ogbomoso
          </p>
        </div>
      </section>

      {/* Main Core Segment Wrapper */}
      <section className="bg-accent py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* 2. OUR STORY SECTION */}
          <div id="our-story-section" className="space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Our Heritage Chronicles</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary font-bold">
                The Praise Chapel Story
              </h2>
              <div className="h-1 w-20 bg-secondary mx-auto rounded-full" />
              
              <p className="text-sm sm:text-base text-light font-sans leading-relaxed pt-2">
                We began as a small home prayer cell fellowship in the vibrant city of Ogbomoso, Oyo State, driven by a deep fire to raise a sanctified auditorium where God's raw praise forever reigns. Sponsoring active outreach, corporate fasting, and discipleship models, we grew step-by-step from living rooms into a lighthouse sanctuary that shapes scholars, traders, and families under covenant grace.
              </p>
            </div>

            {/* Vertical Timeline Component */}
            <div className="relative max-w-4xl mx-auto mt-16 pl-4 sm:pl-0">
              {/* Timeline Center vertical track */}
              <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-0.5 bg-secondary/30 transform -translate-x-1/2 pointer-events-none" />

              <div className="space-y-12 relative z-10">
                {timelineEvents.map((ev, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                    <div 
                      key={ev.year}
                      className={`flex flex-col sm:flex-row items-start justify-between min-h-[140px] ${
                        isEven ? 'sm:flex-row-reverse' : ''
                      }`}
                    >
                      {/* Left/Right Text Card */}
                      <div className="w-full sm:w-[45%] pl-10 sm:pl-0 sm:text-left">
                        <div className="bg-white p-6 rounded-2xl border border-secondary/10 shadow-xs hover:shadow-md hover:border-secondary/25 transition-all space-y-2">
                          <span className="inline-block bg-secondary/15 text-primary text-xs font-sans font-bold px-3 py-1 rounded-full mb-1">
                            Year {ev.year}
                          </span>
                          <h4 className="font-serif text-base font-bold text-primary">{ev.title}</h4>
                          <p className="text-xs text-light font-sans leading-relaxed">{ev.desc}</p>
                        </div>
                      </div>

                      {/* Central Circle Year Marker overlay */}
                      <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                        <div className="w-12 h-12 rounded-full bg-primary border-4 border-white text-secondary text-xs font-serif font-extrabold flex items-center justify-center shadow-md">
                          {ev.year}
                        </div>
                      </div>

                      {/* Empty half for spacing inside larger displays */}
                      <div className="hidden sm:block w-[45%]" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 3. VISION & MISSION */}
          <div id="vision-mission-section" className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            {/* Vision Card - Navy/Primary background */}
            <div className="bg-primary text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-lg flex flex-col justify-between group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-slate-900 pointer-events-none" />
              <div className="absolute bottom-[-40px] right-[-40px] w-44 h-44 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-secondary flex items-center justify-center border border-white/15 shadow-inner">
                  <Award className="w-7 h-7" />
                </div>
                
                <h3 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-white">
                  {visionMissionData.vision.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-white/80 leading-relaxed font-light">
                  "{visionMissionData.vision.text}"
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-sans text-secondary-light font-bold">Possessing the Promised Land</span>
                <span className="w-2.5 h-2.5 bg-secondary rounded-full animate-ping" />
              </div>
            </div>

            {/* Mission Card - Gold/Secondary background */}
            <div className="bg-secondary text-primary rounded-[2rem] p-8 md:p-12 relative overflow-hidden shadow-lg flex flex-col justify-between group">
              <div className="absolute bottom-[-40px] right-[-40px] w-44 h-44 bg-white/20 rounded-full blur-2xl pointer-events-none" />
              
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/5 text-primary flex items-center justify-center border border-primary/10 shadow-inner">
                  <Milestone className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="font-serif text-2xl lg:text-3xl font-bold tracking-tight text-primary">
                  {visionMissionData.mission.title}
                </h3>
                
                <p className="font-sans text-sm md:text-base text-primary/80 leading-relaxed font-semibold">
                  "{visionMissionData.mission.text}"
                </p>
              </div>

              <div className="relative z-10 mt-8 pt-6 border-t border-primary/15 flex justify-between items-center">
                <span className="text-[10px] tracking-widest uppercase font-sans text-primary/70 font-extrabold">Excellence in Grace</span>
                <span className="text-lg font-serif italic text-primary font-bold">Soli Deo Gloria</span>
              </div>
            </div>
          </div>

          {/* 4. CORE VALUES SECTION */}
          <div id="core-values-section" className="space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Kingdom Walk Essentials</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Our Core Spiritual Values
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreValues.map((val, index) => {
                const IconComp = val.icon;
                return (
                  <div 
                    key={index}
                    className="bg-white p-6 sm:p-8 rounded-3xl border border-secondary/15 shadow-xs hover:shadow-md hover:scale-[1.01] transition-all flex gap-5 items-start"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent-light text-secondary border border-secondary/20 flex items-center justify-center shrink-0 shadow-inner">
                      <IconComp className="w-6 h-6 text-secondary shrink-0" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-primary">
                        {val.title}
                      </h4>
                      <p className="text-xs text-light font-sans leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. PASTOR'S PROFILE */}
          <div id="pastors-profile-section" className="bg-white rounded-[2rem] border border-secondary/10 p-8 md:p-12 shadow-sm">
            <div className="grid grid-[1fr] lg:grid-cols-12 gap-12 items-center">
              
              {/* Pastor Portrait segment (Circular placeholder, gold border) */}
              <div className="lg:col-span-4 flex flex-col items-center space-y-4">
                <div className="relative w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto rounded-full border-4 border-secondary p-1.5 overflow-hidden shadow-lg bg-accent flex items-center justify-center group">
                  <img 
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400" 
                    alt={PASTOR_NAME} 
                    className="w-full h-full object-cover rounded-full object-top transition duration-550 group-hover:scale-105"
                  />
                  {/* Photo Placeholder Overlay indicatives */}
                  <div className="absolute inset-0 bg-primary/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full cursor-pointer leading-tight">
                    <Camera className="w-7 h-7 text-secondary mb-1 animate-bounce" />
                    <span className="text-[10px] text-white font-sans uppercase font-bold tracking-widest text-center">Under-Shepherd<br />Portrait</span>
                  </div>
                </div>
                <div className="text-center font-sans">
                  <span className="text-[10px] text-secondary font-extrabold uppercase tracking-widest block">Lead Pastor Office</span>
                  <span className="text-xs text-light block mt-0.5">Ogbomoso, Oyo State</span>
                </div>
              </div>

              {/* Pastor leadership content segment */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <span className="text-secondary text-xs uppercase font-sans font-extrabold tracking-[0.2em] block mb-1">Pastorate Profile</span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
                    {PASTOR_NAME}
                  </h3>
                  <p className="text-xs text-secondary-light font-sans font-bold tracking-wider uppercase mt-1">
                    Lead Pastor & Under-Shepherd • B.Th, M.Div, Ph.D in Systematic Theology
                  </p>
                </div>

                <div className="space-y-4 font-sans text-sm text-light leading-relaxed">
                  <p>
                    Rev. Dr. Jacob Olugbenga Ogunyode-Agbaosi is an anointed shepherd, theologian, and visionary writer with over twenty-five years of active ministerial calling. Highly revered for his structural exposition of the scriptures, his sermons bring raw clarity, addressing covenants, spiritual stewardship, and practical holiness.
                  </p>
                  <p>
                    He sits in historical alignment with the rich theological legacy of Ogbomoso. Possessing a deep passion for tertiary student advancement, He has spearheaded tailored counseling structures, fellowship setups, and scholarship networks for Bowen University and LAUTECH scholars residing within Oke-Owode.
                  </p>
                  <p>
                    He works in perfect unison with his beloved wife, Comfort, and their children, committed entirely to raising an apostolic model church in the heart of Oyo State, preparing a glorious generation for Christ's imminent kingdom.
                  </p>
                </div>

                {/* Message from the Pastor blockquote */}
                <div className="bg-accent rounded-2xl p-6 border-l-4 border-secondary relative group overflow-hidden">
                  <Quote className="absolute top-4 right-4 w-12 h-12 text-secondary/10 pointer-events-none transform group-hover:scale-110 transition-transform" />
                  <blockquote className="relative z-10 font-serif text-sm italic text-primary leading-relaxed scripture-quote">
                    "Our spiritual covenant is not shaped by complaints, but compliance with God's ultimate voice. We exist solely to anchor your faith upon Jesus, coordinate your praise, and launch you to possess your inheritances."
                  </blockquote>
                  <cite className="block text-[10px] text-light tracking-wide uppercase font-sans font-bold text-right mt-3">— Rev. Dr. J. O. Ogunyode-Agbaosi</cite>
                </div>
              </div>

            </div>
          </div>

          {/* 6. LEADERSHIP TEAM GRID */}
          <div id="leadership-team-section" className="space-y-12">
            <div className="text-center max-w-xl mx-auto space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Praise Chapel Pillars</span>
              <h3 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Church Board Leaders & Trustees
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs text-light font-sans leading-relaxed pt-1">
                Collaborating in apostolic vision to oversee financial clarity, missionary programs, and spiritual order.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {leaders.map((leader, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-secondary/10 shadow-xs hover:shadow-md transition-all flex flex-col items-center text-center space-y-4 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-secondary/50 pointer-events-none" />
                  
                  {/* High fidelity photo placeholder */}
                  <div className={`w-24 h-24 rounded-full flex items-center justify-center font-serif text-2xl font-bold border-4 border-white shadow-md relative group-hover:scale-105 transition-transform shrink-0 ${leader.avatarBg}`}>
                    {leader.initials}
                    <div className="absolute inset-0 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Camera className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif text-base font-bold text-primary group-hover:text-secondary-dark transition-colors">
                      {leader.name}
                    </h4>
                    <p className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-secondary mt-1">
                      {leader.role}
                    </p>
                  </div>

                  <p className="text-[11px] text-light leading-relaxed font-sans max-w-[200px]">
                    Faithful trustee coordinating the administrative networks and structural programs of Oke-Owode parish.
                  </p>

                  <div className="bg-accent/40 rounded-lg px-2.5 py-1 text-[9px] uppercase font-sans tracking-widest text-light font-semibold border border-secondary/5">
                    Verified Holder • 2026 Board
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 7. STATEMENT OF FAITH ACCORDION */}
          <div id="statement-of-faith-section" className="bg-primary text-white rounded-[2rem] p-8 md:p-12 relative overflow-hidden border border-white/5 shadow-md">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="text-center max-w-xl mx-auto mb-12 space-y-3 relative z-10">
              <span className="text-secondary text-xs uppercase font-sans font-bold tracking-[0.2em] block">Immutable Scriptures</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                Our Statement of Faith
              </h3>
              <div className="h-0.5 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs text-white/70 font-sans leading-relaxed">
                Click on the topics below to expand our core doctrinal definitions, formulated in alignment with Baptist theological guidelines.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4 relative z-10">
              {articlesOfFaith.map((item, index) => {
                const isOpen = activeAccordion === index;
                return (
                  <div 
                    key={index}
                    className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleAccordion(index)}
                      className="w-full text-left px-6 py-4 flex items-center justify-between gap-4 font-serif text-base font-bold text-secondary-light hover:bg-white/5 transition-colors"
                    >
                      <span>{item.topic}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-secondary shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white/50 shrink-0" />
                      )}
                    </button>
                    
                    {/* Collapsible details pane */}
                    <div 
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'max-h-[500px] border-t border-white/10 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="p-6 text-xs sm:text-sm text-white/80 font-sans leading-relaxed space-y-2">
                        <p>{item.text}</p>
                        <div className="text-[10px] text-secondary font-bold tracking-wider uppercase flex items-center gap-1.5 pt-2 font-sans select-none">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full" /> Non-negotiable Coordinate Belief
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 8. CHURCH AFFILIATION SECTION */}
          <div id="church-affiliation-section" className="space-y-8 max-w-4xl mx-auto text-center">
            <div className="space-y-3">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Verified Affiliation</span>
              <h3 className="text-2xl font-serif text-primary font-bold">
                Church Affiliation & Legacies
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs sm:text-sm text-light font-sans max-w-2xl mx-auto leading-relaxed pt-1">
                Faith Baptist Church Praise Chapel is an active local assembly operating within Oyo State. We are bound in full spiritual legacy, accountability, and doctrine with the prime body structures below:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Badge 1 - Nigerian Baptist Convention */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-secondary/10 shadow-xs flex flex-col justify-between items-center space-y-4 hover:border-secondary/20 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center border-2 border-secondary font-serif font-extrabold text-2xl tracking-tight select-none shadow-inner shrink-0">
                  NBC
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary">Nigerian Baptist Convention</h4>
                  <p className="text-[11px] text-light font-sans leading-relaxed mt-2">
                    Providing structural theological alignment, global missions partnership, and spiritual coordinate guidelines to thousands of Southern Baptist families across Nigeria.
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-secondary bg-accent px-2.5 py-1 rounded-md border border-secondary/5">In Full Covenant Liaison</span>
              </div>

              {/* Badge 2 - Ogbomoso Baptist Association */}
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-secondary/10 shadow-xs flex flex-col justify-between items-center space-y-4 hover:border-secondary/20 hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center border-2 border-secondary font-serif font-extrabold text-2xl tracking-tight select-none shadow-inner shrink-0">
                  OBA
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-primary">Ogbomoso Baptist Association</h4>
                  <p className="text-[11px] text-light font-sans leading-relaxed mt-2">
                    Nurturing church plantings and coordinate fellowship ties right in Ogbomoso, celebrated as the landmark capital of Baptist education and theological excellence in Oyo State.
                  </p>
                </div>
                <span className="text-[9px] uppercase tracking-widest font-sans font-bold text-secondary bg-accent px-2.5 py-1 rounded-md border border-secondary/5">Active Area Parish Member</span>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
