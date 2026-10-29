import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants';
import { Menu, X, Mail, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
      role="banner"
    >
      {/* ── TOP UTILITY TICKER (Desktop) ────────────────── */}
      <div className="hidden md:block bg-[#070c16] border-b border-slate-800/80 py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF55]" />
            <span className="font-semibold tracking-wider uppercase text-[11px] text-[#D4AF55]">
              Voice of Bengal, Vision for Bharat
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300 text-xs">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Email BNS"
            >
              <Mail size={12} className="text-[#D4AF55]" />
              <span>{COMPANY.email}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span className="text-slate-400 text-[11px]">CIN: {COMPANY.cin}</span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION ─────────────────────────────── */}
      <nav
        className="bg-[#0B1120] border-b border-[#D4AF55]/20"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18 lg:h-20">

          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3.5 shrink-0 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF55] rounded-md"
            aria-label="BNS — Bengal News Service home"
          >
            <img
              src="/bns-logo-icon.png"
              alt="BNS emblem"
              className="h-10 sm:h-11 w-auto object-contain shrink-0"
            />
            <div className="flex flex-col justify-center">
              <span className="font-serif font-bold text-base sm:text-lg text-[#FAF9F6] tracking-tight leading-none">
                Bengal News Service
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-[#D4AF55] tracking-[0.2em] uppercase leading-none mt-1">
                PR &amp; CONSULTANCY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-md text-sm font-medium tracking-wide transition-colors duration-150 ${
                    isActive
                      ? 'text-[#D4AF55] font-semibold bg-white/5'
                      : 'text-[#FAF9F6] hover:text-[#D4AF55] hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="ml-4 bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md shadow-sm transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-1.5 shrink-0"
            >
              <span>Get in Touch</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-md text-[#FAF9F6] hover:text-[#D4AF55] hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF55]"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── MOBILE MENU DROPDOWN ────────────────────────── */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="px-4 py-4 space-y-1 bg-[#0B1120]">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3.5 py-2.5 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#D4AF55] bg-white/5 font-semibold'
                      : 'text-[#FAF9F6] hover:text-[#D4AF55] hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-3">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider py-3 rounded-md text-center block shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
