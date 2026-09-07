import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import {
 ArrowRight,
 BarChart3,
 Bot,
 CheckCircle2,
 ChevronRight,
 Code2,
 Compass,
 Cpu,
 Database,
 Layers3,
 MonitorPlay,
 Palette,
 Play,
 Rocket,
 ShieldCheck,
 Sparkles,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const benefits = [
 {
 title: 'Fast by default',
 description: 'Performance-first architectures that score high, load instantly, and feel effortless.',
 icon: Rocket,
 },
 {
 title: 'Conversion-led UX',
 description: 'Clear pathways, intuitive flows, and premium interactions that guide visitors to action.',
 icon: BarChart3,
 },
 {
 title: 'Built to scale',
 description: 'Modern stacks, clean systems, and flexible foundations for your next stage of growth.',
 icon: Layers3,
 },
];

const processSteps = [
 { title: 'Discover', description: 'We align on goals, audience behavior, and the experience your brand needs to win.' },
 { title: 'Design', description: 'We shape the interface, content hierarchy, and interaction language around conversion.' },
 { title: 'Build', description: 'We engineer fast, flexible websites with polished performance and strong SEO fundamentals.' },
 { title: 'Launch', description: 'We deploy, refine, and support the experience as it starts delivering live momentum.' },
];

const technologies = [
 { name: 'React', icon: Code2, accent: 'from-foreground/10 to-fuchsia-500/20', detail: 'Flexible component-led UI for elegant, responsive product experiences.' },
 { name: 'Next.js', icon: MonitorPlay, accent: 'from-violet-500/20 to-fuchsia-500/20', detail: 'Fast, SEO-ready delivery with a premium production workflow.' },
 { name: 'Node.js', icon: Database, accent: 'from-emerald-500/20 to-foreground/10', detail: 'Scalable backend architectures and robust APIs for modern product teams.' },
 { name: 'Tailwind', icon: Palette, accent: 'from-violet-400/20 to-violet-500/20', detail: 'Rapid visual refinement with systems that stay beautifully consistent.' },
];

const websiteTypes = [
 'Marketing sites',
 'SaaS product launches',
 'E-commerce storefronts',
 'Portfolio & editorial sites',
 'Landing pages',
 'Internal tools & client portals',
];

const pricingPlans = [
 {
 name: 'Launch',
 price: '$6k',
 description: 'For founders who need a polished site with clear positioning and strong conversion logic.',
 features: ['Custom design system', 'Responsive build', 'Analytics setup'],
 },
 {
 name: 'Scale',
 price: '$12k',
 description: 'For teams that want advanced UX, content architecture, and ongoing optimization.',
 features: ['Everything in Launch', 'CMS integration', 'SEO foundation'],
 featured: true,
 },
 {
 name: 'Momentum',
 price: '$20k+',
 description: 'For ambitious products that need a larger digital ecosystem and deeper support.',
 features: ['Performance strategy', 'Automation setup', 'Priority support'],
 },
];

function TechnicalSolutions() {
 const [activeTech, setActiveTech] = useState(technologies[0].name);
 const [displayedCode, setDisplayedCode] = useState('');

 useEffect(() => {
 const codeSnippets = [
 "const launch = async () => { await ship(); };",
 "export function Website() { return <Experience premium />; }",
 "useEffect(() => optimizePerformance(), []);",
 ];

 let currentSnippetIndex = 0;
 let charIndex = 0;

 const interval = window.setInterval(() => {
 const snippet = codeSnippets[currentSnippetIndex];
 if (charIndex <= snippet.length) {
 setDisplayedCode(snippet.slice(0, charIndex));
 charIndex += 1;
 } else {
 charIndex = 0;
 currentSnippetIndex = (currentSnippetIndex + 1) % codeSnippets.length;
 }
 }, 35);

 return () => window.clearInterval(interval);
 }, []);

 const activeTechDetails = technologies.find((tech) => tech.name === activeTech) || technologies[0];

 return (
 <>
 <Helmet>
 <title>Web Development — Webcore360</title>
 <meta
 name="description"
 content="Premium website development for conversion-led experiences, modern product launches, and polished digital storytelling."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-8%] top-[12rem] h-[28rem] w-[28rem] rounded-full bg-violet-500/20 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-fuchsia-500/15 blur-[140px]" />
 </div>


 <main className="relative z-10">
 <section className="dark text-foreground relative isolate overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto flex max-w-[1400px] flex-col gap-14">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]"
 >
 <div className="max-w-3xl">
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Sparkles className="h-4 w-4 text-foreground dark:text-foreground" />
 Premium web development for modern brands
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Build Websites That Convert Visitors into Customers.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We design and engineer elegant, high-performance websites that feel like a premium product and perform like a growth engine.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Get Free Consultation</a>
 </Button>

 </div>
 <div className="mt-10 flex flex-wrap gap-4 text-sm text-muted-foreground">
 <div className="rounded-full border border-border bg-muted px-3 py-2">Fast load times</div>
 <div className="rounded-full border border-border bg-muted px-3 py-2">Conversion-first UX</div>
 <div className="rounded-full border border-border bg-muted px-3 py-2">Responsive by default</div>
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, x: 24 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <motion.div
 animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
 transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute -left-6 top-6 h-20 w-20 rounded-[22px] border border-border bg-muted shadow-md "
 />
 <motion.div
 animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
 transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute -right-4 bottom-8 h-24 w-24 rounded-[22px] border border-foreground/10 bg-foreground/10 shadow-md "
 />
 <motion.div
 initial={{ scale: 0.95, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
 className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md "
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-4 sm:p-5">
 <div className="flex items-center justify-between text-sm text-muted-foreground">
 <span>Studio dashboard</span>
 <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-emerald-300">Live</span>
 </div>
 <div className="mt-5 rounded-[1.25rem] border border-border bg-card p-3">
 <div className="flex items-center gap-2 border-b border-border pb-3 text-xs text-muted-foreground">
 <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
 <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
 <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
 </div>
 <div className="mt-4 grid gap-3 lg:grid-cols-[1.05fr_0.95fr]">
 <div className="rounded-[1rem] border border-border bg-muted p-4">
 <p className="text-sm text-muted-foreground">Conversion rate</p>
 <p className="mt-2 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">7.8%</p>
 <div className="mt-4 flex items-end gap-2">
 {[42, 58, 53, 74, 84, 92].map((height, index) => (
 <div key={index} className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-violet-500" style={{ height: `${height}px` }} />
 ))}
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Runtime</p>
 <p className="mt-2 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">98ms</p>
 </div>
 <div className="rounded-[1rem] border border-border bg-card p-3">
 <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">SEO score</p>
 <p className="mt-2 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">96/100</p>
 </div>
 <div className="rounded-[1rem] border border-foreground/10 bg-foreground/10 p-3 text-sm text-foreground">
 <div className="flex items-center gap-2">
 <Code2 className="h-4 w-4" />
 <span>{displayedCode}</span>
 <span className="animate-pulse">|</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Benefits</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Thoughtful websites that feel premium and convert with ease.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {benefits.map((benefit, index) => {
 const Icon = benefit.icon;
 return (
 <motion.div
 key={benefit.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-muted p-7 shadow-md "
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/20 text-foreground dark:text-foreground shadow-md">
 <Icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{benefit.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{benefit.description}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[2.25rem] border border-border bg-gradient-to-br from-zinc-900/80 via-zinc-950/70 to-black p-8 shadow-md"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Our process</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 From concept to launch, every step is designed to feel clear and elevated.
 </h2>
 <div className="mt-8 space-y-4">
 {processSteps.map((step, index) => (
 <div key={step.title} className="rounded-[1.25rem] border border-border bg-muted p-4 shadow-md">
 <div className="flex items-center gap-3">
 <div className="flex h-8 w-8 items-center justify-center rounded-full border border-foreground/10 bg-foreground/10 text-sm font-semibold text-foreground dark:text-foreground">
 0{index + 1}
 </div>
 <h3 className="text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{step.title}</h3>
 </div>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
 </div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[2.25rem] border border-border bg-muted p-8 shadow-md "
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Technologies</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 A modern stack for speed, quality, and long-term flexibility.
 </h2>
 <div className="mt-8 grid gap-3 sm:grid-cols-2">
 {technologies.map((tech) => {
 const Icon = tech.icon;
 return (
 <button
 key={tech.name}
 type="button"
 onClick={() => setActiveTech(tech.name)}
 className={`rounded-[1.25rem] border p-4 text-left transition-all duration-300 ${activeTech === tech.name ? 'border-foreground/10 bg-foreground/10 shadow-md' : 'border-border bg-muted hover:border-foreground/10 hover:bg-muted'}`}
 >
 <div className={`inline-flex rounded-[22px] bg-gradient-to-br ${tech.accent} p-3 text-foreground dark:text-foreground`}>
 <Icon className="h-5 w-5" />
 </div>
 <p className="mt-4 font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{tech.name}</p>
 </button>
 );
 })}
 </div>
 <div className="mt-6 rounded-[1.25rem] border border-border bg-card p-5">
 <div className="flex items-center gap-3">
 <div className="flex h-10 w-10 items-center justify-center rounded-[22px] border border-foreground/10 bg-foreground/10 text-foreground dark:text-foreground">
 <Cpu className="h-5 w-5" />
 </div>
 <div>
 <p className="text-sm font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{activeTechDetails.name}</p>
 <p className="text-sm text-muted-foreground">{activeTechDetails.detail}</p>
 </div>
 </div>
 </div>
 </motion.div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Portfolio</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Digital experiences designed to look elegant and convert with confidence.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {[
 { title: 'Northstar Labs', blurb: 'A premium launch site that helped a frontier AI brand feel immediately credible.' },
 { title: 'Lumen Commerce', blurb: 'A high-converting storefront experience built for clarity, trust, and revenue growth.' },
 { title: 'Harbor Capital', blurb: 'A refined digital presence aligned with investor confidence and category authority.' },
 ].map((project, index) => (
 <motion.article
 key={project.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -8, scale: 1.01 }}
 className="overflow-hidden rounded-[1.85rem] border border-border bg-card shadow-md "
 >
 <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${index === 0 ? 'from-foreground/10 via-fuchsia-500/20 to-violet-500/25' : index === 1 ? 'from-fuchsia-500/30 via-violet-500/20 to-fuchsia-500/25' : 'from-emerald-500/30 via-foreground/10 to-violet-400/25'}`}>
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.25),transparent_45%)]" />
 </div>
 <div className="p-6">
 <h3 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{project.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.blurb}</p>
 </div>
 </motion.article>
 ))}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px] rounded-[2.5rem] border border-border bg-muted p-8 shadow-md lg:p-10">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Website types</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Flexible builds for each phase of your growth story.
 </h2>
 </motion.div>
 <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
 {websiteTypes.map((type, index) => (
 <motion.div
 key={type}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.45, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.25rem] border border-border bg-card p-5 shadow-md"
 >
 <div className="flex items-center gap-3">
 <div className="flex h-9 w-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/10 text-foreground dark:text-foreground">
 <Compass className="h-4 w-4" />
 </div>
 <p className="font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{type}</p>
 </div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Pricing</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Clear investment options for premium digital launches.
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to build powerful technical solutions?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">From custom web applications to complex integrations, our engineering team delivers scalable, high-performance solutions tailored to your business needs.</p>
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

export default TechnicalSolutions;
