import React, { useState } from 'react';
import { CATEGORIES } from '../data/products';
import { ArrowUpRight, ChevronDown } from 'lucide-react';

export default function CategoryGrid({ onSelectCategory, activeCategory }) {
  const [showAll, setShowAll] = useState(false);

  const displayedCategories = showAll ? CATEGORIES : CATEGORIES.slice(0, 8);

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-neutral-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header (BlueStone Italic Serif Header) */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <h2 className="font-playfair italic text-3xl sm:text-4xl font-normal text-neutral-900 tracking-wide">
            Shop By Category
          </h2>
          <div className="w-12 h-0.5 bg-rose-500 mx-auto mt-2"></div>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2">
            Explore 16 handcrafted categories in 100% BIS Hallmarked Gold & Certified Diamonds
          </p>
        </div>

        {/* Categories Grid - Apple Soft Modern Architecture */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-3 sm:gap-4">
          {displayedCategories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group cursor-pointer bg-white border transition-all duration-300 overflow-hidden relative flex flex-col justify-between rounded-2xl ${
                  isSelected 
                    ? 'border-rose-500 shadow-lg ring-2 ring-rose-300 scale-102' 
                    : 'border-neutral-200/90 hover:border-rose-300 hover:shadow-xl hover:-translate-y-1.5'
                }`}
                style={{ 
                  height: '240px'
                }}
              >
                {/* Image Container with Zoom effect */}
                <div className="relative w-full h-34 overflow-hidden bg-neutral-100 rounded-t-2xl">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Top Tag Pill */}
                  <span 
                    className="absolute top-2 left-2 text-[9.5px] font-bold px-2 py-0.5 bg-neutral-950/80 text-white backdrop-blur-md rounded-full"
                  >
                    {cat.count}
                  </span>
                </div>

                {/* Card Content Bottom */}
                <div className="p-2.5 bg-white flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-playfair font-bold text-xs sm:text-sm text-neutral-900 group-hover:text-rose-600 transition-colors line-clamp-1">
                      {cat.name}
                    </h3>
                    <p className="text-[10.5px] text-neutral-500 line-clamp-1 mt-0.5">
                      {cat.tag}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1.5 border-t border-neutral-100 text-[10.5px] font-semibold text-rose-600">
                    <span>Explore</span>
                    <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Categories Toggle Pill Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-neutral-100 hover:bg-neutral-200/80 text-neutral-800 text-xs font-bold rounded-full transition-all cursor-pointer border border-neutral-300 shadow-xs"
          >
            <span>{showAll ? 'Show Top Categories' : `View All 16 Categories (Chains, Mangalsutras, Kadas, etc.)`}</span>
            <ChevronDown size={14} className={`transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>
    </section>
  );
}
