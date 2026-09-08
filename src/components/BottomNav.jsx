import React from 'react';
import { Home, Sparkles, Heart, ShoppingBag, CalendarCheck } from 'lucide-react';

export default function BottomNav({ 
  onSelectCategory, 
  activeCategory,
  onOpenTryAtHome, 
  onOpenScheme, 
  onOpenWishlist, 
  onOpenCart,
  cartCount,
  wishlistCount
}) {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-rose-100 px-2 py-1.5 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
      <div className="flex items-center justify-around">
        
        {/* Explore / Home */}
        <button
          onClick={() => onSelectCategory('all')}
          className={`flex flex-col items-center gap-1 p-1 text-[10.5px] font-semibold transition-colors cursor-pointer ${
            activeCategory === 'all' ? 'text-rose-600' : 'text-neutral-500 hover:text-rose-600'
          }`}
        >
          <Home size={18} />
          <span>Home</span>
        </button>

        {/* Try at Home */}
        <button
          onClick={onOpenTryAtHome}
          className="flex flex-col items-center gap-1 p-1 text-[10.5px] font-semibold text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <CalendarCheck size={18} className="text-rose-500" />
          <span>Try at Home</span>
        </button>

        {/* 10+1 Gold Scheme */}
        <button
          onClick={onOpenScheme}
          className="flex flex-col items-center gap-1 p-1 text-[10.5px] font-semibold text-amber-700 hover:text-amber-800 transition-colors cursor-pointer"
        >
          <Sparkles size={18} className="text-amber-500" />
          <span>10+1 Scheme</span>
        </button>

        {/* Wishlist */}
        <button
          onClick={onOpenWishlist}
          className="relative flex flex-col items-center gap-1 p-1 text-[10.5px] font-semibold text-neutral-500 hover:text-rose-600 transition-colors cursor-pointer"
        >
          <Heart size={18} />
          <span>Wishlist</span>
          {wishlistCount > 0 && (
            <span 
              className="absolute top-0 right-1 w-3.5 h-3.5 bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center"
              style={{ borderRadius: 'var(--radius-xs)' }}
            >
              {wishlistCount}
            </span>
          )}
        </button>

        {/* Shopping Bag */}
        <button
          onClick={onOpenCart}
          className="relative flex flex-col items-center gap-1 p-1 text-[10.5px] font-bold text-rose-600 transition-colors cursor-pointer"
        >
          <ShoppingBag size={18} />
          <span>Bag</span>
          {cartCount > 0 && (
            <span 
              className="absolute top-0 right-1 w-3.5 h-3.5 bg-rose-600 text-white text-[9px] font-bold flex items-center justify-center"
              style={{ borderRadius: 'var(--radius-xs)' }}
            >
              {cartCount}
            </span>
          )}
        </button>

      </div>
    </div>
  );
}
