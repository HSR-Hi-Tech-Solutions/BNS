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
  CheckCircle,
  Eye,
  Target,
  ShieldCheck,
  Award,
  Globe,
  Quote,
} from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const SERVICE_ICONS = {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
};

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
    <div className="overflow-x-hidden">
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28"
        style={{
          background: 'linear-gradient(160deg, #070c16 0%, #0d1629 45%, #14223d 100%)',
        }}
        aria-label="Hero section"
      >
        {/* Subtle radial ambient light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 75% 35%, rgba(201, 168, 76, 0.12) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(122, 23, 23, 0.14) 0%, transparent 50%)',
          }}
        />

        {/* Faint technical grid */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">

            {/* Left Column: Editorial Headline & Actions */}
            <div className="lg:col-span-7">
              {/* Eyebrow badge */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="eyebrow-badge mb-6"
              >
                <span className="accent-line" />
                <span>Digital Media &amp; Communications Platform</span>
              </motion.div>

              {/* Main Display Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={0.06}
                variants={fadeUp}
                className="font-serif text-white leading-[1.12] mb-6"
                style={{ fontSize: 'var(--text-hero)' }}
              >
                Voice Of Bengal.{' '}
                <span style={{ color: 'var(--bns-gold)' }}>Vision For Bharat.</span>
              </motion.h1>

              {/* Tagline / Subtitle */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.14}
                variants={fadeUp}
                className="text-white/80 font-serif italic text-lg sm:text-xl mb-6"
              >
                Bengal News Service PR &amp; Consultancy Private Limited
              </motion.p>

              {/* Lead Paragraph */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.2}
                variants={fadeUp}
                className="text-white/70 leading-relaxed mb-8 max-w-2xl text-base sm:text-lg"
              >
                A digital-first media and communications enterprise delivering authentic,
                credible news reporting from Bengal to the nation — coupled with
                strategic public relations, corporate communications, and consultancy
                for businesses and institutions.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.28}
                variants={fadeUp}
                className="flex flex-wrap gap-4 items-center"
              >
                <Link to="/services" className="btn-gold !rounded-full">
                  <span>Explore Practice Areas</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-outline-white !rounded-full">
                  <span>Business Consultation</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Corporate Highlights Card (Visual anchor) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl p-7 sm:p-9 border border-white/10"
                style={{
                  background: 'rgba(14, 24, 42, 0.75)',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.45)',
                }}
              >
                {/* Header row with logo emblem */}
                <div className="flex items-center gap-4 pb-6 mb-6 border-b border-white/10">
                  <img
                    src="/bns-logo-icon.png"
                    alt="BNS emblem"
                    className="h-12 w-auto object-contain flex-shrink-0"
                  />
                  <div>
                    <h2 className="font-serif text-white font-bold text-lg leading-tight">
                      Bengal News Service
                    </h2>
                    <p className="text-xs text-[var(--bns-gold)] font-semibold tracking-wider uppercase mt-0.5">
                      PR &amp; Consultancy Pvt. Ltd.
                    </p>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-4 mb-7">
                  {[
                    {
                      title: 'Digital-First Journalism',
                      desc: 'Regional focus across West Bengal with pan-India national policy perspectives.',
                    },
                    {
                      title: 'Strategic Public Relations',
                      desc: 'Newsroom-informed narrative strategy, executive profiling, and media relations.',
                    },
                    {
                      title: 'Corporate Communications',
                      desc: 'Brand reputation management, digital campaigns, and consultancy retainers.',
                    },
                  ].map((item, i) => (
                    <div key={item.title} className="flex gap-3.5 items-start">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: 'rgba(201, 168, 76, 0.15)', color: 'var(--bns-gold)' }}
                      >
                        <CheckCircle size={13} />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/55 leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Verified metadata strip */}
                <div
                  className="rounded-xl p-3.5 flex items-center justify-between text-xs"
                  style={{ background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}
                >
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-[var(--bns-gold)] flex-shrink-0" />
                    <span className="text-white/70">CIN: {COMPANY.cin}</span>
                  </div>
                  <span className="text-white/45 font-medium">West Bengal, India</span>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ABOUT / PURPOSE (Fixing Defect 1: Unified Cards)
      ══════════════════════════════════════════════════ */}
      <section className="section-py bg-white" aria-label="About BNS">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Editorial Narrative */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-6"
            >
              <div className="eyebrow-badge mb-4">
                <span className="accent-line" />
                <span>Who We Are</span>
              </div>
              <h2 className="section-heading mb-6">
                A New Voice for Bengal and Bharat
              </h2>

              <p
                className="text-base sm:text-lg leading-relaxed text-[var(--bns-navy)] font-medium mb-5 pl-4 border-l-2"
                style={{ borderColor: 'var(--bns-gold)' }}
              >
                Bengal News Service PR &amp; Consultancy Private Limited operates at the
                intersection of credible media reporting and corporate communications strategy.
              </p>

              <div className="space-y-4 text-[var(--bns-gray-600)] text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Incorporated in West Bengal, BNS was founded with a dual commitment:
                  to provide thoughtful, authoritative digital news coverage representing
                  Bengal&apos;s cultural and economic dynamism, while simultaneously delivering
                  high-impact PR, reputation management, and marketing consultancy to corporate clients.
                </p>
                <p>
                  Led by experienced journalism professionals with extensive backgrounds in
                  parliamentary reporting and national policy coverage, we bring genuine media
                  acumen to every communications partnership.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  <span>Our Full Story</span>
                  <ChevronRight size={15} />
                </Link>
                <Link to="/leadership" className="btn-secondary">
                  <span>Executive Leadership</span>
                </Link>
              </div>
            </motion.div>

            {/* Right: Harmonized Vision & Mission (Uniform card language) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-6 space-y-5"
            >
              {/* Vision Card */}
              <div className="bns-card p-6 sm:p-7 border border-slate-200">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(14, 24, 42, 0.05)', color: 'var(--bns-navy)' }}
                  >
                    <Eye size={20} />
                  </div>
                  <div>
                    <span className="eyebrow !text-xs !mb-0 text-[var(--bns-gold)]">Strategic Horizon</span>
                    <h3 className="font-serif text-lg font-bold text-[var(--bns-navy)] leading-tight">
                      Our Vision
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[var(--bns-gray-600)] leading-relaxed">
                  To be the most respected and authoritative digital media and communications
                  enterprise in eastern India — delivering credible news and strategic counsel
                  that shapes meaningful conversations on the national stage.
                </p>
              </div>

              {/* Mission Card (Exactly matching Vision Card design) */}
              <div className="bns-card p-6 sm:p-7 border border-slate-200">
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201, 168, 76, 0.12)', color: 'var(--bns-gold)' }}
                  >
                    <Target size={20} />
                  </div>
                  <div>
                    <span className="eyebrow !text-xs !mb-0 text-[var(--bns-gold)]">Core Purpose</span>
                    <h3 className="font-serif text-lg font-bold text-[var(--bns-navy)] leading-tight">
                      Our Mission
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[var(--bns-gray-600)] leading-relaxed">
                  To uphold unwavering editorial standards in digital journalism while providing
                  businesses, public figures, and institutions with strategic communications,
                  public relations, and digital marketing that deliver measurable outcomes.
                </p>
              </div>

              {/* Corporate Registration Banner (Harmonized) */}
              <div
                className="rounded-xl p-5 border border-slate-200"
                style={{ background: 'var(--bns-gray-50)' }}
              >
                <div className="flex items-center justify-between text-xs text-[var(--bns-gray-500)] pb-3 mb-3 border-b border-slate-200">
                  <span className="font-bold uppercase tracking-wider text-[var(--bns-navy)]">
                    Corporate Verification
                  </span>
                  <span>Ministry of Corporate Affairs</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="text-slate-400">Corporate Identity Number</p>
                    <p className="font-semibold text-[var(--bns-navy)] mt-0.5">{COMPANY.cin}</p>
                  </div>
                  <div>
                    <p className="text-slate-400">Registered Office</p>
                    <p className="font-semibold text-[var(--bns-navy)] mt-0.5">West Bengal, India</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. CORE SERVICES (Fixing Defect 2: Polished Cards & Balanced Header)
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-gray-50)' }}
        aria-label="Core Practice Areas"
        id="services"
      >
        <div className="container">
          {/* Header row with inline CTA (Royal Decor pattern) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4"
          >
            <div>
              <div className="eyebrow-badge mb-3">
                <span className="accent-line" />
                <span>What We Do</span>
              </div>
              <h2 className="section-heading mb-2">Our Core Practice Areas</h2>
              <p className="section-subheading">
                Integrated media, communications, digital marketing, and consultancy
                tailored to corporate and institutional requirements.
              </p>
            </div>

            <Link to="/services" className="btn-secondary !rounded-full flex-shrink-0 self-start sm:self-auto">
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* 4 Practice Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="bns-card p-7 flex flex-col justify-between group"
                >
                  <div>
                    {/* Icon & Counter */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 group-hover:bg-[var(--bns-navy)] group-hover:text-white"
                        style={{
                          background: 'rgba(14, 24, 42, 0.05)',
                          color: 'var(--bns-navy)',
                        }}
                      >
                        <Icon size={22} />
                      </div>
                      <span
                        className="font-serif font-bold text-sm tracking-widest text-[var(--bns-gold)]"
                      >
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-serif text-xl font-bold text-[var(--bns-navy)] mb-3 leading-snug group-hover:text-[var(--bns-gold)] transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-[var(--bns-gray-500)] leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Offerings snippet */}
                    <ul className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="text-xs text-[var(--bns-gray-600)] flex items-start gap-2"
                        >
                          <CheckCircle
                            size={12}
                            className="text-[var(--bns-gold)] mt-0.5 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card footer CTA link */}
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--bns-navy)] group-hover:text-[var(--bns-gold)] transition-all pt-2"
                  >
                    <span>Explore Practice</span>
                    <ArrowRight
                      size={13}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. LEADERSHIP & QUOTE (Fixing Defect 3: Balanced Layout)
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-navy-dark)' }}
        aria-label="Executive Leadership"
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-3xl p-8 sm:p-12 lg:p-14 border border-white/10"
            style={{
              background: 'linear-gradient(145deg, #0a1120 0%, #111d33 60%, #0c1424 100%)',
            }}
          >
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

              {/* Left Column: Director Medallion & Credentials */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-10">
                {/* Monogram Seal */}
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center mb-5 shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, rgba(201,168,76,0.2) 0%, rgba(201,168,76,0.05) 100%)',
                    border: '2px solid var(--bns-gold)',
                  }}
                >
                  <span
                    className="font-serif font-bold text-3xl tracking-tight"
                    style={{ color: 'var(--bns-gold)' }}
                  >
                    UR
                  </span>
                </div>

                <div className="eyebrow-badge mb-2">
                  <span className="accent-line" />
                  <span>Executive Direction</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                  Ujjwal Roy
                </h3>
                <p className="text-sm font-semibold text-[var(--bns-gold)] mb-4">
                  Founder &amp; Director
                </p>

                <p className="text-xs text-white/55 leading-relaxed mb-6 max-w-sm">
                  Veteran journalist and media consultant with decades of experience
                  covering national parliament, legislative affairs, and corporate communication strategies.
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {['Parliamentary Reporter', 'Political Analysis', 'Media Relations'].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-3 py-1 rounded-full text-white/75 bg-white/[0.06] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/leadership"
                  className="btn-outline-white !rounded-full !py-2.5 !px-5 !text-xs"
                >
                  <span>Complete Leadership Profile</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* Right Column: Balanced Serif Quotation */}
              <div className="lg:col-span-7">
                <Quote
                  size={42}
                  className="text-[var(--bns-gold)] opacity-40 mb-6"
                />

                <blockquote className="font-serif text-white text-xl sm:text-2xl lg:text-3xl leading-snug font-normal italic mb-8">
                  &ldquo;Bengal possesses a narrative of immense intellectual, political,
                  and cultural depth. BNS is our solemn commitment to report that story with
                  uncompromising truth — and to equip our clients with communications that
                  command respect.&rdquo;
                </blockquote>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-serif font-bold text-white text-base">
                      Ujjwal Roy
                    </p>
                    <p className="text-xs text-[var(--bns-gold)]">
                      Director, Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                    </p>
                  </div>
                  <span className="text-xs text-white/40 hidden sm:inline-block">
                    Kolkata · West Bengal · New Delhi
                  </span>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHY WORK WITH BNS (Differentiators)
      ══════════════════════════════════════════════════ */}
      <section className="section-py bg-white" aria-label="Why choose BNS">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-header text-center"
          >
            <div className="eyebrow-badge justify-center mb-3">
              <span className="accent-line" />
              <span>Institutional Strengths</span>
              <span className="accent-line" />
            </div>
            <h2 className="section-heading">Why Leading Organisations Choose BNS</h2>
            <p className="section-subheading">
              Our rare combination of authentic editorial credibility and strategic
              communications expertise sets our practice apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Journalism-Led PR',
                desc: 'Our communications strategy is crafted by seasoned journalists who understand editorial gatekeeping and what drives news value.',
              },
              {
                icon: Globe,
                title: 'Bengal & National Insight',
                desc: 'Unmatched regional roots across West Bengal connected to deep national policy networks in New Delhi.',
              },
              {
                icon: ShieldCheck,
                title: 'Editorial Independence',
                desc: 'We maintain clear, ethical firewalls between our independent news journalism and our commercial consultancy practice.',
              },
              {
                icon: TrendingUp,
                title: 'Integrated Capabilities',
                desc: 'Digital news, press management, crisis communications, and performance marketing unified under one partner.',
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.08}
                  variants={fadeUp}
                  className="bns-card p-7 text-center group"
                >
                  <div
                    className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(201, 168, 76, 0.12)', color: 'var(--bns-gold)' }}
                  >
                    <Icon size={26} />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[var(--bns-navy)] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--bns-gray-500)] leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. CALL TO ACTION (Harmonious Transition)
      ══════════════════════════════════════════════════ */}
      <section
        className="section-py relative overflow-hidden text-white"
        style={{
          background: 'linear-gradient(135deg, #070c16 0%, #14223d 50%, #7a1717 100%)',
        }}
        aria-label="Call to Action"
      >
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 80% 20%, rgba(201, 168, 76, 0.4) 0%, transparent 60%)',
          }}
        />

        <div className="container relative z-10 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto"
          >
            <div className="eyebrow-badge justify-center mb-4">
              <span className="accent-line" />
              <span>Engage Our Practice</span>
              <span className="accent-line" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Ready to Advance Your Communications Strategy?
            </h2>

            <p className="text-white/75 text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you require strategic public relations, crisis management, digital media
              reach, or executive consultancy — our team is ready to discuss your objectives.
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center">
              <Link to="/contact" className="btn-gold !rounded-full !py-3 !px-8">
                <span>Send a Business Enquiry</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-outline-white !rounded-full !py-3 !px-7">
                <span>Explore All Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
