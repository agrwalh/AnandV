import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck, Gem, Sparkles, ArrowRight, Video } from 'lucide-react';

const SLIDES = [
  {
    id: 1,
    tag: "EXCLUSIVE LAUNCH • CELESTIA COLLECTION",
    title: "Timeless Solitaires, Crafted For Forever",
    highlight: "GIA & IGI Certified 4K Diamonds",
    description: "Discover Anand V Jewellers signature solitaire engagement rings and eternity bands in 18K & 22K Rose Gold.",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Explore Solitaire Lounge",
    category: "rings",
    accentColor: "#e43d70"
  },
  {
    id: 2,
    tag: "ROYAL HERITAGE BRIDAL EDIT",
    title: "Grandeur of 22K Pure Hallmarked Gold",
    highlight: "Handcrafted Uncut Polki & Kundan",
    description: "Every stroke narrates an imperial legacy. Pure BIS 916 laser hallmarked gold chokers, necklaces, and heirloom earrings.",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "View Bridal Trousseau",
    category: "necklaces",
    accentColor: "#c99b27"
  },
  {
    id: 3,
    tag: "SIGNATURE BLUESTONE INSPIRATION",
    title: "Modern Rose Gold & Diamond Daily Glam",
    highlight: "Lightweight Luxury For Work & Soirées",
    description: "Designed for comfort, engineered for brilliance. Chic diamond drop earrings, tennis bracelets, and delicate cuffs.",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Shop Everyday Glam",
    category: "earrings",
    accentColor: "#e43d70"
  },
  {
    id: 4,
    tag: "THE ROMANTIC CURATION • BLUESTONE EDIT",
    title: "Forever Entwined Heart Solitaires",
    highlight: "Pink Tourmalines & Hearts & Arrows Cut Diamonds",
    description: "Celebrate eternal devotion with Anand V's signature pavé solitaire earrings and pendants in 18K Blush Rose Gold.",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1800&q=85",
    primaryCta: "Shop Romantic Edits",
    category: "rings",
    accentColor: "#be185d"
  }
];

export default function HeroCarousel({ onSelectCategory, onOpenTryAtHome }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const slide = SLIDES[currentSlide];

  return (
    <section 
      className="relative bg-neutral-950 text-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ minHeight: '480px' }}
    >
      {/* Background Image Container with Crossfade */}
      {SLIDES.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{ transitionProperty: 'opacity, transform' }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover object-center brightness-[0.68]"
            loading={idx === 0 ? "eager" : "lazy"}
          />
          {/* Gradient Overlay for crisp Stripe-like typography readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/60 to-transparent"></div>
        </div>
      ))}

      {/* Hero Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28 flex flex-col justify-center min-h-[480px] lg:min-h-[560px]">
        <div className="max-w-2xl space-y-4 sm:space-y-6">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/25 text-rose-300 text-xs font-bold tracking-wider rounded-full shadow-sm">
            <Sparkles size={13} className="text-rose-400" />
            <span>{slide.tag}</span>
          </div>

          {/* Heading */}
          <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            {slide.title}
          </h1>

          <p className="font-playfair italic text-lg sm:text-2xl text-rose-200 font-medium">
            {slide.highlight}
          </p>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans max-w-lg">
            {slide.description}
          </p>

          {/* Action Buttons - Apple Soft Modern Pills */}
          <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
            <button
              onClick={() => onSelectCategory(slide.category)}
              className="btn-stripe-primary text-sm py-3 px-7 rounded-full shadow-lg cursor-pointer"
            >
              <span>{slide.primaryCta}</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenTryAtHome}
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm px-6 py-3 border border-white/30 backdrop-blur-md transition-all cursor-pointer rounded-full shadow-md hover:scale-105"
            >
              <Video size={16} className="text-rose-300" />
              <span>Book Virtual Video Trial</span>
            </button>
          </div>

          {/* Trust Pillars Floating Badges */}
          <div className="pt-4 sm:pt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-neutral-300 border-t border-white/15">
            <div className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-400" />
              <span>100% Certified (GIA/IGI)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Gem size={16} className="text-amber-400" />
              <span>BIS 916 Laser Hallmarked</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles size={16} className="text-rose-400" />
              <span>Lifetime Exchange Guarantee</span>
            </div>
          </div>

        </div>
      </div>

      {/* Slide Navigation Buttons */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/60 hover:bg-neutral-900/90 text-white border border-neutral-700 backdrop-blur-sm transition-all cursor-pointer hidden sm:flex items-center justify-center"
        style={{ borderRadius: 'var(--radius-xs)' }}
        aria-label="Previous Slide"
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % SLIDES.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 bg-neutral-900/60 hover:bg-neutral-900/90 text-white border border-neutral-700 backdrop-blur-sm transition-all cursor-pointer hidden sm:flex items-center justify-center"
        style={{ borderRadius: 'var(--radius-xs)' }}
        aria-label="Next Slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-1.5 transition-all cursor-pointer ${
              idx === currentSlide ? 'w-8 bg-rose-500' : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            style={{ borderRadius: '1px' }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
