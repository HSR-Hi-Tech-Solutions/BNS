import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
  ChevronRight,
  ArrowRight,
  Star,
  Globe,
  Users,
  Award,
  Eye,
  Target,
  CheckCircle,
} from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay },
  }),
};

const SERVICE_ICONS = {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
};

const SERVICE_COLORS = [
  { bg: 'bg-[#1a2744]', accent: 'text-[#c9a84c]', border: 'border-[#1a2744]' },
  { bg: 'bg-[#8b1a1a]', accent: 'text-white', border: 'border-[#8b1a1a]' },
  { bg: 'bg-[#c9a84c]', accent: 'text-[#1a2744]', border: 'border-[#c9a84c]' },
  { bg: 'bg-[#243362]', accent: 'text-[#c9a84c]', border: 'border-[#243362]' },
];

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
      {/* ═══ HERO ═══ */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, #0f1729 0%, #1a2744 45%, #243362 100%)',
        }}
        aria-label="Hero section"
      >
        {/* Decorative background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c9a84c' fill-opacity='1'%3E%3Cpath d='M40 40L0 0h80z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px',
          }}
        />
        {/* Gold accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c9a84c] to-transparent" />

        <div className="container mx-auto px-4 lg:px-6 py-28 lg:py-36 relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-6"
              >
                <Star size={13} className="text-[#c9a84c] fill-current" />
                <span className="text-[#c9a84c] text-xs font-semibold tracking-wide uppercase">
                  Digital Media & Communications
                </span>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.05}
                variants={fadeUp}
                className="text-[#c9a84c] font-semibold text-base tracking-widest uppercase mb-3"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {COMPANY.tagline}
              </motion.p>

              {/* Headline */}
              <motion.h1
                initial="hidden"
                animate="visible"
                custom={0.1}
                variants={fadeUp}
                className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Bengal News{' '}
                <span className="text-[#c9a84c]">Service</span>
                <br />
                PR & Consultancy
              </motion.h1>

              <motion.p
                initial="hidden"
                animate="visible"
                custom={0.2}
                variants={fadeUp}
                className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl"
              >
                A digital-first media and communications company bringing credible
                news from Bengal to Bharat — and delivering strategic PR, corporate
                communications, and consultancy solutions to businesses and
                organisations.
              </motion.p>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.3}
                variants={fadeUp}
                className="flex flex-wrap gap-4"
              >
                <Link to="/services" className="btn-gold">
                  Explore Our Services
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-outline-white">
                  Contact Us
                </Link>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial="hidden"
                animate="visible"
                custom={0.4}
                variants={fadeUp}
                className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10"
              >
                {[
                  { label: 'Business Areas', value: '4+' },
                  { label: 'Service Lines', value: '25+' },
                  { label: 'Focus Region', value: 'Bengal & Pan-India' },
                ].map(({ label, value }) => (
                  <div key={label}>
                    <div className="text-2xl font-bold text-[#c9a84c]" style={{ fontFamily: 'var(--font-serif)' }}>
                      {value}
                    </div>
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wide mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Logo display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-[#c9a84c]/8 blur-2xl" />
                <img
                  src="/bns-logo-full.png"
                  alt="Bengal News Service PR & Consultancy Private Limited"
                  className="relative w-full max-w-sm lg:max-w-md drop-shadow-2xl"
                  style={{ filter: 'drop-shadow(0 0 40px rgba(201,168,76,0.15))' }}
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/5 to-transparent" />
      </section>

      {/* ═══ INTRODUCTION BAND ═══ */}
      <section className="bg-[#c9a84c] py-5" aria-label="Company tagline">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex flex-wrap items-center justify-center gap-6 text-[#1a2744]">
            {[
              { Icon: Globe, text: 'Regional & National News' },
              { Icon: Megaphone, text: 'Strategic PR & Communications' },
              { Icon: TrendingUp, text: 'Digital Marketing Solutions' },
              { Icon: Briefcase, text: 'Expert Media Consultancy' },
            ].map(({ Icon, text }) => (
              <div key={text} className="flex items-center gap-2 font-semibold text-sm">
                <Icon size={16} />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT INTRO ═══ */}
      <section className="section-py bg-white" aria-label="About BNS">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Who We Are
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                A New Voice for{' '}
                <span className="text-[#8b1a1a]">Bengal</span> and Bharat
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5 text-[0.9875rem]">
                Bengal News Service PR & Consultancy Private Limited is a
                digital-first media and communications company based in West Bengal,
                India. We combine credible journalism with strategic communications
                to serve both news audiences and corporate clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5 text-[0.9875rem]">
                Our platform is designed to bring authentic, timely news from West
                Bengal and across Bharat — while simultaneously providing businesses,
                institutions, and public figures with professional PR, corporate
                communications, digital marketing, and consultancy services.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7 text-[0.9875rem]">
                Founded with a commitment to editorial integrity and communications
                excellence, BNS brings together experienced journalism professionals
                and communications experts to deliver results that matter.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                  <ChevronRight size={16} />
                </Link>
                <Link to="/leadership" className="btn-secondary">
                  Meet Our Leadership
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  Icon: Eye,
                  title: 'Our Vision',
                  text: 'To be the most trusted digital news and communications platform for Bengal and beyond.',
                  bg: 'bg-[#1a2744]',
                  iconColor: 'text-[#c9a84c]',
                  textColor: 'text-white',
                  descColor: 'text-gray-300',
                },
                {
                  Icon: Target,
                  title: 'Our Mission',
                  text: 'To deliver credible journalism and strategic communications that inform, connect, and empower.',
                  bg: 'bg-[#c9a84c]',
                  iconColor: 'text-[#1a2744]',
                  textColor: 'text-[#1a2744]',
                  descColor: 'text-[#1a2744]/80',
                },
                {
                  Icon: Globe,
                  title: 'Digital First',
                  text: 'Embracing modern digital platforms to reach audiences across devices, languages, and regions.',
                  bg: 'bg-[#f5f5f5]',
                  iconColor: 'text-[#8b1a1a]',
                  textColor: 'text-[#1a2744]',
                  descColor: 'text-gray-600',
                },
                {
                  Icon: Users,
                  title: 'Community Focus',
                  text: 'Rooted in Bengal\'s culture, heritage, and aspirations — speaking for the community.',
                  bg: 'bg-[#8b1a1a]',
                  iconColor: 'text-[#c9a84c]',
                  textColor: 'text-white',
                  descColor: 'text-gray-300',
                },
              ].map(({ Icon, title, text, bg, iconColor, textColor, descColor }) => (
                <div
                  key={title}
                  className={`${bg} rounded-lg p-6 bns-card`}
                >
                  <Icon size={28} className={`${iconColor} mb-4`} />
                  <h3
                    className={`font-bold text-base mb-2 ${textColor}`}
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${descColor}`}>{text}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ SERVICES OVERVIEW ═══ */}
      <section
        className="section-py bg-[#faf8f3]"
        aria-label="Services overview"
        id="services"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-header"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              What We Offer
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a2744]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Core Services
            </h2>
            <div className="gold-divider center mt-4" />
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From breaking news to brand building, BNS provides an integrated
              suite of media, communications, and consultancy services.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon];
              const colors = SERVICE_COLORS[idx % SERVICE_COLORS.length];
              return (
                <motion.div
                  key={service.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={idx * 0.1}
                  variants={fadeUp}
                  className="bns-card bg-white rounded-lg overflow-hidden group"
                >
                  <div className={`${colors.bg} p-6`}>
                    <Icon size={32} className={colors.accent} />
                  </div>
                  <div className="p-6">
                    <h3
                      className="font-bold text-[#1a2744] text-lg mb-3"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-1.5 mb-5">
                      {service.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="text-xs text-gray-500 flex items-start gap-2"
                        >
                          <CheckCircle
                            size={12}
                            className="text-[#c9a84c] mt-0.5 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services#${service.id}`}
                      className="text-[#1a2744] font-semibold text-sm flex items-center gap-1 hover:text-[#c9a84c] transition-colors group-hover:gap-2"
                    >
                      View Details <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-primary">
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ DIGITAL NEWS FEATURE ═══ */}
      <section
        className="section-py bg-[#1a2744]"
        aria-label="Digital news and media"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Digital News & Media
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Credible News. Digital Reach. Bengal at Heart.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-300 leading-relaxed mb-5">
                BNS is developing a digital news platform committed to authentic,
                unbiased reporting on West Bengal, national affairs, politics,
                business, culture, and society.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Leveraging multi-format content — articles, video news, podcasts,
                social media — our platform is designed for the modern news consumer
                while upholding the traditions of responsible journalism.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Regional news coverage with pan-India perspective',
                  'Multi-format: articles, video, podcasts, social',
                  'Political, business, cultural, and social reporting',
                  'Interviews with newsmakers and opinion leaders',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle size={16} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/services#digital-news-media" className="btn-gold">
                Explore Media Services <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Newspaper,
                  title: 'News Publishing',
                  desc: 'Online news articles and editorial features',
                },
                {
                  icon: Globe,
                  title: 'Video Journalism',
                  desc: 'Video news, reports, and multimedia content',
                },
                {
                  icon: Users,
                  title: 'Special Reports',
                  desc: 'In-depth interviews and investigative pieces',
                },
                {
                  icon: Award,
                  title: 'Digital Programs',
                  desc: 'Podcasts, webinars, and digital broadcasts',
                },
              ].map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-white/8 border border-white/10 rounded-lg p-5 hover:bg-white/12 transition-colors"
                >
                  <Icon size={24} className="text-[#c9a84c] mb-3" />
                  <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: 'var(--font-serif)' }}>
                    {title}
                  </h4>
                  <p className="text-gray-400 text-xs">{desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PR & COMMUNICATIONS ═══ */}
      <section
        className="section-py bg-white"
        aria-label="PR and Corporate Communications"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#faf8f3] rounded-xl p-8 border border-[#e5e0d5]">
                <h3
                  className="text-xl font-bold text-[#1a2744] mb-6"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  PR & Communications Services
                </h3>
                <div className="space-y-4">
                  {[
                    { title: 'Media Relations', desc: 'Building and maintaining relationships with media houses and journalists.' },
                    { title: 'Press Releases', desc: 'Crafting compelling press releases that capture attention and convey your story.' },
                    { title: 'Reputation Management', desc: 'Protecting and enhancing your brand reputation through strategic communications.' },
                    { title: 'Event Communications', desc: 'End-to-end publicity and communications support for corporate events.' },
                    { title: 'Crisis Communications', desc: 'Rapid, strategic response to protect your brand during sensitive situations.' },
                  ].map(({ title, desc }) => (
                    <div key={title} className="flex gap-4 items-start pb-4 border-b border-[#e5e0d5] last:border-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-[#c9a84c] mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#1a2744] text-sm mb-0.5">
                          {title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-1 lg:order-2"
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                PR & Corporate Communications
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Shaping Narratives. Building Reputations.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                In today's information-driven world, how your story is told is as
                important as the story itself. BNS provides comprehensive public
                relations and corporate communications services to help businesses,
                institutions, and public figures communicate effectively.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                Led by professionals with direct experience in national media and
                journalism, our PR team understands how newsrooms work — giving
                your communications a strategic edge.
              </p>
              <Link to="/services#public-relations" className="btn-primary">
                Explore PR Services <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIRECTOR INTRO BAND ═══ */}
      <section
        className="section-py bg-gradient-to-r from-[#0f1729] via-[#1a2744] to-[#243362]"
        aria-label="Director introduction"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-6">
                Leadership
              </p>
              <div className="w-24 h-24 rounded-full bg-[#c9a84c]/20 border-2 border-[#c9a84c] flex items-center justify-center mx-auto mb-6">
                <span
                  className="text-3xl font-bold text-[#c9a84c]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  UR
                </span>
              </div>
              <h2
                className="text-3xl sm:text-4xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ujjwal Roy
              </h2>
              <p className="text-[#c9a84c] font-medium mb-6">
                Founder & Director — Bengal News Service PR & Consultancy Pvt. Ltd.
              </p>
              <div className="gold-divider center mb-7" />
              <blockquote className="text-gray-300 text-lg leading-relaxed italic mb-8 max-w-2xl mx-auto">
                &ldquo;With decades of journalism experience — covering Parliament,
                politics, national policy, and international developments — BNS
                is built on the foundations of editorial integrity, professional
                excellence, and a deep commitment to Bengal's story.&rdquo;
              </blockquote>
              <p className="text-gray-400 text-sm mb-8 max-w-2xl mx-auto">
                A veteran journalist and media professional with extensive experience
                in parliamentary reporting, political coverage, national and
                international assignments, and corporate communications — Ujjwal Roy
                brings unparalleled credibility and expertise to the BNS platform.
              </p>
              <Link to="/leadership" className="btn-gold">
                View Full Profile <ChevronRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIGITAL MARKETING ═══ */}
      <section
        className="section-py bg-[#faf8f3]"
        aria-label="Digital Marketing"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Digital Marketing & Advertising
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Amplify Your Brand. Reach Your Audience.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                From social media management to content marketing and digital
                advertising, BNS provides data-informed digital marketing services
                designed to grow your brand presence and engage your target audience
                effectively.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-7">
                {[
                  'Digital Advertising',
                  'Social Media Marketing',
                  'Content Marketing',
                  'Brand Promotion',
                  'Online Campaigns',
                  'Search Visibility',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-[#c9a84c] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link to="/services#digital-marketing" className="btn-primary">
                Explore Marketing Services <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
            >
              <div className="relative">
                <div className="bg-[#1a2744] rounded-xl p-8 text-white">
                  <TrendingUp size={36} className="text-[#c9a84c] mb-5" />
                  <h3
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Why Choose BNS for Digital Marketing?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Media-industry insights for smarter content strategies',
                      'PR-aligned digital marketing approach',
                      'Understanding of Bengali and Indian digital audiences',
                      'Integrated brand promotion across channels',
                      'Transparent, goal-oriented campaign planning',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle size={15} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#c9a84c] rounded-lg p-4 shadow-lg">
                  <p className="text-[#1a2744] font-bold text-sm">
                    Integrated
                  </p>
                  <p className="text-[#1a2744] text-xs">Media + Marketing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══ */}
      <section
        className="py-16 bg-[#8b1a1a]"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Ready to Work with BNS?
            </h2>
            <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
              Whether you need media coverage, PR strategy, digital marketing, or
              communications consultancy — we're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold">
                Send a Business Enquiry <ArrowRight size={16} />
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

