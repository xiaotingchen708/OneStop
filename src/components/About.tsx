import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Heart, ChevronLeft, ChevronRight, Play, Pause, ShoppingBag, Sprout, Flower2, Users } from 'lucide-react';
import { IMAGE_ASSETS, CHOICE_ITEMS } from '../types';

function getIcon(id: string) {
  switch (id) {
    case 'needs':
      return <ShoppingBag className="h-5 w-5 stroke-[2px] text-[#1e3422]" />;
    case 'local':
      return <Sprout className="h-5 w-5 stroke-[2px] text-[#1e3422]" />;
    case 'garden':
      return <Flower2 className="h-5 w-5 stroke-[2px] text-[#1e3422]" />;
    case 'community':
      return <Users className="h-5 w-5 stroke-[2px] text-[#1e3422]" />;
    default:
      return <ShoppingBag className="h-5 w-5 stroke-[2px] text-[#1e3422]" />;
  }
}

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto cycle images every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_ASSETS.slideshow.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGE_ASSETS.slideshow.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? IMAGE_ASSETS.slideshow.length - 1 : prevIndex - 1
    );
  };

  const labels = [
    "Warm Sourdough & Fresh Scones",
    "Cozy Garden Corner Bench",
    "Artisanal Honey & Postal Parcels",
    "Medbourne Countryside Frontage"
  ];

  return (
    <section 
      id="about" 
      className="bg-[#eff8ec] py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start lg:items-stretch animate-fade-in">
          
          {/* Left Column: Custom Interactive Auto-Playing Slideshow Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col h-full lg:pb-4 justify-between"
          >
            {/* Top spacer on large screens to align slideshow top with right "about-lead" text */}
            <div className="hidden lg:block lg:h-[110px]" />

            <div className="relative group/slideshow flex-1 flex flex-col justify-between">
              {/* Main Image Frame container with aspect ratio (height expands to match right content height) */}
              <div className="overflow-hidden rounded-3xl border-4 border-cream-100 bg-cream-50 shadow-lg relative aspect-[4/3] lg:aspect-auto lg:flex-1 flex items-center justify-center">
                <AnimatePresence mode="wait">
                   <motion.img
                    key={currentIndex}
                    src={IMAGE_ASSETS.slideshow[currentIndex]}
                    alt={labels[currentIndex]}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-full object-cover select-none absolute inset-0"
                    id="about-img"
                  />
                </AnimatePresence>

                {/* Dark Vignette overlay (very subtle for navigation buttons visibility if needed) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

                {/* Left and Right Chevron Navigation Buttons */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between opacity-0 group-hover/slideshow:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={handlePrev}
                    className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer border-none outline-none focus:outline-none"
                    aria-label="Previous snapshot"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2.5 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer border-none outline-none focus:outline-none"
                    aria-label="Next snapshot"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Play/Pause Autocycle Action button on top right */}
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-all duration-200 active:scale-95 cursor-pointer flex items-center justify-center border-none outline-none focus:outline-none z-10"
                  title={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4 text-cream-100" />
                  ) : (
                    <Play className="h-4 w-4 text-cream-100 fill-cream-100" />
                  )}
                </button>
              </div>

              {/* Dots Indicators below image */}
              <div className="flex items-center justify-center gap-2 mt-4">
                {IMAGE_ASSETS.slideshow.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer border-none outline-none focus:outline-none ${
                      idx === currentIndex ? 'w-7 bg-sage-700' : 'w-2.5 bg-sage-300 hover:bg-sage-500'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Decorative Stamp or Accent */}
              <div className="absolute -top-3 -left-3 flex items-center gap-1.5 rounded-md bg-sage-200 text-sage-800 px-3 py-1.5 text-xs font-mono font-medium shadow-sm z-10">
                <MapPin className="h-3 w-3" />
                <span>The Heart of the Village</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hello/Headline, Lead and Pillars */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Headline and Lead */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
              id="about-headline-container"
            >
              <span className="font-sans text-[11px] sm:text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase block mb-1">
                GATHERING PLACE
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl lg:text-4xl font-bold tracking-tight text-sage-955" id="about-title">
                Why One-Stop Post Garden?
              </h2>

              <p className="font-sans text-base sm:text-lg text-sage-800 leading-relaxed font-semibold italic pt-2.5 sm:pt-4" id="about-lead">
                A friendly local space for essentials, postal services, and village moments.
              </p>
            </motion.div>

             {/* Trust metrics located between lead and pillars */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="grid grid-cols-2 gap-6 border-t border-sage-200/60 pt-6 mt-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <Heart className="h-3.5 w-3.5" />
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-[#1e3422] block leading-tight">100% Local</h4>
                  <p className="text-xs sm:text-[13px] text-sage-600 font-bold leading-relaxed mt-3.5 text-left">
                    Sourced & staffed by our immediate neighbours
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                  <span className="text-xs font-serif font-semibold">01</span>
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-[#1e3422] block leading-tight">Zero Hassle</h4>
                  <p className="text-xs sm:text-[13px] text-sage-600 font-bold leading-relaxed mt-3.5 text-left">
                    Fast postal drop-offs and friendly community pickup
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature list arranged in a 2x2 grid below the trust metrics */}
            <div className="border-t border-[#d8ecd2] pt-6 mt-2 lg:mt-2 space-y-6">
              <span className="font-sans text-[11px] sm:text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase block mb-1">
                OUR PILLARS
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="choose-items">
                {CHOICE_ITEMS.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-5.5 bg-[#faf8f5]/80 p-4.5 rounded-2xl border border-sage-200/30 shadow-sm hover:shadow-md hover:bg-[#faf8f5] transition-all duration-300"
                    id={`choose-item-${item.id}`}
                  >
                    <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sage-105 text-[#1e3422] shadow-inner">
                      {getIcon(item.id)}
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <h4 className="font-sans text-sm sm:text-base font-bold text-[#1e3422]" id={`choose-item-title-${item.id}`}>
                        {item.title}
                      </h4>
                      <p className="font-sans text-[13px] sm:text-[14px] text-sage-700 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
