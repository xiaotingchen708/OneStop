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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="offers-grid">
          {OFFER_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="flex flex-col rounded-xl overflow-hidden border border-sage-100 bg-cream-50 hover:bg-cream-200/40 shadow-sm transition-all duration-300"
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

              {/* Text Holder */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4 bg-[#faf8f0]">
                <div className="space-y-1">
                  <h3 className="font-serif text-[17px] font-bold text-[#1e3422]" id={`offer-card-title-${item.id}`}>
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-[#2f4f37] leading-relaxed" id={`offer-card-desc-${item.id}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
