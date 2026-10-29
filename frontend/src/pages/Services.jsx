import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const ICON_MAP = {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
};

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    setPageMeta({
      title: 'Our Practice Areas — BNS Bengal News Service',
      description:
        'BNS offers digital news & media, public relations & corporate communications, digital marketing & advertising, and media consultancy services.',
    });
  }, []);

  // Smooth scroll to anchor on load
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
    <div className="overflow-x-hidden">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="eyebrow-badge justify-center mb-4">
              <span className="accent-line" />
              <span>Integrated Capabilities</span>
              <span className="accent-line" />
            </div>
            <h1 className="font-serif text-white mb-4">Our Practice Areas</h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Strategic media, public relations, performance marketing, and executive
              consultancy structured to protect brand equity and drive public influence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STICKY SERVICE NAVIGATION PILL ────────────── */}
      <div
        className="sticky z-40 py-3 shadow-md border-b border-white/10"
        style={{
          top: '72px',
          background: 'rgba(7, 12, 22, 0.94)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div className="container">
          <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
            {SERVICES.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 text-white/70 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/10"
              >
                <span className="text-[var(--bns-gold)] mr-2 font-serif font-bold">
                  0{idx + 1}
                </span>
                <span>{s.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ───────────────────────────── */}
      <div className="divide-y divide-slate-200">
        {SERVICES.map((service, idx) => {
          const Icon = ICON_MAP[service.icon];
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`section-py scroll-mt-28 ${
                isEven ? 'bg-white' : 'bg-[var(--bns-gray-50)]'
              }`}
              aria-label={service.title}
            >
              <div className="container">
                <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">

                  {/* Left Column: Practice Overview Card */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="lg:col-span-5"
                  >
                    <div
                      className="rounded-2xl p-8 border border-white/10 text-white"
                      style={{
                        background: 'linear-gradient(150deg, #070c16 0%, #111d33 60%, #0c1424 100%)',
                        boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                      }}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: 'rgba(201, 168, 76, 0.15)',
                            color: 'var(--bns-gold)',
                          }}
                        >
                          <Icon size={24} />
                        </div>
                        <span className="font-serif font-bold text-3xl text-white/20 select-none">
                          0{idx + 1}
                        </span>
                      </div>

                      <div className="eyebrow-badge mb-2">
                        <span>Practice Area 0{idx + 1}</span>
                      </div>
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                        {service.title}
                      </h2>
                      <p className="text-white/70 text-sm leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="pt-6 border-t border-white/10">
                        <Link
                          to="/contact"
                          className="btn-gold w-full !rounded-xl !py-3 !text-xs justify-center"
                        >
                          <span>Enquire About This Practice</span>
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right Column: Key Deliverables Grid */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.1}
                    variants={fadeUp}
                    className="lg:col-span-7"
                  >
                    <div className="mb-6">
                      <div className="eyebrow-badge mb-2">
                        <span className="accent-line" />
                        <span>Core Deliverables</span>
                      </div>
                      <h3 className="section-heading mb-3">
                        Scope of Capabilities
                      </h3>
                      <p className="text-sm text-[var(--bns-gray-500)] leading-relaxed">
                        Every engagement is tailored to client specifications under clear SLAs and professional ethics.
                      </p>
                    </div>

                    {/* Deliverables List */}
                    <div className="grid sm:grid-cols-2 gap-4 mb-6">
                      {service.items.map((item, itemIdx) => (
                        <div
                          key={item}
                          className="bns-card p-5 border border-slate-200 flex items-start gap-3.5 group"
                        >
                          <div
                            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{
                              background: 'rgba(201, 168, 76, 0.12)',
                              color: 'var(--bns-gold)',
                            }}
                          >
                            <CheckCircle size={15} />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[var(--bns-gray-400)] mb-1">
                              Module {String(itemIdx + 1).padStart(2, '0')}
                            </p>
                            <h4 className="text-sm font-semibold text-[var(--bns-navy)] leading-snug">
                              {item}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Compliance Note */}
                    <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 text-xs text-[var(--bns-gray-500)]">
                      <ShieldCheck size={16} className="text-[var(--bns-gold)] flex-shrink-0 mt-0.5" />
                      <span>
                        All media relations and promotional deliverables comply with Press Council of India standards
                        and relevant advertising codes.
                      </span>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CALL TO ACTION ────────────────────────────── */}
      <section
        className="section-py text-white text-center"
        style={{
          background: 'linear-gradient(135deg, #070c16 0%, #14223d 50%, #7a1717 100%)',
        }}
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4">
              Begin an Institutional Engagement
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-8 leading-relaxed">
              Contact our corporate advisory team to discuss retainers, media briefings, or communication audits.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold !rounded-full">
                <span>Submit Business Brief</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
