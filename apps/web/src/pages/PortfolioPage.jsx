import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy.jsx';
import { featuredCaseStudies } from '@/data/featuredCaseStudies.js';
import { Play, Sparkles } from 'lucide-react';

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);
}

function PortfolioPage() {
 const [activeCategory, setActiveCategory] = useState('All');
 const [hoveredProject, setHoveredProject] = useState(null);

 const categories = useMemo(
 () => ['All', 'SaaS & Technology', 'E-Commerce', 'Real Estate', 'Finance', 'Startups', 'AI & Automation', 'Education', 'Fashion', 'Construction', 'Law Firms'],
 []
 );

 const projects = useMemo(() => featuredCaseStudies, []);

 const filteredProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory);

 useEffect(() => {
 const powerEase = gsap.parseEase('power3.out');
 const ctx = gsap.context(() => {
 gsap.utils.toArray('.gsap-reveal').forEach((element) => {
 gsap.fromTo(
 element,
 { opacity: 0, y: 32 },
 { opacity: 1, y: 0, duration: 0.8, ease: powerEase, scrollTrigger: { trigger: element, start: 'top 90%' } }
 );
 });
 });

 return () => {
 ctx.revert();
 };
 }, []);

 return (
 <>
 <Helmet>
 <title>Portfolio | Webcore360</title>
 <meta
 name="description"
 content="Browse Webcore360 portfolio case studies with premium interactive showcases, before & after comparisons, and measurable business results."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">

 <main className="relative z-10">
 <section className="dark text-foreground relative isolate overflow-hidden px-4 pb-16 pt-28 sm:pb-24 sm:pt-32 sm:px-6 lg:px-8 lg:pt-36">
 <div className="absolute left-[-8%] top-0 h-[16rem] w-[16rem] sm:h-[28rem] sm:w-[28rem] rounded-full bg-foreground/10 blur-[100px] sm:blur-[140px]" />
 <div className="absolute right-[-10%] top-[16rem] h-[14rem] w-[14rem] sm:h-[24rem] sm:w-[24rem] rounded-full bg-violet-500/20 blur-[100px] sm:blur-[140px]" />
 <div className="mx-auto max-w-[1400px]">
 <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="relative z-10"
 >
 <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm text-foreground shadow-md ">
 <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-foreground dark:text-foreground" />
 Interactive portfolio experience
 </div>
 <h1 className="max-w-3xl font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.02em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl sm:leading-[1.05] lg:leading-[0.95]">
 Portfolio case studies built to feel premium and performance-driven.
 </h1>
 <p className="mt-4 sm:mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:text-xl">
 Discover project showcases with large previews, before & after comparisons, device mockups, and business metrics that tell the story of real growth.
 </p>
 <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row">
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <Link to="/contact-us">Contact Us</Link>
 </Button>
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-foreground/10 blur-3xl" />
 <div className="absolute right-10 top-28 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />
 <div className="overflow-hidden rounded-[1.25rem] sm:rounded-[22px] border border-border bg-card p-4 sm:p-6 shadow-md ">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_40%)]" />
 <div className="relative grid gap-4">
 <div className="rounded-[1.25rem] sm:rounded-[1.75rem] border border-border bg-muted p-4 sm:p-5">
 <p className="text-xs sm:text-sm text-foreground dark:text-foreground">Featured result</p>
 <p className="mt-2 sm:mt-3 text-2xl sm:text-3xl font-semibold text-foreground dark:text-white">+150% organic growth</p>
 <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">from targeted SEO strategies.</p>
 </div>
 <div className="rounded-[1.25rem] sm:rounded-[1.75rem] border border-border bg-muted p-4 sm:p-5 overflow-hidden">
 <p className="text-xs sm:text-sm text-violet-700 dark:text-violet-300">Project Highlights</p>
 <div className="mt-4 grid grid-cols-3 gap-2 sm:flex sm:items-center sm:gap-3">
 <div className="h-20 w-full sm:w-28 overflow-hidden rounded-3xl border border-border bg-secondary relative group shrink-0">
 <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80" alt="Desktop preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
 </div>
 <div className="h-16 w-full sm:w-14 overflow-hidden rounded-[22px] border border-border bg-secondary relative group shrink-0">
 <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=150&q=80" alt="Mobile preview" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
 </div>
 <div className="col-span-1 h-20 sm:h-auto sm:flex-1 rounded-[22px] border border-border bg-slate-950 p-2 sm:p-3 relative overflow-hidden group flex flex-col justify-between">
 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80" alt="Dashboard preview" className="absolute inset-0 w-full h-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-110" />
 <div className="relative z-10 flex flex-col justify-between h-full">
 <div className="h-1.5 w-12 sm:w-20 rounded-full bg-white/30 " />
 <div className="mt-2 h-7 sm:h-10 w-full rounded-[14px] sm:rounded-[22px] bg-white/10 border border-border/50 flex items-center justify-center px-1 sm:px-3">
 <span className="text-[9px] sm:text-[11px] text-foreground dark:text-white/90 font-medium tracking-wide truncate">Dashboard</span>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </div>
 </section>

 <section id="portfolio" className="px-4 py-16 sm:px-6 sm:py-24 md:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
 <div className="max-w-3xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Portfolio</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl lg:text-5xl">
 Case studies with premium previews and measurable results.
 </h2>
 </div>
 <div className="flex flex-nowrap gap-2 overflow-x-auto pb-2 lg:flex-wrap lg:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
 {categories.map((category) => (
 <button
 key={category}
 type="button"
 onClick={() => setActiveCategory(category)}
 className={`shrink-0 rounded-full px-4 py-2 text-sm transition-all duration-300 ${activeCategory === category ? 'bg-foreground/10 text-foreground dark:text-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white'}`}
 >
 {category}
 </button>
 ))}
 </div>
 </div>

 <div className="mt-12 space-y-12">
 {filteredProjects.length === 0 ? (
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-muted p-12 text-center text-muted-foreground"
 >
 No case studies match this category yet.
 </motion.div>
 ) : (
 filteredProjects.map((project, index) => (
 <FeaturedCaseStudy key={project.title} study={project} reverse={index % 2 === 1} />
 ))
 )}
 </div>
 </div>
 </section>
 </main>

 </div>
 </>
 );
}

export default PortfolioPage;
