import React, { useState } from 'react';
import { Heart, Star, Eye, ShoppingBag, Sparkles, Home, Check, Video, Tag } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart, 
  onToggleWishlist, 
  isWishlisted,
  onOpenTryAtHome,
  onBookVideoCall
}) {
  const [selectedMetal, setSelectedMetal] = useState('rose');
  const [selectedKarat, setSelectedKarat] = useState(
    product.karatMultiplier && product.karatMultiplier['18K'] 
      ? '18K' 
      : Object.keys(product.karatMultiplier || { '18K': 1 })[0]
  );
  const [imageLoaded, setImageLoaded] = useState(false);

  // Dynamic price based on Karat
  const multiplier = product.karatMultiplier ? (product.karatMultiplier[selectedKarat] || 1.0) : 1.0;
  const currentPrice = Math.round(product.basePrice * multiplier);
  const currentOriginalPrice = Math.round((product.originalPrice || product.basePrice * 1.1) * multiplier);
  const discountPercent = Math.round(((currentOriginalPrice - currentPrice) / currentOriginalPrice) * 100);

  // Get active image for selected metal
  const activeImage = product.metals?.[selectedMetal] || product.metals?.rose || product.metals?.yellow || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80";

  const metalsList = [
    { key: 'yellow', label: 'YG', name: 'Yellow Gold', color: '#e5b94c' },
    { key: 'rose', label: 'RG', name: 'Rose Gold', color: '#e4a199' },
    { key: 'white', label: 'WG', name: 'White Gold', color: '#d9e0e8' }
  ];

  return (
    <div className="jewel-card group flex flex-col justify-between h-full rounded-2xl border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden bg-white">
      
      {/* Card Header Media */}
      <div className="relative w-full pt-[100%] overflow-hidden bg-neutral-50 rounded-t-2xl">
        
        {/* Product Image */}
        <img
          src={activeImage}
          alt={product.title}
          onLoad={() => setImageLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-30'
          }`}
          loading="lazy"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span 
            className="text-[10px] font-extrabold px-2.5 py-0.5 bg-rose-50 text-rose-600 border border-rose-200 shadow-sm rounded-full uppercase tracking-wider"
          >
            {product.tag}
          </span>
          {product.tryAtHome && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenTryAtHome(product);
              }}
              className="inline-flex items-center gap-1 text-[10px] font-bold px-2.5 py-0.5 bg-white/95 text-neutral-800 border border-neutral-200 hover:border-rose-400 hover:text-rose-600 shadow-sm cursor-pointer transition-colors rounded-full"
              title="Book Home Trial for this item"
            >
              <Home size={11} className="text-rose-600" />
              <span>Try at Home</span>
            </button>
          )}
        </div>

        {/* Wishlist Heart Button - Apple Soft Circular */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/95 hover:bg-white text-neutral-600 hover:text-rose-600 shadow-md border border-neutral-100 transition-all cursor-pointer rounded-full hover:scale-110 active:scale-95"
          aria-label="Wishlist"
        >
          <Heart 
            size={15} 
            className={isWishlisted ? 'fill-rose-600 text-rose-600' : ''} 
          />
        </button>

        {/* Quick View Button - Apple Soft Pill */}
        <button
          onClick={() => onQuickView(product, selectedMetal, selectedKarat, currentPrice)}
          className="absolute bottom-3 left-3 right-3 z-10 py-2 px-4 bg-neutral-900/90 hover:bg-neutral-900 text-white text-xs font-semibold flex items-center justify-center gap-1.5 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer rounded-full shadow-lg"
        >
          <Eye size={13} />
          <span>Quick View & Price Breakup</span>
        </button>

      </div>

      {/* Card Info Details */}
      <div className="p-3.5 flex flex-col justify-between flex-1 bg-white">
        <div>
          
          {/* BlueStone Special Offer Badge (Making Charges Discount) */}
          {product.discountOffer ? (
            <div className="mb-2 inline-flex items-center gap-1 text-[11px] font-extrabold text-rose-700 bg-rose-50 border border-rose-200/90 px-2.5 py-0.5 rounded-full">
              <Tag size={11} />
              <span>{product.discountOffer}</span>
            </div>
          ) : (
            <div className="mb-2 inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
              <Sparkles size={11} />
              <span>100% Certified Diamond & Gold</span>
            </div>
          )}

          {/* Title */}
          <h3 
            onClick={() => onQuickView(product, selectedMetal, selectedKarat, currentPrice)}
            className="font-playfair font-bold text-sm text-neutral-900 hover:text-rose-600 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.title}
          </h3>

          <p className="text-[11.5px] text-neutral-500 line-clamp-1 mt-0.5 font-sans">
            {product.subtitle}
          </p>

          {/* Interactive Metal & Karat Toggles */}
          <div className="mt-2.5 pt-2 border-t border-neutral-100 flex items-center justify-between gap-2">
            
            {/* Metal Color Selector (YG, RG, WG) */}
            <div className="flex items-center gap-1.5">
              {metalsList.map((m) => (
                <button
                  key={m.key}
                  type="button"
                  onClick={() => setSelectedMetal(m.key)}
                  className={`w-5 h-5 flex items-center justify-center rounded-full border transition-all cursor-pointer shadow-xs ${
                    selectedMetal === m.key 
                      ? 'border-neutral-900 ring-2 ring-rose-400 scale-110' 
                      : 'border-neutral-300 hover:border-neutral-500 hover:scale-105'
                  }`}
                  style={{ 
                    backgroundColor: m.color
                  }}
                  title={m.name}
                  aria-label={m.name}
                >
                  {selectedMetal === m.key && (
                    <Check size={10} className={m.key === 'white' ? 'text-neutral-800' : 'text-white'} />
                  )}
                </button>
              ))}
              <span className="text-[10px] text-neutral-400 font-semibold uppercase ml-1">
                {selectedMetal.toUpperCase()}
              </span>
            </div>

            {/* Karat Selector (14K, 18K, 22K) */}
            {product.karatMultiplier && (
              <div className="flex items-center gap-1">
                {Object.keys(product.karatMultiplier).map((k) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => setSelectedKarat(k)}
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full border transition-all cursor-pointer ${
                      selectedKarat === k
                        ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                        : 'bg-neutral-50 text-neutral-600 border-neutral-200 hover:border-neutral-400 hover:bg-white'
                    }`}
                  >
                    {k}
                  </button>
                ))}
              </div>
            )}

          </div>

          {/* Price Section */}
          <div className="mt-2.5 flex items-baseline gap-2">
            <span className="text-lg font-bold text-neutral-900 font-sans tracking-tight">
              ₹{currentPrice.toLocaleString('en-IN')}
            </span>
            {currentOriginalPrice > currentPrice && (
              <span className="text-xs text-neutral-400 line-through">
                ₹{currentOriginalPrice.toLocaleString('en-IN')}
              </span>
            )}
          </div>

          <div className="text-[11px] text-neutral-500 flex items-center gap-2 mt-0.5">
            <span>{product.weightGm}g Gold</span>
            <span>•</span>
            <span>{product.diamondWeightCt > 0 ? `${product.diamondWeightCt}ct Dia` : 'Pure Gold'}</span>
          </div>
        </div>

        {/* Card Action Buttons (Book Video Call + Add to Bag) */}
        <div className="mt-3.5 pt-2 border-t border-neutral-100 flex flex-col gap-2">
          
          {/* BlueStone Signature "Book Video Call" Button */}
          <button
            onClick={() => onBookVideoCall(product)}
            className="w-full py-2 px-3 text-[11px] font-bold text-[#061d33] bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-300 rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Video size={13} className="text-rose-600" />
            <span>Book Video Call</span>
          </button>

          {/* Add to Bag Primary Pill Button */}
          <button
            onClick={() => onAddToCart({
              ...product,
              selectedMetal,
              selectedKarat,
              finalPrice: currentPrice,
              cartItemId: `${product.id}-${selectedMetal}-${selectedKarat}`
            })}
            className="btn-stripe-primary w-full py-2.5 text-xs flex items-center justify-center gap-1.5 cursor-pointer shadow-md rounded-full"
          >
            <ShoppingBag size={14} />
            <span>Add to Bag</span>
          </button>
        </div>

      </div>

    </div>
  );
}
