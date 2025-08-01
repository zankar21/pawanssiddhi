// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import DarkModeToggle from './DarkModeToggle';

const links = [
  { to: '/', label: 'Home' },
{ to: '/services', label: 'Services' },
  { to: '/products', label: 'Products' },
  { to: '/iot-sensors', label: 'IoT Sensors' },
  { to: '/analytics', label: 'Analytics' },
{ to: '/team', label: 'Team' },
  { to: '/blog', label: 'Blog' }, 
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
      className={`fixed w-full z-50 transition-all py-4 md:py-6 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo with pill background */}
        <NavLink
          to="/"
          className="relative z-20 bg-primary rounded-full px-6 py-2 text-white font-extrabold tracking-wide text-3xl md:text-4xl shadow-lg hover:shadow-xl transition-shadow"
          onClick={() => setOpen(false)}
        >
          PSSPL
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-12 font-semibold text-gray-800 tracking-wide">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative pb-1 hover:text-primary transition-colors text-lg ${
                  isActive
                    ? 'text-primary after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary'
                    : 'text-gray-800'
                }`
              }
              onClick={() => setOpen(false)}
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
            className="md:hidden text-gray-800"
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="md:hidden bg-white/90 backdrop-blur-md border-t border-gray-200 shadow-lg">
          <div className="container mx-auto flex flex-col px-6 py-4 space-y-2">
            {links.map((link) => (
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
