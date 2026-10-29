import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper, Megaphone, TrendingUp, Briefcase,
  CheckCircle, ArrowRight, ChevronRight,
} from 'lucide-react';
import { SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const ICON_MAP = { Newspaper, Megaphone, TrendingUp, Briefcase };

const SECTION_THEMES = [
  {
    headerBg: 'bg-[#1a2744]',
    headerText: 'text-white',
    iconColor: 'text-[#c9a84c]',
    accent: 'bg-[#c9a84c]',
    sectionBg: 'bg-white',
    numberBg: 'bg-[#1a2744]/8',
    numberText: 'text-[#1a2744]',
  },
  {
    headerBg: 'bg-[#8b1a1a]',
    headerText: 'text-white',
    iconColor: 'text-white',
    accent: 'bg-[#c9a84c]',
    sectionBg: 'bg-[#faf8f3]',
    numberBg: 'bg-[#8b1a1a]/8',
    numberText: 'text-[#8b1a1a]',
  },
  {
    headerBg: 'bg-[#c9a84c]',
    headerText: 'text-[#1a2744]',
    iconColor: 'text-[#1a2744]',
    accent: 'bg-[#1a2744]',
    sectionBg: 'bg-white',
    numberBg: 'bg-[#c9a84c]/15',
    numberText: 'text-[#1a2744]',
  },
  {
    headerBg: 'bg-[#243362]',
    headerText: 'text-white',
    iconColor: 'text-[#c9a84c]',
    accent: 'bg-[#c9a84c]',
    sectionBg: 'bg-[#faf8f3]',
    numberBg: 'bg-[#243362]/8',
    numberText: 'text-[#243362]',
  },
];

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
      {/* Hero */}
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-4">
              What We Do
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Our Services
            </h1>
            <div className="gold-divider center mb-5" />
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
              An integrated suite of media, communications, marketing, and
              consultancy services — designed to inform audiences and deliver
              results for clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Nav Pills */}
      <div className="bg-[#0f1729] sticky top-[64px] lg:top-[80px] z-40 shadow-md">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {SERVICES.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex-shrink-0 px-4 py-2 rounded text-sm font-medium text-gray-400 hover:text-[#c9a84c] hover:bg-white/8 transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Service Sections */}
      {SERVICES.map((service, idx) => {
        const Icon = ICON_MAP[service.icon];
        const theme = SECTION_THEMES[idx % SECTION_THEMES.length];
        const isEven = idx % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`${theme.sectionBg} section-py scroll-mt-32`}
            aria-label={service.title}
          >
            <div className="container mx-auto px-4 lg:px-6">
              <div className={`grid lg:grid-cols-5 gap-10 items-start ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                {/* Header Card */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`lg:col-span-2 ${!isEven ? 'lg:col-start-4' : ''}`}
                >
                  <div className={`${theme.headerBg} rounded-xl p-8 h-full`}>
                    <div className="mb-6">
                      <Icon size={44} className={theme.iconColor} />
                    </div>
                    <div className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded mb-4 ${theme.accent} ${
                      theme.headerBg === 'bg-[#c9a84c]' ? 'text-white' : 'text-[#1a2744]'
                    }`}>
                      Service {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h2
                      className={`text-2xl font-bold mb-4 ${theme.headerText}`}
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.title}
                    </h2>
                    <p className={`text-sm leading-relaxed ${
                      theme.headerBg === 'bg-[#c9a84c]' ? 'text-[#1a2744]/80' : 'text-gray-300'
                    }`}>
                      {service.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        to="/contact"
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-all ${
                          theme.headerBg === 'bg-[#c9a84c]'
                            ? 'text-[#1a2744] hover:gap-3'
                            : 'text-[#c9a84c] hover:gap-3'
                        }`}
                      >
                        Enquire About This Service <ChevronRight size={16} />
                      </Link>
                    </div>
                  </div>
                </motion.div>

                {/* Items List */}
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={0.1}
                  variants={fadeUp}
                  className={`lg:col-span-3 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                >
                  <div className="mb-6">
                    <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-xs mb-2">
                      What's Included
                    </p>
                    <h3
                      className="text-2xl font-bold text-[#1a2744]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.title} Offerings
                    </h3>
                    <div className="gold-divider mt-3" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {service.items.map((item, itemIdx) => (
                      <motion.div
                        key={item}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={itemIdx * 0.05}
                        variants={fadeUp}
                        className="bns-card bg-white rounded-lg p-5 flex items-start gap-4 border border-gray-100"
                      >
                        <div className={`w-8 h-8 rounded flex items-center justify-center flex-shrink-0 ${theme.numberBg}`}>
                          <CheckCircle size={16} className="text-[#c9a84c]" />
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed font-medium">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-7 p-5 bg-[#1a2744]/5 border border-[#1a2744]/10 rounded-lg">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      <span className="font-semibold text-[#1a2744]">Note: </span>
                      All services are provided in accordance with applicable Indian
                      laws and professional ethics. Service availability and scope are
                      subject to consultation and agreement.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why BNS */}
      <section className="section-py bg-[#1a2744]" aria-label="Why choose BNS">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              Our Advantage
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Why Work with BNS?
            </h2>
            <div className="gold-divider center mt-4" />
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Journalism-Led PR',
                desc: 'Our team\'s newsroom background gives your communications a credibility edge.',
              },
              {
                title: 'Bengal Expertise',
                desc: 'Unmatched regional knowledge — languages, culture, media, and political landscape.',
              },
              {
                title: 'Integrated Approach',
                desc: 'News, PR, marketing, and consultancy in one unified partnership.',
              },
              {
                title: 'Digital-First Mindset',
                desc: 'Built for the digital age — mobile, social, and search-ready across all deliverables.',
              },
            ].map(({ title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={idx * 0.08} variants={fadeUp}
                className="bg-white/8 border border-white/12 rounded-xl p-6 text-center"
              >
                <div className="w-10 h-10 rounded-full bg-[#c9a84c]/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#c9a84c] font-bold text-sm">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3
                  className="text-white font-bold text-base mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#c9a84c]" aria-label="Services CTA">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl font-bold text-[#1a2744] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Begin?
            </h2>
            <p className="text-[#1a2744]/80 text-lg mb-8 max-w-xl mx-auto">
              Contact us to discuss your requirements and explore how BNS can
              support your communications, media, or marketing objectives.
            </p>
            <Link to="/contact" className="btn-primary">
              Send a Business Enquiry <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

