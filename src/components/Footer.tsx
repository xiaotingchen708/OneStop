/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Mail, 
  Phone, 
  ArrowUpRight, 
  Instagram, 
  Facebook, 
  MessageSquare,
  Gift,
  ShieldCheck,
  Globe
} from 'lucide-react';
import { COMMUNITY_TRUST_ITEMS } from '../types';
import BrandLogo from './BrandLogo';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="text-sage-900 border-t border-sage-200/60">
      
      {/* 7.1 Trusted by the Local Community Upper Block - Light Green Background (Matching Service Page Background) */}
      <div className="bg-[#eff8ec] w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20 border-b border-sage-200/70">
          
          {/* Title */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-[11px] sm:text-xs font-bold text-soft-brown tracking-[0.2em] uppercase block mb-1">
              LOCAL ROOTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#1e3422]" id="trust-title">
              Trusted by the Local Community
            </h2>
            <div className="h-[2px] w-12 bg-[#1e3422]/20 mx-auto mt-3" />
          </div>

          {/* Three Columns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="trust-grid">
            {COMMUNITY_TRUST_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-sage-200/60 p-8 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-shadow"
                id={`trust-column-${index}`}
              >
                {/* Little Icon badge representing bullet factor */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sage-50 text-sage-600">
                  {index === 0 && <Heart className="h-5 w-5" />}
                  {index === 1 && <Gift className="h-5 w-5" />}
                  {index === 2 && <ShieldCheck className="h-5 w-5" />}
                </div>
                
                <h3 className="font-serif text-xl font-bold text-[#1e3422] leading-tight">
                  {item.title}
                </h3>
                
                <p className="font-sans text-[13px] text-sage-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 7.2 Footer Contact / Find Us / QR Section - Soft Warm Slate/Cream Background (Matching Hero Background) */}
      <div className="bg-cream-200 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-12 lg:gap-x-20 items-stretch w-full" id="footer-details-grid">
            
            {/* Column 1: Brand Info (Left) */}
            <div className="flex flex-col justify-start h-full space-y-6">
              <div className="space-y-4 flex flex-col items-start text-left w-full">
                <h3 className="font-serif text-2xl font-bold tracking-tight text-[#1e3422]">
                  One-Stop Post Garden
                </h3>
                <p className="font-sans text-[11px] font-bold text-soft-brown tracking-[0.15em] uppercase block">
                  Fresh bakes, post, and community
                </p>
                <p className="font-sans text-[14px] text-sage-600 leading-[2.15] pt-1">
                  A cozy environment where errands meet relaxation, right in the center of Leicestershire.
                  <br className="mb-0.5" />
                  Join us for a hot brew and a friendly smile.
                </p>
              </div>

              {/* Compact Horizontal QR code block under Left column */}
              <div className="flex items-center gap-4 w-full max-w-sm mt-2 ml-1">
                <div className="bg-white text-[#1e3422] p-2.5 rounded-xl border border-sage-200/60 shadow-sm shrink-0 h-16 w-16 flex items-center justify-center">
                  <svg className="w-full h-full text-sage-900" viewBox="0 0 100 100" fill="currentColor">
                    {/* Styled QR Code Matrix Elements */}
                    <rect x="0" y="0" width="24" height="24" fill="#1e3422" />
                    <rect x="4" y="4" width="16" height="16" fill="white" />
                    <rect x="8" y="8" width="8" height="8" fill="#1e3422" />
    
                    <rect x="76" y="0" width="24" height="24" fill="#1e3422" />
                    <rect x="80" y="4" width="16" height="16" fill="white" />
                    <rect x="84" y="8" width="8" height="8" fill="#1e3422" />
    
                    <rect x="0" y="76" width="24" height="24" fill="#1e3422" />
                    <rect x="4" y="80" width="16" height="16" fill="white" />
                    <rect x="88" y="84" width="8" height="8" fill="#1e3422" />
    
                    {/* QR details dots */}
                    <rect x="32" y="4" width="4" height="8" fill="#1e3422" />
                    <rect x="40" y="0" width="8" height="4" fill="#1e3422" />
                    <rect x="60" y="4" width="12" height="4" fill="#1e3422" />
                    <rect x="32" y="16" width="12" height="4" fill="#1e3422" />
                    <rect x="52" y="12" width="4" height="12" fill="#1e3422" />
    
                    <rect x="4" y="32" width="8" height="4" fill="#1e3422" />
                    <rect x="16" y="32" width="4" height="12" fill="#1e3422" />
                    <rect x="0" y="44" width="12" height="4" fill="#1e3422" />
                    <rect x="8" y="52" width="4" height="16" fill="#1e3422" />
                    <rect x="20" y="56" width="12" height="4" fill="#1e3422" />
    
                    <rect x="80" y="32" width="8" height="4" fill="#1e3422" />
                    <rect x="76" y="44" width="16" height="8" fill="#1e3422" />
                    <rect x="88" y="56" width="12" height="4" fill="#1e3422" />
                    <rect x="84" y="64" width="4" height="8" fill="#1e3422" />
    
                    <rect x="32" y="36" width="16" height="16" fill="#1e3422" />
                    <rect x="36" y="40" width="8" height="8" fill="white" />
                    <rect x="36" y="40" width="4" height="4" fill="#1e3422" />
    
                    <rect x="52" y="36" width="16" height="4" fill="#1e3422" />
                    <rect x="60" y="44" width="16" height="8" fill="#1e3422" />
                    <rect x="56" y="60" width="8" height="16" fill="#1e3422" />
    
                    <rect x="32" y="64" width="8" height="4" fill="#1e3422" />
                    <rect x="40" y="72" width="12" height="4" fill="#1e3422" />
                    <rect x="32" y="80" width="32" height="4" fill="#1e3422" />
                    <rect x="44" y="88" width="16" height="4" fill="#1e3422" />
    
                    {/* Tiny logo at the center of the QR code */}
                    <rect x="45" y="45" width="10" height="10" fill="white" />
                    <path d="M 47,48 L 53,48 L 50,52 Z" fill="#1e3422" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-sans text-[13px] font-bold text-[#1e3422] tracking-wide block">Scan to Subscribe</span>
                  <span className="text-[12px] font-sans text-sage-600 leading-relaxed block mt-1">
                    Receive seasonal discounts
                    <br />
                    and bakery updates weekly!
                  </span>
                </div>
              </div>
            </div>
    
            {/* Column 2: Find Us Middle Block (Center) */}
            <div className="flex flex-col justify-start h-full space-y-6" id="footer-find-us">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1e3422] tracking-tight">Find Us</h3>
                
                <div className="space-y-5 font-sans text-[13px] pt-1">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-sage-600 mt-1 shrink-0" />
                    <div className="space-y-1">
                      <span className="font-semibold block text-[#1e3422]">One-Stop Post Garden</span>
                      <span className="text-sage-600 block text-[13px] leading-relaxed">Medbourne, Market Harborough</span>
                      <span className="text-sage-600 block text-[13px] leading-relaxed">Leicestershire, LE16</span>
                    </div>
                  </div>
   
                  {/* Mon-Sat Opening hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-sage-600 mt-1 shrink-0" />
                    <div className="space-y-1">
                      <span className="font-semibold block text-[#1e3422]">Opening Hours</span>
                      <span className="text-sage-600 block text-[13px] leading-relaxed">Monday - Saturday: 8:00 AM - 6:00 PM</span>
                      <span className="text-sage-600 block text-[13px] leading-relaxed">Sunday: Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct call & Email */}
              <div className="flex items-start gap-3 pt-2">
                <Mail className="h-5 w-5 text-sage-600 mt-1 shrink-0" />
                <div className="space-y-1">
                  <span className="font-semibold block text-[#1e3422]">General Enquiries</span>
                  <span className="text-sage-600 block text-[13px] hover:text-[#1e3422] cursor-pointer transition-colors underline decoration-sage-500/50 underline-offset-4">hello@onestop.co.uk</span>
                </div>
              </div>
            </div>
    
            {/* Column 3: Social & Keep in Touch (Right) */}
            <div className="flex flex-col justify-start h-full space-y-6 text-left">
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-bold text-[#1e3422] tracking-tight">Keep in Touch</h3>
                
                <p className="font-sans text-[14px] text-sage-600 leading-[2.15] pt-1">
                  Join our digital noticeboard. Receive friendly neighborhood news, workshop bookings, and sourdough fresh out of the oven times.
                </p>
   
                {/* Input field with beautifully rounded button shifted down with extra padding */}
                <div className="flex w-full items-center gap-2 pt-4">
                  <input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1 bg-white border border-sage-200 hover:border-sage-300 rounded-full py-3 px-4 text-xs text-sage-900 placeholder-sage-400 focus:outline-none focus:border-sage-500 focus:ring-1 focus:ring-sage-400 transition-all font-sans"
                  />
                  <button className="bg-[#4f6d53] hover:bg-[#3d5440] text-white rounded-full py-3 px-5 text-xs font-semibold tracking-wide border-none transition-all shadow-sm shrink-0 font-sans cursor-pointer whitespace-nowrap">
                    Sign Up
                  </button>
                </div>
              </div>
   
              {/* Larger Social Icons aligned beautifully at the floor */}
              <div className="flex gap-4 pt-2">
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white border border-sage-200 text-sage-600 hover:text-white hover:bg-[#4f6d53] hover:border-[#4f6d53] transition-all shadow-sm">
                  <Instagram className="h-5 w-5" />
                </div>
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white border border-sage-200 text-sage-600 hover:text-white hover:bg-[#4f6d53] hover:border-[#4f6d53] transition-all shadow-sm">
                  <Facebook className="h-5 w-5" />
                </div>
                <div className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white border border-sage-200 text-sage-600 hover:text-white hover:bg-[#4f6d53] hover:border-[#4f6d53] transition-all shadow-sm">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7.3 Lower footer slogan bar - Dark Forest Green Full-width Background (Matches First Image) */}
      <div className="bg-[#354e3d] text-white border-t border-sage-800 w-full py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs">
          <p className="text-center md:text-left font-bold text-white/90">© 2026 One-Stop Post Garden. All rights reserved.</p>
          
          <p className="font-serif italic text-white font-semibold text-sm text-center w-full">
            “Fresh bakes, post, and community”
          </p>

          <div className="flex justify-center md:justify-end">
            <button 
              onClick={handleScrollTop}
              className="flex items-center gap-1 text-white hover:text-white/80 transition-colors cursor-pointer group"
              id="footer-back-to-top"
            >
              <span className="font-bold">Back to top</span>
              <ArrowUpRight className="h-3.5 w-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform text-white/80 group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
