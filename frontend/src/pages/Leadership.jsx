import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Globe,
  Mic,
  BookOpen,
  Users,
  Briefcase,
  ArrowRight,
  Quote,
} from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const EXPERTISE = [
  'Parliamentary Reporting',
  'Political Journalism',
  'National & International Coverage',
  'Media Relations',
  'Corporate Communications Strategy',
  'Public Relations Advisory',
  'Digital Media Management',
  'Brand & Reputation Management',
];

const EXPERIENCE = [
  {
    Icon: BookOpen,
    title: 'Parliamentary Reporting',
    desc: 'Extensive experience covering legislative debates, policy discussions, and budgetary sessions from the corridors of India’s Parliament.',
  },
  {
    Icon: Globe,
    title: 'Political Coverage',
    desc: 'In-depth reporting on West Bengal and national political developments — tracking party dynamics, election campaigns, and policy shifts.',
  },
  {
    Icon: Mic,
    title: 'National & Global Assignments',
    desc: 'Reporting assignments across India and international forums covering stories that shape India’s evolving position on the global stage.',
  },
  {
    Icon: Users,
    title: 'Media Relations',
    desc: 'Extensive professional networks with senior editors, journalists, and news organizations built over decades in journalism.',
  },
  {
    Icon: Briefcase,
    title: 'Corporate Advisory',
    desc: 'Strategic counsel for businesses, institutions, and leaders requiring disciplined communications and narrative management.',
  },
  {
    Icon: Award,
    title: 'Editorial Leadership',
    desc: 'Directing journalistic standards, ethical firewalls, and content accuracy across BNS news and consultancy engagements.',
  },
];

export default function Leadership() {
  useEffect(() => {
    setPageMeta({
      title: 'Leadership — Ujjwal Roy | BNS Bengal News Service',
      description:
        'Meet Ujjwal Roy, Founder and Director of Bengal News Service PR & Consultancy Pvt. Ltd. — veteran journalist with decades of parliamentary reporting and media advisory experience.',
    });
  }, []);

  return (
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            Executive Leadership
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            The Vision Behind BNS
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Led by a veteran journalist and media professional with decades of national reporting experience.
          </p>
        </div>
      </section>

      {/* ── DIRECTOR PROFILE SECTION ──────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200" aria-label="Director Profile">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left Column: Profile Card */}
            <div className="lg:col-span-4">
              <div className="bg-[#0B1120] border border-slate-800 rounded-2xl overflow-hidden text-white shadow-xl">
                {/* Monogram Seal & Header */}
                <div className="p-8 text-center border-b border-slate-800">
                  <div className="w-20 h-20 rounded-full border-2 border-[#D4AF55] bg-[#16233D] flex items-center justify-center mx-auto mb-4 text-[#D4AF55] font-serif font-bold text-2xl shadow-inner">
                    UR
                  </div>
                  <h2 className="font-serif font-bold text-2xl text-[#FAF9F6] mb-1">
                    Ujjwal Roy
                  </h2>
                  <p className="text-xs font-semibold text-[#D4AF55] uppercase tracking-wider">
                    Founder &amp; Director
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                </div>

                {/* Details */}
                <div className="p-6 space-y-3.5 text-xs sm:text-sm">
                  {[
                    { label: 'Role', value: 'Founder & Director' },
                    { label: 'Expertise', value: 'Journalism, PR, Media Relations' },
                    { label: 'Specialization', value: 'Parliamentary & Political Reporting' },
                    { label: 'Coverage', value: 'National & Regional Affairs' },
                    { label: 'Location', value: 'West Bengal, India' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-3 pb-3 border-b border-slate-800/80 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-400 shrink-0">{row.label}</span>
                      <span className="text-slate-200 text-right font-medium">{row.value}</span>
                    </div>
                  ))}
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to="/contact"
                    className="w-full bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider py-2.5 rounded-md text-center block shadow-sm transition-colors"
                  >
                    Contact Leadership Office
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Biography Narrative */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
                Director Profile
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120] mb-5">
                Ujjwal Roy
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#586477] leading-relaxed mb-8">
                <p>
                  Ujjwal Roy is the Founder and Director of Bengal News Service PR &amp; Consultancy Private Limited.
                  A veteran journalist and media professional, he brings decades of experience spanning some of India’s most demanding and significant reporting environments.
                </p>
                <p>
                  His journalistic career encompasses comprehensive coverage of parliamentary affairs — reporting from the corridors of India’s Parliament on debates, legislation, and the policy decisions that shape national affairs. This experience provides an authoritative understanding of the intersection between politics, governance, and media.
                </p>
                <p>
                  His background includes extensive political coverage across West Bengal and nationally — tracking electoral politics, party dynamics, and the socio-political currents of modern India. His professional assignments have covered state-level Bengal politics as well as national and international developments.
                </p>
                <p>
                  With extensive media relations expertise and professional networks built across years in journalism, Ujjwal Roy leads BNS with an emphasis on editorial credibility and disciplined communications consultancy.
                </p>
              </div>

              {/* Expertise Area Badges */}
              <div className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-6">
                <h3 className="font-serif font-bold text-base text-[#0B1120] mb-3">
                  Areas of Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {EXPERTISE.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-medium px-3 py-1.5 rounded-md bg-white text-[#0B1120] border border-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── KEY EXPERIENCE (6 Cards) ─────────────────── */}
      <section className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-slate-200" aria-label="Experience Highlights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
              Professional Background
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120]">
              Key Experience &amp; Expertise
            </h2>
            <p className="text-sm text-[#586477] mt-2 max-w-xl mx-auto">
              Foundational journalism experience informing our corporate communications strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIENCE.map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm"
              >
                <div className="w-11 h-11 rounded-lg bg-slate-100 text-[#0B1120] flex items-center justify-center mb-5">
                  <Icon size={20} />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#0B1120] mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-[#586477] leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTATION SECTION (Balanced Proportions) ─── */}
      <section className="bg-[#0B1120] text-white py-16 sm:py-20" aria-label="Director Perspective">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote size={36} className="text-[#D4AF55]/60 mx-auto mb-4" />

          <blockquote className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#FAF9F6] leading-relaxed mb-6 font-normal">
            &ldquo;Bengal has a story that deserves to be told with depth, accuracy, and pride.
            BNS is our commitment to telling that story — and to helping others communicate
            their stories with the professionalism they deserve.&rdquo;
          </blockquote>

          <div className="pt-4 border-t border-slate-800">
            <p className="font-serif font-bold text-base text-[#FAF9F6]">
              Ujjwal Roy
            </p>
            <p className="text-xs text-[#D4AF55] mt-0.5">
              Founder &amp; Director, Bengal News Service PR &amp; Consultancy Pvt. Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────── */}
      <section className="bg-[#FAF9F6] py-16 border-t border-slate-200 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120] mb-3">
            Work With an Experienced Media Professional
          </h2>
          <p className="text-[#586477] text-sm sm:text-base mb-8">
            Get in touch to discuss how BNS can support your media, PR, or communications objectives.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#0B1120] hover:bg-[#16233D] text-[#FAF9F6] font-semibold text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
            >
              <span>Contact BNS</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/services"
              className="border border-slate-300 hover:border-[#0B1120] text-[#0B1120] font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
