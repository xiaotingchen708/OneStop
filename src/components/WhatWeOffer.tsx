/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Store, Mail, Croissant, Coffee } from 'lucide-react';
import { OFFER_ITEMS, IMAGE_ASSETS } from '../types';

export default function WhatWeOffer() {
  // Mapping standard string to Lucide React component
  const getIcon = (iconName: string) => {
    const props = { className: "h-4 w-4 text-sage-700" };
    switch (iconName) {
      case 'Store':
        return <Store {...props} />;
      case 'Mail':
        return <Mail {...props} />;
      case 'Croissant':
        return <Croissant {...props} />;
      case 'Coffee':
        return <Coffee {...props} />;
      default:
        return <Store {...props} />;
    }
  };

  const getCardImage = (id: string) => {
    switch (id) {
      case 'grocery':
        return IMAGE_ASSETS.groceryCard;
      case 'postal':
        return IMAGE_ASSETS.postalCard;
      case 'bakery':
        return IMAGE_ASSETS.bakeryCard;
      case 'cafe':
        return IMAGE_ASSETS.cafeCard;
      default:
        return IMAGE_ASSETS.groceryCard;
    }
  };

  return (
    <section 
      id="offers" 
      className="bg-[#eff8ec] py-16 md:py-24 border-b border-sage-100/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="font-sans text-[11px] sm:text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase block mb-1">
            DESIGNED FOR YOU
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-sage-900" id="offers-title">
            What We Offer
          </h2>
          <div className="h-[2px] w-12 bg-sage-200 mx-auto mt-2" />
        </div>

        {/* Four Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch" id="offers-grid">
          {OFFER_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col h-full rounded-xl overflow-hidden border border-sage-100 bg-cream-50 hover:bg-cream-200/40 shadow-sm transition-all duration-300"
              id={`offer-card-${item.id}`}
            >
              {/* Card Image Cover Header */}
              <div className="h-44 w-full overflow-hidden relative bg-sage-50">
                <img 
                  src={getCardImage(item.id)} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                  id={`offer-card-media-${item.id}`}
                />
                
                {/* Soft floating circle badge with representing vector icon */}
                <div className="absolute bottom-3 right-3 h-8 w-8 rounded-full bg-cream-100/90 backdrop-blur-sm shadow-sm flex items-center justify-center">
                  {getIcon(item.iconName)}
                </div>
              </div>

              {/* Text Holder (Perfect visual alignment with a light, clean padding constraint) */}
              <div className="p-5 pb-4 flex-grow flex flex-col justify-start bg-[#faf8f0] min-h-[250px]">
                {/* Top Text Content with coordinated identical min heights to keep elements strictly aligned */}
                <div className="flex flex-col justify-start mb-1.5">
                  <h3 className="font-serif text-[16px] sm:text-[17px] font-bold text-[#1e3422] min-h-[44px] flex items-center mb-1.5" id={`offer-card-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-[13.5px] text-[#2f4f37] font-bold leading-relaxed min-h-[38px] flex items-start" id={`offer-card-desc-${item.id}`}>
                    {item.description}
                  </p>
                </div>

                {/* Conditional Content based on item id */}
                {item.id === 'grocery' && (
                  <div className="pt-2.5 border-t border-sage-200/30 space-y-3 mt-1.5">
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Organic Rolled Oats</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£3.00</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Raw Wildflower Honey</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£5.20</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Seasonal Veg Box</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£5.90</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Homemade Fruit Jam</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£4.50</span>
                    </div>
                  </div>
                )}

                {item.id === 'postal' && (
                  <div className="pt-2.5 border-t border-sage-200/30 mt-1.5 flex flex-col justify-start">
                    {/* Products and prices above with increased line spacing */}
                    <div className="space-y-3">
                      <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                        <span>UK Standard Letter Post</span>
                        <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£1.45</span>
                      </div>
                      <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                        <span>Under-2kg Small Parcel Delivery</span>
                        <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£4.80</span>
                      </div>
                    </div>
                    {/* Compact Green Text Box with White Text placed beneath the products, aligned with rows 3 & 4 of neighbor cards */}
                    <div className="mt-4 bg-[#4f6d53] text-white text-[11px] sm:text-[11.5px] font-bold px-3 py-1.5 rounded-lg text-center tracking-wide leading-normal shadow-sm h-[46px] flex items-center justify-center">
                      Tea purchase = 10% off same-day postage!
                    </div>
                  </div>
                )}

                {item.id === 'bakery' && (
                  <div className="pt-2.5 border-t border-sage-200/30 mt-1.5 space-y-3">
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Artisan Sourdough Loaf</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£4.20</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Butter Croissant</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£2.10</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Almond Filled Croissant</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£2.95</span>
                    </div>
                    <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                      <span>Fruit Scones (2 pieces)</span>
                      <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£3.60</span>
                    </div>
                  </div>
                )}

                {item.id === 'cafe' && (
                  <div className="flex flex-col justify-start mt-1.5">
                    {/* Products and prices with increased spacing */}
                    <div className="pt-2.5 border-t border-sage-200/30 space-y-3">
                      <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                        <span>Filter House Coffee</span>
                        <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£3.50</span>
                      </div>
                      <div className="text-[13px] text-[#0a0a0a] font-bold flex justify-between items-center tracking-tight leading-normal">
                        <span>Traditional Cream Tea Set</span>
                        <span className="font-mono text-[13px] font-extrabold text-right shrink-0">£6.80</span>
                      </div>
                    </div>

                    {/* Three circular images side-by-side, spaced equally and slightly enlarged - moved up */}
                    <div className="flex justify-between items-center mt-3.5 px-1">
                      <img 
                        src={IMAGE_ASSETS.cafeThumbnails ? IMAGE_ASSETS.cafeThumbnails[0] : IMAGE_ASSETS.slideshow[0]} 
                        alt="Iced Latte and Crepe" 
                        className="w-18 h-18 rounded-full object-cover border-2 border-sage-200/50 shadow-sm" 
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src={IMAGE_ASSETS.cafeThumbnails ? IMAGE_ASSETS.cafeThumbnails[1] : IMAGE_ASSETS.slideshow[1]} 
                        alt="Hot Chocolate and Cookie" 
                        className="w-18 h-18 rounded-full object-cover border-2 border-sage-200/50 shadow-sm" 
                        referrerPolicy="no-referrer"
                      />
                      <img 
                        src={IMAGE_ASSETS.cafeThumbnails ? IMAGE_ASSETS.cafeThumbnails[2] : IMAGE_ASSETS.slideshow[2]} 
                        alt="Cappuccino and Croissant" 
                        className="w-18 h-18 rounded-full object-cover border-2 border-sage-200/50 shadow-sm" 
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* Centered Daily Detailed Menu button beneath the images - moved up */}
                    <div className="text-center mt-2.5">
                      <button
                        type="button"
                        onClick={() => {
                          window.dispatchEvent(new CustomEvent('open-menu-modal'));
                          const offersEl = document.querySelector('#offers');
                          if (offersEl) {
                            offersEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          }
                        }}
                        className="text-[13.5px] font-sans font-bold text-[#1e3422] underline hover:text-[#4f6d53] transition-colors inline-block border-none bg-transparent cursor-pointer p-0 focus:outline-none"
                      >
                        Daily Detailed Menu
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
