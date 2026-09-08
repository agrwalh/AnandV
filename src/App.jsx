import React, { useState } from 'react';
import TopTicker from './components/TopTicker';
import Navbar from './components/Navbar';
import HeroCarousel from './components/HeroCarousel';
import CategoryGrid from './components/CategoryGrid';
import RecommendedCategoryRail from './components/RecommendedCategoryRail';
import Trendspotting from './components/Trendspotting';
import VideoShopping from './components/VideoShopping';
import ProductGrid from './components/ProductGrid';
import ShopByMaterial from './components/ShopByMaterial';
import GoldCoinsShowcase from './components/GoldCoinsShowcase';
import GoldSchemeCalculator from './components/GoldSchemeCalculator';
import TrustBadges from './components/TrustBadges';
import ClientReviews from './components/ClientReviews';
import PressMedia from './components/PressMedia';
import SeoCityDirectory from './components/SeoCityDirectory';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import BrandOmnichannelStory from './components/BrandOmnichannelStory';
import VideoCallModal from './components/VideoCallModal';
import QuickViewModal from './components/QuickViewModal';
import TryAtHomeModal from './components/TryAtHomeModal';
import CartDrawer from './components/CartDrawer';
import CheckoutModal from './components/CheckoutModal';
import WishlistModal from './components/WishlistModal';
import { PRODUCTS } from './data/products';
import { CheckCircle2 } from 'lucide-react';

export default function App() {
  // State
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Cart state: pre-loaded with 1 initial sample item for rich luxury presentation
  const [cartItems, setCartItems] = useState([
    {
      ...PRODUCTS[0],
      selectedMetal: 'rose',
      selectedKarat: '18K',
      selectedSize: '14 (Standard)',
      finalPrice: PRODUCTS[0].basePrice,
      quantity: 1,
      cartItemId: `${PRODUCTS[0].id}-rose-18K-14`
    }
  ]);

  // Wishlist state
  const [wishlistIds, setWishlistIds] = useState(['avj-102', 'avj-104']);

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isTryAtHomeOpen, setIsTryAtHomeOpen] = useState(false);
  const [tryAtHomeProduct, setTryAtHomeProduct] = useState(null);
  const [isVideoCallOpen, setIsVideoCallOpen] = useState(false);
  const [videoCallProduct, setVideoCallProduct] = useState(null);
  const [quickViewData, setQuickViewData] = useState(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutTotal, setCheckoutTotal] = useState(0);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleOpenVideoCall = (prod) => {
    setVideoCallProduct(prod || null);
    setIsVideoCallOpen(true);
  };

  // Cart operations
  const handleAddToCart = (productConfig) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(item => item.cartItemId === productConfig.cartItemId);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += 1;
        return updated;
      }
      return [...prev, { ...productConfig, quantity: 1 }];
    });
    showToast(`Added "${productConfig.title}" to Bag!`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId, newQty) => {
    if (newQty <= 0) {
      handleRemoveFromCart(cartItemId);
    } else {
      setCartItems(prev => prev.map(item => 
        item.cartItemId === cartItemId ? { ...item, quantity: newQty } : item
      ));
    }
  };

  const handleRemoveFromCart = (cartItemId) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from Bag.');
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlistIds((prev) => {
      if (prev.includes(product.id)) {
        showToast(`Removed from Wishlist`);
        return prev.filter(id => id !== product.id);
      } else {
        showToast(`Saved "${product.title}" to Wishlist!`);
        return [...prev, product.id];
      }
    });
  };

  // Filter products by search query
  const displayedProducts = PRODUCTS.filter(p => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return p.title.toLowerCase().includes(q) || 
           p.subtitle.toLowerCase().includes(q) || 
           p.category.toLowerCase().includes(q);
  });

  const wishlistProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 selection:bg-rose-500 selection:text-white font-sans">
      
      {/* 1. Live Gold Rate & Pincode Ticker */}
      <TopTicker />

      {/* 2. Main Luxury Header & Navigation */}
      <Navbar
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenTryAtHome={() => {
          setTryAtHomeProduct(null);
          setIsTryAtHomeOpen(true);
        }}
        onOpenVideoCall={() => handleOpenVideoCall(null)}
        onOpenScheme={() => {
          const schemeElem = document.getElementById('scheme-section');
          if (schemeElem) {
            schemeElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const gridElem = document.getElementById('catalog-section');
          if (gridElem) {
            gridElem.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 3. Hero Carousel (Apple iOS-style Crossfade) */}
        <HeroCarousel
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenTryAtHome={() => {
            setTryAtHomeProduct(null);
            setIsTryAtHomeOpen(true);
          }}
        />

        {/* 4. Shop by Category Grid */}
        <CategoryGrid
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
          activeCategory={activeCategory}
        />

        {/* 5. BlueStone Trendspotting Feature Collection */}
        <Trendspotting
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 6. Video Shopping • Watch & Buy (Live Instagram Reels) */}
        <VideoShopping
          onQuickView={(prod, metal, karat, price) => {
            setQuickViewData({ prod, metal, karat, price });
          }}
          onOpenTryAtHome={(prod) => {
            setTryAtHomeProduct(prod);
            setIsTryAtHomeOpen(true);
          }}
          onBookVideoCall={handleOpenVideoCall}
        />

        {/* 7. BlueStone Circular Stories Category Rail ("Recommended for you" - Screenshot 1) */}
        <div id="catalog-section">
          <RecommendedCategoryRail
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />

          {/* Product Catalog & Showcase with 16 Categories & Real BlueStone Prices */}
          <ProductGrid
            products={displayedProducts}
            onQuickView={(prod, metal, karat, price) => {
              setQuickViewData({ prod, metal, karat, price });
            }}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlistIds}
            onOpenTryAtHome={(prod) => {
              setTryAtHomeProduct(prod);
              setIsTryAtHomeOpen(true);
            }}
            onBookVideoCall={handleOpenVideoCall}
            activeCategory={activeCategory}
            onSelectCategory={(catId) => setActiveCategory(catId)}
          />
        </div>

        {/* 8. Shop By Material & Karat */}
        <ShopByMaterial
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 9. 24K & 22K Gold Coins Bullion Lounge */}
        <GoldCoinsShowcase 
          onAddToCart={handleAddToCart}
        />

        {/* 10. BlueStone 10+1 Gold Scheme Interactive Calculator */}
        <div id="scheme-section">
          <GoldSchemeCalculator 
            onOpenNotification={showToast}
          />
        </div>

        {/* 11. Brand Omnichannel Presence & App Download Banner */}
        <BrandOmnichannelStory
          onOpenScheme={() => {
            const el = document.getElementById('scheme-section');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenTryAtHome={() => {
            setTryAtHomeProduct(null);
            setIsTryAtHomeOpen(true);
          }}
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 12. Trust Pillars & Certifications (BIS 916, GIA, IGI) */}
        <TrustBadges />

        {/* 13. Customer Reviews & Instagram UGC Showcase */}
        <ClientReviews />

        {/* 14. Press & Media Spotlight */}
        <PressMedia />

        {/* 15. SEO City Directory & Popular Searches Index */}
        <SeoCityDirectory
          onSelectCategory={(catId) => {
            setActiveCategory(catId);
            const gridElem = document.getElementById('catalog-section');
            if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

      </main>

      {/* 16. Luxury 5-Column BlueStone Footer */}
      <Footer
        onOpenScheme={() => {
          const el = document.getElementById('scheme-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenTryAtHome={() => {
          setTryAtHomeProduct(null);
          setIsTryAtHomeOpen(true);
        }}
        onOpenVideoCall={() => handleOpenVideoCall(null)}
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const gridElem = document.getElementById('catalog-section');
          if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* 10. Sticky Bottom Navigation for Mobile Devices */}
      <BottomNav
        onSelectCategory={(catId) => {
          setActiveCategory(catId);
          const gridElem = document.getElementById('catalog-section');
          if (gridElem) gridElem.scrollIntoView({ behavior: 'smooth' });
        }}
        activeCategory={activeCategory}
        onOpenTryAtHome={() => {
          setTryAtHomeProduct(null);
          setIsTryAtHomeOpen(true);
        }}
        onOpenScheme={() => {
          const el = document.getElementById('scheme-section');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={totalCartCount}
        wishlistCount={wishlistIds.length}
      />

      {/* Modals & Slide-over Drawers */}

      {/* Quick View Modal */}
      {quickViewData && (
        <QuickViewModal
          product={quickViewData.prod}
          initialMetal={quickViewData.metal}
          initialKarat={quickViewData.karat}
          onClose={() => setQuickViewData(null)}
          onAddToCart={handleAddToCart}
          onOpenTryAtHome={(prod) => {
            setTryAtHomeProduct(prod);
            setIsTryAtHomeOpen(true);
          }}
        />
      )}

      {/* Try At Home Modal */}
      {isTryAtHomeOpen && (
        <TryAtHomeModal
          product={tryAtHomeProduct}
          onClose={() => {
            setIsTryAtHomeOpen(false);
            setTryAtHomeProduct(null);
          }}
        />
      )}

      {/* Live Video Call Appointment Modal */}
      <VideoCallModal
        isOpen={isVideoCallOpen}
        onClose={() => {
          setIsVideoCallOpen(false);
          setVideoCallProduct(null);
        }}
        product={videoCallProduct}
      />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedCheckout={(total) => {
          setCheckoutTotal(total);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Stripe-Style Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        totalAmount={checkoutTotal}
        onOrderComplete={() => {
          setCartItems([]);
          showToast('Order confirmed successfully!');
        }}
      />

      {/* Wishlist Modal */}
      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={(id) => handleToggleWishlist({ id, title: 'Item' })}
      />

      {/* Floating Apple-Style Toast Feedback */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-neutral-900 text-white text-xs font-semibold py-2.5 px-4 shadow-xl border border-neutral-700 flex items-center gap-2 animate-slide-down" style={{ borderRadius: 'var(--radius-xs)' }}>
          <CheckCircle2 size={16} className="text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
