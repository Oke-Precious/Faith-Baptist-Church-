import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { 
  Home, 
  ChevronRight, 
  Heart, 
  Send, 
  CheckCircle, 
  Users, 
  FileText, 
  Download, 
  Sparkles, 
  Lock, 
  Eye, 
  BookOpen, 
  Info,
  Flame,
  UserPlus
} from 'lucide-react';

interface PrayerPageProps {
  onNavigate?: (page: Page) => void;
}

interface PrayerRequest {
  id: string;
  name: string;
  request: string;
  date: string;
  prayingCount: number;
}

const DEVOTIONAL_VERSES = [
  { text: "Cast all your anxiety on him because he cares for you.", reference: "1 Peter 5:7" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", reference: "Philippians 4:6" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", reference: "Psalm 34:18" },
  { text: "He heals the brokenhearted and binds up their wounds.", reference: "Psalm 147:3" },
  { text: "Fear not, for I am with you; be not dismayed, for I am your God; I will strengthen you, I will help you, I will uphold you with my righteous right hand.", reference: "Isaiah 41:10" },
  { text: "The Lord is my shepherd, I shall not want.", reference: "Psalm 23:1" },
  { text: "The earnest prayer of a righteous person has great power and produces wonderful results.", reference: "James 5:16" },
  { text: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.", reference: "Jeremiah 29:11" },
  { text: "But they who wait for the Lord shall renew their strength; they shall mount up with wings like eagles; they shall run and not be weary; they shall walk and not faint.", reference: "Isaiah 40:31" },
  { text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose.", reference: "Romans 8:28" },
  { text: "Come to me, all who labor and are heavy laden, and I will give you rest.", reference: "Matthew 11:28" },
  { text: "Be strong and courageous. Do not fear or be in dread of them, for it is the Lord your God who goes with you. He will not leave you or forsake you.", reference: "Deuteronomy 31:6" },
  { text: "Wait for the Lord; be strong, and let your heart take courage; wait for the Lord!", reference: "Psalm 27:14" },
  { text: "Peace I leave with you; my peace I give to you. Not as the world gives do I give to you. Let not your hearts be troubled, neither let them be afraid.", reference: "John 14:27" },
  { text: "Call to me and I will answer you, and will tell you great and hidden things that you have not known.", reference: "Jeremiah 33:3" },
  { text: "My grace is sufficient for you, for my power is made perfect in weakness.", reference: "2 Corinthians 12:9" },
  { text: "The Lord is my light and my salvation; whom shall I fear? The Lord is the stronghold of my life; of whom shall I be afraid?", reference: "Psalm 27:1" },
  { text: "I can do all things through him who strengthens me.", reference: "Philippians 4:13" },
  { text: "And my God will supply every need of yours according to his riches in glory in Christ Jesus.", reference: "Philippians 4:19" },
  { text: "Truly, truly, I say to you, whatever you ask of the Father in my name, he will give it to you.", reference: "John 16:23" },
  { text: "If we confess our sins, he is faithful and just to forgive us our sins and to cleanse us from all unrighteousness.", reference: "1 John 1:9" },
  { text: "The name of the Lord is a strong tower; the righteous man runs into it and is safe.", reference: "Proverbs 18:10" },
  { text: "Ask, and it will be given to you; seek, and you will find; knock, and it will be opened to you.", reference: "Matthew 7:7" },
  { text: "God is our refuge and strength, a very present help in trouble.", reference: "Psalm 46:1" },
  { text: "The Lord is faithful. He will establish you and guard you against the evil one.", reference: "2 Thessalonians 3:3" },
  { text: "The Lord your God is in your midst, a mighty one who will save; he will rejoice over you with gladness; he will quiet you by his love; he will exult over you with loud singing.", reference: "Zephaniah 3:17" },
  { text: "Commit your way to the Lord; trust in him, and he will act.", reference: "Psalm 37:5" },
  { text: "Trust in the Lord with all your heart, and do not lean on your own understanding.", reference: "Proverbs 3:5" },
  { text: "Ah, Lord God! It is you who have made the heavens and the earth by your great power and by your outstretched arm! Nothing is too hard for you.", reference: "Jeremiah 32:17" },
  { text: "Draw near to God, and he will draw near to you.", reference: "James 4:8" }
];

const INITIAL_PUBLIC_PRAYERS: PrayerRequest[] = [
  {
    id: "pw-1",
    name: "Brother Toyin Abioye",
    request: "Pray for divine wisdom and favor as I sit for my upcoming semester examinations at LAUTECH. I declare scholastic clarity and retention.",
    date: "2026-06-01",
    prayingCount: 24
  },
  {
    id: "pw-2",
    name: "Anonymous",
    request: "I am trusting God for the complete spiritual healing and health renewal of my beloved father who was diagnosed with chronic heart fatigue. Let divine restoration manifest.",
    date: "2026-05-31",
    prayingCount: 42
  },
  {
    id: "pw-3",
    name: "Sister Deborah Alalade",
    request: "Seeking corporate prayer agreement over my young business here in Ogbomoso. I ask that God draws dedicated clients and opens financial doors of prosperity.",
    date: "2026-05-30",
    prayingCount: 18
  },
  {
    id: "pw-4",
    name: "Anonymous",
    request: "Lord, rekindle my spiritual eyes. Praying for total fire, intimacy with God, and a persistent devotion to prayer and scriptural studies.",
    date: "2026-05-29",
    prayingCount: 51
  }
];

export default function PrayerPage({ onNavigate }: PrayerPageProps) {
  // Rotate verse of the day based on the current calendar day of month or year
  const [devotional, setDevotional] = useState(DEVOTIONAL_VERSES[0]);

  // Prayer form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [request, setRequest] = useState('');
  const [visibility, setVisibility] = useState<'private' | 'team' | 'public'>('team');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Prayer warriors joining state
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [joinForm, setJoinForm] = useState({ name: '', phone: '', group: 'MMU' });

  // Native dynamic state for the community prayer wall
  const [publicRequests, setPublicRequests] = useState<PrayerRequest[]>([]);
  const [userPrayedIds, setUserPrayedIds] = useState<string[]>([]);

  // Calculate Rotating Verse on Mount
  useEffect(() => {
    const today = new Date();
    // Daily index calculation (from 0 to 29)
    const dayIndex = (today.getFullYear() + today.getMonth() + today.getDate()) % 30;
    setDevotional(DEVOTIONAL_VERSES[dayIndex]);
  }, []);

  // Fetch / Sync with localStorage
  useEffect(() => {
    const storedPrayers = localStorage.getItem('fb_prayer_requests');
    if (storedPrayers) {
      try {
        setPublicRequests(JSON.parse(storedPrayers));
      } catch (e) {
        setPublicRequests(INITIAL_PUBLIC_PRAYERS);
      }
    } else {
      localStorage.setItem('fb_prayer_requests', JSON.stringify(INITIAL_PUBLIC_PRAYERS));
      setPublicRequests(INITIAL_PUBLIC_PRAYERS);
    }

    const storedUserPrayers = localStorage.getItem('fb_user_prayed_ids');
    if (storedUserPrayers) {
      try {
        setUserPrayedIds(JSON.parse(storedUserPrayers));
      } catch (e) {
        setUserPrayedIds([]);
      }
    }
  }, []);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new prayer request object
    const finalName = name.trim() ? name.trim() : 'Anonymous';
    const newRequest: PrayerRequest = {
      id: `pw-user-${Date.now()}`,
      name: finalName,
      request: request.trim(),
      date: new Date().toISOString().split('T')[0],
      prayingCount: 1
    };

    // If marked "share publicly", append to Prayer Wall state and localStorage
    if (visibility === 'public') {
      const updatedList = [newRequest, ...publicRequests];
      setPublicRequests(updatedList);
      localStorage.setItem('fb_prayer_requests', JSON.stringify(updatedList));
    }

    setFormSubmitted(true);
  };

  const handlePrayForRequest = (id: string) => {
    if (userPrayedIds.includes(id)) return; // prevent multiple clicks

    const updated = publicRequests.map(req => {
      if (req.id === id) {
        return { ...req, prayingCount: req.prayingCount + 1 };
      }
      return req;
    });

    setPublicRequests(updated);
    localStorage.setItem('fb_prayer_requests', JSON.stringify(updated));

    const newUserPrayed = [...userPrayedIds, id];
    setUserPrayedIds(newUserPrayed);
    localStorage.setItem('fb_user_prayed_ids', JSON.stringify(newUserPrayed));
  };

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);
  };

  return (
    <div id="prayer-page-wrapper" className="pt-24 md:pt-28 font-sans">
      
      {/* 1. PAGE HERO */}
      <section id="prayer-hero-section" className="bg-primary text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-144716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=1200" 
            alt="Bible on velvet in warm prayer room"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Decorative Wave Bottom */}
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
            <span className="text-secondary font-bold">Prayer Center</span>
          </nav>

          <h1 id="prayer-hero-title" className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight">
            Prayer — The Heartbeat of Faith Baptist Church
          </h1>
          <p id="prayer-hero-quote" className="text-secondary-light font-serif italic text-base sm:text-lg max-w-3xl mx-auto font-medium leading-relaxed">
            "Cast all your anxiety on Him because He cares for you." <span className="font-sans not-italic text-xs font-bold bg-white/10 px-2.5 py-1 rounded-full text-white inline-block ml-2">— 1 Peter 5:7</span>
          </p>
        </div>
      </section>

      {/* Main Core Content Grid */}
      <section className="bg-accent py-12 md:py-20 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

          {/* 5. DAILY DEVOTIONAL */}
          <div id="prayer-devotional-section" className="bg-white rounded-[2rem] border border-secondary/15 p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 md:gap-8 items-center relative overflow-hidden">
            <div className="absolute top-0 left-0 bg-secondary px-4 py-1.5 text-[10px] font-sans font-bold text-primary rounded-br-2xl flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-primary" />
              DAILY SCRIPTURE OF THE DAY
            </div>
            
            <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center shrink-0 border border-secondary/20 shadow-inner mt-4 md:mt-0">
              <BookOpen className="w-7 h-7 text-secondary" />
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <p className="font-serif text-base sm:text-lg md:text-xl italic text-primary leading-relaxed scripture-quote">
                "{devotional.text}"
              </p>
              <span className="inline-block text-xs uppercase font-sans font-extrabold tracking-wider text-secondary">
                {devotional.reference}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* 2. PRAYER REQUEST FORM (Takes 5 cols on lg) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-secondary/15 shadow-sm space-y-6">
              <div className="border-b border-accent pb-4">
                <span className="text-secondary text-[10px] uppercase font-sans font-bold tracking-widest block mb-1">Intercession Portal</span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">Submit a Prayer Request</h3>
                <p className="text-xs text-light font-sans mt-1">Let us bear your burdens in spirit with collective agreements.</p>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handlePrayerSubmit} className="space-y-4 text-left font-sans">
                  
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">
                      Your Name <span className="text-light italic capitalize font-normal">(Optional for anonymity)</span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans placeholder:italic"
                      placeholder="e.g. Leave blank to submit as Anonymous"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">
                      Your Email Address <span className="text-light italic capitalize font-normal">(Optional, for pastoral care)</span>
                    </label>
                    <input
                      type="email"
                      className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans placeholder:italic"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">
                      Your Prayer Request <span className="text-rose-500 font-bold">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-xs focus:outline-none focus:border-secondary text-dark font-sans resize-none"
                      placeholder="Type your prayer request details here... We stand in faith with you!"
                      value={request}
                      onChange={(e) => setRequest(e.target.value)}
                    />
                  </div>

                  {/* Radio/Checkbox selection for sharing privacy */}
                  <div className="space-y-2.5 bg-accent/60 p-4 rounded-xl border border-secondary/5">
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary font-sans">Request Privacy & Sharing Options</label>
                    
                    {/* Option 1: Keep request private */}
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input 
                        type="radio" 
                        name="prayer_visibility" 
                        className="mt-0.5 accent-secondary"
                        checked={visibility === 'private'}
                        onChange={() => setVisibility('private')}
                      />
                      <span className="text-xs font-sans text-dark leading-tight">
                        <strong className="text-primary font-bold block mb-0.5 flex items-center gap-1">
                          <Lock className="w-3 h-3 text-secondary" />
                          Keep my request private
                        </strong>
                        Only Rev. Dr. Jacob Ogunyode-Agbaosi will receive and pray over this.
                      </span>
                    </label>

                    {/* Option 2: Share with prayer team */}
                    <label className="flex items-start gap-2.5 cursor-pointer mt-2.5 select-none">
                      <input 
                        type="radio" 
                        name="prayer_visibility" 
                        className="mt-0.5 accent-secondary"
                        checked={visibility === 'team'}
                        onChange={() => setVisibility('team')}
                      />
                      <span className="text-xs font-sans text-dark leading-tight">
                        <strong className="text-primary font-bold block mb-0.5 flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-secondary" />
                          Share with prayer team
                        </strong>
                        Shared silently and in complete confidentiality with our daily warriors.
                      </span>
                    </label>

                    {/* Option 3: Share publicly */}
                    <label className="flex items-start gap-2.5 cursor-pointer mt-2.5 select-none">
                      <input 
                        type="radio" 
                        name="prayer_visibility" 
                        className="mt-0.5 accent-secondary"
                        checked={visibility === 'public'}
                        onChange={() => setVisibility('public')}
                      />
                      <span className="text-xs font-sans text-dark leading-tight">
                        <strong className="text-primary font-bold block mb-0.5 flex items-center gap-1">
                          <Eye className="w-3.5 h-3.5 text-secondary" />
                          Share publicly
                        </strong>
                        Publish immediately to the community prayer wall on this page.
                      </span>
                    </label>

                  </div>

                  <button
                    id="btn-prayer-form-submit"
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary-light text-primary font-sans font-bold py-3.5 px-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 transform hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4 text-primary fill-primary" />
                    Send My Prayer Request
                  </button>

                </form>
              ) : (
                <div className="text-center py-8 animate-in fade-in duration-300 space-y-4">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-primary">Mailed to Heaven!</h4>
                  <p className="text-xs uppercase tracking-widest font-sans font-bold text-secondary">Locked in Faith</p>
                  
                  <p className="text-xs sm:text-sm font-sans text-light leading-relaxed">
                    Thank you! Your request details have been logged in. 
                    {visibility === 'private' && " Dr. Ogunyode-Agbaosi has reserved this for his private tabernacle study time."}
                    {visibility === 'team' && " Our dedicated warriors team has loaded your name on the intercession list."}
                    {visibility === 'public' && " Your petition is active. Members can click to pray for you on the public wall."}
                  </p>

                  <button
                    onClick={() => {
                      setName('');
                      setEmail('');
                      setRequest('');
                      setVisibility('team');
                      setFormSubmitted(false);
                    }}
                    className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-5 py-2.5 rounded-lg"
                  >
                    Submit Another Request
                  </button>
                </div>
              )}
            </div>

            {/* 3. COMMUNITY PRAYER WALL (Takes 7 cols on lg) */}
            <div className="lg:col-span-7 space-y-6">
              <div id="prayer-wall-header" className="flex items-center justify-between border-b border-secondary/15 pb-4">
                <div>
                  <span className="text-secondary text-[10px] uppercase font-sans font-bold tracking-widest block mb-1">Covenant Chain</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary">Community Prayer Wall</h3>
                </div>
                <span className="text-[10px] font-sans font-bold text-primary bg-secondary/10 px-3 py-1.5 rounded-full select-none">
                  {publicRequests.length} Public Petitions
                </span>
              </div>

              {publicRequests.length === 0 ? (
                <div className="bg-white p-12 text-center rounded-3xl border border-secondary/10">
                  <p className="font-sans text-sm text-light italic">There are no public prayers currently. Be the first to share one!</p>
                </div>
              ) : (
                <div id="prayer-cards-wall-grid" className="grid grid-cols-1 gap-4 max-h-[640px] overflow-y-auto pr-2">
                  {publicRequests.map((req) => {
                    const hasPrayed = userPrayedIds.includes(req.id);
                    return (
                      <div 
                        key={req.id} 
                        id={`prayer-wall-card-${req.id}`}
                        className="bg-white p-5 rounded-2xl border border-secondary/10 shadow-xs hover:shadow-sm transition-all flex flex-col justify-between gap-4 text-left"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="font-serif text-sm font-bold text-primary">
                              {req.name}
                            </span>
                            <span className="font-sans text-[10px] text-light">
                              {req.date}
                            </span>
                          </div>
                          <p className="font-sans text-xs sm:text-sm text-light leading-relaxed italic pr-2">
                            "{req.request}"
                          </p>
                        </div>

                        <div className="flex items-center justify-between border-t border-accent pt-3">
                          <span className="font-sans text-[10px] text-light flex items-center gap-1.5 select-none">
                            <Users className="w-3.5 h-3.5 text-secondary" />
                            <strong>{req.prayingCount}</strong> people are actively praying for this
                          </span>

                          <button
                            id={`btn-prayed-count-${req.id}`}
                            onClick={() => handlePrayForRequest(req.id)}
                            disabled={hasPrayed}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-sans font-bold transition-all ${
                              hasPrayed 
                                ? 'bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-default' 
                                : 'bg-accent hover:bg-secondary/15 text-primary border border-secondary/10 hover:border-secondary/30'
                            }`}
                          >
                            <Heart className={`w-3.5 h-3.5 ${hasPrayed ? 'fill-emerald-600 text-emerald-600' : 'text-rose-500 fill-transparent'}`} />
                            {hasPrayed ? 'I Prayed' : 'I Am Praying'}
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

          </div>

          {/* 4. PRAYER TEAM INFO */}
          <div id="prayer-warriors-joining-wrapper" className="bg-primary text-white rounded-[2.5rem] border border-white/5 p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Side Info */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-secondary text-[10px] uppercase font-sans font-bold tracking-[0.2em] block">
                  Covenant Guardians
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Our Dedicated Prayer Warriors Intercede Daily
                </h3>
                <p className="text-xs sm:text-sm font-sans text-white/80 leading-relaxed">
                  Led by our passionate Deaconess Deborah Alao, the intercessor ministry carries a continuous prayer sentinel. We pray every Friday at 4:30 PM under the heavy anointing key of corporate unity - bringing down strongholds for LAUTECH candidates, business leaders, families, and global revivals.
                </p>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 select-none">
                  <h4 className="font-serif text-sm font-bold text-secondary mb-1">Our Core Prayer Watches</h4>
                  <ul className="text-xs text-white/70 space-y-1 font-sans">
                    <li>• Midnight Covenant Intercession (12 AM - 1 AM)</li>
                    <li>• Sunday Sanctuary Pre-service Charge (7 AM - 7:30 AM)</li>
                    <li>• Wednesday Sunset Power hour (5 PM - 6 PM)</li>
                  </ul>
                </div>
              </div>

              {/* Right Side Joining form */}
              <div className="lg:col-span-6">
                <div className="bg-white rounded-3xl p-6 text-dark border border-secondary/10 max-w-md mx-auto">
                  {!joinSubmitted ? (
                    <form onSubmit={handleJoinSubmit} className="space-y-4 text-left font-sans">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-primary flex items-center gap-1.5">
                        <UserPlus className="w-4 h-4 text-secondary" />
                        Join the Intercessory Chain
                      </h4>
                      <p className="text-[11px] text-light pb-2 leading-relaxed">
                        If you have a calling of prayer, consecration, and vigil ministry, we invite you to enlist with our team.
                      </p>

                      <div>
                        <label className="block text-[9px] uppercase font-bold tracking-wider text-primary mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full bg-accent border border-secondary/15 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-secondary text-dark font-sans"
                          placeholder="e.g. Rachel Alalade"
                          value={joinForm.name}
                          onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] uppercase font-bold tracking-wider text-primary mb-1">WhatsApp Phone Number</label>
                          <input
                            type="tel"
                            required
                            className="w-full bg-accent border border-secondary/15 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-secondary text-dark font-sans"
                            placeholder="e.g. +234 803 000 0000"
                            value={joinForm.phone}
                            onChange={(e) => setJoinForm({ ...joinForm, phone: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-[9px] uppercase font-bold tracking-wider text-primary mb-1 font-sans">Your Fellowship Group</label>
                          <select
                            className="w-full bg-accent border border-secondary/15 rounded-lg px-2 py-2 text-xs focus:outline-none focus:border-secondary text-dark font-sans font-medium"
                            value={joinForm.group}
                            onChange={(e) => setJoinForm({ ...joinForm, group: e.target.value })}
                          >
                            <option value="MMU">Men's Union (MMU)</option>
                            <option value="WMU">Women's Union (WMU)</option>
                            <option value="Blaze">Youth & Teens (Blaze)</option>
                            <option value="Choir">Choir Department</option>
                            <option value="None">Prefer Not to Specify</option>
                          </select>
                        </div>
                      </div>

                      <button
                        id="btn-join-prayer-team-submit"
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase py-3 rounded-lg shadow-sm transition-all"
                      >
                        Enlist As A Prayer Warrior
                      </button>
                    </form>
                  ) : (
                    <div className="text-center py-6 animate-in fade-in space-y-3">
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="font-serif text-lg font-bold text-primary">Enlisted Successfully</h4>
                      <p className="text-[11px] font-sans text-light leading-relaxed">
                        Blessings, <strong className="text-dark">{joinForm.name}</strong>! Deaconess Deborah Alao will reach you via WhatsApp (<strong>{joinForm.phone}</strong>) shortly with our physical agenda rules and Midnight Chain schedule.
                      </p>
                      <button
                        onClick={() => {
                          setJoinForm({ name: '', phone: '', group: 'MMU' });
                          setJoinSubmitted(false);
                        }}
                        className="text-xs text-secondary font-bold hover:underline"
                      >
                        Enlist another person
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>

          {/* 6. PRAYER RESOURCES */}
          <div id="prayer-resources-pane" className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-secondary text-[10px] uppercase font-sans font-bold tracking-[0.2em] block">
                Tabernacle Media
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-primary font-bold">
                Downloadable Prayer & Fasting Guides
              </h3>
              <div className="h-1 w-16 bg-secondary mx-auto rounded-full" />
              <p className="text-xs text-light font-sans max-w-sm mx-auto">
                Equip your personal quiet time altar with verified scriptural materials drafted by our pastors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {[
                {
                  title: "Annual 21-Day Prayer & Fasting Manual",
                  type: "A5 Program PDF Document",
                  size: "2.4 MB",
                  desc: "Includes guidelines for morning and sunset devotion watches, daily scripture focus, and special church assembly guidelines.",
                  href: "#"
                },
                {
                  title: "The Effective Quiet Time Alar Guide",
                  type: "Study Outline Blueprint",
                  size: "1.1 MB",
                  desc: "A step-by-step practical walk-through to structure a powerful 30-minute personal daily Bible study and intercessory watch.",
                  href: "#"
                },
                {
                  title: "Victory Over Academic and Career Altars",
                  type: "LAUTECH & Bowen Campus Special",
                  size: "1.8 MB",
                  desc: "Dedicated prayers and declarations for students facing examinations, seeking employment, or striving for excellence.",
                  href: "#"
                }
              ].map((resource, i) => (
                <div 
                  key={i} 
                  id={`resource-download-card-${i}`}
                  className="bg-white p-6 rounded-2xl border border-secondary/10 hover:border-secondary/20 shadow-xs hover:shadow-xs transition-all relative flex flex-col justify-between space-y-4 text-left"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-accent text-secondary flex items-center justify-center shrink-0 border border-secondary/10">
                      <FileText className="w-5 h-5 text-secondary" />
                    </div>
                    <h4 className="font-serif text-base font-bold text-primary">{resource.title}</h4>
                    <p className="text-[11px] text-light leading-relaxed font-sans">{resource.desc}</p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-accent text-[10px] uppercase font-sans font-bold">
                    <span className="text-light">
                      {resource.type} • {resource.size}
                    </span>
                    <a
                      href={resource.href}
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Your guide download link is generated! In a live environment, the PDF documents are stored and served securely.');
                      }}
                      className="text-secondary hover:text-secondary-light flex items-center gap-1 font-bold tracking-wide"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
