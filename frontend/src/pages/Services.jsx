import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper, Megaphone, TrendingUp, Briefcase,
  ArrowRight, ChevronRight,
} from 'lucide-react';
import { SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const ICON_MAP = { Newspaper, Megaphone, TrendingUp, Briefcase };

// Alternating section backgrounds
const SECTION_BG = ['bg-white', 'bg-[var(--bns-cream)]', 'bg-white', 'bg-[var(--bns-cream)]'];

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    setPageMeta({
      title: 'Our Services — BNS Bengal News Service',
      description:
        'BNS offers digital news & media, public relations & corporate communications, digital marketing & advertising, and media consultancy services.',
    });
  }, []);

  // Scroll to anchor on load
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, [location.hash]);

  return (
    <div>
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <p className="eyebrow mb-5">What We Do</p>
            <h1 className="font-serif text-white mb-5">Our Services</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              An integrated suite of media, communications, marketing, and
              consultancy services — designed to inform audiences and deliver
              results for clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY SERVICE NAV ─────────────────────────── */}
      <div
        className="sticky z-40 shadow-md"
        style={{
          top: '64px',
          background: 'var(--bns-navy-dark)',
          borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {SERVICES.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-5 py-4 text-sm font-medium whitespace-nowrap transition-all relative"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  borderBottom: '2px solid transparent',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--bns-gold)';
                  e.currentTarget.style.borderBottomColor = 'var(--bns-gold)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.borderBottomColor = 'transparent';
                }}
              >
                <span
                  className="font-bold mr-2 text-xs"
                  style={{ color: 'rgba(201,168,76,0.5)' }}
                >
                  0{idx + 1}
                </span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ───────────────────────────── */}
      {SERVICES.map((service, idx) => {
        const Icon = ICON_MAP[service.icon];
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${SECTION_BG[idx % SECTION_BG.length]} section-py scroll-mt-32`}
            aria-label={service.title}
          >
            <div className="container mx-auto px-4 lg:px-6">
              <div className="grid lg:grid-cols-12 gap-12 items-start">

                {/* Service header / intro card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`lg:col-span-4 ${!isEven ? 'lg:order-2' : ''}`}
                >
                  <div
                    className="rounded-sm p-8 sticky"
                    style={{
                      background: 'var(--bns-navy)',
                      top: '8rem',
                    }}
                  >
                    {/* Icon + number */}
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className="w-12 h-12 flex items-center justify-center rounded-sm"
                        style={{ background: 'rgba(201,168,76,0.12)' }}
                      >
                        <Icon size={22} style={{ color: 'var(--bns-gold)' }} />
                      </div>
                      <span
                        className="font-serif font-bold text-5xl leading-none select-none"
                        style={{ color: 'rgba(201,168,76,0.15)', letterSpacing: '-0.04em' }}
                        aria-hidden="true"
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    <p className="eyebrow mb-3" style={{ color: 'var(--bns-gold)' }}>
                      Service 0{idx + 1}
                    </p>
                    <h2 className="font-serif text-white text-2xl leading-snug mb-4">
                      {service.title}
                    </h2>
                    <div className="rule-gold mb-5" />
                    <p className="text-sm text-white/60 leading-relaxed mb-7">
                      {service.description}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
                      style={{ color: 'var(--bns-gold)' }}
                    >
                      Enquire About This Service <ChevronRight size={14} />
                    </Link>
                  </div>
                </motion.div>

                {/* Items list */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.1}
                  variants={fadeUp}
                  className={`lg:col-span-8 ${!isEven ? 'lg:order-1' : ''}`}
                >
                  <div className="mb-8">
                    <p className="eyebrow mb-3">What&apos;s Included</p>
                    <h3
                      className="font-serif text-[var(--bns-navy)] leading-tight"
                      style={{ fontSize: 'var(--text-h2)' }}
                    >
                      {service.title} Offerings
                    </h3>
                  </div>

                  {/* Editorial list style instead of icon cards */}
                  <div className="divide-y" style={{ borderTop: '1px solid var(--bns-gray-200)', borderBottom: '1px solid var(--bns-gray-200)' }}>
                    {service.items.map((item, itemIdx) => (
                      <motion.div
                        key={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={itemIdx * 0.04}
                        variants={fadeUp}
                        className="flex items-start gap-5 py-4"
                      >
                        <span
                          className="font-serif font-bold text-xs flex-shrink-0 w-6 text-right pt-0.5"
                          style={{ color: 'var(--bns-gold)' }}
                        >
                          {String(itemIdx + 1).padStart(2, '0')}
                        </span>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: 'var(--bns-gray-600)' }}
                        >
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div
                    className="mt-6 p-5 rounded-sm text-sm"
                    style={{
                      background: 'rgba(26,39,68,0.04)',
                      border: '1px solid rgba(26,39,68,0.08)',
                      color: 'var(--bns-gray-500)',
                    }}
                  >
                    <span className="font-semibold text-[var(--bns-navy)]">Note: </span>
                    All services are provided in accordance with applicable Indian laws
                    and professional ethics. Availability and scope are subject to
                    consultation and agreement.
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── WHY BNS ───────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-navy)' }}
        aria-label="Why choose BNS"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="eyebrow mb-4" style={{ color: 'var(--bns-gold)' }}>Our Advantage</p>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Why Work with BNS?
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px"
            style={{ background: 'rgba(255,255,255,0.06)' }}>
            {[
              {
                num: '01',
                title: 'Journalism-Led PR',
                desc: 'Our team\'s newsroom background gives your communications a credibility and insight edge.',
              },
              {
                num: '02',
                title: 'Bengal Expertise',
                desc: 'Unmatched regional knowledge — languages, culture, media landscape, and political dynamics.',
              },
              {
                num: '03',
                title: 'Integrated Approach',
                desc: 'News, PR, marketing, and consultancy in one unified partnership — coherent across channels.',
              },
              {
                num: '04',
                title: 'Digital-First Mindset',
                desc: 'Built for the digital age — mobile, social, and search-ready across all deliverables.',
              },
            ].map(({ num, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.08}
                variants={fadeUp}
                className="p-8"
                style={{ background: 'rgba(255,255,255,0.03)' }}
              >
                <p
                  className="font-serif font-bold text-4xl mb-5 leading-none"
                  style={{ color: 'rgba(201,168,76,0.25)' }}
                >
                  {num}
                </p>
                <h3 className="font-serif text-white text-lg mb-3">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section
        className="section-py-sm"
        style={{ background: 'var(--bns-gold)' }}
        aria-label="Services CTA"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          >
            <div>
              <h2 className="font-serif text-[var(--bns-navy)] text-2xl mb-1">Ready to Begin?</h2>
              <p className="text-[var(--bns-navy)]/75 text-sm">
                Contact us to discuss your requirements and explore how BNS can help.
              </p>
            </div>
            <Link to="/contact" className="btn-primary flex-shrink-0">
              Send a Business Enquiry <ArrowRight size={15} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
