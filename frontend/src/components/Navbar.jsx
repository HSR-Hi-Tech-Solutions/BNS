import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants';
import { Menu, X, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 30);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(10, 16, 30, 0.98)'
          : 'rgba(10, 16, 30, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.22)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.35)' : 'none',
      }}
      role="banner"
    >
      {/* ── TOP UTILITY TICKER (Desktop) ────────────────── */}
      <div
        className="hidden md:block py-1.5 transition-all"
        style={{
          background: 'rgba(6, 10, 20, 0.85)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 flex justify-between items-center text-xs">
          <div className="flex items-center gap-2">
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--bns-gold)' }}
            />
            <span
              className="font-semibold tracking-widest uppercase text-[11px]"
              style={{ color: 'var(--bns-gold)' }}
            >
              Voice Of Bengal, Vision For Bharat
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/50 text-xs">
            <div className="flex items-center gap-1.5">
              <MapPin size={12} style={{ color: 'var(--bns-gold)' }} />
              <span>West Bengal, India</span>
            </div>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Email BNS"
            >
              <Mail size={12} style={{ color: 'var(--bns-gold)' }} />
              <span>{COMPANY.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION ─────────────────────────────── */}
      <nav
        className="container mx-auto px-4 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-18 lg:h-20">

          {/* Logo & Brand Identity */}
          <Link
            to="/"
            className="flex items-center gap-3.5 flex-shrink-0 group py-1"
            aria-label="BNS — Bengal News Service home"
          >
            <img
              src="/bns-logo-icon.png"
              alt="BNS emblem"
              className="navbar-logo flex-shrink-0 transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span
                className="font-serif font-bold text-white text-base lg:text-lg tracking-tight leading-tight group-hover:text-[var(--bns-gold)] transition-colors"
              >
                Bengal News Service
              </span>
              <span
                className="text-[11px] font-semibold tracking-widest uppercase leading-tight mt-0.5"
                style={{ color: 'var(--bns-gold)' }}
              >
                PR &amp; Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors py-2 relative ${
                      isActive
                        ? 'text-[var(--bns-gold)] font-semibold'
                        : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <span
                          className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                          style={{ background: 'var(--bns-gold)' }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-sm flex items-center justify-center flex-shrink-0"
              style={{
                background: 'linear-gradient(135deg, var(--bns-gold) 0%, var(--bns-gold-light) 100%)',
                color: 'var(--bns-navy-dark)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.filter = 'brightness(1.08)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.filter = 'none';
                e.currentTarget.style.transform = 'none';
              }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-sm text-white/90 hover:text-white transition-colors"
            style={{
              background: isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.12)',
            }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* ── MOBILE MENU ─────────────────────────────────── */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[440px] opacity-100 pb-5 pt-2' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div
            className="pt-3 space-y-1"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium rounded-sm transition-colors ${
                    isActive
                      ? 'text-[var(--bns-gold)] bg-white/5 font-semibold'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="pt-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full py-2.5 text-center text-xs font-bold uppercase tracking-wider rounded-sm"
                style={{
                  background: 'var(--bns-gold)',
                  color: 'var(--bns-navy-dark)',
                }}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
