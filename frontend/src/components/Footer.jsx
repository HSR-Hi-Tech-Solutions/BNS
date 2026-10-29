import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../constants';
import { Mail, MapPin, Globe, Share2, Video, Rss, X as Twitter } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#070c16] text-slate-300 border-t border-slate-800"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link to="/" aria-label="BNS home" className="inline-flex items-center gap-3.5 mb-5 group">
              <img
                src="/bns-logo-icon.png"
                alt="BNS logo"
                className="h-10 w-auto object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-white text-lg tracking-tight leading-none">
                  Bengal News Service
                </span>
                <span className="text-[10px] font-semibold text-[#D4AF55] tracking-[0.2em] uppercase leading-none mt-1">
                  PR &amp; CONSULTANCY PVT. LTD.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed mb-5 max-w-md">
              A digital-first media enterprise and corporate communications practice.
              Delivering credible journalism from Bengal to Bharat, alongside strategic PR,
              corporate communications, and consultancy for businesses and institutions.
            </p>

            <p className="text-xs text-[#D4AF55] font-serif italic mb-6">
              &ldquo;Voice of Bengal, Vision for Bharat&rdquo;
            </p>

            {/* Social Icons */}
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
                  className="w-8 h-8 rounded-md bg-white/5 hover:bg-[#D4AF55] text-slate-400 hover:text-[#0B1120] border border-white/10 flex items-center justify-center transition-all duration-150"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-5">
              Practice Areas
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Digital News & Media', anchor: 'digital-news-media' },
                { label: 'Public Relations', anchor: 'public-relations' },
                { label: 'Corporate Communications', anchor: 'public-relations' },
                { label: 'Digital Marketing & Ads', anchor: 'digital-marketing' },
                { label: 'Media Consultancy', anchor: 'consultancy' },
              ].map(({ label, anchor }) => (
                <li key={label}>
                  <Link
                    to={`/services#${anchor}`}
                    className="text-slate-400 hover:text-[#D4AF55] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-5">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-[#D4AF55] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy-policy" className="text-slate-400 hover:text-[#D4AF55] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-400 hover:text-[#D4AF55] transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-200 mb-5">
              Corporate Office
            </h3>
            <div className="space-y-3 text-xs text-slate-400 mb-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <Mail size={14} className="text-[#D4AF55] shrink-0 mt-0.5" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D4AF55] shrink-0 mt-0.5" />
                <span>Kolkata, West Bengal, India</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500">
              <p>CIN: {COMPANY.cin}</p>
              <p className="mt-0.5">RoC Kolkata, West Bengal</p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>
            &copy; {year} Bengal News Service PR &amp; Consultancy Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
