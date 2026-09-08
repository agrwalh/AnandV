import React, { useState } from 'react';
import { Play, Pause, ShoppingBag, Sparkles, Volume2, VolumeX, Eye } from 'lucide-react';

const REELS = [
  {
    id: 'reel-1',
    title: 'Celestia Rose Diamond Solitaire',
    price: 84900,
    karat: '18K Rose Gold',
    badge: 'TRENDING REEL',
    views: '24.8K',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-putting-on-a-gold-ring-43301-large.mp4',
    poster: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80',
    productId: 'avj-101'
  },
  {
    id: 'reel-2',
    title: 'Royal Noor Jhumka Cascades',
    price: 68500,
    karat: '22K BIS Hallmark',
    badge: 'WEDDING EDIT',
    views: '41.2K',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-woman-holding-a-gold-necklace-43303-large.mp4',
    poster: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80',
    productId: 'avj-103'
  },
  {
    id: 'reel-3',
    title: 'Imperial Polki Diamond Choker',
    price: 195000,
    karat: '22K Heritage Kundan',
    badge: 'COUTURE',
    views: '58.9K',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-woman-wearing-a-diamond-necklace-43299-large.mp4',
    poster: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',
    productId: 'avj-104'
  },
  {
    id: 'reel-4',
    title: 'Aura Petite Diamond Tennis Bracelet',
    price: 92400,
    karat: '18K White Gold',
    badge: 'DAILY LUXURY',
    views: '19.4K',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-woman-trying-on-a-diamond-bracelet-43302-large.mp4',
    poster: 'https://images.unsplash.com/photo-1611591475847-5120a169b910?auto=format&fit=crop&w=600&q=80',
    productId: 'avj-105'
  }
];

export default function VideoShopping({ onQuickView, onOpenTryAtHome, onBookVideoCall }) {
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (id) => {
    setActiveVideoId(activeVideoId === id ? null : id);
  };

  return (
    <section className="py-14 sm:py-18 bg-neutral-900 text-white border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-bold tracking-wider rounded-full mb-2">
              <Sparkles size={13} />
              <span>WATCH & BUY • INSTA REELS</span>
            </div>
            <h2 className="font-playfair italic text-3xl sm:text-4xl font-bold">
              Shop The Live Looks
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md font-sans">
            See how our mastercraft jewellery glistens and moves in real life on real muses before choosing your signature piece.
          </p>
        </div>

        {/* 4 Vertical 9:16 Video Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {REELS.map((reel) => {
            const isPlaying = activeVideoId === reel.id;

            return (
              <div
                key={reel.id}
                className="group relative rounded-2xl overflow-hidden bg-neutral-800 border border-neutral-700/80 shadow-2xl transition-all duration-300 hover:shadow-rose-950/40 hover:-translate-y-1.5 flex flex-col justify-end"
                style={{ height: '460px' }}
              >
                {/* Media (Video or Poster) */}
                {isPlaying ? (
                  <video
                    src={reel.videoUrl}
                    poster={reel.poster}
                    autoPlay
                    loop
                    playsInline
                    muted={isMuted}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={reel.poster}
                    alt={reel.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Dark Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent opacity-90" />

                {/* Top Badge & Sound Controls */}
                <div className="absolute top-3 inset-x-3 flex items-center justify-between z-10">
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-neutral-900/80 backdrop-blur-md text-white border border-neutral-700 rounded-full flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    {reel.badge}
                  </span>

                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-neutral-300 bg-neutral-900/80 px-2 py-1 rounded-full backdrop-blur-md flex items-center gap-1">
                      <Eye size={11} />
                      {reel.views}
                    </span>

                    {isPlaying && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMuted(!isMuted);
                        }}
                        className="p-1.5 rounded-full bg-neutral-900/80 backdrop-blur-md hover:bg-neutral-800 text-white cursor-pointer"
                      >
                        {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
                      </button>
                    )}
                  </div>
                </div>

                {/* Center Play / Pause Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <button
                    onClick={() => togglePlay(reel.id)}
                    className="pointer-events-auto p-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/40 hover:scale-110 hover:bg-white hover:text-neutral-900 transition-all duration-300 shadow-xl cursor-pointer"
                    aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="translate-x-0.5" />}
                  </button>
                </div>

                {/* Bottom Product Card Details & CTAs */}
                <div className="relative z-10 p-4">
                  <span className="text-[11px] font-semibold text-rose-400 block mb-0.5">
                    {reel.karat}
                  </span>
                  <h3 className="font-playfair font-bold text-sm sm:text-base text-white line-clamp-1">
                    {reel.title}
                  </h3>
                  
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="font-sans text-lg font-bold text-white">
                      ₹{reel.price.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[10px] text-neutral-400 line-through">
                      ₹{Math.round(reel.price * 1.15).toLocaleString('en-IN')}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-3 space-y-1.5">
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onOpenTryAtHome({ id: reel.productId, title: reel.title, basePrice: reel.price })}
                        className="py-2 text-[11px] font-bold text-neutral-200 bg-neutral-800/90 hover:bg-neutral-700 border border-neutral-600 rounded-full transition-all cursor-pointer text-center"
                      >
                        Try at Home
                      </button>
                      
                      <button
                        onClick={() => onQuickView({ id: reel.productId, title: reel.title, basePrice: reel.price, category: 'solitaires' }, 'rose', '18K', reel.price)}
                        className="btn-stripe-primary py-2 text-[11px] font-bold rounded-full flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                      >
                        <ShoppingBag size={12} />
                        <span>View Piece</span>
                      </button>
                    </div>

                    {onBookVideoCall && (
                      <button
                        onClick={() => onBookVideoCall({ id: reel.productId, title: reel.title, basePrice: reel.price, discountOffer: 'Special Video Call Offer' })}
                        className="w-full py-1.5 text-[10.5px] font-bold text-rose-300 bg-rose-950/60 hover:bg-rose-900/60 border border-rose-700/60 rounded-full flex items-center justify-center gap-1 transition-all cursor-pointer"
                      >
                        <span>Book Live Video Preview</span>
                      </button>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
