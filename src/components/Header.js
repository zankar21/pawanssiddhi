// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle';

const links = [
  { to: '/', label: 'Home' },
  { to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' },
  { to: '/services', label: 'Services' },
{ to: '/products', label: 'Products' },
  { to: '/sensors', label: 'IoT Sensors' },
  { to: '/analytics', label: 'Analytics' },
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
        <NavLink to="/" className="text-2xl font-heading text-primary">
          PSSPL
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {links.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative link-underline text-base font-body transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-charcoal dark:text-off-white hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
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
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `link-underline text-base font-body transition-colors ${
                    isActive
                      ? 'text-primary'
                      : 'text-charcoal dark:text-off-white hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
