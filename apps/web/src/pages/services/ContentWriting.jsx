import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 BookOpen,
 CheckCircle2,
 FileText,
 Mail,
 PenTool,
 Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const sections = [
 {
 title: 'Website Content',
 description: 'Clear, conversion-driven copy for landing pages, about pages, and product experiences.',
 icon: FileText,
 },
 {
 title: 'SEO Articles',
 description: 'Search-first storytelling that ranks for key terms while preserving brand voice.',
 icon: BookOpen,
 },
 {
 title: 'Blogs',
 description: 'Editorial content that keeps audiences engaged, returning, and leaning into your narrative.',
 icon: PenTool,
 },
 {
 title: 'Product Descriptions',
 description: 'Persuasive product copy that turns features into desire and conversions into confidence.',
 icon: Sparkles,
 },
 {
 title: 'Email Marketing',
 description: 'Sequenced campaigns with compelling hooks, nurturing flow, and measurable opens.',
 icon: Mail,
 },
 {
 title: 'Copywriting',
 description: 'Headline-led messaging and campaign copy that makes every brand moment feel polished.',
 icon: ArrowRight,
 },
];

const portfolio = [
 {
 title: 'Launch Narrative',
 detail: 'Positioning and web copy for a premium product debut with high-impact storytelling.',
 },
 {
 title: 'SEO Editorial Series',
 detail: 'Thought leadership content that ranked fast and sustained organic traffic growth.',
 },
 {
 title: 'Email Flow',
 detail: 'A conversion-first email sequence that improved open rates and campaign ROI.',
 },
];

const pricingPlans = [
 {
 name: 'Foundation',
 price: '$4.2k',
 description: 'A focused content package for a new landing page, product page, or email campaign.',
 features: ['Landing page copy', 'SEO keyword package', 'Content strategy notes'],
 },
 {
 name: 'Growth',
 price: '$8k',
 description: 'A broader writing system built for editorial momentum and higher search visibility.',
 features: ['5 SEO articles', 'Blog strategy', 'Email sequence'],
 featured: true,
 },
 {
 name: 'Signature',
 price: '$13k+',
 description: 'Full-funnel writing and messaging for launches, product suites, and campaign ecosystems.',
 features: ['Brand voice system', 'Product descriptions', 'Copy refresh plan'],
 },
];

const typingPhrases = [
 'Website Content.',
 'SEO Articles.',
 'Blogs.',
 'Product Descriptions.',
 'Email Marketing.',
 'Copywriting.',
];

function ContentWriting() {
 const [scrollProgress, setScrollProgress] = useState(0);
 const [typedText, setTypedText] = useState('Website Content.');
 const [cursorVisible, setCursorVisible] = useState(true);
 const [phraseIndex, setPhraseIndex] = useState(0);
 const [charIndex, setCharIndex] = useState(0);

 const currentPhrase = useMemo(() => typingPhrases[phraseIndex], [phraseIndex]);

 useEffect(() => {
 const blink = setInterval(() => {
 setCursorVisible((visible) => !visible);
 }, 500);

 return () => clearInterval(blink);
 }, []);

 useEffect(() => {
 const timeout = setTimeout(() => {
 if (charIndex < currentPhrase.length) {
 setTypedText(currentPhrase.slice(0, charIndex + 1));
 setCharIndex((index) => index + 1);
 } else {
 setTimeout(() => {
 setCharIndex(0);
 setPhraseIndex((prev) => (prev + 1) % typingPhrases.length);
 }, 1400);
 }
 }, charIndex < currentPhrase.length ? 90 : 0);

 return () => clearTimeout(timeout);
 }, [charIndex, currentPhrase]);

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
 <title>Content Writing — Webcore360</title>
 <meta
 name="description"
 content="Premium content writing for website copy, SEO articles, emails, product descriptions, and brand storytelling."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-12%] top-0 h-[34rem] w-[34rem] rounded-full bg-fuchsia-500/15 blur-[140px]" />
 <div className="absolute right-[-10%] top-[10rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-[150px]" />
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
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-sky-100 shadow-md ">
 <Sparkles className="h-4 w-4 text-sky-700 dark:text-fuchsia-300" />
 Copy that converts with clarity and premium storytelling.
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Words that sell.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 Strategic content for brands that want copy to feel polished, persuasive, and unmistakably strong.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-fuchsia-400 via-fuchsia-400 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Book a writing review</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#portfolio">See work</a>
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
 <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-[22px] border border-fuchsia-400/20 bg-fuchsia-500/10 shadow-md " />
 <motion.div
 whileHover={{ scale: 1.01 }}
 className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md "
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-fuchsia-400/60 to-transparent" />
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5">
 <div className="rounded-[1.75rem] border border-border bg-white/[0.03] p-6">
 <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted-foreground">
 <span>Content preview</span>
 <span className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-2 py-1 text-sky-800 dark:text-sky-200">Live</span>
 </div>
 <div className="space-y-4">
 <div className="rounded-[1.25rem] border border-fuchsia-400/10 bg-fuchsia-400/5 p-5">
 <p className="text-sm uppercase tracking-[0.28em] text-sky-700 dark:text-fuchsia-300">Short headline</p>
 <h2 className="mt-3 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">Launch with clarity.</h2>
 </div>
 <div className="rounded-[1.25rem] border border-border bg-card p-5">
 <p className="text-sm leading-7 text-muted-foreground">
 <span className="text-foreground dark:text-foreground dark:text-foreground dark:text-white">High-intent copy</span> with <span className="text-sky-700 dark:text-fuchsia-300">precise structure</span> and a premium narrative flow.
 </p>
 </div>
 <div className="relative overflow-hidden rounded-[22px] border border-border bg-black/25 p-5">
 <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-fuchsia-400/80 to-transparent" />
 <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Live typing</p>
 <div className="mt-3 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 {typedText}
 <span className={`inline-block ml-1 h-6 w-1 rounded-full bg-white transition-opacity ${cursorVisible ? 'opacity-100' : 'opacity-0'}`} />
 </div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Copy services</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium messaging for every channel.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
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
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-fuchsia-400/20 bg-fuchsia-500/10 text-sky-800 dark:text-sky-200">
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

 <section id="portfolio" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Portfolio</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Writing samples that feel premium, strategic, and on-brand.
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
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-fuchsia-500/10 to-fuchsia-500/10 p-6">
 <div className="h-40 rounded-[1.25rem] bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.18),transparent_45%)]" />
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Pricing</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium writing packages built for growth and conversion.
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
 <div className="mb-4 inline-flex rounded-full border border-fuchsia-400/30 bg-fuchsia-500/15 px-3 py-1 text-sm text-sky-800 dark:text-sky-200">
 Most popular
 </div>
 )}
 <h3 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.name}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.description}</p>
 <p className="mt-6 text-4xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.price}</p>
 <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
 {plan.features.map((feature) => (
 <li key={feature} className="flex items-start gap-3">
 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-sky-700 dark:text-fuchsia-300" />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 <Button asChild className="mt-8 rounded-full border-border bg-muted px-5 text-foreground dark:text-foreground dark:text-foreground dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
 <a href="#contact">Book now</a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to tell your brand story with powerful content?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Our writers craft SEO-optimized, conversion-focused copy that resonates with your audience — from blog posts and web copy to email campaigns and beyond.</p>
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

export default ContentWriting;
