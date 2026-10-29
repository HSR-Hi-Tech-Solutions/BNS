import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Award, Globe, Mic, BookOpen, Users, Briefcase,
  X, Rss, Mail, ArrowRight, CheckCircle,
} from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

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
      {/* Hero */}
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-4">
              Our Leadership
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              The Vision Behind BNS
            </h1>
            <div className="gold-divider center mb-5" />
            <p className="text-gray-300 text-lg leading-relaxed">
              Led by a veteran journalist and media professional with decades of
              national and international experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Director Profile */}
      <section className="section-py bg-white" aria-label="Director profile">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Profile Card */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="bg-[#1a2744] rounded-xl overflow-hidden">
                {/* Photo / Monogram */}
                <div className="bg-gradient-to-br from-[#1a2744] via-[#243362] to-[#1a2744] p-12 flex flex-col items-center justify-center text-center border-b border-[#c9a84c]/20">
                  <div className="w-32 h-32 rounded-full bg-[#c9a84c]/15 border-2 border-[#c9a84c] flex items-center justify-center mb-5">
                    <span
                      className="text-4xl font-bold text-[#c9a84c]"
                      style={{ fontFamily: 'var(--font-serif)' }}
                      aria-label="UR initials"
                    >
                      UR
                    </span>
                  </div>
                  <h2
                    className="text-2xl font-bold text-white mb-1"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Ujjwal Roy
                  </h2>
                  <p className="text-[#c9a84c] text-sm font-medium">
                    Founder & Director
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    Bengal News Service PR & Consultancy Pvt. Ltd.
                  </p>
                </div>

                {/* Quick facts */}
                <div className="p-6 space-y-4">
                  {[
                    { label: 'Role', value: 'Founder & Director' },
                    { label: 'Expertise', value: 'Journalism, PR, Media Relations' },
                    { label: 'Specialisation', value: 'Parliamentary & Political Reporting' },
                    { label: 'Coverage', value: 'National & International Affairs' },
                    { label: 'Based In', value: 'West Bengal, India' },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between gap-4 text-sm border-b border-white/8 pb-3 last:border-0 last:pb-0">
                      <span className="text-gray-400 font-medium flex-shrink-0">{label}</span>
                      <span className="text-gray-200 text-right">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Social / Contact */}
                <div className="px-6 pb-6 flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="LinkedIn profile"
                    className="w-9 h-9 rounded flex items-center justify-center bg-white/8 hover:bg-[#c9a84c] hover:text-[#1a2744] text-gray-400 transition-all"
                  >
                    <Rss size={16} />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter/X profile"
                    className="w-9 h-9 rounded flex items-center justify-center bg-white/8 hover:bg-[#c9a84c] hover:text-[#1a2744] text-gray-400 transition-all"
                  >
                    <X size={16} />
                  </a>
                  <a
                    href="mailto:contact@bengalnewsservice.com"
                    aria-label="Email"
                    className="w-9 h-9 rounded flex items-center justify-center bg-white/8 hover:bg-[#c9a84c] hover:text-[#1a2744] text-gray-400 transition-all"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Bio Content */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0.15} variants={fadeUp}
              className="lg:col-span-3"
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Director Profile
              </p>
              <h2
                className="text-3xl font-bold text-[#1a2744] mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Ujjwal Roy
              </h2>
              <div className="gold-divider mb-6" />

              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 mb-7">
                <p className="leading-relaxed">
                  Ujjwal Roy is the Founder and Director of Bengal News Service PR
                  & Consultancy Private Limited. A veteran journalist and media
                  professional, he brings decades of experience spanning some of
                  India's most demanding and significant reporting environments.
                </p>
                <p className="leading-relaxed">
                  His journalistic career encompasses comprehensive coverage of
                  parliamentary affairs — reporting from the corridors of India's
                  Parliament on debates, legislation, and the personalities who shape
                  national policy. This experience provides an unparalleled
                  understanding of the intersection between politics, governance,
                  and media.
                </p>
                <p className="leading-relaxed">
                  Ujjwal Roy's career includes extensive political coverage across
                  West Bengal and nationally — tracking electoral politics, party
                  dynamics, governance, and the socio-political currents that define
                  the contemporary Indian landscape. His reporting has covered both
                  state-level Bengal politics and the broader national political arena.
                </p>
                <p className="leading-relaxed">
                  His professional work has included national and international
                  assignments, covering events, developments, and stories that span
                  India's growing role on the world stage. This global perspective
                  enriches the editorial vision of BNS.
                </p>
                <p className="leading-relaxed">
                  With extensive media relations expertise and professional networks
                  built across years in the journalism industry, Ujjwal Roy is
                  uniquely positioned to lead a company that bridges journalism
                  and communications consultancy. His understanding of how media
                  works — from the inside — is the foundation of BNS's PR and
                  communications approach.
                </p>
              </div>

              {/* Expertise Areas */}
              <div className="bg-[#faf8f3] border border-[#e5e0d5] rounded-xl p-6">
                <h3
                  className="font-bold text-[#1a2744] text-base mb-4"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Areas of Expertise
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'Parliamentary Reporting',
                    'Political Journalism',
                    'National & International Coverage',
                    'Media Relations',
                    'Corporate Communications',
                    'Public Relations Strategy',
                    'Digital Media',
                    'Brand & Reputation Management',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <CheckCircle size={14} className="text-[#c9a84c] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section
        className="section-py bg-[#faf8f3]"
        aria-label="Experience highlights"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="section-header"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              Professional Background
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a2744]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Key Experience & Expertise
            </h2>
            <div className="gold-divider center mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
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
            ].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={idx * 0.08} variants={fadeUp}
                className="bns-card bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-11 h-11 rounded-lg bg-[#1a2744]/8 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#1a2744]" />
                </div>
                <h3
                  className="font-bold text-[#1a2744] text-base mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section-py bg-[#1a2744]" aria-label="Director message">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="text-6xl text-[#c9a84c] mb-5 leading-none"
              style={{ fontFamily: 'Georgia, serif' }}>
              &ldquo;
            </div>
            <blockquote
              className="text-xl sm:text-2xl text-white leading-relaxed font-medium italic mb-6"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Bengal has a story that deserves to be told with depth, accuracy,
              and pride. BNS is our commitment to telling that story — and to
              helping others communicate their stories with the professionalism
              they deserve.
            </blockquote>
            <div className="gold-divider center mb-5" />
            <p className="text-[#c9a84c] font-semibold">Ujjwal Roy</p>
            <p className="text-gray-400 text-sm">
              Founder & Director, BNS — Bengal News Service
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white" aria-label="Leadership CTA">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl font-bold text-[#1a2744] mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Work with an Experienced Media Professional
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Get in touch to discuss how BNS can support your media, PR, or
              communications objectives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact BNS <ArrowRight size={16} />
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

