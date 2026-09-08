import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, Plus, Minus, Gift, ShieldCheck, ArrowRight } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onProceedCheckout
}) {
  if (!isOpen) return null;

  const [giftWrap, setGiftWrap] = useState(false);
  const [giftNote, setGiftNote] = useState('');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.finalPrice * item.quantity), 0);
  const giftWrapFee = giftWrap ? 250 : 0;
  const total = subtotal + giftWrapFee;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Slide-over Drawer Panel */}
      <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-left border-l border-neutral-200">
        
        {/* Drawer Header */}
        <div className="p-4 bg-rose-50/70 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag size={18} className="text-rose-600" />
            <h3 className="font-playfair font-bold text-base text-neutral-900">
              Shopping Bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Alert Pill */}
        <div className="bg-emerald-50 px-4 py-2 border-b border-emerald-200 text-[11.5px] text-emerald-800 flex items-center gap-1.5 font-medium">
          <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
          <span>Complimentary Insured Express Delivery Applied!</span>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {cartItems.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <div className="w-12 h-12 mx-auto bg-rose-50 text-rose-400 flex items-center justify-center" style={{ borderRadius: 'var(--radius-sm)' }}>
                <ShoppingBag size={24} />
              </div>
              <p className="font-playfair text-base font-bold text-neutral-800">Your bag is empty</p>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our handcrafted 100% BIS Hallmarked jewellery and add your favorites.
              </p>
              <button
                onClick={onClose}
                className="btn-stripe-primary text-xs mt-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div 
                key={item.cartItemId}
                className="p-3 border border-neutral-200 bg-white flex gap-3 relative"
                style={{ borderRadius: 'var(--radius-sm)' }}
              >
                {/* Thumbnail */}
                <img
                  src={item.metals[item.selectedMetal] || item.metals.rose || item.metals.yellow}
                  alt={item.title}
                  className="w-20 h-20 object-cover border border-neutral-200 flex-shrink-0"
                  style={{ borderRadius: 'var(--radius-xs)' }}
                />

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <h4 className="font-playfair font-bold text-xs text-neutral-900 line-clamp-1">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.cartItemId)}
                        className="text-neutral-400 hover:text-rose-600 transition-colors p-0.5 cursor-pointer"
                        title="Remove item"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>

                    <div className="text-[11px] text-neutral-500 mt-0.5 space-x-1">
                      <span className="capitalize font-semibold text-rose-700">{item.selectedMetal} Gold</span>
                      <span>•</span>
                      <span>{item.selectedKarat}</span>
                      {item.selectedSize && (
                        <>
                          <span>•</span>
                          <span>Size: {item.selectedSize}</span>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                    <div className="flex items-center border border-neutral-300" style={{ borderRadius: '2px' }}>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, item.quantity - 1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                      >
                        <Minus size={11} />
                      </button>
                      <span className="px-2 text-xs font-bold text-neutral-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.cartItemId, item.quantity + 1)}
                        className="p-1 hover:bg-neutral-100 text-neutral-600 cursor-pointer"
                      >
                        <Plus size={11} />
                      </button>
                    </div>

                    <span className="font-bold text-sm text-neutral-900 font-sans">
                      ₹{(item.finalPrice * item.quantity).toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}

          {/* Luxury Gift Packaging Option */}
          {cartItems.length > 0 && (
            <div className="p-3 border border-rose-200 bg-rose-50/50 space-y-2" style={{ borderRadius: 'var(--radius-sm)' }}>
              <label className="flex items-center gap-2 text-xs font-semibold text-neutral-800 cursor-pointer">
                <input
                  type="checkbox"
                  checked={giftWrap}
                  onChange={(e) => setGiftWrap(e.target.checked)}
                  className="accent-rose-600"
                />
                <Gift size={14} className="text-rose-600" />
                <span>Add Signature Luxury Box & Gift Card (+₹250)</span>
              </label>

              {giftWrap && (
                <textarea
                  rows={2}
                  placeholder="Write your special message for the recipient..."
                  value={giftNote}
                  onChange={(e) => setGiftNote(e.target.value)}
                  className="w-full text-xs p-2 bg-white border border-rose-200 focus:outline-none focus:border-rose-400"
                  style={{ borderRadius: 'var(--radius-xs)' }}
                />
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer: Totals & Checkout */}
        {cartItems.length > 0 && (
          <div className="p-4 bg-neutral-50 border-t border-neutral-200 space-y-3">
            <div className="space-y-1.5 text-xs text-neutral-600">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-neutral-900">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {giftWrap && (
                <div className="flex justify-between">
                  <span>Luxury Gift Packaging:</span>
                  <span className="font-semibold text-neutral-900">₹{giftWrapFee}</span>
                </div>
              )}
              <div className="flex justify-between text-emerald-700">
                <span>Insured Doorstep Shipping:</span>
                <span className="font-bold">FREE</span>
              </div>
              <div className="pt-2 border-t border-neutral-200 flex justify-between text-sm font-bold text-neutral-900">
                <span>Total Amount (Inc. GST):</span>
                <span className="text-base text-rose-600">₹{total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onProceedCheckout(total);
              }}
              className="btn-stripe-primary w-full py-3 text-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
