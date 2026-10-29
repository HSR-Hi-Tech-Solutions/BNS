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
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
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
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            className="max-w-3xl mx-auto text-center relative z-10"
          >
            <p className="eyebrow mb-5">Get In Touch</p>
            <h1 className="font-serif text-white mb-5">Contact BNS</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto">
              For business enquiries, media partnerships, PR projects, or general
              information — we would love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────── */}
      <section className="section-py bg-white" aria-label="Contact form and information">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">

            {/* Contact Info Panel */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div
                className="rounded-sm p-8"
                style={{ background: 'var(--bns-navy)', color: '#fff' }}
              >
                <p className="eyebrow mb-3" style={{ color: 'var(--bns-gold)' }}>Information</p>
                <h2 className="font-serif text-2xl font-bold text-white mb-2">
                  Contact Details
                </h2>
                <div className="rule-gold mb-6" />
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  Reach out through our enquiry form or contact our team directly.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <Mail size={18} style={{ color: 'var(--bns-gold)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white text-sm hover:text-[var(--bns-gold)] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                      <p className="text-white/40 text-xs mt-0.5">
                        * Placeholder — to be confirmed by company
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <MapPin size={18} style={{ color: 'var(--bns-gold)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Registered Office
                      </p>
                      <p className="text-white text-sm">West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)' }}
                    >
                      <Clock size={18} style={{ color: 'var(--bns-gold)' }} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Response Time
                      </p>
                      <p className="text-white text-sm">
                        We aim to respond within 2 business days.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="pt-6 text-xs text-white/45 space-y-1.5"
                  style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <p className="font-semibold text-white/70">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                  <p>CIN: {COMPANY.cin}</p>
                  <p>Incorporated in West Bengal, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              custom={0.12} variants={fadeUp}
              className="lg:col-span-7"
            >
              {status === 'success' ? (
                <div
                  className="p-12 text-center rounded-sm"
                  style={{ background: 'var(--bns-cream)', border: '1px solid var(--bns-gray-200)' }}
                >
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-green-600" />
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--bns-navy)] mb-3">
                    Message Sent Successfully
                  </h2>
                  <p className="text-gray-600 max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Thank you for your enquiry. Our team will review your message
                    and respond within 2 business days.
                  </p>
                  <button onClick={resetForm} className="btn-primary">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="p-8 rounded-sm"
                  style={{ background: '#fff', border: '1px solid var(--bns-gray-200)' }}
                >
                  <p className="eyebrow mb-2">Message</p>
                  <h2 className="font-serif text-2xl font-bold text-[var(--bns-navy)] mb-2">
                    Send Us an Enquiry
                  </h2>
                  <p className="text-[var(--bns-gray-500)] text-sm mb-7">
                    Fields marked <span className="text-[#8b1a1a] font-bold">*</span> are required.
                  </p>

                  {serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-sm p-4 mb-6"
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
                        <Send size={15} />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                    By submitting this form you agree to our{' '}
                    <a href="/privacy-policy" className="text-[var(--bns-navy)] underline hover:text-[var(--bns-gold)]">
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

      {/* ── FAQ ───────────────────────────────────────── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-cream)' }}
        aria-label="Frequently asked questions"
      >
        <div className="container mx-auto px-4 lg:px-6 max-w-3xl">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeUp}
            className="mb-10"
          >
            <p className="eyebrow mb-3">FAQ</p>
            <h2
              className="font-serif text-[var(--bns-navy)] leading-tight"
              style={{ fontSize: 'var(--text-h2)' }}
            >
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-3">
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
                custom={idx * 0.05} variants={fadeUp}
                className="bg-white rounded-sm border border-[var(--bns-gray-200)] group overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none font-semibold text-[var(--bns-navy)] text-sm hover:text-[var(--bns-gold)] transition-colors select-none">
                  <span>{q}</span>
                  <span className="text-[var(--bns-gold)] font-serif font-bold text-lg leading-none flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-sm text-[var(--bns-gray-600)] leading-relaxed border-t border-[var(--bns-gray-200)] pt-4">
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
