import React, { useState } from 'react';
import { 
  CreditCard, 
  Copy, 
  Check, 
  Info, 
  HandHeart, 
  Coins, 
  HeartHandshake, 
  HelpCircle, 
  Globe2, 
  Building2, 
  ChevronDown, 
  ChevronUp, 
  Wallet, 
  QrCode, 
  Download, 
  Users, 
  CheckCircle2, 
  FileText,
  DollarSign
} from 'lucide-react';
import { BANK_DETAILS } from '../churchData';

type GivingType = 'Tithe' | 'Offering' | 'Building Fund' | 'Missions' | 'Other';
type PaymentMethod = 'bank_transfer' | 'paystack' | 'flutterwave';

export default function GivePage() {
  // General Tabs State
  const [activeTab, setActiveTab] = useState<'online' | 'bank' | 'inperson'>('online');
  
  // Tab 1: Online Giving State
  const [payerName, setPayerName] = useState('');
  const [payerEmail, setPayerEmail] = useState('');
  const [givingType, setGivingType] = useState<GivingType>('Tithe');
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(5000);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('paystack');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  // Tab 2: Bank Details State
  const [copied, setCopied] = useState(false);

  // Section 4: Accordion FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Section 5: Financial Transparency State
  const [downloadingReport, setDownloadingReport] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Handle Bank Account Number Copy to Clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Get current active giving amount
  const getFinalAmount = (): number => {
    if (selectedAmount === 'custom') {
      const parsed = parseFloat(customAmount);
      return isNaN(parsed) || parsed <= 0 ? 0 : parsed;
    }
    return selectedAmount;
  };

  // Handle simulated checkout flow
  const handleGiveNowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalVal = getFinalAmount();
    if (finalVal <= 0) {
      alert('Please select or specify a valid giving amount of ₦1 or more.');
      return;
    }

    setIsProcessing(true);
    
    // Create random receipt details
    const cleanId = 'TXN-' + Math.floor(100000 + Math.random() * 900000) + '-COP';
    setTransactionId(cleanId);

    // Simulate standard server-side payment portal processing latency
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
    }, 1800);
  };

  // Reset simulated checkout
  const resetPaymentForm = () => {
    setPaymentSuccess(false);
    setPayerName('');
    setPayerEmail('');
    setCustomAmount('');
    setSelectedAmount(5000);
    setGivingType('Tithe');
    setPaymentMethod('paystack');
  };

  // Simulate Annual Report Download
  const handleDownloadReport = () => {
    if (downloadingReport) return;
    setDownloadingReport(true);
    setDownloadSuccess(false);

    // Simulate 2 seconds audit retrieval wait time
    setTimeout(() => {
      setDownloadingReport(false);
      setDownloadSuccess(true);
      
      // Auto fade-away success alert
      setTimeout(() => setDownloadSuccess(false), 5000);
    }, 2000);
  };

  const faqs = [
    { 
      q: "Is my donation tax deductible?", 
      a: "Yes. Faith Baptist Church - Chapel of Praise is a fully registered faith-based institution and ministry. If you require standard annual donor statements, tax receipt forms, or customized references for corporate/personal tax-deductible auditing in Nigeria or overseas, kindly connect with our church administration committee at our physical head desk or message our finance desk via the Contact page."
    },
    { 
      q: "How are praise chapel gifts utilized?", 
      a: "Every seed is treated with sacred, fear-of-God reverence. Contributions are apportioned under the joint review of Rev. Dr. J. O. Ogunyode-Agbaosi, our Church Deacons assembly, and our professional auditing team. Main allocations cover rural soul-winning evangelism crusades, church building development projects, free student welfare kits/scholarships in Oke-Owode, and direct benevolence support to widowed or economically marginalized indigenes." 
    },
    { 
      q: "Can I set up recurring weekly or monthly sowing covenants?", 
      a: "Absolutely! You can establish automated standing transfers through your personal banking application using our secure GTBank details provided in Tab 2. For custom pledges or physical monthly envelope covenants, please submit a faith-pledge request on this page or connect with Deacon Philip Olayinka on Sunday."
    }
  ];

  return (
    <div id="give-page-wrapper" className="pt-20 md:pt-24 bg-accent/30 min-h-screen">
      
      {/* 1. PAGE HERO */}
      <section 
        id="give-page-hero" 
        className="relative bg-primary text-white py-20 md:py-28 overflow-hidden"
      >
        {/* Immersive background texture overlay */}
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Giving Hands" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Decorative curved separator */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg className="fill-accent w-full h-[24px] md:h-[40px] block" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 h1200 v-120 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-secondary uppercase tracking-[0.25em] font-sans font-bold text-xs md:text-sm px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 inline-block">
            Faithful Stewardship
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-white tracking-tight leading-none mb-6">
            Give to God's Work
          </h1>

          {/* Golden styled Scripture verse */}
          <div className="max-w-2xl mx-auto bg-primary-dark/60 border border-secondary/25 py-5 px-6 sm:px-8 rounded-2xl shadow-lg relative">
            <p className="scripture-quote text-base sm:text-lg text-amber-200 font-serif leading-relaxed italic mb-3">
              "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
            </p>
            <span className="text-xs uppercase tracking-widest font-sans font-bold text-secondary-light">
              — 2 Corinthians 9:7
            </span>
          </div>
        </div>
      </section>

      {/* 2. WHY WE GIVE SECTION (3-Column Layout) */}
      <section 
        id="give-why-section" 
        className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-3">
            Sowing into Fertile Ground
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 tracking-tight">
            Why We Give Generously
          </h2>
          <div className="h-1 w-20 bg-secondary mx-auto rounded-full mb-6" />
          <p className="text-sm sm:text-base text-light font-sans">
            Giving at Faith Baptist Church is an act of spiritual worship, gratitude, and covenant partnership. Together, our resources are magnified to transform lives in Ogbomoso and beyond.
          </p>
        </div>

        {/* 3-Column Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          
          {/* Card 1: Support Missions */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 relative group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/25 shrink-0 transition-colors group-hover:bg-secondary/20">
              <Globe2 className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary">
              Support Missions
            </h3>
            <p className="text-sm text-light leading-relaxed font-sans">
              We carry the gospel of Jesus to the unreached. Your financial seeds recruit, equip, and sustain rural evangelists, pay for diagnostic medical outreaches, and subsidize rural welfare materials distributed in critical Ogbomoso outposts.
            </p>
          </div>

          {/* Card 2: Build the Kingdom */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 relative group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/25 shrink-0 transition-colors group-hover:bg-secondary/20">
              <Building2 className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary">
              Build the Kingdom
            </h3>
            <p className="text-sm text-light leading-relaxed font-sans">
              We cultivate safe sanctuary dimensions for divine connection. Sowing enables structural maintenance of our Oke-Owode facility, powers dynamic audiovisual technology for broadcast, and invests in solid structural developments that bless kids, youths, and coming generations.
            </p>
          </div>

          {/* Card 3: Bless our Community */}
          <div className="bg-white rounded-3xl p-8 border border-secondary/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col space-y-4 relative group">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/25 shrink-0 transition-colors group-hover:bg-secondary/20">
              <HandHeart className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="text-xl font-serif font-bold text-primary">
              Bless our Community
            </h3>
            <p className="text-sm text-light leading-relaxed font-sans">
              We represent the literal hands and feet of Christ. Every month, we distribute bags of food, offer urgent school tuition aids for struggling students at LAUTECH/Bowen, finance emergency medical treatments, and assist Ogbomoso widows in building microenterprises.
            </p>
          </div>

        </div>
      </section>

      {/* 3. GIVING OPTIONS (Tabs Area) */}
      <section 
        id="give-options-section" 
        className="py-16 md:py-20 bg-white border-t border-b border-secondary/15"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
            <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-2">
              Select Your Preferred Pathway
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
              Choose How to Sowing
            </h2>
            <p className="text-xs sm:text-sm text-light font-sans mt-2">
              Whether you wish to give immediately online, copy our bank details, or learn about physical worship baskets, we offer safe channels.
            </p>
          </div>

          {/* TAB HEADERS */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 font-sans">
            <button
              onClick={() => setActiveTab('online')}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === 'online'
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-accent/40 text-primary border-secondary/25 hover:bg-accent'
              }`}
            >
              <CreditCard className="w-4 h-4 shrink-0 text-secondary" />
              1. Online Giving
            </button>

            <button
              onClick={() => setActiveTab('bank')}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === 'bank'
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-accent/40 text-primary border-secondary/25 hover:bg-accent'
              }`}
            >
              <Wallet className="w-4 h-4 shrink-0 text-secondary" />
              2. Bank Details
            </button>

            <button
              onClick={() => setActiveTab('inperson')}
              className={`px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 border ${
                activeTab === 'inperson'
                  ? 'bg-primary text-white border-primary shadow-md'
                  : 'bg-accent/40 text-primary border-secondary/25 hover:bg-accent'
              }`}
            >
              <Users className="w-4 h-4 shrink-0 text-secondary" />
              3. In-Person Worship
            </button>
          </div>

          {/* TAB DETAILS BOX */}
          <div className="bg-accent/30 rounded-3xl p-6 sm:p-10 border border-secondary/15 shadow-sm max-w-3xl mx-auto">
            
            {/* ====== TAB 1: ONLINE GIVING ====== */}
            {activeTab === 'online' && (
              <div id="tab-online-giving" className="animate-in fade-in duration-300">
                {!paymentSuccess ? (
                  <form onSubmit={handleGiveNowSubmit} className="space-y-6">
                    <div className="text-center sm:text-left">
                      <h3 className="text-xl font-serif font-bold text-primary mb-1">
                        Secure Electronic Giving Portal
                      </h3>
                      <p className="text-xs text-light font-sans">
                        Fast, encrypted, and safe. Simply select or specify the amount and purpose to proceed.
                      </p>
                    </div>

                    {/* Personal contact context fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1.5 font-sans">
                          Sower Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={payerName}
                          onChange={(e) => setPayerName(e.target.value)}
                          className="w-full bg-white border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                          placeholder="e.g. Bro. David Ogunlana"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1.5 font-sans">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={payerEmail}
                          onChange={(e) => setPayerEmail(e.target.value)}
                          className="w-full bg-white border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-primary font-medium"
                          placeholder="e.g. david.o@gmail.com"
                        />
                      </div>
                    </div>

                    {/* Amount Preset Grid */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary font-sans">
                        Sowing Amount (NGN) *
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 font-mono">
                        {[500, 1000, 5000, 10000].map((amt) => (
                          <button
                            key={amt}
                            type="button"
                            onClick={() => setSelectedAmount(amt)}
                            className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all ${
                              selectedAmount === amt
                                ? 'bg-secondary text-primary border-secondary shadow-sm'
                                : 'bg-white text-primary border-secondary/15 hover:bg-neutral-50'
                            }`}
                          >
                            ₦{amt.toLocaleString()}
                          </button>
                        ))}
                        <button
                          type="button"
                          onClick={() => setSelectedAmount('custom')}
                          className={`py-2 px-3 rounded-xl border text-xs sm:text-sm font-bold transition-all font-sans ${
                            selectedAmount === 'custom'
                              ? 'bg-secondary text-primary border-secondary shadow-sm'
                              : 'bg-white text-primary border-secondary/15 hover:bg-neutral-50'
                          }`}
                        >
                          Custom
                        </button>
                      </div>

                      {/* Custom Input Field */}
                      {selectedAmount === 'custom' && (
                        <div className="pt-2">
                          <div className="relative mt-1 rounded-xl shadow-xs">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                              <span className="text-secondary text-sm font-bold font-mono">₦</span>
                            </div>
                            <input
                              type="number"
                              required
                              min="1"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              className="w-full bg-white border border-secondary/15 rounded-xl py-3 pl-8 pr-4 text-sm focus:outline-none focus:border-secondary font-mono text-primary font-bold"
                              placeholder="Enter customized amount (e.g. 50000)"
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Giving Type Selection Buttons */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary font-sans">
                        Contribution Category *
                      </label>
                      <div className="flex flex-wrap gap-2 text-xs font-sans">
                        {(['Tithe', 'Offering', 'Building Fund', 'Missions', 'Other'] as GivingType[]).map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setGivingType(type)}
                            className={`py-2 px-4 rounded-full border font-bold transition-all ${
                              givingType === type
                                ? 'bg-primary text-white border-primary shadow-xs'
                                : 'bg-white text-primary border-secondary/15 hover:bg-neutral-100'
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Payment Gateways Placeholders */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary font-sans">
                        Select Gateway Provider (Demo) *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans">
                        {[
                          { id: 'paystack', name: 'Paystack checkout', logo: '💳' },
                          { id: 'flutterwave', name: 'Flutterwave checkout', logo: '⚡' }
                        ].map((method) => (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setPaymentMethod(method.id as PaymentMethod)}
                            className={`p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                              paymentMethod === method.id
                                ? 'bg-white border-secondary ring-2 ring-secondary/25'
                                : 'bg-neutral-50/50 border-secondary/10 hover:bg-white'
                            }`}
                          >
                            <span className="font-bold text-primary flex items-center gap-2">
                              <span className="text-base">{method.logo}</span>
                              {method.name}
                            </span>
                            <span className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                              paymentMethod === method.id ? 'border-secondary bg-secondary' : 'border-neutral-300'
                            }`}>
                              {paymentMethod === method.id && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Give Now submitting button */}
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-secondary hover:bg-secondary-light text-primary font-sans font-bold uppercase tracking-widest text-xs sm:text-sm py-4 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 border border-secondary"
                    >
                      {isProcessing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                          <span>Connecting to Secure Gateways...</span>
                        </>
                      ) : (
                        <>
                          <Coins className="w-4 h-4 shrink-0" />
                          <span>Give Now (₦{getFinalAmount().toLocaleString()})</span>
                        </>
                      )}
                    </button>
                  </form>
                ) : (
                  /* SIMULATED ONLINE SOW SUCCESS BOX */
                  <div className="text-center py-6 font-sans select-none animate-in scale-in duration-300">
                    <div className="w-16 h-16 bg-green-50 text-emerald-600 border border-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>

                    <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-1">
                      Sowing Record Succeeded!
                    </h4>
                    <p className="text-xs text-secondary-dark font-sans font-black tracking-widest uppercase mb-6">
                      Simulated Transaction Receipt
                    </p>

                    <div className="max-w-md mx-auto bg-white rounded-2xl p-5 border border-secondary/15 text-left mb-6 space-y-4">
                      <div className="border-b border-dashed border-accent pb-3 flex justify-between items-center text-xs">
                        <span className="text-light uppercase font-bold">Transaction Code</span>
                        <span className="font-mono font-bold text-primary">{transactionId}</span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-light">Contributor Name:</span>
                          <span className="font-bold text-primary">{payerName}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-light">Email Reference:</span>
                          <span className="font-bold text-primary font-mono">{payerEmail}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-light">Covenant Purpose:</span>
                          <span className="font-extrabold text-secondary-dark">{givingType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-light">Gateway Merchant:</span>
                          <span className="font-bold text-primary uppercase">{paymentMethod} Sandbox</span>
                        </div>
                      </div>

                      <div className="border-t border-accent pt-3 flex justify-between items-center bg-accent/60 p-3 rounded-xl">
                        <span className="text-xs uppercase font-extrabold text-primary">Transferred Seed:</span>
                        <span className="text-lg font-mono font-black text-primary">
                          ₦{getFinalAmount().toLocaleString()}.00 NGN
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-light max-w-sm mx-auto mb-6">
                      God bless your generous heart, <strong>{payerName}</strong>! Your demo contribution sowed toward <strong>{givingType}</strong> is complete. Note that this is a simulated sandbox sand-box action to check build layout.
                    </p>

                    <button
                      onClick={resetPaymentForm}
                      className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-3 rounded-xl tracking-wider shadow-xs transition-all inline-block"
                    >
                      Make Another Seed
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ====== TAB 2: BANK DETAILS ====== */}
            {activeTab === 'bank' && (
              <div id="tab-bank-details" className="space-y-6 animate-in fade-in duration-300">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-serif font-bold text-primary mb-1">
                    Direct Local Bank Transfer
                  </h3>
                  <p className="text-xs text-light font-sans">
                    Ideal for bank mobile applications, web portals, or physical counter cash-deposits across Nigeria.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Account detail entries */}
                  <div className="md:col-span-7 bg-white rounded-2xl p-6 border border-secondary/10 space-y-4">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-0.5">Bank Name</span>
                      <span className="font-sans text-base font-bold text-primary">{BANK_DETAILS.bankName}</span>
                    </div>

                    <div className="border-t border-dark/5 pt-3 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-0.5">Account Number</span>
                        <span className="font-mono text-lg font-bold text-primary tracking-wide">{BANK_DETAILS.accountNumber}</span>
                      </div>
                      
                      <button
                        onClick={handleCopy}
                        className="flex items-center gap-1.5 bg-accent hover:bg-neutral-200 text-primary border border-secondary/20 px-3.5 py-2 rounded-xl text-xs font-sans font-bold shadow-xs transition-all"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-green-600" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-secondary" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>

                    <div className="border-t border-dark/5 pt-3">
                      <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-0.5">Account Name</span>
                      <span className="font-serif text-sm font-bold text-dark">{BANK_DETAILS.accountName}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 border-t border-dark/5 pt-3 text-xs">
                      <div>
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-0.5">Branch</span>
                        <span className="font-sans font-semibold text-dark">{BANK_DETAILS.branch}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-0.5">Sorting Code</span>
                        <span className="font-sans font-bold text-dark">{BANK_DETAILS.sortingCode}</span>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Graphic Placeholders */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center space-y-2 mt-2 md:mt-0">
                    <div className="relative w-40 h-40 bg-white border border-secondary/15 rounded-2xl p-4 flex flex-col items-center justify-center shadow-xs">
                      
                      {/* Simple custom vector SVG representing QR Scanner overlay */}
                      <svg viewBox="0 0 100 100" className="w-[110px] h-[110px] text-primary/75">
                        <rect x="10" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="6" />
                        <rect x="70" y="10" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="6" />
                        <rect x="10" y="70" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="6" />
                        
                        <rect x="18" y="18" width="4" height="4" fill="currentColor" />
                        <rect x="78" y="18" width="4" height="4" fill="currentColor" />
                        <rect x="18" y="78" width="4" height="4" fill="currentColor" />
                        
                        <path d="M40 10 h15 M40 30 h10 M70 40 h15 M70 50 h5 M10 50 h15 M40 60 h10 M50 80 h20 M50 90 h15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        <path d="M50 20 h5 v10 M30 50 v15 M60 50 v10 M10 40 v5 M90 70 v15" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        
                        {/* Animated Laser Grid Line */}
                        <line x1="5" y1="50" x2="95" y2="50" stroke="#C9960C" strokeWidth="2.5" opacity="0.85" className="animate-pulse" />
                      </svg>

                      {/* Small QR Label Overlay */}
                      <span className="text-[9px] uppercase font-sans font-extrabold tracking-widest text-secondary mt-1.5 flex items-center gap-1">
                        <QrCode className="w-3 h-3" /> QR Scanner Details
                      </span>
                    </div>
                    <p className="text-[10px] text-center text-light leading-snug font-sans max-w-[150px]">
                      Upcoming bank QR instant scanning trigger.
                    </p>
                  </div>

                </div>

                {/* Secure Notice advice */}
                <div className="flex gap-2.5 bg-secondary/15 p-4 rounded-xl border border-secondary/20 text-[11px] text-primary font-sans leading-relaxed">
                  <Info className="w-4.5 h-4.5 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-extrabold font-sans text-xs uppercase tracking-wider mb-0.5">Auditable Transaction Reference Advice</h4>
                    <p>
                      When making transfers via your bank mobile app, please use brief descriptions such as <strong>"TITHE"</strong>, <strong>"BUILDING PROJECT SEED"</strong>, or <strong>"COMMUNITY benevolence"</strong> to assist our financial records department.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* ====== TAB 3: IN-PERSON ====== */}
            {activeTab === 'inperson' && (
              <div id="tab-in-person" className="space-y-6 animate-in fade-in duration-300">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl font-serif font-bold text-primary mb-1">
                    Giving During Worship Services
                  </h3>
                  <p className="text-xs text-light font-sans">
                    You can present your tithes, covenants, and freewill offerings at any of our physical corporate gatherings.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm font-sans">
                  
                  {/* Service 1 Schedule detail block */}
                  <div className="bg-white rounded-2xl p-5 border border-secondary/10 flex flex-col space-y-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-secondary">First Assembly</span>
                    <h4 className="font-serif text-base font-bold text-primary leading-tight">
                      Sunday Celebration Service
                    </h4>
                    <p className="text-xs text-light font-sans leading-normal">
                      Every Sunday, 8:00 AM — Main Auditorium, Oke-Owode, Ogbomoso, Oyo State.
                    </p>
                  </div>

                  {/* Service 2 Schedule detail block */}
                  <div className="bg-white rounded-2xl p-5 border border-secondary/10 flex flex-col space-y-2">
                    <span className="text-[9px] uppercase tracking-widest font-bold text-secondary">Mid-week Assembly</span>
                    <h4 className="font-serif text-base font-bold text-primary leading-tight">
                      Wednesday Prayer Power & Praise
                    </h4>
                    <p className="text-xs text-light font-sans leading-normal">
                      Every Wednesday, 5:00 PM — Main Sanctuary. Dedicated mid-week prayer covenants.
                    </p>
                  </div>

                </div>

                {/* Envelope Protocol Box */}
                <div className="bg-white rounded-2xl p-6 border border-secondary/15 space-y-3">
                  <h4 className="font-serif text-md font-bold text-primary flex items-center gap-1.5 border-b border-accent pb-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary" />
                    Our Physical Envelope Stewardship Protocol
                  </h4>
                  <ul className="text-xs text-light space-y-2 list-disc list-inside leading-relaxed font-sans">
                    <li>
                      <strong>Grab Envelopes:</strong> Offering and Tithe envelopes are readily available from our Ushers at the entrance doors of the main sanctuary.
                    </li>
                    <li>
                      <strong>Write Safely:</strong> Clearly print your name, category (e.g. Tithe, Freewill, Building, or Pastoral Support), and contact number. If you are paying a specific fellowship pledge, please note it also.
                    </li>
                    <li>
                      <strong>Sanctuary Drop-Off:</strong> Safe offering containers are navigated through the congregation during the designated thanksgiving worship section of the running service.
                    </li>
                    <li>
                      <strong>Strict Confidentiality:</strong> All envelope seals are broken only by authorized counting officers and pastoral members under high covenant secrecy.
                    </li>
                  </ul>
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

      {/* 4. GIVING FAQ SECTION (Accordion Component) */}
      <section 
        id="give-faq-section" 
        className="py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center max-w-xl mx-auto mb-10 md:mb-14">
          <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-2">
            Clear Answers
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-primary">
            Frequently Asked Questions
          </h2>
          <div className="h-0.5 w-14 bg-secondary mx-auto rounded-full mt-3 mb-4" />
          <p className="text-xs text-light font-sans">
            Have questions about financial matters, transparency, or receipt issuance? Browse our official responses below.
          </p>
        </div>

        <div className="space-y-4 font-sans max-w-3xl mx-auto">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-secondary/15 overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-sm sm:text-base font-bold text-primary hover:bg-accent/40 transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full bg-accent/80 flex items-center justify-center shrink-0 border border-secondary/20 text-secondary transition-all ${
                    isOpen ? 'rotate-180 bg-secondary/10' : ''
                  }`}>
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>
                
                {isOpen && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-accent bg-neutral-50/50 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-xs sm:text-sm text-light leading-relaxed font-sans">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. FINANCIAL TRANSPARENCY SECTION */}
      <section 
        id="financial-transparency-section" 
        className="bg-primary text-white py-16 md:py-24 relative overflow-hidden text-center sm:text-left"
      >
        {/* Subtle radial lights */}
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(201,150,12,0.3)_0,transparent_100%)] pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Stewardship declaration */}
              <div className="lg:col-span-8 space-y-4">
                <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs flex items-center justify-center sm:justify-start gap-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Safe, Secure & Transformed
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                  We steward every gift faithfully
                </h2>
                <div className="h-0.5 w-16 bg-secondary rounded-full hidden sm:block mb-2" />
                <p className="text-sm text-secondary-light/80 leading-relaxed font-sans max-w-2xl">
                  At Faith Baptist Church - Chapel of Praise, we maintain a flawless administrative standard for every single Kobo returned to the house of God. Under the spiritual oversight of Rev. Dr. J. O. Ogunyode-Agbaosi and our joint auditing deacons council, we publish fully reconciled finances to ensure zero waste. Every seed is targeted purely to transform spirits, maintain our facilities, and provide physical relief inside the wider Ogbomoso territory.
                </p>
              </div>

              {/* Annual report placeholder button download */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
                
                <div className="p-3 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-3 w-full max-w-sm">
                  <FileText className="w-10 h-10 text-secondary shrink-0" />
                  <div className="text-left">
                    <p className="text-xs font-bold text-white leading-snug">
                      Annual Financial Report 2025
                    </p>
                    <p className="text-[10px] text-zinc-400 font-mono">
                      PDF Document • 2.6 MB
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleDownloadReport}
                  disabled={downloadingReport}
                  className="w-full max-w-sm bg-secondary hover:bg-secondary-light text-primary font-sans font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {downloadingReport ? (
                    <>
                      <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                      <span>Simulating Verification...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Download Stewardship Report</span>
                    </>
                  )}
                </button>

                {/* Simulated download alert popup toast */}
                {downloadSuccess && (
                  <div className="w-full max-w-sm bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs py-2 px-3 rounded-lg text-center font-sans">
                    <strong>Report Simulated Download successful!</strong>
                  </div>
                )}
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
