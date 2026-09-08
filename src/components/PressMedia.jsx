import React from 'react';
import { Newspaper, ExternalLink, Award } from 'lucide-react';

const NEWS_ARTICLES = [
  {
    publisher: "THE ECONOMIC TIMES",
    title: "Anand V Jewellers pioneers next-gen omnichannel luxury with Apple-grade digital experience.",
    date: "February 2026",
    tag: "BRAND EQUITY"
  },
  {
    publisher: "VOGUE INDIA",
    title: "The Celestia Solitaire: Why contemporary brides are choosing certified rose gold couture.",
    date: "January 2026",
    tag: "HAUTE COUTURE"
  },
  {
    publisher: "ELLE LUXURY",
    title: "Fine jewellery goes effortless: Everyday lightweight diamonds crafted for the global Indian woman.",
    date: "December 2025",
    tag: "EDITORIAL"
  },
  {
    publisher: "INDIAN RETAILER",
    title: "How Anand V's 10+1 Swarna Savings Plan is revolutionizing smart jewellery acquisitions.",
    date: "November 2025",
    tag: "INNOVATION"
  }
];

export default function PressMedia() {
  return (
    <section className="py-14 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
              <Newspaper size={13} />
              <span>EDITORIAL & MEDIA RECOGNITION</span>
            </div>
            <h2 className="font-playfair italic text-3xl font-bold text-neutral-900">
              We’re Making News
            </h2>
          </div>
          <span className="text-xs text-neutral-500 font-medium">
            Featured across leading global fashion & business publications
          </span>
        </div>

        {/* 4 News Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {NEWS_ARTICLES.map((art, idx) => (
            <div
              key={idx}
              className="p-5 bg-neutral-50 border border-neutral-200/90 rounded-2xl hover:bg-white hover:border-rose-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-cinzel text-xs font-bold text-[#061d33] tracking-wider">
                    {art.publisher}
                  </span>
                  <span className="text-[9px] font-extrabold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-200">
                    {art.tag}
                  </span>
                </div>

                <p className="font-playfair italic text-sm text-neutral-800 leading-snug">
                  "{art.title}"
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-400">
                <span>{art.date}</span>
                <span className="text-rose-600 font-semibold flex items-center gap-1 text-[11px] cursor-pointer hover:underline">
                  <span>Read Article</span>
                  <ExternalLink size={11} />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
