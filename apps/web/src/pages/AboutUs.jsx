import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Globe2,
  Users,
  Target,
  Lightbulb,
  Heart,
  Zap,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const values = [
  {
    title: 'Innovation First',
    description: 'We push boundaries with cutting-edge technology and creative thinking to deliver solutions that set you apart.',
    icon: Lightbulb,
  },
  {
    title: 'Client Partnership',
    description: 'We treat every project as a partnership. Your growth is our growth — and we invest in it accordingly.',
    icon: Heart,
  },
  {
    title: 'Global Perspective',
    description: 'With offices in the USA and Pakistan, we bring diverse expertise and round-the-clock productivity to every engagement.',
    icon: Globe2,
  },
  {
    title: 'Results Driven',
    description: 'Every decision we make is backed by data and measured by impact. We build for outcomes, not just output.',
    icon: Target,
  },
  {
    title: 'Team Excellence',
    description: 'Our team of designers, developers, strategists, and marketers work together to deliver seamless, premium experiences.',
    icon: Users,
  },
  {
    title: 'Speed & Quality',
    description: 'We move fast without cutting corners. Premium execution, delivered on timelines that keep your business ahead.',
    icon: Zap,
  },
];

const stats = [
  { number: '25+', label: 'Projects Delivered' },
  { number: '20+', label: 'Happy Clients' },
  { number: '2', label: 'Global Offices' },
  { number: '15+', label: 'Team Members' },
];

const officeImages = [
  {
    src: '/images/about-us-5.jpg',
    alt: 'WebCore360 Meeting Room',
    caption: 'Strategy & Planning Room',
  },
  {
    src: '/images/about-us-6.jpg',
    alt: 'WebCore360 Conference Room',
    caption: 'Client Collaboration Space',
  },
  {
    src: '/images/about-us-7.jpg',
    alt: 'WebCore360 Open Workspace',
    caption: 'Our Creative Hub',
  },
  {
    src: '/images/usa-office.jpg',
    alt: 'WebCore360 USA Office',
    caption: 'Our USA Office',
  },
  {
    src: '/images/about-us-2.jpg',
    alt: 'WebCore360 Workspace',
    caption: 'Dedicated Professionals',
  },
  {
    src: '/images/about-us-4.jpg',
    alt: 'WebCore360 Creative Space',
    caption: 'Focused Execution',
  },
];

function AboutUs() {
  return (
    <>
      <Helmet>
        <title>About Us — Webcore360</title>
        <meta
          name="description"
          content="Learn about Webcore360 — a full-service digital agency with offices in the USA and Pakistan, delivering premium web design, marketing, and technology solutions."
        />
      </Helmet>

      <div className="relative overflow-x-hidden text-foreground">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
          <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/18 blur-[150px]" />
          <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/15 blur-[140px]" />
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md">
                  <Sparkles className="h-4 w-4 text-foreground" />
                  Our Story
                </div>
                <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground sm:text-6xl lg:text-7xl">
                  Building digital
                  <br />
                  excellence, globally.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  Webcore360 is a full-service digital agency that blends strategy, design, and technology to build premium experiences for ambitious brands. From New Jersey to Lahore, we deliver results that matter.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Main Team Image */}
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[2rem] border border-border shadow-lg"
              >
                <img
                  src="/images/usa-office-exterior.jpg"
                  alt="The WebCore360 Team at Work"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* Who We Are */}
          <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-[1400px]">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Who We Are</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                    A team that thinks big and delivers bigger.
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Founded with a vision to bridge the gap between premium digital experiences and accessible pricing, Webcore360 has grown into a powerhouse agency serving clients across the globe.
                  </p>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">
                    Our team of 30+ professionals spans web development, graphic design, video production, SEO, social media management, content writing, and AI automation. We don't just build websites — we build digital ecosystems that drive measurable growth.
                  </p>
                  <div className="mt-8 space-y-4">
                    {[
                      'Full-service digital agency with end-to-end capabilities',
                      'Dual offices for round-the-clock productivity',
                      'Proven track record with 25+ successful projects',
                      'Dedicated teams for every client engagement',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="space-y-4">
                    <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                      <img
                        src="/images/about-us-5.jpg"
                        alt="Meeting Room"
                        className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                      <img
                        src="/images/about-us-7.jpg"
                        alt="Workspace"
                        className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                      <img
                        src="/images/about-us-6.jpg"
                        alt="Conference Room"
                        className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="overflow-hidden rounded-[1.25rem] border border-border shadow-md">
                      <img
                        src="/images/about-us-4.jpg"
                        alt="Creative Space"
                        className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[2rem] border border-border bg-card p-8 shadow-md lg:p-12"
              >
                <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                      className="text-center"
                    >
                      <p className="text-4xl font-bold text-foreground lg:text-5xl">{stat.number}</p>
                      <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Our Values */}
          <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
              >
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Values</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Principles that guide everything we build.
                </h2>
              </motion.div>

              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.article
                      key={value.title}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-70px' }}
                      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -6 }}
                      className="rounded-[1.75rem] border border-border bg-card p-7 shadow-md transition-all duration-300 hover:border-foreground/10"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Office Gallery */}
          <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl mb-12"
              >
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Workspace</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Where ideas come to life.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  Our offices are designed to inspire creativity, collaboration, and focus. Take a look inside the spaces where we build premium digital experiences.
                </p>
              </motion.div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {officeImages.map((image, index) => (
                  <motion.div
                    key={image.alt}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-70px' }}
                    transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className="group overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-md"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-sm font-medium text-foreground">{image.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Locations */}
          <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8 lg:pb-32">
            <div className="mx-auto max-w-[1400px]">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl mb-12"
              >
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground">Our Locations</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  Two offices. One mission.
                </h2>
              </motion.div>

              <div className="grid gap-6 lg:grid-cols-2">
                <motion.a
                  href="https://maps.google.com/?q=1+Britton+Pl+Ste+6,+Voorhees+Township,+NJ+08043,+United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="block rounded-[1.75rem] border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-foreground/10 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">USA Office</p>
                      <h3 className="text-xl font-semibold text-foreground">Voorhees, New Jersey</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm font-medium text-foreground">Echelon Professional Center</p>
                    <p className="text-sm">1 Britton Pl Ste 6</p>
                    <p className="text-sm">Voorhees Township, NJ 08043</p>
                    <p className="text-sm">United States</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
                    View on Google Maps <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.a>

                <motion.a
                  href="https://maps.google.com/?q=Plaza+%23+178+CCA,+Commercial+Sector+Sector+CCA+Dha+Phase+4,+Lahore,+54000"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-70px' }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="block rounded-[1.75rem] border border-border bg-card p-8 shadow-md transition-all duration-300 hover:border-foreground/10 cursor-pointer"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground shadow-md">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground">Pakistan Office</p>
                      <h3 className="text-xl font-semibold text-foreground">Lahore, Punjab</h3>
                    </div>
                  </div>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="text-sm font-medium text-foreground">DHA Phase 4</p>
                    <p className="text-sm">Plaza # 178 CCA, Commercial Sector</p>
                    <p className="text-sm">Sector CCA, DHA Phase 4</p>
                    <p className="text-sm">Lahore, 54000</p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-foreground">
                    View on Google Maps <ArrowRight className="h-4 w-4" />
                  </div>
                </motion.a>
              </div>
            </div>
          </section>


        </main>
      </div>
    </>
  );
}

export default AboutUs;
