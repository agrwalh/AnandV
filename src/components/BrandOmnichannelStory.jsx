import React from 'react';
import { Smartphone, Sparkles, RefreshCw, ShieldCheck, Truck, RotateCcw, Award, CheckCircle2, ChevronRight, Apple } from 'lucide-react';

export default function BrandOmnichannelStory({ onOpenScheme, onOpenTryAtHome, onSelectCategory }) {
  return (
    <section className="py-16 bg-white border-b border-neutral-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Feature Banner: Omnichannel & App */}
        <div className="bg-gradient-to-r from-[#061d33] via-[#0b2b4a] to-[#061d33] text-white rounded-3xl p-8 sm:p-12 mb-14 shadow-2xl relative overflow-hidden border border-neutral-700/50">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold rounded-full">
                <Sparkles size={13} />
                <span>A STELLAR OMNICHANNEL PRESENCE</span>
              </div>

              <h2 className="font-playfair text-2xl sm:text-4xl font-bold leading-tight">
                Anand V Jewellery Boutique — Seamless Online & In-Store Experience
              </h2>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                By seamlessly integrating digital innovation with 360+ premier high jewellery retail lounges across India, Anand V Jewellers transforms how you discover precious creations. Explore online with 4K clarity, book a free Doorstep Try-at-Home, or walk into your nearest flagship lounge.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={onOpenTryAtHome}
                  className="btn-stripe-primary py-3 px-6 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg cursor-pointer"
                >
                  Book Free Doorstep Trial
                </button>

                <button
                  onClick={onOpenScheme}
                  className="py-3 px-6 text-xs font-bold uppercase tracking-wider rounded-full bg-white/10 hover:bg-white/20 border border-white/30 text-white transition-all cursor-pointer"
                >
                  Explore 10+1 Gold Scheme
                </button>
              </div>
            </div>

            {/* Right: Download App Showcase */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center flex flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-2xl bg-rose-500/30 border border-rose-400/50 flex items-center justify-center text-rose-300 mb-3">
                <Smartphone size={26} />
              </div>

              <h3 className="font-playfair font-bold text-lg text-white">
                Download Anand V App
              </h3>
              
              <p className="text-xs text-neutral-300 mt-1 mb-4">
                Shining new app, made just for you! It's Free, Easy & Smart.
              </p>

              <div className="w-full space-y-2">
                <a
                  href="#download"
                  onClick={(e) => { e.preventDefault(); alert("Anand V App is available on iOS App Store & Android Google Play Store!"); }}
                  className="w-full py-2.5 px-4 bg-white text-neutral-900 hover:bg-neutral-100 rounded-full font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <Apple size={15} />
                  <span>Download on App Store</span>
                </a>
                <a
                  href="#download"
                  onClick={(e) => { e.preventDefault(); alert("Anand V App is available on iOS App Store & Android Google Play Store!"); }}
                  className="w-full py-2.5 px-4 bg-neutral-900/80 hover:bg-neutral-900 border border-neutral-600 text-white rounded-full font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Get it on Google Play</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Value Proposition Columns (Exact User Requested Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Redefining Jewellery Shopping */}
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200/90 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
                <RefreshCw size={20} />
              </div>
              
              <h3 className="font-playfair font-bold text-lg text-neutral-900 mb-2">
                Redefining the Shopping Experience
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Dedicated customer delight concierge ensures every question is answered. Enjoy our <strong>Big Gold Upgrade</strong> enabling you to get an instant <strong>1% benefit over current market gold rate</strong> on all purities, free transit insured shipping, and a hassle-free 30-Day Free Returns policy.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-bold text-rose-600">
              <CheckCircle2 size={14} />
              <span>1% Instant Gold Upgrade Benefit</span>
            </div>
          </div>

          {/* 2. 7000+ Certified Designs */}
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200/90 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
                <Award size={20} />
              </div>
              
              <h3 className="font-playfair font-bold text-lg text-neutral-900 mb-2">
                7000+ Certified Designs
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Certified by prestigious authorities including <strong>BIS Hallmark</strong>, <strong>IGI</strong>, <strong>GSI</strong>, and <strong>GIA</strong> to guarantee authenticity and quality. Over 7,000+ contemporary creations across 100+ curated collections crafted to suit every mood, moment, and milestone.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-bold text-rose-600">
              <ShieldCheck size={14} />
              <span>GIA, IGI, BIS Hallmark Certified</span>
            </div>
          </div>

          {/* 3. Lifetime Assurance & Confidence */}
          <div className="p-6 bg-neutral-50 rounded-2xl border border-neutral-200/90 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-50 border border-rose-200 text-rose-600 flex items-center justify-center mb-4">
                <RotateCcw size={20} />
              </div>
              
              <h3 className="font-playfair font-bold text-lg text-neutral-900 mb-2">
                Lifetime Exchange & Buyback
              </h3>

              <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                Shop with complete peace of mind knowing your precious investment lasts forever. 100% transparent buyback values with zero deduction on gold weight, plus free nationwide door-to-door insured collection.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-2 text-xs font-bold text-rose-600">
              <CheckCircle2 size={14} />
              <span>100% Diamond Exchange Value</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
