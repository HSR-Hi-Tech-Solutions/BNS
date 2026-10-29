import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  ChevronDown,
  ShieldCheck,
} from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { validateContactForm, sanitizeInput } from '../utils/validation';
import { contactService } from '../services/api';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
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

const FAQS = [
  {
    q: 'What types of organizations and clients does BNS work with?',
    a: 'BNS collaborates with corporate enterprises, startups, MSMEs, public sector institutions, trade associations, non-profits, and public figures seeking strategic PR, brand reputation architecture, or digital media visibility.',
  },
  {
    q: 'Does BNS handle engagements across India or strictly in West Bengal?',
    a: 'While our primary editorial base and regional roots are in West Bengal, our public relations, corporate communications, and digital marketing services operate pan-India with key media networks in Kolkata and New Delhi.',
  },
  {
    q: 'How does BNS ensure editorial independence from commercial clients?',
    a: 'BNS enforces a strict ethical firewall separating independent news coverage from sponsored or commercial advisory retainers. Editorial decisions are never dictated by client accounts, ensuring lasting credibility.',
  },
  {
    q: 'What is the standard onboarding timeline for new communications retainers?',
    a: 'Following an initial discovery briefing and requirements review, we develop strategic proposals within 3 to 5 business days. Retainers or campaign rollouts typically commence within 1 to 2 weeks upon mutual agreement.',
  },
  {
    q: 'How can our company request a customized PR or consultancy proposal?',
    a: 'Submit your requirements via the business enquiry form on this page. Our corporate development team will respond within 2 business days to schedule an introductory consultation.',
  },
];

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
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');

    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
    <div className="overflow-x-hidden">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="page-hero">
        <div className="container relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="eyebrow-badge justify-center mb-4">
              <span className="accent-line" />
              <span>Direct Engagement</span>
              <span className="accent-line" />
            </div>
            <h1 className="font-serif text-white mb-4">Connect with BNS</h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Discuss business retainers, media partnerships, press releases, or corporate
              communications advisory with our executive team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM & CHANNELS SECTION ───────────── */}
      <section className="section-py bg-white" aria-label="Contact channels and form">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">

            {/* Left Column: Direct Info Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div
                className="rounded-2xl p-8 border border-white/10 text-white"
                style={{
                  background: 'linear-gradient(150deg, #070c16 0%, #111d33 60%, #0c1424 100%)',
                  boxShadow: '0 20px 40px -10px rgba(0,0,0,0.3)',
                }}
              >
                <div className="eyebrow-badge mb-2">
                  <span>Corporate Office</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-2">
                  Official Channels
                </h2>
                <p className="text-white/65 text-sm leading-relaxed mb-8">
                  Connect through our formal channels or submit your RFP details below.
                </p>

                {/* Contact Items */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--bns-gold)' }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Corporate Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white text-sm font-medium hover:text-[var(--bns-gold)] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--bns-gold)' }}
                    >
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Registered Jurisdiction
                      </p>
                      <p className="text-white text-sm font-medium">West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(201,168,76,0.15)', color: 'var(--bns-gold)' }}
                    >
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-1">
                        Response Turnaround
                      </p>
                      <p className="text-white text-sm font-medium">
                        Within 2 business days for enterprise briefs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Statutory badge */}
                <div className="pt-6 border-t border-white/10 text-xs text-white/50 space-y-1">
                  <p className="font-semibold text-white/80">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                  <p>CIN: {COMPANY.cin}</p>
                  <p>Incorporated under the Companies Act, 2013</p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: High-Polish Form Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.12}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              {status === 'success' ? (
                <div className="bns-card p-10 sm:p-14 text-center border border-slate-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--bns-navy)] mb-3">
                    Enquiry Submitted Successfully
                  </h2>
                  <p className="text-slate-600 max-w-md mx-auto mb-8 text-sm sm:text-base leading-relaxed">
                    Thank you for reaching out to Bengal News Service. Our corporate advisory team
                    will review your message and contact you within 2 business days.
                  </p>
                  <button onClick={resetForm} className="btn-primary !rounded-full">
                    <span>Submit Another Enquiry</span>
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Corporate enquiry form"
                  className="bns-card p-8 sm:p-10 border border-slate-200"
                >
                  <div className="eyebrow-badge mb-2">
                    <span className="accent-line" />
                    <span>Project Brief</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-[var(--bns-navy)] mb-2">
                    Send a Business Brief
                  </h2>
                  <p className="text-slate-500 text-xs sm:text-sm mb-7">
                    Please provide your contact information and requirements. Fields with{' '}
                    <span className="text-[var(--bns-burgundy)] font-bold">*</span> are required.
                  </p>

                  {serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4 mb-6"
                    >
                      <AlertCircle size={18} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{serverError}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="name" className="form-label">
                        Full Name <span className="text-[var(--bns-burgundy)]">*</span>
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
                        Corporate Email <span className="text-[var(--bns-burgundy)]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`form-input ${errors.email ? 'error' : ''}`}
                        placeholder="name@company.com"
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
                        <span className="text-slate-400 font-normal ml-1 text-xs">(optional)</span>
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
                        Organization / Brand
                        <span className="text-slate-400 font-normal ml-1 text-xs">(optional)</span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="Company or institution name"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Practice Area Selection */}
                  <div className="mb-5">
                    <label htmlFor="service" className="form-label">
                      Practice Area of Interest
                      <span className="text-slate-400 font-normal ml-1 text-xs">(optional)</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="form-input bg-white cursor-pointer"
                    >
                      <option value="">— Select a Practice Area —</option>
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="General Corporate Enquiry">General Corporate Enquiry</option>
                      <option value="Media & Press Partnership">Media &amp; Press Partnership</option>
                      <option value="Executive Advisory Retainer">Executive Advisory Retainer</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className="form-label">
                      Project Details / Message <span className="text-[var(--bns-burgundy)]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`form-input resize-y min-h-[120px] ${
                        errors.message ? 'error' : ''
                      }`}
                      placeholder="Please summarize your communication goals, key timelines, or specific scope of work..."
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                    />
                    <div id="message-hint" className="flex justify-between mt-1 text-xs">
                      {errors.message ? (
                        <p id="message-error" className="form-error" role="alert">
                          {errors.message}
                        </p>
                      ) : (
                        <span className="text-slate-400">
                          Please provide as much operational context as possible.
                        </span>
                      )}
                      <span className="text-slate-400 font-mono">
                        {form.message.length}/2000
                      </span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-gold !rounded-full w-full sm:w-auto !py-3 !px-8 justify-center shadow-md"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={16} className="animate-spin" />
                        <span>Transmitting Brief…</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Corporate Enquiry</span>
                        <Send size={14} />
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                    By submitting, you consent to our{' '}
                    <a
                      href="/privacy-policy"
                      className="text-[var(--bns-navy)] underline hover:text-[var(--bns-gold)] font-medium"
                    >
                      Privacy Policy
                    </a>
                    . Your information is treated under strict non-disclosure.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS (Royal Decor Pattern) ── */}
      <section
        className="section-py"
        style={{ background: 'var(--bns-gray-50)' }}
        aria-label="Frequently Asked Questions"
      >
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-header text-center"
          >
            <div className="eyebrow-badge justify-center mb-3">
              <span className="accent-line" />
              <span>Common Inquiries</span>
              <span className="accent-line" />
            </div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Answers regarding our scope of work, engagement frameworks, and regional capabilities.
            </p>
          </motion.div>

          <div className="space-y-3.5">
            {FAQS.map(({ q, a }, idx) => (
              <motion.details
                key={q}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.05}
                variants={fadeUp}
                className="bns-card overflow-hidden group border border-slate-200"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none font-semibold text-[var(--bns-navy)] text-sm sm:text-base hover:text-[var(--bns-gold)] transition-colors select-none">
                  <span>{q}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 group-open:bg-[var(--bns-navy)] group-open:text-white transition-colors flex-shrink-0">
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-300 group-open:rotate-180"
                    />
                  </div>
                </summary>
                <div className="px-6 pb-5 text-xs sm:text-sm text-[var(--bns-gray-600)] leading-relaxed border-t border-slate-100 pt-4">
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
