import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Globe,
  Newspaper,
  Building,
  Users,
  Target,
  Eye,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';
import { COMPANY } from '../constants';
import { setPageMeta } from '../utils/seo';

const PILLARS = [
  {
    Icon: Globe,
    title: 'Digital-First Approach',
    desc: 'Leveraging digital platforms, multi-format media, and modern distribution channels to engage audiences effectively.',
  },
  {
    Icon: Newspaper,
    title: 'Journalism-Led Communications',
    desc: 'Our public relations services are informed by direct newsroom experience and understanding of media narratives.',
  },
  {
    Icon: Building,
    title: 'Bengal & Regional Roots',
    desc: 'Deep knowledge of West Bengal’s socio-political environment, regional culture, and commercial landscape.',
  },
  {
    Icon: Users,
    title: 'Integrated Service Continuum',
    desc: 'News media reporting, public relations, digital marketing, and consultancy combined under one unified organization.',
  },
  {
    Icon: Target,
    title: 'Strategic Rigor',
    desc: 'Clear, goal-oriented communications planning tailored to specific institutional objectives and audiences.',
  },
  {
    Icon: Eye,
    title: 'Editorial Standards',
    desc: 'Strict separation of independent journalism from commercial advisory retainers to maintain credibility.',
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
  'Community & Regional Stories',
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
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            About BNS
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            Our Story &amp; Purpose
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A digital-first media and communications company rooted in West Bengal,
            committed to credible journalism and strategic communications.
          </p>
        </div>
      </section>

      {/* ── COMPANY INTRODUCTION ────────────────────────── */}
      <section
        className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-slate-200"
        aria-label="Company Overview"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
                Company Overview
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1120] mb-5 leading-tight">
                Bengal News Service PR &amp; Consultancy Pvt. Ltd.
              </h2>

              <p className="text-base sm:text-lg text-[#263247] font-medium leading-relaxed mb-5 border-l-2 border-[#D4AF55] pl-4">
                Bengal News Service PR &amp; Consultancy Private Limited (BNS) is an
                incorporated enterprise in West Bengal, India, combining newsroom
                journalistic rigor with strategic communications counsel.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#586477] leading-relaxed mb-8">
                <p>
                  We operate across digital media publishing, public relations, corporate
                  communications, and media consultancy. Our platform reports on West
                  Bengal&apos;s affairs, politics, economy, and society, with a pan-India
                  perspective on national developments.
                </p>
                <p>
                  Founded on a commitment to editorial integrity and communications
                  excellence, BNS brings together experienced journalists and
                  communications professionals to serve both audiences and clients.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/services"
                  className="bg-[#0B1120] hover:bg-[#16233D] text-[#FAF9F6] font-semibold text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Our Services</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-300 hover:border-[#0B1120] text-[#0B1120] font-semibold text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>

            {/* Right Statutory Card */}
            <div className="lg:col-span-5">
              <div className="bg-white border border-slate-200 rounded-xl p-7 shadow-sm">
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <ShieldCheck size={24} className="text-[#D4AF55] shrink-0" />
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#0B1120] leading-tight">
                      Statutory Details
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Ministry of Corporate Affairs
                    </p>
                  </div>
                </div>

                <div className="space-y-3.5 text-xs sm:text-sm">
                  {[
                    {
                      label: 'Company Name',
                      value: 'Bengal News Service PR & Consultancy Private Limited',
                    },
                    { label: 'Brand', value: 'BNS — Bengal News Service' },
                    { label: 'CIN', value: COMPANY.cin },
                    { label: 'State', value: 'West Bengal, India' },
                    { label: 'Registration Class', value: 'Private Limited Company' },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="flex justify-between gap-3 pb-3 border-b border-slate-100 last:border-0 last:pb-0"
                    >
                      <span className="text-slate-400 shrink-0">{row.label}</span>
                      <span className="font-medium text-[#0B1120] text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VISION & MISSION (Identical Twin Cards) ─────── */}
      <section
        className="bg-white py-16 sm:py-20 border-b border-slate-200"
        aria-label="Vision and Mission"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
              Foundational Direction
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120]">
              Our Vision &amp; Mission
            </h2>
            <p className="text-sm text-[#586477] mt-2 max-w-xl mx-auto">
              Guiding principles that define our editorial focus and client commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vision Card */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0B1120] mb-5">
                  <Eye size={22} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF55] block mb-1">
                  Vision
                </span>
                <h3 className="font-serif font-bold text-xl text-[#0B1120] mb-3">
                  Our Strategic Vision
                </h3>
                <p className="text-sm text-[#586477] leading-relaxed">
                  To be the most trusted and impactful digital news and communications
                  platform representing Bengal&apos;s voice with credibility, professional
                  excellence, and national reach.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#D4AF55]">
                <CheckCircle size={14} />
                <span>Credibility · Integrity · Independence</span>
              </div>
            </div>

            {/* Mission Card (Identical Styling) */}
            <div className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-8 flex flex-col justify-between shadow-sm">
              <div>
                <div className="w-11 h-11 rounded-lg bg-[#D4AF55]/15 border border-[#D4AF55]/30 flex items-center justify-center text-[#D4AF55] mb-5">
                  <Target size={22} />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF55] block mb-1">
                  Mission
                </span>
                <h3 className="font-serif font-bold text-xl text-[#0B1120] mb-3">
                  Our Daily Mission
                </h3>
                <p className="text-sm text-[#586477] leading-relaxed">
                  To deliver responsible digital journalism while equipping businesses and
                  organizations with newsroom-informed PR, communications, and marketing
                  solutions that generate real trust.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center gap-2 text-xs font-semibold text-[#D4AF55]">
                <CheckCircle size={14} />
                <span>Ethical Separation · Client Value</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BUSINESS POSITIONING (6 Pillars) ──────────── */}
      <section
        className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-slate-200"
        aria-label="Business Positioning"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
              Strategic Advantages
            </span>
            <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120]">
              Our Business Positioning
            </h2>
            <p className="text-sm text-[#586477] mt-2 max-w-xl mx-auto">
              What sets BNS apart in the regional media and corporate communications
              sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map(({ Icon, title, desc }) => (
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

      {/* ── REGIONAL & NATIONAL FOCUS ─────────────────── */}
      <section
        className="bg-white py-16 sm:py-20 border-b border-slate-200"
        aria-label="Regional Focus"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
                Regional Focus
              </span>
              <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#0B1120] mb-5">
                West Bengal &amp; Wider Indian Developments
              </h2>
              <p className="text-sm sm:text-base text-[#586477] leading-relaxed mb-6">
                West Bengal is one of India&apos;s most politically significant and
                culturally rich states. BNS brings authentic, in-depth coverage of
                Bengal’s affairs while contextualizing them within broader national and
                international developments.
              </p>

              <div className="flex flex-wrap gap-2">
                {FOCUS_AREAS.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-slate-100 text-[#0B1120] border border-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-8 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF55] block mb-2">
                  Content Architecture
                </span>
                <h3 className="font-serif font-bold text-2xl text-[#FAF9F6] mb-4">
                  Multi-Format &amp; Multi-Language
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Serving diverse audiences across English and Bengali through online
                  articles, video reporting, podcasts, and digital broadcasts tailored to
                  modern information consumption.
                </p>
                <div className="space-y-3 pt-5 border-t border-slate-800 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#D4AF55]" />
                    <span>English Corporate &amp; Policy Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-[#D4AF55]" />
                    <span>Bengali Regional &amp; Cultural Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION ────────────────────────────── */}
      <section className="bg-[#0B1120] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF9F6] mb-4">
            Explore What BNS Offers
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Discover our full range of services or get in touch for a business
            consultation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/services"
              className="bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-sm px-6 py-3 rounded-md shadow-sm transition-colors inline-flex items-center gap-2"
            >
              <span>Our Services</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="border border-slate-600 hover:border-white text-[#FAF9F6] font-semibold text-sm px-6 py-3 rounded-md transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
