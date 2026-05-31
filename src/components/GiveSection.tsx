import React, { useState } from 'react';
import { HelpCircle, Coins, CreditCard, Copy, Check, HandHeart, Sparkles } from 'lucide-react';
import { BANK_DETAILS } from '../churchData';
import { motion, AnimatePresence } from 'motion/react';

export default function GiveSection() {
  const [activeTab, setActiveTab] = useState<'bank' | 'pledge'>('bank');
  const [copied, setCopied] = useState(false);
  const [pledged, setPledged] = useState(false);
  const [pledgeData, setPledgeData] = useState({ name: '', purpose: 'Tithe', amount: '' });

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledged(true);
  };

  return (
    <section 
      id="giving-section-pane" 
      className="relative bg-primary text-white py-20 md:py-24 overflow-hidden"
    >
      {/* Golden design motifs in corners */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative vertical cross line background */}
      <div className="absolute right-12 top-1/2 transform -translate-y-1/2 opacity-5 pointer-events-none hidden lg:block">
        <svg className="w-96 h-96 text-secondary stroke-current stroke-1 fill-none" viewBox="0 0 24 24">
          <path d="M12 2v20M7 8h10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Header left-column copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <span className="text-secondary font-sans font-bold text-xs uppercase tracking-[0.25em] mb-3 inline-flex items-center gap-2">
              <span className="h-[2px] w-6 bg-secondary" />
              Sowing into the Covenant
            </span>
            
            <h2 id="giving-main-heading" className="text-3xl sm:text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-6">
              Support the Work <br className="hidden md:inline" />
              of God's Sanctuary
            </h2>

            {/* Holy scripture highlight */}
            <div className="border-l-4 border-secondary pl-6 py-2 mb-8 text-left bg-white/[0.03] backdrop-blur-sm rounded-r-2xl pr-6">
              <p className="font-serif italic text-white/95 text-base sm:text-lg scripture-quote leading-relaxed mb-3">
                "Bring ye all the tithes into the storehouse, that there may be meat in mine house, and prove me now herewith, saith the Lord of hosts, if I will not open you the windows of heaven, and pour you out a blessing, that there shall not be room enough to receive it."
              </p>
              <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase font-bold text-secondary">
                <span>Malachi 3:10</span>
                <span className="text-white/40">•</span>
                <span>KJV</span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-white/80 leading-relaxed mb-8">
              Your structural tithes, seeds, sacrificial offerings, and project support enable Faith Baptist Church Praise Chapel of Oke-Owode, Ogbomoso, to fund our ongoing regional missionary outreach, operate our media ministries and print materials, and care for the vulnerable within local communities.
            </p>
          </div>

          {/* Interactive Toggle Card container (right-column) */}
          <div className="lg:col-span-6">
            <div className="bg-white text-dark rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10 relative overflow-hidden">
              
              {/* Tab Selector Buttons */}
              <div className="flex bg-accent p-1 rounded-xl mb-8">
                <button
                  id="tab-btn-bank"
                  onClick={() => setActiveTab('bank')}
                  className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all ${
                    activeTab === 'bank'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-light hover:text-dark'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  Bank Transfer
                </button>
                <button
                  id="tab-btn-pledge"
                  onClick={() => setActiveTab('pledge')}
                  className={`flex-1 flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider py-3 rounded-lg transition-all ${
                    activeTab === 'pledge'
                      ? 'bg-primary text-white shadow-md'
                      : 'text-light hover:text-dark'
                  }`}
                >
                  <HandHeart className="w-4 h-4" />
                  Submit Pledge
                </button>
              </div>

              {/* Tab Contents */}
              <AnimatePresence mode="wait">
                {activeTab === 'bank' ? (
                  <motion.div
                    key="bank-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="text-center sm:text-left">
                      <h4 className="font-serif text-lg font-bold text-primary mb-1">
                        Direct Bank Account Details
                      </h4>
                      <p className="text-xs text-light font-sans">
                        Sow directly via secure electronic transfer inside Nigeria or worldwide.
                      </p>
                    </div>

                    {/* Bank Account Fields list card */}
                    <div className="bg-accent rounded-2xl p-5 border border-secondary/10 space-y-4">
                      <div>
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">
                          Bank Name
                        </span>
                        <span className="font-serif text-base font-bold text-[#1F2937]">
                          {BANK_DETAILS.bankName}
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between border-t border-dark/5 pt-3">
                        <div>
                          <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">
                            Account Number
                          </span>
                          <span className="font-mono text-lg font-bold text-primary tracking-wider">
                            {BANK_DETAILS.accountNumber}
                          </span>
                        </div>
                        
                        {/* Copy Code Button */}
                        <button
                          id="btn-copy-account"
                          onClick={handleCopy}
                          className="flex items-center gap-1 bg-white hover:bg-neutral-100 border border-secondary/20 text-primary font-sans font-bold text-xs px-3 py-2 rounded-lg transition-colors shadow-xs"
                        >
                          {copied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-green-600" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-secondary" />
                              Copy No.
                            </>
                          )}
                        </button>
                      </div>

                      <div className="border-t border-dark/5 pt-3">
                        <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">
                          Account Name
                        </span>
                        <span className="font-serif text-sm font-bold text-dark">
                          {BANK_DETAILS.accountName}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-dark/5 pt-3">
                        <div>
                          <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">
                            Branch
                          </span>
                          <span className="font-sans text-xs font-semibold text-dark">
                            {BANK_DETAILS.branch}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">
                            Sorting Code
                          </span>
                          <span className="font-sans text-xs font-bold text-dark">
                            {BANK_DETAILS.sortingCode}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 items-start bg-secondary/10 p-4 rounded-xl text-xs text-primary font-sans leading-relaxed">
                      <HelpCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <p>
                        Please write the purpose in the narrative transfer description field during transfer, e.g. <em>"TITHE"</em>, <em>"OFFERING"</em>, or <em>"MISSION SEED"</em>.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="pledge-content"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {!pledged ? (
                      <form onSubmit={handlePledgeSubmit} className="space-y-4">
                        <div className="text-center sm:text-left mb-4">
                          <h4 className="font-serif text-lg font-bold text-primary mb-1">
                            Submit Spiritual Faith-Pledge
                          </h4>
                          <p className="text-xs text-light font-sans">
                            Let us know of your seed commit or ongoing project offerings goals.
                          </p>
                        </div>

                        <div>
                          <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 field-label">Your Name</label>
                          <input
                            type="text"
                            required
                            value={pledgeData.name}
                            onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })}
                            className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans"
                            placeholder="e.g. Bro. Emmanuel"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 field-label font-sans">Offering Category</label>
                            <select
                              value={pledgeData.purpose}
                              onChange={(e) => setPledgeData({ ...pledgeData, purpose: e.target.value })}
                              className="w-full bg-accent border border-secondary/15 rounded-xl px-2 py-3 text-sm focus:outline-none focus:border-secondary font-sans font-medium"
                            >
                              <option value="Tithe">Tithe</option>
                              <option value="Special Sanctuary Seed">Sanctuary Project</option>
                              <option value="Mission Contribution">Mission Support</option>
                              <option value="Thanksgiving Seed">Thanksgiving Seed</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs uppercase font-sans font-bold tracking-wider text-primary mb-1.5 field-label font-sans">Target Amount (NGN)</label>
                            <input
                              type="number"
                              required
                              value={pledgeData.amount}
                              onChange={(e) => setPledgeData({ ...pledgeData, amount: e.target.value })}
                              className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans"
                              placeholder="e.g. 50000"
                            />
                          </div>
                        </div>

                        <p className="text-[11px] text-light font-sans leading-relaxed">
                          "Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver." — 2 Corinthians 9:7
                        </p>

                        <button
                          type="submit"
                          className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 rounded-xl transition-all shadow-md mt-4 flex items-center justify-center gap-2"
                        >
                          <Coins className="w-4 h-4 text-secondary" />
                          Log Spiritual Pledge
                        </button>
                      </form>
                    ) : (
                      <div className="text-center py-8">
                        <div className="w-16 h-16 bg-yellow-50 text-secondary border border-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                          <Check className="w-8 h-8" />
                        </div>
                        
                        <h4 className="font-serif text-2xl font-bold text-primary mb-2">
                          Pledge Recorded!
                        </h4>
                        
                        <p className="text-sm font-sans text-light mb-6">
                          Thank you, <strong className="text-dark">{pledgeData.name}</strong>! We have logged your pledge of <strong className="text-primary font-mono">₦{Number(pledgeData.amount).toLocaleString()} NGN</strong> for <strong>{pledgeData.purpose}</strong>. May God multiply your seeds as you plant into our Ogbomoso work!
                        </p>

                        <button
                          onClick={() => setPledged(false)}
                          className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-sm px-6 py-2.5 rounded-lg"
                        >
                          Submit Another Pledge
                        </button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
