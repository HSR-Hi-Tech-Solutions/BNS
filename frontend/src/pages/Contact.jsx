import { useEffect, useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Loader,
  ChevronDown,
} from 'lucide-react';
import { COMPANY, SERVICES } from '../constants';
import { validateContactForm, sanitizeInput } from '../utils/validation';
import { contactService } from '../services/api';
import { setPageMeta } from '../utils/seo';

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
    q: 'What types of clients does BNS work with?',
    a: 'BNS works with businesses of all sizes, institutions, public sector organizations, political entities, NGOs, and individuals seeking professional media, PR, or communications support.',
  },
  {
    q: 'Do you offer services outside West Bengal?',
    a: 'While our editorial focus and primary market is West Bengal and eastern India, our PR, communications, and digital marketing services are available to clients across India.',
  },
  {
    q: 'How long does it typically take to begin a project?',
    a: 'Following receipt of your enquiry and an initial consultation, project timelines are agreed upon based on scope, requirements, and availability.',
  },
  {
    q: 'Is the news content independent of commercial clients?',
    a: 'Yes. BNS maintains a strict separation between editorial news content and commercial client work. Our journalism operates with editorial independence.',
  },
  {
    q: 'How do I request a quote or proposal?',
    a: 'Please use the contact form above and describe your requirements. One of our team members will follow up to understand your needs and provide a relevant proposal.',
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
    if (status === 'loading') return;
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
        subject: sanitizeInput(form.service) || 'General Enquiry',
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
    <div className="w-full">
      {/* ── PAGE HERO ─────────────────────────────────── */}
      <section className="bg-[#0B1120] text-[#FAF9F6] pt-32 sm:pt-36 pb-16 sm:pb-20 border-b border-slate-800 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF55] mb-3 block">
            Get in Touch
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] mb-4">
            Contact BNS
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            For business enquiries, media partnerships, PR projects, or general
            information — we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT FORM & INFORMATION ────────────────── */}
      <section
        className="bg-white py-16 sm:py-20 border-b border-slate-200"
        aria-label="Contact Section"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            {/* Left Column: Contact Information */}
            <div className="lg:col-span-5">
              <div className="bg-[#0B1120] border border-slate-800 rounded-2xl p-8 text-white shadow-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D4AF55] block mb-2">
                  Communication
                </span>
                <h2 className="font-display font-bold text-2xl text-[#FAF9F6] mb-2">
                  Contact Information
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-8">
                  Reach out through our enquiry form or contact our office directly.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Email Address
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="text-white text-sm font-medium hover:text-[#D4AF55] transition-colors"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Registered Office
                      </p>
                      <p className="text-white text-sm">West Bengal, India</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4AF55]/15 text-[#D4AF55] flex items-center justify-center shrink-0">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
                        Response Turnaround
                      </p>
                      <p className="text-white text-sm">Within 2 business days</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 text-xs text-slate-400 space-y-1">
                  <p className="font-semibold text-slate-200">
                    Bengal News Service PR &amp; Consultancy Pvt. Ltd.
                  </p>
                  <p>CIN: {COMPANY.cin}</p>
                  <p>Incorporated in West Bengal, India</p>
                </div>
              </div>
            </div>

            {/* Right Column: Enquiry Form */}
            <div className="lg:col-span-7">
              {status === 'success' ? (
                <div className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-10 sm:p-14 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="font-display font-bold text-2xl text-[#0B1120] mb-3">
                    Message Sent Successfully
                  </h2>
                  <p className="text-[#586477] max-w-md mx-auto mb-8 text-sm leading-relaxed">
                    Thank you for your enquiry. Our team will review your message and
                    respond within 2 business days.
                  </p>
                  <button
                    onClick={resetForm}
                    className="bg-[#0B1120] hover:bg-[#16233D] text-white font-semibold text-sm px-6 py-3 rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Contact form"
                  className="bg-[#FAF9F6] border border-slate-200 rounded-2xl p-8 sm:p-10 shadow-sm"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
                    Message Form
                  </span>
                  <h2 className="font-display font-bold text-2xl text-[#0B1120] mb-2">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#586477] mb-7">
                    All fields marked <span className="text-[#8E252B] font-bold">*</span>{' '}
                    are required.
                  </p>

                  {serverError && (
                    <div
                      role="alert"
                      className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-md p-4 mb-6"
                    >
                      <AlertCircle size={18} className="text-red-600 shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{serverError}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                      >
                        Full Name <span className="text-[#8E252B]">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120] ${
                          errors.name
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300'
                        }`}
                        placeholder="Your full name"
                        autoComplete="name"
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && (
                        <p
                          id="name-error"
                          className="text-red-600 text-xs mt-1"
                          role="alert"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                      >
                        Email Address <span className="text-[#8E252B]">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120] ${
                          errors.email
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300'
                        }`}
                        placeholder="you@example.com"
                        autoComplete="email"
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p
                          id="email-error"
                          className="text-red-600 text-xs mt-1"
                          role="alert"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                      >
                        Phone Number{' '}
                        <span className="text-slate-400 font-normal text-xs">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120] ${
                          errors.phone
                            ? 'border-red-500 ring-1 ring-red-500'
                            : 'border-slate-300'
                        }`}
                        placeholder="+91 XXXXX XXXXX"
                        autoComplete="tel"
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        aria-invalid={!!errors.phone}
                      />
                      {errors.phone && (
                        <p
                          id="phone-error"
                          className="text-red-600 text-xs mt-1"
                          role="alert"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Organization */}
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                      >
                        Organisation{' '}
                        <span className="text-slate-400 font-normal text-xs">
                          (optional)
                        </span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        name="organization"
                        value={form.organization}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120]"
                        placeholder="Your company or organization"
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="mb-5">
                    <label
                      htmlFor="service"
                      className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                    >
                      Service of Interest{' '}
                      <span className="text-slate-400 font-normal text-xs">
                        (optional)
                      </span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120]"
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
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold text-[#0B1120] mb-1.5"
                    >
                      Message <span className="text-[#8E252B]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-3.5 py-2.5 rounded-md border text-sm text-[#263247] bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1120] ${
                        errors.message
                          ? 'border-red-500 ring-1 ring-red-500'
                          : 'border-slate-300'
                      }`}
                      placeholder="Please describe your requirements or enquiry..."
                      aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                      aria-invalid={!!errors.message}
                    />
                    <div id="message-hint" className="flex justify-between mt-1 text-xs">
                      {errors.message ? (
                        <p id="message-error" className="text-red-600" role="alert">
                          {errors.message}
                        </p>
                      ) : (
                        <span />
                      )}
                      <span className="text-slate-400">{form.message.length}/2000</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#D4AF55] hover:bg-[#e0be67] text-[#0B1120] font-bold text-xs uppercase tracking-wider px-7 py-3 rounded-md shadow-sm transition-all duration-200 inline-flex items-center justify-center gap-2"
                    disabled={status === 'loading'}
                    aria-busy={status === 'loading'}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader size={15} className="animate-spin" />
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Enquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-xs mt-4 leading-relaxed">
                    By submitting this form you agree to our{' '}
                    <a
                      href="/privacy-policy"
                      className="text-[#0B1120] underline hover:text-[#D4AF55]"
                    >
                      Privacy Policy
                    </a>
                    . We will only use your information to respond to your enquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED QUESTIONS ────────────────── */}
      <section
        className="bg-[#FAF9F6] py-16 sm:py-20"
        aria-label="Frequently Asked Questions"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#8E252B] mb-2 block">
              Common Inquiries
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#0B1120]">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-[#586477] mt-2">
              Quick answers about our scope of work and engagement framework.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details
                key={q}
                className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm group"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-sm sm:text-base text-[#0B1120] hover:text-[#D4AF55] transition-colors select-none">
                  <span>{q}</span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 group-open:bg-[#0B1120] group-open:text-white transition-colors shrink-0">
                    <ChevronDown
                      size={14}
                      className="transition-transform duration-200 group-open:rotate-180"
                    />
                  </div>
                </summary>
                <div className="text-xs sm:text-sm text-[#586477] leading-relaxed pt-3 border-t border-slate-100 mt-3">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
