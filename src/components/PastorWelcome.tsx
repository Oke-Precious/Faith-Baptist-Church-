import React from 'react';
import { Quote, ArrowRight, BookOpen } from 'lucide-react';
import { PASTOR_NAME, PASTOR_SHORT_NAME } from '../churchData';

interface PastorWelcomeProps {
  onLearnMore: () => void;
}

export default function PastorWelcome({ onLearnMore }: PastorWelcomeProps) {
  return (
    <section 
      id="pastor-welcome-section" 
      className="bg-accent py-20 md:py-28 relative overflow-hidden"
    >
      {/* Decorative floral/geometrical background cross shadow */}
      <div className="absolute top-1/2 left-5 opacity-[0.02] transform -translate-y-1/2 pointer-events-none select-none">
        <svg className="w-[300px] h-[300px] text-primary stroke-current stroke-1 fill-none" viewBox="0 0 24 24">
          <path d="M12 2v20M7 8h10" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Pastor Image Frame Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm w-full">
              {/* Back Gold Border shadow box */}
              <div className="absolute inset-0 bg-secondary rounded-2xl transform translate-x-3 translate-y-3 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5 duration-300" />
              {/* Image Border frame */}
              <div className="relative overflow-hidden rounded-2xl border-4 border-white shadow-2xl bg-white">
                <img 
                  src="/src/assets/images/regenerated_image_1780299660288.jpg" 
                  alt={PASTOR_NAME} 
                  className="w-full h-[400px] lg:h-[430px] object-cover object-top transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-black/10 p-6 text-white text-center md:text-left">
                  <span className="text-secondary text-xs uppercase font-sans font-black tracking-widest block mb-1">
                    Under Shepherd
                  </span>
                  <h4 className="font-serif text-lg md:text-xl font-bold">
                    {PASTOR_SHORT_NAME}
                  </h4>
                  <p className="text-white/70 text-xs font-sans mt-0.5">
                    Lead Pastor, Faith Baptist Church Praise Chapel Ogbomoso
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Welcome Message Copy Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <div className="text-secondary font-sans font-bold text-xs uppercase tracking-[0.25em] mb-3 flex items-center justify-center lg:justify-start gap-2">
              <span className="h-[2px] w-8 bg-secondary" />
              Living Word, Loving Family
            </div>
            
            <h2 id="pastor-welcome-heading" className="text-3xl sm:text-4xl font-serif text-primary font-bold tracking-tight mb-8 leading-tight">
              A Warm Welcome from Our Under Shepherd
            </h2>

            {/* Blockquote Quote */}
            <div className="relative mb-8 bg-white/50 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-secondary/15 shadow-sm text-left">
              <Quote className="absolute top-4 right-4 text-secondary/15 w-16 h-16 pointer-events-none" />
              
              <p className="font-serif italic text-primary text-lg sm:text-xl leading-relaxed mb-6 scripture-quote">
                "Welcome to Faith Baptist Church Praise Chapel — a place where you belong. We are a spiritual household built entirely on the sovereignty of God's Word, devoted to strengthening families, raising champions of faith, and spreading the light of the gospel from Oke-Owode down to the ends of the earth."
              </p>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-[1px] bg-secondary" />
                <div>
                  <h5 className="font-serif text-sm font-bold text-primary">
                    {PASTOR_NAME}
                  </h5>
                  <p className="text-xs text-light font-sans">
                    Pastor-in-Charge, Ph.D. in Theology
                  </p>
                </div>
              </div>
            </div>

            {/* Pastor CTA Navigation */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                id="cta-read-pastor-message"
                onClick={onLearnMore}
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white font-sans font-bold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 transform hover:translate-x-1"
              >
                <BookOpen className="w-4 h-4 text-secondary" />
                Read Pastor's Full Profile
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-xs text-light font-sans text-center lg:text-left">
                Join our next service online or in-person at Oke-Owode, Ogbomoso.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
