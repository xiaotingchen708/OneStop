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

  // Procedural warm nature-environment soundscape (Forest Breeze & Felt Piano)
  const soundscapeIntervalRef = useRef<any>(null);
  const melodyIntervalRef = useRef<any>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const windSourceRef = useRef<any>(null);
  const windVolumeRef = useRef<any>(null);
  const windLFORef = useRef<any>(null);
  const activeOscNodesRef = useRef<any[]>([]);

  const startPeacefulSoundscape = () => {
    try {
      if (soundscapeIntervalRef.current) return;

      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      const ctx = new AudioCtxClass();
      audioCtxRef.current = ctx;

      const masterVolume = ctx.createGain();
      // Extremely gentle master volume ("很轻很轻就可以")
      masterVolume.gain.setValueAtTime(0, ctx.currentTime);
      masterVolume.connect(ctx.destination);
      masterVolume.gain.linearRampToValueAtTime(0.48, ctx.currentTime + 1.5); // Warm smooth fade-in

      // 1. ORGANIC FOREST BREEZE / RUSTLING LEAVES GENERATOR
      const bufferSize = ctx.sampleRate * 2; // 2 seconds loop
      const noiseBuffer = ctx.createBuffer(2, bufferSize, ctx.sampleRate);
      for (let channel = 0; channel < 2; channel++) {
        const data = noiseBuffer.getChannelData(channel);
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          // Pink noise filter approximation - warmer than white noise
          data[i] = (lastOut * 0.97 + white * 0.03);
          lastOut = data[i];
        }
      }

      const windSource = ctx.createBufferSource();
      windSource.buffer = noiseBuffer;
      windSource.loop = true;
      windSourceRef.current = windSource;

      // Deep bandpass/lowpass filter for rustling autumn garden atmosphere
      const windFilter = ctx.createBiquadFilter();
      windFilter.type = 'lowpass';
      windFilter.frequency.setValueAtTime(320, ctx.currentTime); // Deep, muffled rural wind
      windFilter.Q.setValueAtTime(0.6, ctx.currentTime);

      const windVolume = ctx.createGain();
      // Very silent whispering breeze
      windVolume.gain.setValueAtTime(0.06, ctx.currentTime);
      windVolumeRef.current = windVolume;

      windSource.connect(windFilter);
      windFilter.connect(windVolume);
      windVolume.connect(masterVolume);

      // Low frequency oscillator (LFO) for natural breeze volumetric swelling
      const windLFO = ctx.createOscillator();
      windLFO.type = 'sine';
      windLFO.frequency.setValueAtTime(0.05, ctx.currentTime); // Swells once every 20 seconds (breathing nature)

      const windLFOGain = ctx.createGain();
      windLFOGain.gain.setValueAtTime(0.022, ctx.currentTime);

      windLFO.connect(windLFOGain);
      windLFOGain.connect(windVolume.gain);

      windLFO.start();
      windSource.start();
      windLFORef.current = windLFO;

      // 2. SOFT ACOUSTIC FELT PIANO CHORDS
      // Composed of warm Major-family tones to sound cozy and pure, avoiding scary single notes.
      const peacefulChords = [
        // Chord 1: C Major 9 (Ultra comforting, grounding)
        [130.81, 196.00, 329.63, 493.88, 587.33], // C3, G3, E4, B4, D5
        // Chord 2: F Major 9 (Bright, peaceful morning)
        [174.61, 261.63, 349.23, 440.00, 523.25], // F3, C4, F4, A4, C5
        // Chord 3: C Major 7 (Deep felt wooden warmth)
        [130.81, 196.00, 261.63, 329.63, 493.88], // C3, G3, C4, E4, B4
        // Chord 4: F Major 7 (Soft breezy daylight)
        [130.81, 261.63, 349.23, 440.00]         // C3, C4, F4, A4
      ];

      const playFeltPianoNote = (frequency: number, duration: number, velocity: number) => {
        if (!ctx || ctx.state === 'suspended') return;

        // Custom two-oscillator blend for physical wood-struck organic body
        const oscSine = ctx.createOscillator();
        const oscTriangle = ctx.createOscillator();
        const feltFilter = ctx.createBiquadFilter();
        const noteGain = ctx.createGain();
        const triLevelNode = ctx.createGain();

        oscSine.type = 'sine'; // Pure sweet bell-less body
        oscSine.frequency.setValueAtTime(frequency, ctx.currentTime);

        oscTriangle.type = 'triangle'; // Woody overtones
        oscTriangle.frequency.setValueAtTime(frequency, ctx.currentTime);

        // Mix only a tiny bit of triangle wave for felt-like hammer characteristics
        triLevelNode.gain.setValueAtTime(0.14, ctx.currentTime);
        oscTriangle.connect(triLevelNode);

        oscSine.connect(feltFilter);
        triLevelNode.connect(feltFilter);

        // Filter envelope: quick low-pass decay so the hammer strike sounds soft, not dry/synthetic
        feltFilter.type = 'lowpass';
        const now = ctx.currentTime;
        const startCutoff = Math.min(750, frequency * 2.2);
        const endCutoff = Math.min(180, frequency * 0.85);
        feltFilter.frequency.setValueAtTime(startCutoff, now);
        feltFilter.frequency.exponentialRampToValueAtTime(endCutoff, now + 0.45);

        feltFilter.connect(noteGain);
        noteGain.connect(masterVolume);

        // Gentle envelope: soft attack (no scary clock clicks), warm slow ring-out
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(velocity, now + 0.14); // Feather-soft key press
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

        oscSine.start(now);
        oscTriangle.start(now);
        oscSine.stop(now + duration + 0.3);
        oscTriangle.stop(now + duration + 0.3);

        activeOscNodesRef.current.push({ oscSine, oscTriangle, noteGain });
      };

      let chordIdx = 0;
      const playNextCozyChord = () => {
        const chord = peacefulChords[chordIdx];
        chord.forEach((freq, idx) => {
          // Stagger notes softly as if rolled on physical keys
          setTimeout(() => {
            playFeltPianoNote(freq, 6.5, 0.045 + Math.random() * 0.02);
          }, idx * 140);
        });
        chordIdx = (chordIdx + 1) % peacefulChords.length;
      };

      // Gentle C major pentatonic melodies drifting in very quietly
      const melodyPool = [329.63, 392.00, 440.00, 523.25, 587.33, 659.25, 783.99]; // E4, G4, A4, C5, D5, E5, G5
      const playSoftImprov = () => {
        if (Math.random() > 0.35) {
          const note = melodyPool[Math.floor(Math.random() * melodyPool.length)];
          // High sparkles are played ultra-quietly (vel: 0.012 to 0.02) so they are tiny background ambient dust
          playFeltPianoNote(note, 4.2, 0.012 + Math.random() * 0.012);
        }
      };

      // Play initially
      playNextCozyChord();

      // Setup cycles
      soundscapeIntervalRef.current = setInterval(playNextCozyChord, 8500); // New chord every 8.5s
      melodyIntervalRef.current = setInterval(playSoftImprov, 2800);      // Soft melody sparse timing

      setIsPlaying(true);
    } catch (e) {
      console.warn("Failed to generate peaceful soundscape:", e);
    }
  };

  const stopPeacefulSoundscape = () => {
    if (soundscapeIntervalRef.current) {
      clearInterval(soundscapeIntervalRef.current);
      soundscapeIntervalRef.current = null;
    }
    if (melodyIntervalRef.current) {
      clearInterval(melodyIntervalRef.current);
      melodyIntervalRef.current = null;
    }

    if (windSourceRef.current) {
      try { windSourceRef.current.stop(); } catch (e) {}
      windSourceRef.current = null;
    }
    if (windLFORef.current) {
      try { windLFORef.current.stop(); } catch (e) {}
      windLFORef.current = null;
    }

    activeOscNodesRef.current.forEach((nodeObj) => {
      try { nodeObj.oscSine.stop(); } catch (e) {}
      try { nodeObj.oscTriangle.stop(); } catch (e) {}
    });
    activeOscNodesRef.current = [];

    if (audioCtxRef.current) {
      audioCtxRef.current.close().catch(() => {});
      audioCtxRef.current = null;
    }
    setIsPlaying(false);
  };

  React.useEffect(() => {
    // Attempt auto-play immediately on mount
    startPeacefulSoundscape();

    // Fallback: trigger playback on the very first document click/touchstart to bypass browser autoplay blocks
    const handleFirstUserInteraction = () => {
      startPeacefulSoundscape();
      document.removeEventListener('click', handleFirstUserInteraction);
      document.removeEventListener('touchstart', handleFirstUserInteraction);
    };

    document.addEventListener('click', handleFirstUserInteraction);
    document.addEventListener('touchstart', handleFirstUserInteraction);

    return () => {
      stopPeacefulSoundscape();
      document.removeEventListener('click', handleFirstUserInteraction);
      document.removeEventListener('touchstart', handleFirstUserInteraction);
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      stopPeacefulSoundscape();
    } else {
      startPeacefulSoundscape();
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
                    scale: [1.0, 1.04, 1.01, 1.06, 1.0],
                  }}
                  transition={{
                    duration: 24,
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
                    title={isPlaying ? "Mute ambient soundscape" : "Play relaxing nature sounds"}
                  >
                    {isPlaying ? (
                      <>
                        <Volume2 className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                        <span>Music</span>
                        {/* Audio Wave Visualizer */}
                        <div className="flex gap-0.5 items-end h-2.5 ml-1">
                          <span className="w-0.5 bg-emerald-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.1s' }} />
                          <span className="w-0.5 bg-emerald-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.3s' }} />
                          <span className="w-0.5 bg-emerald-400 rounded-full animate-[bounce_1s_infinite]" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </>
                    ) : (
                      <>
                        <VolumeX className="w-3.5 h-3.5 text-cream-300" />
                        <span>Music</span>
                      </>
                    )}
                  </button>
                </div>
                
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
