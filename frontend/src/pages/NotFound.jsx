import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowRight } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

export default function NotFound() {
  useEffect(() => {
    setPageMeta({
      title: '404 — Page Not Found | BNS Bengal News Service',
      description: 'The page you are looking for could not be found.',
    });
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-24 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #080e1a 0%, #0f1729 45%, #1a2744 100%)',
      }}
    >
      {/* Gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent 0%, var(--bns-gold) 50%, transparent 100%)' }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-lg relative z-10"
      >
        <img
          src="/bns-logo-icon.png"
          alt="BNS"
          className="h-14 w-auto mx-auto mb-8 opacity-90"
        />

        <div
          className="font-serif font-bold text-7xl sm:text-8xl mb-4 leading-none select-none"
          style={{ color: 'var(--bns-gold)' }}
          aria-hidden="true"
        >
          404
        </div>

        <p className="eyebrow mb-3" style={{ color: 'var(--bns-gold)' }}>Error</p>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/60 text-sm leading-relaxed mb-8">
          The page you are looking for may have been moved, renamed, or does
          not exist. Please check the URL or use the navigation below.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link to="/" className="btn-gold">
            <Home size={15} />
            Back to Home
          </Link>
          <Link to="/contact" className="btn-outline-white">
            Contact Us
          </Link>
        </div>

        <div
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-white/40 text-xs mb-3 uppercase tracking-wider">Quick Navigation</p>
          <div className="flex flex-wrap gap-4 justify-center text-xs">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Leadership', to: '/leadership' },
              { label: 'Privacy Policy', to: '/privacy-policy' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="text-white/60 hover:text-[var(--bns-gold)] transition-colors flex items-center gap-1"
              >
                {label} <ArrowRight size={11} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
