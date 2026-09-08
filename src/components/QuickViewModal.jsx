import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Gem, 
  Truck, 
  RotateCcw, 
  Star, 
  ShoppingBag, 
  Video, 
  Check, 
  ChevronRight,
  Info
} from 'lucide-react';
import { LIVE_RATES } from '../data/products';

export default function QuickViewModal({ 
  product, 
  initialMetal, 
  initialKarat, 
  onClose, 
  onAddToCart,
  onOpenTryAtHome
}) {
  if (!product) return null;

  const [selectedMetal, setSelectedMetal] = useState(initialMetal || 'rose');
  const [selectedKarat, setSelectedKarat] = useState(initialKarat || '18K');
  const [selectedSize, setSelectedSize] = useState('14 (Standard)');
  const [showPriceBreakup, setShowPriceBreakup] = useState(false);
  const [activeTab, setActiveTab] = useState('details');

  const multiplier = product.karatMultiplier[selectedKarat] || 1.0;
  const currentPrice = Math.round(product.basePrice * multiplier);
  const originalPrice = Math.round(product.originalPrice * multiplier);

  // Price breakup calculations
  const rawGoldValue = Math.round(currentPrice * 0.62);
  const makingCharges = product.makingCharges;
  const diamondValue = product.diamondWeightCt > 0 ? Math.round(currentPrice * 0.28) : 0;
  const gst = Math.round(currentPrice * 0.03);

  const metalsList = [
    { key: 'rose', label: '18K Rose Gold', color: '#e4a199' },
    { key: 'yellow', label: '22K Yellow Gold', color: '#e5b94c' },
    { key: 'white', label: '18K White Gold', color: '#d9e0e8' }
  ];

  const ringSizes = ['10', '12', '14 (Standard)', '16', '18', '20'];
  const activeImage = product.metals[selectedMetal] || product.metals.rose || product.metals.yellow;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Frosted Glass Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Stripe Crisp Corners */}
      <div 
        className="relative bg-white w-full max-w-4xl shadow-2xl border border-neutral-200 z-10 overflow-hidden my-auto animate-fade-in"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-20 p-2 text-neutral-400 hover:text-neutral-900 bg-white/90 hover:bg-neutral-100 border border-neutral-200 transition-colors cursor-pointer"
          style={{ borderRadius: 'var(--radius-xs)' }}
          aria-label="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Modal Body: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: 4K Image & Trust */}
          <div className="p-6 bg-neutral-50 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200">
            <div className="relative w-full pt-[90%] overflow-hidden bg-white border border-neutral-200 shadow-sm" style={{ borderRadius: 'var(--radius-sm)' }}>
              <img
                src={activeImage}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <span 
                className="absolute top-3 left-3 badge-crisp badge-rose font-bold text-xs"
                style={{ borderRadius: 'var(--radius-xs)' }}
              >
                {product.tag}
              </span>
            </div>

            {/* Trust Guarantee Cards */}
            <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-neutral-700">
              <div className="p-2.5 bg-white border border-neutral-200 flex items-center gap-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                <span>100% GIA / IGI Certified</span>
              </div>
              <div className="p-2.5 bg-white border border-neutral-200 flex items-center gap-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                <Gem size={16} className="text-amber-600 flex-shrink-0" />
                <span>BIS 916 Hallmarked</span>
              </div>
              <div className="p-2.5 bg-white border border-neutral-200 flex items-center gap-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                <Truck size={16} className="text-rose-600 flex-shrink-0" />
                <span>Free Insured Delivery</span>
              </div>
              <div className="p-2.5 bg-white border border-neutral-200 flex items-center gap-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                <RotateCcw size={16} className="text-blue-600 flex-shrink-0" />
                <span>Lifetime Exchange</span>
              </div>
            </div>
          </div>

          {/* Right Column: Configuration & Purchase */}
          <div className="p-6 sm:p-7 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              
              {/* Product Header */}
              <div className="flex items-center gap-2 text-xs text-neutral-500 mb-1">
                <span className="flex items-center text-amber-500 font-bold">
                  <Star size={13} className="fill-amber-400" /> {product.rating}
                </span>
                <span>•</span>
                <span>{product.reviewsCount} Verified Customer Reviews</span>
              </div>

              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {product.title}
              </h2>
              <p className="text-xs text-neutral-500 mt-1">
                {product.subtitle}
              </p>

              {/* Price Display */}
              <div className="mt-4 p-3.5 bg-rose-50/50 border border-rose-100 flex items-baseline justify-between" style={{ borderRadius: 'var(--radius-sm)' }}>
                <div>
                  <span className="text-2xl font-bold text-neutral-900 font-sans">
                    ₹{currentPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-neutral-400 line-through ml-2">
                    ₹{originalPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="ml-2 text-xs font-bold text-rose-600">
                    Inclusive of all taxes & GST
                  </span>
                </div>

                <button
                  onClick={() => setShowPriceBreakup(!showPriceBreakup)}
                  className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                >
                  <Info size={13} />
                  <span>{showPriceBreakup ? 'Hide Breakup' : 'Price Breakup'}</span>
                </button>
              </div>

              {/* Collapsible BlueStone Transparent Price Breakup Table */}
              {showPriceBreakup && (
                <div className="mt-2 p-3 bg-neutral-50 border border-neutral-200 text-xs space-y-1.5 animate-fade-in" style={{ borderRadius: 'var(--radius-xs)' }}>
                  <div className="flex justify-between text-neutral-600">
                    <span>Gold Component ({product.weightGm}g @ {selectedKarat}):</span>
                    <span className="font-semibold text-neutral-800">₹{rawGoldValue.toLocaleString('en-IN')}</span>
                  </div>
                  {product.diamondWeightCt > 0 && (
                    <div className="flex justify-between text-neutral-600">
                      <span>Certified Diamonds ({product.diamondWeightCt} ct, {product.diamondClarity}):</span>
                      <span className="font-semibold text-neutral-800">₹{diamondValue.toLocaleString('en-IN')}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-600">
                    <span>Artisan Making Charges:</span>
                    <span className="font-semibold text-neutral-800">₹{makingCharges.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Applicable GST (3%):</span>
                    <span className="font-semibold text-neutral-800">₹{gst.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="pt-1.5 border-t border-neutral-300 flex justify-between font-bold text-neutral-900">
                    <span>Grand Total:</span>
                    <span className="text-rose-600">₹{currentPrice.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              )}

              {/* Metal Selection */}
              <div className="mt-5">
                <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-2">
                  Select Precious Metal
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {metalsList.map((m) => (
                    <button
                      key={m.key}
                      onClick={() => setSelectedMetal(m.key)}
                      className={`p-2 border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        selectedMetal === m.key
                          ? 'border-neutral-900 bg-neutral-900 text-white'
                          : 'border-neutral-200 hover:border-neutral-400 bg-white text-neutral-800'
                      }`}
                      style={{ borderRadius: 'var(--radius-xs)' }}
                    >
                      <span className="w-3 h-3 border border-white/40" style={{ backgroundColor: m.color, borderRadius: '1px' }}></span>
                      <span>{m.label.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Karat Selection */}
              <div className="mt-4">
                <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider block mb-2">
                  Gold Purity (Karat)
                </label>
                <div className="flex gap-2">
                  {Object.keys(product.karatMultiplier).map((k) => (
                    <button
                      key={k}
                      onClick={() => setSelectedKarat(k)}
                      className={`flex-1 py-1.5 text-xs font-bold border transition-all cursor-pointer ${
                        selectedKarat === k
                          ? 'bg-rose-600 text-white border-rose-700'
                          : 'bg-white text-neutral-700 border-neutral-200 hover:border-rose-300'
                      }`}
                      style={{ borderRadius: 'var(--radius-xs)' }}
                    >
                      {k} Gold
                    </button>
                  ))}
                </div>
              </div>

              {/* Ring Size Selection (for rings & bangles) */}
              {(product.category === 'rings' || product.category === 'bangles') && (
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
                      Select Size
                    </label>
                    <span className="text-[11px] text-rose-600 font-semibold cursor-pointer hover:underline">
                      Size Guide
                    </span>
                  </div>
                  <div className="grid grid-cols-6 gap-1.5">
                    {ringSizes.map((s) => (
                      <button
                        key={s}
                        onClick={() => setSelectedSize(s)}
                        className={`py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                          selectedSize === s
                            ? 'bg-neutral-900 text-white border-neutral-900'
                            : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'
                        }`}
                        style={{ borderRadius: 'var(--radius-xs)' }}
                      >
                        {s.split(' ')[0]}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-neutral-200 space-y-2">
              <button
                onClick={() => {
                  onAddToCart({
                    ...product,
                    selectedMetal,
                    selectedKarat,
                    selectedSize,
                    finalPrice: currentPrice,
                    cartItemId: `${product.id}-${selectedMetal}-${selectedKarat}-${selectedSize}`
                  });
                  onClose();
                }}
                className="btn-stripe-primary w-full py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag size={17} />
                <span>Add to Bag • ₹{currentPrice.toLocaleString('en-IN')}</span>
              </button>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenTryAtHome(product);
                  }}
                  className="btn-stripe-secondary flex-1 py-2 text-xs cursor-pointer"
                >
                  <span>Book Free Home Trial</span>
                </button>

                <a
                  href="https://wa.me/919876543210?text=Hi%20Anand%20V%20Jewellers,%20I%20am%20interested%20in%20"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-stripe-secondary flex-1 py-2 text-xs flex items-center justify-center gap-1 text-emerald-700 border-emerald-300 hover:bg-emerald-50 cursor-pointer"
                >
                  <Video size={14} />
                  <span>WhatsApp Video Call</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
