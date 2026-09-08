import React, { useState } from 'react';
import { Sparkles, Gift, CheckCircle2, ArrowRight, ShieldCheck, Calculator } from 'lucide-react';

export default function GoldSchemeCalculator({ onClose, onOpenNotification }) {
  const [monthlyAmount, setMonthlyAmount] = useState(5000);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [phone, setPhone] = useState('');

  // 10+1 scheme logic
  const clientInvestment = monthlyAmount * 10;
  const anandVBonus = monthlyAmount; // 1 month 100% paid by Anand V Jewellers
  const totalMaturityVoucher = clientInvestment + anandVBonus;
  const estimatedSavings = Math.round(monthlyAmount * 1.6); // Making charge waiver + bonus

  const handleEnroll = (e) => {
    e.preventDefault();
    if (phone.length >= 10) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        if (onClose) onClose();
      }, 4000);
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-rose-50/60 via-white to-neutral-50 border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-amber-100/80 border border-amber-300 text-amber-900 text-xs font-bold tracking-wider mb-3 rounded-full shadow-xs">
            <Sparkles size={13} className="text-amber-700" />
            <span>ANAND V 10+1 MONTHLY SWARNA YOJANA</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-neutral-900">
            Pay For 10 Months, We Pay The 11th Month!
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 font-medium">
            Inspired by BlueStone's Gold Mine scheme. Build your dream jewellery trousseau with zero making charges.
          </p>
        </div>

        {/* Interactive Calculator Container - Apple Modern Soft 3xl */}
        <div className="max-w-4xl mx-auto bg-white border border-rose-200/90 shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-12 rounded-3xl">
          
          {/* Left: Interactive Slider */}
          <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-neutral-200">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Monthly Installment
                </span>
                <span className="text-2xl font-bold text-rose-600 font-sans">
                  ₹{monthlyAmount.toLocaleString('en-IN')} <span className="text-xs text-neutral-500 font-normal">/ mo</span>
                </span>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min={2000}
                max={50000}
                step={1000}
                value={monthlyAmount}
                onChange={(e) => setMonthlyAmount(Number(e.target.value))}
                className="w-full h-2 bg-neutral-200 rounded-full accent-rose-600 cursor-pointer"
              />

              <div className="flex justify-between text-[11px] text-neutral-400 font-medium mt-1 mb-6">
                <span>Min: ₹2,000</span>
                <span>₹25,000</span>
                <span>Max: ₹50,000</span>
              </div>

              {/* Quick Select Buttons - Apple Soft Pills */}
              <div className="flex gap-2 flex-wrap mb-6">
                {[3000, 5000, 10000, 20000].map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setMonthlyAmount(amt)}
                    className={`text-xs font-bold py-1.5 px-3.5 rounded-full border transition-all cursor-pointer shadow-xs ${
                      monthlyAmount === amt
                        ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-105'
                        : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-rose-400 hover:bg-white'
                    }`}
                  >
                    ₹{amt.toLocaleString('en-IN')}
                  </button>
                ))}
              </div>

              {/* Breakdown Details */}
              <div className="space-y-2 text-xs border-t border-neutral-100 pt-4 text-neutral-700">
                <div className="flex justify-between">
                  <span>Your Deposit (10 months):</span>
                  <span className="font-semibold text-neutral-900">₹{clientInvestment.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-rose-700 font-semibold">
                  <span className="flex items-center gap-1">
                    <Gift size={13} /> Anand V Jewellers Bonus (11th month):
                  </span>
                  <span>+ ₹{anandVBonus.toLocaleString('en-IN')} FREE</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Special Privilege:</span>
                  <span>0% Making Charges Waiver</span>
                </div>
              </div>
            </div>

            {/* Guaranteed Trust Badges */}
            <div className="pt-4 mt-6 border-t border-neutral-200 flex items-center gap-4 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1">
                <ShieldCheck size={14} className="text-emerald-600" /> Government Compliant
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 size={14} className="text-rose-600" /> Instant Redemption
              </span>
            </div>
          </div>

          {/* Right: Summary & Quick Enrollment */}
          <div className="md:col-span-5 p-6 sm:p-8 bg-neutral-900 text-white flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block mb-1">
                TOTAL MATURITY PURCHASING POWER
              </span>
              
              <div className="text-3xl sm:text-4xl font-bold font-sans text-white mt-1">
                ₹{totalMaturityVoucher.toLocaleString('en-IN')}
              </div>
              <p className="text-xs text-neutral-300 mt-1">
                Redeemable against any Diamond, Solitaire, or 22K Gold Jewellery.
              </p>

              <div className="mt-4 p-3 bg-white/10 border border-white/15 text-xs text-neutral-200 space-y-1" style={{ borderRadius: 'var(--radius-xs)' }}>
                <p className="font-bold text-amber-300">★ Bonus Breakdown:</p>
                <p>You pay: ₹{clientInvestment.toLocaleString('en-IN')}</p>
                <p>You get jewelry worth: ₹{totalMaturityVoucher.toLocaleString('en-IN')}</p>
                <p className="text-emerald-400 font-semibold">Net direct gain: ₹{anandVBonus.toLocaleString('en-IN')}</p>
              </div>
            </div>

            {/* Form */}
            <div className="mt-6">
              {isSubscribed ? (
                <div className="p-3 bg-emerald-900/80 border border-emerald-500 text-center text-xs text-emerald-100" style={{ borderRadius: 'var(--radius-xs)' }}>
                  <p className="font-bold">✓ Registration Request Received!</p>
                  <p className="text-[11px] mt-0.5">Our Anand V Swarna Advisor will call you within 15 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleEnroll} className="space-y-2">
                  <label className="text-[11px] font-semibold text-neutral-300 block">
                    Enter Mobile for Instant Digital Brochure:
                  </label>
                  <div className="flex shadow-lg rounded-full overflow-hidden p-1 bg-white">
                    <input
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      required
                      maxLength={10}
                      onChange={(e) => setPhone(e.target.value)}
                      className="flex-1 bg-transparent text-neutral-900 px-4 py-2 text-xs focus:outline-none placeholder-neutral-400 font-sans"
                    />
                    <button
                      type="submit"
                      className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold px-6 py-2 flex items-center gap-1 cursor-pointer transition-all rounded-full shadow-sm hover:scale-105"
                    >
                      <span>Join</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                  <p className="text-[10px] text-neutral-400">
                    No spam. Zero hidden charges. 100% money security guarantee.
                  </p>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
