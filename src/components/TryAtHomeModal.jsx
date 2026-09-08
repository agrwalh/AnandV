import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, CheckCircle2, Home, Sparkles, ShieldCheck } from 'lucide-react';

export default function TryAtHomeModal({ product, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    city: 'Mumbai',
    date: '',
    timeSlot: '11:00 AM - 01:00 PM',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal - Stripe Crisp Corners */}
      <div 
        className="relative bg-white w-full max-w-lg shadow-2xl border border-neutral-200 z-10 overflow-hidden my-auto animate-fade-in"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-1.5 text-neutral-400 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
          style={{ borderRadius: 'var(--radius-xs)' }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div className="p-5 bg-rose-50 border-b border-rose-100">
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-600 uppercase tracking-wider mb-1">
            <Home size={13} />
            <span>BLUESTONE-STYLE ZERO COST SERVICE</span>
          </div>
          <h3 className="font-playfair text-xl font-bold text-neutral-900">
            Book Free Try at Home
          </h3>
          <p className="text-xs text-neutral-600 mt-0.5">
            Our certified jewellery consultant will bring up to 5 curated designs to your doorstep. No obligation to purchase!
          </p>
        </div>

        {/* Selected Product Preview (if opened from a specific product) */}
        {product && (
          <div className="p-3 mx-5 mt-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3" style={{ borderRadius: 'var(--radius-xs)' }}>
            <img
              src={product.metals.rose || product.metals.yellow}
              alt={product.title}
              className="w-12 h-12 object-cover border border-neutral-200"
              style={{ borderRadius: '2px' }}
            />
            <div className="text-xs">
              <p className="font-bold text-neutral-900 line-clamp-1">{product.title}</p>
              <p className="text-rose-600 font-semibold">₹{product.basePrice.toLocaleString('en-IN')}</p>
            </div>
          </div>
        )}

        {/* Form Body */}
        <div className="p-5">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center" style={{ borderRadius: 'var(--radius-sm)' }}>
                <CheckCircle2 size={28} />
              </div>
              <h4 className="font-playfair text-lg font-bold text-neutral-900">
                Appointment Requested!
              </h4>
              <p className="text-xs text-neutral-600 max-w-sm mx-auto">
                Thank you, <strong>{formData.name}</strong>! Our Anand V Jewellers executive will call on <strong>{formData.phone}</strong> to confirm your appointment time and jewellery selection.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Delhi, Mumbai, Bengaluru"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Pincode *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={6}
                    placeholder="6-digit PIN"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-neutral-700 block mb-1">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 bg-white"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  >
                    <option>10:00 AM - 01:00 PM</option>
                    <option>02:00 PM - 05:00 PM</option>
                    <option>05:00 PM - 08:00 PM</option>
                  </select>
                </div>
              </div>

              {/* Security Pill */}
              <div className="p-2.5 bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-600 flex items-center gap-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                <ShieldCheck size={16} className="text-emerald-600 flex-shrink-0" />
                <span>Sanitized jewellery kits & background-verified security associates.</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-stripe-primary w-full py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                Confirm Free Home Trial
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
