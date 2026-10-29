import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { setPageMeta } from '../utils/seo';
import { COMPANY } from '../constants';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const today = new Date().toLocaleDateString('en-IN', {
  year: 'numeric', month: 'long', day: 'numeric',
});

export default function PrivacyPolicy() {
  useEffect(() => {
    setPageMeta({
      title: 'Privacy Policy — BNS Bengal News Service',
      description: 'Privacy Policy for Bengal News Service PR & Consultancy Pvt. Ltd. — how we collect, use, and protect your personal information.',
    });
  }, []);

  return (
    <div>
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <div className="gold-divider center mb-4" />
            <p className="text-gray-400 text-sm">
              Last updated: {today}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-py bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#faf8f3] border border-[#e5e0d5] rounded-lg p-5 mb-8">
              <p className="text-sm text-gray-600 leading-relaxed">
                <strong className="text-[#8b1a1a]">Important Notice:</strong>{' '}
                This Privacy Policy applies to the website at{' '}
                <strong>{COMPANY.website}</strong> operated by{' '}
                <strong>Bengal News Service PR & Consultancy Private Limited</strong>{' '}
                (CIN: {COMPANY.cin}). Sections marked with{' '}
                <span className="text-[#8b1a1a] font-medium">[To be confirmed]</span>{' '}
                require verification and final confirmation from the company before
                going live.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
              <Section title="1. Who We Are">
                <p>
                  Bengal News Service PR & Consultancy Private Limited ("BNS",
                  "we", "us", or "our") is a company incorporated under the
                  Companies Act, 2013, in West Bengal, India (CIN:{' '}
                  {COMPANY.cin}). We operate this website to provide information
                  about our services and to facilitate business enquiries.
                </p>
                <p>
                  For privacy-related enquiries, please contact us at:{' '}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#1a2744] underline hover:text-[#c9a84c]"
                  >
                    {COMPANY.email}
                  </a>
                  <span className="text-[#8b1a1a] text-xs ml-1">[To be confirmed]</span>
                </p>
              </Section>

              <Section title="2. Information We Collect">
                <p>We may collect the following categories of personal information:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    <strong>Contact Form Data:</strong> Name, email address, phone
                    number (optional), organisation name (optional), service of
                    interest, and your message — when you submit our contact form.
                  </li>
                  <li>
                    <strong>Technical Data:</strong> IP address, browser type, device
                    information, and pages visited — collected automatically through
                    standard web server logs when you visit our website.
                  </li>
                  <li>
                    <strong>Communications:</strong> Email and other communications
                    you send to us directly.
                  </li>
                </ul>
                <p>
                  We do not collect sensitive personal data as defined under
                  applicable Indian law unless explicitly required and consented to.
                </p>
              </Section>

              <Section title="3. How We Use Your Information">
                <p>We use collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>To respond to your business enquiry or general query.</li>
                  <li>To provide information about our services that you have requested.</li>
                  <li>To improve and maintain our website.</li>
                  <li>To comply with applicable legal obligations.</li>
                  <li>To prevent fraud and ensure website security.</li>
                </ul>
                <p>
                  We will not use your personal information for unsolicited
                  marketing communications without your explicit consent.
                </p>
              </Section>

              <Section title="4. Legal Basis for Processing">
                <p>
                  We process your personal data on the basis of:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    <strong>Your consent</strong> — when you submit the contact
                    form, you consent to us using your information to respond to
                    your enquiry.
                  </li>
                  <li>
                    <strong>Legitimate interests</strong> — in operating and
                    improving our website and business.
                  </li>
                  <li>
                    <strong>Legal obligations</strong> — where required by
                    applicable law.
                  </li>
                </ul>
              </Section>

              <Section title="5. Data Retention">
                <p>
                  We retain contact form submissions for a period necessary to
                  fulfil the purpose for which they were collected — typically no
                  longer than 12 months from the date of submission, unless a
                  longer retention period is required by law or by an ongoing
                  business relationship.
                </p>
                <p>
                  Technical log data may be retained for up to 90 days for security
                  and operational purposes.
                </p>
                <p className="text-[#8b1a1a] text-sm">
                  [Specific retention periods to be confirmed by the company and
                  legal counsel.]
                </p>
              </Section>

              <Section title="6. Data Sharing">
                <p>
                  We do not sell, rent, or trade your personal information to third
                  parties. We may share your data with:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>
                    <strong>Service providers</strong> — such as hosting and
                    technology providers who process data on our behalf under
                    data processing agreements.
                  </li>
                  <li>
                    <strong>Legal authorities</strong> — where required by law,
                    court order, or regulatory requirement.
                  </li>
                </ul>
              </Section>

              <Section title="7. Data Security">
                <p>
                  We implement appropriate technical and organisational measures to
                  protect your personal information from unauthorised access,
                  disclosure, alteration, or destruction. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>HTTPS encryption for all data in transit.</li>
                  <li>Server-side input validation and sanitization.</li>
                  <li>Rate limiting to prevent spam and abuse.</li>
                  <li>Access controls on backend systems.</li>
                </ul>
                <p>
                  No method of electronic transmission or storage is 100% secure.
                  While we use commercially reasonable security measures, we cannot
                  guarantee absolute security.
                </p>
              </Section>

              <Section title="8. Cookies">
                <p>
                  This website may use session cookies or local storage for
                  functional purposes (such as maintaining your session state).
                  We do not currently use tracking or advertising cookies.
                </p>
                <p className="text-[#8b1a1a] text-sm">
                  [A full cookie policy should be confirmed with the company,
                  particularly if analytics or third-party tools are added.]
                </p>
              </Section>

              <Section title="9. Your Rights">
                <p>
                  Subject to applicable Indian law, you may have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Access the personal information we hold about you.</li>
                  <li>Request correction of inaccurate personal data.</li>
                  <li>Request deletion of your personal data (subject to legal requirements).</li>
                  <li>Withdraw consent to processing where consent is the basis.</li>
                  <li>Object to or restrict certain processing activities.</li>
                </ul>
                <p>
                  To exercise your rights, please contact us at{' '}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#1a2744] underline hover:text-[#c9a84c]"
                  >
                    {COMPANY.email}
                  </a>
                  . We will respond within a reasonable time.
                </p>
              </Section>

              <Section title="10. Third-Party Links">
                <p>
                  Our website may contain links to third-party websites. We are not
                  responsible for the privacy practices or content of those sites.
                  We encourage you to review their privacy policies before providing
                  any personal information.
                </p>
              </Section>

              <Section title="11. Children's Privacy">
                <p>
                  Our services are not directed to children under the age of 18.
                  We do not knowingly collect personal information from minors. If
                  you believe a minor has provided us with personal data, please
                  contact us and we will take appropriate action.
                </p>
              </Section>

              <Section title="12. Changes to This Policy">
                <p>
                  We may update this Privacy Policy from time to time. The updated
                  version will be indicated by an updated date at the top of this
                  page. We encourage you to review this policy periodically.
                </p>
              </Section>

              <Section title="13. Contact Us">
                <p>
                  For any questions, concerns, or requests regarding this Privacy
                  Policy, please contact:
                </p>
                <div className="bg-[#faf8f3] border border-[#e5e0d5] rounded-lg p-4 mt-3 text-sm">
                  <p className="font-semibold text-[#1a2744]">
                    Bengal News Service PR & Consultancy Private Limited
                  </p>
                  <p>West Bengal, India</p>
                  <p>
                    Email:{' '}
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-[#1a2744] underline hover:text-[#c9a84c]"
                    >
                      {COMPANY.email}
                    </a>
                    <span className="text-[#8b1a1a] text-xs ml-1">[To be confirmed]</span>
                  </p>
                </div>
              </Section>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
              <Link to="/terms" className="btn-secondary text-sm py-2 px-5">
                View Terms & Conditions
              </Link>
              <Link to="/contact" className="btn-primary text-sm py-2 px-5">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <div>
      <h2
        className="text-xl font-bold text-[#1a2744] mb-4 pb-2 border-b border-gray-200"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        {title}
      </h2>
      <div className="space-y-3 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

