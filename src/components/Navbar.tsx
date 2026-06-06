/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#offers' },
    { label: 'Menu', href: '', isModalTrigger: true },
    { label: 'Community Events', href: '#events' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof menuItems[0]) => {
    if (item.isModalTrigger) {
      e.preventDefault();
      window.dispatchEvent(new CustomEvent('open-menu-modal'));
      const offersEl = document.querySelector('#offers');
      if (offersEl) {
        offersEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsOpen(false);
    } else {
      handleScroll(e, item.href);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-sage-100 bg-cream-100/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Brand Logo & Slogan */}
          <div className="flex flex-col justify-center">
            <a 
              href="#home" 
              onClick={(e) => handleScroll(e, '#home')}
              className="group block"
              id="nav-logo-link"
            >
              <BrandLogo className="transition-transform duration-300 group-hover:scale-[1.01]" />
            </a>
          </div>

          {/* Large Screen Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(e, item)}
                className="font-sans text-sm font-bold tracking-wider text-sage-800 hover:text-sage-600 transition-colors py-2 relative group"
                id={`nav-item-${item.label.toLowerCase()}`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-sage-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
              </a>
            ))}
          </nav>

          {/* Quick Notice Header Detail - low volume, no intrusive buttons */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-sage-600 border-l border-sage-200 pl-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sage-600"></span>
            </span>
            <span className="font-bold">Open Today: 8AM - 6PM</span>
          </div>

          {/* Mobile hamburger menu */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-sage-800 hover:bg-sage-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              id="mobile-menu-toggle"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden border-t border-sage-100 bg-cream-100 animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-menu">
          <div className="space-y-1 px-4 py-4 pb-6 shadow-inner bg-cream-50">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleItemClick(e, item)}
                className="block rounded-md px-3 py-3 text-base font-medium text-sage-800 hover:bg-sage-100 hover:text-sage-900 transition-colors"
                id={`mobile-nav-item-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            <div className="border-t border-sage-100 pt-3 mt-3 px-3 flex items-center gap-2 text-xs font-mono text-sage-600">
              <span className="h-2 w-2 rounded-full bg-sage-600"></span>
              <span>Mon-Sat: 8:00 AM - 6:00 PM</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
