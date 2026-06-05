import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SermonTicker from './components/SermonTicker';
import PastorWelcome from './components/PastorWelcome';
import ServiceTimes from './components/ServiceTimes';
import SermonPreview from './components/SermonPreview';
import MinistriesGrid from './components/MinistriesGrid';
import EventSection from './components/EventSection';
import GiveSection from './components/GiveSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import YoutubeEmbed from './components/YoutubeEmbed';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { ChevronUp, X, Sparkles, HeartHandshake } from 'lucide-react';

// Pages list swaps
import AboutPage from './pages/AboutPage';
import SermonsPage from './pages/SermonsPage';
import MinistriesPage from './pages/MinistriesPage';
import EventsPage from './pages/EventsPage';
import GivePage from './pages/GivePage';
import ContactPage from './pages/ContactPage';
import VisitPage from './pages/VisitPage';
import PrayerPage from './pages/PrayerPage';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [scrolled, setScrolled] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  // Monitor Scroll for Back-To-Top button visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Trigger first visit welcome overlay dialog
  useEffect(() => {
    const isCompleted = localStorage.getItem('fbc_first_visit_completed');
    if (!isCompleted) {
      const waitTimer = setTimeout(() => {
        setShowWelcome(true);
      }, 1500);
      return () => clearTimeout(waitTimer);
    }
  }, []);

  // Handle Dynamic SEO Metadata Updating
  useEffect(() => {
    const titleMap: Record<Page, string> = {
      home: "Faith Baptist Church | Chapel of Praise",
      about: "Our Pastoral Counsel & Mission | Faith Baptist Church Praise Chapel",
      sermons: "Sermon Broadcasts & Audio Archives | Faith Baptist Church Praise Chapel",
      ministries: "Active Fellowships & Outreaches | Faith Baptist Church Praise Chapel",
      events: "Upcoming Church Calendar & Revivals | Faith Baptist Church Praise Chapel",
      give: "Stewardship, Tithes & Online Giving | Faith Baptist Church Praise Chapel",
      contact: "Direct Ministerial Contact & Directions | Faith Baptist Church Praise Chapel",
      visit: "Plan Your Historic First Sunday Visit | Faith Baptist Church Praise Chapel",
      prayer: "Send Prayer Requests & Community Prayer Wall | Faith Baptist Church Praise Chapel",
    };

    const descMap: Record<Page, string> = {
      home: "Welcome to Faith Baptist Church Praise Chapel, a family bible church in Oke-Owode Ogbomoso. Experience transformative preaching by Rev. Dr. J. O. Ogunyode-Agbaosi.",
      about: "Discover our decades-long heritage, statement of faith, and dedicated pastoral team under Rev. Dr. Jacob Olugbenga Ogunyode-Agbaosi.",
      sermons: "Listen to life-transforming, biblical teachings from Deaconess Deborah Alao, pastors, and leaders at Oke-Owode Praise Chapel.",
      ministries: "Find and join our active ministries: Men's MMU fellowship, Women's WMU fellowship, Praise and Worship Choir, and vibrant Youth wings.",
      events: "Join upcoming church gatherings, leadership summits, youth outreaches, and the annual Praiseworthy Glory & Grace Conference in Ogbomoso.",
      give: "Support rural gospel outreaches, community medical aids, and local mission groups securely via local bank transfer or internet portal.",
      contact: "Get direct phone numbers, GPS navigation maps, and email coordinates for our Oke-Owode Ogbomoso assembly pastors.",
      visit: "Plan your first attendance to Faith Baptist Church Ogbomoso with clear instructions on parking, kids care, order of church service and dress codes.",
      prayer: "Share your prayer requests anonymously or with local prayer warriors. Intercede with or browse real community prayer cards.",
    };

    document.title = titleMap[activePage] || "Faith Baptist Church Praise Chapel";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', descMap[activePage] || "Faith Baptist Church Praise Chapel");
  }, [activePage]);

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handlePlanVisit = () => {
    handleNavigate('visit');
  };

  const handleCloseWelcome = () => {
    localStorage.setItem('fbc_first_visit_completed', 'true');
    setShowWelcome(false);
  };

  const handleWelcomeCTA = () => {
    localStorage.setItem('fbc_first_visit_completed', 'true');
    setShowWelcome(false);
    handleNavigate('visit');
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWatchLive = () => {
    // If we aren't on home page, direct to home page first, then scroll
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        const youtubeSec = document.getElementById('youtube-embed-section');
        youtubeSec?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const youtubeSec = document.getElementById('youtube-embed-section');
      youtubeSec?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEventClick = () => {
    handleNavigate('events');
  };

  return (
    <div id="app-container" className="min-h-screen bg-accent relative flex flex-col justify-between">
      
      {/* Dynamic welcome modal popup for first-time browse */}
      {showWelcome && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="welcome-modal-heading"
        >
          <div className="bg-white rounded-3xl overflow-hidden max-w-md w-full shadow-2xl relative border-t-8 border-secondary p-8 animate-in zoom-in-95 duration-300">
            <button 
              onClick={handleCloseWelcome}
              className="absolute top-4 right-4 text-primary bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full transition-colors"
              aria-label="Close welcome modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="text-center py-4 space-y-4 font-sans">
              <div className="w-14 h-14 bg-secondary/15 rounded-full flex items-center justify-center mx-auto text-secondary border border-secondary/25">
                <HeartHandshake className="w-7 h-7" />
              </div>

              <h4 id="welcome-modal-heading" className="font-serif text-2xl font-black text-primary leading-tight">
                Welcome to Our Family!
              </h4>

              <p className="text-sm text-light leading-relaxed">
                Hallelujah! We are very delighted to welcome you to <strong>Faith Baptist Church Praise Chapel</strong>, Ogbomoso. We are a Bible-believing church set to guide souls to dynamic grace.
              </p>

              <div className="bg-accent/60 p-4 rounded-2xl text-xs text-left text-primary leading-relaxed border border-secondary/10">
                <strong className="block text-secondary text-[10px] uppercase tracking-widest mb-1">Weekly Fellowship Service schedule</strong>
                • Sunday Morning main service: 8:00 AM<br />
                • Wednesday Prayer & Missionary Meetings: 4:30 PM<br />
                • Friday Deep Interactive Bible Study: 4:30 PM
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleWelcomeCTA}
                  className="flex-1 bg-secondary hover:bg-secondary-light text-primary font-bold text-xs py-3.5 rounded-xl uppercase tracking-wider transition-all shadow-sm"
                >
                  Plan My First Sunday Visit
                </button>
                <button
                  type="button"
                  onClick={handleCloseWelcome}
                  className="px-5 py-3.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-bold text-xs rounded-xl uppercase tracking-wider transition-all"
                >
                  I'm returning member
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating back-to-top arrow */}
      {scrolled && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 bg-primary text-secondary border border-secondary/20 hover:bg-primary-dark rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform scale-100 hover:translate-y-[-4px] active:scale-95"
          aria-label="Return back to page top"
        >
          <ChevronUp className="w-6 h-6 stroke-[3]" />
        </button>
      )}

      {/* Sticky Top Navbar */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onPlanVisit={handlePlanVisit} 
      />

      {/* Main Swappable Dynamic Page Sections Container */}
      <main id="main-content-canvas" className="flex-1">
        {activePage === 'home' && (
          <div id="home-page-pane" className="animate-in fade-in duration-300">
            {/* 1. Hero */}
            <Hero 
              onPlanVisit={handlePlanVisit} 
              onWatchLive={handleWatchLive} 
            />

            {/* 2. Announcement / Ticker */}
            <SermonTicker 
              onEventClick={handleEventClick} 
            />

            {/* 3. Welcome Message Pastor */}
            <PastorWelcome 
              onLearnMore={() => handleNavigate('about')} 
            />

            {/* 5. Recent Sermon Previews */}
            <SermonPreview 
              onViewAllSermons={() => handleNavigate('sermons')} 
            />

            {/* 4. Service times grid */}
            <ServiceTimes 
              onPlanVisit={handlePlanVisit} 
            />

            {/* 6. Ministries Overview grid */}
            <MinistriesGrid 
              onLearnMore={() => handleNavigate('ministries')} 
            />

            {/* 7. Upcoming Events calendars */}
            <EventSection 
              onLearnMore={() => handleNavigate('events')} 
            />

            {/* 8. Sowing Tithe offering */}
            <GiveSection />

            {/* 9. Member Testimonials Slider */}
            <TestimonialsSlider />

            {/* 10. YouTube Streaming Live details */}
            <YoutubeEmbed />

            {/* 11. Subscription signup form */}
            <Newsletter />
          </div>
        )}

        {/* Tab pages */}
        {activePage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {activePage === 'sermons' && <SermonsPage />}
        {activePage === 'ministries' && <MinistriesPage />}
        {activePage === 'events' && <EventsPage />}
        {activePage === 'give' && <GivePage />}
        {activePage === 'contact' && <ContactPage />}
        {activePage === 'visit' && <VisitPage onNavigate={handleNavigate} />}
        {activePage === 'prayer' && <PrayerPage onNavigate={handleNavigate} />}
      </main>

      {/* Global Footer component */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
