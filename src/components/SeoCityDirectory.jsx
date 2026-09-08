import React, { useState } from 'react';
import { ChevronDown, MapPin, Sparkles, Gem } from 'lucide-react';

export default function SeoCityDirectory({ onSelectCategory }) {
  const [collapsed, setCollapsed] = useState(false); // open by default so users see all directory links

  const POPULAR_SEARCHES = [
    "Rings", "Earrings", "Mangalsutra", "Mangalsutra Bracelets", "Bangles", 
    "Bracelets", "Pendants", "Necklaces", "Couple Bands", "Gold Coins", 
    "Chains", "Watch Jewellery", "Nose Pin", "Dailywear Rings", "Dailywear Bracelets"
  ];

  const GOLD_SEARCHES = [
    "Gold Jewellery", "Gold Rings", "Gold Earrings", "Gold Pendants", "Gold Necklaces", 
    "Gold Mangalsutras", "Gold Bangles", "Women Gold Rings", "Men's Gold Earrings", 
    "Gold Chains for Men", "Dailywear Gold Earrings", "Dailywear Gold Bangles"
  ];

  const DIAMOND_SEARCHES = [
    "Diamond Jewellery", "Diamond Rings", "Diamond Earrings", "Diamond Pendants", 
    "Diamond Necklaces", "Diamond Mangalsutras", "Diamond Bangles", "Diamond Bracelets", 
    "Women Diamond Rings", "Men's Diamond Earrings", "Men's Diamond Rings", "Men's Diamond Bracelets"
  ];

  const MENS_COLLECTION = [
    "Men's Jewellery", "Rings for Men", "Earrings for Men", "Men's Kada", "Cufflinks for Men"
  ];

  const WOMENS_COLLECTION = [
    "Jewellery For Women", "Rings for Women", "Earrings for Women", "Bangles for Women", 
    "Pendants for Women", "Bracelets for Women", "Necklaces for Women"
  ];

  const OCCASION_SEARCHES = [
    "Engagement Ring", "Engagement Ring For Women", "Engagement Ring For Men", 
    "Gold Engagement Rings for Women", "Gold Engagement Rings for Men", "Diamond Engagement Rings", 
    "Diamond Engagement Rings for Women", "Jewellery Gifts for Anniversary", "Jewellery Gifts for Wedding"
  ];

  const STORES_NEAR_YOU = [
    "Jewellery Shop in Bangalore", "Jewellery Shop in Mumbai", "Jewellery Shop in Delhi", 
    "Jewellery Shop in Hyderabad", "Jewellery Shop in Chennai", "Jewellery Shop in Gurugram", 
    "Jewellery Shop in Pune", "Jewellery Shop in Navi Mumbai", "Jewellery Shop in Thane", 
    "Jewellery Shop in Noida", "Jewellery Shop in Kolkata", "Jewellery Shop in Ahmedabad"
  ];

  return (
    <div className="bg-[#030d17] border-t border-neutral-800 text-neutral-400 text-xs py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Toggle Button Header */}
        <div 
          className="flex items-center justify-between pb-4 border-b border-neutral-800 cursor-pointer select-none" 
          onClick={() => setCollapsed(!collapsed)}
        >
          <div className="flex items-center gap-2 text-neutral-200">
            <Sparkles size={16} className="text-rose-400" />
            <h3 className="font-playfair font-bold text-sm sm:text-base tracking-wide">
              Anand V Jewellery Stores & Popular Searches Across India
            </h3>
          </div>
          <button className="text-neutral-400 hover:text-white flex items-center gap-1.5 text-xs font-semibold">
            <span>{collapsed ? 'View All Directory Links' : 'Collapse Directory'}</span>
            <ChevronDown size={15} className={`transition-transform duration-300 ${collapsed ? '' : 'rotate-180'}`} />
          </button>
        </div>

        {/* Directory Content */}
        {!collapsed && (
          <div className="pt-6 space-y-6 text-[11.5px] leading-relaxed animate-fade-in">
            
            {/* Stores Near You */}
            <div>
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MapPin size={13} className="text-rose-400" />
                <span>Anand V Jewellery Stores Near You:</span>
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                {STORES_NEAR_YOU.map((store, idx) => (
                  <span key={idx} className="hover:text-rose-400 transition-colors cursor-pointer">
                    {store} {idx < STORES_NEAR_YOU.length - 1 ? '|' : ''}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Searches */}
            <div>
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                Popular Searches:
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                {POPULAR_SEARCHES.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => onSelectCategory('all')} 
                    className="hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    {item} {idx < POPULAR_SEARCHES.length - 1 ? '|' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Searches in Gold Jewellery */}
            <div>
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                Top Searches in Gold Jewellery:
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                {GOLD_SEARCHES.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => onSelectCategory('all')} 
                    className="hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    {item} {idx < GOLD_SEARCHES.length - 1 ? '|' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Top Searches in Diamond Jewellery */}
            <div>
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                Top Searches in Diamond Jewellery:
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                {DIAMOND_SEARCHES.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => onSelectCategory('solitaires')} 
                    className="hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    {item} {idx < DIAMOND_SEARCHES.length - 1 ? '|' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* Two-Column: Men's & Women's */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                  Men's Jewellery Collection:
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                  {MENS_COLLECTION.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => onSelectCategory('mens')} 
                      className="hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      {item} {idx < MENS_COLLECTION.length - 1 ? '|' : ''}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                  Women's Jewellery Collection:
                </h4>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                  {WOMENS_COLLECTION.map((item, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => onSelectCategory('all')} 
                      className="hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      {item} {idx < WOMENS_COLLECTION.length - 1 ? '|' : ''}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Jewellery by Occasion */}
            <div>
              <h4 className="font-bold text-neutral-200 uppercase tracking-wider mb-2">
                Jewellery by Occasion:
              </h4>
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-neutral-400">
                {OCCASION_SEARCHES.map((item, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => onSelectCategory('rings')} 
                    className="hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    {item} {idx < OCCASION_SEARCHES.length - 1 ? '|' : ''}
                  </button>
                ))}
              </div>
            </div>

            {/* 100% Legal & Assurance */}
            <p className="text-[11px] text-neutral-500 border-t border-neutral-800/80 pt-4">
              All diamond jewellery manufactured by Anand V Jewellers Pvt. Ltd. is verified by GIA, IGI, or SGL laboratories. All gold articles are 100% BIS Hallmarked with unique government HUID laser engraving.
            </p>

          </div>
        )}

      </div>
    </div>
  );
}
