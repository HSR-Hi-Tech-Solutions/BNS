import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isTransparent = isHomePage && !scrolled;

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isTransparent ? 'bg-transparent' : 'shadow-lg'
      }`}
      style={{
        backgroundColor: isTransparent ? 'transparent' : 'var(--bns-navy)',
        borderBottom: isTransparent ? 'none' : '1px solid rgba(201,168,76,0.15)',
      }}
      role="banner"
    >
      {/* Top info bar — desktop only, home only, not scrolled */}
      {isTransparent && (
        <div
          className="hidden lg:block py-2"
          style={{
            background: 'rgba(8,14,26,0.8)',
            backdropFilter: 'blur(8px)',
            borderBottom: '1px solid rgba(201,168,76,0.1)',
          }}
        >
          <div className="container mx-auto px-6 flex justify-between items-center text-xs">
            <span
              className="font-medium tracking-wider uppercase"
              style={{ color: 'var(--bns-gold)', fontSize: '0.6875rem' }}
            >
              Voice Of Bengal, Vision For Bharat
            </span>
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 transition-colors"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--bns-gold)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
              aria-label="Email BNS"
            >
              {COMPANY.email}
            </a>
          </div>
        </div>
      )}

      <nav className="container mx-auto px-4 lg:px-6" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-[72px]">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="BNS — Bengal News Service home"
          >
            <img
              src="/bns-logo-icon.png"
              alt="BNS logo"
              className="h-9 lg:h-11 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div
                className="font-serif font-bold text-white leading-tight text-sm"
              >
                Bengal News Service
              </div>
              <div
                className="text-xs font-medium tracking-wide"
                style={{ color: 'var(--bns-gold)', fontSize: '0.6875rem' }}
              >
                PR &amp; Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm font-medium transition-all duration-200 relative group ${
                    isActive ? 'text-[var(--bns-gold)]' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Underline indicator */}
                    <span
                      className="absolute bottom-0 left-4 right-4 h-0.5 transition-all duration-200"
                      style={{
                        background: 'var(--bns-gold)',
                        transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                        transformOrigin: 'left',
                      }}
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 text-sm font-bold rounded-sm transition-all duration-200 shadow-sm"
              style={{
                background: 'var(--bns-gold)',
                color: 'var(--bns-navy)',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--bns-gold-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--bns-gold)')}
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded-sm text-white transition-colors"
            style={{ background: isOpen ? 'rgba(255,255,255,0.1)' : 'transparent' }}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div
            className="pb-5 pt-3 space-y-0.5"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-2.5 text-sm font-medium transition-colors rounded-sm ${
                    isActive
                      ? 'text-[var(--bns-gold)] bg-white/5'
                      : 'text-white/65 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block mx-0 mt-4 px-4 py-3 text-sm font-bold text-center rounded-sm"
              style={{ background: 'var(--bns-gold)', color: 'var(--bns-navy)' }}
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
