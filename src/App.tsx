import React, { useState } from 'react';
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

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handlePlanVisit = () => {
    setActivePage('visit');
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

            {/* 4. Service times grid */}
            <ServiceTimes 
              onPlanVisit={handlePlanVisit} 
            />

            {/* 5. Recent Sermon Previews */}
            <SermonPreview 
              onViewAllSermons={() => handleNavigate('sermons')} 
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
