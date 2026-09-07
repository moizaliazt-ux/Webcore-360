import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 BarChart3,
 CheckCircle2,
 ChevronRight,
 Compass,
 Eye,
 Layers3,
 Megaphone,
 MonitorSmartphone,
 Palette,
 Play,
 Rocket,
 Search,
 Sparkles,
 Target,
 TrendingUp,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'Campaign Strategy',
 description: 'Audience-first paid media plans with positioning, offer design, and channel architecture built for growth.',
 icon: Compass,
 },
 {
 title: 'Audience Research',
 description: 'Deep behavioral segmentation and intent signal mapping so your creative reaches the people most likely to convert.',
 icon: Target,
 },
 {
 title: 'Creative Design',
 description: 'Thumb-stopping ad concepts, launch assets, and landing page visuals aligned around conversion.',
 icon: Palette,
 },
 {
 title: 'A/B Testing',
 description: 'Rapid experimentation across hooks, visuals, and offers to discover the winning message faster.',
 icon: Layers3,
 },
 {
 title: 'Optimization',
 description: 'Live budget allocation, bidding refinement, and performance tuning that improves ROAS every week.',
 icon: TrendingUp,
 },
 {
 title: 'Monthly Reporting',
 description: 'Clear dashboards, strategic insight, and growth planning driven by the data that matters most.',
 icon: BarChart3,
 },
];

const caseStudies = [
 {
 title: 'Northstar Wellness',
 result: '3.2x ROAS in 45 days',
 blurb: 'Meta campaigns that reintroduced an underperforming offer with sharper positioning and creative testing.',
 },
 {
 title: 'Forma Studio',
 result: '41% lower CPA',
 blurb: 'Instagram-led prospecting paired with optimized landing pages and product-led creative.',
 },
 {
 title: 'Lumen Goods',
 result: '2.8x revenue lift',
 blurb: 'A launch campaign that scaled fast with structured creative, audience refinement, and continual iteration.',
 },
];

const pricingPlans = [
 {
 name: 'Launch',
 price: '$4.5k',
 description: 'For early-stage brands ready to test a high-performing Meta foundation.',
 features: ['Campaign architecture', 'Audience research', '3 ad concept sets'],
 },
 {
 name: 'Scale',
 price: '$8.5k',
 description: 'For teams that want steady growth, deeper creative testing, and stronger reporting.',
 features: ['Everything in Launch', 'Weekly optimization', 'Landing page alignment'],
 featured: true,
 },
 {
 name: 'Momentum',
 price: '$14k+',
 description: 'For ambitious brands running a full paid social growth engine.',
 features: ['Senior strategist', 'Advanced creative testing', 'Monthly growth roadmap'],
 },
];

function StrategicMarketing() {
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
 <title>Meta Ads — Webcore360</title>
 <meta
 name="description"
 content="High-converting Meta advertising for Facebook and Instagram with strategy, creative, testing, optimization, and reporting."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/18 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-orange-500/15 blur-[140px]" />
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
 Facebook + Instagram advertising that converts
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Generate more sales with Meta advertising.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We build premium Meta campaigns that turn attention into qualified demand with sharp creative, strategic targeting, and measurable growth.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-fuchsia-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book your Meta Ads strategy</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#case-studies">See case studies</a>
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
 <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-[22px] border border-fuchsia-400/20 bg-fuchsia-500/10 shadow-md " />
 <div className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md ">
 <div className="rounded-[1.25rem] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 sm:p-5">
 <div className="flex items-center justify-between text-sm text-muted-foreground">
 <span>Meta Ads dashboard</span>
 <span className="rounded-full border border-emerald-400/25 bg-emerald-500/15 px-3 py-1 text-emerald-300">Live</span>
 </div>
 <div className="mt-5 grid gap-3 lg:grid-cols-[1.02fr_0.98fr]">
 <div className="rounded-[1rem] border border-border bg-muted p-4">
 <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
 <span>ROAS</span>
 <span className="text-foreground dark:text-foreground">+32%</span>
 </div>
 <div className="mt-4 flex items-end gap-2">
 {[28, 42, 54, 68, 79, 92].map((height, index) => (
 <motion.div
 key={index}
 initial={{ height: 0 }}
 animate={{ height: `${height}px` }}
 transition={{ duration: 0.6, delay: index * 0.06 }}
 className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-fuchsia-500"
 />
 ))}
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Instagram reach</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">246k</p>
 </div>
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Conversions</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">1,284</p>
 </div>
 <div className="rounded-[1rem] border border-fuchsia-400/20 bg-fuchsia-500/10 p-3 text-sm text-fuchsia-100">
 <div className="flex items-center gap-2">
 <MonitorSmartphone className="h-4 w-4" />
 <span>Audience targeting is live and scaling</span>
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
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-fuchsia-500/20 text-foreground dark:text-foreground">
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-fuchsia-300">Optimization</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Campaign launch animation with data-led improvements and fast iteration.
 </h2>
 <div className="mt-8 space-y-4">
 {[
 ['Audience targeting', '3,400 qualified profiles'],
 ['Creative testing', '12 variations launched'],
 ['Budget pacing', 'Optimized every 24 hours'],
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Audience targeting</p>
 <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 Precision targeting that helps the right people see your offer.
 </h2>
 </div>
 <div className="rounded-full border border-foreground/10 bg-foreground/10 p-3 text-foreground dark:text-foreground">
 <Eye className="h-5 w-5" />
 </div>
 </div>
 <div className="mt-8 grid gap-3 sm:grid-cols-3">
 {['Lookalikes', 'Engagement', 'Retargeting'].map((segment) => (
 <div key={segment} className="rounded-[1.1rem] border border-border bg-card p-4 text-center text-sm font-medium text-muted-foreground">
 {segment}
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 <section id="case-studies" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Case studies</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Performance stories built on sharper creative and smarter scaling.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {caseStudies.map((study, index) => (
 <motion.article
 key={study.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-card p-7 shadow-md "
 >
 <p className="text-sm text-foreground dark:text-foreground">{study.result}</p>
 <h3 className="mt-4 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{study.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{study.blurb}</p>
 </motion.article>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Pricing</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Flexible engagement options for paid social growth.
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
 className={`rounded-[1.75rem] border p-8 shadow-md ${plan.featured ? 'border-fuchsia-400/40 bg-fuchsia-500/10' : 'border-border bg-muted'}`}
 >
 {plan.featured && (
 <div className="mb-4 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 px-3 py-1 text-sm text-fuchsia-200">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to accelerate your growth with strategic marketing?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Our team of marketing strategists will craft data-driven campaigns that deliver measurable ROI. From audience research to campaign execution, we handle everything.</p>
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

export default StrategicMarketing;
