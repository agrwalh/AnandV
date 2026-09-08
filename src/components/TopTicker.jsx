import React, { useState } from 'react';
import { Sparkles, MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import { LIVE_RATES } from '../data/products';

export default function TopTicker() {
  const [pincode, setPincode] = useState('');
  const [pinStatus, setPinStatus] = useState(null);

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (pincode.trim().length === 6) {
      setPinStatus('Delivery available in 48 hrs (Free Insured)');
      setTimeout(() => setPinStatus(null), 4000);
    } else {
      setPinStatus('Please enter a valid 6-digit PIN');
      setTimeout(() => setPinStatus(null), 3000);
    }
  };

  return (
    <div style={{ backgroundColor: '#191c21', color: '#f3f4f6' }} className="text-xs border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 flex flex-wrap items-center justify-between gap-2">
        
        {/* Left: Live Gold Rates */}
        <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar py-0.5">
          <div className="flex items-center gap-1.5 font-semibold text-rose-300 whitespace-nowrap" style={{ color: '#f8a5c2' }}>
            <span className="live-pulse"></span>
            <span>LIVE GOLD RATE (10g):</span>
          </div>
          <div className="flex items-center gap-2 text-neutral-300 font-medium whitespace-nowrap">
            <span>24K: <strong className="text-white">₹{LIVE_RATES.gold24k.toLocaleString('en-IN')}</strong></span>
            <span className="text-neutral-600">|</span>
            <span>22K: <strong className="text-white">₹{LIVE_RATES.gold22k.toLocaleString('en-IN')}</strong></span>
            <span className="text-neutral-600">|</span>
            <span>18K: <strong className="text-white">₹{LIVE_RATES.gold18k.toLocaleString('en-IN')}</strong></span>
          </div>
        </div>

        {/* Right: Quick Tools */}
        <div className="flex items-center gap-4 ml-auto text-neutral-300 text-[11.5px]">
          {/* Pincode Lookup */}
          <form onSubmit={handlePincodeCheck} className="hidden md:flex items-center gap-1 bg-neutral-900 px-2 py-0.5 border border-neutral-700" style={{ borderRadius: '3px' }}>
            <MapPin size={12} className="text-rose-400" />
            <input
              type="text"
              placeholder="Enter Pincode"
              value={pincode}
              maxLength={6}
              onChange={(e) => setPincode(e.target.value)}
              className="bg-transparent text-white placeholder-neutral-500 focus:outline-none w-20 text-[11px]"
            />
            <button type="submit" className="text-rose-300 hover:text-white font-semibold text-[11px] px-1 cursor-pointer">
              Check
            </button>
          </form>

          {pinStatus && (
            <span className="hidden lg:inline-flex items-center gap-1 text-emerald-400 font-medium animate-fade-in">
              <CheckCircle2 size={12} /> {pinStatus}
            </span>
          )}

          {/* VIP Helpline */}
          <a
            href="tel:18002008899"
            className="flex items-center gap-1 text-neutral-300 hover:text-white transition-colors whitespace-nowrap"
          >
            <PhoneCall size={12} className="text-rose-400" />
            <span>VIP Helpline: <strong className="text-white">1800-200-ANAND</strong></span>
          </a>

          <span className="hidden sm:inline-flex items-center gap-1 text-amber-300 font-semibold">
            <Sparkles size={12} /> 100% BIS 916 Certified
          </span>
        </div>

      </div>
    </div>
  );
}
