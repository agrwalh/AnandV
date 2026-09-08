import React from 'react';
import { ShieldCheck, Gem, Truck, RotateCcw, Award, CheckCircle2 } from 'lucide-react';
import { TRUST_PILLARS } from '../data/products';

export default function TrustBadges() {
  const icons = [
    <Gem size={28} className="text-rose-600" />,
    <Award size={28} className="text-amber-600" />,
    <Truck size={28} className="text-rose-600" />,
    <RotateCcw size={28} className="text-blue-600" />
  ];

  return (
    <section className="py-12 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block mb-1">
            THE ANAND V ASSURANCE
          </span>
          <h2 className="font-playfair text-2xl font-bold text-neutral-900">
            Why Discerning Clients Choose Anand V Jewellers
          </h2>
        </div>

        {/* 4 Pillars Grid - Apple Soft Modern Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TRUST_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="p-6 border border-neutral-200/90 bg-neutral-50/50 hover:bg-white hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-2xl hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center bg-white border border-rose-100 mb-4 rounded-2xl shadow-sm">
                  {icons[idx]}
                </div>
                <h3 className="font-playfair font-bold text-sm text-neutral-900 mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                  {pillar.subtitle}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                <CheckCircle2 size={13} />
                <span>100% Guaranteed</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certification Logos Strip */}
        <div className="mt-8 p-5 bg-neutral-50 border border-neutral-200 flex flex-wrap items-center justify-around gap-6 text-xs text-neutral-600 font-semibold text-center rounded-2xl shadow-xs">
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-neutral-900 font-bold tracking-widest text-sm">GIA</span>
            <span className="text-[11px] text-neutral-500">Gemological Institute of America</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-neutral-900 font-bold tracking-widest text-sm">IGI</span>
            <span className="text-[11px] text-neutral-500">International Gemological Institute</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-rose-600 font-bold tracking-widest text-sm">BIS 916</span>
            <span className="text-[11px] text-neutral-500">Government Hallmark with HUID</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-cinzel text-neutral-900 font-bold tracking-widest text-sm">SGL</span>
            <span className="text-[11px] text-neutral-500">Solitaire Gemological Labs</span>
          </div>
        </div>

      </div>
    </section>
  );
}
