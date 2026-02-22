'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 shadow-lg"
    >
      {/* Top bar with contact info */}
      <div className="bg-amber-950 py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-amber-100">
          <div className="flex items-center gap-6">
            <a href="tel:+254728060501" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} />
              <span>+254 728 060501</span>
            </a>
            <a href="mailto:jujysmahoganycentre@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} />
              <span>jujysmahoganycentre@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="bg-gradient-to-br from-amber-400 to-amber-600 p-2 rounded-lg shadow-md"
            >
              <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center">
                <span className="text-amber-900 font-bold text-xl">J</span>
              </div>
            </motion.div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white tracking-tight">JUJYS</h1>
              <p className="text-xs text-amber-200 -mt-1">Mahogany & Paints Centre</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-amber-100 hover:text-white hover:bg-amber-700/50 rounded-lg transition-all duration-300 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <motion.a
              href="tel:+254728060501"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 px-6 py-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              Get Quote
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-amber-700/50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-amber-700/50 pt-4"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-amber-100 hover:text-white hover:bg-amber-700/50 rounded-lg transition-all font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href="tel:+254728060501"
                  className="mx-4 mt-2 bg-gradient-to-r from-amber-400 to-amber-500 text-amber-900 px-6 py-3 rounded-lg font-semibold text-center shadow-md"
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
