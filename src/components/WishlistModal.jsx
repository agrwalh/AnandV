import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';

export default function WishlistModal({ 
  isOpen, 
  onClose, 
  wishlistProducts, 
  onAddToCart, 
  onRemoveWishlist 
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-neutral-950/65 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div 
        className="relative bg-white w-full max-w-2xl shadow-2xl border border-neutral-200 z-10 overflow-hidden my-auto animate-fade-in"
        style={{ borderRadius: 'var(--radius-md)' }}
      >
        {/* Header */}
        <div className="p-4 bg-rose-50 border-b border-rose-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart size={18} className="fill-rose-600 text-rose-600" />
            <h3 className="font-playfair font-bold text-base text-neutral-900">
              My Saved Jewellery ({wishlistProducts.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1 text-neutral-400 hover:text-neutral-900 cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="p-4 max-h-[70vh] overflow-y-auto space-y-3">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-12 space-y-2">
              <Heart size={32} className="mx-auto text-neutral-300" />
              <p className="font-playfair text-base font-bold text-neutral-800">No saved jewellery yet</p>
              <p className="text-xs text-neutral-500">
                Click the heart icon on any product to save it to your curated wishlist.
              </p>
            </div>
          ) : (
            wishlistProducts.map((p) => (
              <div
                key={p.id}
                className="p-3 border border-neutral-200 bg-white flex items-center justify-between gap-4"
                style={{ borderRadius: 'var(--radius-xs)' }}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={p.metals.rose || p.metals.yellow}
                    alt={p.title}
                    className="w-16 h-16 object-cover border border-neutral-200"
                    style={{ borderRadius: '2px' }}
                  />
                  <div>
                    <h4 className="font-playfair font-bold text-xs sm:text-sm text-neutral-900 line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-xs font-bold text-rose-600 font-sans mt-0.5">
                      ₹{p.basePrice.toLocaleString('en-IN')}
                    </p>
                    <span className="text-[10px] text-neutral-500">{p.subtitle}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart({
                        ...p,
                        selectedMetal: 'rose',
                        selectedKarat: '18K',
                        finalPrice: p.basePrice,
                        cartItemId: `${p.id}-rose-18K`
                      });
                      onRemoveWishlist(p.id);
                    }}
                    className="btn-stripe-primary text-xs py-1.5 px-3 flex items-center gap-1 cursor-pointer"
                  >
                    <ShoppingBag size={13} />
                    <span>Move to Bag</span>
                  </button>

                  <button
                    onClick={() => onRemoveWishlist(p.id)}
                    className="p-1.5 text-neutral-400 hover:text-rose-600 cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
