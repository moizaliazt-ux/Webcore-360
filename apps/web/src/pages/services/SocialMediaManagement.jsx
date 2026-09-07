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
 Heart,
 MessageCircleMore,
 MonitorPlay,
 Palette,
 Play,
 Share2,
 Sparkles,
 TrendingUp,
 Users,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'Content Creation',
 description: 'Scroll-stopping content systems tailored to Instagram, Facebook, LinkedIn, and TikTok.',
 icon: Palette,
 },
 {
 title: 'Strategy',
 description: 'Positioning, storytelling, and channel planning that turns attention into a lasting brand presence.',
 icon: Compass,
 },
 {
 title: 'Community Management',
 description: 'Daily engagement, thoughtful replies, and relationship-building that keeps audiences connected.',
 icon: Users,
 },
 {
 title: 'Paid Campaigns',
 description: 'High-performing amplification plans that extend reach and improve conversion quality across platforms.',
 icon: CircleDollarSign,
 },
 {
 title: 'Monthly Reports',
 description: 'Clear insights on performance, audience growth, and the next best actions to take.',
 icon: BarChart3,
 },
 {
 title: 'Portfolio',
 description: 'A polished content workflow and brand system built to make every touchpoint feel elevated.',
 icon: MonitorPlay,
 },
];

const portfolioItems = [
 {
 title: 'Aurelia Studio',
 result: '1.8M organic reach',
 blurb: 'A premium content strategy that paired cinematic storytelling with consistent community growth.',
 },
 {
 title: 'Northstar Labs',
 result: '34% engagement lift',
 blurb: 'A cross-platform rollout that elevated brand presence and increased qualified inbound interest.',
 },
 {
 title: 'Monarch House',
 result: '12k new followers',
 blurb: 'A luxury social system built around beautiful campaign creative and strategic audience nurturing.',
 },
];

const pricingPlans = [
 {
 name: 'Launch',
 price: '$3.5k',
 description: 'For brands building a premium social presence with high-quality content and core engagement.',
 features: ['Content calendar', 'Weekly posting', 'Community replies'],
 },
 {
 name: 'Scale',
 price: '$7.5k',
 description: 'For teams that want richer creative, stronger strategy, and repeatable growth systems.',
 features: ['Everything in Launch', 'Paid campaign support', 'Monthly reporting'],
 featured: true,
 },
 {
 name: 'Momentum',
 price: '$12k+',
 description: 'For ambitious brands that need a full social growth engine and conversion-focused planning.',
 features: ['Advanced creative strategy', 'Community leadership', 'Quarterly roadmap'],
 },
];

function SocialMediaManagement() {
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
 <title>Social Media Marketing — Webcore360</title>
 <meta
 name="description"
 content="Premium social media marketing for Instagram growth, Facebook engagement, LinkedIn branding, and TikTok marketing."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[18rem] w-[18rem] sm:h-[32rem] sm:w-[32rem] rounded-full bg-pink-500/20 blur-[100px] sm:blur-[150px]" />
 <div className="absolute right-[-8%] top-[10rem] h-[16rem] w-[16rem] sm:h-[30rem] sm:w-[30rem] rounded-full bg-foreground/10 blur-[100px] sm:blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[14rem] w-[14rem] sm:h-[24rem] sm:w-[24rem] rounded-full bg-violet-500/15 blur-[100px] sm:blur-[140px]" />
 </div>
 <main className="relative z-10">
 <section className="dark text-foreground px-4 pb-16 pt-28 sm:pb-20 sm:pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto grid max-w-[1400px] items-center gap-10 lg:gap-12 lg:grid-cols-[1.02fr_0.98fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-pink-400/20 bg-pink-400/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-pink-100 shadow-md ">
 <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-pink-300" />
 Premium social growth for modern brands
 </div>
 <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl sm:leading-[1.05] lg:text-7xl lg:leading-[0.95]">
 Grow your brand on social media.
 </h1>
 <p className="mt-4 sm:mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl">
 We create content-rich social experiences that build community, create momentum, and turn audiences into loyal customers.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-pink-400 via-fuchsia-500 to-foreground px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book your social strategy</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#portfolio">See portfolio</a>
 </Button>
 </div>
 </motion.div>

 <motion.div
  initial={{ opacity: 0, x: 24 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
  className="relative flex flex-col gap-4"
  >
  {/* Card 1: Short-Form Reels */}
  <motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card p-5 shadow-md"
  >
  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5" />
  <div className="relative z-10 flex items-center justify-between">
  <div className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400 border border-pink-500/20">
  <Play className="h-5 w-5 fill-current" />
  </div>
  <div>
  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-pink-400">Short-Form Reels</p>
  <h4 className="text-sm sm:text-base font-bold text-foreground dark:text-white mt-0.5">Cinematic Storytelling</h4>
  </div>
  </div>
  <span className="rounded-full bg-pink-500/15 border border-pink-500/20 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-bold text-pink-300">+145k Views</span>
  </div>
  <p className="relative z-10 mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
  High-retention video formats designed to hook audiences in the first 3 seconds and drive organic shares.
  </p>
  </motion.div>

  {/* Card 2: Interactive Carousel */}
  <motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card p-5 shadow-md"
  >
  <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 to-cyan-500/5" />
  <div className="relative z-10 flex items-center justify-between">
  <div className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
  <Share2 className="h-5 w-5" />
  </div>
  <div>
  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-violet-400">Carousel Swipe</p>
  <h4 className="text-sm sm:text-base font-bold text-foreground dark:text-white mt-0.5">Value-First Education</h4>
  </div>
  </div>
  <span className="rounded-full bg-violet-500/15 border border-violet-500/20 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-bold text-violet-300">12.4% Save Rate</span>
  </div>
  <p className="relative z-10 mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
  Multi-slide infographics and visual stories that drive high bookmark rates and build authoritative trust.
  </p>
  </motion.div>

  {/* Card 3: Community Builder */}
  <motion.div
  whileHover={{ y: -4, scale: 1.02 }}
  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
  className="relative overflow-hidden rounded-[1.25rem] border border-border bg-card p-5 shadow-md"
  >
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5" />
  <div className="relative z-10 flex items-center justify-between">
  <div className="flex items-center gap-3">
  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
  <Users className="h-5 w-5" />
  </div>
  <div>
  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-emerald-400">Active Community</p>
  <h4 className="text-sm sm:text-base font-bold text-foreground dark:text-white mt-0.5">Inbound Lead Generation</h4>
  </div>
  </div>
  <span className="rounded-full bg-emerald-500/15 border border-emerald-500/20 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-bold text-emerald-300">24/7 Active</span>
  </div>
  <p className="relative z-10 mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
  Consistent community management and comment nurturing that turns passive viewers into warm business inquiries.
  </p>
  </motion.div>
  </motion.div>
 </div>
 </section>

 <section className="px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
 {services.map((service, index) => {
 const Icon = service.icon;
 return (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.5rem] sm:rounded-[1.75rem] border border-border bg-muted p-5 sm:p-7 shadow-md "
 >
 <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-[1rem] sm:rounded-[22px] border border-pink-400/20 bg-gradient-to-br from-pink-500/20 to-foreground/10 text-pink-200">
 <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
 </div>
 <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-2 sm:mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 </motion.article>
 );
 })}
 </div>
 </div>
 </section>

 <section className="px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto grid max-w-[1400px] gap-6 sm:gap-8 lg:grid-cols-[0.95fr_1.05fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-gradient-to-br from-zinc-900/80 via-zinc-950/70 to-black p-5 sm:p-7 shadow-md"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-pink-300">Community</p>
 <h2 className="mt-4 text-2xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-3xl md:text-4xl">
 Infinite scrolling feeds with floating likes, comments, and real-time momentum.
 </h2>
 <div className="mt-6 sm:mt-8 rounded-[1rem] sm:rounded-[1.25rem] border border-border bg-muted p-4 sm:p-5">
 <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
 <MessageCircleMore className="h-4 w-4 shrink-0 text-foreground dark:text-foreground" />
 <span>Engagement is building across every post</span>
 </div>
 <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
 {['Instagram', 'Facebook', 'LinkedIn', 'TikTok'].map((platform) => (
 <div key={platform} className="rounded-full border border-border bg-card px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs sm:text-sm text-muted-foreground">
 {platform}
 </div>
 ))}
 </div>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-muted p-5 sm:p-7 shadow-md "
 >
 <div className="flex items-start sm:items-center justify-between gap-4">
 <div>
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Monthly reports</p>
 <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-3xl md:text-4xl">
 Clear insights and a rhythm your team can trust.
 </h2>
 </div>
 <div className="shrink-0 rounded-full border border-foreground/10 bg-foreground/10 p-2.5 sm:p-3 text-foreground dark:text-foreground">
 <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
 </div>
 </div>
 <div className="mt-6 sm:mt-8 grid gap-3 grid-cols-2">
 {[
 ['Reach', '183k'],
 ['Comments', '+41%'],
 ['Shares', '+37%'],
 ['Saves', '+29%'],
 ].map(([label, value]) => (
 <div key={label} className="rounded-[0.875rem] sm:rounded-[1.1rem] border border-border bg-card p-3 sm:p-4">
 <p className="text-xs sm:text-sm text-muted-foreground">{label}</p>
 <p className="mt-1.5 sm:mt-2 text-lg sm:text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{value}</p>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </section>

 <section id="portfolio" className="px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-pink-300">Portfolio</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl lg:text-5xl">
 Social systems designed to feel elevated, strategic, and unmistakably premium.
 </h2>
 </motion.div>
 <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {portfolioItems.map((item, index) => (
 <motion.article
 key={item.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.5rem] sm:rounded-[1.75rem] border border-border bg-card p-5 sm:p-7 shadow-md "
 >
 <p className="text-sm text-foreground dark:text-foreground">{item.result}</p>
 <h3 className="mt-3 sm:mt-4 text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.title}</h3>
 <p className="mt-2 sm:mt-3 text-sm leading-7 text-muted-foreground">{item.blurb}</p>
 </motion.article>
 ))}
 </div>
 </div>
 </section>

 <section className="px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Pricing</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl lg:text-5xl">
 Flexible social growth engagements for ambitious brands.
 </h2>
 </motion.div>
 <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {pricingPlans.map((plan, index) => (
 <motion.article
 key={plan.name}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className={`rounded-[1.5rem] sm:rounded-[1.75rem] border p-5 sm:p-8 shadow-md ${plan.featured ? 'border-pink-400/40 bg-pink-500/10' : 'border-border bg-muted'}`}
 >
 {plan.featured && (
 <div className="mb-4 inline-flex rounded-full border border-pink-400/30 bg-pink-500/15 px-3 py-1 text-sm text-pink-200">
 Most popular
 </div>
 )}
 <h3 className="text-xl sm:text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.name}</h3>
 <p className="mt-2 sm:mt-3 text-sm leading-7 text-muted-foreground">{plan.description}</p>
 <p className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.price}</p>
 <ul className="mt-6 sm:mt-8 space-y-3 text-sm text-muted-foreground">
 {plan.features.map((feature) => (
 <li key={feature} className="flex items-start gap-3">
 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground dark:text-foreground" />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 <Button asChild className="mt-6 sm:mt-8 w-full rounded-full border-border bg-muted px-5 text-foreground dark:text-foreground dark:text-foreground dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to dominate social media?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">We handle your entire social presence — strategy, content creation, community management, and analytics — so you can focus on running your business.</p>
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

export default SocialMediaManagement;
