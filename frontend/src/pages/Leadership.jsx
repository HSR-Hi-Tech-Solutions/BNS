import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award,
  Globe,
  Mic,
  BookOpen,
  Users,
  Briefcase,
  X as Twitter,
  Rss,
  Mail,
  ArrowRight,
  Quote,
  ShieldCheck,
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

const EXPERTISE = [
  'Parliamentary & Legislative Reporting',
  'Political Dynamics & Electoral Analysis',
  'National Governance & Policy Tracking',
  'Media Relations & Editorial Networks',
  'Crisis Communications & Advisory',
  'Corporate Communications Strategy',
  'Multi-Format Digital Journalism',
  'Executive Reputation Architecture',
];

const EXPERIENCE = [
  {
    Icon: BookOpen,
    title: 'Parliamentary Journalism',
    desc: 'Extensive on-the-ground experience reporting from Parliament House — covering legislative debates, budgetary sessions, and policy decisions that shape Indian governance.',
  },
  {
    Icon: Globe,
    title: 'Political & Electoral Affairs',
    desc: 'In-depth coverage of regional Bengal politics and national electoral movements — analyzing party strategies, coalition dynamics, and socio-economic shifts.',
  },
  {
    Icon: Mic,
    title: 'National & Global Assignments',
    desc: 'Reporting from across Bharat and international conferences on developments influencing trade, regional stability, and national strategy.',
  },
  {
    Icon: Users,
    title: 'Senior Newsroom Networks',
    desc: 'Deep professional relationships built over decades with chief editors, bureau chiefs, and key opinion leaders across print, broadcast, and digital media.',
  },
  {
    Icon: Briefcase,
    title: 'Corporate Advisory Experience',
    desc: 'Counseling business leaders, institutions, and public figures on message framing, crisis de-escalation, and high-stakes announcements.',
  },
  {
    Icon: Award,
    title: 'Editorial Standards Leadership',
    desc: 'Instilling strict journalistic accuracy, source verification, and ethical boundaries across all BNS news and corporate assignments.',
  },
];

export default function Leadership() {
  useEffect(() => {
    setPageMeta({
      title: 'Executive Leadership — Ujjwal Roy | BNS Bengal News Service',
      description:
        'Meet Ujjwal Roy, Founder and Director of Bengal News Service PR & Consultancy Pvt. Ltd. — veteran journalist with decades of parliamentary reporting and media advisory experience.',
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
              <span>Executive Profile</span>
              <span className="accent-line" />
            </div>
            <h1 className="font-serif text-white mb-4">The Leadership Behind BNS</h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Headed by a veteran journalist and media strategist with decades of
              national parliamentary reporting and editorial leadership experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── DIRECTOR PROFILE SECTION ──────────────────── */}
      <section className="section-py bg-white" aria-label="Director Profile">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left Column: Profile Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4"
            >
              <div
                className="rounded-2xl overflow-hidden border border-white/10 text-white"
                style={{
                  background: 'linear-gradient(150deg, #070c16 0%, #111d33 60%, #0c1424 100%)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                }}
              >
                {/* Monogram Seal & Name */}
                <div className="p-8 text-center border-b border-white/10">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
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
                  <h2 className="font-serif text-2xl font-bold text-white mb-1">
                    Ujjwal Roy
                  </h2>
                  <p className="text-xs font-semibold text-[var(--bns-gold)] uppercase tracking-wider">
                    Founder &amp; Director
                  </p>
                  <p className="text-xs text-white/50 mt-1">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                </div>

                {/* Facts Table */}
                <div className="p-6 space-y-3 text-xs">
                  {[
                    { label: 'Role', value: 'Founder & Director' },
                    { label: 'Primary Field', value: 'Journalism & Media Advisory' },
                    { label: 'Specialization', value: 'Parliamentary Affairs & Politics' },
                    { label: 'Jurisdiction', value: 'West Bengal & New Delhi' },
                    { label: 'Organization', value: 'Bengal News Service Pvt. Ltd.' },
                  ].map((row, i) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-3 pb-3 border-b border-white/[0.08] last:border-0 last:pb-0"
                    >
                      <span className="text-white/45 flex-shrink-0">{row.label}</span>
                      <span className="text-white/85 text-right font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                {/* Direct Action Link */}
                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="btn-gold w-full !rounded-xl !py-2.5 !text-xs justify-center"
                  >
                    <span>Connect with Executive Office</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Comprehensive Biography */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-8"
            >
              <div className="eyebrow-badge mb-3">
                <span className="accent-line" />
                <span>Biography &amp; Record</span>
              </div>
              <h2 className="section-heading mb-6">
                Decades of Journalism and Communications Leadership
              </h2>

              <div className="space-y-4 text-[var(--bns-gray-600)] text-sm sm:text-base leading-relaxed mb-8">
                <p>
                  Ujjwal Roy is the Founder and Director of Bengal News Service PR &amp; Consultancy Private Limited.
                  With decades of career experience spanning some of India&apos;s most demanding reporting environments,
                  he brings unparalleled authority and media acumen to the organization.
                </p>
                <p>
                  His journalism career encompasses comprehensive reporting from the corridors of the Parliament of
                  India — analyzing key legislative debates, budgetary policies, and national political dynamics.
                  This background provides a deep, practical understanding of how governance, media, and public policy intersect.
                </p>
                <p>
                  Across West Bengal and eastern India, his reporting has consistently unpacked regional political currents,
                  electoral strategies, state economic policy, and grassroots societal concerns. His assignments have also
                  included national and international events that shaped India&apos;s evolving role on the world stage.
                </p>
                <p>
                  At BNS, Ujjwal Roy leads the editorial vision of the news service while steering the corporate
                  communications and PR practice — helping enterprises, institutions, and leaders build lasting public trust.
                </p>
              </div>

              {/* Competencies Grid */}
              <div className="bns-card p-6 sm:p-7 border border-slate-200">
                <h3 className="font-serif font-bold text-base text-[var(--bns-navy)] mb-4">
                  Areas of Strategic Competence
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {EXPERTISE.map((skill) => (
                    <span key={skill} className="tag-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── KEY EXPERIENCE HIGHLIGHTS ─────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-gray-50)' }}
        aria-label="Experience Highlights"
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
              <span>Career Highlights</span>
              <span className="accent-line" />
            </div>
            <h2 className="section-heading">Professional Career Milestones</h2>
            <p className="section-subheading">
              Foundational reporting and communications expertise that informs BNS&apos;s strategic approach.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE.map(({ Icon, title, desc }, idx) => (
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

      {/* ── DIRECTOR QUOTATION (Balanced, not oversized) ── */}
      <section
        className="section-py text-white"
        style={{ background: 'var(--bns-navy-dark)' }}
        aria-label="Director Perspective"
      >
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 border border-white/10"
            style={{
              background: 'linear-gradient(145deg, #0a1120 0%, #111d33 60%, #0c1424 100%)',
            }}
          >
            <Quote size={36} className="text-[var(--bns-gold)] opacity-40 mb-6" />

            <blockquote className="font-serif text-xl sm:text-2xl lg:text-3xl text-white/95 leading-snug font-normal italic mb-8">
              &ldquo;Bengal has a story that deserves to be told with depth, accuracy, and pride.
              BNS is our commitment to telling that story — and to helping others communicate
              their stories with the professionalism they deserve.&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="font-serif font-bold text-white text-base">Ujjwal Roy</p>
                <p className="text-xs text-[var(--bns-gold)] mt-0.5">
                  Founder &amp; Director, Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                </p>
              </div>
              <span className="text-xs text-white/40 hidden sm:inline-block">
                Registered in West Bengal, India
              </span>
            </div>
          </motion.div>
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
              Consult with Experienced Media Leadership
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-8 leading-relaxed">
              Reach out to arrange a confidential briefing on PR strategy, corporate positioning, or media inquiries.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-gold !rounded-full">
                <span>Contact Leadership Office</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
