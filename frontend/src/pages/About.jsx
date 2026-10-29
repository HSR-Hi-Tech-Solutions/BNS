import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Newspaper, Building, Users, Target, Eye, CheckCircle } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const PILLARS = [
  {
    Icon: Globe,
    title: 'Digital-First Approach',
    desc: 'Built for the digital age — leveraging the latest platforms, formats, and distribution channels to reach modern audiences wherever they are.',
  },
  {
    Icon: Newspaper,
    title: 'Journalism-Led Communications',
    desc: 'Our PR and communications services are informed by real journalism experience. We understand what makes a compelling story and how to tell it effectively.',
  },
  {
    Icon: Building,
    title: 'Bengal Expertise',
    desc: 'Deep roots in Bengal\'s media landscape, political environment, cultural fabric, and business community give us an unmatched regional knowledge base.',
  },
  {
    Icon: Users,
    title: 'Integrated Services',
    desc: 'News, PR, digital marketing, and consultancy under one roof — providing clients with a seamless, coherent communications partnership.',
  },
  {
    Icon: Target,
    title: 'Strategic Thinking',
    desc: 'Every engagement is approached with clarity — understanding objectives, audiences, and the media environment to deliver outcomes that matter.',
  },
  {
    Icon: Eye,
    title: 'Editorial Integrity',
    desc: 'Journalism operates independently of commercial interests. PR work is clearly distinguished from editorial content, maintaining trust and credibility.',
  },
];

const FOCUS_AREAS = [
  'Political Coverage', 'Business & Economy', 'Cultural Affairs',
  'Social Issues', 'National Policy', 'Parliamentary Affairs',
  'International Developments', 'Community Stories',
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
            <p className="eyebrow mb-5">About BNS</p>
            <h1 className="font-serif text-white mb-5">Our Story &amp; Purpose</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              A digital-first media and communications company rooted in Bengal,
              committed to credible journalism and strategic communications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ────────────────────────── */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <p className="eyebrow mb-4">Company Overview</p>
              <h2
                className="font-serif text-[var(--bns-navy)] leading-tight mb-6"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                Bengal News Service PR &amp; Consultancy Pvt. Ltd.
              </h2>
              <div className="rule-gold mb-7" />

              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-4">
                Bengal News Service PR &amp; Consultancy Private Limited (BNS) is a
                registered company incorporated in West Bengal, India. We are a
                digital-first media and communications company that combines the
                credibility of established journalism with the agility of modern
                digital communications.
              </p>
              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-4">
                BNS operates at the intersection of media, public relations, digital
                marketing, and communications consultancy — offering an integrated
                suite of services to news audiences, businesses, institutions, and
                individuals seeking professional communications support.
              </p>
              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-8">
                Our company is anchored in West Bengal, with a focus on regional
                news, politics, business, culture, and society — while maintaining a
                pan-India perspective on national and international developments.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link to="/services" className="btn-primary">
                  Our Services <ArrowRight size={15} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Registration details */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              {/* Logo */}
              <div className="mb-6 p-8 rounded-sm flex items-center justify-center"
                style={{ background: 'var(--bns-cream)', border: '1px solid var(--bns-gray-200)' }}>
                <img
                  src="/bns-logo-full.png"
                  alt="Bengal News Service PR & Consultancy"
                  className="w-full max-w-xs"
                />
              </div>

              {/* Details table */}
              <div
                className="rounded-sm overflow-hidden"
                style={{ border: '1px solid var(--bns-gray-200)' }}
              >
                <div
                  className="px-5 py-3"
                  style={{ background: 'var(--bns-navy)' }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                    Registration Details
                  </p>
                </div>
                {[
                  { label: 'Company Name', value: 'Bengal News Service PR & Consultancy Pvt. Ltd.' },
                  { label: 'Brand', value: 'BNS — Bengal News Service' },
                  { label: 'CIN', value: 'U73100WB2024PTC275987' },
                  { label: 'State', value: 'West Bengal, India' },
                ].map(({ label, value }, i) => (
                  <div
                    key={label}
                    className="px-5 py-3 text-sm flex gap-3"
                    style={{
                      borderTop: i === 0 ? 'none' : '1px solid var(--bns-gray-200)',
                      background: i % 2 === 0 ? '#fff' : 'var(--bns-cream)',
                    }}
                  >
                    <span className="font-semibold text-[var(--bns-navy)] flex-shrink-0 w-28">{label}</span>
                    <span className="text-[var(--bns-gray-600)]">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION ─────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-navy)' }}
        aria-label="Vision and Mission"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="eyebrow mb-4" style={{ color: 'var(--bns-gold)' }}>Our Purpose</p>
            <h2
              className="font-serif text-white leading-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Vision &amp; Mission
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-8 rounded-sm"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <p className="eyebrow mb-4" style={{ color: 'var(--bns-gold)' }}>Vision</p>
              <h3
                className="font-serif text-white text-2xl mb-5"
              >
                Our Vision
              </h3>
              <p className="text-white/70 leading-relaxed mb-4">
                To be the most trusted and impactful digital news and communications
                platform representing Bengal&apos;s voice on the national and international stage.
              </p>
              <p className="text-white/70 leading-relaxed">
                We envision a platform where credible journalism meets strategic
                communications — empowering businesses, individuals, and communities.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="p-8 rounded-sm"
              style={{ background: 'var(--bns-gold)' }}
            >
              <p className="eyebrow mb-4" style={{ color: 'var(--bns-navy)', opacity: 0.7 }}>Mission</p>
              <h3 className="font-serif text-[var(--bns-navy)] text-2xl mb-5">
                Our Mission
              </h3>
              <p className="text-[var(--bns-navy)]/80 leading-relaxed mb-4">
                To deliver credible, responsible, and impactful digital journalism
                that informs, connects, and empowers citizens — while providing
                businesses and organisations with expert PR, communications, and
                marketing solutions.
              </p>
              <p className="text-[var(--bns-navy)]/80 leading-relaxed">
                Committed to editorial integrity, professional excellence, and the
                highest standards of communication — serving Bengal, Bharat, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS POSITIONING ─────────────────────────── */}
      <section className="section-py bg-white" aria-label="Business positioning">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="eyebrow mb-4">What Sets Us Apart</p>
            <h2
              className="font-serif text-[var(--bns-navy)] leading-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Our Business Positioning
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PILLARS.map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.07}
                variants={fadeUp}
                className="group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center mb-5 rounded-sm"
                  style={{ background: 'var(--bns-cream)', border: '1px solid var(--bns-gray-200)' }}
                >
                  <Icon size={18} style={{ color: 'var(--bns-navy)' }} />
                </div>
                <h3 className="font-serif text-[var(--bns-navy)] text-lg mb-3">{title}</h3>
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: 'var(--bns-gold)', transition: 'width 0.3s' }}
                />
                <p className="text-sm text-[var(--bns-gray-500)] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REGIONAL FOCUS ───────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-cream)' }}
        aria-label="Regional focus"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-6"
            >
              <p className="eyebrow mb-4">Regional Focus</p>
              <h2
                className="font-serif text-[var(--bns-navy)] leading-tight mb-5"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                West Bengal &amp; Wider Indian Developments
              </h2>
              <div className="rule-gold mb-7" />

              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-4">
                West Bengal is one of India&apos;s most politically significant,
                culturally rich, and economically dynamic states. BNS is committed
                to bringing in-depth, authentic coverage of Bengal&apos;s affairs to a
                digital audience — while contextualising them within the broader
                national and international landscape.
              </p>
              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-4">
                Our editorial focus includes political developments, business and
                economy, cultural affairs, social issues, education, infrastructure,
                and the stories of ordinary Bengalis that often go untold in
                mainstream national media.
              </p>
              <p className="text-[var(--bns-gray-600)] leading-relaxed mb-8">
                At the same time, we maintain a strong pan-India perspective —
                covering national governance, Parliament, policy, business, and
                international affairs that shape Bharat&apos;s future.
              </p>

              {/* Focus areas as clean tags */}
              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((item) => (
                  <span key={item} className="tag-chip">{item}</span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-6 space-y-5"
            >
              {[
                {
                  bg: 'var(--bns-navy)',
                  color: '#fff',
                  eyebrowColor: 'var(--bns-gold)',
                  title: 'Why Bengal Matters',
                  text: 'With over 90 million people, a storied intellectual and cultural heritage, and a pivotal role in Indian politics, West Bengal deserves a dedicated, professional, and credible digital news platform.',
                },
                {
                  bg: 'var(--bns-gold)',
                  color: 'var(--bns-navy)',
                  eyebrowColor: 'rgba(26,39,68,0.55)',
                  title: 'Bengal for Bharat',
                  text: 'Our tagline — Voice Of Bengal, Vision For Bharat — captures our dual commitment: to be the authentic voice of Bengal\'s stories while contributing to a broader, pan-Indian vision of informed citizens.',
                },
                {
                  bg: 'var(--bns-burgundy)',
                  color: '#fff',
                  eyebrowColor: 'rgba(255,255,255,0.55)',
                  title: 'Multi-Format, Multi-Language',
                  text: 'BNS plans to serve audiences in English and Bengali — reaching both the urban professional and the regional news consumer with content in formats and languages they prefer.',
                },
              ].map(({ bg, color, eyebrowColor, title, text }) => (
                <div
                  key={title}
                  className="p-7 rounded-sm"
                  style={{ background: bg, color }}
                >
                  <p
                    className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: eyebrowColor }}
                  >
                    Context
                  </p>
                  <h4 className="font-serif text-xl font-bold mb-3" style={{ color }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: `${color}CC` }}>
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section
        className="py-16"
        style={{ background: 'var(--bns-navy)' }}
        aria-label="CTA"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-white text-3xl mb-4">
              Explore What BNS Offers
            </h2>
            <p className="text-white/65 text-lg mb-8">
              Discover our services or get in touch for a business enquiry.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-gold">
                Our Services <ArrowRight size={15} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
