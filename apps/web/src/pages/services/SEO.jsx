import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 BarChart3,
 BrainCircuit,
 CheckCircle2,
 ChevronRight,
 FileText,
 Globe2,
 Link2,
 MapPin,
 Search,
 ShieldCheck,
 Sparkles,
 TrendingUp,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'SEO Audit',
 description: 'Deep diagnostic analysis for technical gaps, content opportunities, and competitive ranking blockers.',
 icon: Search,
 },
 {
 title: 'On-page SEO',
 description: 'Optimized content structure, metadata, internal linking, and conversion-ready page architecture.',
 icon: FileText,
 },
 {
 title: 'Technical SEO',
 description: 'Core crawlability, indexation, speed, schema, and technical quality improvements that support long-term growth.',
 icon: ShieldCheck,
 },
 {
 title: 'Off-page SEO',
 description: 'Authority-building campaigns with high-quality partnerships, link strategy, and trust signals.',
 icon: Link2,
 },
 {
 title: 'Local SEO',
 description: 'Location-led visibility systems for service-area businesses, multi-location brands, and local search intent.',
 icon: MapPin,
 },
 {
 title: 'Content Strategy',
 description: 'Topic planning, storytelling, and keyword-driven content that compounds search demand over time.',
 icon: BrainCircuit,
 },
];

const timelineSteps = [
 { period: 'Month 1', title: 'Audit & strategy', copy: 'We map the opportunity landscape and lock in the highest-impact SEO roadmap.' },
 { period: 'Month 2', title: 'On-page and technical execution', copy: 'We improve the experience, structure, and discoverability of your core pages.' },
 { period: 'Month 3', title: 'Authority and content growth', copy: 'We publish, expand, and amplify with a steady rhythm of search-focused momentum.' },
 { period: 'Month 4+', title: 'Reporting and iteration', copy: 'We track visibility, traffic, and conversions while refining for compounding growth.' },
];

const reports = [
 { label: 'Keyword visibility', value: '+128%' },
 { label: 'Organic sessions', value: '+94%' },
 { label: 'Top 3 keywords', value: '+37' },
 { label: 'Local calls', value: '+52%' },
];

function SEO() {
 const [scrollProgress, setScrollProgress] = useState(0);

 useEffect(() => {
 const handleScroll = () => {
 const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
 const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
 setScrollProgress(Math.min(100, Math.max(0, progress)));
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 handleScroll();

 return () => {
 window.removeEventListener('scroll', handleScroll);
 };
 }, []);

 return (
 <>
 <Helmet>
 <title>SEO Growth — Webcore360</title>
 <meta
 name="description"
 content="Premium SEO services focused on keyword growth, technical optimization, content strategy, and measurable search visibility."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/18 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/15 blur-[140px]" />
 </div>
 <main className="relative z-10">
 <section className="dark text-foreground px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Sparkles className="h-4 w-4 text-foreground dark:text-foreground" />
 Google ranking growth, engineered for demand
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Turn search visibility into a predictable growth engine.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We build premium SEO systems that improve rankings, increase qualified traffic, and help your brand show up when buyers are searching.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book an SEO strategy session</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#results">See growth roadmap</a>
 </Button>
 </div>
 <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
 <div className="rounded-full border border-border bg-muted px-3 py-2">Keyword strategy</div>
 <div className="rounded-full border border-border bg-muted px-3 py-2">Technical optimization</div>
 <div className="rounded-full border border-border bg-muted px-3 py-2">Monthly reporting</div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 24 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <div className="absolute -left-4 top-8 h-20 w-20 rounded-[22px] border border-border bg-muted shadow-md " />
 <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-[22px] border border-foreground/10 bg-foreground/10 shadow-md " />
 <div className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md ">
 <div className="rounded-[1.25rem] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 sm:p-5">
 <div className="flex items-center justify-between text-sm text-muted-foreground">
 <span>Search console overview</span>
 <span className="rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-1 text-emerald-300">+18.2%</span>
 </div>
 <div className="mt-5 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
 <div className="rounded-[1rem] border border-border bg-muted p-4">
 <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
 <span>Ranking trend</span>
 <span className="text-foreground dark:text-foreground">Live</span>
 </div>
 <div className="mt-4 flex items-end gap-2">
 {[38, 56, 47, 72, 81, 92].map((height, index) => (
 <motion.div
 key={index}
 initial={{ height: 0 }}
 animate={{ height: `${height}px` }}
 transition={{ duration: 0.6, delay: index * 0.06 }}
 className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-violet-500"
 />
 ))}
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Impressions</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">86.4k</p>
 </div>
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Clicks</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">12.8k</p>
 </div>
 <div className="rounded-[1rem] border border-foreground/10 bg-foreground/10 p-3 text-sm text-foreground">
 <div className="flex items-center gap-2">
 <Search className="h-4 w-4" />
 <span>Core keywords in top 10: 24</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
 {reports.map((item, index) => (
 <motion.div
 key={item.label}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-muted p-6 shadow-md "
 >
 <p className="text-sm text-muted-foreground">{item.label}</p>
 <p className="mt-4 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.value}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">What we do</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 A complete search growth system built for visibility, trust, and conversion.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
 {services.map((service, index) => {
 const Icon = service.icon;
 return (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-muted p-7 shadow-md "
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/20 text-foreground dark:text-foreground">
 <Icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 </motion.article>
 );
 })}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.95fr_1.05fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900/80 via-zinc-950/70 to-black p-7 shadow-md"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Monthly reports</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Search Console-style reporting that brings clarity to every win.
 </h2>
 <div className="mt-8 space-y-3">
 {[
 ['Top queries', '43', 'queries on page 1'],
 ['Indexed pages', '186', 'pages gaining visibility'],
 ['Core content', '12', 'new assets launched'],
 ].map(([label, value, note]) => (
 <div key={label} className="rounded-[1.1rem] border border-border bg-muted p-4">
 <div className="flex items-center justify-between">
 <p className="text-sm text-muted-foreground">{label}</p>
 <p className="text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{value}</p>
 </div>
 <p className="mt-2 text-sm text-muted-foreground">{note}</p>
 </div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-muted p-7 shadow-md "
 >
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Results timeline</p>
 <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Growth that compounds month after month.
 </h2>
 </div>
 <div className="rounded-full border border-foreground/10 bg-foreground/10 p-3 text-foreground dark:text-foreground">
 <TrendingUp className="h-5 w-5" />
 </div>
 </div>
 <div className="mt-8 space-y-4">
 {timelineSteps.map((step, index) => (
 <div key={step.period} className="flex gap-4 rounded-[1.25rem] border border-border bg-card p-4">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-foreground/10 bg-foreground/10 text-sm font-semibold text-foreground dark:text-foreground">
 0{index + 1}
 </div>
 <div>
 <p className="text-sm font-medium text-foreground dark:text-foreground">{step.period}</p>
 <h3 className="mt-1 font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{step.title}</h3>
 <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.copy}</p>
 </div>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 <section id="results" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px] rounded-[2.5rem] border border-border bg-muted p-8 shadow-md lg:p-10">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Performance snapshot</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium analytics, polished dashboards, and a growth story your team can trust.
 </h2>
 </motion.div>
 <div className="mt-10 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-card p-6 shadow-md"
 >
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-muted-foreground">Traffic growth</p>
 <p className="mt-2 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">+241%</p>
 </div>
 <div className="rounded-full border border-foreground/10 bg-foreground/10 p-2 text-foreground dark:text-foreground">
 <BarChart3 className="h-5 w-5" />
 </div>
 </div>
 <div className="mt-8 flex h-40 items-end gap-2">
 {[18, 29, 32, 44, 58, 74, 92].map((height, index) => (
 <motion.div
 key={index}
 initial={{ height: 0 }}
 whileInView={{ height: `${height}%` }}
 viewport={{ once: true, margin: '-60px' }}
 transition={{ duration: 0.5, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
 className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-violet-500"
 />
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-card p-6 shadow-md"
 >
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm text-muted-foreground">Keyword momentum</p>
 <p className="mt-2 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">24 top-10</p>
 </div>
 <div className="rounded-full border border-violet-400/20 bg-violet-500/10 p-2 text-violet-800 dark:text-violet-200">
 <Zap className="h-5 w-5" />
 </div>
 </div>
 <svg viewBox="0 0 320 140" className="mt-8 h-40 w-full">
 <defs>
 <linearGradient id="lineGradient" x1="0%" x2="100%" y1="0%" y2="0%">
 <stop offset="0%" stopColor="#22d3ee" />
 <stop offset="100%" stopColor="#8b5cf6" />
 </linearGradient>
 </defs>
 <path d="M10 110 C50 90, 80 85, 110 70 S170 45, 200 55 S260 80, 310 20" fill="none" stroke="url(#lineGradient)" strokeWidth="3" strokeLinecap="round" />
 <path d="M10 110 C50 90, 80 85, 110 70 S170 45, 200 55 S260 80, 310 20 L310 140 L10 140 Z" fill="rgba(34,211,238,0.12)" />
 </svg>
 </motion.div>
 </div>
 </div>
 </section>

  <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
    <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-sm p-10 sm:p-16 shadow-2xl relative overflow-hidden text-center group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to rank higher and drive organic traffic?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Our SEO experts use data-driven strategies to boost your visibility, from technical audits and on-page optimization to link building and content strategy.</p>
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 text-white border-0 hover:opacity-90 px-10 py-7 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <a href="/contact-us">Get Started Today</a>
          </Button>
        </motion.div>
      </div>
    </div>
  </section>

 
 </main>

 </div>
 </>
 );
}

export default SEO;
