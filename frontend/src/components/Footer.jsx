import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../constants';
import { Mail, MapPin, Globe, Share2, Video, Rss, X as Twitter, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-gray-300 relative overflow-hidden"
      style={{ background: 'var(--bns-navy-dark)' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Top Hairline Gold Accent */}
      <div
        className="h-[2px]"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--bns-gold) 35%, var(--bns-gold-light) 65%, transparent 100%)',
        }}
      />

      {/* Main Footer Container */}
      <div className="container py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand & Identity Column */}
          <div className="lg:col-span-5">
            <Link to="/" aria-label="BNS home" className="inline-flex items-center gap-3.5 mb-5 group">
              <img
                src="/bns-logo-icon.png"
                alt="BNS logo"
                className="navbar-logo"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-lg tracking-tight leading-tight">
                  Bengal News Service
                </span>
                <span
                  className="text-[11px] font-semibold tracking-widest uppercase mt-0.5"
                  style={{ color: 'var(--bns-gold)' }}
                >
                  PR &amp; Consultancy Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-md">
              A digital-first media enterprise and corporate communications practice.
              Connecting Bengal&apos;s cultural and policy landscape with national perspectives
              while delivering newsroom-backed strategic PR and advisory services.
            </p>

            <div className="flex items-center gap-2 mb-6 text-xs text-[var(--bns-gold)] font-serif italic">
              <span>&ldquo;Voice Of Bengal, Vision For Bharat&rdquo;</span>
            </div>

            {/* Social Icons Strip */}
            <div className="flex items-center gap-2">
              {[
                { Icon: Globe, href: COMPANY.socialMedia.facebook, label: 'Facebook' },
                { Icon: Twitter, href: COMPANY.socialMedia.twitter, label: 'Twitter/X' },
                { Icon: Share2, href: COMPANY.socialMedia.instagram, label: 'Instagram' },
                { Icon: Rss, href: COMPANY.socialMedia.linkedin, label: 'LinkedIn' },
                { Icon: Video, href: COMPANY.socialMedia.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.45)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--bns-gold)';
                    e.currentTarget.style.color = 'var(--bns-navy-dark)';
                    e.currentTarget.style.borderColor = 'var(--bns-gold)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.45)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas Column */}
          <div className="lg:col-span-3">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/70">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Digital News & Media', anchor: 'digital-news-media' },
                { label: 'Public Relations', anchor: 'public-relations' },
                { label: 'Corporate Communications', anchor: 'public-relations' },
                { label: 'Digital Marketing & Ads', anchor: 'digital-marketing' },
                { label: 'Strategic Media Advisory', anchor: 'consultancy' },
              ].map(({ label, anchor }) => (
                <li key={label}>
                  <Link
                    to={`/services#${anchor}`}
                    className="text-white/55 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/70">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/55 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-white/55 hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Corporate Office & Direct Reach */}
          <div className="lg:col-span-2">
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/70">
              Corporate Desk
            </h3>
            <div className="space-y-3.5 text-xs text-white/55 mb-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="mt-0.5 text-[var(--bns-gold)] flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-[var(--bns-gold)] flex-shrink-0" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.08] text-[11px] text-white/40">
              <p>CIN: {COMPANY.cin}</p>
              <p className="mt-0.5">Incorporated in West Bengal</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Band */}
      <div className="border-t border-white/[0.07]">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>
            &copy; {year} Bengal News Service PR &amp; Consultancy Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms of Use
            </Link>
            <span>·</span>
            <span className="text-white/30">RoC Kolkata</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
