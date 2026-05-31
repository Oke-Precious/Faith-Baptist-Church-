import React, { useState } from 'react';
import { CreditCard, Copy, Check, Info, HandHeart, Coins, HeartHandshake, HelpCircle } from 'lucide-react';
import { BANK_DETAILS } from '../churchData';

export default function GivePage() {
  const [copied, setCopied] = useState(false);
  const [pledged, setPledged] = useState(false);
  const [pledgeData, setPledgeData] = useState({ name: '', purpose: 'Tithe', amount: '', frequency: 'One-Time' });

  const handleCopy = () => {
    navigator.clipboard.writeText(BANK_DETAILS.accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePledgeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPledged(true);
  };

  const faqs = [
    { q: "What is a Tithe, and how is it different from an Offering?", a: "A tithe represents exactly 10% of our daily or monthly income, which is structurally returned to God's house as a spiritual covenant. An offering is any cheerful freewill contribution given above the tithe, motivated by gratefulness and project desires." },
    { q: "Can I give if I live outside Ogbomoso, Nigeria?", a: "Yes. Direct bank transfers can be sent to our GTBank account from any local or international bank. If you require custom details like SWIFT codes, please write our administration desk via the Contact tab." },
    { q: "How are praise chapel gifts utilized?", a: "Every seed is treated with sacred reverence. Contributions are apportioned under the oversight of Rev. Dr. J. O. Ogunyode-Agbaosi and the church finance board to manage local sanctuary bills, sponsor rural gospel outreach, and subsidize welfare kits for students and Ogbomoso micro-traders." }
  ];

  return (
    <div id="give-page-wrapper" className="pt-24 md:pt-28">
      
      {/* Banner */}
      <section className="bg-primary text-white py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1438032005730-c779502df39b?auto=format&fit=crop&q=80&w=1200" 
            alt="Giving Hands" 
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
            Tithes, Offerings & Pledges
          </h1>
          <p className="text-secondary tracking-widest uppercase font-sans font-bold text-xs sm:text-sm">
            Sowing seeds of glory into the Kingdom
          </p>
        </div>
      </section>

      {/* Main Sowing Content */}
      <section className="bg-accent py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Direct banking column parameters */}
            <div className="lg:col-span-6 space-y-8">
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block">Bank Transfer Protocol</span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary leading-tight">
                Direct Electronic Bank Transfer
              </h2>
              <p className="text-sm font-sans text-light leading-relaxed">
                We accept bank transfers from all financial institutions across Oyo State, Nigeria and around the globe. This provides a direct, highly secure, and traceable route for your covenants.
              </p>

              {/* Bank Metadata Table */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-secondary/10 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
                
                <div className="space-y-5 relative z-10">
                  <div>
                    <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">Bank Name</span>
                    <span className="font-serif text-lg font-bold text-primary">{BANK_DETAILS.bankName}</span>
                  </div>

                  <div className="flex items-center justify-between border-t border-dark/5 pt-4">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">Account Number</span>
                      <span className="font-mono text-xl font-bold text-primary tracking-wider">{BANK_DETAILS.accountNumber}</span>
                    </div>

                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 bg-accent hover:bg-neutral-200 text-primary border border-secondary/20 px-3.5 py-2 rounded-xl text-xs font-sans font-bold shadow-xs transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-green-600" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-secondary" />
                          Copy Number
                        </>
                      )}
                    </button>
                  </div>

                  <div className="border-t border-dark/5 pt-4">
                    <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">Account Name</span>
                    <span className="font-serif text-sm font-bold text-dark">{BANK_DETAILS.accountName}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-dark/5 pt-4">
                    <div>
                      <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">Branch</span>
                      <span className="font-sans text-xs font-semibold text-dark">{BANK_DETAILS.branch}</span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-sans font-extrabold tracking-widest text-light block mb-1">Sorting Code</span>
                      <span className="font-sans text-xs font-bold text-dark">{BANK_DETAILS.sortingCode}</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Instructions advice */}
              <div className="flex gap-3 bg-secondary/10 p-5 rounded-2xl border border-secondary/25 text-xs text-primary font-sans leading-relaxed">
                <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold mb-1 font-sans text-xs uppercase tracking-wider">Note on Transacting Description:</h4>
                  <p>
                    Please use literal narratives inside your bank app describing the transfer, as this permits automated auditing. Example notes: <strong>"TITHE"</strong>, <strong>"BUILDING PROJECT OFFERING"</strong>, or <strong>"MONTHLY SEED"</strong>.
                  </p>
                </div>
              </div>

            </div>

            {/* Spiritual faith pledge column (right-column) */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm border border-secondary/10">
              {!pledged ? (
                <form onSubmit={handlePledgeSubmit} className="space-y-5 font-sans">
                  <span className="text-secondary font-sans font-bold text-xs uppercase tracking-[0.2em] block">Sowing pledge card</span>
                  <h2 className="font-serif text-2xl font-bold text-primary mb-2">
                    Submit Ongoing Faith-Pledge
                  </h2>
                  <p className="text-xs text-light font-sans mb-4">
                    Set up a mock pledge to help target church structural plans. You grow as you commit.
                  </p>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={pledgeData.name}
                      onChange={(e) => setPledgeData({ ...pledgeData, name: e.target.value })}
                      className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                      placeholder="e.g. Sister Mercy Adeleke"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 font-sans">Pledge Category</label>
                      <select
                        value={pledgeData.purpose}
                        onChange={(e) => setPledgeData({ ...pledgeData, purpose: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-2.5 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark font-medium"
                      >
                        <option value="Tithe Goal">Monthly Tithe commitment</option>
                        <option value="Sanctuary Project Fund">Building Sanctuary Update</option>
                        <option value="Rural Missions Support">Missions & Evangelism</option>
                        <option value="General Benevolence Seed">Benevolence & Charity kit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1 font-sans">Frequency Target</label>
                      <select
                        value={pledgeData.frequency}
                        onChange={(e) => setPledgeData({ ...pledgeData, frequency: e.target.value })}
                        className="w-full bg-accent border border-secondary/15 rounded-xl px-2.5 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark font-medium"
                      >
                        <option value="One-Time">One-Time Offering</option>
                        <option value="Weekly Seed">Weekly Sowing Seed</option>
                        <option value="Monthly seed">Monthly Sowing Seed</option>
                        <option value="Annually Seed">Annual Thanksgiving Seed</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-wider text-primary mb-1">Target Amount (NGN)</label>
                    <input
                      type="number"
                      required
                      value={pledgeData.amount}
                      onChange={(e) => setPledgeData({ ...pledgeData, amount: e.target.value })}
                      className="w-full bg-accent border border-secondary/15 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-secondary font-sans text-dark"
                      placeholder="e.g. 100000"
                    />
                  </div>

                  <div className="flex items-center gap-2 text-xs text-light italic leading-normal pt-2">
                    <HeartHandshake className="w-4 h-4 text-secondary shrink-0" />
                    <p>
                      Your financial pledges are kept strictly confidential. The Lord who sees in secret will reward you openly.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white font-sans font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Coins className="w-4 h-4 text-secondary" />
                    Log Spiritual Pledge Target
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-yellow-50 text-secondary border border-secondary/35 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 font-extrabold" />
                  </div>
                  
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">Pledge Documented!</h3>
                  <p className="text-xs text-secondary-light font-sans font-bold uppercase tracking-wider mb-4">
                    Praise Chapel Oke-Owode Sower
                  </p>

                  <p className="text-sm font-sans text-light mb-6">
                    A big thank you, <strong className="text-dark">{pledgeData.name}</strong>, for your spiritual target commitment of <strong className="text-primary font-mono">₦{Number(pledgeData.amount).toLocaleString()} NGN</strong> ({pledgeData.frequency}) sowed toward <strong>{pledgeData.purpose}</strong>. May God supply all your spiritual needs according to His riches in glory!
                  </p>

                  <button
                    onClick={() => setPledged(false)}
                    className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-2.5 rounded-lg"
                  >
                    Modify Sower Pledge
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Sowing FAQs segment */}
          <div className="space-y-8 pt-10 border-t border-secondary/20 max-w-4xl mx-auto">
            <h3 className="font-serif text-2xl font-bold text-primary text-center">
              Tithing & Offering Questions answered
            </h3>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="bg-white p-6 sm:p-8 rounded-2xl border border-secondary/10 shadow-xs"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-primary/5 text-secondary flex items-center justify-center font-bold text-xs shrink-0 mt-1 uppercase font-sans">
                      Q
                    </span>
                    <div>
                      <h4 className="font-serif text-base font-bold text-primary mb-2">{faq.q}</h4>
                      <p className="text-sm text-light leading-relaxed font-sans">{faq.a}</p>
                    </div>
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
