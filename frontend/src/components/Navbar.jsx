import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants';
import { Menu, X, Mail, Phone, ArrowRight } from 'lucide-react';

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

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'rgba(7, 12, 22, 0.97)'
          : 'rgba(9, 15, 28, 0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.18)',
        boxShadow: scrolled ? '0 10px 30px -5px rgba(0, 0, 0, 0.4)' : 'none',
      }}
      role="banner"
    >
      {/* ── TOP UTILITY TICKER (Desktop) ────────────────── */}
      <div
        className="hidden md:block py-2 border-b border-white/[0.06]"
        style={{ background: 'rgba(5, 9, 17, 0.8)' }}
      >
        <div className="container flex justify-between items-center text-xs">
          <div className="flex items-center gap-2.5">
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
            <span className="text-white/20">|</span>
            <span className="text-white/45 text-[11px]">
              Corporate Communications &amp; Media Platform
            </span>
          </div>

          <div className="flex items-center gap-6 text-white/55 text-xs">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              aria-label="Email BNS"
            >
              <Mail size={12} style={{ color: 'var(--bns-gold)' }} />
              <span>{COMPANY.email}</span>
            </a>
            <span className="text-white/20">|</span>
            <span className="text-white/45 text-[11px]">CIN: {COMPANY.cin}</span>
          </div>
        </div>
      </div>

      {/* ── MAIN NAVIGATION ─────────────────────────────── */}
      <nav className="container" aria-label="Main navigation">
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
              className="navbar-logo flex-shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col justify-center">
              <span
                className="font-serif font-bold text-white text-base lg:text-lg tracking-tight leading-tight group-hover:text-[var(--bns-gold)] transition-colors"
              >
                Bengal News Service
              </span>
              <span
                className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase leading-tight mt-0.5"
                style={{ color: 'var(--bns-gold)' }}
              >
                PR &amp; Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-white/[0.04] border border-white/[0.08] p-1.5 mr-3">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[var(--bns-navy-light)] shadow-sm'
                        : 'text-white/70 hover:text-white hover:bg-white/[0.06]'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-gold !py-2.5 !px-5 !text-xs !rounded-full shadow-sm"
            >
              <span>Get In Touch</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-lg text-white/90 hover:text-white transition-colors"
            style={{
              background: isOpen ? 'rgba(255, 255, 255, 0.12)' : 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
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
            isOpen ? 'max-h-[460px] opacity-100 pb-5 pt-1' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div
            className="pt-3 space-y-1 rounded-2xl bg-white/[0.03] border border-white/[0.08] p-3"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-2.5 text-sm font-medium rounded-xl transition-colors ${
                    isActive
                      ? 'text-[var(--bns-gold)] bg-white/[0.08] font-semibold'
                      : 'text-white/80 hover:text-white hover:bg-white/[0.04]'
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
                className="btn-gold w-full !rounded-xl !py-3 !text-xs"
              >
                <span>Get In Touch</span>
                <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
