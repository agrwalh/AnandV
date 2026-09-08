import React from 'react';
import { SlidersHorizontal, LayoutGrid } from 'lucide-react';

const RAIL_ITEMS = [
  {
    id: 'filters',
    label: 'Filters',
    isIcon: true,
    icon: SlidersHorizontal
  },
  {
    id: 'all',
    label: 'All',
    isIcon: true,
    icon: LayoutGrid
  },
  {
    id: 'rings',
    label: 'Rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'earrings',
    label: 'Earrings',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'pendants',
    label: 'Pendants',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'chains',
    label: 'Chains',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'necklaces',
    label: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'bangles',
    label: 'Bangles',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'bracelets',
    label: 'Bracelets',
    image: 'https://images.unsplash.com/photo-1611591475847-5120a169b910?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'mangalsutra',
    label: 'Mangalsutra',
    image: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'nose-pins',
    label: 'Nose Pins',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'solitaires',
    label: 'Solitaires',
    image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'kids',
    label: "Kids' Jewellery",
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'kadas',
    label: 'Kada',
    image: 'https://images.unsplash.com/photo-1611591475152-4770e28e678e?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'mens',
    label: "Men's Jewellery",
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'watch-jewellery',
    label: 'Watch Accessories',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80'
  },
  {
    id: 'anklets',
    label: 'Anklets',
    image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=300&q=80'
  }
];

export default function RecommendedCategoryRail({ activeCategory, onSelectCategory }) {
  return (
    <section className="py-8 bg-white border-b border-neutral-200/80 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Exact BlueStone Header */}
        <h2 className="font-playfair text-2xl sm:text-3xl text-center text-neutral-900 mb-6 font-normal tracking-wide">
          Recommended for you
        </h2>

        {/* Circular Stories Horizontal Rail */}
        <div className="flex items-start justify-start md:justify-center gap-4 sm:gap-6 overflow-x-auto hide-scrollbar py-2 px-1">
          {RAIL_ITEMS.map((item) => {
            const isActive = activeCategory === item.id || (item.id === 'all' && activeCategory === 'all');

            return (
              <button
                key={item.id}
                onClick={() => {
                  if (item.id === 'filters') {
                    const catalogEl = document.getElementById('catalog-section');
                    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    onSelectCategory(item.id);
                    const catalogEl = document.getElementById('catalog-section');
                    if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group flex flex-col items-center gap-2 cursor-pointer shrink-0 transition-transform active:scale-95 focus:outline-none"
              >
                {/* Circle Container */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center p-0.5 transition-all duration-300 ${
                    isActive
                      ? 'ring-2 ring-rose-500 ring-offset-2 scale-105 shadow-md'
                      : 'hover:ring-2 hover:ring-rose-300 hover:ring-offset-1 hover:scale-105'
                  }`}
                >
                  {item.isIcon ? (
                    <div className="w-full h-full rounded-full bg-neutral-50 border border-neutral-200 flex items-center justify-center text-neutral-700 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors shadow-xs">
                      {item.id === 'all' ? (
                        <div className="grid grid-cols-2 gap-1 p-2.5">
                          <span className="w-2 h-2 rounded-[2px] bg-rose-500" />
                          <span className="w-2 h-2 rounded-[2px] bg-amber-500" />
                          <span className="w-2 h-2 rounded-[2px] bg-emerald-500" />
                          <span className="w-2 h-2 rounded-[2px] bg-blue-500" />
                        </div>
                      ) : (
                        <item.icon size={20} className="text-neutral-600 group-hover:text-rose-600" />
                      )}
                    </div>
                  ) : (
                    <div className="w-full h-full rounded-full overflow-hidden border border-neutral-200 shadow-xs bg-neutral-100">
                      <img
                        src={item.image}
                        alt={item.label}
                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[11px] sm:text-xs text-center max-w-[72px] leading-tight transition-colors ${
                    isActive
                      ? 'font-bold text-neutral-900'
                      : 'font-normal text-neutral-600 group-hover:text-neutral-900'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}
