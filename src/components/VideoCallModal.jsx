import React, { useState } from 'react';
import { X, Video, Calendar, Clock, Phone, MessageSquare, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export default function VideoCallModal({ isOpen, onClose, product }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: 'Today (Immediate 15-min Slot)',
    timeSlot: '04:00 PM - 04:30 PM',
    platform: 'WhatsApp Video Call',
    language: 'Hindi / English'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/70 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#061d33] text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
          >
            <X size={18} />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold rounded-full mb-2">
            <Video size={13} />
            <span>BLUESTONE LIVE VIDEO CALL CONCIERGE</span>
          </div>
          
          <h2 className="font-playfair text-2xl font-bold">
            Live Jewellery Video Call
          </h2>
          <p className="text-xs text-neutral-300 mt-1">
            Experience our jewellery in high definition with a dedicated jewellery styling expert
          </p>

          {/* Selected Product Snapshot if available */}
          {product && (
            <div className="mt-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shrink-0">
                <img
                  src={product.metals?.yellow || product.metals?.rose || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=200&q=80"}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold text-white truncate font-playfair">{product.title}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-xs font-sans font-bold text-rose-300">
                    ₹{product.basePrice ? product.basePrice.toLocaleString('en-IN') : '60,368'}
                  </span>
                  {product.discountOffer && (
                    <span className="text-[10px] bg-rose-500/30 text-rose-200 px-1.5 py-0.5 rounded-full">
                      {product.discountOffer}
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <h3 className="font-playfair text-xl font-bold text-neutral-900">
                  Video Call Scheduled!
                </h3>
                <p className="text-xs text-neutral-500 mt-1 max-w-sm mx-auto">
                  Our senior certified stylist will call you on <strong className="text-neutral-900">{formData.phone || '+91 98765 43210'}</strong> via <strong className="text-rose-600">{formData.platform}</strong> at <strong className="text-neutral-900">{formData.timeSlot}</strong>.
                </p>
              </div>

              <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-200 text-xs text-neutral-600 max-w-sm mx-auto text-left space-y-1">
                <p className="flex items-center gap-2">
                  <ShieldCheck size={14} className="text-emerald-500" />
                  <span>100% Private, 1-on-1 Consultation</span>
                </p>
                <p className="flex items-center gap-2">
                  <Sparkles size={14} className="text-amber-500" />
                  <span>Special 15% discount code sent via SMS</span>
                </p>
              </div>

              <button
                onClick={onClose}
                className="btn-stripe-primary py-2.5 px-8 text-xs font-bold rounded-full cursor-pointer shadow-md"
              >
                Close & Continue Browsing
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    WhatsApp Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500"
                  />
                </div>
              </div>

              {/* Date & Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Preferred Day
                  </label>
                  <select
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500 bg-white"
                  >
                    <option>Today (Immediate 15-min Slot)</option>
                    <option>Tomorrow</option>
                    <option>This Weekend</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Time Slot (IST)
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500 bg-white"
                  >
                    <option>11:00 AM - 11:30 AM</option>
                    <option>02:00 PM - 02:30 PM</option>
                    <option>04:00 PM - 04:30 PM</option>
                    <option>06:30 PM - 07:00 PM</option>
                    <option>08:00 PM - 08:30 PM</option>
                  </select>
                </div>
              </div>

              {/* Preferred Platform & Language */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Platform
                  </label>
                  <select
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500 bg-white"
                  >
                    <option>WhatsApp Video Call</option>
                    <option>Google Meet Link</option>
                    <option>Zoom Meeting</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-neutral-700 uppercase tracking-wider mb-1">
                    Language
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full text-xs px-3 py-2.5 border border-neutral-300 rounded-xl focus:outline-none focus:border-rose-500 bg-white"
                  >
                    <option>Hindi / English</option>
                    <option>Pure English</option>
                    <option>Tamil / Telugu / Kannada</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-stripe-primary w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-full cursor-pointer shadow-lg"
                >
                  <Video size={15} />
                  <span>Confirm Free Video Appointment</span>
                </button>
                <p className="text-[11px] text-center text-neutral-400 mt-2">
                  🔒 Zero commitment. 100% Free VIP styling concierge.
                </p>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
