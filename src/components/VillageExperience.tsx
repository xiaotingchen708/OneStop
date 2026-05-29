/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Sun } from 'lucide-react';
import { IMAGE_ASSETS } from '../types';

export default function VillageExperience() {
  return (
    <section 
      id="experience" 
      className="bg-[#eff8ec] py-16 md:py-24 border-t border-sage-100/40 relative"
    >
      {/* Soft light-green accent sphere on bottom-left */}
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-sage-50 opacity-40 blur-3xl" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Closer-up Experience Photo Left */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Wooden Border Frame */}
              <div className="overflow-hidden rounded-2xl border-4 border-sage-200/50 bg-cream-50 shadow-lg relative">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline
                  preload="auto"
                  className="w-full h-[360px] md:h-[400px] object-cover hover:scale-102 transition-transform duration-700"
                  id="experience-img"
                  poster={IMAGE_ASSETS.experience}
                >
                  <source 
                    src="https://assets.mixkit.co/videos/preview/mixkit-coffee-cup-on-a-table-in-nature-4786-large.mp4" 
                    type="video/mp4" 
                  />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Little rustic label bubble */}
              <div className="absolute -bottom-3 -left-3 bg-sage-700 text-cream-100 px-4 py-2 rounded-lg text-xs font-mono shadow-md">
                🌻 Baked Fresh at 6:00 AM
              </div>
            </div>
          </motion.div>

          {/* Experience Content Right */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-4"
            >
              <span className="font-sans text-[11px] sm:text-xs font-bold text-[#8B7355] tracking-[0.2em] uppercase block mb-2">
                VILLAGE EXPERIENCE
              </span>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-sage-900" id="experience-title">
                A Space to Relax and Connect
              </h2>

              <p className="font-sans text-base sm:text-lg text-sage-850 leading-relaxed font-semibold italic pt-2.5 sm:pt-4" id="experience-lead">
                Enjoy fresh bakes, garden seating, and peaceful village moments.
              </p>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
