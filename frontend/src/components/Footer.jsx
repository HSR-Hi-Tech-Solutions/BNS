import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../constants';
import { Mail, MapPin, Globe, Share2, Video, Rss, X as Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="text-gray-300"
      style={{ background: 'var(--bns-navy-dark)' }}
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Gold top accent */}
      <div
        className="h-0.5"
        style={{ background: 'linear-gradient(90deg, transparent 0%, var(--bns-gold) 30%, var(--bns-gold-light) 70%, transparent 100%)' }}
      />

      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="BNS home" className="inline-block mb-5">
              <img
                src="/bns-logo-full.png"
                alt="Bengal News Service PR & Consultancy Private Limited"
                className="h-16 w-auto object-contain"
                style={{ filter: 'brightness(0) invert(1) opacity(0.85)' }}
              />
            </Link>
            <p className="text-sm text-white/45 leading-relaxed mb-5">
              Bengal News Service PR &amp; Consultancy Private Limited — a digital-first
              media and communications company committed to credible journalism and
              strategic communications.
            </p>
            <p
              className="font-serif italic text-sm mb-6"
              style={{ color: 'var(--bns-gold)' }}
            >
              &ldquo;Voice Of Bengal, Vision For Bharat&rdquo;
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
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
                  className="w-8 h-8 rounded-sm flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'var(--bns-gold)';
                    e.currentTarget.style.color = 'var(--bns-navy)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.35)';
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/60"
            >
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-white/45 transition-colors hover:text-white/80"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/60">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Digital News & Media', anchor: 'digital-news-media' },
                { label: 'Public Relations', anchor: 'public-relations' },
                { label: 'Corporate Communications', anchor: 'public-relations' },
                { label: 'Digital Marketing', anchor: 'digital-marketing' },
                { label: 'Consultancy', anchor: 'consultancy' },
              ].map(({ label, anchor }) => (
                <li key={label}>
                  <Link
                    to={`/services#${anchor}`}
                    className="text-sm text-white/45 transition-colors hover:text-white/80"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="font-sans font-bold text-xs uppercase tracking-widest mb-5 text-white/60">
              Contact &amp; Legal
            </h3>
            <div className="space-y-3 mb-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2.5 text-sm text-white/45 transition-colors hover:text-white/80"
              >
                <Mail size={13} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/35">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>West Bengal, India</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              {[
                { label: 'Privacy Policy', to: '/privacy-policy' },
                { label: 'Terms & Conditions', to: '/terms' },
                { label: 'Business Enquiries', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-white/45 transition-colors hover:text-white/80"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>
            &copy; {year} Bengal News Service PR &amp; Consultancy Private Limited. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            CIN: {COMPANY.cin} &nbsp;|&nbsp; Registered in West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  );
}
