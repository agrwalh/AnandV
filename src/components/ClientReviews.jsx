import { Star, CheckCircle, Camera, Sparkles } from 'lucide-react';
import { TESTIMONIALS } from '../data/products';

const INSTA_POSTS = [
  {
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    handle: "@ananya_couture",
    tag: "Solitaire Crown Ring"
  },
  {
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&w=600&q=80",
    handle: "@rohit_mehta_official",
    tag: "Men's Imperium Ring"
  },
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    handle: "@priya_weddings",
    tag: "Regal Heritage Choker"
  },
  {
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=600&q=80",
    handle: "@radhika_sparkles",
    tag: "Rose Gold Drops"
  }
];

export default function ClientReviews() {
  return (
    <section className="py-12 sm:py-16 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 text-xs font-bold text-rose-600 uppercase tracking-wider mb-1">
            <Sparkles size={13} />
            <span>REAL STORIES FROM CHERISHED CLIENTS</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-neutral-900">
            Celebrated by 50,000+ Patrons
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Rated 4.9/5 Across Google Reviews, Trustpilot & BlueStone Compare
          </p>
        </div>

        {/* 3 Review Cards - Apple Soft Modern Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
          {TESTIMONIALS.map((rev) => (
            <div
              key={rev.name}
              className="p-6 bg-white border border-neutral-200/90 hover:border-rose-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between rounded-2xl hover:-translate-y-1"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="font-playfair italic text-sm text-neutral-800 leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-neutral-900 flex items-center gap-1">
                    <span>{rev.name}</span>
                    <CheckCircle size={12} className="text-emerald-600" />
                  </h4>
                  <p className="text-[11px] text-neutral-400">{rev.city}</p>
                </div>
                <span className="text-[10px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 border border-rose-200" style={{ borderRadius: '2px' }}>
                  {rev.product}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram UGC Showcase */}
        <div className="pt-6 border-t border-neutral-200">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              <Camera size={20} className="text-rose-600" />
              <h3 className="font-playfair font-bold text-lg text-neutral-900">
                #ShineWithAnandV on Instagram
              </h3>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1"
            >
              <span>Follow @AnandVJewellers</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {INSTA_POSTS.map((post, idx) => (
              <div 
                key={idx}
                className="group relative overflow-hidden bg-neutral-100 border border-neutral-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300"
                style={{ paddingTop: '100%' }}
              >
                <img
                  src={post.image}
                  alt={post.tag}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-end text-white">
                  <p className="text-xs font-bold">{post.handle}</p>
                  <p className="text-[10px] text-rose-300">{post.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
