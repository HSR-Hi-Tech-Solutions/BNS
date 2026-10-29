import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  Newspaper,
  Building,
  Users,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle,
} from 'lucide-react';
import { COMPANY } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const PILLARS = [
  {
    Icon: Globe,
    title: 'Digital-First Architecture',
    desc: 'Engineered for modern multi-platform consumption — utilizing streaming video, responsive web, podcasting, and social channels to reach audiences across devices.',
  },
  {
    Icon: Newspaper,
    title: 'Journalism-Led Communications',
    desc: 'Our corporate PR practice is rooted in real newsroom experience. We know what journalists look for and how to structure narratives that generate organic coverage.',
  },
  {
    Icon: Building,
    title: 'Deep Bengal Rooting',
    desc: 'Native command over Bengal\'s complex political currents, regional socio-economics, language nuances, and business community dynamics.',
  },
  {
    Icon: Users,
    title: 'Integrated Service Continuum',
    desc: 'Independent news media, executive PR, digital advertising campaigns, and advisory under one roof — ensuring brand coherence across touchpoints.',
  },
  {
    Icon: Target,
    title: 'Strategic Rigor',
    desc: 'Every client brief is addressed with strict strategic discipline — mapping stakeholders, media environments, and measurable outcomes.',
  },
  {
    Icon: Eye,
    title: 'Editorial Integrity',
    desc: 'Strict firewalls separate our news reporting from client communications assignments, safeguarding public trust and credibility.',
  },
];

const FOCUS_AREAS = [
  'Parliamentary & Legislative Affairs',
  'Political & Electoral Analysis',
  'Regional Economy & Industry',
  'Social & Cultural Currents',
  'National Governance & Policy',
  'Infrastructure & Development',
  'International Affairs & Bharat',
  'Grassroots Community Stories',
];

export default function About() {
  useEffect(() => {
    setPageMeta({
      title: 'About Us — BNS Bengal News Service',
      description:
        'Learn about Bengal News Service PR & Consultancy Pvt. Ltd. — our vision, mission, business positioning, and commitment to digital-first journalism and communications.',
    });
  }, []);

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
              <span>Institutional Overview</span>
              <span className="accent-line" />
            </div>
            <h1 className="font-serif text-white mb-4">Our Story &amp; Purpose</h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              A digital-first media and communications company rooted in West Bengal,
              dedicated to credible journalism and strategic corporate advocacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ────────────────────────── */}
      <section className="section-py bg-white" aria-label="Company Overview">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Text narrative */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <div className="eyebrow-badge mb-3">
                <span className="accent-line" />
                <span>Incorporation &amp; Heritage</span>
              </div>
              <h2 className="section-heading mb-6">
                Bengal News Service PR &amp; Consultancy Pvt. Ltd.
              </h2>

              <p
                className="text-base sm:text-lg text-[var(--bns-navy)] font-medium leading-relaxed mb-5 pl-4 border-l-2"
                style={{ borderColor: 'var(--bns-gold)' }}
              >
                Bengal News Service PR &amp; Consultancy Private Limited (BNS) is an incorporated
                enterprise based in West Bengal, India, combining newsroom journalistic rigor
                with sophisticated public relations counsel.
              </p>

              <div className="space-y-4 text-[var(--bns-gray-600)] text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  We operate at the convergence of digital news dissemination, corporate communications,
                  public affairs, and brand promotion. Our media operation reports on West Bengal&apos;s
                  politics, economy, culture, and society, while interpreting national policies that impact eastern India.
                </p>
                <p>
                  Simultaneously, our corporate communications division advises businesses, institutions,
                  trade bodies, and public leaders on message architecture, crisis preparedness, and media positioning.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  <span>Explore Practice Areas</span>
                  <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  <span>Enquire With BNS</span>
                </Link>
              </div>
            </motion.div>

            {/* Corporate Registration Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="bns-card p-7 border border-slate-200">
                <div className="flex items-center gap-3 pb-5 mb-5 border-b border-slate-100">
                  <ShieldCheck size={28} className="text-[var(--bns-gold)] flex-shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[var(--bns-navy)] leading-tight">
                      Statutory Information
                    </h3>
                    <p className="text-xs text-[var(--bns-gray-500)] mt-0.5">
                      Ministry of Corporate Affairs, Government of India
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-sm">
                  {[
                    { label: 'Entity Name', value: 'Bengal News Service PR & Consultancy Private Limited' },
                    { label: 'Trade Brand', value: 'BNS — Bengal News Service' },
                    { label: 'CIN', value: COMPANY.cin },
                    { label: 'Company Class', value: 'Private Limited Company (PTC)' },
                    { label: 'Jurisdiction', value: 'RoC Kolkata, West Bengal, India' },
                    { label: 'Operations', value: 'West Bengal & Pan-India' },
                  ].map((row, idx) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <span className="text-xs font-semibold text-[var(--bns-gray-500)] flex-shrink-0">
                        {row.label}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-[var(--bns-navy)] text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION (Harmonized Uniform Cards) ── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-gray-50)' }}
        aria-label="Vision and Mission"
      >
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
              <span>Foundational Values</span>
              <span className="accent-line" />
            </div>
            <h2 className="section-heading">Our Institutional Purpose</h2>
            <p className="section-subheading">
              Guided by a commitment to responsible journalism and high-integrity strategic communication.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bns-card p-8 sm:p-10 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(14, 24, 42, 0.05)', color: 'var(--bns-navy)' }}
                >
                  <Eye size={24} />
                </div>
                <div className="eyebrow-badge mb-2">
                  <span>Vision Statement</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--bns-navy)] mb-4">
                  Voice Of Bengal, Vision For Bharat
                </h3>
                <p className="text-sm sm:text-base text-[var(--bns-gray-600)] leading-relaxed">
                  To be the preeminent digital news and communications platform representing
                  Bengal&apos;s intellect, culture, and economic aspirations — contributing to an
                  informed citizenry and empowering institutions with strategic communications that matter.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[var(--bns-gold)]">
                <CheckCircle size={14} />
                <span>Regional Integrity · National Reach</span>
              </div>
            </motion.div>

            {/* Mission Card (Uniform styling with Vision card) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="bns-card p-8 sm:p-10 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ background: 'rgba(201, 168, 76, 0.12)', color: 'var(--bns-gold)' }}
                >
                  <Target size={24} />
                </div>
                <div className="eyebrow-badge mb-2">
                  <span>Mission Mandate</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[var(--bns-navy)] mb-4">
                  Credible Reporting. Strategic Impact.
                </h3>
                <p className="text-sm sm:text-base text-[var(--bns-gray-600)] leading-relaxed">
                  To produce accurate, balanced, and independent digital journalism while providing
                  businesses, public sector entities, and leaders with newsroom-backed PR,
                  reputation management, and media consultancy that deliver measurable visibility and trust.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-[var(--bns-gold)]">
                <CheckCircle size={14} />
                <span>Ethical Separation · Commercial Excellence</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS POSITIONING (6 Pillars Grid) ──────── */}
      <section className="section-py bg-white" aria-label="Business positioning">
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
              <span>Strategic Advantages</span>
              <span className="accent-line" />
            </div>
            <h2 className="section-heading">Our Business Positioning</h2>
            <p className="section-subheading">
              How BNS bridges journalism and corporate advisory to deliver differentiated value.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.06}
                variants={fadeUp}
                className="bns-card p-7 group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: 'rgba(14, 24, 42, 0.05)', color: 'var(--bns-navy)' }}
                >
                  <Icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-[var(--bns-navy)] mb-2.5">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--bns-gray-500)] leading-relaxed">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGIONAL & NATIONAL FOCUS ─────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-gray-50)' }}
        aria-label="Editorial Focus"
      >
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-6"
            >
              <div className="eyebrow-badge mb-3">
                <span className="accent-line" />
                <span>Editorial Focus</span>
              </div>
              <h2 className="section-heading mb-5">
                Bengal&apos;s Voice, Pan-India Coverage
              </h2>
              <p className="text-sm sm:text-base text-[var(--bns-gray-600)] leading-relaxed mb-6">
                With a population exceeding 90 million, West Bengal is one of India&apos;s political
                and cultural epicenters. BNS dedicates focused editorial resources to investigate
                state developments and contextualize their impact for the nation.
              </p>

              {/* Tags Grid */}
              <div className="flex flex-wrap gap-2.5">
                {FOCUS_AREAS.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-6"
            >
              <div
                className="rounded-2xl p-8 border border-white/10 text-white"
                style={{
                  background: 'linear-gradient(145deg, #070c16 0%, #14223d 100%)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.4)',
                }}
              >
                <div className="eyebrow-badge mb-3">
                  <span className="accent-line" />
                  <span>Dual Editorial Commitment</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-white mb-4">
                  Multi-Format, Dual-Language Strategy
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  BNS delivers content in English and Bengali to reach senior executives,
                  policymakers, and regional communities across digital video, long-form
                  reporting, podcasts, and social newsrooms.
                </p>

                <div className="space-y-3 pt-6 border-t border-white/10 text-xs">
                  <div className="flex items-center gap-2.5 text-white/85">
                    <CheckCircle size={15} className="text-[var(--bns-gold)] flex-shrink-0" />
                    <span>English Corporate &amp; Policy Analysis</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-white/85">
                    <CheckCircle size={15} className="text-[var(--bns-gold)] flex-shrink-0" />
                    <span>Bengali Regional &amp; Cultural Reporting</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

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
              Collaborate with BNS
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-8 leading-relaxed">
              Discover our media solutions or arrange an executive consultation for PR and communications.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="btn-gold !rounded-full">
                <span>View Practice Areas</span>
                <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline-white !rounded-full">
                <span>Contact Business Team</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
