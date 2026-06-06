/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, X, Coffee } from 'lucide-react';
import { IMAGE_ASSETS } from '../types';
import BrandLogo from './BrandLogo';

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleOpenMenu = () => {
      setIsMenuOpen(true);
    };
    window.addEventListener('open-menu-modal', handleOpenMenu);
    return () => {
      window.removeEventListener('open-menu-modal', handleOpenMenu);
    };
  }, []);

  const handleBookNow = () => {
    // Launch event booking modal via custom event listener without scrolling
    window.dispatchEvent(new CustomEvent('open-booking-modal'));
  };

  return (
    <section 
      id="home" 
      className="relative overflow-hidden bg-cream-200 py-20 md:py-28 lg:py-32 border-b border-sage-100/30"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Typography & Action Items */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Unified Country Brand Heading and Slogan */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#1b3f22] leading-tight">
                One-Stop Post Garden
              </h1>
              <p className="font-sans text-base sm:text-lg text-sage-850 font-bold italic leading-relaxed pl-2.5 pt-2">
                Fresh bakes · Post · Community
              </p>
            </motion.div>
 
            {/* Separator */}
            <div className="h-[2px] w-12 bg-sage-300 my-4" />
 
            {/* Precise Description */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-sans text-sm sm:text-base text-sage-800 leading-relaxed"
              id="hero-desc"
            >
              Your local <span className="font-semibold text-sage-950">village café</span> and welcoming hub for everyday <span className="font-semibold text-sage-950">local essentials</span>, reliable <span className="font-semibold text-sage-950">post office services</span>, and relaxed <span className="font-semibold text-sage-950">garden café</span> moments.
            </motion.p>
 
            {/* Action Buttons (Enlarged and Interactive) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 pt-6 pl-0 pb-2"
              id="hero-buttons"
            >
              <button 
                onClick={handleBookNow}
                className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-[#1b3f22] hover:bg-[#142f19] transition-colors px-10 py-4.5 text-base sm:text-lg font-bold text-cream-100 shadow-md transform hover:-translate-y-0.5 active:translate-y-0 duration-200 border-none outline-none focus:outline-none"
                id="btn-preorder"
              >
                <span>Book Now</span>
                <span className="text-base sm:text-lg">→</span>
              </button>
            </motion.div>


 
          </div>
  
          {/* Right Column: High Clarity Storefront framed Image with rounded border and thin elegant white border packaging */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col items-center justify-center space-y-4"
          >
            <div className="relative w-full max-w-[620px] rounded-2xl bg-white p-2 border border-cream-200 shadow-xl overflow-hidden group">
               {/* Outer border wrapper with thinner padding */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden border border-slate-100">
                <img 
                  src={IMAGE_ASSETS.hero} 
                  alt="Atmospheric British One-Stop Post Garden storefront" 
                  className="w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover:scale-[1.01]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Today's Menu Pop-up Modal (Matching provided screenshot) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur/Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-[480px] bg-[#faf8f5] rounded-3xl p-6 sm:p-8 shadow-2xl border border-sage-200/40 text-[#1e3422] z-10"
              id="today-menu-modal"
            >
              {/* Top-Right Absolute Close Cross Icon */}
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-sage-100/50 transition-colors text-sage-850"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 stroke-[2.5px]" />
              </button>

              <div className="text-left">
                {/* Coffee cup icon within soft brown rounded background */}
                <div className="w-14 h-14 bg-[#9c8470] flex items-center justify-center rounded-2xl shadow-inner-sm text-cream-50">
                  <Coffee className="h-7 w-7 text-white stroke-[2.5px]" />
                </div>

                {/* Main Heading & Subtitle */}
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e3422] tracking-tight mt-6 leading-tight">
                  Today's Village Garden Café Menu
                </h3>
                <p className="font-sans text-[11px] font-extrabold tracking-wider text-[#9c8470] mt-3.5 uppercase">
                  FRESHLY BAKED IN MEDBOURNE EVERY MORNING
                </p>

                {/* Scrollable Categories wrapper */}
                <div className="mt-8 space-y-6 max-h-[50vh] overflow-y-auto pr-1">
                  
                  {/* Category: Bakery Specials */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#1a331e] border-b border-[#e5dfd5] pb-2 text-left">
                      Bakery Specials
                    </h4>
                    <ul className="space-y-1.5 pt-1">
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Artisanal Sourdough loaf</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£4.20</span>
                      </li>
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Medbourne Heritage Scone with Jam & Clotted Cream</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£3.50</span>
                      </li>
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Rosemary & Olive Oil Focaccia slice</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£3.00</span>
                      </li>
                    </ul>
                  </div>

                  {/* Category: Hot Drinks */}
                  <div className="space-y-4">
                    <h4 className="font-serif text-lg font-bold text-[#1a331e] border-b border-[#e5dfd5] pb-2 text-left">
                      Hot Drinks
                    </h4>
                    <ul className="space-y-1.5 pt-1">
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Yorkshire Gold Pot of Tea</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£2.80</span>
                      </li>
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Local Roasted Flat White</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£3.20</span>
                      </li>
                      <li className="flex justify-between items-baseline font-sans py-1">
                        <span className="font-medium text-sm sm:text-base text-sage-900 text-left">Organic Lavender Infused Latte</span>
                        <span className="font-semibold text-sm sm:text-base text-sage-950 pl-4 whitespace-nowrap">£3.80</span>
                      </li>
                    </ul>
                  </div>

                </div>

                {/* Pre-order action CTA button */}
                <button 
                  type="button"
                  className="w-full mt-8 py-4 px-6 rounded-full bg-[#4e6551]/90 text-white font-bold text-base shadow-sm border-none outline-none cursor-default"
                >
                  Pre-order Items on Today's Menu
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
