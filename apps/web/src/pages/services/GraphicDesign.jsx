import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 BarChart3,
 CheckCircle2,
 ChevronRight,
 ImageIcon,
 LayoutGrid,
 Palette,
 Sparkles,
 TrendingUp,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const sections = [
 {
 title: 'Social Media Posts',
 description: 'Scroll-stopping creative for Instagram, Facebook, TikTok, and LinkedIn campaigns.',
 icon: Sparkles,
 },
 {
 title: 'Flyers',
 description: 'High-impact promotional collateral designed to convert and build brand recall.',
 icon: LayoutGrid,
 },
 {
 title: 'Brochures',
 description: 'Elegant brand brochures with premium layouts and storytelling structure.',
 icon: BarChart3,
 },
 {
 title: 'Business Cards',
 description: 'Tactile, memorable business systems designed for first impressions.',
 icon: CheckCircle2,
 },
 {
 title: 'Packaging',
 description: 'Luxury packaging concepts that elevate product presence and unboxing moments.',
 icon: Palette,
 },
 {
 title: 'Banners',
 description: 'Large-format visuals that look polished across digital, display, and event environments.',
 icon: TrendingUp,
 },
 {
 title: 'Presentations',
 description: 'Brand-led pitch decks and slide systems that communicate confidence and clarity.',
 icon: ImageIcon,
 },
];

const portfolio = [
  {
  title: 'Luna Atelier',
  detail: 'A premium launch kit with high-fashion editorial imagery and motion-ready assets.',
  image: '/portfolio/luna.png',
  },
  {
  title: 'Cove Retail',
  detail: 'Product packaging and social creative designed for an elevated lifestyle audience.',
  image: '/portfolio/cove.png',
  },
  {
  title: 'Peak Finance',
  detail: 'Corporate stationery and pitch deck visuals for a modern financial brand.',
  image: '/portfolio/peak.png',
  },
];

const pricingPlans = [
 {
 name: 'Starter',
 price: '$3.2k',
 description: 'A focused creative package for brands that need standout visual assets quickly.',
 features: ['Post templates', 'Flyer design', 'Business card concept'],
 },
 {
 name: 'Creative',
 price: '$7.8k',
 description: 'A premium design system with strong brand consistency across channels.',
 features: ['Complete asset suite', 'Packaging concept', 'Presentation design'],
 featured: true,
 },
 {
 name: 'Signature',
 price: '$12k+',
 description: 'Full-service creative direction and bespoke design for high-impact launches.',
 features: ['Brand storytelling', 'Campaign visuals', 'Gallery-ready execution'],
 },
];

function GraphicDesign() {
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
 <title>Graphic Design — Webcore360</title>
 <meta
 name="description"
 content="Creative graphic design that captures attention across social, print, packaging, and brand touchpoints."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-fuchsia-500/20 blur-[150px]" />
 <div className="absolute right-[-8%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/4 h-[24rem] w-[24rem] rounded-full bg-violet-500/15 blur-[140px]" />
 </div>
 <main className="relative z-10">
 <section className="dark text-foreground px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-100 shadow-md ">
 <Sparkles className="h-4 w-4 text-fuchsia-300" />
 Creative design that captures attention and drives clarity
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Creative designs that capture attention.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We craft premium graphic work for social, print, packaging, presentations, and brand experiences that feel polished and unforgettable.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-fuchsia-400 via-foreground to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book a creative review</a>
 </Button>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 24 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <div className="absolute -left-6 top-6 h-20 w-20 rounded-[22px] border border-border bg-muted shadow-md " />
 <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-[22px] border border-foreground/10 bg-foreground/10 shadow-md " />
 <motion.div
 animate={{ rotate: [0, 2, 0], y: [0, -8, 0] }}
 transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
 className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md "
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5">
 <div className="grid gap-4 sm:grid-cols-[0.92fr_0.98fr]">
 <div className="rounded-[22px] border border-border bg-muted p-5">
 <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted-foreground">
 <span>Portfolio preview</span>
 <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-2 py-1 text-fuchsia-200">Live</span>
 </div>
 <div className="mt-5 h-32 rounded-[22px] border border-border bg-gradient-to-br from-fuchsia-500/10 to-violet-500/10 p-4">
 <div className="h-full rounded-[1.25rem] border border-dashed border-border bg-card" />
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1rem] border border-border bg-card p-4">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Color palette</p>
 <div className="mt-4 flex gap-2">
 {['#F472B6', '#A78BFA', '#38BDF8', '#FBBF24'].map((color) => (
 <motion.div
 key={color}
 whileHover={{ scale: 1.08 }}
 className="h-10 w-10 rounded-full"
 style={{ backgroundColor: color }}
 />
 ))}
 </div>
 </div>
 <div className="rounded-[1rem] border border-border bg-card p-4">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Image reveal</p>
 <p className="mt-3 text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">High-impact visual storytelling.</p>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </motion.div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">What we design</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium graphic systems built for standout performance and brand cohesion.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
 {sections.map((section, index) => {
 const Icon = section.icon;
 return (
 <motion.article
 key={section.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-muted p-7 shadow-md "
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-fuchsia-400/20 bg-gradient-to-br from-fuchsia-500/20 to-foreground/10 text-fuchsia-200">
 <Icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{section.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.description}</p>
 </motion.article>
 );
 })}
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-pink-300">Portfolio</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Gallery-ready creative with hover animation and premium polish.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {portfolio.map((item, index) => (
 <motion.article
 key={item.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -6, scale: 1.01 }}
 className="overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 shadow-md "
 >
  <div className="h-56 overflow-hidden rounded-[22px] bg-secondary">
  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
  </div>
 <h3 className="mt-6 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
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
 Transparent pricing for premium graphic creative work.
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
 <a href="#contact">Book creative</a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to bring your vision to life with premium graphics?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Our graphic designers create scroll-stopping visuals, from social media assets to print-ready collateral, that elevate your brand at every touchpoint.</p>
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

export default GraphicDesign;
