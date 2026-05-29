/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeOffer from './components/WhatWeOffer';
import VillageExperience from './components/VillageExperience';
import CommunityEvents from './components/CommunityEvents';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream-100 selection:bg-sage-200 selection:text-sage-900 scroll-smooth flex flex-col antialiased">
      
      {/* Universal Village Notice Banner - optional, high-quality, authentic */}
      <div className="bg-sage-700 text-cream-100 py-2.5 px-4 text-center text-xs font-medium tracking-wide border-b border-sage-800">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-cream-100 animate-ping"></span>
          <span>🌳 Celebrating Overbury Village Hub Month: Enjoy 15% off bakes prior to 10AM!</span>
        </span>
      </div>

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Section 2: About Us */}
      <About />

      {/* Section 3: What We Offer */}
      <WhatWeOffer />

      {/* Section 4: Village Experience */}
      <VillageExperience />

      {/* Section 6: Community Events */}
      <CommunityEvents />

      {/* Footer / Community Trust Section */}
      <Footer />

    </div>
  );
}
