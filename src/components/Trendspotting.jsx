import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const TRENDS = [
  {
    id: 1,
    title: "Layered Necklaces",
    subtitle: "Elevate your style with chic cascading layered necklaces for a trendy everyday look.",
    tag: "TRENDING NOW",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80",
    linkText: "Shop Layered",
    category: "necklaces"
  },
  {
    id: 2,
    title: "Coveted Solitaire Styles",
    subtitle: "A curated selection of Anand V's most coveted brilliant solitaire masterworks.",
    tag: "MOST POPULAR",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80",
    linkText: "Explore Solitaires",
    category: "rings"
  },
  {
    id: 3,
    title: "The Anand V Man",
    subtitle: "Shop the perfect bold kadas, signet diamond rings & heavy chains for his distinct style.",
    tag: "FOR HIM",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=800&q=80",
    linkText: "Shop Men's",
    category: "mens"
  },
  {
    id: 4,
    title: "Shoulder Dusters & Sui Dhaga",
    subtitle: "Graceful elongated diamond drop earrings designed to sway with every movement.",
    tag: "PARTY EDIT",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80",
    linkText: "Shop Dusters",
    category: "earrings"
  }
];

export default function Trendspotting({ onSelectCategory }) {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-50 border border-rose-200 text-rose-600 text-xs font-bold tracking-wider mb-2 rounded-full">
            <Sparkles size={13} />
            <span>BLUESTONE CURATION</span>
          </div>
          <h2 className="font-playfair italic text-3xl sm:text-4xl text-neutral-900 tracking-wide">
            Trendspotting
          </h2>
          <div className="w-12 h-0.5 bg-rose-500 mx-auto mt-2"></div>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2">
            The newest silhouettes and jewelry fashion moments defining fine couture
          </p>
        </div>

        {/* 4 Large Trend Cards - Apple Soft Modern 2xl */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRENDS.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item.category)}
              className="group cursor-pointer bg-white border border-neutral-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative w-full pt-[95%] overflow-hidden bg-neutral-100 rounded-t-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                <span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-0.5 bg-white/90 text-neutral-900 backdrop-blur-md rounded-full shadow-sm">
                  {item.tag}
                </span>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-playfair font-bold text-base text-neutral-900 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed font-sans line-clamp-2">
                    {item.subtitle}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-rose-600 group-hover:text-rose-700">
                  <span>{item.linkText}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
