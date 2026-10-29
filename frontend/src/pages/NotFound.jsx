import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

export default function NotFound() {
  useEffect(() => {
    setPageMeta({
      title: '404 — Page Not Found | BNS Bengal News Service',
      description: 'The page you are looking for could not be found.',
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f1729] via-[#1a2744] to-[#243362] flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg"
      >
        {/* Logo */}
        <img
          src="/bns-logo-icon.png"
          alt="BNS"
          className="h-16 w-auto mx-auto mb-8 opacity-80"
        />

        {/* 404 */}
        <div
          className="text-8xl sm:text-9xl font-bold text-[#c9a84c] opacity-80 mb-4 leading-none"
          style={{ fontFamily: 'var(--font-serif)' }}
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="text-2xl sm:text-3xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Page Not Found
        </h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          The page you are looking for may have been moved, renamed, or does
          not exist. Please check the URL or navigate using the links below.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link to="/" className="btn-gold">
            <Home size={16} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline-white">
            Contact Us
          </Link>
        </div>

        {/* Helpful links */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm mb-4">You might be looking for:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Leadership', to: '/leadership' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-[#c9a84c] text-sm hover:text-white transition-colors underline"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

