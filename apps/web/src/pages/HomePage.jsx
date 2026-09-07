import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';
import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from '@/components/ui/accordion';
import {
 ArrowRight,
 BarChart3,
 BrainCircuit,
 CheckCircle2,
 ChevronRight,
 Cloud,
 Code2,
 Database,
 Globe2,
 Layers,
 Mail,
 MapPin,
 MessageCircle,
 MonitorPlay,
 PenTool,
 Phone,
 Play,
 Rocket,
 ShieldCheck,
 Sparkles,
 Star,
 Tag,
 TrendingUp,
 Users,
 Zap,
 Clock3,
 CalendarDays,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm.jsx';
import PremiumFeatureCard from '@/components/PremiumFeatureCard.jsx';
import FeaturedCaseStudy from '@/components/FeaturedCaseStudy.jsx';
import FeaturedWorkSection from '@/components/FeaturedWorkSection.jsx';
import { featuredCaseStudies } from '@/data/featuredCaseStudies.js';
import { CountUp } from '@/components/AnimationWrappers.jsx';
import FloatingShapes from '@/components/FloatingShapes.jsx';
import TestimonialsSlider from '@/components/TestimonialsSlider.jsx';
import BeforeAfter from '@/components/BeforeAfter.jsx';

function HomePage() {
 const pageRef = useRef(null);
 const [activeFilter, setActiveFilter] = useState('All');
 const [visitorCount, setVisitorCount] = useState(628);
 const [scrollProgress, setScrollProgress] = useState(0);
 const [showBackToTop, setShowBackToTop] = useState(false);

 const services = [
 {
 icon: Globe2,
 title: 'Growth Strategy',
 description: 'Positioning, messaging, and funnel design that turns attention into predictable pipeline.',
 metric: '+37% qualified leads',
 },
 {
 icon: PenTool,
 title: 'Brand Experience',
 description: 'Visual systems and digital storytelling that make ambitious companies instantly memorable.',
 metric: 'Award-ready identity',
 },
 {
 icon: MonitorPlay,
 title: 'Web & Product',
 description: 'Conversion-focused experiences engineered for speed, clarity, and premium first impressions.',
 metric: 'Lighthouse 95+',
 },
 {
 icon: BrainCircuit,
 title: 'AI Automation',
 description: 'Intelligent workflows and agentic systems that free your team to focus on growth.',
 metric: '10h saved weekly',
 },
 ];

 const stats = [
  { value: '2+', label: 'Years of execution' },
  { value: '98%', label: 'Client retention' },
  { value: '5/5', label: 'Average rating' },
];

 const heroClients = ['Northstar', 'Lumen', 'Harbor', 'Apex', 'Orbit'];

 const trustedBy = [
 'Northstar Labs',
 'Lumen Commerce',
 'Harbor Capital',
 'Apex Ventures',
 'Orbit Media',
 'Nova Pulse',
 ];

 const premiumSystems = [
 {
 icon: ArrowRight,
 title: 'Launch-ready narratives',
 description: 'Strategic messaging, pitch assets, and positioning that open gates to bigger opportunities.',
 },
 {
 icon: BrainCircuit,
 title: 'Automated growth loops',
 description: 'AI-assisted systems and workflows that keep your audience engaged without extra manual effort.',
 },
 {
 icon: Rocket,
 title: 'Revenue-tested funnels',
 description: 'Design and conversion logic calibrated around real audiences and measurable momentum.',
 },
 {
 icon: ShieldCheck,
 title: 'Premium operating rhythm',
 description: 'Clear milestones, executive alignment, and delivery you can trust at every stage.',
 },
 ];

 const techStack = [
 { name: 'React', logo: 'R', accent: 'from-foreground to-fuchsia-500', x: '10%', y: '14%' },
 { name: 'Next.js', logo: 'N', accent: 'from-white to-slate-300', x: '74%', y: '12%' },
 { name: 'Node.js', logo: 'N', accent: 'from-lime-400 to-emerald-500', x: '48%', y: '8%' },
 { name: 'MongoDB', logo: 'M', accent: 'from-emerald-400 to-emerald-500', x: '66%', y: '28%' },
 { name: 'Tailwind CSS', logo: 'T', accent: 'from-foreground to-violet-400', x: '88%', y: '74%' },
 { name: 'TypeScript', logo: 'TS', accent: 'from-fuchsia-500 to-indigo-500', x: '30%', y: '48%' },
 { name: 'Vercel', logo: 'V', accent: 'from-white to-slate-300', x: '82%', y: '18%' },
 { name: 'Figma', logo: 'F', accent: 'from-fuchsia-400 to-orange-400', x: '32%', y: '70%' },
 ];

 const industries = [
 { icon: Cloud, label: 'SaaS & Product' },
 { icon: Code2, label: 'Commerce & Marketplaces' },
 { icon: Layers, label: 'B2B growth platforms' },
 { icon: Star, label: 'Premium brand launches' },
 ];

 const projects = [
 {
 title: 'Northstar Labs',
 category: 'Branding',
 blurb: 'A refined launch narrative and growth system for an AI infrastructure brand.',
 accent: 'from-foreground/10 via-fuchsia-500/20 to-violet-500/25',
 },
 {
 title: 'Lumen Commerce',
 category: 'Web',
 blurb: 'An immersive storefront experience that increased conversion-rate by 41%.',
 accent: 'from-fuchsia-500/30 via-violet-500/20 to-fuchsia-500/25',
 },
 {
 title: 'Harbor Capital',
 category: 'Growth',
 blurb: 'A high-performance acquisition engine for a private-equity backed platform.',
 accent: 'from-emerald-500/30 via-foreground/10 to-violet-400/25',
 },
 ];

 const processSteps = [
 { title: 'Discover', description: 'We map your market, opportunity, and ambition with a strategic lens.' },
 { title: 'Design', description: 'We develop a premium digital experience tailored to your audience and goals.' },
 { title: 'Launch', description: 'We ship fast, measure early, and refine for momentum from day one.' },
 { title: 'Scale', description: 'We stay close as your growth engine, optimizing every channel and touchpoint.' },
 ];

 const awards = [
 'Clutch Top Agency 2025',
 'Design Authority Award',
 'Growth Innovator of the Year',
 ];

 const certifications = [
 'Google Partner',
 'Meta Certified',
 'HubSpot Solutions Partner',
 ];

 const team = [
 {
 name: 'Maya Chen',
 role: 'Founder & Strategy Lead',
 focus: 'Growth systems, brand voice, and GTM strategy',
 },
 {
 name: 'Noah Patel',
 role: 'Creative Director',
 focus: 'Design systems, campaign experience, and premium product UI',
 },
 {
 name: 'Avery Brooks',
 role: 'Head of Delivery',
 focus: 'Process, timelines, and operational excellence',
 },
 ];

 const values = [
 {
 title: 'Clarity',
 summary: 'We make every decision visible, measurable, and purposeful.',
 },
 {
 title: 'Craft',
 summary: 'Design and execution are elevated by detail, consistency, and premium polish.',
 },
 {
 title: 'Growth',
 summary: 'Every project is built to move your metrics, audience, and narrative forward.',
 },
 ];

 const companyTimeline = [
 { year: '2014', event: 'Agency founded to support ambitious digital brands.' },
 { year: '2018', event: 'Expanded into growth systems, automation, and product launches.' },
 { year: '2022', event: 'Launched enterprise services for premium marketing teams.' },
 { year: '2026', event: '250+ digital systems, dashboards, and campaigns delivered.' },
 ];

 const successStories = [
 {
 title: '41% higher lead conversion',
 company: 'Lumen Commerce',
 summary: 'A premium launch system for a commerce brand that improved lead quality and pipeline velocity.',
 },
 {
 title: '2.3x pipeline velocity',
 company: 'Harbor Capital',
 summary: 'Automation and design upgrades that accelerated sales cycles and improved reporting clarity.',
 },
 {
 title: 'Category-defining launch',
 company: 'Northstar Labs',
 summary: 'A high-performing website and brand system that supported a successful seed round.',
 },
 ];

 const blogHighlights = [
 { label: 'Blog', description: 'Insights on digital growth, creative systems, and premium launches.' },
 { label: 'Learning Center', description: 'Guides, frameworks, and playbooks for marketing leaders.' },
 { label: 'Resources', description: 'Templates, audits, and tools curated for ambitious teams.' },
 ];

 const caseStudies = [
 { title: 'Conversion-first product launch', detail: 'SaaS brand experience with a 32% uplift in qualified demo requests.' },
 { title: 'SEO growth program', detail: 'Authority and traffic expansion for a B2B scale-up.' },
 { title: 'Paid media ecosystem', detail: 'Google Ads and acquisition dashboards built for efficiency.' },
 ];

 const featuredWork = featuredCaseStudies.slice(0, 2);

 const partners = ['AWS', 'Google', 'Meta', 'HubSpot', 'Shopify'];

 const [calculatorMode, setCalculatorMode] = useState('pricing');
 const [monthlyAdSpend, setMonthlyAdSpend] = useState(12000);
 const [conversionRate, setConversionRate] = useState(6.8);
 const [avgLeadValue, setAvgLeadValue] = useState(1700);

 const projectedLeads = Math.max(0, Math.round((monthlyAdSpend * conversionRate) / 175));
 const projectedRevenue = projectedLeads * avgLeadValue;
 const projectedROI = Math.round(((projectedRevenue - monthlyAdSpend) / monthlyAdSpend) * 100);



 useEffect(() => {
 gsap.registerPlugin(ScrollTrigger);

 const powerEase = gsap.parseEase('power3.out');

 const ctx = gsap.context(() => {
 gsap.utils.toArray('.gsap-reveal').forEach((element) => {
 gsap.fromTo(
 element,
 { autoAlpha: 0, y: 32 },
 {
 autoAlpha: 1,
 y: 0,
 duration: 0.8,
 ease: powerEase,
 scrollTrigger: {
 trigger: element,
 start: 'top 90%',
 toggleActions: 'play none none none',
 },
 }
 );
 });

 gsap.utils.toArray('.gsap-scale').forEach((element) => {
 gsap.fromTo(
 element,
 { autoAlpha: 0, scale: 0.96 },
 {
 autoAlpha: 1,
 scale: 1,
 duration: 0.7,
 ease: powerEase,
 scrollTrigger: {
 trigger: element,
 start: 'top 92%',
 toggleActions: 'play none none none',
 },
 }
 );
 });
 }, pageRef);

 return () => {
 ctx.revert();
 };
 }, []);

 useEffect(() => {
 const handleScroll = () => {
 const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
 const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
 setScrollProgress(Math.min(100, Math.max(0, progress)));
 setShowBackToTop(window.scrollY > 700);
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 handleScroll();

 return () => {
 window.removeEventListener('scroll', handleScroll);
 };
 }, []);

 const handleNavClick = (event, href) => {
 event.preventDefault();
 const element = document.querySelector(href);
 if (element) {
 const offset = 90;
 const elementPosition = element.getBoundingClientRect().top;
 const offsetPosition = elementPosition + window.pageYOffset - offset;
 window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
 }
 };

 const filteredProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

 return (
 <>
 <Helmet>
 <title>Webcore360 | Premium digital marketing for modern brands</title>
 <meta
 name="description"
 content="Webcore360 creates premium growth systems, refined brand experiences, and high-performance digital products for ambitious companies."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">

 <button
 type="button"
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className={`fixed bottom-6 right-6 z-[60] rounded-full border border-border bg-card p-3 text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
 >
 <ChevronRight className="h-5 w-5 rotate-[-90deg]" />
 </button>

 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[28rem] w-[28rem] rounded-full bg-foreground/10 blur-[140px]" />
 <div className="absolute right-[-10%] top-[18rem] h-[24rem] w-[24rem] rounded-full bg-violet-500/20 blur-[140px]" />
 <div className="absolute bottom-0 left-1/3 h-[20rem] w-[20rem] rounded-full bg-violet-400/20 blur-[140px]" />
 </div>


 <main ref={pageRef} className="relative z-10 pt-24">
 <FloatingShapes />
 <section className="bg-background/5 text-foreground relative isolate overflow-hidden px-4 pb-28 pt-12 sm:px-6 sm:pb-32 sm:pt-20 lg:px-8 lg:pb-36 lg:pt-24">
 <div className="mx-auto flex max-w-[1400px] flex-col gap-16">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
 className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]"
 >
 <div className="relative max-w-3xl z-10">
 <div className="absolute -inset-16 -z-10 rounded-[3rem] bg-gradient-to-r from-black/80 via-black/40 to-transparent blur-2xl pointer-events-none" />
 <div className="absolute -left-12 top-10 h-24 w-24 rounded-full bg-foreground/10 blur-3xl" />
 <div className="absolute -right-10 top-28 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm text-gray-200 shadow-md backdrop-blur-sm">
 <Sparkles className="h-4 w-4 text-gray-200" />
 Premium growth systems for modern brands
 </div>
 <h1 className="max-w-4xl font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.02em] text-white sm:text-6xl lg:text-7xl">
 <span className="block overflow-hidden">
 <motion.span
 initial={{ y: '110%' }}
 animate={{ y: '0%' }}
 transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
 className="block"
 >
 Make your brand feel like a
 </motion.span>
 </span>
 <span className="block overflow-hidden">
 <motion.span
 initial={{ y: '110%' }}
 animate={{ y: '0%' }}
 transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
 className="block text-blue-500 drop-shadow-md"
 >
 category leader.
 </motion.span>
 </span>
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300 sm:text-xl">
 We blend strategy, creative, and product execution to build high-conviction digital experiences that convert, scale, and endure.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="btn-shine group rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-8 py-6 text-base font-semibold text-white shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
 <a href="#contact" onClick={(event) => handleNavClick(event, '#contact')}>
 Book a discovery session
 </a>
 </Button>
 </div>

 <div className="mt-10 flex flex-wrap gap-3 text-sm text-muted-foreground">
 {heroClients.map((brand) => (
 <span key={brand} className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-gray-300 shadow-md transition duration-300 hover:border-white/30 hover:text-white backdrop-blur-sm">
 {brand}
 </span>
 ))}
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/20 blur-3xl" />
 <div className="absolute right-6 top-8 h-24 w-24 rounded-full bg-foreground/10 blur-3xl" />
 <div className="absolute left-6 top-14 h-28 w-28 rounded-full bg-violet-400/10 blur-3xl" />
 <div className="relative overflow-hidden rounded-[22px] border border-border bg-card shadow-md dark:shadow-md">
 <img 
 src="/images/usa-office-exterior.jpg" 
 alt="WebCore360 Team" 
 className="w-full h-auto object-cover rounded-[22px]" 
 />
 </div>

 </motion.div>
 </motion.div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 lg:px-8">
 <div className="mx-auto max-w-[1400px]">
 <div className="gsap-reveal rounded-[22px] border border-border bg-card p-8 shadow-md ">
 <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
 <div>
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Premium systems</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 High-end creative systems for modern growth teams.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 We engineer every experience to feel luxurious, fast, and unmistakably strategic — from the first scroll to the last conversion.
 </p>
 </div>
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 p-6 shadow-sm">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-muted-foreground">Why it works</p>
 <div className="mt-6 space-y-4 text-sm text-muted-foreground">
 <p className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />Experience-led storytelling with tactical conversion hooks.</p>
 <p className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-400" />Operational clarity that turns execution into repeatable momentum.</p>
 <p className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-fuchsia-400" />Design systems built to scale across campaigns, digital products, and narrative touchpoints.</p>
 </div>
 </div>
 </div>
 </div>

 <div className="mt-10 grid gap-6 lg:grid-cols-4">
 {premiumSystems.map((system, index) => (
 <PremiumFeatureCard key={system.title} icon={system.icon} title={system.title} description={system.description} index={index} />
 ))}
 </div>
 </div>
 </section>

 <section id="trusted" className="px-4 py-24 sm:px-6 lg:px-8">
 <div className="mx-auto max-w-[1400px] rounded-[22px] border border-border bg-muted px-6 py-10 sm:px-8">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Trusted by</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Trusted by ambitious startups and growing businesses worldwide.
 </h2>
 <p className="mt-4 text-lg leading-8 text-muted-foreground">
 Our work powers high-growth teams across product, commerce, content, and platform innovation.
 </p>
 </div>

 <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border bg-card p-5 shadow-md">
 <motion.div
 initial={{ x: 0 }}
 animate={{ x: ['0%', '-50%'] }}
 transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
 className="flex min-w-[200%] items-center gap-4"
 >
 {[...trustedBy, ...trustedBy].map((brand, index) => (
 <div
 key={`${brand}-${index}`}
 className="flex min-w-[12rem] items-center justify-center rounded-[22px] border border-border bg-secondary px-5 py-4 text-sm font-semibold text-foreground transition duration-300 hover:scale-[1.02] hover:border-foreground/10 hover:bg-muted"
 >
 {brand}
 </div>
 ))}
 </motion.div>
 </div>
 </div>
 </section>

 <section id="testimonials" className="px-4 py-16 sm:px-6 lg:px-8">
 <div className="text-center">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Client voices</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
 Don't just take our word for it.
 </h2>
 </div>
 <TestimonialsSlider />
 </section>
 <section className="px-4 py-20 sm:px-6 lg:px-8">
 <div className="mx-auto max-w-[1400px] rounded-[22px] border border-border bg-muted px-6 py-10 sm:px-8">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Specialized focus</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium work for ambitious sectors and digital-first teams.
 </h2>
 <p className="mt-4 text-lg leading-8 text-muted-foreground">
 We help teams in SaaS, commerce, growth, and creator economies launch more persuasive brands and products.
 </p>
 </div>

 <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
 {industries.map((industry, index) => (
 <motion.div
 key={industry.label}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.45, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="group rounded-[22px] border border-border bg-card p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:bg-muted"
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/20 text-foreground dark:text-foreground shadow-md">
 <industry.icon className="h-5 w-5" />
 </div>
 <h3 className="mt-5 text-xl font-semibold text-foreground dark:text-foreground dark:text-white">{industry.label}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">Digital systems, messaging, and growth for teams that expect premium delivery.</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section className="relative px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="absolute inset-0 overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.75),rgba(15,23,42,0.98)_45%,transparent_85%)]" />
 <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(56,189,248,0.06),transparent)]" />
 {[...Array(20)].map((_, index) => (
 <div
 key={`particle-${index}`}
 className="absolute rounded-full bg-muted blur-sm"
 style={{
 width: `${Math.random() * 8 + 4}px`,
 height: `${Math.random() * 8 + 4}px`,
 top: `${Math.random() * 100}%`,
 left: `${Math.random() * 100}%`,
 opacity: 0.15,
 }}
 />
 ))}
 <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
 <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />
 </div>

 <div className="relative mx-auto max-w-[1400px]">
 <div className="mx-auto max-w-3xl text-center">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Technology stack</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 A futuristic stack designed for premium digital performance.
 </h2>
 <p className="mt-4 text-lg leading-8 text-muted-foreground">
 Animated system nodes, glowing lines, and rotating tech badges that capture the feeling of modern infrastructure and design craft.
 </p>
 </div>

 <div className="relative mt-16 overflow-hidden rounded-[3rem] border border-border bg-card p-4 sm:p-8 shadow-md ">
 {/* Mobile fallback grid for tech stack */}
 <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:hidden">
 {techStack.map((tech) => (
 <div key={tech.name} className="flex items-center gap-2 rounded-[22px] border border-border bg-secondary p-3">
 <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tech.accent} text-xs font-bold text-foreground dark:text-white`}>{tech.logo}</div>
 <span className="text-xs font-medium text-foreground truncate">{tech.name}</span>
 </div>
 ))}
 </div>

 {/* Desktop floating cards (hidden on mobile) */}
 <div className="hidden lg:block relative h-[740px]">
 <div className="absolute inset-0 bg-[length:140px_140px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_35%)]" />
 <div className="absolute inset-0 opacity-40 bg-[linear-gradient(180deg,rgba(15,23,42,0.6),transparent_25%,rgba(15,23,42,0.6))]" />

 <div className="absolute inset-0">
 {[...Array(8)].map((_, index) => (
 <div
 key={`grid-${index}`}
 className="absolute h-[1px] w-full bg-secondary"
 style={{ top: `${(index + 1) * 12}%` }}
 />
 ))}
 {[...Array(8)].map((_, index) => (
 <div
 key={`grid-col-${index}`}
 className="absolute w-[1px] h-full bg-secondary"
 style={{ left: `${(index + 1) * 10}%` }}
 />
 ))}
 </div>

 <div className="absolute inset-0">
 {techStack.map((tech, index) => (
 <motion.div
 key={tech.name}
 initial={{ opacity: 0, y: 20, rotateY: 25 }}
 animate={{ opacity: 1, y: 0, rotateY: 0 }}
 transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
 className="absolute"
 style={{
 left: tech.x,
 top: tech.y,
 }}
 >
 <motion.div
 whileHover={{ y: -10, rotateY: 10, scale: 1.03 }}
 transition={{ type: 'spring', stiffness: 220, damping: 18 }}
 className="relative flex min-w-[11rem] max-w-[13rem] flex-col gap-3 rounded-[1.75rem] border border-border bg-card/90 p-5 text-left shadow-md "
 >
 <div className={`absolute inset-0 rounded-[1.75rem] bg-gradient-to-br ${tech.accent} opacity-0 transition duration-500 group-hover:opacity-40`} />
 <div className="relative z-10 flex items-center justify-between gap-3">
 <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary text-xl font-semibold text-foreground dark:text-foreground dark:text-white shadow-md ">
 {tech.logo}
 </div>
 <div className="rounded-full border border-border bg-secondary px-3 py-1 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground shadow-md">
 {tech.name}
 </div>
 </div>
 <div className="relative z-10 overflow-hidden rounded-[22px] border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
 <span className="block text-xs uppercase tracking-[0.35em] text-muted-foreground">Animated</span>
 <span className="mt-1 block font-semibold text-foreground dark:text-foreground dark:text-white">Floating system node</span>
 </div>
 <div className="relative z-10 flex items-center gap-2 text-xs text-muted-foreground">
 <span className="h-2 w-2 rounded-full bg-foreground" />
 Connected to platform mesh
 </div>
 </motion.div>
 </motion.div>
 ))}

 <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none" stroke="rgba(56,189,248,0.2)" strokeWidth="0.25">
 <path d="M12 42C26 28 40 14 58 18C72 22 84 42 94 48" />
 <path d="M8 76C24 62 38 54 50 60C66 68 78 74 92 62" />
 <path d="M18 12C26 30 34 44 54 46C70 48 76 34 86 22" />
 <path d="M26 86C36 74 48 66 62 68C80 72 88 86 96 84" />
 <path d="M14 54C22 44 34 36 48 38C60 40 74 52 86 58" />
 </svg>
 </div>

 <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
 <div className="relative h-40 w-40 rounded-full border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 shadow-md">
 <div className="absolute inset-0 rounded-full border border-border" />
 <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_65%)] animate-[spin_20s_linear_infinite]" />
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section id="services" className="section-glow px-4 py-32 sm:px-6 sm:py-36 lg:px-8 lg:py-40">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Services</p>
 <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-5xl lg:text-6xl">
 Everything needed to look premium and grow fast.
 </h2>
 <p className="mt-6 text-lg leading-8 text-muted-foreground">
 From positioning to product launches, our team shapes high-impact marketing systems with a meticulous point of view.
 </p>
 </motion.div>

 {/* Bento Box Grid — asymmetric layout */}
 <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
 {/* Featured service — spans 2 columns */}
 <motion.article
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 whileHover={{ y: -6 }}
 className="group relative overflow-hidden rounded-[2rem] md:col-span-2 lg:col-span-2 glass p-10 sm:p-12 transition-all duration-500 hover:border-foreground/10"
 >
 <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br from-foreground/10 via-violet-500/5 to-transparent blur-3xl" />
 <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gradient-to-tr from-violet-500/10 to-transparent blur-3xl" />
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />

 <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
 <div className="max-w-xl">
 <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/10 to-violet-500/20 border border-foreground/10 text-foreground shadow-md">
 {React.createElement(services[0].icon, { className: 'h-7 w-7' })}
 </div>
 <h3 className="mt-8 text-3xl font-bold text-foreground dark:text-white">{services[0].title}</h3>
 <p className="mt-4 text-lg leading-8 text-muted-foreground">{services[0].description}</p>
 </div>
 <div className="flex items-center gap-4">
 <span className="rounded-full bg-foreground/10 px-5 py-2 text-sm font-semibold text-foreground border border-foreground/10">{services[0].metric}</span>
 </div>
 </div>
 </motion.article>

 {/* Remaining services — each 1 column */}
 {services.slice(1).map((service, index) => (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, delay: (index + 1) * 0.08, ease: [0.16, 1, 0.3, 1] }}
 whileHover={{ y: -6 }}
 className="group relative overflow-hidden rounded-[2rem] glass p-8 transition-all duration-500 hover:border-foreground/10"
 >
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition duration-700 group-hover:opacity-100" />
 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-foreground/10 to-violet-500/20 border border-foreground/10 text-foreground shadow-md">
 <service.icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-bold text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
 <span className="text-foreground font-medium">{service.metric}</span>
 </div>
 </motion.article>
 ))}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="relative overflow-hidden rounded-[22px] border border-border bg-muted p-8 shadow-md dark:shadow-md"
 >
 <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-foreground/10 blur-3xl" />
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Why choose us</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 A calm, senior-led partner for ambitious growth.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 We merge strategic clarity with polished execution so your brand feels confident at every touchpoint.
 </p>
 <div className="mt-8 space-y-4">
 {[
 'Senior strategists, designers, and developers in one team',
 'Transparent process with clear milestones and reporting',
 'Built for premium but still measurable and efficient',
 ].map((item) => (
 <div key={item} className="flex items-start gap-3 rounded-[22px] border border-border bg-secondary p-4 text-sm text-muted-foreground shadow-md">
 <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-foreground dark:text-foreground" />
 <span>{item}</span>
 </div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="grid gap-4 sm:grid-cols-2"
 >
 {[
 { icon: Rocket, label: 'Launch-ready systems', value: '3-week MVP sprints' },
 { icon: Zap, label: 'Fast iteration', value: 'Weekly optimization cycles' },
 { icon: BarChart3, label: 'Performance clarity', value: 'Live reporting dashboards' },
 { icon: ShieldCheck, label: 'Low-friction collaboration', value: 'Hands-on senior support' },
 ].map((item) => (
 <div key={item.label} className="rounded-[22px] border border-border bg-muted p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-foreground/10 hover:bg-muted">
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/20 text-foreground dark:text-foreground shadow-md">
 <item.icon className="h-5 w-5" />
 </div>
 <p className="mt-5 text-lg font-semibold text-foreground dark:text-foreground dark:text-white">{item.label}</p>
 <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
 </div>
 ))}
 </motion.div>
 </div>
 </section>

 <FeaturedWorkSection />
 <BeforeAfter />

 <section id="process" className="section-glow px-4 py-32 sm:px-6 sm:py-36 lg:px-8 lg:py-40">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Process</p>
 <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-5xl lg:text-6xl">
 A calm, clear delivery experience from strategy to scale.
 </h2>
 </motion.div>

 <div className="mt-16 max-w-4xl timeline-line space-y-12 pl-6 md:pl-0 md:space-y-16">
 {processSteps.map((step, index) => (
 <motion.div
 key={step.title}
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="relative md:pl-16 pl-10"
 >
 <div className="absolute left-[-23px] top-1 md:left-4 md:top-2 flex h-8 w-8 items-center justify-center rounded-full bg-background border border-foreground/10 shadow-md">
 <div className="h-2.5 w-2.5 rounded-full bg-foreground" />
 </div>
 <div className="glass rounded-[1.75rem] p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-foreground/10">
 <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium uppercase tracking-[0.3em] text-foreground dark:text-foreground">Phase 0{index + 1}</div>
 <h3 className="mt-4 text-2xl font-semibold text-foreground dark:text-foreground dark:text-white">{step.title}</h3>
 <p className="mt-3 text-base leading-7 text-muted-foreground">{step.description}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section id="enterprise" className="section-glow bg-muted/60 dark:bg-[#040b1d] px-4 py-32 sm:px-6 sm:py-36 lg:px-8 lg:py-40">
 <div className="mx-auto max-w-[1400px]">
 <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
 {/* Left column: sticky title */}
 <div className="lg:sticky lg:top-32 lg:self-start">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Enterprise hub</p>
 <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground dark:text-white sm:text-5xl lg:text-6xl">
 The command center for premium digital growth.
 </h2>
 <p className="mt-6 text-lg leading-8 text-muted-foreground">
 Awards, team stories, calculators, dashboards, and audit tools designed for growth leaders.
 </p>
 </div>

 {/* Right column: scrolling cards */}
 <div className="space-y-6">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-[2rem] p-8"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Awards</p>
 <div className="mt-6 space-y-3 text-sm text-muted-foreground">
 {awards.map((award) => (
 <p key={award} className="flex items-start gap-3">
 <span className="mt-1 h-2.5 w-2.5 rounded-full bg-foreground" />
 {award}
 </p>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-[2rem] p-8"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Certifications</p>
 <div className="mt-6 space-y-3 text-sm text-muted-foreground">
 {certifications.map((cert) => (
 <p key={cert} className="flex items-start gap-3">
 <span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-300" />
 {cert}
 </p>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
 className="glass rounded-[2rem] p-8"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Technology partners</p>
 <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
 {partners.map((partner) => (
 <span key={partner} className="rounded-full border border-border bg-card px-4 py-2 transition-all duration-300 hover:border-foreground/10 hover:text-white">{partner}</span>
 ))}
 </div>
 </motion.div>
 </div>
 </div>

 <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-[0.95fr_1.05fr]">
 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Meet our team</p>
 <div className="mt-8 grid gap-8">
 {team.map((member) => (
 <div key={member.name} className="rounded-3xl border border-border bg-card p-5">
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-white">{member.name}</p>
 <p className="mt-2 text-sm uppercase tracking-[0.3em] text-muted-foreground">{member.role}</p>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{member.focus}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Core values</p>
 <div className="mt-8 grid gap-8">
 {values.map((value) => (
 <div key={value.title} className="rounded-3xl border border-border bg-card p-5">
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-white">{value.title}</p>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{value.summary}</p>
 </div>
 ))}
 </div>
 </div>
 </div>

 <div className="grid gap-6 lg:grid-cols-3">
 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Company timeline</p>
 <div className="mt-8 space-y-8">
 {companyTimeline.map((item) => (
 <div key={item.year} className="flex items-start gap-4 text-muted-foreground">
 <div className="mt-1 h-9 w-9 rounded-3xl bg-foreground/10 text-center text-sm font-semibold text-foreground dark:text-foreground ring-1 ring-border">{item.year}</div>
 <p>{item.event}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Client success stories</p>
 <div className="mt-8 space-y-8">
 {successStories.map((story) => (
 <div key={story.title} className="rounded-3xl border border-border bg-card p-5">
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-white">{story.title}</p>
 <p className="mt-2 text-sm leading-7 text-muted-foreground">{story.summary}</p>
 <p className="mt-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">{story.company}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Free downloads</p>
 <div className="mt-8 space-y-8 text-sm text-muted-foreground">
 <button className="w-full rounded-3xl border border-border bg-card px-4 py-4 text-left transition hover:border-foreground/10 hover:bg-secondary">Website Audit Guide</button>
 <button className="w-full rounded-3xl border border-border bg-card px-4 py-4 text-left transition hover:border-foreground/10 hover:bg-secondary">SEO Growth Checklist</button>
 <button className="w-full rounded-3xl border border-border bg-card px-4 py-4 text-left transition hover:border-foreground/10 hover:bg-secondary">Strategy Brief Template</button>
 </div>
 </div>
 </div>

 <div className="grid gap-6 lg:grid-cols-2">
 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Service comparison</p>
 <div className="mt-6 space-y-4 text-sm text-muted-foreground">
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Website process timeline</p>
 <p className="mt-2">From discovery to launch, every milestone is mapped and measured.</p>
 </div>
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Before & after gallery</p>
 <p className="mt-2">Our work is designed to be compelling, clear, and easy for stakeholders to approve.</p>
 </div>
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Client dashboard preview</p>
 <p className="mt-2">Live reporting and monthly report dashboards keep everyone aligned.</p>
 </div>
 </div>
 </div>

 <div className="rounded-[22px] border border-border bg-secondary p-8 shadow-md ">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Learning center</p>
 <div className="mt-6 space-y-4 text-sm text-muted-foreground">
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Blog</p>
 <p className="mt-2">Smart insights on branding, growth, and UX systems.</p>
 </div>
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Resources</p>
 <p className="mt-2">Tools, audits, and premium guides for growth operators.</p>
 </div>
 <div className="rounded-3xl border border-border bg-card p-5">
 <p className="font-semibold text-foreground dark:text-foreground dark:text-white">Webinar section</p>
 <p className="mt-2">On-demand sessions and event content for teams that want to move faster.</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

  <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-violet-500/5 pointer-events-none" />
    <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-border/50 bg-card/40 backdrop-blur-sm p-10 sm:p-16 shadow-2xl relative overflow-hidden text-center group">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to scale your digital presence?</h2>
        <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Join the forward-thinking brands that trust Webcore360 to deliver premium marketing, design, and technical excellence.</p>
        <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 text-white border-0 hover:opacity-90 px-10 py-7 text-lg shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <a href="#contact">Start Your Project</a>
        </Button>
      </div>
    </div>
  </section>

 <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),transparent_44%)]" />
 <div className="pointer-events-none absolute right-[-4rem] top-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
 <div className="pointer-events-none absolute left-[-5rem] bottom-10 h-72 w-72 rounded-full bg-foreground/10 blur-3xl" />

 <div className="relative mx-auto max-w-[1400px]">
 <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">

 {/* Left: Rich Info Panel */}
 <motion.div
 initial={{ opacity: 0, y: 28 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="flex flex-col gap-8"
 >
 <div>
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Contact Us</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl leading-tight">
 Let's build something <span className="text-foreground">extraordinary</span> together.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 From first idea to final launch, our team is with you every step. Get a tailored proposal, strategy session, or simply a conversation — we're ready.
 </p>
 </div>

 {/* Stats Row */}
 <div className="grid grid-cols-3 gap-4">
 {[
 { value: '25+', label: 'Projects Delivered' },
 { value: '98%', label: 'Client Satisfaction' },
 { value: '2+', label: 'Years of Excellence' },
 ].map((stat) => (
 <div key={stat.label} className="rounded-[22px] border border-border bg-card p-5 text-center shadow-md">
 <p className="text-3xl font-bold text-foreground">{stat.value}</p>
 <p className="mt-1 text-xs text-muted-foreground leading-5">{stat.label}</p>
 </div>
 ))}
 </div>

 {/* Contact Details */}
 <div className="grid gap-4 sm:grid-cols-2">
 <a href="mailto:info@webcore360.com" className="group flex items-start gap-4 rounded-[22px] border border-border bg-secondary p-5 transition hover:border-foreground/10 hover:bg-card">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
 <Mail className="h-5 w-5" />
 </div>
 <div>
 <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</p>
 <p className="mt-1 text-sm font-semibold text-foreground dark:text-foreground dark:text-white group-hover:text-foreground transition-colors">info@webcore360.com</p>
 <p className="mt-1 text-xs text-muted-foreground">Reply within 1 business day</p>
 </div>
 </a>
 <a href="tel:+16099824542" className="group flex items-start gap-4 rounded-[22px] border border-border bg-secondary p-5 transition hover:border-foreground/10 hover:bg-card">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
 <Phone className="h-5 w-5" />
 </div>
 <div>
 <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Phone</p>
 <p className="mt-1 text-sm font-semibold text-foreground dark:text-foreground dark:text-white group-hover:text-foreground transition-colors">+1 (609) 982-4542</p>
 <p className="mt-1 text-xs text-muted-foreground">Mon–Fri · 9am–6pm ET</p>
 </div>
 </a>
 <a href="https://wa.me/16099824542" target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-[22px] border border-border bg-secondary p-5 transition hover:border-foreground/10 hover:bg-card">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
 <MessageCircle className="h-5 w-5" />
 </div>
 <div>
 <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">WhatsApp</p>
 <p className="mt-1 text-sm font-semibold text-foreground dark:text-foreground dark:text-white group-hover:text-foreground transition-colors">Message us now</p>
 <p className="mt-1 text-xs text-muted-foreground">Quick questions & scope checks</p>
 </div>
 </a>
 <a href="https://calendly.com/webcore360/strategy" target="_blank" rel="noreferrer" className="group flex items-start gap-4 rounded-[22px] border border-border bg-secondary p-5 transition hover:border-foreground/10 hover:bg-card">
 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-foreground/10 text-foreground">
 <CalendarDays className="h-5 w-5" />
 </div>
 <div>
 <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Calendly</p>
 <p className="mt-1 text-sm font-semibold text-foreground dark:text-foreground dark:text-white group-hover:text-foreground transition-colors">Start a project</p>
 <p className="mt-1 text-xs text-muted-foreground">Pick a time that works for you</p>
 </div>
 </a>
 </div>

 {/* Trust Badges */}
 <div className="rounded-[22px] border border-border bg-card p-6 shadow-md">
 <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Why brands choose us</p>
 <div className="grid gap-3">
 {[
 { icon: '⚡', title: 'Fast Turnaround', desc: 'Most projects kick off within 48 hours of signing.' },
 { icon: '🔒', title: 'NDA & Confidentiality', desc: 'Your ideas and data are always fully protected.' },
 { icon: '🏆', title: 'Award-Winning Work', desc: 'Recognized for excellence in design and digital strategy.' },
 { icon: '🔄', title: 'Unlimited Revisions', desc: 'We iterate until you\'re 100% satisfied with the result.' },
 ].map((item) => (
 <div key={item.title} className="flex items-start gap-3">
 <span className="text-lg leading-none mt-0.5">{item.icon}</span>
 <div>
 <p className="text-sm font-semibold text-foreground dark:text-foreground dark:text-white">{item.title}</p>
 <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </motion.div>

 {/* Right: Contact CTA Image */}
 <motion.div
 initial={{ opacity: 0, y: 28 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[2.5rem] border border-border bg-card shadow-md overflow-hidden relative min-h-[450px]"
 >
 <img 
 src="/images/usa-office.jpg" 
 alt="WebCore360 Team" 
 className="absolute inset-0 h-full w-full object-cover"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 sm:p-10">
 <h3 className="text-3xl font-semibold text-white mb-4">Ready to build something extraordinary?</h3>
 <p className="text-gray-200 mb-6 max-w-sm">Bring us your vision and we'll deliver the premium digital experience your brand deserves.</p>
 <Button asChild size="lg" className="self-start rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-8 text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="/contact-us">Start a Project</a>
 </Button>
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 </main>

 </div>
 </>
 );
}

export default HomePage;
