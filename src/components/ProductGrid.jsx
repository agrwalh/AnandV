import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { ArrowUpDown, Sparkles, Filter, CheckCircle2 } from 'lucide-react';

const FILTER_TABS = [
  { id: 'all', label: 'All' },
  { id: 'handpicked', label: 'Handpicked for You' },
  { id: 'recommended', label: 'Recommended for you' },
  { id: 'rings', label: 'Rings' },
  { id: 'earrings', label: 'Earrings' },
  { id: 'pendants', label: 'Pendants' },
  { id: 'chains', label: 'Chains' },
  { id: 'necklaces', label: 'Necklaces' },
  { id: 'bangles', label: 'Bangles' },
  { id: 'bracelets', label: 'Bracelets' },
  { id: 'mangalsutra', label: 'Mangalsutra' },
  { id: 'nose-pins', label: 'Nose Pins' },
  { id: 'solitaires', label: 'Solitaires' },
  { id: 'kids', label: "Kids' Jewellery" },
  { id: 'kadas', label: 'Kada' },
  { id: 'mens', label: "Men's Jewellery" },
  { id: 'watch-jewellery', label: 'Watch Accessories' },
  { id: 'anklets', label: 'Anklets' }
];

export default function ProductGrid({ 
  products, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  wishlistIds,
  onOpenTryAtHome,
  onBookVideoCall,
  activeCategory,
  onSelectCategory
}) {
  const [selectedFilter, setSelectedFilter] = useState(activeCategory || 'all');
  const [sortBy, setSortBy] = useState('featured');

  // Filter logic
  let filtered = [...products];

  const currentTab = activeCategory !== 'all' ? activeCategory : selectedFilter;

  if (currentTab === 'handpicked') {
    filtered = filtered.filter(p => p.discountOffer || p.rating >= 4.9);
  } else if (currentTab === 'recommended') {
    filtered = filtered.filter(p => p.basePrice >= 40000 && p.basePrice <= 120000);
  } else if (currentTab !== 'all') {
    filtered = filtered.filter(p => p.category === currentTab);
  }

  // Sort logic
  if (sortBy === 'priceAsc') {
    filtered.sort((a, b) => a.basePrice - b.basePrice);
  } else if (sortBy === 'priceDesc') {
    filtered.sort((a, b) => b.basePrice - a.basePrice);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section className="py-12 sm:py-16 bg-neutral-50/70 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div>
            <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
              <Sparkles size={13} />
              <span>THE ANAND V LUXURY CATALOG</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-neutral-900">
              Handcrafted Fine Jewellery & Solitaires
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">
              Showing {filtered.length} masterworks in 100% BIS Hallmarked Gold & Certified Diamonds
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-neutral-500 font-semibold flex items-center gap-1">
              <ArrowUpDown size={14} /> Sort By:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white border border-neutral-300 text-xs font-semibold py-2 px-4 rounded-full focus:outline-none focus:border-rose-500 text-neutral-800 cursor-pointer shadow-xs"
            >
              <option value="featured">Featured Curations</option>
              <option value="priceAsc">Price: Low to High</option>
              <option value="priceDesc">Price: High to Low</option>
              <option value="rating">Customer Highest Rated</option>
            </select>
          </div>
        </div>

        {/* Filter Pills - BlueStone exact filter bar */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-3 mb-6">
          {FILTER_TABS.map(tab => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedFilter(tab.id);
                  if (onSelectCategory) onSelectCategory(tab.id);
                }}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-all rounded-full border cursor-pointer ${
                  isActive
                    ? 'bg-[#061d33] text-white border-[#061d33] shadow-md scale-105'
                    : 'bg-white text-neutral-700 border-neutral-200 hover:border-rose-400 hover:bg-rose-50/50 shadow-xs'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        {filtered.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-neutral-200">
            <p className="text-neutral-500 text-sm">No items found for this selection.</p>
            <button
              onClick={() => {
                setSelectedFilter('all');
                if (onSelectCategory) onSelectCategory('all');
              }}
              className="mt-3 btn-stripe-primary text-xs py-2 px-6 rounded-full"
            >
              Show All Jewellery ({products.length})
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlistIds.includes(product.id)}
                onOpenTryAtHome={onOpenTryAtHome}
                onBookVideoCall={onBookVideoCall}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
