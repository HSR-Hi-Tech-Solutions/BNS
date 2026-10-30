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
      <h2 className="font-display font-bold text-xl sm:text-2xl text-[#0B1120]">{title}</h2>
      <div className="space-y-3 text-sm sm:text-base text-[#586477] leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPolicy() {
  useEffect(() => {
    setPageMeta({
      title: 'Privacy Policy — BNS Bengal News Service',
      description:
        'Privacy Policy for Bengal News Service PR & Consultancy Pvt. Ltd. — how we collect, use, and protect your personal information.',
    });
  }, []);

  return (
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            Legal Information
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm">
            Last updated: {today} · Bengal News Service PR &amp; Consultancy Pvt. Ltd.
          </p>
        </div>
      </section>

      {/* ── POLICY CONTENT ────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#FAF9F6] border border-slate-200 rounded-xl p-5 mb-10 text-xs sm:text-sm text-[#586477] leading-relaxed">
            <strong className="text-[#8E252B]">Notice:</strong> This Privacy Policy
            applies to the digital platforms operated by{' '}
            <strong>Bengal News Service PR &amp; Consultancy Private Limited</strong>{' '}
            (CIN: {COMPANY.cin}).
          </div>

          <div className="space-y-8">
            <Section title="1. Who We Are">
              <p>
                Bengal News Service PR &amp; Consultancy Private Limited
                (&ldquo;BNS&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) is a registered corporate entity under the Companies
                Act, 2013, in West Bengal, India. We operate digital news media channels
                and provide corporate communications consultancy.
              </p>
              <p>
                For privacy or data enquiries, please reach us at:{' '}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-[#0B1120] underline font-medium hover:text-[#D4AF55]"
                >
                  {COMPANY.email}
                </a>
                .
              </p>
            </Section>

            <Section title="2. Information We Collect">
              <p>
                We may collect limited personal information under the following
                circumstances:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>
                  <strong>Business Enquiry Forms:</strong> Name, work email address,
                  telephone number, organization name, and scope description when you
                  submit a project brief.
                </li>
                <li>
                  <strong>Technical Telemetry:</strong> Anonymized server logs, browser
                  type, device category, and standard page view statistics to ensure
                  security and site stability.
                </li>
                <li>
                  <strong>Direct Communications:</strong> Correspondence exchanged via
                  email or phone.
                </li>
              </ul>
            </Section>

            <Section title="3. How We Use Information">
              <p>Information submitted to BNS is used exclusively for:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li>Responding to project enquiries and client briefings.</li>
                <li>Fulfilling agreed communications and PR deliverables.</li>
                <li>
                  Ensuring security, spam prevention, and compliance with Indian legal
                  requirements.
                </li>
              </ul>
              <p>
                We do not monetize, rent, or sell client data to third-party advertising
                brokers.
              </p>
            </Section>

            <Section title="4. Data Security & Retention">
              <p>
                We implement appropriate administrative and technical safeguards to
                protect information against unauthorized disclosure. Data is retained only
                as long as necessary to fulfill business purposes or as mandated by law.
              </p>
            </Section>

            <Section title="5. Contact Information">
              <p>
                Bengal News Service PR &amp; Consultancy Private Limited
                <br />
                Kolkata, West Bengal, India
                <br />
                CIN: {COMPANY.cin}
                <br />
                Email: {COMPANY.email}
              </p>
            </Section>
          </div>
        </div>
      </section>
    </div>
  );
}
