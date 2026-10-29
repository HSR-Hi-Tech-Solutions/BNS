import { Link } from 'react-router-dom';
import { COMPANY, NAV_LINKS } from '../constants';
import {
  Mail,
  MapPin,
  ArrowRight,
  Globe,
  Share2,
  Video,
  Rss,
  X,
} from 'lucide-react';

const FooterLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-400 hover:text-[#c9a84c] transition-colors text-sm flex items-center gap-1.5 group"
  >
    <ArrowRight
      size={12}
      className="text-[#c9a84c] opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0 transition-all"
    />
    {children}
  </Link>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0f1729] text-gray-300"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer */}
      <div className="container mx-auto px-4 lg:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" aria-label="BNS home">
              <img
                src="/bns-logo-full.png"
                alt="Bengal News Service PR & Consultancy Private Limited"
                className="h-20 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">
              Bengal News Service PR & Consultancy Private Limited — a digital-first
              media and communications company committed to credible journalism and
              strategic communications.
            </p>
            <p
              className="text-[#c9a84c] font-semibold text-sm italic"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              &ldquo;Voice Of Bengal, Vision For Bharat&rdquo;
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { Icon: Globe, href: COMPANY.socialMedia.facebook, label: 'Facebook' },
                { Icon: X, href: COMPANY.socialMedia.twitter, label: 'Twitter/X' },
                { Icon: Share2, href: COMPANY.socialMedia.instagram, label: 'Instagram' },
                { Icon: Rss, href: COMPANY.socialMedia.linkedin, label: 'LinkedIn' },
                { Icon: Video, href: COMPANY.socialMedia.youtube, label: 'YouTube' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded flex items-center justify-center bg-white/5 hover:bg-[#c9a84c] hover:text-[#1a2744] text-gray-400 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <FooterLink to={link.path}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
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
                    className="text-gray-400 hover:text-[#c9a84c] transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-wider mb-5"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact & Legal
            </h3>
            <div className="space-y-3 mb-5">
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-start gap-2.5 text-sm text-gray-400 hover:text-[#c9a84c] transition-colors"
              >
                <Mail size={14} className="mt-0.5 flex-shrink-0" />
                <span>{COMPANY.email}</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-gray-400">
                <MapPin size={14} className="mt-0.5 flex-shrink-0" />
                <span>West Bengal, India</span>
              </div>
            </div>
            <ul className="space-y-2.5">
              <li>
                <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              </li>
              <li>
                <FooterLink to="/terms">Terms & Conditions</FooterLink>
              </li>
              <li>
                <FooterLink to="/contact">Business Enquiries</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>
            &copy; {year} Bengal News Service PR & Consultancy Private Limited. All
            rights reserved.
          </p>
          <p className="text-center sm:text-right">
            CIN: {COMPANY.cin} | Registered in West Bengal, India
          </p>
        </div>
      </div>
    </footer>
  );
}

