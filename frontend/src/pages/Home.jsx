import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const SERVICE_ICONS = { Newspaper, Megaphone, TrendingUp, Briefcase };

export default function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'BNS — Bengal News Service | Voice Of Bengal, Vision For Bharat',
      description:
        'Bengal News Service PR & Consultancy Private Limited — Digital news, media, public relations, corporate communications, digital marketing, and consultancy services.',
      ogImage: '/bns-logo-full.png',
    });
  }, []);

  return (
    <div>
      {/* ══════════════════════════════════════════════════
          HERO — Full-width editorial, no floating logo
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: 'linear-gradient(160deg, #080e1a 0%, #0f1729 35%, #1a2744 70%, #1e2e52 100%)',
        }}
        aria-label="Hero section"
      >
        {/* Thin gold top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #c9a84c 40%, #d4b86a 60%, transparent 100%)' }}
        />

        {/* Subtle vertical rule on left */}
        <div className="absolute left-0 top-0 bottom-0 w-px"
          style={{ background: 'linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.25) 30%, rgba(201,168,76,0.25) 70%, transparent 100%)' }}
        />

        {/* Faint grid texture */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container mx-auto px-4 lg:px-6 py-36 lg:py-44 relative z-10">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-5"
            >
              Digital Media &amp; Communications — Bengal &amp; Pan-India
            </motion.p>

            {/* Main headline */}
            <motion.h1
              initial="hidden"
              animate="visible"
              custom={0.08}
              variants={fadeUp}
              className="font-serif text-white leading-[1.1] mb-7"
              style={{ fontSize: 'var(--text-hero)' }}
            >
              Bengal News{' '}
              <span style={{ color: 'var(--bns-gold)' }}>Service</span>
              <br />
              PR &amp; Consultancy
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.18}
              variants={fadeUp}
              className="font-serif italic text-white/60 text-xl mb-5 tracking-wide"
            >
              &ldquo;{COMPANY.tagline}&rdquo;
            </motion.p>

            {/* Description */}
            <motion.p
              initial="hidden"
              animate="visible"
              custom={0.26}
              variants={fadeUp}
              className="text-white/65 leading-relaxed mb-10 max-w-2xl"
              style={{ fontSize: 'var(--text-lead)' }}
            >
              A digital-first media and communications company — bringing credible
              journalism from Bengal to Bharat, and delivering strategic PR,
              corporate communications, and consultancy to businesses and institutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0.34}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Link to="/services" className="btn-gold">
                Our Services <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Business Enquiry
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative large typographic BNS in background */}
        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
          aria-hidden="true"
          style={{
            fontSize: '28vw',
            fontFamily: 'var(--font-serif)',
            fontWeight: 900,
            color: 'rgba(201,168,76,0.04)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            transform: 'translateY(-50%) translateX(15%)',
          }}
        >
          BNS
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COMPANY STATEMENT — single editorial statement
      ══════════════════════════════════════════════════ */}
      <section className="section-py bg-white" aria-label="About BNS">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: editorial text block */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="eyebrow mb-5">Who We Are</p>
              <h2
                className="font-serif text-[var(--bns-navy)] leading-tight mb-6"
                style={{ fontSize: 'var(--text-display)' }}
              >
                A New Voice for{' '}
                <span style={{ color: 'var(--bns-burgundy)' }}>Bengal</span>
                <br className="hidden sm:block" />
                {' '}and Bharat
              </h2>

              <p
                className="text-lead mb-5"
                style={{ borderLeft: '3px solid var(--bns-gold)', paddingLeft: '1.25rem' }}
              >
                Bengal News Service PR &amp; Consultancy Private Limited is a
                digital-first media and communications company — combining the
                credibility of established journalism with the agility of modern
                digital communications.
              </p>

              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-5">
                We operate at the intersection of media, public relations, digital
                marketing, and communications consultancy — serving news audiences,
                businesses, institutions, and individuals seeking professional
                communications support.
              </p>
              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-8">
                Founded on a commitment to editorial integrity and communications
                excellence, BNS brings together experienced journalism professionals
                and communications experts to deliver outcomes that matter.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  About BNS <ChevronRight size={15} />
                </Link>
                <Link to="/leadership" className="btn-secondary">
                  Our Leadership
                </Link>
              </div>
            </motion.div>

            {/* Right: registration card + vision/mission */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="lg:col-span-5 space-y-5"
            >
              {/* Vision */}
              <div
                className="p-7 rounded-sm"
                style={{ background: 'var(--bns-navy)', color: '#fff' }}
              >
                <p className="eyebrow mb-3" style={{ color: 'var(--bns-gold)' }}>Our Vision</p>
                <p className="font-serif text-lg text-white/90 leading-snug">
                  To be the most trusted digital news and communications
                  platform representing Bengal&apos;s voice on the national stage.
                </p>
              </div>

              {/* Mission */}
              <div
                className="p-7 rounded-sm border"
                style={{ borderColor: 'var(--bns-cream-dark)', background: 'var(--bns-cream)' }}
              >
                <p className="eyebrow mb-3" style={{ color: 'var(--bns-burgundy)' }}>Our Mission</p>
                <p
                  className="font-serif text-lg leading-snug"
                  style={{ color: 'var(--bns-navy)' }}
                >
                  Credible journalism and strategic communications — informing,
                  connecting, and empowering clients and communities.
                </p>
              </div>

              {/* Company badge */}
              <div
                className="p-5 rounded-sm"
                style={{ background: 'var(--bns-gray-100)', border: '1px solid var(--bns-gray-200)' }}
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--bns-gray-500)] mb-3">
                  Company Details
                </p>
                <div className="space-y-1.5 text-sm text-[var(--bns-gray-600)]">
                  <p><span className="font-medium text-[var(--bns-navy)]">CIN: </span>U73100WB2024PTC275987</p>
                  <p><span className="font-medium text-[var(--bns-navy)]">State: </span>West Bengal, India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SERVICES — Clean editorial grid
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-cream)' }}
        aria-label="Services overview"
        id="services"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="eyebrow mb-4">What We Offer</p>
            <h2
              className="font-serif text-[var(--bns-navy)] leading-tight max-w-xl"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Four Practice Areas. One Integrated Partner.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--bns-gray-200)]">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.08}
                  variants={fadeUp}
                  className="bg-white p-8 group flex flex-col"
                  style={{ minHeight: '280px' }}
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm mb-6 flex-shrink-0"
                    style={{ background: 'var(--bns-cream)', border: '1px solid var(--bns-gray-200)' }}
                  >
                    <Icon size={20} style={{ color: 'var(--bns-navy)' }} />
                  </div>

                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: 'var(--bns-gold)' }}
                  >
                    0{idx + 1}
                  </div>

                  <h3
                    className="font-serif text-[var(--bns-navy)] text-lg leading-snug mb-3"
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm text-[var(--bns-gray-500)] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--bns-navy)] hover:text-[var(--bns-gold)] transition-colors group-hover:gap-2.5"
                    style={{ transition: 'gap 0.2s, color 0.2s' }}
                  >
                    Learn more <ArrowRight size={13} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-start">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DIRECTOR SIGNATURE QUOTE — Editorial treatment
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py-lg"
        style={{ background: 'var(--bns-navy)' }}
        aria-label="Director message"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              {/* Decorative initial */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="lg:col-span-3 hidden lg:flex flex-col items-center"
              >
                <div
                  className="font-serif font-bold text-center leading-none select-none"
                  style={{
                    fontSize: '10rem',
                    color: 'rgba(201,168,76,0.12)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}
                  aria-hidden="true"
                >
                  UR
                </div>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0.1}
                variants={fadeUp}
                className="lg:col-span-9"
              >
                <p className="eyebrow mb-6" style={{ color: 'var(--bns-gold)' }}>
                  Founder &amp; Director
                </p>

                <blockquote
                  className="font-serif text-white leading-snug mb-8"
                  style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontStyle: 'italic' }}
                >
                  &ldquo;Bengal has a story that deserves to be told with depth,
                  accuracy, and pride. BNS is our commitment to telling that story —
                  and to helping others communicate their stories with the
                  professionalism they deserve.&rdquo;
                </blockquote>

                <div
                  className="flex items-center gap-6 pt-6"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div>
                    <p
                      className="font-serif font-bold text-white text-lg"
                    >
                      Ujjwal Roy
                    </p>
                    <p className="text-sm mt-0.5" style={{ color: 'var(--bns-gold)' }}>
                      Founder &amp; Director — Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ color: 'rgba(255,255,255,0.4)' }}
                    >
                      Veteran journalist · Parliamentary &amp; political reporter · Media relations specialist
                    </p>
                  </div>
                  <Link
                    to="/leadership"
                    className="hidden sm:inline-flex btn-outline-white flex-shrink-0"
                    style={{ fontSize: '0.8125rem', padding: '0.6rem 1.25rem' }}
                  >
                    Full Profile <ChevronRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA BAND
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-burgundy)' }}
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl"
          >
            <h2
              className="font-serif text-white leading-tight mb-5"
              style={{ fontSize: 'var(--text-display)' }}
            >
              Ready to Work with BNS?
            </h2>
            <p
              className="mb-8 max-w-xl"
              style={{ color: 'rgba(255,255,255,0.75)', fontSize: 'var(--text-lead)' }}
            >
              Whether you need media coverage, PR strategy, digital marketing, or
              communications consultancy — get in touch and let&apos;s talk.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Send a Business Enquiry <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-outline-white">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
