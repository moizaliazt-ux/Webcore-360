import { useMemo, useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BarChart3, Code2, MonitorPlay, Sparkles, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredProjects = [
 {
 title: 'Nexus SaaS Growth Platform',
 client: 'Nexus Labs',
 industry: 'SaaS & Technology',
 overview:
 'A full-funnel digital growth system that drove qualified demo requests and established Nexus Labs as the authority in their market.',
 problem:
 'Nexus Labs needed a premium digital presence that communicated product value clearly while building a high-converting lead pipeline.',
 solution:
 'We rebuilt the brand system, redesigned the product site, and deployed an integrated SEO and paid media strategy with AI-assisted lead scoring.',
 results: [
 { label: 'Demo requests', value: '+127%' },
 { label: 'Organic traffic', value: '+84%' },
 { label: 'Trial-to-paid rate', value: '+41%' },
 ],
 technology: ['Next.js', 'HubSpot', 'Tailwind', 'Figma'],
 timeline: '16 weeks',
 accent: 'from-foreground via-fuchsia-500 to-violet-500',
 phoneAccent: 'bg-white/5 backdrop-blur-md',
 tabletAccent: 'bg-white/5 backdrop-blur-md',
 laptopAccent: 'bg-slate-950 border-slate-800',
 },
 {
 title: 'Apex Commerce Suite',
 client: 'Apex Commerce',
 industry: 'E-Commerce',
 overview:
 'A conversion-first storefront experience built for premium products, fast checkout, and higher average order value.',
 problem:
 'The brand needed a polished digital shopfront that reflected its premium positioning while optimizing checkout efficiency and paid media ROI.',
 solution:
 'We created a flexible commerce system with immersive product storytelling, smart cart recovery flows, and data-driven Google & Meta ad campaigns.',
 results: [
 { label: 'Revenue growth', value: '+89%' },
 { label: 'Paid ROAS', value: '+55%' },
 { label: 'Avg. order value', value: '+33%' },
 ],
 technology: ['Shopify', 'GSAP', 'Klaviyo', 'Contentful'],
 timeline: '10 weeks',
 accent: 'from-fuchsia-500 via-violet-500 to-fuchsia-500',
 phoneAccent: 'bg-white/5 backdrop-blur-md',
 tabletAccent: 'bg-white/5 backdrop-blur-md',
 laptopAccent: 'bg-slate-950 border-slate-800',
 },
 {
 title: 'Orion AI Automation System',
 client: 'Orion Digital',
 industry: 'AI & Automation',
 overview:
 'An AI-powered automation ecosystem connecting CRM, email, and analytics to eliminate manual work and accelerate revenue growth.',
 problem:
 'Orion Digital was losing deals to slow follow-up, disconnected tools, and manual data entry that consumed 14+ hours per rep each week.',
 solution:
 'We built an intelligent automation layer with AI lead routing, 24/7 nurture flows, and a real-time analytics dashboard that tracks the full pipeline.',
 results: [
 { label: 'Pipeline velocity', value: '+61%' },
 { label: 'Hours saved/week', value: '14hrs' },
 { label: 'Revenue pipeline', value: '+39%' },
 ],
 technology: ['HubSpot', 'Zapier', 'Vercel', 'Tailwind'],
 timeline: '12 weeks',
 accent: 'from-emerald-400 via-foreground to-slate-400',
 phoneAccent: 'bg-white/5 backdrop-blur-md',
 tabletAccent: 'bg-white/5 backdrop-blur-md',
 laptopAccent: 'bg-slate-950 border-slate-800',
 },
];

function FeaturedWorkSection() {
 const [activeIndex, setActiveIndex] = useState(0);
 const activeProject = useMemo(() => featuredProjects[activeIndex], [activeIndex]);
 const progress = `${Math.round(((activeIndex + 1) / featuredProjects.length) * 100)}%`;

 useEffect(() => {
 const timer = setInterval(() => {
 setActiveIndex((current) => (current + 1) % featuredProjects.length);
 }, 5000);
 return () => clearInterval(timer);
 }, []);

 return (
 <section 
 id="featured-work" 
 className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-28"
 >
 <div className="mx-auto max-w-[1400px]">
 <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
 <div className="space-y-3">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-white">Featured work</p>
 <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
 One cinematic project at a time, designed for premium growth.
 </h2>
 </div>
 <div className="space-y-1 text-right text-sm text-gray-400 sm:text-left">
 <p className="font-semibold text-white">{activeIndex + 1} of {featuredProjects.length}</p>
 <div className="h-2 overflow-hidden rounded-full bg-muted">
 <div
 className={`h-full rounded-full bg-gradient-to-r transition-all duration-500 ease-in-out ${activeProject.accent}`}
 style={{ width: `${((activeIndex + 1) / featuredProjects.length) * 100}%` }}
 />
 </div>
 </div>
 </div>

 <div className="grid gap-10 lg:grid-cols-[1.1fr_0.95fr] xl:gap-14">
 <div className="relative">
 <div className="absolute -left-8 top-10 hidden h-40 w-40 rounded-full bg-foreground/10 blur-3xl lg:block" />
 <div className="absolute right-0 top-16 hidden h-36 w-36 rounded-full bg-violet-500/10 blur-3xl lg:block" />

 <AnimatePresence mode="wait">
 <motion.div
 key={activeProject.title}
 initial={{ opacity: 0, y: 30 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -30 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="relative overflow-hidden rounded-[2.5rem] bg-white/[0.03] p-8 shadow-sm ring-1 ring-white/10"
 >
 <div className="grid gap-8 lg:grid-cols-[1.35fr_0.85fr]">
 <div className="relative rounded-[22px] bg-white/[0.03] p-6 ring-1 ring-white/10">
 <div className={`absolute inset-x-0 top-0 h-1 rounded-t-full bg-gradient-to-r ${activeProject.accent}`} />
 <div className="relative rounded-[1.75rem] bg-white/[0.03] p-5 ring-1 ring-white/10 shadow-sm">
 <div className="absolute right-4 top-4 h-3 w-3 rounded-full bg-white/5 blur-sm" />
 <div className={`relative h-[320px] overflow-hidden rounded-[22px] border ${activeProject.laptopAccent} shadow-xl`}>
 <div className="flex h-full flex-col overflow-hidden rounded-[22px] bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900">
 <div className="flex items-center gap-2 border-b border-slate-800 p-3">
 <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
 <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
 <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
 </div>
 <div className="flex flex-1 flex-col justify-between p-5">
 <div className="space-y-4">
 <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{activeProject.industry}</p>
 <div className="space-y-1">
 <p className="text-lg font-semibold text-white">{activeProject.title}</p>
 <p className="text-sm text-slate-400 line-clamp-2">{activeProject.overview}</p>
 </div>
 <div className="grid gap-3 sm:grid-cols-2">
 <div className="rounded-2xl bg-slate-800/50 p-4 border border-slate-700/50">
 <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{activeProject.results[0].label}</p>
 <p className="mt-2 text-lg font-semibold text-white">{activeProject.results[0].value}</p>
 </div>
 <div className="rounded-2xl bg-slate-800/50 p-4 border border-slate-700/50">
 <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{activeProject.results[1].label}</p>
 <p className="mt-2 text-lg font-semibold text-white">{activeProject.results[1].value}</p>
 </div>
 </div>
 </div>
 <div className="grid gap-3 sm:grid-cols-3">
 {activeProject.technology.slice(0, 3).map((tech) => (
 <div key={tech} className="rounded-2xl bg-slate-800/50 border border-slate-700/50 p-2.5 text-center text-xs text-slate-300">
 {tech}
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 <div className="grid gap-6">
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
 className={`rounded-[22px] ${activeProject.phoneAccent} p-5 shadow-sm ring-1 ring-white/10`}
 >
 <div className="h-[18rem] rounded-[22px] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-4">
 <div className="mb-4 flex items-center justify-between rounded-full bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-white/10">
 <span>Mobile</span>
 <Sparkles className="h-4 w-4 text-white" />
 </div>
 <div className="grid gap-3">
 <p className="text-sm font-semibold text-white">{activeProject.client}</p>
 <p className="text-xs leading-relaxed text-gray-400 line-clamp-5">{activeProject.problem}</p>
 </div>
 </div>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, x: 20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
 className={`rounded-[22px] ${activeProject.tabletAccent} p-5 shadow-sm ring-1 ring-white/10`}
 >
 <div className="h-[14rem] rounded-[1.75rem] bg-gradient-to-b from-white/[0.04] via-white/[0.02] to-transparent p-5">
 <div className="mb-5 flex items-center justify-between rounded-full bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-white/10">
 <span>Tablet</span>
 <Target className="h-4 w-4 text-violet-400" />
 </div>
 <div className="space-y-2">
 <p className="text-xs uppercase tracking-[0.1em] text-white">Solution</p>
 <p className="text-xs leading-relaxed text-gray-400 line-clamp-4">{activeProject.solution}</p>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>

 <div className="pointer-events-none absolute left-4 top-4 hidden h-24 w-24 rounded-full bg-gradient-to-r from-foreground/10 to-transparent blur-3xl lg:block" />
 </div>

 <div className="space-y-8 rounded-[2.5rem] bg-card p-8 shadow-md ring-1 ring-white/10 lg:p-10">
 <div className="space-y-5">
 <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-white shadow-sm ring-1 ring-white/10">
 <BarChart3 className="h-4 w-4 text-white" />
 {activeProject.industry}
 </div>
 <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{activeProject.client}</h3>
 <p className="text-lg leading-8 text-gray-400">{activeProject.overview}</p>
 </div>

 <div className="grid gap-6">
 <div className="rounded-[22px] bg-white/[0.03] p-6 shadow-sm ring-1 ring-white/10">
 <p className="text-sm uppercase tracking-[0.35em] text-white">Problem</p>
 <p className="mt-4 text-sm leading-7 text-gray-400">{activeProject.problem}</p>
 </div>
 <div className="rounded-[22px] bg-white/[0.03] p-6 shadow-sm ring-1 ring-white/10">
 <p className="text-sm uppercase tracking-[0.35em] text-violet-400">Solution</p>
 <p className="mt-4 text-sm leading-7 text-gray-400">{activeProject.solution}</p>
 </div>
 </div>

 <div className="grid gap-4 sm:grid-cols-2">
 {activeProject.results.map((result) => (
 <div key={result.label} className="rounded-[22px] bg-white/[0.03] p-5 text-sm shadow-sm ring-1 ring-white/10">
 <p className="text-xs uppercase tracking-[0.35em] text-gray-500">{result.label}</p>
 <p className="mt-3 text-2xl font-semibold text-white">{result.value}</p>
 </div>
 ))}
 </div>

 <div className="grid gap-4 sm:grid-cols-2">
 <div className="rounded-[22px] bg-white/[0.03] p-5 text-sm shadow-sm ring-1 ring-white/10">
 <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Technology</p>
 <div className="mt-4 flex flex-wrap gap-2">
 {activeProject.technology.map((tech) => (
 <span key={tech} className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 ring-1 ring-white/10">
 {tech}
 </span>
 ))}
 </div>
 </div>
 <div className="rounded-[22px] bg-white/[0.03] p-5 text-sm shadow-sm ring-1 ring-white/10">
 <p className="text-xs uppercase tracking-[0.35em] text-gray-500">Timeline</p>
 <p className="mt-4 text-xl font-semibold text-white">{activeProject.timeline}</p>
 </div>
 </div>

 </div>
 </div>

 <div className="mt-12 space-y-5">
 <div className="flex flex-wrap items-center justify-between gap-4">
 <p className="text-sm uppercase tracking-[0.35em] text-gray-500">Switch project</p>
 <p className="text-sm font-semibold text-white">Progress {progress}</p>
 </div>

 <div className="grid gap-4 sm:grid-cols-3">
 {featuredProjects.map((project, index) => (
 <motion.button
 key={project.title}
 type="button"
 onClick={() => setActiveIndex(index)}
 onTap={() => setActiveIndex(index)}
 whileHover={{ scale: 1.02 }}
 whileTap={{ scale: 0.98 }}
 className={`group rounded-[1.75rem] px-5 py-4 text-left transition-all duration-300 ring-1 ${index === activeIndex ? 'bg-white/10 ring-white/20 shadow-sm' : 'bg-white/[0.03] ring-white/10 hover:bg-white/10'}`}
 >
 <div className="flex items-center justify-between gap-3">
 <div>
 <p className="text-sm font-semibold text-white">{project.client}</p>
 <p className="mt-2 text-xs uppercase tracking-[0.35em] text-gray-500">{project.industry}</p>
 </div>
 <div className={`h-3 w-3 rounded-full bg-gradient-to-r ${project.accent}`} />
 </div>
 <p className="mt-4 text-sm leading-6 text-gray-400">{project.overview}</p>
 </motion.button>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}

export default FeaturedWorkSection;
