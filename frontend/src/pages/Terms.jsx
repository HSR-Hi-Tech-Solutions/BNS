import { useEffect } from 'react';
import { setPageMeta } from '../utils/seo';
import { COMPANY } from '../constants';

const today = new Date().toLocaleDateString('en-IN', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

function Section({ title, children }) {
  return (
    <div className="space-y-3 pt-6 border-t border-slate-200 first:border-t-0 first:pt-0">
      <h2 className="font-serif font-bold text-xl sm:text-2xl text-[#0B1120]">{title}</h2>
      <div className="space-y-3 text-sm sm:text-base text-[#586477] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function Terms() {
  useEffect(() => {
    setPageMeta({
      title: 'Terms & Conditions — BNS Bengal News Service',
      description:
        'Terms and Conditions for using the Bengal News Service website and engaging with BNS services.',
    });
  }, []);

  return (
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            Terms of Use
          </span>
          <h1 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last updated: {today} · Bengal News Service PR &amp; Consultancy Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* ── TERMS CONTENT ─────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-5 mb-10 text-xs sm:text-sm text-[#586477] leading-relaxed">
            <strong className="text-[#8E252B]">Notice:</strong> These Terms and Conditions
            govern your access to the web platforms operated by{' '}
            <strong>Bengal News Service PR &amp; Consultancy Private Limited</strong>{' '}
            (CIN: {COMPANY.cin}).
          </div>

          <div className="space-y-8">
            <Section title="1. Acceptance of Terms">
              <p>
                By accessing this website, you agree to comply with and be bound by these
                Terms &amp; Conditions and applicable laws of India. If you disagree with
                any portion of these terms, please refrain from using our platforms.
              </p>
            </Section>

            <Section title="2. Corporate Information">
              <p>
                This website is operated by{' '}
                <strong>Bengal News Service PR &amp; Consultancy Private Limited</strong>,
                incorporated under the Companies Act, 2013, in West Bengal, India (CIN:{' '}
                {COMPANY.cin}).
              </p>
            </Section>

            <Section title="3. Intellectual Property">
              <p>
                All journalistic content, articles, trademarks, brand emblems, and visual
                assets published on this site are the proprietary intellectual property of
                BNS or licensed appropriately. Unauthorized commercial re-publication is
                prohibited.
              </p>
            </Section>

            <Section title="4. Professional Engagements">
              <p>
                Submitting an enquiry through this website does not constitute a binding
                contract. Professional services and PR retainers are governed by formal,
                written agreements executed between BNS and the client.
              </p>
            </Section>

            <Section title="5. Governing Law & Jurisdiction">
              <p>
                These terms are governed by and construed in accordance with the laws of
                the Republic of India. Any disputes arising in connection with these terms
                shall be subject to the exclusive jurisdiction of the competent courts in
                Kolkata, West Bengal.
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}
