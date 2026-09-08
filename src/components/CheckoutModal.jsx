import React, { useState } from 'react';
import { X, Lock, CreditCard, Smartphone, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function CheckoutModal({ isOpen, onClose, totalAmount, onOrderComplete }) {
  if (!isOpen) return null;

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setCompleted(true);
      setTimeout(() => {
        setCompleted(false);
        onOrderComplete();
        onClose();
      }, 3500);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal - Stripe Clean Geometry */}
      <div 
        className="relative bg-white w-full max-w-lg shadow-2xl border border-neutral-200 z-10 overflow-hidden my-auto animate-fade-in"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        {/* Header */}
        <div className="p-4 bg-neutral-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock size={16} className="text-emerald-400" />
            <span className="text-xs font-semibold tracking-wider uppercase text-neutral-300">
              Anand V Express Checkout
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-white cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {completed ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-14 h-14 mx-auto bg-emerald-100 text-emerald-600 flex items-center justify-center" style={{ borderRadius: 'var(--radius-sm)' }}>
              <CheckCircle2 size={32} />
            </div>
            <h3 className="font-playfair text-xl font-bold text-neutral-900">
              Order Confirmed & Insured!
            </h3>
            <p className="text-xs text-neutral-600 max-w-sm mx-auto">
              Order ID: <strong className="text-neutral-900">#AVJ-{Math.floor(100000 + Math.random() * 900000)}</strong>.
              Your certified jewellery package has been placed for handcrafted inspection.
            </p>
            <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs text-neutral-700 max-w-xs mx-auto text-left" style={{ borderRadius: 'var(--radius-xs)' }}>
              <p>✓ Insured Transit Policy Activated</p>
              <p>✓ SMS & WhatsApp Tracking Dispatched</p>
              <p>✓ BIS Hallmarking Certificate Included</p>
            </div>
          </div>
        ) : (
          <div className="p-6">
            
            {/* Total Due Banner */}
            <div className="flex items-center justify-between p-3.5 bg-neutral-50 border border-neutral-200 mb-5" style={{ borderRadius: 'var(--radius-sm)' }}>
              <div>
                <span className="text-xs text-neutral-500 font-medium block">Total Payable</span>
                <span className="text-xl font-bold font-sans text-neutral-900">
                  ₹{totalAmount.toLocaleString('en-IN')}
                </span>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 border border-emerald-200" style={{ borderRadius: '2px' }}>
                100% Insured
              </span>
            </div>

            {/* Payment Method Switcher */}
            <div className="flex gap-2 mb-4">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 p-2.5 text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 text-neutral-700 bg-white hover:border-neutral-400'
                }`}
                style={{ borderRadius: 'var(--radius-xs)' }}
              >
                <CreditCard size={15} />
                <span>Credit / Debit Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('upi')}
                className={`flex-1 p-2.5 text-xs font-semibold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                  paymentMethod === 'upi'
                    ? 'border-neutral-900 bg-neutral-900 text-white'
                    : 'border-neutral-200 text-neutral-700 bg-white hover:border-neutral-400'
                }`}
                style={{ borderRadius: 'var(--radius-xs)' }}
              >
                <Smartphone size={15} />
                <span>Instant UPI / GPay</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handlePayment} className="space-y-3">
              
              <div>
                <label className="text-xs font-semibold text-neutral-700 block mb-1">
                  Delivery Address & Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Recipient Name & Complete Street Address"
                  defaultValue="Kavita Mehta, Flat 402, Sea Green Apartments, Worli, Mumbai 400018"
                  className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 font-sans"
                  style={{ borderRadius: 'var(--radius-xs)' }}
                />
              </div>

              {paymentMethod === 'card' ? (
                <div className="space-y-2.5">
                  <div>
                    <label className="text-xs font-semibold text-neutral-700 block mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="4000 1234 5678 9010"
                      maxLength={19}
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 font-mono"
                      style={{ borderRadius: 'var(--radius-xs)' }}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        maxLength={5}
                        defaultValue="08/29"
                        className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 font-mono"
                        style={{ borderRadius: 'var(--radius-xs)' }}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-neutral-700 block mb-1">
                        Security CVC
                      </label>
                      <input
                        type="password"
                        placeholder="CVC"
                        maxLength={3}
                        defaultValue="888"
                        className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 font-mono"
                        style={{ borderRadius: 'var(--radius-xs)' }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-3 bg-neutral-50 border border-neutral-200 text-xs space-y-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                  <label className="font-semibold text-neutral-800 block">
                    Enter Virtual UPI ID (VPA)
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. mobile@okhdfcbank or yourname@upi"
                    defaultValue="anandv.customer@oksbi"
                    className="w-full text-xs p-2.5 border border-neutral-300 focus:outline-none focus:border-rose-500 bg-white"
                    style={{ borderRadius: 'var(--radius-xs)' }}
                  />
                  <div className="flex gap-2 pt-1 text-[11px] text-neutral-500">
                    <span className="bg-white border px-1.5 py-0.5" style={{ borderRadius: '2px' }}>Google Pay</span>
                    <span className="bg-white border px-1.5 py-0.5" style={{ borderRadius: '2px' }}>PhonePe</span>
                    <span className="bg-white border px-1.5 py-0.5" style={{ borderRadius: '2px' }}>Paytm</span>
                  </div>
                </div>
              )}

              {/* Security Pill */}
              <div className="flex items-center gap-1.5 text-[11px] text-neutral-500 pt-1">
                <ShieldCheck size={14} className="text-emerald-600" />
                <span>256-Bit SSL Encrypted & RBI Guideline Compliant</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={processing}
                className="btn-stripe-primary w-full py-3 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer mt-3"
              >
                {processing ? (
                  <span>Securing Payment...</span>
                ) : (
                  <span>Pay ₹{totalAmount.toLocaleString('en-IN')} & Confirm Order</span>
                )}
              </button>

            </form>

          </div>
        )}

      </div>
    </div>
  );
}
