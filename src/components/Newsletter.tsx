import React, { useState } from 'react';
import { Mail, Send, CheckCircle, Sparkles, BookOpen } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section 
      id="newsletter-pane-section" 
      className="bg-accent py-16 md:py-20 relative overflow-hidden"
    >
      {/* Decorative floral or wave elements */}
      <div className="absolute top-1/2 left-[-5%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/2 right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <div className="bg-white rounded-[2rem] border border-secondary/10 shadow-xl p-8 sm:p-12 md:p-16 max-w-4xl mx-auto relative overflow-hidden">
          
          {/* Subtle gold ribbon tag */}
          <div className="absolute top-0 right-12 w-24 h-1.5 bg-secondary rounded-b-md" />

          {!subscribed ? (
            <div className="max-w-2xl mx-auto">
              {/* Icon badge */}
              <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-secondary mx-auto mb-6 border border-secondary/20">
                <Mail className="w-5 h-5 text-secondary" />
              </div>

              {/* Headings */}
              <span className="text-secondary uppercase tracking-[0.2em] font-sans font-bold text-xs block mb-2">
                Praise Chapel Weekly Devotional
              </span>
              <h2 id="newsletter-title" className="text-2xl sm:text-3xl font-serif text-primary font-bold tracking-tight mb-4">
                Stay Tethered to the Spirit
              </h2>
              <p className="text-sm text-light font-sans max-w-lg mx-auto mb-8">
                Subscribe to receive our pastor's weekly scripture studies, regional Ogbomoso missionary updates, and alerts for upcoming glory programs.
              </p>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch justify-center gap-3 max-w-md mx-auto">
                <div className="relative flex-1">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-light/80">
                    <Mail className="w-4 h-4 text-secondary/70" />
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-accent border border-secondary/15 rounded-xl pl-11 pr-4 py-4 text-sm focus:outline-none focus:border-secondary font-sans leading-none text-dark"
                    placeholder="Enter your active email..."
                  />
                </div>
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-sm tracking-wide py-4 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 transform hover:translate-y-[-0.5px]"
                >
                  <Send className="w-4 h-4 text-secondary" />
                  Stay Connected
                </button>
              </form>

              <p className="text-[11px] text-light/80 font-sans mt-4">
                We protect your inbox. Unsubscribe securely with one click at any time.
              </p>
            </div>
          ) : (
            <div className="max-w-md mx-auto py-4 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              
              <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                Thank You for Subscribing!
              </h3>
              
              <p className="text-xs text-secondary font-sans font-bold tracking-widest uppercase mb-4">
                Faith Letters & Devotionals
              </p>

              <p className="text-sm font-sans text-light mb-6">
                You are now linked to our weekly digest. Watch your email inbox this Friday for Rev. Dr. J. O. Ogunyode-Agbaosi's weekend sermon study guide!
              </p>

              <button
                onClick={() => setSubscribed(false)}
                className="bg-primary hover:bg-primary-dark text-white font-sans font-bold text-xs uppercase px-6 py-2.5 rounded-lg tracking-wider"
              >
                Done
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
