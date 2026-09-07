import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 BarChart3,
 CheckCircle2,
 ChevronRight,
 CircleDollarSign,
 Compass,
 Eye,
 Layers3,
 Play,
 Search,
 Sparkles,
 Target,
 TrendingUp,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'Search Ads',
 description: 'High-intent campaigns designed to capture demand at the exact point people are searching.',
 icon: Search,
 },
 {
 title: 'Display Ads',
 description: 'Visually compelling remarketing and awareness campaigns that keep your brand top of mind.',
 icon: Compass,
 },
 {
 title: 'Shopping Ads',
 description: 'Revenue-driving product campaigns with strong feed structure, conversions, and merchandising.',
 icon: CircleDollarSign,
 },
 {
 title: 'Performance Max',
 description: 'Goal-based, cross-channel automation that brings together search, display, and video into one system.',
 icon: Layers3,
 },
 {
 title: 'Remarketing',
 description: 'Re-engage warm audiences with tailored offers and messaging designed to bring them back.',
 icon: Target,
 },
 {
 title: 'Analytics',
 description: 'Conversion tracking, reporting, and insight planning that keep budget decisions clear and measurable.',
 icon: BarChart3,
 },
];

const pricingPlans = [
 {
 name: 'Launch',
 price: '$4k',
 description: 'For brands that need a lean, focused Google Ads setup with strong conversion potential.',
 features: ['Campaign architecture', 'Keyword planning', 'Basic reporting'],
 },
 {
 name: 'Scale',
 price: '$8k',
 description: 'For teams that want ongoing optimization, stronger testing, and more reliable lead quality.',
 features: ['Everything in Launch', 'Weekly optimizations', 'Landing page alignment'],
 featured: true,
 },
 {
 name: 'Momentum',
 price: '$14k+',
 description: 'For ambitious businesses running a full paid search growth engine.',
 features: ['Senior strategist', 'Advanced testing', 'Growth roadmap'],
 },
];

function GoogleAds() {
 const [scrollProgress, setScrollProgress] = useState(0);
 const [typedKeyword, setTypedKeyword] = useState('');

 useEffect(() => {
 const keywords = ['plumber near me', 'best dentist', 'luxury furniture', 'online fitness coach'];
 let keywordIndex = 0;
 let charIndex = 0;
 let deleting = false;

 const interval = window.setInterval(() => {
 const current = keywords[keywordIndex];
 if (!deleting) {
 setTypedKeyword(current.slice(0, charIndex + 1));
 charIndex += 1;
 if (charIndex === current.length) {
 deleting = true;
 window.setTimeout(() => {}, 1200);
 }
 } else {
 setTypedKeyword(current.slice(0, charIndex - 1));
 charIndex -= 1;
 if (charIndex === 0) {
 deleting = false;
 keywordIndex = (keywordIndex + 1) % keywords.length;
 }
 }
 }, 90);

 return () => window.clearInterval(interval);
 }, []);

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
 <title>Google Ads — Webcore360</title>
 <meta
 name="description"
 content="Premium Google Ads services for search, display, shopping, Performance Max, remarketing, and analytics-driven growth."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/18 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-400/15 blur-[140px]" />
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
 Search growth that delivers qualified leads
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Get more qualified leads with Google Ads.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We design premium paid search campaigns that capture intent, increase efficiency, and bring better lead quality to your pipeline.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-400 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book a Google Ads strategy session</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#pricing">View pricing</a>
 </Button>
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
 <span>Google Ads dashboard</span>
 <span className="rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-1 text-emerald-300">Live</span>
 </div>
 <div className="mt-5 grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
 <div className="rounded-[1rem] border border-border bg-muted p-4">
 <div className="mt-4 flex items-center gap-2 rounded-full border border-border bg-zinc-900/70 px-3 py-2 text-sm text-muted-foreground">
 <Search className="h-4 w-4 text-foreground dark:text-foreground" />
 <span>{typedKeyword}</span>
 <span className="animate-pulse">|</span>
 </div>
 <div className="mt-4 flex items-end gap-2">
 {[28, 41, 54, 68, 81, 92].map((height, index) => (
 <motion.div
 key={index}
 initial={{ height: 0 }}
 animate={{ height: `${height}px` }}
 transition={{ duration: 0.6, delay: index * 0.06 }}
 className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-violet-400"
 />
 ))}
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Keyword planner</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">63</p>
 </div>
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Qualified leads</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">1,248</p>
 </div>
 <div className="rounded-[1rem] border border-foreground/10 bg-foreground/10 p-3 text-sm text-foreground">
 <div className="flex items-center gap-2">
 <Search className="h-4 w-4" />
 <span>Ad auction visibility improving every week</span>
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
 <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-400/20 text-foreground dark:text-foreground">
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Budget planning</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Smart bidding and budget pacing built around measurable ROI.
 </h2>
 <div className="mt-8 space-y-4">
 {[
 ['Forecasted leads', '180/mo'],
 ['Cost per lead', '$34'],
 ['Target CPA', '$38'],
 ].map(([label, value]) => (
 <div key={label} className="rounded-[1.1rem] border border-border bg-muted p-4">
 <div className="flex items-center justify-between">
 <p className="text-sm text-muted-foreground">{label}</p>
 <p className="text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{value}</p>
 </div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Analytics</p>
 <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Clear reporting for every stage of the funnel.
 </h2>
 </div>
 <div className="rounded-full border border-foreground/10 bg-foreground/10 p-3 text-foreground dark:text-foreground">
 <TrendingUp className="h-5 w-5" />
 </div>
 </div>
 <div className="mt-8 rounded-[1.25rem] border border-border bg-card p-5">
 <svg viewBox="0 0 320 140" className="h-40 w-full">
 <defs>
 <linearGradient id="googleGradient" x1="0%" x2="100%" y1="0%" y2="0%">
 <stop offset="0%" stopColor="#22d3ee" />
 <stop offset="100%" stopColor="#3b82f6" />
 </linearGradient>
 </defs>
 <path d="M10 110 C50 92, 80 85, 110 78 S170 56, 200 60 S260 72, 310 24" fill="none" stroke="url(#googleGradient)" strokeWidth="3" strokeLinecap="round" />
 <path d="M10 110 C50 92, 80 85, 110 78 S170 56, 200 60 S260 72, 310 24 L310 140 L10 140 Z" fill="rgba(34,211,238,0.12)" />
 </svg>
 </div>
 </motion.div>
 </div>
 </section>

 <section id="pricing" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Pricing</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Flexible engagement options for high-intent paid search.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {pricingPlans.map((plan, index) => (
 <motion.article
 key={plan.name}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className={`rounded-[1.75rem] border p-8 shadow-md ${plan.featured ? 'border-foreground/10 bg-foreground/10' : 'border-border bg-muted'}`}
 >
 {plan.featured && (
 <div className="mb-4 inline-flex rounded-full border border-foreground/10 bg-foreground/10 px-3 py-1 text-sm text-foreground dark:text-foreground">
 Most popular
 </div>
 )}
 <h3 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.name}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.description}</p>
 <p className="mt-6 text-4xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.price}</p>
 <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
 {plan.features.map((feature) => (
 <li key={feature} className="flex items-start gap-3">
 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground dark:text-foreground" />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 <Button asChild className="mt-8 rounded-full border-border bg-muted px-5 text-foreground dark:text-foreground dark:text-foreground dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
 <a href="#contact">Start a project</a>
 </Button>
 </motion.article>
 ))}
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to maximize your Google Ads ROI?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">We build, manage, and optimize high-performing Google Ads campaigns that drive qualified leads and sales with precise targeting and compelling ad copy.</p>
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

export default GoogleAds;
