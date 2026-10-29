import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, Target, Globe, CheckCircle, Users, Newspaper, Building } from 'lucide-react';
import { setPageMeta } from '../utils/seo';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

export default function About() {
  useEffect(() => {
    setPageMeta({
      title: 'About Us — BNS Bengal News Service',
      description:
        'Learn about Bengal News Service PR & Consultancy Pvt. Ltd. — our vision, mission, business positioning, and commitment to digital-first journalism and communications.',
    });
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="page-hero pt-32">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-4">
              About BNS
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Our Story & Purpose
            </h1>
            <div className="gold-divider center mb-5" />
            <p className="text-gray-300 text-lg leading-relaxed">
              A digital-first media and communications company rooted in Bengal,
              committed to credible journalism and strategic communications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-py bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Company Overview
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Bengal News Service PR & Consultancy Pvt. Ltd.
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Bengal News Service PR & Consultancy Private Limited (BNS) is a
                registered company incorporated in West Bengal, India. We are a
                digital-first media and communications company that combines the
                credibility of established journalism with the agility of modern
                digital communications.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                BNS operates at the intersection of media, public relations, digital
                marketing, and communications consultancy — offering an integrated
                suite of services to news audiences, businesses, institutions, and
                individuals seeking professional communications support.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our company is anchored in West Bengal, with a focus on regional
                news, politics, business, culture, and society — while maintaining a
                pan-India perspective on national affairs and international
                developments that affect Bharat.
              </p>
              <div className="bg-[#faf8f3] border border-[#e5e0d5] rounded-lg p-5">
                <h4 className="font-bold text-[#1a2744] text-sm mb-3">
                  Company Registration Details
                </h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span className="font-medium text-[#1a2744] w-36 flex-shrink-0">Company Name:</span>
                    <span>Bengal News Service PR & Consultancy Private Limited</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-[#1a2744] w-36 flex-shrink-0">Brand:</span>
                    <span>BNS — Bengal News Service</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-[#1a2744] w-36 flex-shrink-0">CIN:</span>
                    <span>U73100WB2024PTC275987</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-[#1a2744] w-36 flex-shrink-0">State:</span>
                    <span>West Bengal, India</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
            >
              <img
                src="/bns-logo-full.png"
                alt="Bengal News Service PR & Consultancy"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-py bg-[#1a2744]" aria-label="Vision and Mission">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              Our Purpose
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-white"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Vision & Mission
            </h2>
            <div className="gold-divider center mt-4" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-white/8 border border-white/15 rounded-xl p-8"
            >
              <Eye size={36} className="text-[#c9a84c] mb-5" />
              <h3
                className="text-2xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed mb-5">
                To be the most trusted and impactful digital news and communications
                platform representing Bengal's voice on the national and international
                stage.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a platform where credible journalism meets strategic
                communications — empowering businesses, individuals, and communities
                with information and communications tools that matter.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="bg-[#c9a84c] rounded-xl p-8"
            >
              <Target size={36} className="text-[#1a2744] mb-5" />
              <h3
                className="text-2xl font-bold text-[#1a2744] mb-4"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                Our Mission
              </h3>
              <p className="text-[#1a2744]/85 leading-relaxed mb-5">
                To deliver credible, responsible, and impactful digital journalism
                that informs, connects, and empowers citizens — while providing
                businesses and organisations with expert PR, communications, and
                marketing solutions.
              </p>
              <p className="text-[#1a2744]/85 leading-relaxed">
                We are committed to editorial integrity, professional excellence,
                and the highest standards of communication — serving Bengal,
                Bharat, and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Positioning */}
      <section className="section-py bg-white" aria-label="Business positioning">
        <div className="container mx-auto px-4 lg:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="section-header"
          >
            <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
              What Sets Us Apart
            </p>
            <h2
              className="text-3xl sm:text-4xl font-bold text-[#1a2744]"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Our Business Positioning
            </h2>
            <div className="gold-divider center mt-4" />
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                Icon: Globe,
                title: 'Digital-First Approach',
                desc: 'BNS is built for the digital age — leveraging the latest digital platforms, formats, and distribution channels to reach modern audiences wherever they are.',
              },
              {
                Icon: Newspaper,
                title: 'Journalism-Led Communications',
                desc: 'Our PR and communications services are informed by real journalism experience. We understand what makes a compelling story — and how to tell it effectively.',
              },
              {
                Icon: Building,
                title: 'Bengal Expertise',
                desc: 'Deep roots in Bengal\'s media landscape, political environment, cultural fabric, and business community give us an unmatched regional knowledge base.',
              },
              {
                Icon: Users,
                title: 'Integrated Services',
                desc: 'News, PR, digital marketing, and consultancy under one roof — providing clients with a seamless, coherent communications partnership.',
              },
              {
                Icon: Target,
                title: 'Strategic Thinking',
                desc: 'Every client engagement is approached with strategic clarity — understanding objectives, audiences, and the media environment to deliver results.',
              },
              {
                Icon: Eye,
                title: 'Editorial Integrity',
                desc: 'Our journalism operates independently of commercial interests. Our PR work is clearly distinguished from editorial content, maintaining trust and credibility.',
              },
            ].map(({ Icon, title, desc }, idx) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={idx * 0.08}
                variants={fadeUp}
                className="bns-card bg-white rounded-lg p-7 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-[#1a2744]/8 flex items-center justify-center mb-5">
                  <Icon size={22} className="text-[#1a2744]" />
                </div>
                <h3
                  className="font-bold text-[#1a2744] text-lg mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="section-py bg-[#faf8f3]" aria-label="Focus areas">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="text-[#c9a84c] font-semibold uppercase tracking-widest text-sm mb-3">
                Regional Focus
              </p>
              <h2
                className="text-3xl sm:text-4xl font-bold text-[#1a2744] mb-5"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                West Bengal, Regional News & Wider Indian Developments
              </h2>
              <div className="gold-divider mb-6" />
              <p className="text-gray-600 leading-relaxed mb-5">
                West Bengal is one of India's most politically significant,
                culturally rich, and economically dynamic states. BNS is committed
                to bringing in-depth, authentic coverage of Bengal's affairs to a
                digital audience — while contextualizing them within the broader
                national and international landscape.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Our editorial focus includes political developments, business and
                economy, cultural affairs, social issues, education, infrastructure,
                and the stories of ordinary Bengalis that often go untold in
                mainstream national media.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                At the same time, we maintain a strong pan-India perspective —
                covering national governance, Parliament, policy, business, and
                international affairs that shape Bharat's future.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Political Coverage',
                  'Business & Economy',
                  'Cultural Affairs',
                  'Social Issues',
                  'National Policy',
                  'Parliamentary Affairs',
                  'International Developments',
                  'Community Stories',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={14} className="text-[#c9a84c] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.15}
              variants={fadeUp}
              className="space-y-5"
            >
              <div className="bg-[#1a2744] rounded-xl p-7 text-white">
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Why Bengal Matters
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  With over 90 million people, a storied intellectual and cultural
                  heritage, and a pivotal role in Indian politics, West Bengal
                  deserves a dedicated, professional, and credible digital news
                  platform that gives its stories the prominence they deserve.
                </p>
              </div>
              <div className="bg-[#c9a84c] rounded-xl p-7">
                <h4
                  className="text-xl font-bold text-[#1a2744] mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Bengal for Bharat
                </h4>
                <p className="text-[#1a2744]/85 text-sm leading-relaxed">
                  Our tagline — Voice Of Bengal, Vision For Bharat — captures
                  our dual commitment: to be the authentic voice of Bengal's
                  stories while contributing to a broader, pan-Indian vision of
                  informed, connected citizens.
                </p>
              </div>
              <div className="bg-[#8b1a1a] rounded-xl p-7 text-white">
                <h4
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Multi-Format, Multi-Language
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  BNS plans to serve audiences in English and Bengali — reaching
                  both the urban professional and the regional news consumer with
                  content in formats and languages they prefer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744]" aria-label="Learn more CTA">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2
              className="text-3xl font-bold text-white mb-4"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Explore What BNS Offers
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Discover our full range of services or get in touch for a business enquiry.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/services" className="btn-gold">
                Our Services <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

