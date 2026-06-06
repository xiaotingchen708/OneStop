/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Coffee, ShieldCheck, Sun, Volume2, VolumeX, Music } from 'lucide-react';
import { IMAGE_ASSETS } from '../types';

export default function VillageExperience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio autoplay blocked by browser or failed to load. Interaction required first:", err instanceof Error ? err.message : String(err));
        });
    }
  };

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
              {/* Wooden Border Frame with cinematic Ken Burns live image animation */}
              <div className="overflow-hidden rounded-2xl border-4 border-sage-200/50 bg-cream-50 shadow-lg relative w-full h-[360px] md:h-[400px]">
                <motion.img 
                  src={IMAGE_ASSETS.experience} 
                  alt="Village Cafe Experience"
                  className="w-full h-full object-cover origin-center"
                  id="experience-img"
                  referrerPolicy="no-referrer"
                  animate={{
                    scale: [1.02, 1.15, 1.02, 1.18, 1.02],
                  }}
                  transition={{
                    duration: 14,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />



                {/* 4. Elegant Interactive Music Controls (Overlay) */}
                <div className="absolute top-3 right-3 z-2 w-auto flex items-center justify-end">
                  <button
                    onClick={togglePlay}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sage-950/80 hover:bg-sage-900 backdrop-blur-md text-cream-100 font-sans text-[11px] font-bold shadow-md cursor-pointer transition-all border border-sage-200/20 active:scale-95"
                    title={isPlaying ? "Mute Ambient Soundtrack" : "Play Cozy Ambient Music"}
                  >
                    {isPlaying ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                        <span>Music On</span>
                        {/* Audio Wave Visualizer */}
                        <div className="flex gap-0.5 items-end h-2.5 ml-1">
                          <span className="w-0.5 bg-yellow-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.1s' }} />
                          <span className="w-0.5 bg-yellow-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.3s' }} />
                          <span className="w-0.5 bg-yellow-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-cream-300" />
                        <span>Play Ambient</span>
                      </>
                    )}
                  </button>
                </div>

                <audio 
                  ref={audioRef}
                  src="https://assets.mixkit.co/music/preview/mixkit-lazy-day-1144.mp3"
                  loop
                  preload="auto"
                />
                
                {/* Soft ambient lighting overlay for natural atmosphere */}
                <div className="absolute inset-0 bg-gradient-to-t from-sage-950/20 via-transparent to-white/5 pointer-events-none" />
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
