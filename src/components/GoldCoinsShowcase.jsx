import React, { useState } from 'react';
import { Sparkles, ShoppingBag, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { LIVE_RATES } from '../data/products';

const COIN_WEIGHTS = [
  { wt: '1 Gram', grams: 1, tag: 'GIFTING' },
  { wt: '2 Grams', grams: 2, tag: 'POPULAR' },
  { wt: '5 Grams', grams: 5, tag: 'SAVINGS' },
  { wt: '10 Grams', grams: 10, tag: 'BESTSELLER' },
  { wt: '20 Grams', grams: 20, tag: 'INVESTMENT' },
  { wt: '50 Grams', grams: 50, tag: 'BAR (999.9)' }
];

export default function GoldCoinsShowcase({ onAddToCart }) {
  const [selectedKarat, setSelectedKarat] = useState('24K');
  const [selectedCoin, setSelectedCoin] = useState(COIN_WEIGHTS[3]); // default 10g

  const ratePerGram = selectedKarat === '24K' ? (LIVE_RATES.gold24k / 10) : (LIVE_RATES.gold22k / 10);
  const coinPrice = Math.round(ratePerGram * selectedCoin.grams * 1.035); // includes hallmark & tamper-proof blister cert

  const handleBuyCoin = () => {
    onAddToCart({
      id: `coin-${selectedKarat}-${selectedCoin.grams}`,
      title: `${selectedKarat} (${selectedKarat === '24K' ? '999 Purity' : '916 Hallmark'}) Lakshmi Gold Coin`,
      subtitle: `${selectedCoin.wt} Tamper-Proof Blister Certified`,
      category: 'coins',
      tag: 'BIS 916 HALLMARK',
      rating: 5.0,
      reviewsCount: 150,
      basePrice: coinPrice,
      finalPrice: coinPrice,
      selectedMetal: 'yellow',
      selectedKarat,
      weightGm: selectedCoin.grams,
      diamondWeightCt: 0,
      cartItemId: `coin-${selectedKarat}-${selectedCoin.grams}`,
      metals: {
        yellow: "https://images.unsplash.com/photo-1610375461246-83df859d849d?auto=format&fit=crop&w=800&q=80"
      }
    });
  };

  return (
    <section className="py-14 bg-[#061d33] text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wider rounded-full">
              <Sparkles size={13} className="text-amber-400" />
              <span>100% ASSAY CERTIFIED GOLD COINS</span>
            </div>
            
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold leading-tight">
              Invest In Pure 24K (999) & 22K Lakshmi Gold Coins
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              Inspired by BlueStone’s signature bullion counter. Every Anand V gold coin comes sealed in Swiss tamper-proof certicard blister packaging with government hallmark and serial number.
            </p>

            <div className="space-y-2 pt-2 text-xs text-neutral-300">
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Zero Deductions on Lifetime Buyback</span>
              </p>
              <p className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>Live Bullion Spot Pricing with 0% Making Charges</span>
              </p>
            </div>
          </div>

          {/* Right: Interactive Coin Selector Card */}
          <div className="lg:col-span-7 bg-white text-neutral-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-rose-100">
            
            {/* Karat Switcher */}
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="text-xs font-bold text-neutral-600 uppercase tracking-wider">
                Select Gold Purity:
              </span>
              <div className="flex gap-2">
                {['24K (999 Purity)', '22K (916 Purity)'].map(k => {
                  const key = k.split(' ')[0];
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedKarat(key)}
                      className={`px-4 py-1.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                        selectedKarat === key 
                          ? 'bg-[#061d33] text-white border-[#061d33] shadow-md'
                          : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:border-neutral-500'
                      }`}
                    >
                      {k}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Weight Options Grid */}
            <div className="mt-5">
              <label className="text-xs font-bold text-neutral-600 uppercase tracking-wider block mb-2.5">
                Choose Weight Denomination:
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {COIN_WEIGHTS.map(coin => (
                  <button
                    key={coin.wt}
                    onClick={() => setSelectedCoin(coin)}
                    className={`p-2.5 rounded-2xl border text-center transition-all cursor-pointer ${
                      selectedCoin.wt === coin.wt
                        ? 'border-rose-600 bg-rose-50 ring-2 ring-rose-200 shadow-md scale-105'
                        : 'border-neutral-200 hover:border-neutral-400 bg-neutral-50/70'
                    }`}
                  >
                    <span className="text-xs font-bold text-neutral-900 block">{coin.wt}</span>
                    <span className="text-[9px] font-semibold text-rose-600 block mt-0.5">{coin.tag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Live Price Calculation & CTA */}
            <div className="mt-6 pt-5 border-t border-neutral-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-neutral-500 block">Live Price (Tamper-Proof Pack):</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold font-sans text-neutral-900">
                    ₹{coinPrice.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Free Transit Insurance
                  </span>
                </div>
              </div>

              <button
                onClick={handleBuyCoin}
                className="btn-stripe-primary py-3 px-8 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-xl rounded-full"
              >
                <ShoppingBag size={15} />
                <span>Buy {selectedCoin.wt} Coin</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
