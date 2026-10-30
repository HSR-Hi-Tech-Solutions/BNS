import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
} from 'lucide-react';
import { SERVICES } from '../constants';
import { setPageMeta } from '../utils/seo';

const ICON_MAP = {
  Newspaper,
  Megaphone,
  TrendingUp,
  Briefcase,
};

export default function Services() {
  const location = useLocation();

  useEffect(() => {
    setPageMeta({
      title: 'Our Services — BNS Bengal News Service',
      description:
        'BNS offers digital news & media, public relations & corporate communications, digital marketing & advertising, and media consultancy services.',
    });
  }, []);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 300);
      }
    }
  }, [location.hash]);

  return (
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            What We Do
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            Our Core Services
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            An integrated suite of media, communications, digital marketing, and
            consultancy services designed to inform audiences and deliver results for
            clients.
          </p>
        </div>
      </section>

      {/* ── STICKY SERVICE NAVIGATION PILLS ────────────── */}
      <div className="sticky top-[72px] lg:top-[80px] z-40 bg-[#0B1120]/95 backdrop-blur-md border-b border-slate-800 py-3 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-1">
            {SERVICES.map((s, idx) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap text-slate-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-slate-700 transition-colors"
              >
                <span className="text-[#D4AF55] mr-1.5 font-bold">0{idx + 1}</span>
                {s.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE SECTIONS ───────────────────────────── */}
      <div className="divide-y divide-slate-200">
        {SERVICES.map((service, idx) => {
          const Icon = ICON_MAP[service.icon];
          const isEven = idx % 2 === 0;

          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-16 sm:py-20 scroll-mt-28 ${
                isEven ? 'bg-white' : 'bg-[#FAF9F6]'
              }`}
              aria-label={service.title}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  {/* Left Column: Practice Overview Card */}
                  <div className="lg:col-span-5">
                    <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-8 text-white shadow-xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <span className="font-serif font-bold text-2xl text-slate-600">
                          0{idx + 1}
                        </span>
                      </div>

                      <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF55] block mb-2">
                        Practice Area 0{idx + 1}
                      </span>
                      <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF9F6] mb-4 leading-snug">
                        {service.title}
                      </h2>
                      <p className="text-slate-300 text-sm leading-relaxed mb-8">
                        {service.description}
                      </p>

                      <div className="pt-6 border-t border-slate-800">
                        <Link
                          to="/contact"
                          className="w-full bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider py-3 rounded-md text-center block shadow-sm transition-colors"
                        >
                          Enquire About This Service
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Offerings Grid */}
                  <div className="lg:col-span-7">
                    <div className="mb-6">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
                        Included Modules
                      </span>
                      <h3 className="font-serif font-bold text-2xl text-[#0B1120] mb-2">
                        Service Scope &amp; Capabilities
                      </h3>
                      <p className="text-sm text-[#586477]">
                        Tailored deliverables executed in accordance with client
                        objectives and professional standards.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      {service.items.map((item, itemIdx) => (
                        <div
                          key={item}
                          className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-sm"
                        >
                          <div className="w-7 h-7 rounded-lg bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle size={15} />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                              Deliverable {String(itemIdx + 1).padStart(2, '0')}
                            </span>
                            <p className="text-sm font-semibold text-[#0B1120] leading-snug">
                              {item}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white flex items-start gap-3 text-xs text-[#586477]">
                      <ShieldCheck size={16} className="text-[#D4AF55] shrink-0 mt-0.5" />
                      <span>
                        All services are delivered under formal consultation agreements
                        and in compliance with Indian regulatory and advertising codes.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CALL TO ACTION ────────────────────────────── */}
      <section className="bg-[#0B1120] text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-[#FAF9F6] mb-4">
            Ready to Discuss Your Requirements?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            Contact us for a detailed project consultation or retainer proposal.
          </p>
          <Link
            to="/contact"
            className="bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-sm px-7 py-3.5 rounded-md shadow-sm transition-colors inline-flex items-center gap-2"
          >
            <span>Send a Business Enquiry</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}
