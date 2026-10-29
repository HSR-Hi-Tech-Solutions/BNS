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

export default function Terms() {
  useEffect(() => {
    setPageMeta({
      title: 'Terms & Conditions — BNS Bengal News Service',
      description: 'Terms and Conditions for using the Bengal News Service website and engaging with BNS services.',
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
              Terms & Conditions
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
                <strong className="text-[#8b1a1a]">Legal Notice:</strong>{' '}
                These Terms & Conditions govern your use of this website and are
                subject to the laws of India. Sections marked{' '}
                <span className="text-[#8b1a1a] font-medium">[To be confirmed]</span>{' '}
                require review and confirmation by the company and/or legal counsel
                before publication.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-700">
              <Section title="1. Acceptance of Terms">
                <p>
                  By accessing and using the website at{' '}
                  <strong>{COMPANY.website}</strong>, you agree to be bound by these
                  Terms & Conditions. If you do not agree to these terms, please do
                  not use this website.
                </p>
                <p>
                  These terms apply to all visitors, users, and others who access
                  or use the website.
                </p>
              </Section>

              <Section title="2. About the Company">
                <p>
                  This website is operated by{' '}
                  <strong>
                    Bengal News Service PR & Consultancy Private Limited
                  </strong>{' '}
                  (CIN: {COMPANY.cin}), a company incorporated under the Companies
                  Act, 2013, in West Bengal, India.
                </p>
                <p>
                  For any enquiries regarding these terms, contact us at:{' '}
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#1a2744] underline hover:text-[#c9a84c]"
                  >
                    {COMPANY.email}
                  </a>
                  <span className="text-[#8b1a1a] text-xs ml-1">[To be confirmed]</span>
                </p>
              </Section>

              <Section title="3. Use of Website">
                <p>You agree to use this website only for lawful purposes and in a manner that:</p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Does not violate any applicable local, national, or international law or regulation.</li>
                  <li>Does not transmit or submit any unsolicited or unauthorised advertising or promotional material (spam).</li>
                  <li>Does not knowingly transmit any data or content that contains viruses, malware, or any other harmful code.</li>
                  <li>Does not attempt to gain unauthorised access to any part of the website or its related systems.</li>
                  <li>Does not infringe the intellectual property rights of BNS or third parties.</li>
                </ul>
              </Section>

              <Section title="4. Intellectual Property">
                <p>
                  All content on this website — including but not limited to text,
                  graphics, logos, images, audio, video, and software — is the
                  property of Bengal News Service PR & Consultancy Private Limited
                  or its content suppliers and is protected by applicable Indian
                  and international intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, transmit, or republish
                  any content from this website without prior written permission
                  from BNS.
                </p>
                <p>
                  The BNS logo, brand name, and tagline are trademarks of Bengal
                  News Service PR & Consultancy Private Limited.{' '}
                  <span className="text-[#8b1a1a] text-xs">[Trademark registration status to be confirmed.]</span>
                </p>
              </Section>

              <Section title="5. Services">
                <p>
                  This website provides information about BNS's services in digital
                  news and media, public relations, corporate communications, digital
                  marketing, and consultancy.
                </p>
                <p>
                  Information about services on this website is for general
                  informational purposes only. Actual service availability, scope,
                  pricing, and terms are subject to individual consultation,
                  agreement, and a separate engagement contract between BNS and the
                  client.
                </p>
                <p>
                  BNS reserves the right to modify, suspend, or discontinue any
                  service at any time without notice.
                </p>
              </Section>

              <Section title="6. Contact Form & Enquiries">
                <p>
                  Submitting a contact form on this website does not constitute a
                  contractual commitment by BNS to provide any service. All
                  enquiries are subject to review and a formal agreement before
                  any services commence.
                </p>
                <p>
                  We aim to respond to enquiries within 2 business days. Response
                  times may vary.
                </p>
              </Section>

              <Section title="7. Accuracy of Information">
                <p>
                  BNS endeavours to ensure that information on this website is
                  accurate and up to date. However, we make no warranty or
                  representation about the completeness, accuracy, timeliness, or
                  suitability of any information on the website.
                </p>
                <p>
                  News and editorial content is produced in good faith to the best
                  of our knowledge and professional judgement. BNS is not liable
                  for any errors or omissions in content.
                </p>
              </Section>

              <Section title="8. Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law, BNS and its
                  directors, employees, and agents shall not be liable for any
                  indirect, incidental, special, consequential, or punitive damages
                  arising from your use of, or inability to use, this website or
                  its content.
                </p>
                <p className="text-[#8b1a1a] text-sm">
                  [Limitation of liability clauses should be reviewed and confirmed
                  by legal counsel familiar with Indian IT and consumer protection laws.]
                </p>
              </Section>

              <Section title="9. Third-Party Links">
                <p>
                  This website may contain links to third-party websites. These
                  links are provided for your convenience only. BNS does not endorse
                  and is not responsible for the content, privacy practices, or
                  accuracy of any third-party website.
                </p>
              </Section>

              <Section title="10. Privacy">
                <p>
                  Your use of this website is also subject to our{' '}
                  <Link
                    to="/privacy-policy"
                    className="text-[#1a2744] underline hover:text-[#c9a84c]"
                  >
                    Privacy Policy
                  </Link>
                  , which is incorporated into these Terms by reference.
                </p>
              </Section>

              <Section title="11. Governing Law & Jurisdiction">
                <p>
                  These Terms & Conditions are governed by and construed in
                  accordance with the laws of India. Any disputes arising from
                  these terms or your use of this website shall be subject to the
                  exclusive jurisdiction of the courts in West Bengal, India.
                </p>
              </Section>

              <Section title="12. Changes to Terms">
                <p>
                  BNS reserves the right to update these Terms & Conditions at any
                  time. Changes will be posted on this page with an updated date.
                  Continued use of the website after any changes constitutes
                  acceptance of the new terms.
                </p>
              </Section>

              <Section title="13. Contact">
                <div className="bg-[#faf8f3] border border-[#e5e0d5] rounded-lg p-4 text-sm">
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
              <Link to="/privacy-policy" className="btn-secondary text-sm py-2 px-5">
                Privacy Policy
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

