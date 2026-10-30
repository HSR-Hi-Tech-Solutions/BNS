import { useEffect } from 'react';
import { Link } from 'react-router-dom';
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

const SERVICE_ICONS = {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
};

export default function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'BNS — Bengal News Service | Voice of Bengal, Vision for Bharat',
      description:
        'Bengal News Service PR & Consultancy Private Limited — Digital news, media, public relations, corporate communications, digital marketing, and consultancy services.',
      ogImage: '/bns-logo-full.png',
    });
  }, []);

  return (
    <div className="w-full">
      {/* ══════════════════════════════════════════════════
          1. HERO SECTION (Dark Editorial)
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-800"
        aria-label="Hero section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Clear Contrast Headline & CTAs */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-6 h-0.5 bg-[#D4AF55]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55]">
                  Digital Media &amp; Communications Platform
                </span>
              </div>

              {/* Both phrases have high-contrast text */}
              <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F6] leading-[1.16] tracking-tight mb-5">
                Voice of Bengal.{' '}
                <span className="text-[#D4AF55] block sm:inline">Vision for Bharat.</span>
              </h1>

              <p className="font-display italic text-slate-300 text-lg sm:text-xl mb-5">
                Bengal News Service PR &amp; Consultancy Private Limited
              </p>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-2xl">
                A digital-first media enterprise delivering credible regional reporting
                alongside strategic public relations, corporate communications, and
                consultancy for businesses and institutions across West Bengal and India.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  to="/services"
                  className="bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-sm px-6 py-3.5 rounded-md shadow-md transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-slate-500/50 hover:border-[#D4AF55] text-[#FAF9F6] hover:text-[#D4AF55] font-semibold text-sm px-6 py-3.5 rounded-md transition-all duration-200 inline-flex items-center gap-2"
                >
                  <span>Get in Touch</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Balanced Professional Brand Panel */}
            <div className="lg:col-span-5">
              <div className="bg-[#16233D] border border-slate-700/60 rounded-xl p-7 sm:p-9 shadow-2xl">
                {/* Brand header */}
                <div className="flex items-center gap-4 pb-6 border-b border-slate-700/60 mb-6">
                  <img
                    src="/favicon.png"
                    alt="Bengal News Service logo"
                    className="h-12 sm:h-14 w-auto object-contain shrink-0"
                  />
                  <div>
                    <h2 className="font-display font-bold text-lg sm:text-xl text-[#FAF9F6] leading-tight">
                      Bengal News Service
                    </h2>
                    <p className="text-xs font-semibold text-[#D4AF55] tracking-widest uppercase mt-1">
                      PR &amp; CONSULTANCY PVT. LTD.
                    </p>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Bridging ground-level journalism with high-impact corporate
                  communications counsel, backed by senior editorial leadership.
                </p>

                {/* Verified facts */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#D4AF55] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#FAF9F6]">
                        Digital News &amp; Multimedia Platform
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Authentic reporting on Bengal affairs, politics, economy, and
                        society.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#D4AF55] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#FAF9F6]">
                        Strategic PR &amp; Corporate Advisory
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Executive profiling, reputation management, and media relations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle size={17} className="text-[#D4AF55] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-[#FAF9F6]">
                        Statutory Registration
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">
                        CIN: {COMPANY.cin} · Registered in West Bengal, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          2. ABOUT SECTION (Light Content)
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#FAF9F6] py-16 sm:py-20 lg:py-24 border-b border-slate-200"
        aria-label="About BNS"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left: Introduction */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-[#8E252B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B]">
                  Company Overview
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1120] leading-tight mb-5">
                A New Voice for Bengal and Bharat
              </h2>

              <p className="text-base sm:text-lg leading-relaxed text-[#263247] font-medium mb-5 border-l-2 border-[#D4AF55] pl-4">
                Bengal News Service PR &amp; Consultancy Private Limited operates at the
                intersection of authentic journalism and strategic communication.
              </p>

              <div className="space-y-4 text-sm sm:text-base text-[#586477] leading-relaxed mb-8">
                <p>
                  Incorporated in West Bengal, BNS provides credible, balanced news
                  coverage of regional and national developments while simultaneously
                  delivering specialized PR, media relations, and digital marketing
                  services to enterprises and institutions.
                </p>
                <p>
                  Our practice is guided by seasoned journalism professionals with
                  extensive experience in parliamentary reporting and political
                  journalism, ensuring every communications effort is rooted in real-world
                  media insight.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="bg-[#0B1120] hover:bg-[#16233D] text-[#FAF9F6] font-semibold text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Learn More About Us</span>
                  <ChevronRight size={15} />
                </Link>
                <Link
                  to="/leadership"
                  className="border border-slate-300 hover:border-[#0B1120] text-[#0B1120] font-semibold text-sm px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2"
                >
                  <span>Meet Our Leadership</span>
                </Link>
              </div>
            </div>

            {/* Right: Consistent Vision, Mission, and Verification Cards */}
            <div className="lg:col-span-6 space-y-5">
              {/* Vision Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-[#0B1120] flex items-center justify-center shrink-0">
                    <Eye size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF55]">
                      Vision
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#0B1120]">
                      Our Strategic Vision
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#586477] leading-relaxed pl-13">
                  To be the most trusted and impactful digital news and communications
                  platform representing Bengal&apos;s voice with integrity, depth, and
                  national relevance.
                </p>
              </div>

              {/* Mission Card (Exact same styling as Vision) */}
              <div className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-sm">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center shrink-0">
                    <Target size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#D4AF55]">
                      Mission
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#0B1120]">
                      Our Core Mission
                    </h3>
                  </div>
                </div>
                <p className="text-sm text-[#586477] leading-relaxed pl-13">
                  To deliver responsible digital journalism while equipping organizations
                  with expert public relations, media strategy, and marketing solutions
                  that build lasting credibility.
                </p>
              </div>

              {/* Separate Corporate Registration Panel */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0B1120] pb-3 mb-3 border-b border-slate-100">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={15} className="text-[#D4AF55]" />
                    Corporate Verification
                  </span>
                  <span className="text-slate-400 font-normal">RoC Kolkata</span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400">Company Name</span>
                    <p className="font-semibold text-[#0B1120] mt-0.5">
                      Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                    </p>
                  </div>
                  <div>
                    <span className="text-slate-400">Corporate Identity Number</span>
                    <p className="font-semibold text-[#0B1120] mt-0.5">{COMPANY.cin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          3. SERVICES SECTION (Premium Grid)
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-white py-16 sm:py-20 lg:py-24 border-b border-slate-200"
        aria-label="Core Services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row with inline CTA */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-0.5 bg-[#8E252B]" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B]">
                  What We Offer
                </span>
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#0B1120]">
                Our Core Practice Areas
              </h2>
              <p className="text-[#586477] text-sm sm:text-base mt-2 max-w-xl">
                An integrated suite of media publishing, communications, marketing, and
                consultancy services.
              </p>
            </div>

            <Link
              to="/services"
              className="border border-slate-300 hover:border-[#0B1120] text-[#0B1120] font-semibold text-sm px-5 py-2.5 rounded-md transition-colors inline-flex items-center gap-2 self-start sm:self-auto"
            >
              <span>View All Services</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* 4 Practice Area Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = SERVICE_ICONS[service.icon];
              return (
                <div
                  key={service.id}
                  className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-[#0B1120]">
                        <Icon size={20} />
                      </div>
                      <span className="font-display font-bold text-xs tracking-widest text-[#D4AF55]">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-lg text-[#0B1120] mb-2 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#586477] leading-relaxed mb-5">
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6 pt-3 border-t border-slate-200/60">
                      {service.items.slice(0, 3).map((item) => (
                        <li
                          key={item}
                          className="text-xs text-[#263247] flex items-start gap-2"
                        >
                          <CheckCircle
                            size={13}
                            className="text-[#D4AF55] shrink-0 mt-0.5"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/services#${service.id}`}
                    className="text-xs font-bold uppercase tracking-wider text-[#0B1120] hover:text-[#D4AF55] inline-flex items-center gap-1 pt-3 border-t border-slate-200/80 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          4. LEADERSHIP SECTION (Balanced Proportions)
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#0B1120] text-white py-16 sm:py-20 lg:py-24 border-b border-slate-800"
        aria-label="Leadership section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#16233D] border border-slate-700/60 rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Director Medallion & Role */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left border-b lg:border-b-0 lg:border-r border-slate-700/60 pb-8 lg:pb-0 lg:pr-8">
                <div className="w-20 h-20 rounded-full border-2 border-[#D4AF55] bg-[#0B1120] flex items-center justify-center text-[#D4AF55] font-display font-bold text-2xl shadow-inner mb-4">
                  UR
                </div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-1">
                  Executive Direction
                </span>
                <h3 className="font-display font-bold text-2xl text-[#FAF9F6]">
                  Ujjwal Roy
                </h3>
                <p className="text-xs font-semibold text-[#D4AF55] uppercase tracking-wider mt-0.5 mb-3">
                  Founder &amp; Director
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 max-w-sm">
                  Veteran journalist and media consultant with decades of experience
                  covering national parliament, political policy, and corporate
                  communications strategy.
                </p>

                <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                  {[
                    'Parliamentary Reporting',
                    'Political Analysis',
                    'Media Relations',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded bg-[#0B1120] text-slate-300 border border-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  to="/leadership"
                  className="border border-slate-600 hover:border-[#D4AF55] text-white hover:text-[#D4AF55] text-xs font-semibold px-4 py-2 rounded-md transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Leadership Profile</span>
                  <ChevronRight size={14} />
                </Link>
              </div>

              {/* Right Column: Balanced Quotation */}
              <div className="lg:col-span-7">
                <Quote size={32} className="text-[#D4AF55]/60 mb-4" />

                <blockquote className="font-display italic text-lg sm:text-xl lg:text-2xl text-[#FAF9F6] leading-relaxed mb-6 font-normal">
                  &ldquo;Bengal has a story that deserves to be told with depth, accuracy,
                  and pride. BNS is our commitment to telling that story — and to helping
                  institutions communicate with the credibility they deserve.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-slate-700/60">
                  <p className="font-display font-bold text-base text-[#FAF9F6]">
                    Ujjwal Roy
                  </p>
                  <p className="text-xs text-[#D4AF55] mt-0.5">
                    Director, Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          5. WHY CHOOSE BNS (Differentiators)
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#FAF9F6] py-16 sm:py-20 border-b border-slate-200"
        aria-label="Why choose BNS"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
              Institutional Strengths
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1120]">
              Why Work With BNS
            </h2>
            <p className="text-sm text-[#586477] mt-2 max-w-xl mx-auto">
              Combining newsroom rigor with strategic corporate communication
              capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: 'Journalism-Led PR',
                desc: 'Strategy shaped by journalists who understand editorial decision-making and genuine story value.',
              },
              {
                icon: Globe,
                title: 'Bengal & National Insight',
                desc: 'Deep regional roots in West Bengal combined with national policy perspectives.',
              },
              {
                icon: ShieldCheck,
                title: 'Editorial Standards',
                desc: 'Clear boundaries separating independent journalism from commercial advisory retainers.',
              },
              {
                icon: TrendingUp,
                title: 'Integrated Reach',
                desc: 'Digital news, press management, and digital promotion coordinated under one roof.',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-[#0B1120] flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display font-bold text-base text-[#0B1120] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#586477] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          6. CALL TO ACTION
      ══════════════════════════════════════════════════ */}
      <section
        className="bg-[#0B1120] text-white py-16 sm:py-20 text-center"
        aria-label="Call to Action"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            Engage Our Team
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#FAF9F6] mb-4">
            Ready to Work With Bengal News Service?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Whether you require media coverage, PR strategy, digital marketing, or
            communications consultancy — our team is ready to assist.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-sm px-7 py-3.5 rounded-md shadow-md transition-all duration-200 hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Send a Business Enquiry</span>
              <ArrowRight size={15} />
            </Link>
            <Link
              to="/services"
              className="border border-slate-500 hover:border-white text-[#FAF9F6] font-semibold text-sm px-6 py-3.5 rounded-md transition-colors"
            >
              <span>View All Services</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
