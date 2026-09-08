import React from 'react';
import { Sparkles, Gem, ArrowRight } from 'lucide-react';

const MATERIALS = [
  {
    name: "Rose Gold",
    tag: "Blush 18K",
    color: "#fbcfe8",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=400&q=80",
    category: "rings"
  },
  {
    name: "Certified Diamond",
    tag: "GIA / IGI VVS",
    color: "#e0f2fe",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=400&q=80",
    category: "solitaires"
  },
  {
    name: "22K Plain Gold",
    tag: "BIS 916 Hallmark",
    color: "#fef3c7",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80",
    category: "bangles"
  },
  {
    name: "Gemstone & Polki",
    tag: "Emeralds & Rubies",
    color: "#dcfce7",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=400&q=80",
    category: "necklaces"
  },
  {
    name: "South Sea Pearl",
    tag: "Natural Lustre",
    color: "#f3e8ff",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80",
    category: "earrings"
  },
  {
    name: "Pure Platinum",
    tag: "950 PT Certified",
    color: "#f1f5f9",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=400&q=80",
    category: "mens"
  }
];

export default function ShopByMaterial({ onSelectCategory }) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="font-playfair italic text-3xl sm:text-4xl text-neutral-900 tracking-wide">
            Shop By Material & Karat
          </h2>
          <div className="w-12 h-0.5 bg-rose-500 mx-auto mt-2"></div>
          <p className="text-xs sm:text-sm text-neutral-500 font-medium mt-2">
            Select your preferred precious metal and gemstone aesthetic
          </p>
        </div>

        {/* 6 Circular / Soft Rounded Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {MATERIALS.map((m) => (
            <div
              key={m.name}
              onClick={() => onSelectCategory(m.category)}
              className="group cursor-pointer p-4 bg-white border border-neutral-200/90 rounded-2xl text-center shadow-sm hover:shadow-xl hover:border-rose-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center justify-between"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-rose-100/80 shadow-md group-hover:scale-105 transition-transform">
                <img
                  src={m.image}
                  alt={m.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="mt-3">
                <h3 className="font-playfair font-bold text-xs sm:text-sm text-neutral-900 group-hover:text-rose-600 transition-colors">
                  {m.name}
                </h3>
                <span className="text-[10px] font-semibold text-neutral-400 block mt-0.5">
                  {m.tag}
                </span>
              </div>

              <span className="mt-2 text-[10px] font-bold text-rose-600 flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View</span>
                <ArrowRight size={10} />
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
