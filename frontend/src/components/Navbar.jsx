import { useState, useEffect, useCallback } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, COMPANY } from '../constants';
import { Menu, X, Mail } from 'lucide-react';

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

  const navBase = isHomePage && !scrolled
    ? 'bg-transparent'
    : 'bg-[#1a2744] shadow-lg';

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBase}`}
      role="banner"
    >
      {/* Top info bar - only on desktop */}
      {(!isHomePage || scrolled) ? null : (
        <div className="hidden lg:block bg-[#0f1729] border-b border-[rgba(201,168,76,0.2)] py-1.5">
          <div className="container mx-auto px-6 flex justify-between items-center text-xs text-gray-300">
            <span className="font-medium text-[#c9a84c]">
              Voice Of Bengal, Vision For Bharat
            </span>
            <div className="flex items-center gap-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-1.5 hover:text-[#c9a84c] transition-colors"
                aria-label="Email BNS"
              >
                <Mail size={12} />
                <span>{COMPANY.email}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      <nav
        className="container mx-auto px-4 lg:px-6"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 flex-shrink-0"
            aria-label="BNS — Bengal News Service home"
          >
            <img
              src="/bns-logo-icon.png"
              alt="BNS logo"
              className="h-10 lg:h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <div
                className="font-bold text-white text-sm leading-tight"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Bengal News Service
              </div>
              <div className="text-[#c9a84c] text-xs font-medium tracking-wide">
                PR & Consultancy
              </div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#c9a84c] bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-[#c9a84c] text-[#1a2744] rounded font-semibold text-sm hover:bg-[#d4b86a] transition-all duration-200 shadow-md"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden p-2 rounded text-white hover:bg-white/10 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
          aria-hidden={!isOpen}
        >
          <div className="pb-4 border-t border-white/10 mt-1 pt-3 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-2.5 rounded text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-[#c9a84c] bg-white/10'
                      : 'text-gray-200 hover:text-white hover:bg-white/10'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block mx-4 mt-3 px-4 py-2.5 bg-[#c9a84c] text-[#1a2744] rounded font-semibold text-sm text-center hover:bg-[#d4b86a] transition-colors"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

