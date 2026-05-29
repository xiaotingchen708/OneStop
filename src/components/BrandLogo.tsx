/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;     // Tailwind classes for the outer container
  iconOnly?: boolean;     // If true, only renders the SVG graphic mark
  iconSize?: string;      // Tailwind size class for the SVG graphic (e.g., "h-10 w-10")
}

export default function BrandLogo({ 
  className = "", 
  iconOnly = false, 
  iconSize = "h-13 w-13" 
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`} id="brand-logo-component">
      
      {/* 1. Authentic British Countryside-inspired Graphic Mark (SVG) */}
      <div className={`relative shrink-0 ${iconSize}`} id="brand-graphic-emblem">
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <clipPath id="logo-inner-clip">
              <circle cx="50" cy="50" r="45.5" />
            </clipPath>
          </defs>

          {/* Single clean organic circle in classic warm British Sage Green */}
          <circle 
            cx="50" 
            cy="50" 
            r="47" 
            stroke="#42614D" /* Sage Green */
            strokeWidth="2.5" 
            fill="#FDFCF7" 
          />

          {/* Group of inner artwork clipped to preserve boundary perfectly */}
          <g clipPath="url(#logo-inner-clip)">
            {/* Cozy Garden Café Mug / Coffee Cup in Soft Earthy Brown */}
            <g id="emblem-coffee-cup" className="opacity-95">
              {/* Mug Handle */}
              <path 
                d="M 62,49 C 67,49 68,54 66,57 C 64,59 62,59 62,59" 
                stroke="#8B7355" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                fill="none" 
              />
              {/* Mug base plate shadow */}
              <ellipse cx="50" cy="62" rx="14" ry="2" fill="#8B7355" opacity="0.15" />
              {/* Mug Body */}
              <path 
                d="M 39,46 L 61,46 C 61,46 60,60 50,60 C 40,60 39,46 39,46 Z" 
                fill="#FDFCF7" /* Clean warm cream-white cup */
                stroke="#42614D" 
                strokeWidth="2" 
                strokeLinejoin="round" 
                /* Prevent overflow by lowering body slightly if needed */
              />
              {/* Cozy drink level detail */}
              <path 
                d="M 42,49 L 58,49" 
                stroke="#8B7355" 
                strokeWidth="1.2" 
                strokeDasharray="2 2" 
                strokeLinecap="round" 
              />
            </g>

            {/* Postal Envelope motif emerging playfully behind the cup */}
            <g id="emblem-envelope">
              <path 
                d="M 52,35 L 67,35 C 68.5,35 69.5,36 69.5,37.5 L 69.5,45 C 69.5,45 64,42 58,45" 
                fill="#FDFCF7"
                stroke="#8B7355"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              {/* Envelope Flap Fold */}
              <path 
                d="M 52,35 L 60,40 L 67,35" 
                stroke="#8B7355"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </g>

            {/* Wild organic garden mint/plant leaves sprouting with life upwards */}
            <g id="emblem-sprouting-leaves">
              {/* main stem curving upwards on the left side of the cup */}
              <path 
                d="M 43,54 C 36,49 34,40 42,26" 
                stroke="#2C3E35" /* Dark Green earthy stem */
                strokeWidth="2.2" 
                strokeLinecap="round" 
                fill="none" 
              />
              {/* Leaf 1 (Main pointing up-right) */}
              <path 
                d="M 42,26 C 45,21 51,21 52,24 C 50,29 44,28 42,26 Z" 
                fill="#42614D" /* Rich Sage Green */
                stroke="#2C3E35"
                strokeWidth="1"
              />
              {/* Leaf 2 (Symmetric pointing left) */}
              <path 
                d="M 37,36 C 31,35 29,39 31,43 C 35,43 36,38 37,36 Z" 
                fill="#557A62" /* Slightly lighter sage green */
                stroke="#2C3E35"
                strokeWidth="1"
              />
              {/* Leaf 3 (Small accent leaf pointing right) */}
              <path 
                d="M 41,43 C 44,43 46,41 45,37 C 42,37 41,40 41,43 Z" 
                fill="#8B7355" /* Artisanal Brown accent leaf */
                stroke="#8B7355"
                strokeWidth="0.5"
              />
              {/* Little cozy steam vapors blending with the garden sprouts */}
              <path 
                d="M 46,39 C 47,35 49,34 49,31" 
                stroke="#8B7355" 
                strokeWidth="1.2" 
                strokeLinecap="round" 
                fill="none" 
              />
              <path 
                d="M 50,42 C 51.5,38 53,37 53.5,34" 
                stroke="#557A62" 
                strokeWidth="1" 
                strokeLinecap="round" 
                fill="none" 
              />
            </g>

            {/* Tiny sweet flower at the base of the stamp */}
            <circle cx="28" cy="68" r="2.2" fill="#8B7355" />
            <circle cx="25" cy="68" r="1.5" fill="#42614D" />
            <circle cx="31" cy="68" r="1.5" fill="#42614D" />
            <circle cx="28" cy="65" r="1.5" fill="#42614D" />
            <circle cx="28" cy="71" r="1.5" fill="#42614D" />

            {/* "One-Stop" text underneath the cup inside the circle */}
            <text
              x="50"
              y="77"
              textAnchor="middle"
              fill="#2C3E35"
              fontSize="7"
              fontWeight="bold"
              letterSpacing="0.04em"
              className="font-sans font-bold"
            >
              One-Stop
            </text>
          </g>
        </svg>

        {/* Outer glowing organic border effect to represent warmth */}
        <div className="absolute inset-0 rounded-full bg-sage-800/5 scale-102 pointer-events-none" />
      </div>

      {/* 2. Cozy integrated typography side (Only shown if not icon-only) */}
      {!iconOnly && (
        <div className="flex flex-col text-left py-0.5" id="brand-text-block">
          {/* Brand Name - Clean, readable, welcoming Sans-Serif font */}
          <span className="font-sans text-base sm:text-lg font-bold tracking-tight text-sage-950 block leading-tight">
            One-Stop Post Garden
          </span>
          {/* Slogan - Slightly smaller and lighter, acting clearly as a subtitle */}
          <span className="font-sans text-[8px] sm:text-[9px] font-extrabold text-sage-600 tracking-[0.15em] uppercase block transition-colors leading-normal pl-1.5">
            FRESH BAKES, POST, AND COMMUNITY
          </span>
        </div>
      )}

    </div>
  );
}
