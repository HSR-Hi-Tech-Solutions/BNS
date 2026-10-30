import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen bg-[#0B1120] text-white flex flex-col items-center justify-center px-4 py-24 text-center">
      <div className="max-w-lg mx-auto">
        <img
          src="/favicon.png"
          alt="BNS"
          className="h-12 w-auto mx-auto mb-6 opacity-90"
        />

        <div className="font-display font-bold text-7xl sm:text-8xl text-[#D4AF55] leading-none mb-4 select-none">
          404
        </div>

        <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-2 block">
          Error
        </span>
        <h1 className="font-display font-bold text-2xl sm:text-3xl text-[#FAF9F6] mb-4">
          Page Not Found
        </h1>
        <p className="text-slate-300 text-sm leading-relaxed mb-8">
          The requested page could not be located. It may have been moved or renamed.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link
            to="/"
            className="bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-md shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <Home size={15} />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/contact"
            className="border border-slate-600 hover:border-white text-white font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-md transition-colors"
          >
            <span>Contact Us</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-800 text-xs text-slate-400">
          <p className="mb-3 uppercase tracking-wider text-[11px] font-semibold text-slate-500">
            Quick Navigation
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { label: 'About Us', to: '/about' },
              { label: 'Our Services', to: '/services' },
              { label: 'Leadership', to: '/leadership' },
              { label: 'Contact', to: '/contact' },
            ].map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="hover:text-[#D4AF55] transition-colors inline-flex items-center gap-1"
              >
                <span>{label}</span>
                <ArrowRight size={11} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
