/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, X, Check } from 'lucide-react';
import { IMAGE_ASSETS } from '../types';

export default function CommunityEvents() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState('');
  const [selectedWorkshop, setSelectedWorkshop] = useState('Autumn Floral Wreath Arrangement (Sunday afternoon)');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const handleOpenBooking = () => setIsOpen(true);
    window.addEventListener('open-booking-modal', handleOpenBooking);
    return () => window.removeEventListener('open-booking-modal', handleOpenBooking);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) return;
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form states after close animation completes (approx 300ms)
    setTimeout(() => {
      setIsSubmitted(false);
      setFullName('');
      setSelectedWorkshop('Autumn Floral Wreath Arrangement (Sunday afternoon)');
    }, 300);
  };

  return (
    <section 
      id="events" 
      className="bg-[#eff8ec] py-16 md:py-24 text-[#1e3422] relative overflow-hidden"
    >
      {/* Soft decorative background glow */}
      <div className="absolute top-0 left-12 h-64 w-64 rounded-full bg-sage-200/40 blur-2xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Content Column Left */}
          <div className="lg:col-span-5 space-y-6 pt-6 md:pt-12 text-center flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 flex flex-col items-center text-center"
            >
              <span className="font-sans text-[11px] sm:text-xs font-bold text-sage-600 tracking-[0.2em] uppercase block mb-2">
                WHAT'S HAPPENING
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#1e3422] animate-fade-in" id="events-title">
                Community Events
              </h2>

              {/* Decorative line matching screenshot 2 inside centered view */}
              <div className="h-[2px] w-16 bg-[#1e3422]/20 my-4 mx-auto" />

              <p className="font-sans text-base md:text-lg text-sage-800 leading-relaxed max-w-md mx-auto" id="events-desc">
                Join us for weekend gatherings, seasonal garden events, and family-friendly activities that bring the Medbourne community together.
              </p>
            </motion.div>


          </div>

          {/* Three-Image Grid Column Right (Matching Screenshot 2 layout) */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* 1. Large horizontal top card (Rectangle) */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-2xl border border-sage-200/50 shadow-md group aspect-[21/9] sm:aspect-[24/10]"
            >
              <img 
                src={IMAGE_ASSETS.eventsTea} 
                alt="Garden afternoon tea with seasonal decorations on a rustic wooden table" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
                referrerPolicy="no-referrer"
              />
              {/* Overlay with subtle dark background vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
              
              <div className="absolute bottom-4 left-5 text-left">
                <h4 className="font-serif text-lg sm:text-xl font-bold text-cream-100">
                  Garden Afternoon Tea
                </h4>
                <p className="text-[10px] sm:text-xs text-sage-200">
                  Courtyard tables decorated with seasonal flowers and rustic crafts
                </p>
              </div>
            </motion.div>

            {/* 2. Side-by-side cards below */}
            <div className="grid grid-cols-2 gap-4">
              
              {/* Bottom-Left: Interactive Herb Planting Workshop */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-[#faf8f0] border border-sage-100 rounded-2xl p-2 sm:p-3 flex flex-col space-y-2 group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-sage-100/40">
                  <img 
                    src={IMAGE_ASSETS.eventsHerb} 
                    alt="Herb planting workshop hands planting herbs in small pots" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center sm:text-left px-1 py-1">
                  <h5 className="font-serif text-sm font-bold text-[#1e3422] leading-tight">
                    Community Corner
                  </h5>
                  <p className="text-[10px] text-sage-600 mt-0.5">
                    Small community-led organic classes
                  </p>
                </div>
              </motion.div>

              {/* Bottom-Right: Family-Friendly Companion Gathering */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-[#faf8f0] border border-sage-100 rounded-2xl p-2 sm:p-3 flex flex-col space-y-2 group shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden relative border border-sage-100/40">
                  <img 
                    src={IMAGE_ASSETS.eventsFamily} 
                    alt="Family-friendly garden cookie social or community picnic" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-101"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-center sm:text-left px-1 py-1">
                  <h5 className="font-serif text-sm font-bold text-[#1e3422] leading-tight">
                    Weekend Café Moments
                  </h5>
                  <p className="text-[10px] text-sage-600 mt-0.5">
                    Lovely morning interaction & bakes
                  </p>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </div>

      {/* Pop-up Interactive Modal Overlay with Framer Motion AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop Blur/Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Dialog Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-[540px] bg-[#faf8f5] dark:bg-[#faf8f5] rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden border border-sage-200/40 text-[#1e3422] z-10"
              id="event-booking-modal"
            >
              {/* Top-Right Absolute Close Cross Icon */}
              <button 
                onClick={handleClose}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-sage-100/50 transition-colors text-sage-800"
                aria-label="Close modal"
              >
                <X className="h-5 w-5 stroke-[2.5px]" />
              </button>

              {/* Form & Dialog contents */}
              {!isSubmitted ? (
                <div className="text-left">
                  {/* Plus Calendar Custom Icon Block */}
                  <div className="w-14 h-14 bg-[#eff8ec] flex items-center justify-center rounded-2xl shadow-inner-sm">
                    <Calendar className="h-6 w-6 text-[#4f6d53] stroke-[2px]" />
                  </div>

                  {/* Title and Descriptions */}
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e3422] leading-tight mt-6">
                    Book Community Event Seat
                  </h3>
                  <p className="font-sans text-sm text-[#4a5e4c]/90 leading-relaxed mt-3">
                    Join our cozy rustic workshops, garden dining, or children's weekend seasonal decorating classes. Space is limited due to the garden cafe footprint.
                  </p>

                  {/* Input Form Fields */}
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {/* Full Name Input field */}
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#1e3422]/95 antialiased uppercase tracking-wide">
                        Full Name
                      </label>
                      <input 
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Clara Oswald"
                        className="w-full px-5 py-3.5 rounded-2xl border border-sage-200/80 bg-white text-[#1e3422] placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#4f6d53] focus:border-transparent transition-all hover:border-sage-300"
                      />
                    </div>

                    {/* Workshop Dropdown Selection */}
                    <div className="space-y-1.5">
                      <label className="text-[13px] font-bold text-[#1e3422]/95 antialiased uppercase tracking-wide">
                        Select Event Workshop
                      </label>
                      <div className="relative">
                        <select 
                          value={selectedWorkshop}
                          onChange={(e) => setSelectedWorkshop(e.target.value)}
                          className="w-full px-5 py-4 rounded-2xl border border-sage-200/80 bg-white text-[#1e3422] focus:outline-none focus:ring-2 focus:ring-[#4f6d53] focus:border-transparent transition-all appearance-none cursor-pointer hover:border-sage-300 font-medium"
                          style={{
                            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%234f6d53' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                            backgroundPosition: 'right 1.25rem center',
                            backgroundSize: '1.25rem',
                            backgroundRepeat: 'no-repeat'
                          }}
                        >
                          <option value="Sourdough Masterclass (Saturday morning)">
                            Sourdough Masterclass (Saturday morning)
                          </option>
                          <option value="Autumn Floral Wreath Arrangement (Sunday afternoon)">
                            Autumn Floral Wreath Arrangement (Sunday afternoon)
                          </option>
                          <option value="Medbourne Village Garden Picnic Meetup">
                            Medbourne Village Garden Picnic Meetup
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Submit Booking Button */}
                    <button 
                      type="submit"
                      className="w-full mt-6 py-4 px-6 rounded-full bg-[#4f6d53] hover:bg-[#3d5440] text-[#fafbfa] font-bold text-base shadow-md transform hover:-translate-y-0.5 active:translate-y-0 duration-200 transition-all cursor-pointer border-none outline-none focus:outline-none"
                    >
                      Reserve My Spot Now
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Animated State */
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 flex flex-col items-center justify-center space-y-6"
                >
                  {/* Pulsing visual mark icon container */}
                  <div className="w-16 h-16 bg-[#eff8ec] rounded-full flex items-center justify-center text-[#4f6d53]">
                    <Check className="h-8 w-8 stroke-[3px]" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1e3422]">
                      Your Seat is Reserved!
                    </h3>
                    <p className="font-sans text-sm text-[#4a5e4c] max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#1e3422]">{fullName}</span>. Your spot is confirmed for the <span className="font-semibold text-[#1e3422]">{selectedWorkshop}</span>. We look forward to welcome you in the village café garden!
                    </p>
                  </div>

                  <button 
                    onClick={handleClose}
                    className="mt-4 px-8 py-3 rounded-full bg-[#4f6d53] hover:bg-[#3d5440] text-white font-bold transition-all text-sm cursor-pointer shadow-sm border-none outline-none focus:outline-none"
                  >
                    Done
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
