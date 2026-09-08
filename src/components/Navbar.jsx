import React, { useState } from 'react';
import { 
  Search, 
  ShoppingBag, 
  Heart, 
  Menu, 
  X, 
  Sparkles, 
  Video, 
  MapPin, 
  Clock, 
  User, 
  MoreVertical,
  ChevronRight,
  Plus,
  Minus,
  ExternalLink,
  Phone,
  Mail
} from 'lucide-react';

export default function Navbar({ 
  cartCount, 
  wishlistCount, 
  onOpenCart, 
  onOpenWishlist, 
  onOpenTryAtHome, 
  onOpenVideoCall,
  onOpenScheme,
  onSelectCategory,
  activeCategory,
  searchQuery,
  setSearchQuery
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'scheme' | 'all' | 'more' | null
  const [moreAccordion, setMoreAccordion] = useState({
    customerDelight: true,
    aboutUs: false,
    policies: false,
    confidence: false,
    guide: false
  });

  const toggleAccordion = (key) => {
    setMoreAccordion((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-neutral-200 transition-all font-sans">
      
      {/* 1. Main Header Row (BlueStone Top Row) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20 gap-4 md:gap-6">
          
          {/* Mobile Hamburger Toggle */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-800 hover:text-rose-600 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo Branding (BlueStone + Anand V Luxury Monogram) */}
          <div 
            onClick={() => onSelectCategory('all')} 
            className="cursor-pointer flex items-center gap-2.5 select-none py-1"
          >
            <div className="flex items-center">
              {/* Monogram AV */}
              <div className="w-10 h-10 flex items-center justify-center bg-[#061d33] text-white font-cinzel font-extrabold text-xl tracking-tighter rounded-xl shadow-sm">
                <span>A</span><span className="text-rose-400 -ml-0.5">V</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-cinzel text-lg sm:text-2xl font-bold tracking-[0.2em] text-[#061d33]">
                ANAND <span className="text-rose-600">V</span>
              </span>
              <span className="text-[8.5px] tracking-[0.35em] text-neutral-400 font-semibold uppercase -mt-0.5">
                JEWELLERS • ESTD 1988
              </span>
            </div>
          </div>

          {/* BlueStone Wide Search Bar - Apple Soft Pill */}
          <div className="hidden md:flex flex-1 max-w-xl mx-2 relative">
            <div className="w-full flex items-center bg-neutral-50/90 border border-neutral-300/80 hover:border-neutral-400 focus-within:border-rose-500 focus-within:bg-white focus-within:shadow-md rounded-full px-1.5 transition-all">
              <div className="pl-3.5 pr-2 text-neutral-400">
                <Search size={17} />
              </div>
              <input
                type="text"
                placeholder="Search for jewellery, solitaires, gold coins..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pr-4 text-xs sm:text-sm bg-transparent text-neutral-800 placeholder-neutral-400 focus:outline-none"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="pr-3 text-neutral-400 hover:text-neutral-700 text-xs font-semibold cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* BlueStone Right Utility Icons with Labels Underneath */}
          <div className="flex items-center gap-3 sm:gap-5 text-neutral-700">
            
            {/* Recently Viewed */}
            <button 
              onClick={() => onSelectCategory('all')}
              className="hidden xl:flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <Clock size={19} />
              <span className="text-[10.5px] font-medium whitespace-nowrap">Recently viewed</span>
            </button>

            {/* Video Call Cart */}
            <button 
              onClick={onOpenVideoCall}
              className="hidden lg:flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <Video size={19} />
              <span className="text-[10.5px] font-medium whitespace-nowrap">Video call</span>
            </button>

            {/* Find a Store */}
            <button 
              onClick={() => {
                const el = document.getElementById('catalog-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hidden lg:flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <MapPin size={19} />
              <span className="text-[10.5px] font-medium whitespace-nowrap">Find a store</span>
            </button>

            {/* Wishlist */}
            <button 
              onClick={onOpenWishlist}
              className="relative flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
              title="Wishlist"
            >
              <div className="relative">
                <Heart size={19} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[9.5px] font-bold text-white flex items-center justify-center bg-rose-600 rounded-full shadow-sm">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="text-[10.5px] font-medium whitespace-nowrap hidden sm:inline">Wishlist</span>
            </button>

            {/* Cart */}
            <button 
              onClick={onOpenCart}
              className="relative flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
              title="Cart"
            >
              <div className="relative">
                <ShoppingBag size={19} />
                <span className="absolute -top-1.5 -right-2 w-4 h-4 text-[9.5px] font-bold text-white flex items-center justify-center bg-rose-600 rounded-full shadow-sm">
                  {cartCount}
                </span>
              </div>
              <span className="text-[10.5px] font-medium whitespace-nowrap hidden sm:inline">Cart</span>
            </button>

            {/* Profile */}
            <button 
              onClick={onOpenTryAtHome}
              className="hidden sm:flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer"
            >
              <User size={19} />
              <span className="text-[10.5px] font-medium whitespace-nowrap">Profile</span>
            </button>

            {/* More with Exact BlueStone Dropdown (Screenshot 2) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('more')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => setActiveDropdown(activeDropdown === 'more' ? null : 'more')}
                className="hidden sm:flex flex-col items-center gap-0.5 text-neutral-600 hover:text-rose-600 transition-colors cursor-pointer py-1"
              >
                <MoreVertical size={19} />
                <span className="text-[10.5px] font-medium whitespace-nowrap">More</span>
              </button>

              {/* Exact Screenshot 2 Dropdown Menu */}
              {activeDropdown === 'more' && (
                <div 
                  className="absolute right-0 top-full mt-1 w-72 bg-white rounded-b-2xl shadow-2xl border border-neutral-200 z-50 text-neutral-800 text-xs overflow-hidden animate-slide-down"
                  style={{ minWidth: '280px' }}
                >
                  {/* 1. Customer Delight Accordion (Open by Default) */}
                  <div className="border-b border-neutral-100">
                    <button
                      onClick={() => toggleAccordion('customerDelight')}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-medium text-neutral-800 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-800">Customer Delight</span>
                      {moreAccordion.customerDelight ? (
                        <Minus size={15} className="text-neutral-500" />
                      ) : (
                        <Plus size={15} className="text-neutral-400" />
                      )}
                    </button>

                    {moreAccordion.customerDelight && (
                      <div className="px-5 pb-4 space-y-3.5 text-xs text-neutral-600 bg-neutral-50/50">
                        <a 
                          href="#contact" 
                          onClick={(e) => { e.preventDefault(); alert("Contact Us: 1800-419-0066 or cs@anandvjewellers.com"); }}
                          className="flex items-center justify-between hover:text-rose-600 transition-colors group cursor-pointer pt-1"
                        >
                          <span>Contact Us</span>
                          <ExternalLink size={13} className="text-neutral-400 group-hover:text-rose-600 transition-colors" />
                        </a>

                        <a 
                          href="#faq" 
                          onClick={(e) => { e.preventDefault(); alert("Frequently Asked Questions regarding 30-Day Returns, Certifications & Gold Schemes"); }}
                          className="flex items-center justify-between hover:text-rose-600 transition-colors group cursor-pointer"
                        >
                          <span>Frequently Asked Questions</span>
                          <ExternalLink size={13} className="text-neutral-400 group-hover:text-rose-600 transition-colors" />
                        </a>

                        <a 
                          href="tel:18004190066" 
                          className="flex items-center justify-between hover:text-rose-600 transition-colors group cursor-pointer"
                        >
                          <div>
                            <span className="block font-medium text-neutral-800">1800-419-0066</span>
                            <span className="text-[11px] text-neutral-400 block -mt-0.5">(9 am-10 pm)</span>
                          </div>
                          <ExternalLink size={13} className="text-neutral-400 group-hover:text-rose-600 transition-colors" />
                        </a>

                        <a 
                          href="mailto:cs@anandvjewellers.com" 
                          className="flex items-center justify-between hover:text-rose-600 transition-colors group cursor-pointer"
                        >
                          <div>
                            <span className="block font-medium text-neutral-800">cs@anandvjewellers.com</span>
                            <span className="text-[11px] text-neutral-400 block -mt-0.5">(9 am-10 pm)</span>
                          </div>
                          <ExternalLink size={13} className="text-neutral-400 group-hover:text-rose-600 transition-colors" />
                        </a>
                      </div>
                    )}
                  </div>

                  {/* 2. About Us Accordion */}
                  <div className="border-b border-neutral-100">
                    <button
                      onClick={() => toggleAccordion('aboutUs')}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-medium text-neutral-800 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-800">About Us</span>
                      {moreAccordion.aboutUs ? (
                        <Minus size={15} className="text-neutral-500" />
                      ) : (
                        <Plus size={15} className="text-neutral-400" />
                      )}
                    </button>

                    {moreAccordion.aboutUs && (
                      <div className="px-5 pb-3.5 space-y-2 text-xs text-neutral-600 bg-neutral-50/50">
                        <p className="hover:text-rose-600 cursor-pointer">Who we are?</p>
                        <p className="hover:text-rose-600 cursor-pointer">Investor Relations</p>
                        <p className="hover:text-rose-600 cursor-pointer">Design Philosophy</p>
                      </div>
                    )}
                  </div>

                  {/* 3. Policies Accordion */}
                  <div className="border-b border-neutral-100">
                    <button
                      onClick={() => toggleAccordion('policies')}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-medium text-neutral-800 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-800">Policies</span>
                      {moreAccordion.policies ? (
                        <Minus size={15} className="text-neutral-500" />
                      ) : (
                        <Plus size={15} className="text-neutral-400" />
                      )}
                    </button>

                    {moreAccordion.policies && (
                      <div className="px-5 pb-3.5 space-y-2 text-xs text-neutral-600 bg-neutral-50/50">
                        <p className="hover:text-rose-600 cursor-pointer">30-Day Returns</p>
                        <p className="hover:text-rose-600 cursor-pointer">Lifetime Exchange & Buy back</p>
                        <p className="hover:text-rose-600 cursor-pointer">Privacy Policy</p>
                        <p className="hover:text-rose-600 cursor-pointer">Terms & Conditions</p>
                        <p className="hover:text-rose-600 cursor-pointer">Fraud Warning Disclaimer</p>
                      </div>
                    )}
                  </div>

                  {/* 4. Shop With Confidence Accordion */}
                  <div className="border-b border-neutral-100">
                    <button
                      onClick={() => toggleAccordion('confidence')}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-medium text-neutral-800 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-800">Shop With Confidence</span>
                      {moreAccordion.confidence ? (
                        <Minus size={15} className="text-neutral-500" />
                      ) : (
                        <Plus size={15} className="text-neutral-400" />
                      )}
                    </button>

                    {moreAccordion.confidence && (
                      <div className="px-5 pb-3.5 space-y-2 text-xs text-neutral-600 bg-neutral-50/50">
                        <p className="hover:text-rose-600 cursor-pointer">100% Certified Diamonds</p>
                        <p className="hover:text-rose-600 cursor-pointer">BIS 916 Hallmark Gold</p>
                        <p className="hover:text-rose-600 cursor-pointer">Free Insured Express Shipping</p>
                      </div>
                    )}
                  </div>

                  {/* 5. Jewellery Guide Accordion */}
                  <div>
                    <button
                      onClick={() => toggleAccordion('guide')}
                      className="w-full px-5 py-3.5 flex items-center justify-between text-left font-medium text-neutral-800 hover:text-rose-600 transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-neutral-800">Jewellery Guide</span>
                      {moreAccordion.guide ? (
                        <Minus size={15} className="text-neutral-500" />
                      ) : (
                        <Plus size={15} className="text-neutral-400" />
                      )}
                    </button>

                    {moreAccordion.guide && (
                      <div className="px-5 pb-3.5 space-y-2 text-xs text-neutral-600 bg-neutral-50/50">
                        <p className="hover:text-rose-600 cursor-pointer">Why Buy From Us?</p>
                        <p className="hover:text-rose-600 cursor-pointer">Our Certifications</p>
                        <p className="hover:text-rose-600 cursor-pointer">Press Room</p>
                        <p className="hover:text-rose-600 cursor-pointer">Corporate Gifting</p>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3 pt-1">
          <div className="flex items-center bg-neutral-50 border border-neutral-300 px-3 py-2" style={{ borderRadius: 'var(--radius-sm)' }}>
            <Search size={16} className="text-neutral-400 mr-2" />
            <input
              type="text"
              placeholder="Search diamonds, 22K gold, rings..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-transparent text-neutral-800 placeholder-neutral-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* 2. Second Dark Navy Blue Bar (BlueStone Signature #061d33) */}
      <div className="hidden lg:block bg-[#061d33] text-white text-xs font-semibold select-none relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-10">
            
            {/* Left Nav Menu Items */}
            <nav className="flex items-center gap-6 h-full">
              
              {/* 10+1 Monthly Plans (Interactive Hover Dropdown - Screenshot 2) */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('scheme')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={onOpenScheme}
                  className={`h-full flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeDropdown === 'scheme' ? 'text-rose-300' : 'text-white hover:text-rose-300'
                  }`}
                >
                  <span className="font-bold">10+1 Monthly Plans</span>
                </button>

                {/* Dropdown Menu (Exact Screenshot 2) */}
                {activeDropdown === 'scheme' && (
                  <div className="absolute top-full left-0 pt-1 z-50 animate-fade-in">
                    {/* Top White Pointer Arrow */}
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white ml-6"></div>
                    <div className="bg-white text-neutral-800 border border-neutral-200 shadow-xl w-48 p-2" style={{ borderRadius: 'var(--radius-xs)' }}>
                      <button
                        onClick={() => {
                          onOpenScheme();
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        Gold Mine
                      </button>
                      <div className="border-b border-dashed border-neutral-200 my-1"></div>
                      <button
                        onClick={() => {
                          onOpenScheme();
                          setActiveDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 text-xs font-semibold hover:bg-rose-50 hover:text-rose-600 transition-colors cursor-pointer"
                      >
                        Gold Reserve
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => onSelectCategory('all')} 
                className="hover:text-rose-300 transition-colors cursor-pointer whitespace-nowrap"
              >
                Watch Jewellery
              </button>

              <button 
                onClick={() => onSelectCategory('rings')} 
                className={`hover:text-rose-300 transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === 'rings' ? 'text-rose-400 font-bold' : ''
                }`}
              >
                Rings
              </button>

              <button 
                onClick={() => onSelectCategory('earrings')} 
                className={`hover:text-rose-300 transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === 'earrings' ? 'text-rose-400 font-bold' : ''
                }`}
              >
                Earrings
              </button>

              <button 
                onClick={() => onSelectCategory('necklaces')} 
                className={`hover:text-rose-300 transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === 'necklaces' ? 'text-rose-400 font-bold' : ''
                }`}
              >
                Pendants
              </button>

              <button 
                onClick={() => onSelectCategory('solitaires')} 
                className={`hover:text-rose-300 transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === 'solitaires' ? 'text-rose-400 font-bold' : ''
                }`}
              >
                Solitaires
              </button>

              {/* All Jewellery (Mega Menu Trigger - Screenshot 3) */}
              <div 
                className="relative h-full flex items-center"
                onMouseEnter={() => setActiveDropdown('all')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => onSelectCategory('all')}
                  className={`h-full flex items-center gap-1 font-bold transition-colors cursor-pointer ${
                    activeDropdown === 'all' ? 'text-rose-300' : 'text-white hover:text-rose-300'
                  }`}
                >
                  <span>All Jewellery</span>
                </button>

                {/* Massive 4-Column BlueStone Mega Menu (Exact Screenshot 3) */}
                {activeDropdown === 'all' && (
                  <div className="fixed left-0 right-0 top-[120px] pt-1 z-50 max-w-7xl mx-auto px-4 sm:px-6 animate-fade-in pointer-events-auto">
                    <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-b-[7px] border-b-white ml-[380px]"></div>
                    
                    <div className="bg-white text-neutral-800 border border-neutral-200 shadow-2xl p-8 grid grid-cols-4 gap-8" style={{ borderRadius: 'var(--radius-xs)' }}>
                      
                      {/* Column 1: Shop By Category */}
                      <div className="space-y-3">
                        <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                          Shop By Category
                        </h4>
                        <div className="grid grid-cols-1 gap-1 text-xs text-neutral-600">
                          {['Bangles', 'Bracelets', 'Earrings', 'Gold Chains', 'Gold Coins', 'Kadas', 'Mangalsutras'].map(item => (
                            <button key={item} onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600 transition-colors">
                              {item}
                            </button>
                          ))}
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600 flex items-center justify-between">
                            <span>Mangalsutra Bracelets</span>
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.2" style={{ borderRadius: '2px' }}>New</span>
                          </button>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                            Mangalsutra Chains
                          </button>
                          <button onClick={() => { onSelectCategory('necklaces'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                            Necklaces
                          </button>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                            Nose Pins
                          </button>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600 flex items-center justify-between">
                            <span>Nose Rings</span>
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.2" style={{ borderRadius: '2px' }}>New</span>
                          </button>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                            Pendants
                          </button>
                          <button onClick={() => { onSelectCategory('rings'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                            Rings
                          </button>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600 flex items-center justify-between">
                            <span>Charms</span>
                            <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.2" style={{ borderRadius: '2px' }}>New</span>
                          </button>
                        </div>
                      </div>

                      {/* Column 2: Men's, Kids, Platinum */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Men's Jewellery
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600 pt-2">
                            {['Bracelets', 'Studs', 'Kadas', 'Pendants', 'Rings', 'Cufflinks', 'Chains'].map(item => (
                              <button key={item} onClick={() => { onSelectCategory('mens'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Kids Jewellery
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600 pt-2">
                            <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Earrings</button>
                            <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Pendants</button>
                            <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Necklaces</button>
                            <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Bracelets</button>
                            <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600 flex items-center gap-1 col-span-2">
                              <span>Nazariyas</span>
                              <span className="bg-orange-500 text-white text-[9px] font-bold px-1.5 py-0.2" style={{ borderRadius: '2px' }}>New</span>
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Platinum Jewellery
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600 pt-2">
                            {['Rings', 'Earrings', 'Pendants', 'Chains'].map(item => (
                              <button key={item} onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                                {item}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Column 3: Gold Jewellery & Gemstone */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Gold Jewellery
                          </h4>
                          <div className="grid grid-cols-1 gap-1 text-xs text-neutral-600 pt-2">
                            {['Bangles', 'Bracelets', 'Chains', 'Earrings', 'Mangalsutras', 'Necklaces', 'Nose Pins', 'Pendants', 'Rings'].map(item => (
                              <button key={item} onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                                {item}
                              </button>
                            ))}
                          </div>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="mt-2 text-xs font-bold text-blue-900 hover:text-rose-600 flex items-center gap-1">
                            <span>View All</span>
                            <span className="text-[10px]">▶</span>
                          </button>
                        </div>

                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Gemstone Jewellery
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600 pt-2">
                            <button onClick={() => { onSelectCategory('rings'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Rings</button>
                            <button onClick={() => { onSelectCategory('earrings'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Earrings</button>
                          </div>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="mt-2 text-xs font-bold text-blue-900 hover:text-rose-600 flex items-center gap-1">
                            <span>View All</span>
                            <span className="text-[10px]">▶</span>
                          </button>
                        </div>
                      </div>

                      {/* Column 4: Diamond Jewellery & Pearl */}
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Diamond Jewellery
                          </h4>
                          <div className="grid grid-cols-1 gap-1 text-xs text-neutral-600 pt-2">
                            {['Bangles', 'Bracelets', 'Cufflinks', 'Earrings', 'Mangalsutras', 'Necklaces', 'Nose Pins', 'Pendants', 'Rings'].map(item => (
                              <button key={item} onClick={() => { onSelectCategory('solitaires'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">
                                {item}
                              </button>
                            ))}
                          </div>
                          <button onClick={() => { onSelectCategory('solitaires'); setActiveDropdown(null); }} className="mt-2 text-xs font-bold text-blue-900 hover:text-rose-600 flex items-center gap-1">
                            <span>View All</span>
                            <span className="text-[10px]">▶</span>
                          </button>
                        </div>

                        <div>
                          <h4 className="font-playfair font-bold text-sm text-[#061d33] border-b border-dashed border-neutral-200 pb-2">
                            Pearl Jewellery
                          </h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-neutral-600 pt-2">
                            <button onClick={() => { onSelectCategory('earrings'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Earrings</button>
                            <button onClick={() => { onSelectCategory('necklaces'); setActiveDropdown(null); }} className="text-left py-1 hover:text-rose-600">Necklaces</button>
                          </div>
                          <button onClick={() => { onSelectCategory('all'); setActiveDropdown(null); }} className="mt-2 text-xs font-bold text-blue-900 hover:text-rose-600 flex items-center gap-1">
                            <span>View All</span>
                            <span className="text-[10px]">▶</span>
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

            </nav>

            {/* Right Nav Menu Items (BlueStone: Gifts, Coins, Offers) */}
            <div className="flex items-center gap-6">
              <button 
                onClick={() => onSelectCategory('all')} 
                className="hover:text-rose-300 transition-colors cursor-pointer"
              >
                Gifts
              </button>
              
              <button 
                onClick={() => onSelectCategory('bangles')} 
                className="hover:text-rose-300 transition-colors cursor-pointer"
              >
                Coins
              </button>
              
              <button 
                onClick={onOpenScheme} 
                className="hover:text-rose-300 transition-colors cursor-pointer flex items-center gap-1 text-amber-300 font-bold"
              >
                <Sparkles size={12} className="text-amber-400" />
                <span>Offers</span>
                <span className="bg-rose-600 text-white text-[9px] px-1 py-0.2" style={{ borderRadius: '2px' }}>Save 20%</span>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Off-Canvas Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-right">
            
            {/* Drawer Header */}
            <div className="p-4 bg-[#061d33] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-rose-600 text-white font-cinzel font-bold text-base" style={{ borderRadius: '2px' }}>
                  AV
                </div>
                <span className="font-cinzel font-bold tracking-wider text-base">
                  ANAND V JEWELLERS
                </span>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 text-neutral-400 hover:text-white cursor-pointer"
              >
                <X size={22} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  BlueStone Signature Collections
                </p>

                {[
                  { id: 'all', label: 'All Jewellery' },
                  { id: 'rings', label: 'Rings & Solitaires' },
                  { id: 'earrings', label: 'Earrings' },
                  { id: 'necklaces', label: 'Necklaces & Pendants' },
                  { id: 'bangles', label: 'Bangles & Bracelets' },
                  { id: 'solitaires', label: 'Solitaire Lounge' },
                  { id: 'mens', label: "Men's Luxury" }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onSelectCategory(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2.5 text-xs font-semibold flex items-center justify-between border-b border-neutral-100 ${
                      activeCategory === item.id ? 'text-rose-600 font-bold bg-rose-50' : 'text-neutral-800'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={14} className="text-neutral-400" />
                  </button>
                ))}
              </div>

              {/* BlueStone Special Features in Drawer */}
              <div className="pt-4 border-t border-neutral-200 space-y-2">
                <p className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  BlueStone Special Schemes
                </p>

                <button
                  onClick={() => {
                    onOpenScheme();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 text-xs font-bold text-amber-900 bg-amber-50 border border-amber-200 flex items-center gap-2"
                  style={{ borderRadius: 'var(--radius-xs)' }}
                >
                  <Sparkles size={16} className="text-amber-600" />
                  <div>
                    <p>10+1 Monthly Swarna Scheme</p>
                    <p className="text-[10px] text-amber-700 font-normal">Pay 10 months, Anand V pays 11th!</p>
                  </div>
                </button>

                <button
                  onClick={() => {
                    onOpenTryAtHome();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-3 text-xs font-bold text-rose-900 bg-rose-50 border border-rose-200 flex items-center gap-2"
                  style={{ borderRadius: 'var(--radius-xs)' }}
                >
                  <Video size={16} className="text-rose-600" />
                  <div>
                    <p>Free Try at Home & Video Call</p>
                    <p className="text-[10px] text-rose-700 font-normal">Try up to 5 curated designs at doorstep</p>
                  </div>
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </header>
  );
}
