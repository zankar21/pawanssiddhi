// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? 'bg-white/60 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#home" className="text-2xl font-heading text-primary">
          Pawanssiddhi
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="relative link-underline text-base font-body text-charcoal dark:text-off-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Utilities */}
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-charcoal dark:text-off-white"
            aria-label="Toggle menu"
          >
            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md">
          <div className="container mx-auto flex flex-col px-6 py-4 space-y-2">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="link-underline text-base font-body text-charcoal dark:text-off-white hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
