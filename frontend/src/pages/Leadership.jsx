import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award, Globe, Mic, BookOpen, Users, Briefcase,
  X as Twitter, Rss, Mail, ArrowRight,
} from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const EXPERTISE = [
  'Parliamentary Reporting',
  'Political Journalism',
  'National & International Coverage',
  'Media Relations',
  'Corporate Communications',
  'Public Relations Strategy',
  'Digital Media',
  'Brand & Reputation Management',
];

const EXPERIENCE = [
  {
    Icon: BookOpen,
    title: 'Parliamentary Reporting',
    desc: 'Extensive experience reporting from India\'s Parliament — covering legislative debates, policy discussions, budget sessions, and the full range of parliamentary proceedings.',
  },
  {
    Icon: Globe,
    title: 'Political Coverage',
    desc: 'In-depth coverage of Bengal politics and national political developments — election campaigns, party dynamics, governance, and political analysis.',
  },
  {
    Icon: Mic,
    title: 'National & International Assignments',
    desc: 'Reporting across India and internationally on developments that shape India\'s position in global affairs, business, and diplomacy.',
  },
  {
    Icon: Users,
    title: 'Media Relations',
    desc: 'Deep professional networks with journalists, editors, news organisations, and media houses — built over decades in the industry.',
  },
  {
    Icon: Briefcase,
    title: 'Corporate Communications',
    desc: 'Advisory and communications support for businesses, institutions, and public figures seeking effective, strategic communications.',
  },
  {
    Icon: Award,
    title: 'Editorial Leadership',
    desc: 'Experience in editorial strategy, content direction, and the journalistic standards that ensure credibility and audience trust.',
  },
];

export default function Leadership() {
  useEffect(() => {
    setPageMeta({
      title: 'Leadership — Ujjwal Roy | BNS Bengal News Service',
      description:
        'Meet Ujjwal Roy, Founder and Director of Bengal News Service PR & Consultancy Pvt. Ltd. — a veteran journalist with decades of experience in Parliament reporting, political coverage, and media relations.',
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
            <p className="eyebrow mb-5">Our Leadership</p>
            <h1 className="font-serif text-white mb-5">
              The Vision Behind BNS
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Led by a veteran journalist and media professional with decades of
              national and international experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIRECTOR PROFILE ─────────────────────────────── */}
      <section className="section-py bg-white" aria-label="Director profile">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Left — profile card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4"
            >
              <div
                className="rounded-sm overflow-hidden"
                style={{ background: 'var(--bns-navy)' }}
              >
                {/* Monogram portrait */}
                <div
                  className="flex flex-col items-center justify-center text-center py-14 px-8"
                  style={{
                    background: 'linear-gradient(160deg, var(--bns-navy-dark) 0%, var(--bns-navy) 60%, var(--bns-navy-light) 100%)',
                    borderBottom: '1px solid rgba(201,168,76,0.2)',
                  }}
                >
                  {/* Large typographic monogram */}
                  <div
                    className="font-serif font-bold leading-none mb-6 select-none"
                    style={{ fontSize: '5rem', color: 'var(--bns-gold)', letterSpacing: '-0.04em' }}
                    aria-label="Ujjwal Roy initials"
                  >
                    UR
                  </div>
                  <h2 className="font-serif text-2xl text-white font-bold mb-1">
                    Ujjwal Roy
                  </h2>
                  <p className="text-sm font-medium" style={{ color: 'var(--bns-gold)' }}>
                    Founder &amp; Director
                  </p>
                  <p className="text-xs mt-1 text-white/40">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                </div>

                {/* Facts */}
                <div className="px-6 py-5 space-y-3">
                  {[
                    { label: 'Role', value: 'Founder & Director' },
                    { label: 'Expertise', value: 'Journalism, PR, Media Relations' },
                    { label: 'Specialisation', value: 'Parliamentary & Political Reporting' },
                    { label: 'Coverage', value: 'National & International Affairs' },
                    { label: 'Based In', value: 'West Bengal, India' },
                  ].map(({ label, value }, i) => (
                    <div
                      key={label}
                      className="flex justify-between gap-4 text-sm pb-3"
                      style={{ borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.07)' : 'none' }}
                    >
                      <span className="text-white/40 font-medium flex-shrink-0">{label}</span>
                      <span className="text-white/80 text-right">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="px-6 pb-6 flex items-center gap-3">
                  {[
                    { Icon: Rss, href: '#', label: 'LinkedIn' },
                    { Icon: Twitter, href: '#', label: 'Twitter/X' },
                    { Icon: Mail, href: 'mailto:contact@bengalnewsservice.com', label: 'Email' },
                  ].map(({ Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-sm flex items-center justify-center transition-all"
                      style={{
                        background: 'rgba(255,255,255,0.06)',
                        color: 'rgba(255,255,255,0.4)',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = 'var(--bns-gold)';
                        e.currentTarget.style.color = 'var(--bns-navy)';
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                      }}
                    >
                      <Icon size={15} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right — bio */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-8"
            >
              <p className="eyebrow mb-4">Director Profile</p>
              <h2
                className="font-serif text-[var(--bns-navy)] leading-tight mb-5"
                style={{ fontSize: 'var(--text-h2)' }}
              >
                Ujjwal Roy
              </h2>
              <div className="rule-gold mb-7" />

              <div className="space-y-4 text-[var(--bns-gray-600)] leading-relaxed mb-8">
                <p>
                  Ujjwal Roy is the Founder and Director of Bengal News Service PR
                  &amp; Consultancy Private Limited. A veteran journalist and media
                  professional, he brings decades of experience spanning some of
                  India&apos;s most demanding and significant reporting environments.
                </p>
                <p>
                  His journalistic career encompasses comprehensive coverage of
                  parliamentary affairs — reporting from the corridors of India&apos;s
                  Parliament on debates, legislation, and the personalities who shape
                  national policy. This experience provides an unparalleled
                  understanding of the intersection between politics, governance,
                  and media.
                </p>
                <p>
                  Ujjwal Roy&apos;s career includes extensive political coverage across
                  West Bengal and nationally — tracking electoral politics, party
                  dynamics, governance, and the socio-political currents that define
                  the contemporary Indian landscape.
                </p>
                <p>
                  His professional work has included national and international
                  assignments, covering events and developments that span India&apos;s
                  growing role on the world stage. With extensive media relations
                  expertise built across years in the journalism industry, Ujjwal
                  Roy is uniquely positioned to lead a company that bridges
                  journalism and communications consultancy.
                </p>
              </div>

              {/* Expertise chips */}
              <div
                className="p-6 rounded-sm"
                style={{ background: 'var(--bns-cream)', border: '1px solid var(--bns-gray-200)' }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--bns-gray-500)] mb-4">
                  Areas of Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  {EXPERTISE.map((item) => (
                    <span key={item} className="tag-chip">{item}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE HIGHLIGHTS ────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-cream)' }}
        aria-label="Experience highlights"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-12"
          >
            <p className="eyebrow mb-4">Professional Background</p>
            <h2
              className="font-serif text-[var(--bns-navy)] leading-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Key Experience &amp; Expertise
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPERIENCE.map(({ Icon, title, desc }, idx) => (
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
                  style={{ background: '#fff', border: '1px solid var(--bns-gray-200)' }}
                >
                  <Icon size={18} style={{ color: 'var(--bns-navy)' }} />
                </div>
                <h3 className="font-serif text-[var(--bns-navy)] text-lg mb-3">{title}</h3>
                <div className="w-8 h-0.5 mb-4" style={{ background: 'var(--bns-gold)' }} />
                <p className="text-sm text-[var(--bns-gray-500)] leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIRECTOR QUOTE ───────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-navy)' }}
        aria-label="Director message"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl"
          >
            <p className="eyebrow mb-6" style={{ color: 'var(--bns-gold)' }}>
              In His Own Words
            </p>
            <blockquote
              className="font-serif text-white leading-snug mb-8"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontStyle: 'italic' }}
            >
              &ldquo;Bengal has a story that deserves to be told with depth, accuracy,
              and pride. BNS is our commitment to telling that story — and to
              helping others communicate their stories with the professionalism
              they deserve.&rdquo;
            </blockquote>
            <div
              className="flex items-center gap-5 pt-6"
              style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
            >
              <div>
                <p className="font-serif font-bold text-white text-lg">Ujjwal Roy</p>
                <p className="text-sm mt-0.5" style={{ color: 'var(--bns-gold)' }}>
                  Founder &amp; Director, BNS — Bengal News Service
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-16 bg-white" aria-label="Leadership CTA">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-serif text-[var(--bns-navy)] text-3xl mb-4">
              Work with an Experienced Media Professional
            </h2>
            <p className="text-[var(--bns-gray-600)] text-lg mb-8 max-w-xl">
              Get in touch to discuss how BNS can support your media, PR, or
              communications objectives.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Contact BNS <ArrowRight size={15} />
              </Link>
              <Link to="/services" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
