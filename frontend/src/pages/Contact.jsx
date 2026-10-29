import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { validateContactForm, sanitizeInput } from '../utils/validation';
import { contactService } from '../services/api';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  organization: '',
  service: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    setPageMeta({
      title: 'Contact Us — BNS Bengal News Service',
      description:
        'Contact Bengal News Service PR & Consultancy Pvt. Ltd. for business enquiries about digital news, PR, corporate communications, digital marketing, and consultancy services.',
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    // Client-side validation
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus first error
      const firstErrField = Object.keys(validationErrors)[0];
      document.getElementById(firstErrField)?.focus();
      return;
    }

    setStatus('loading');

    try {
      const payload = {
        name: sanitizeInput(form.name),
        email: sanitizeInput(form.email),
        phone: sanitizeInput(form.phone),
        organization: sanitizeInput(form.organization),
        service: sanitizeInput(form.service),
        message: sanitizeInput(form.message),
      };
      await contactService.submit(payload);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      setStatus('error');
      setServerError(
        err.message ||
          'We could not send your message at this time. Please try again or email us directly.'
      );
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setServerError('');
    setErrors({});
  };

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
              Get In Touch
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Contact BNS
            </h1>
            <div className="gold-divider center mb-5" />
            <p className="text-gray-300 text-lg leading-relaxed">
              For business enquiries, media partnerships, PR projects, or general
              information — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-py bg-white" aria-label="Contact form and information">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info Panel */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-2"
            >
              <div className="bg-[#1a2744] rounded-xl p-8 h-full">
                <h2
                  className="text-2xl font-bold text-white mb-2"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Contact Information
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Reach out through the form or contact us directly.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white text-sm hover:text-[#c9a84c] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-gray-500 text-xs mt-0.5">
                        * Placeholder — to be confirmed by company
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
                        Registered Office
                      </p>
                      <p className="text-white text-sm">West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#c9a84c]/15 flex items-center justify-center flex-shrink-0">
                      <Clock size={18} className="text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-1">
                        Response Time
                      </p>
                      <p className="text-white text-sm">
                        We aim to respond within 2 business days.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-gray-400 text-xs font-medium uppercase tracking-wide mb-3">
                    Company Details
                  </p>
                  <div className="space-y-2 text-xs text-gray-400">
                    <p>Bengal News Service PR & Consultancy Pvt. Ltd.</p>
                    <p>CIN: U73100WB2024PTC275987</p>
                    <p>Incorporated in West Bengal, India</p>
                  </div>
                </div>

                <div className="mt-6 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-lg p-4">
                  <p className="text-[#c9a84c] text-xs font-semibold mb-1">
                    Business Enquiries
                  </p>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    For PR projects, media partnerships, digital marketing briefs,
                    or consultancy retainers — please use the enquiry form and
                    provide as much detail as possible.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0.15} variants={fadeUp}
              className="lg:col-span-3"
            >
              {status === 'success' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mb-6">
                    <CheckCircle size={40} className="text-green-500" />
                  </div>
                  <h2
                    className="text-2xl font-bold text-[#1a2744] mb-3"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Message Sent Successfully
                  </h2>
                  <p className="text-gray-600 max-w-sm mb-8">
                    Thank you for your enquiry. Our team will review your message
                    and respond within 2 business days.
                  </p>
                  <button onClick={resetForm} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                  <h2
                    className="text-2xl font-bold text-[#1a2744] mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    Send Us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mb-7">
                    All fields marked <span className="text-[#8b1a1a]">*</span> are required.
                  </p>

                  {serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-lg p-4 mb-6"
                    >
                      <AlertCircle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{serverError}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="text-[#8b1a1a]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`form-input ${errors.name ? 'error' : ''}`}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p id="name-error" className="form-error" role="alert">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="form-label">
                        Email Address <span className="text-[#8b1a1a]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p id="email-error" className="form-error" role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="form-label">
                        Phone Number
                        <span className="text-gray-400 font-normal ml-1 text-xs">(optional)</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`form-input ${errors.phone ? 'error' : ''}`}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p id="phone-error" className="form-error" role="alert">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label htmlFor="organization" className="form-label">
                        Organisation
                        <span className="text-gray-400 font-normal ml-1 text-xs">(optional)</span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Your company or organisation"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div className="mb-5">
                    <label htmlFor="service" className="form-label">
                      Service of Interest
                      <span className="text-gray-400 font-normal ml-1 text-xs">(optional)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-input bg-white"
                    >
                      <option value="">— Select a service —</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Enquiry">General Enquiry</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Message <span className="text-[#8b1a1a]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`form-input resize-y min-h-[120px] ${errors.message ? 'error' : ''}`}
                      placeholder="Please describe your requirements or enquiry..."
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                    />
                    <div id="message-hint" className="flex justify-between mt-1">
                      {errors.message ? (
                        <p id="message-error" className="form-error" role="alert">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-gray-400 text-xs">
                        {form.message.length}/2000
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full sm:w-auto justify-center"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                    By submitting this form you agree to our{' '}
                    <a href="/privacy-policy" className="text-[#1a2744] underline hover:text-[#c9a84c]">
                      Privacy Policy
                    </a>
                    . We will only use your information to respond to your enquiry.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-py bg-[#faf8f3]" aria-label="Frequently asked questions">
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-10"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              Common Questions
            </p>
            <h2
              className="text-3xl font-bold text-[#1a2744]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Frequently Asked Questions
            </h2>
            <div className="gold-divider center mt-4" />
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'What types of clients does BNS work with?',
                a: 'BNS works with businesses of all sizes, institutions, public sector organisations, political entities, NGOs, and individuals seeking professional media, PR, or communications support.',
              },
              {
                q: 'Do you offer services outside West Bengal?',
                a: 'While our editorial focus and primary market is West Bengal and eastern India, our PR, communications, and digital marketing services are available to clients across India.',
              },
              {
                q: 'How long does it typically take to begin a project?',
                a: 'Following receipt of your enquiry and an initial consultation, project timelines are agreed upon based on scope, requirements, and availability. We will confirm timelines clearly before commencing work.',
              },
              {
                q: 'Is the news content independent of commercial clients?',
                a: 'Yes. BNS maintains a strict separation between editorial news content and commercial client work. Our journalism operates with editorial independence, and any commercial or sponsored content is clearly identified as such.',
              },
              {
                q: 'How do I request a quote or proposal?',
                a: 'Please use the contact form above and describe your requirements. One of our team members will follow up to understand your needs and provide a relevant proposal.',
              },
            ].map(({ q, a }, idx) => (
              <motion.details
                key={q}
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={idx * 0.07} variants={fadeUp}
                className="bg-white rounded-lg border border-gray-100 shadow-sm group"
              >
                <summary className="flex items-center justify-between gap-3 px-6 py-4 cursor-pointer list-none font-semibold text-[#1a2744] text-sm hover:text-[#c9a84c] transition-colors">
                  {q}
                  <span className="flex-shrink-0 text-[#c9a84c] font-bold text-lg leading-none">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

