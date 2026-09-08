import React, { useState } from 'react';
import { Gem, Mail, Phone, MapPin, ShieldCheck, Heart, ArrowRight, CheckCircle2, CreditCard, Clock } from 'lucide-react';

export default function Footer({ onOpenScheme, onOpenTryAtHome, onOpenVideoCall, onSelectCategory }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#05111d] text-white pt-16 pb-28 lg:pb-16 border-t border-neutral-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Column 1: CUSTOMER DELIGHT (Exact BlueStone helpline) */}
          <div className="space-y-4">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider">
              Customer Delight
            </h4>

            <div className="space-y-2.5 text-xs text-neutral-300">
              <a href="tel:18004190066" className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <Phone size={15} className="text-rose-400 shrink-0" />
                <span className="font-bold text-sm text-white">1800-419-0066</span>
              </a>
              <p className="text-[11px] text-neutral-400 flex items-center gap-1">
                <Clock size={12} className="text-rose-400 shrink-0" />
                <span>9 am - 10 pm, 7 days a week</span>
              </p>

              <a href="mailto:cs@anandvjewellers.com" className="flex items-center gap-2 hover:text-rose-400 transition-colors">
                <Mail size={15} className="text-rose-400 shrink-0" />
                <span>cs@anandvjewellers.com</span>
              </a>

              <div className="pt-2">
                <button
                  onClick={onOpenVideoCall}
                  className="w-full py-2 px-3 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-full flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <span>Book Free Video Call</span>
                </button>
              </div>
            </div>

            <div className="pt-2 text-xs text-neutral-400 space-y-1.5">
              <p><button onClick={() => alert("Connecting to 24x7 Customer Helpdesk...")} className="hover:text-rose-400">Contact Us</button></p>
              <p><button onClick={() => alert("FAQ Section: 30-Day Returns, Certifications & Gold Schemes")} className="hover:text-rose-400">Frequently Asked Questions</button></p>
            </div>
          </div>

          {/* Column 2: POLICIES & WHO WE ARE */}
          <div className="space-y-3 text-xs">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider">
              Policies & About
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><button onClick={() => alert("Anand V Jewellers: Founded with a vision to redefine fine jewelry shopping across India.")} className="hover:text-rose-400 transition-colors">Who we are?</button></li>
              <li><button onClick={() => alert("Investor Relations: Anand V Jewellers Pvt. Ltd.")} className="hover:text-rose-400 transition-colors">Investor Relations</button></li>
              <li><button onClick={() => alert("Design Philosophy: Modern aesthetics, timeless heirloom heritage.")} className="hover:text-rose-400 transition-colors">Design Philosophy</button></li>
              <li><button onClick={onOpenScheme} className="hover:text-amber-400 text-amber-300 font-semibold transition-colors">10+1 Swarna Savings Scheme</button></li>
              <li><button onClick={() => alert("Corporate Gifting & Customized Bulk Orders")} className="hover:text-rose-400 transition-colors">Corporate Gifting</button></li>
              <li><button onClick={() => alert("Official Press Room & Media Enquiries")} className="hover:text-rose-400 transition-colors">Press Room</button></li>
            </ul>
          </div>

          {/* Column 3: SHOP WITH CONFIDENCE */}
          <div className="space-y-3 text-xs">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider">
              Shop With Confidence
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><span className="text-emerald-400 font-semibold">✓ 30-Day Free Returns</span></li>
              <li><span className="text-emerald-400 font-semibold">✓ Lifetime Exchange & Buyback</span></li>
              <li><span className="text-neutral-300">Big Gold Upgrade (1% Extra)</span></li>
              <li><span className="text-neutral-300">100% Certified Diamonds</span></li>
              <li><span className="text-neutral-300">BIS 916 Hallmarked Gold</span></li>
              <li><span className="text-neutral-400">Privacy Policy</span></li>
              <li><span className="text-neutral-400">Terms & Conditions</span></li>
              <li><span className="text-neutral-400">Fraud Warning Disclaimer</span></li>
            </ul>
          </div>

          {/* Column 4: JEWELLERY GUIDE */}
          <div className="space-y-3 text-xs">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider">
              Jewellery Guide
            </h4>
            <ul className="space-y-2 text-neutral-400">
              <li><button onClick={() => alert("Why Buy From Us: 100% Certified, Transparent Pricing, Zero Making Deductions")} className="hover:text-rose-400 transition-colors">Why Buy From Us?</button></li>
              <li><button onClick={() => alert("Our Certifications: GIA, IGI, BIS Hallmark 916 with HUID")} className="hover:text-rose-400 transition-colors">Our Certifications</button></li>
              <li><button onClick={onOpenTryAtHome} className="hover:text-rose-400 text-rose-300 font-semibold transition-colors">Try at Home Free Trial</button></li>
              <li><button onClick={() => onSelectCategory('solitaires')} className="hover:text-rose-400 transition-colors">Solitaire Buying Guide</button></li>
              <li><button onClick={() => onSelectCategory('rings')} className="hover:text-rose-400 transition-colors">Ring Size Measuring Guide</button></li>
              <li><button onClick={() => alert("Read verified reviews from our 50,000+ patrons.")} className="hover:text-rose-400 transition-colors">Client Testimonials</button></li>
            </ul>
          </div>

          {/* Column 5: NEWSLETTER & APP DOWNLOAD */}
          <div className="space-y-4 text-xs">
            <h4 className="font-playfair font-bold text-sm text-white uppercase tracking-wider">
              Subscribe & Save
            </h4>
            <p className="text-neutral-400 leading-relaxed text-[11.5px]">
              Subscribe to our newsletter for exclusive haute jewellery drops & ₹2,500 off on your first order.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-center rounded-2xl">
                <CheckCircle2 size={16} className="mx-auto mb-1" />
                <span>Voucher Code sent to your inbox!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-neutral-900 border border-neutral-700 text-white px-3.5 py-2.5 text-xs focus:outline-none focus:border-rose-500 placeholder-neutral-500 font-sans rounded-l-full"
                  />
                  <button
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2.5 text-xs font-bold cursor-pointer transition-colors rounded-r-full"
                  >
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            )}

            <div className="pt-2">
              <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                We Accept 100% Secure Payments:
              </span>
              <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-300">
                <span className="bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-md">UPI (GPay/PhonePe)</span>
                <span className="bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-md">Visa / Mastercard</span>
                <span className="bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-md">Net Banking</span>
                <span className="bg-neutral-900 border border-neutral-700 px-2 py-1 rounded-md">Amex</span>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Anand V Jewellers Pvt. Ltd. All Rights Reserved. CIN: L72900KA2011PLC059678</p>
          <div className="flex items-center gap-4 text-[11.5px]">
            <span>BIS Hallmark 916</span>
            <span>•</span>
            <span>GIA Certified</span>
            <span>•</span>
            <span>IGI Graded</span>
            <span>•</span>
            <span>SSL 256-Bit Encrypted</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
