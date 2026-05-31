import React, { useState, useMemo, useEffect } from 'react';
import { 
  Play, 
  Search, 
  Filter, 
  Calendar, 
  BookOpen, 
  Volume2, 
  X, 
  Download, 
  Share2, 
  Copy, 
  Check, 
  FileText, 
  ChevronLeft, 
  ChevronRight, 
  Youtube, 
  Headphones, 
  Pause, 
  SlidersHorizontal,
  Bookmark,
  Award,
  ArrowRight,
  BookMarked,
  Sparkles,
  Bell
} from 'lucide-react';
import { SERMONS } from '../churchData';
import { Sermon } from '../types';

// Enriched internal sermons dataset extending the mock database for higher-fidelity layout
interface EnrichedSermon extends Sermon {
  tags: string[];
  topic: string;
  notes: string;
}

const ENRICHED_SERMONS: EnrichedSermon[] = [
  {
    id: "sermon-1",
    title: "Unlocking Divine Keys of Covenant Faithfulness",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-24",
    scripture: "Malachi 3:8-12 & Matthew 23:23",
    series: "The Covenant Life",
    duration: "42:15",
    youtubeId: "dQw4w9WgXcQ",
    summary: "God responds to compliance, not complaints! Discover how walking in financial faithfulness and structural obedience to God's covenants opens the windows of heaven and rebukes the devourer for your sake.",
    thumbnail: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?auto=format&fit=crop&q=80&w=800",
    tags: ["Faith", "Covenant", "Finance"],
    topic: "Faithfulness",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    notes: "I. The Principle of Compliancy over Complaint (Malachi 3).\nII. The Spiritual and Physical Multipliers of the Sacred Tithe.\nIII. Restoring Kingdom Focus to Personal Wealth Channels."
  },
  {
    id: "sermon-2",
    title: "Rebuilding the Broken Altars of Praise",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-17",
    scripture: "Nehemiah 2:17-20 & Psalm 150:1-6",
    series: "Dwell in His Presence",
    duration: "38:45",
    youtubeId: "dQw4w9WgXcQ",
    summary: "When the walls are fallen and the gates are burned, our first response must not be despair, but the rebuilding of our praise. Real praise shifts atmospheres, unlocks prison doors, and invites God to take His place.",
    thumbnail: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=800",
    tags: ["Worship", "Restoration", "Praise"],
    topic: "Praise",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    notes: "I. Nehemiah's Call to Gather and Pray.\nII. Transforming Mourning into Active, Atmospheric Praising.\nIII. Invoking Divine Deliverance over Families in Oyo State."
  },
  {
    id: "sermon-3",
    title: "Possession of the Promised Land",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-05-10",
    scripture: "Joshua 1:1-9",
    series: "Strong and Courageous",
    duration: "45:10",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Every promise of God requires a step of faith. Rev. Dr. J. O. Ogunyode-Agbaosi walks us through Joshua's divine instructions, emphasizing meditation on the Word and unwavering courage as the twin engines of success.",
    thumbnail: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    tags: ["Courage", "Faith", "Leadership"],
    topic: "Success",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    notes: "I. Divine Directives Following the Depature of Moses.\nII. Continuous Meditation on the Law: Day and Night.\nIII. Taking Bold Steps Forward to Redefine Your Family Boundary."
  },
  {
    id: "sermon-4",
    title: "Let Your Light So Shine in Ogbomoso",
    speaker: "Deaconess Deborah Alao",
    date: "2026-05-03",
    scripture: "Matthew 5:14-16 & Philippians 2:15",
    series: "Spiritual Impact",
    duration: "35:20",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Ambassadors of Christ are designed for the lampstand, not the cellar. This powerful message calls every believer in Ogbomoso to lead with integrity, good works, and active love in their daily workplaces.",
    thumbnail: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=800",
    tags: ["Character", "Evangelism", "Workplace"],
    topic: "Influence",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    notes: "I. Christ's Concept of Light and Salt as Absolute Influence.\nII. Fostering Strict Professional Stewardship without Hypocrisy.\nIII. Shining Amidst Contemporary Modern Skepticism."
  },
  {
    id: "sermon-5",
    title: "The Battle for the Mind of the Youth",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-04-26",
    scripture: "Romans 12:1-2 & Proverbs 23:7",
    series: "Spiritual Impact",
    duration: "41:30",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Do not let the system of this world squeeze you into its mold. We dig deep into securing mental resilience, resisting toxic cultural shifts, and renewing the analytical mind through continuous immersion in Scripture.",
    thumbnail: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800",
    tags: ["Mind", "Youth", "Growth"],
    topic: "Spiritual Growth",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
    notes: "I. Diagnosing the Cultural Wave Squeezing Modern Students.\nII. The Sovereignty of Thought: Why Safeguarding Your Focus is Strategic Warfare.\nIII. Spiritual Keys to Excel in Your Academics and Faith."
  },
  {
    id: "sermon-6",
    title: "Harvest of Blessings in Sowing",
    speaker: "Deacon Amos Oyebade",
    date: "2026-04-19",
    scripture: "2 Corinthians 9:6-12",
    series: "The Covenant Life",
    duration: "34:10",
    youtubeId: "dQw4w9WgXcQ",
    summary: "Sowing sparingly yields sparse crops, but cheerful sowing returns full measure! Learn how our material investment in missionary supports, chapel updates, and student welfare releases heavenly multipliers.",
    thumbnail: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=800",
    tags: ["Harvest", "Seed", "Benevolence"],
    topic: "Faithfulness",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
    notes: "I. The Unchangeable Kingdom Law of Seed, Time, and Harvest.\nII. Cheerfulness as the Essential Sower Attribute Triggering Multiplication.\nIII. Empowering Missions to Expand Praise Sanctuary Boundaries."
  },
  {
    id: "sermon-7",
    title: "Divine Healing and Covenant Protection",
    speaker: "Rev. Dr. J. O. Ogunyode-Agbaosi",
    date: "2026-04-12",
    scripture: "Exodus 15:26 & James 5:13-16",
    series: "Dwell in His Presence",
    duration: "47:00",
    youtubeId: "dQw4w9WgXcQ",
    summary: "I am the Lord who heals you! Discover the unbreakable covenants of physiological and spiritual health made available through the stripes of Jesus, activated by standard corporate prayer layouts.",
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    tags: ["Healing", "Grace", "Covenant"],
    topic: "Healing",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3",
    notes: "I. Jehovah Rapha as the Everlasting Covenant Name.\nII. Spiritual Mechanics of Anointing with Oil and Prayers of Faith.\nIII. Demolishing Chronic Genetic Illness and Declaring Safety."
  },
  {
    id: "sermon-8",
    title: "Academic Stewardship and the Fear of God",
    speaker: "Deaconess Comfort Ogunyode-Agbaosi",
    date: "2026-04-05",
    scripture: "Daniel 1:17-21 & Proverbs 1:7",
    series: "Strong and Courageous",
    duration: "36:50",
    youtubeId: "dQw4w9WgXcQ",
    summary: "God honors analytical minds that refuse to compromise! Addressing Bowen and LAUTECH students on synthesizing deep scientific study with genuine fear of God, resulting in tenfold excellence.",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
    tags: ["Academics", "Wisdom", "Youth"],
    topic: "Influence",
    audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3",
    notes: "I. Daniel's Defiance in the Classroom of Babylon.\nII. Refusing the King's Meat: Upholding Personal Covenants in Campus Residences.\nIII. Divine Speed that Makes Believers 10 Times Better than Competitors."
  }
];

const SERIES_INFO = [
  {
    name: "The Covenant Life",
    range: "April 2026 - May 2026",
    count: 2,
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400",
    themeColor: "from-amber-500 to-yellow-600"
  },
  {
    name: "Dwell in His Presence",
    range: "April 2026 - May 2026",
    count: 2,
    image: "https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&q=80&w=400",
    themeColor: "from-blue-600 to-indigo-700"
  },
  {
    name: "Strong and Courageous",
    range: "April 2026 - May 2026",
    count: 2,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=400",
    themeColor: "from-indigo-900 to-slate-900"
  },
  {
    name: "Spiritual Impact",
    range: "April 2026 - May 2026",
    count: 2,
    image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=400",
    themeColor: "from-emerald-600 to-teal-700"
  }
];

export default function SermonsPage() {
  // Search and Filter controls
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [selectedSpeaker, setSelectedSpeaker] = useState('All');
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');

  // Interactive UI triggers
  const [selectedSermon, setSelectedSermon] = useState<EnrichedSermon | null>(null);
  const [selectedNotesSermon, setSelectedNotesSermon] = useState<EnrichedSermon | null>(null);
  const [activeAudioSermon, setActiveAudioSermon] = useState<EnrichedSermon | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  // Simulated YouTube subscription elements
  const [youtubeCount, setYoutubeCount] = useState(792);
  const [hasSubscribed, setHasSubscribed] = useState(false);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Show 3 cards per pagination sheet for realistic user browsing

  // Toast trigger utility
  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  // Derive filter list arrays dynamically
  const speakersList = useMemo(() => {
    const list = new Set(ENRICHED_SERMONS.map(s => s.speaker));
    return ['All', ...Array.from(list)];
  }, []);

  const topicsList = useMemo(() => {
    const list = new Set(ENRICHED_SERMONS.map(s => s.topic));
    return ['All', ...Array.from(list)];
  }, []);

  const seriesList = useMemo(() => {
    const list = new Set(ENRICHED_SERMONS.map(s => s.series));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & sort calculations
  const filteredSermons = useMemo(() => {
    let sermons = ENRICHED_SERMONS.filter(sermon => {
      const matchSearch = 
        sermon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.scripture.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sermon.summary.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchSeries = selectedSeries === 'All' || sermon.series === selectedSeries;
      const matchSpeaker = selectedSpeaker === 'All' || sermon.speaker === selectedSpeaker;
      const matchTopic = selectedTopic === 'All' || sermon.topic === selectedTopic;

      return matchSearch && matchSeries && matchSpeaker && matchTopic;
    });

    // sorting mechanics
    return [...sermons].sort((a, b) => {
      const timeA = new Date(a.date).getTime();
      const timeB = new Date(b.date).getTime();
      return sortOrder === 'Newest' ? timeB - timeA : timeA - timeB;
    });
  }, [searchTerm, selectedSeries, selectedSpeaker, selectedTopic, sortOrder]);

  // Reset page whenever filters shift
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedSeries, selectedSpeaker, selectedTopic, sortOrder]);

  // Paged items projection
  const pagedSermons = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredSermons.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredSermons, currentPage]);

  const totalPages = Math.ceil(filteredSermons.length / itemsPerPage);

  // Featured sermon is always the newest sermon in the library (Let's select sermon-1)
  const featuredSermon = ENRICHED_SERMONS[0];

  const handleShareClick = (sermon: EnrichedSermon, e: React.MouseEvent) => {
    e.stopPropagation();
    const formattedUrl = `https://faithbaptistogbomoso.org/sermons/${sermon.id}`;
    navigator.clipboard.writeText(formattedUrl).then(() => {
      triggerToast(`📋 Copied share link for "${sermon.title}"!`);
    }).catch(() => {
      triggerToast("Failed to copy link, but shared to memory.");
    });
  };

  const handleAudioPlayToggle = (sermon: EnrichedSermon, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (activeAudioSermon?.id === sermon.id) {
      setIsPlayingAudio(!isPlayingAudio);
      triggerToast(isPlayingAudio ? "⏸️ Sermon audio paused" : "▶️ Playing sermon audio preview");
    } else {
      setActiveAudioSermon(sermon);
      setIsPlayingAudio(true);
      triggerToast(`🎧 Streaming audio: "${sermon.title}"`);
    }
  };

  const handleDownloadNotes = (sermon: EnrichedSermon, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedNotesSermon(sermon);
    triggerToast(`📖 Loaded sermon outline bulletins for "${sermon.title}"`);
  };

  const handleSubscribeClick = () => {
    if (!hasSubscribed) {
      setHasSubscribed(true);
      setYoutubeCount(prev => prev + 1);
      triggerToast("❤️ Thank you for subscribing to Oke-Owode Praise Chapel!");
    } else {
      setHasSubscribed(false);
      setYoutubeCount(prev => prev - 1);
      triggerToast("🔔 Subscription notifications removed.");
    }
  };

  return (
    <div id="sermons-page-wrapper" className="pt-24 md:pt-28 font-sans">
      
      {/* 1. PAGE HERO */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Pulpit Bible worship" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="fill-accent w-full h-[30px] md:h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 h1200 v-120 Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <nav className="flex justify-center items-center gap-2 text-xs text-white/70 select-none">
            <span className="opacity-80">Parish Library</span>
            <span>•</span>
            <span className="text-secondary font-bold">Worship Archives</span>
          </nav>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-tight animate-in fade-in duration-500">
            Sermons & Messages
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-bold text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
            Feed your soul with the Word of God
          </p>
        </div>
      </section>

      {/* Main Container Wrapper */}
      <section className="bg-accent py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Floating Toast Notification alerts component */}
          {toastMessage && (
            <div className="fixed top-24 right-4 z-50 bg-primary border-l-4 border-secondary text-white text-xs font-sans font-semibold py-3 px-5 rounded-xl shadow-xl animate-in slide-in-from-right-10 duration-200 flex items-center gap-2 max-w-xs sm:max-w-sm">
              <Sparkles className="w-4 h-4 text-secondary shrink-0 animate-pulse" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* 2. FEATURED/LATEST SERMON */}
          <div id="featured-sermon-section" className="space-y-6">
            <div className="flex items-center gap-2 text-xs font-sans uppercase font-bold tracking-widest text-secondary">
              <Award className="w-4 h-4" />
              <span>Latest Apostolic Exposition</span>
            </div>
            
            <div className="bg-white rounded-3xl overflow-hidden shadow-md border border-secondary/15 lg:grid lg:grid-cols-12 gap-0 relative">
              {/* Left embed mock preview side */}
              <div className="lg:col-span-7 bg-black relative aspect-video flex items-center justify-center overflow-hidden group">
                <img 
                  src={featuredSermon.thumbnail} 
                  alt={featuredSermon.title} 
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/35 transition-colors" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <button 
                    onClick={() => setSelectedSermon(featuredSermon)}
                    className="w-16 h-16 bg-secondary text-primary rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-2xl border-4 border-white"
                  >
                    <Play className="w-6 h-6 fill-primary ml-1" />
                  </button>
                  <p className="text-[10px] uppercase font-sans tracking-widest text-white/90 font-bold bg-black/60 px-3 py-1 rounded-full mt-4 border border-white/10">
                    Live Video Available • {featuredSermon.duration} Mins
                  </p>
                </div>
              </div>

              {/* Right sermon content summary details */}
              <div className="lg:col-span-5 p-7 sm:p-10 flex flex-col justify-between space-y-6 bg-white">
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <span className="bg-secondary/15 text-primary text-[10px] font-sans font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-secondary/10">
                      Featured • {featuredSermon.series}
                    </span>
                    <span className="text-light text-xs font-sans font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      {featuredSermon.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary leading-tight hover:text-secondary-dark transition-colors cursor-pointer" onClick={() => setSelectedSermon(featuredSermon)}>
                    {featuredSermon.title}
                  </h3>

                  <p className="text-xs uppercase font-sans font-extrabold tracking-wider text-secondary">
                    Minister: {featuredSermon.speaker}
                  </p>

                  <div className="bg-accent/70 p-4 rounded-xl border border-secondary/10 flex items-start gap-2.5">
                    <BookOpen className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                    <div className="font-sans text-xs">
                      <span className="font-extrabold text-primary uppercase text-[9px] tracking-widest block mb-0.5">Covenant Scripture Anchor</span>
                      <span className="font-serif font-bold italic text-light leading-snug">
                        "{featuredSermon.scripture}"
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-light font-sans leading-relaxed">
                    {featuredSermon.summary}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-4 border-t border-accent border-dark/5">
                  <button 
                    onClick={() => handleAudioPlayToggle(featuredSermon)}
                    className="flex-1 min-w-[140px] bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-4 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Volume2 className="w-4 h-4 text-secondary" />
                    Listen Audio
                  </button>

                  <button 
                    onClick={(e) => handleShareClick(featuredSermon, e)}
                    className="bg-accent hover:bg-neutral-200 text-primary border border-secondary/15 font-sans font-bold text-xs uppercase px-5 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                    title="Copy sermon link"
                  >
                    <Share2 className="w-4 h-4 text-secondary" />
                    Share
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 3. SEARCH & FILTER BAR */}
          <div id="filter-anchor" className="bg-white p-6 sm:p-8 rounded-[2rem] border border-secondary/15 shadow-sm space-y-6">
            <div className="flex items-center gap-2 border-b border-dark/5 pb-4">
              <SlidersHorizontal className="w-4.5 h-4.5 text-secondary shrink-0" />
              <h3 className="font-serif text-lg font-bold text-primary">Explore Message Archives</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end text-left">
              {/* Search text field input */}
              <div className="space-y-1.5 col-span-1 sm:col-span-2 lg:col-span-1">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-primary">Sermon Keyword Search</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-light">
                    <Search className="w-4 h-4 text-secondary/80" />
                  </span>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-accent border border-secondary/15 rounded-xl pl-10 pr-4 py-3 text-xs focus:outline-none focus:border-secondary font-sans text-dark"
                    placeholder="Search title, speaker, keyword..."
                  />
                </div>
              </div>

              {/* Series selection dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-primary">Sermon Series</label>
                <select
                  value={selectedSeries}
                  onChange={(e) => setSelectedSeries(e.target.value)}
                  className="w-full bg-accent border border-secondary/15 rounded-xl px-3 py-3 text-xs font-sans font-semibold text-primary focus:outline-none"
                >
                  <option value="All">All Series ({seriesList.length - 1} total)</option>
                  {seriesList.filter(s => s !== 'All').map((ser, index) => (
                    <option key={index} value={ser}>{ser}</option>
                  ))}
                </select>
              </div>

              {/* Preacher selection dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-primary">Preacher / Minister</label>
                <select
                  value={selectedSpeaker}
                  onChange={(e) => setSelectedSpeaker(e.target.value)}
                  className="w-full bg-accent border border-secondary/15 rounded-xl px-3 py-3 text-xs font-sans font-semibold text-primary focus:outline-none"
                >
                  <option value="All">All Ministers</option>
                  {speakersList.filter(s => s !== 'All').map((spk, index) => (
                    <option key={index} value={spk}>{spk}</option>
                  ))}
                </select>
              </div>

              {/* Topic selection dropdown */}
              <div className="space-y-1.5">
                <label className="block text-[10px] uppercase font-bold tracking-wider text-primary">Topic Study</label>
                <select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="w-full bg-accent border border-secondary/15 rounded-xl px-3 py-3 text-xs font-sans font-semibold text-primary focus:outline-none"
                >
                  <option value="All">All Topics</option>
                  {topicsList.filter(t => t !== 'All').map((top, index) => (
                    <option key={index} value={top}>{top}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Sorting order controls & helper button resetting */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-dark/5 pt-4 text-xs font-sans text-light">
              <div className="flex items-center gap-3">
                <span>Display Order:</span>
                <button 
                  onClick={() => setSortOrder('Newest')}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase font-bold tracking-wider transition-all ${
                    sortOrder === 'Newest' 
                      ? 'bg-primary border-primary text-white shadow-sm' 
                      : 'border-secondary/20 hover:border-secondary'
                  }`}
                >
                  Latest First
                </button>
                <button 
                  onClick={() => setSortOrder('Oldest')}
                  className={`px-3 py-1.5 rounded-lg border text-[10px] uppercase font-bold tracking-wider transition-all ${
                    sortOrder === 'Oldest' 
                      ? 'bg-primary border-primary text-white shadow-sm' 
                      : 'border-secondary/20 hover:border-secondary'
                  }`}
                >
                  By Biblical Timeline
                </button>
              </div>

              <div className="flex items-center gap-3 self-end sm:self-auto">
                {searchTerm || selectedSeries !== 'All' || selectedSpeaker !== 'All' || selectedTopic !== 'All' ? (
                  <button 
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedSeries('All');
                      setSelectedSpeaker('All');
                      setSelectedTopic('All');
                      setSortOrder('Newest');
                      triggerToast("🧹 Filters cleared.");
                    }}
                    className="text-secondary hover:text-secondary-dark font-extrabold flex items-center gap-1 hover:underline"
                  >
                    Clear Filter Criteria
                  </button>
                ) : null}
                <span>Found <strong>{filteredSermons.length}</strong> matching sermon records</span>
              </div>
            </div>
          </div>

          {/* 4. SERMON SERIES GRID */}
          <div id="series-grid-section" className="space-y-6 text-left">
            <div className="space-y-1.5">
              <span className="text-secondary text-xs uppercase font-sans font-bold tracking-[0.2em] block">Sermon Categorizations</span>
              <h2 className="text-2xl font-serif font-bold text-primary">Browse by Message Series</h2>
              <p className="text-xs text-light font-sans max-w-xl">
                Click on any series card below to immediately filter our church archive library to that spiritual campaign block.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SERIES_INFO.map((seriesGroup, idx) => {
                const isSelected = selectedSeries === seriesGroup.name;
                return (
                  <div 
                    key={idx}
                    onClick={() => {
                      setSelectedSeries(seriesGroup.name);
                      triggerToast(`📁 Filtering by Series: "${seriesGroup.name}"`);
                      const viewTarget = document.getElementById('filter-anchor');
                      viewTarget?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md cursor-pointer group ${
                      isSelected ? 'border-secondary ring-2 ring-secondary/40' : 'border-secondary/15'
                    }`}
                  >
                    <div className="relative h-[155px] bg-primary overflow-hidden">
                      <img 
                        src={seriesGroup.image} 
                        alt={seriesGroup.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/85 to-transparent flex items-end p-4">
                        <span className="text-[10px] text-secondary font-sans uppercase font-extrabold tracking-widest block">
                          {seriesGroup.range}
                        </span>
                      </div>
                      <span className="absolute top-3 right-3 bg-primary text-secondary border border-secondary/20 text-[10px] font-sans font-bold px-2 py-0.5 rounded-full">
                        {seriesGroup.count} Messages
                      </span>
                    </div>

                    <div className="p-4 flex h-24 flex-col justify-between">
                      <div className="space-y-1">
                        <h4 className="font-serif text-sm font-bold text-primary text-left group-hover:text-secondary tracking-tight line-clamp-1">
                          {seriesGroup.name}
                        </h4>
                        <p className="text-[11px] text-light leading-snug line-clamp-2">
                          Discover strategic apostolic breakthroughs inside our Ogbomoso library coordinates.
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5. SERMON CARDS GRID */}
          <div id="cards-grid-section" className="space-y-8 text-left">
            <div className="border-b border-dark/5 pb-4 flex items-center justify-between">
              <h3 className="font-serif text-2xl font-bold text-primary">Archive Bulletins</h3>
              {selectedSeries !== 'All' && (
                <span className="text-xs font-sans text-light">
                  Active Filter: <strong className="text-primary">"{selectedSeries}"</strong>
                </span>
              )}
            </div>

            {pagedSermons.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pagedSermons.map((sermon) => (
                  <div
                    key={sermon.id}
                    onClick={() => setSelectedSermon(sermon)}
                    className="bg-white rounded-[2rem] overflow-hidden shadow-xs hover:shadow-lg border border-secondary/10 transition-all duration-300 transform hover:-translate-y-1.5 group cursor-pointer flex flex-col justify-between h-full text-left"
                  >
                    {/* Image thumbnail zone */}
                    <div className="relative h-[200px] bg-primary overflow-hidden">
                      <img
                        src={sermon.thumbnail}
                        alt={sermon.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/35 transition-colors" />

                      {/* Display tag category */}
                      <span className="absolute top-4 left-4 bg-primary text-secondary text-[9px] font-sans font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-md border border-secondary/20">
                        {sermon.series}
                      </span>

                      {/* Floating Play Indicator circle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-secondary text-primary rounded-full flex items-center justify-center shadow-lg transform scale-95 group-hover:scale-105 transition-all border-2 border-white">
                          <Play className="w-5 h-5 fill-primary ml-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Content zone */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-3">
                        {/* Date, duration indicators inline */}
                        <div className="flex items-center gap-3 text-xs font-sans font-semibold text-light leading-none">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            {sermon.date}
                          </span>
                          <span className="w-1.5 h-1.5 bg-secondary/30 rounded-full" />
                          <span className="text-secondary font-bold uppercase tracking-wider">{sermon.duration} Mins</span>
                        </div>

                        {/* Bold sermon title */}
                        <h4 className="font-serif text-base font-bold text-primary group-hover:text-secondary-dark transition-colors line-clamp-2 leading-snug">
                          {sermon.title}
                        </h4>

                        {/* Speaker Indicator */}
                        <p className="text-[11px] font-sans text-light font-medium tracking-wide">
                          Preacher: <strong className="text-dark uppercase text-[10px] font-bold">{sermon.speaker}</strong>
                        </p>

                        {/* Verse anchor */}
                        <div className="bg-accent/80 px-3.5 py-2.5 rounded-xl border border-secondary/10 flex items-start gap-2 max-w-full">
                          <BookOpen className="w-3.5 h-3.5 text-secondary shrink-0 mt-0.5" />
                          <div className="min-w-0 flex-1">
                            <span className="text-[9px] uppercase font-sans font-bold text-primary block leading-none mb-0.5">Anchor Scripture</span>
                            <span className="font-serif italic text-xs leading-none text-light truncate block" title={sermon.scripture}>
                              "{sermon.scripture}"
                            </span>
                          </div>
                        </div>

                        {/* Dynamic Tags pills list */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {sermon.tags.map((tg, keyIdx) => (
                            <span key={keyIdx} className="bg-secondary/10 border border-secondary/15 text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-0.5 rounded text-secondary hover:bg-secondary hover:text-white transition-all select-none">
                              #{tg}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Watch, Listen, Note Actions Toolbar */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-accent border-dark/5 flex-nowrap shrink-0">
                        <button
                          onClick={() => setSelectedSermon(sermon)}
                          className="bg-primary hover:bg-primary-dark text-white text-[10px] uppercase font-sans font-bold py-2 rounded-lg flex items-center justify-center gap-1"
                          title="Watch video message"
                        >
                          <Play className="w-3 h-3 text-secondary fill-secondary" />
                          Watch
                        </button>

                        <button
                          onClick={(e) => handleAudioPlayToggle(sermon, e)}
                          className="bg-accent hover:bg-secondary/10 text-primary border border-secondary/15 text-[10px] uppercase font-sans font-bold py-2 rounded-lg flex items-center justify-center gap-1"
                          title="Stream audio player"
                        >
                          {activeAudioSermon?.id === sermon.id && isPlayingAudio ? (
                            <>
                              <Pause className="w-3 h-3 text-secondary" />
                              Pause
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3 h-3 text-secondary" />
                              Listen
                            </>
                          )}
                        </button>

                        <button
                          onClick={(e) => handleDownloadNotes(sermon, e)}
                          className="bg-accent hover:bg-neutral-200 text-dark border border-secondary/15 text-[10px] uppercase font-sans font-bold py-2 rounded-lg flex items-center justify-center gap-1"
                          title="View study notes"
                        >
                          <FileText className="w-3 h-3 text-secondary" />
                          Notes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-3xl border border-secondary/15 shadow-xs max-w-md mx-auto">
                <span className="text-4xl">🕊️</span>
                <h4 className="font-serif text-xl font-bold text-primary mt-4 mb-2">No Matching Archives</h4>
                <p className="text-xs text-light font-sans px-8 leading-relaxed">
                  We currently cannot find any sermon archives with the search term <strong>"{searchTerm}"</strong> under selected categories.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSeries('All');
                    setSelectedSpeaker('All');
                    setSelectedTopic('All');
                    triggerToast("🧹 Search resets completed.");
                  }}
                  className="mt-6 bg-primary text-white text-xs font-sans font-bold uppercase tracking-wider px-5 py-3 rounded-xl shadow-md cursor-pointer"
                >
                  Reset Active Filters
                </button>
              </div>
            )}
          </div>

          {/* 6. PAGINATION CONTROLLER PANEL */}
          {totalPages > 1 && (
            <div id="pagination-controls" className="flex items-center justify-center gap-2 pt-6 font-sans">
              <button
                onClick={() => {
                  if (currentPage > 1) {
                    setCurrentPage(prev => prev - 1);
                    triggerToast(`Page ${currentPage - 1} loaded`);
                    document.getElementById('cards-grid-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === 1}
                className={`p-2.5 rounded-xl border border-secondary/25 transition-all ${
                  currentPage === 1 
                    ? 'text-light opacity-40 cursor-not-allowed' 
                    : 'text-primary hover:bg-secondary/10 hover:border-secondary'
                }`}
                title="Previous page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageIdx) => {
                const isActive = pageIdx === currentPage;
                return (
                  <button
                    key={pageIdx}
                    onClick={() => {
                      setCurrentPage(pageIdx);
                      triggerToast(`Page ${pageIdx} loaded`);
                      document.getElementById('cards-grid-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-10 h-10 rounded-xl font-sans text-xs font-bold transition-all ${
                      isActive 
                        ? 'bg-primary text-white shadow-md border border-primary' 
                        : 'bg-white border border-secondary/15 text-light hover:border-secondary'
                    }`}
                  >
                    {pageIdx}
                  </button>
                );
              })}

              <button
                onClick={() => {
                  if (currentPage < totalPages) {
                    setCurrentPage(prev => prev + 1);
                    triggerToast(`Page ${currentPage + 1} loaded`);
                    document.getElementById('cards-grid-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                disabled={currentPage === totalPages}
                className={`p-2.5 rounded-xl border border-secondary/25 transition-all ${
                  currentPage === totalPages 
                    ? 'text-light opacity-40 cursor-not-allowed' 
                    : 'text-primary hover:bg-secondary/10 hover:border-secondary'
                }`}
                title="Next page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* 7. SUBSCRIBE PROMPT */}
          <div id="youtube-subscribe-prompt" className="bg-primary text-white rounded-[2rem] p-8 sm:p-12 relative overflow-hidden border border-white/5 shadow-md">
            {/* Ambient Background Glow elements */}
            <div className="absolute top-[-50px] right-[-50px] w-52 h-52 bg-red-600/10 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-[-60px] w-40 h-40 bg-secondary/5 rounded-full blur-[70px]" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2.5 h-2.5 bg-red-600 rounded-full animate-ping" />
                  <span className="text-secondary text-xs uppercase font-sans font-bold tracking-widest flex items-center gap-1.5">
                    <Youtube className="w-4 h-4" /> Online Livestreams
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
                  Never miss a message — Subscribe on YouTube
                </h3>

                <p className="text-xs sm:text-sm text-white/70 max-w-2xl font-sans leading-relaxed">
                  Join our active online community of worshippers. We broadcast our Sabbath covenants, prayer warfare meetings, and LAUTECH student reorientation classes directly to our channel. Subscribe now to stay alerted.
                </p>
              </div>

              {/* YouTube Subscribe prompt interactive widget box */}
              <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center space-y-3 shrink-0">
                <div className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full max-w-xs text-center space-y-3 shadow-inner">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md">
                      <Youtube className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-serif font-bold text-xs text-white">Praise Chapel TV</h4>
                      <p className="text-[10px] text-white/55 font-sans">Active Baptist Channel</p>
                    </div>
                  </div>

                  {/* Subscriber mock count */}
                  <div className="bg-white/5 rounded-lg py-1.5 px-3 text-xs tracking-wider font-mono text-secondary font-bold inline-block border border-white/5">
                    {youtubeCount.toLocaleString()} Covenant Subscribers
                  </div>

                  <button
                    onClick={handleSubscribeClick}
                    className={`w-full py-2 px-4 rounded-xl text-xs font-sans font-extrabold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm ${
                      hasSubscribed 
                        ? 'bg-neutral-700 text-white border border-white/15'
                        : 'bg-red-600 hover:bg-red-700 text-white'
                    }`}
                  >
                    {hasSubscribed ? 'Subscribed ✓' : 'Subscribe Now'}
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. INTERACTIVE DYNAMIC AUDIO PLAYER BAR (Fixed at the bottom of the screen) */}
      {activeAudioSermon && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-secondary/20 shadow-2xl py-3 px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4 animate-in slide-in-from-bottom duration-300">
          <div className="flex items-center gap-3.5 min-w-0 flex-1">
            <div className="w-10 h-10 bg-primary/5 text-secondary border border-secondary/15 rounded-lg flex items-center justify-center shrink-0">
              <Headphones className="w-5 h-5 text-secondary animate-pulse" />
            </div>
            <div className="min-w-0 text-left">
              <h5 className="text-xs font-serif font-bold text-primary truncate max-w-[200px] sm:max-w-[340px] md:max-w-md">
                {activeAudioSermon.title}
              </h5>
              <p className="text-[10px] text-light font-sans tracking-wide leading-none mt-0.5 truncate max-w-[150px] sm:max-w-none">
                Delivered by: {activeAudioSermon.speaker}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {/* Simulated progress layout */}
            <span className="hidden sm:inline text-[10px] font-mono text-light">0:00 / {activeAudioSermon.duration}</span>

            {/* Play/Pause control */}
            <button
              onClick={() => {
                setIsPlayingAudio(!isPlayingAudio);
                triggerToast(isPlayingAudio ? "⏸️ Sermon audio paused" : "▶️ Streaming sermon audio preview");
              }}
              className="w-10 h-10 bg-primary text-secondary rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors border border-secondary/25 shadow-md"
              title={isPlayingAudio ? "Pause" : "Play"}
            >
              {isPlayingAudio ? (
                <Pause className="w-4 h-4 fill-secondary" />
              ) : (
                <Play className="w-4 h-4 fill-secondary ml-0.5" />
              )}
            </button>

            {/* Audio direct download trigger */}
            <a
              href={activeAudioSermon.audioUrl}
              download
              onClick={() => triggerToast(`📥 Downloading MP3 file of "${activeAudioSermon.title}"...`)}
              className="w-8 h-8 rounded-full bg-accent hover:bg-neutral-200 border border-secondary/15 flex items-center justify-center text-primary cursor-pointer"
              title="Download MP3"
            >
              <Download className="w-3.5 h-3.5 text-secondary" />
            </a>

            {/* Close global player */}
            <button
              onClick={() => {
                setActiveAudioSermon(null);
                setIsPlayingAudio(false);
                triggerToast("Player closed.");
              }}
              className="text-primary hover:text-secondary p-1"
              title="Close player"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* 9. MODAL - DETAILED STUDY NOTES POPUP */}
      {selectedNotesSermon && (
        <div 
          onClick={() => setSelectedNotesSermon(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl relative border-t-8 border-secondary animate-in zoom-in-95 duration-200"
          >
            <button 
              onClick={() => setSelectedNotesSermon(null)}
              className="absolute top-4 right-4 text-primary bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full transition-colors z-20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2 bg-secondary/10 text-secondary w-fit px-3 py-1 rounded-full text-[9px] uppercase font-sans font-bold mb-4 tracking-wider">
                <FileText className="w-3 h-3" />
                Message outline Bulletin
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-1">
                {selectedNotesSermon.title}
              </h4>
              <p className="text-[10px] text-light uppercase font-sans font-bold tracking-widest block mb-4">
                Anchor Verse: {selectedNotesSermon.scripture}
              </p>

              <hr className="border-secondary/15 my-3" />

              <div className="bg-accent p-5 rounded-2xl border border-secondary/10 font-sans text-xs text-dark space-y-4 text-left max-h-[220px] overflow-y-auto">
                <span className="text-[9px] font-sans font-extrabold uppercase tracking-widest text-secondary block">Theological Outline Bulletins</span>
                <pre className="whitespace-pre-wrap font-sans font-medium text-xs text-light leading-relaxed">
                  {selectedNotesSermon.notes}
                </pre>
              </div>

              <div className="bg-secondary/10 p-4 rounded-xl border border-secondary/20 text-[10px] font-sans text-primary leading-normal mt-4 flex items-start gap-2 max-w-full text-left">
                <BookMarked className="w-4.5 h-4.5 text-secondary shrink-0 mt-0.5" />
                <p>
                  This sermon outline bulletin serves as an index for Bowen/LAUTECH bible study circles. Print this outline key to fuel personal family devotions this single week.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    triggerToast("📥 Downloaded sermon outline bulletin successfully!");
                    setSelectedNotesSermon(null);
                  }}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1"
                >
                  <Download className="w-3.5 h-3.5 text-secondary" />
                  Download Complete Notes
                </button>
                <button
                  onClick={() => setSelectedNotesSermon(null)}
                  className="w-full sm:w-1/3 bg-accent hover:bg-neutral-200 text-primary font-sans font-bold text-xs uppercase py-3 rounded-xl transition-all"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 10. MODAL - EMBEDDED IFRAME PLAYER POPUP */}
      {selectedSermon && (
        <div 
          onClick={() => setSelectedSermon(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full shadow-2xl relative border-t-8 border-secondary animate-in zoom-in-95 duration-200"
          >
            <button 
              onClick={() => setSelectedSermon(null)}
              className="absolute top-4 right-4 text-primary bg-accent hover:bg-secondary hover:text-primary p-2 rounded-full z-10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video viewport aspect ratio */}
            <div className="aspect-video bg-black">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedSermon.youtubeId}?autoplay=1`}
                title={selectedSermon.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="p-6 md:p-8 text-left">
              <div className="flex items-center gap-3 text-xs font-sans font-bold uppercase tracking-wider text-secondary mb-2">
                <span>{selectedSermon.series}</span>
                <span className="w-1.5 h-1.5 bg-primary/20 rounded-full" />
                <span className="text-light">{selectedSermon.date}</span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-primary mb-2 leading-tight">
                {selectedSermon.title}
              </h4>

              <p className="text-[10px] text-secondary-light font-sans font-extrabold uppercase tracking-widest mb-4">
                Delivered by: {selectedSermon.speaker} • Scripture Anchor: {selectedSermon.scripture}
              </p>

              <hr className="border-secondary/15 my-4" />

              <h5 className="font-serif text-xs uppercase tracking-widest font-extrabold text-primary mb-1">Message Summary</h5>
              <p className="text-sm font-sans text-light leading-relaxed">
                {selectedSermon.summary}
              </p>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-accent border-dark/5">
                <span className="text-[10px] text-light italic">
                  Watch this offline on YouTube @faithbaptistchurchpraisechapel
                </span>
                <button
                  onClick={() => setSelectedSermon(null)}
                  className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl tracking-wider shadow-sm"
                >
                  Close Player
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

