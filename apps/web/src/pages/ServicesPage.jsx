import React, { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Button } from '@/components/ui/button';
import {
 ArrowRight,
 BadgeCheck,
 BadgeDollarSign,
 BarChart3,
 Bot,
 BrainCircuit,
 CheckCircle2,
 ChevronRight,
 Code2,
 Compass,
 Database,
 FileText,
 Film,
 Globe2,
 Layers,
 MonitorPlay,
 Palette,
 PenTool,
 Play,
 Rocket,
 Search,
 ShieldCheck,
 ShoppingCart,
 Smartphone,
 Sparkles,
 TrendingUp,
 Users,
 Zap,
} from 'lucide-react';

if (typeof window !== 'undefined') {
 gsap.registerPlugin(ScrollTrigger);
}

function ServicesPage() {
 const [activeComparison, setActiveComparison] = useState('growth');
 const [isYearly, setIsYearly] = useState(true);
 const [scrollProgress, setScrollProgress] = useState(0);
 const [showBackToTop, setShowBackToTop] = useState(false);
 const [expandedService, setExpandedService] = useState(null);

 const [activePortfolioCategory, setActivePortfolioCategory] = useState('All');
 const [hoveredProject, setHoveredProject] = useState(null);

 const services = useMemo(
 () => [
 {
 title: 'Website Development',
 slug: 'technical-solutions',
 description: 'High-converting digital experiences designed to feel premium, fast, and effortless.',
 icon: MonitorPlay,
 features: ['Performance-first architecture', 'Responsive interface', 'SEO-ready build'],
 stack: ['React', 'Tailwind', 'Headless CMS', 'Vite'],
 timeline: '8–12 weeks',
 startingPrice: '$12,000+',
 process: ['Discovery', 'Blueprint', 'Design', 'Build', 'Launch'],
 benefits: ['Faster time to value', 'Premium brand recall', 'Optimized conversions'],
 },
 {
 title: 'Custom Web Applications',
 slug: 'technical-solutions',
 description: 'Bespoke web platforms designed for complex workflows, user data, and modern growth engines.',
 icon: Rocket,
 features: ['Custom UI/UX', 'API integration', 'Scalable architecture'],
 stack: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
 timeline: '12–16 weeks',
 startingPrice: '$18,000+',
 process: ['Planning', 'Prototyping', 'Development', 'QA', 'Launch'],
 benefits: ['Unique product advantage', 'Higher efficiency', 'Built to scale'],
 },
 {
 title: 'React Development',
 slug: 'technical-solutions',
 description: 'Polished React experiences built for speed, modularity, and delightful interactions.',
 icon: Code2,
 features: ['Component systems', 'State management', 'Animation-ready UI'],
 stack: ['React', 'Zustand', 'TypeScript', 'Tailwind'],
 timeline: '6–10 weeks',
 startingPrice: '$10,000+',
 process: ['UI strategy', 'Component library', 'Performance tuning', 'Launch'],
 benefits: ['Reusable codebase', 'Fast iteration', 'Premium UX'],
 },
 {
 title: 'Next.js Development',
 slug: 'technical-solutions',
 description: 'Blazing-fast, SEO-friendly sites and apps built with Next.js and modern edge-ready tooling.',
 icon: Layers,
 features: ['SSR/SSG', 'Image optimization', 'Static & dynamic pages'],
 stack: ['Next.js', 'Vercel', 'Prisma', 'Tailwind'],
 timeline: '8–14 weeks',
 startingPrice: '$14,000+',
 process: ['Page strategy', 'Blueprint', 'Build', 'Launch'],
 benefits: ['Search-ready reach', 'Modern performance', 'Flexible growth platform'],
 },
 {
 title: 'Node.js Development',
 slug: 'technical-solutions',
 description: 'Reliable backend systems that power fast APIs, integrations, and scalable service layers.',
 icon: Database,
 features: ['API design', 'Database modeling', 'Secure services'],
 stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
 timeline: '8–12 weeks',
 startingPrice: '$13,500+',
 process: ['API planning', 'Schema design', 'Implementation', 'Deployment'],
 benefits: ['Robust backend', 'Reliable uptime', 'Future-proofed scale'],
 },
 {
 title: 'WordPress',
 slug: 'technical-solutions',
 description: 'Flexible WordPress builds that balance polished design with strong content management.',
 icon: Globe2,
 features: ['Custom themes', 'CMS workflows', 'Launch-ready content'],
 stack: ['WordPress', 'PHP', 'Elementor', 'SEO'],
 timeline: '6–10 weeks',
 startingPrice: '$9,500+',
 process: ['Structure', 'Design', 'Build', 'Launch'],
 benefits: ['Easy editing', 'Content flexibility', 'Brand consistency'],
 },
 {
 title: 'Shopify',
 slug: 'technical-solutions',
 description: 'Conversion-first Shopify storefronts with premium merchandising and checkout experiences.',
 icon: ShoppingCart,
 features: ['Custom storefront', 'Payment flow', 'Growth-ready setup'],
 stack: ['Shopify', 'Liquid', 'JavaScript', 'Headless commerce'],
 timeline: '6–10 weeks',
 startingPrice: '$11,000+',
 process: ['Catalog strategy', 'Design', 'Build', 'Optimize'],
 benefits: ['Higher average order value', 'Faster browsing', 'Reliable commerce foundation'],
 },
 {
 title: 'SEO',
 slug: 'seo',
 description: 'Search visibility that compounds, with technical precision and strategic content planning.',
 icon: Search,
 features: ['Technical audits', 'Keyword positioning', 'Authority growth'],
 stack: ['SEO audit tools', 'Content strategy', 'Analytics'],
 timeline: 'Ongoing',
 startingPrice: '$4,500/mo',
 process: ['Audit', 'Roadmap', 'Execution', 'Review'],
 benefits: ['More qualified traffic', 'Stronger organic presence', 'Real search momentum'],
 },
 {
 title: 'Google Ads',
 slug: 'google-ads',
 description: 'Paid acquisition systems built to capture intent and scale measurable ROI.',
 icon: BadgeDollarSign,
 features: ['Search campaigns', 'Landing page alignment', 'Conversion tracking'],
 stack: ['Google Ads', 'Analytics', 'Tag Manager'],
 timeline: 'Ongoing',
 startingPrice: '$3,000/mo',
 process: ['Setup', 'Launch', 'Optimize', 'Scale'],
 benefits: ['Faster demand capture', 'Measurable ROI', 'Data-driven growth'],
 },
 {
 title: 'Meta Ads',
 slug: 'strategic-marketing',
 description: 'Crisp creative and data-driven targeting for brands that want better paid social performance.',
 icon: Sparkles,
 features: ['Creative testing', 'Audience strategy', 'Lookalike expansion'],
 stack: ['Meta Ads', 'Analytics', 'Creative systems'],
 timeline: 'Ongoing',
 startingPrice: '$3,000/mo',
 process: ['Creative sprint', 'Launch', 'Optimize', 'Scale'],
 benefits: ['Higher engagement', 'Better targeting', 'Improved campaign efficiency'],
 },
 {
 title: 'Brand Identity',
 slug: 'creative-design',
 description: 'Distinctive positioning and design systems that make ambitious brands instantly memorable.',
 icon: Palette,
 features: ['Visual systems', 'Messaging', 'Brand guidelines'],
 stack: ['Design systems', 'Brand strategy', 'Creative direction'],
 timeline: '6–8 weeks',
 startingPrice: '$9,000+',
 process: ['Positioning', 'Design system', 'Brand launch'],
 benefits: ['Memorable brand equity', 'Clear story', 'Standout market presence'],
 },
 {
 title: 'Graphic Design',
 slug: 'creative-design',
 description: 'Refined collateral and visual assets that elevate every customer touchpoint.',
 icon: Compass,
 features: ['Campaign creative', 'Presentations', 'Digital assets'],
 stack: ['Creative suites', 'Brand systems', 'Motion-ready design'],
 timeline: '4–6 weeks',
 startingPrice: '$6,200+',
 process: ['Concept', 'Design', 'Review', 'Deliver'],
 benefits: ['Consistency across channels', 'Premium visual polish', 'Stronger storytelling'],
 },
 {
 title: 'Logo Design',
 slug: 'creative-design',
 description: 'Brand marks and systems that feel modern, confident, and market-ready.',
 icon: PenTool,
 features: ['Concept exploration', 'Logo systems', 'Usage guidelines'],
 stack: ['Identity design', 'Sketch systems', 'Brand language'],
 timeline: '3–5 weeks',
 startingPrice: '$4,500+',
 process: ['Research', 'Sketch', 'Refine', 'Deliver'],
 benefits: ['Instant recognition', 'Versatile mark', 'Strategic clarity'],
 },
 {
 title: 'Content Writing',
 slug: 'strategic-marketing',
 description: 'Sharp narratives and conversion-focused copy that bring clarity to every channel.',
 icon: FileText,
 features: ['Landing pages', 'Email flows', 'Thought leadership'],
 stack: ['Content strategy', 'SEO copy', 'Story frameworks'],
 timeline: '3–5 weeks',
 startingPrice: '$5,000+',
 process: ['Audience mapping', 'Copy strategy', 'Draft', 'Refine'],
 benefits: ['Clear brand voice', 'Higher engagement', 'Better conversion'],
 },
 {
 title: 'UI UX Design',
 slug: 'creative-design',
 description: 'Intuitive interfaces and product flows crafted for clarity, trust, and ease of use.',
 icon: MonitorPlay,
 features: ['User journeys', 'Interface design', 'Prototype testing'],
 stack: ['Figma', 'Design systems', 'Interaction design'],
 timeline: '6–9 weeks',
 startingPrice: '$10,000+',
 process: ['Research', 'Wireframes', 'Visual design', 'Testing'],
 benefits: ['Stronger usability', 'Higher conversion', 'Better product delight'],
 },
 {
 title: 'Maintenance',
 slug: 'technical-solutions',
 description: 'Ongoing support and updates to keep your digital experience secure, stable, and modern.',
 icon: ShieldCheck,
 features: ['Security updates', 'Performance tuning', 'Content changes'],
 stack: ['Monitoring', 'Analytics', 'Backups'],
 timeline: 'Ongoing',
 startingPrice: '$1,200/mo',
 process: ['Review', 'Update', 'Optimize', 'Report'],
 benefits: ['Peace of mind', 'Reliable uptime', 'Continual improvement'],
 },
 {
 title: 'API Development',
 slug: 'technical-solutions',
 description: 'Scalable APIs and integrations built for reliable data flow across platforms.',
 icon: Database,
 features: ['API design', 'Third-party connections', 'Data orchestration'],
 stack: ['Node.js', 'Express', 'PostgreSQL', 'REST/GraphQL'],
 timeline: '8–12 weeks',
 startingPrice: '$13,000+',
 process: ['API planning', 'Development', 'Testing', 'Deploy'],
 benefits: ['Faster integrations', 'Stronger platform control', 'Data consistency'],
 },
 {
 title: 'Automation',
 slug: 'automation-services',
 description: 'Systems that remove manual work and keep your business moving faster with less friction.',
 icon: Bot,
 features: ['Workflow automation', 'Task orchestration', 'Intelligent triggers'],
 stack: ['Automation tools', 'APIs', 'Custom scripts'],
 timeline: '6–10 weeks',
 startingPrice: '$9,500+',
 process: ['Audit', 'Design', 'Build', 'Optimize'],
 benefits: ['Operational speed', 'Reduced errors', 'Scalable delivery'],
 },
 {
 title: 'CRM Solutions',
 slug: 'automation-services',
 description: 'Customer relationship systems designed to keep your pipeline, service, and growth aligned.',
 icon: Users,
 features: ['Pipeline design', 'Automation rules', 'Contact segmentation'],
 stack: ['CRM platforms', 'Automation', 'Reporting'],
 timeline: '6–9 weeks',
 startingPrice: '$8,500+',
 process: ['Needs mapping', 'Setup', 'Automation', 'Training'],
 benefits: ['Stronger follow-up', 'Better customer visibility', 'Faster conversion'],
 },
 ],
 []
 );

 const portfolioCategories = [
 'All',
 'SaaS & Technology',
 'E-Commerce',
 'Real Estate',
 'Finance',
 'Startups',
 'Education',
 'Fashion',
 'Construction',
 'Law Firms',
 'AI & Automation',
 ];

 const portfolioProjects = useMemo(
 () => [
 {
 title: 'Nexus SaaS Growth Platform',
 category: 'SaaS & Technology',
 role: 'Web Development & Growth system for a B2B SaaS brand.',
 technologies: ['Next.js', 'HubSpot', 'Tailwind', 'Figma'],
 timeline: '16 weeks',
 goals: 'Drive qualified demo requests, grow organic traffic, and build a high-performance web platform.',
 results: { traffic: '+84%', conversion: '+41%', revenue: '+127%' },
 image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
 beforeImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
 afterImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
 website: 'https://nexuslabs.example',
 caseStudy: '/services/seo',
 },
 {
 title: 'Meridian Brand Identity System',
 category: 'Finance',
 role: 'Premium Brand Identity & Graphic Designing for a venture platform.',
 technologies: ['React', 'Framer Motion', 'GraphQL', 'Sanity'],
 timeline: '12 weeks',
 goals: 'Communicate credibility, attract qualified deal flow, and build high-end graphic assets.',
 results: { traffic: '+68%', conversion: '+31%', revenue: '+44%' },
 image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80',
 beforeImage: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80',
 afterImage: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=800&q=80',
 website: 'https://meridianventures.example',
 caseStudy: '/services/creative-design',
 },
 {
 title: 'Apex Content & Copywriting Suite',
 category: 'E-Commerce',
 role: 'Content Writing & SEO storytelling engine.',
 technologies: ['Shopify', 'Klaviyo', 'Contentful', 'Semrush'],
 timeline: '10 weeks',
 goals: 'Establish brand voice, scale high-converting copy, and drive search authority.',
 results: { traffic: '+55%', conversion: '+33%', revenue: '+89%' },
 image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1200&q=80',
 beforeImage: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
 afterImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80',
 website: 'https://apexcommerce.example',
 caseStudy: '/services/google-ads',
 },
 ],
 []
 );

 const filteredPortfolioProjects = portfolioProjects.filter((project) =>
 activePortfolioCategory === 'All' ? true : project.category === activePortfolioCategory
 );

 const processSteps = [
 { title: 'Discovery', description: 'We align on goals, audience, and the stories your brand needs to tell.' },
 { title: 'Planning', description: 'We build a strategy rooted in clarity, speed, and measurable impact.' },
 { title: 'Design', description: 'We shape premium visual systems and product narratives to stand out.' },
 { title: 'Development', description: 'We build with performance, scalability, and polished execution in mind.' },
 { title: 'Testing', description: 'We tighten every detail before launch so the experience feels effortless.' },
 { title: 'Launch', description: 'We ship confidently and support momentum from day one.' },
 { title: 'Optimization', description: 'We continue improving the experience to grow performance over time.' },
 ];

 const pricingPlans = [
 {
 name: 'Launch',
 monthly: 4500,
 yearly: 3800,
 description: 'For ambitious brands preparing a premium first impression.',
 features: ['Flagship site or funnel', 'Conversion-focused design', 'Analytics setup'],
 popular: false,
 },
 {
 name: 'Scale',
 monthly: 8500,
 yearly: 7200,
 description: 'For teams that want strategy, creative, and ongoing growth support.',
 features: ['Everything in Launch', 'Growth strategy sprint', 'Content & automation'],
 popular: true,
 },
 {
 name: 'Signal',
 monthly: 14000,
 yearly: 11800,
 description: 'For category-defining companies building a full growth engine.',
 features: ['Dedicated senior team', 'Advanced automation', 'Quarterly roadmap'],
 popular: false,
 },
 ];

 const comparisonPanels = {
 growth: {
 title: 'Growth-led approach',
 copy: 'We connect brand, product, and acquisition into one elegant system that compounds over time.',
 stats: ['Strategy + execution', 'Measured performance', 'High-retention teams'],
 },
 speed: {
 title: 'Speed without compromise',
 copy: 'Fast-moving teams need launch confidence and production quality that still feels premium.',
 stats: ['Rapid sprints', 'Senior oversight', 'Clear delivery cadence'],
 },
 clarity: {
 title: 'Clarity at every stage',
 copy: 'Every decision is designed to be easy to understand, easy to trust, and easy to scale.',
 stats: ['Transparent process', 'Actionable reporting', 'Aligned stakeholders'],
 },
 };

 useEffect(() => {
 const handleScroll = () => {
 const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
 const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
 setScrollProgress(Math.min(100, Math.max(0, progress)));
 setShowBackToTop(window.scrollY > 700);
 };

 window.addEventListener('scroll', handleScroll, { passive: true });
 handleScroll();

 const powerEase = gsap.parseEase('power3.out');

 const ctx = gsap.context(() => {
 gsap.utils.toArray('.gsap-reveal').forEach((element) => {
 gsap.fromTo(
 element,
 { opacity: 0, y: 42 },
 {
 opacity: 1,
 y: 0,
 duration: 0.9,
 ease: powerEase,
 scrollTrigger: { trigger: element, start: 'top 85%' },
 }
 );
 });

 gsap.utils.toArray('.gsap-stagger').forEach((element) => {
 gsap.fromTo(
 element,
 { opacity: 0, y: 24 },
 {
 opacity: 1,
 y: 0,
 duration: 0.8,
 ease: powerEase,
 stagger: 0.07,
 scrollTrigger: { trigger: element, start: 'top 92%' },
 }
 );
 });
 });

 return () => {
 window.removeEventListener('scroll', handleScroll);
 ctx.revert();
 };
 }, []);

 return (
 <>
 <Helmet>
 <title>Services | Webcore360</title>
 <meta
 name="description"
 content="Premium digital solutions for web development, marketing, automation, and growth-driven experiences."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <button
 type="button"
 onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
 className={`fixed bottom-6 right-6 z-[60] rounded-full border border-border bg-card p-3 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}
 >
 <ChevronRight className="h-5 w-5 rotate-[-90deg]" />
 </button>


 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-8%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-8%] top-[16rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-400/20 blur-[140px]" />
 </div>


 <main className="relative z-10">
 <section className="dark text-foreground relative isolate min-h-screen overflow-hidden px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto flex max-w-[1400px] flex-col gap-12">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]"
 >
 <div className="max-w-3xl">
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Sparkles className="h-4 w-4 text-foreground dark:text-foreground" />
 Premium digital solutions for ambitious teams
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.9] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Digital Solutions That Drive Business Growth
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We create elegant websites, high-impact campaigns, and intelligent automation systems that help modern brands convert, scale, and stay ahead.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Get Free Consultation</a>
 </Button>
 </div>

 <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
 <div className="rounded-full border border-border bg-muted px-3 py-2">Trusted by growth-minded companies</div>
 <div className="rounded-full border border-border bg-muted px-3 py-2">Built for premium first impressions</div>
 </div>
 </div>

 <motion.div
 initial={{ opacity: 0, x: 30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
 className="relative"
 >
 <motion.div
 animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
 transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute -left-8 top-10 h-20 w-20 rounded-3xl border border-border bg-muted shadow-md "
 />
 <motion.div
 animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
 transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute -right-6 bottom-10 h-24 w-24 rounded-[22px] border border-foreground/10 bg-foreground/10 shadow-md "
 />
 <div className="relative overflow-hidden rounded-[22px] border border-border bg-card p-4 shadow-md ">
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5">
 <div className="flex items-center justify-between text-sm text-muted-foreground">
 <span>Growth Intelligence</span>
 <span className="rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3 py-1 text-emerald-300">Live</span>
 </div>
 <div className="mt-6 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
 <div className="rounded-[1.25rem] border border-border bg-secondary p-5 shadow-md">
 <p className="text-sm text-muted-foreground">Performance lift</p>
 <p className="mt-3 text-4xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">+184%</p>
 <div className="mt-5 flex items-end gap-2">
 {[44, 60, 54, 72, 84, 76].map((height, index) => (
 <div key={index} className="flex-1 rounded-t-full bg-gradient-to-t from-foreground via-fuchsia-500 to-violet-500" style={{ height: `${height}px` }} />
 ))}
 </div>
 </div>
 <div className="space-y-3">
 <div className="rounded-[1.1rem] border border-border bg-card p-4">
 <p className="text-sm text-muted-foreground">Average ROAS</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">4.3x</p>
 </div>
 <div className="rounded-[1.1rem] border border-border bg-card p-4">
 <p className="text-sm text-muted-foreground">Campaign velocity</p>
 <p className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">2.1x</p>
 </div>
 <div className="rounded-[1.1rem] border border-foreground/10 bg-foreground/10 p-4 text-sm text-foreground">
 Automation now handles 68% of follow-up workflows.
 </div>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </motion.div>

 <div className="gsap-stagger grid gap-4 rounded-[22px] border border-border bg-muted p-4 shadow-md sm:grid-cols-2 xl:grid-cols-4">
 {[
 { value: '25+', label: 'Projects delivered' },
 { value: '20+', label: 'Clients served' },
 { value: '98%', label: 'Satisfaction rate' },
 { value: '2+', label: 'Years of experience' },
 ].map((stat) => (
 <div key={stat.label} className="rounded-[1.25rem] border border-border bg-card p-5 shadow-md">
 <p className="text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{stat.value}</p>
 <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
 </div>
 ))}
 </div>
 </div>
 </section>

 <section id="services" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="gsap-reveal max-w-3xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Services</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Premium services built for growth and lasting brand impact.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 A glassmorphism service experience with deep detail, rich motion, and clear business outcomes.
 </p>
 </div>

 <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
 {services.map((service, index) => {
 const Icon = service.icon;
 const isOpen = expandedService === index;
 return (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.55, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -10, scale: 1.01, rotateX: 2, rotateY: 5 }}
 onClick={() => setExpandedService(isOpen ? null : index)}
 className="group relative cursor-pointer overflow-hidden rounded-[22px] border border-border bg-muted p-6 shadow-md transition-all duration-500 hover:border-foreground/10 hover:bg-muted hover:shadow-md"
 style={{ transformStyle: 'preserve-3d' }}
 >
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.10),transparent_20%)] opacity-70" />
 <div className="absolute -right-8 top-8 h-28 w-28 rounded-full bg-foreground/10 blur-3xl transition-transform duration-500 group-hover:translate-x-2" />
 <div className="absolute -left-8 bottom-10 h-20 w-20 rounded-full bg-violet-400/10 blur-3xl transition-transform duration-500 group-hover:-translate-x-2" />
 <div className="absolute inset-x-4 top-4 h-1 rounded-full bg-gradient-to-r from-foreground/10 via-fuchsia-500/30 to-violet-400/40" />
 <div className="relative z-10 flex items-center justify-between gap-4">
 <motion.div
 animate={{ y: [0, -6, 0], rotate: [0, 3, 0] }}
 transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
 className="flex h-14 w-14 items-center justify-center rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-500/10 text-foreground dark:text-foreground shadow-md"
 >
 <Icon className="h-7 w-7" />
 </motion.div>
 <span className="rounded-full border border-border bg-muted px-3 py-1 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">{service.timeline}</span>
 </div>
 <div className="relative z-10 mt-6">
 <h3 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 <div className="mt-5 grid gap-2 text-sm text-muted-foreground">
 {service.features.map((feature) => (
 <div key={feature} className="flex items-start gap-3">
 <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-foreground" />
 <span>{feature}</span>
 </div>
 ))}
 </div>
 </div>

 <AnimatePresence initial={false}>
 {isOpen && (
 <motion.div
 initial={{ opacity: 0, height: 0 }}
 animate={{ opacity: 1, height: 'auto' }}
 exit={{ opacity: 0, height: 0 }}
 transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
 className="relative z-10 mt-6 overflow-hidden"
 >
 <div className="rounded-[1.75rem] border border-border bg-card p-5 shadow-md">
 <div className="grid gap-4 text-sm text-muted-foreground sm:grid-cols-2">
 <div>
 <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Tech stack</p>
 <ul className="mt-3 space-y-2">
 {service.stack.map((item) => (
 <li key={item} className="flex items-center gap-2">
 <span className="inline-flex h-2.5 w-2.5 rounded-full bg-fuchsia-400" />
 {item}
 </li>
 ))}
 </ul>
 </div>
 <div>
 <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Estimated start</p>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.startingPrice}</p>
 <p className="mt-4 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Process</p>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.process.join(' · ')}</p>
 </div>
 </div>
 <div className="mt-6 rounded-[22px] border border-border bg-muted p-4">
 <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Benefits</p>
 <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
 {service.benefits.map((benefit) => (
 <li key={benefit} className="flex items-start gap-2">
 <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-violet-400" />
 <span>{benefit}</span>
 </li>
 ))}
 </ul>
 </div>
 <div className="mt-6 flex flex-wrap items-center gap-4">
 <Button asChild className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <Link to="#contact">Start with this service</Link>
 </Button>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.article>
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
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="gsap-reveal rounded-[2.5rem] border border-border bg-gradient-to-br from-zinc-900/80 via-zinc-950/70 to-black p-8 shadow-md"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Why WebCore360</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-4xl">
 A premium partner that brings strategy, design, and growth together.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 We don’t just execute a service list. We coordinate every touchpoint into an elegant, measurable, high-performing experience.
 </p>
 <div className="mt-8 grid gap-4 sm:grid-cols-2">
 {[
 { icon: ShieldCheck, label: 'Senior-led execution', value: 'No handoffs, no noise' },
 { icon: BarChart3, label: 'Performance clarity', value: 'Insights you can act on' },
 { icon: BrainCircuit, label: 'AI-enabled speed', value: 'Faster launches, smarter iteration' },
 { icon: TrendingUp, label: 'Growth minded', value: 'Built for scale and retention' },
 ].map((item) => (
 <div key={item.label} className="rounded-[22px] border border-border bg-muted p-5 shadow-md">
 <item.icon className="h-5 w-5 text-foreground dark:text-foreground" />
 <p className="mt-4 text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.label}</p>
 <p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
 </div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
 className="gsap-reveal rounded-[2.5rem] border border-border bg-muted p-8 shadow-md "
 >
 <div className="flex flex-wrap gap-2">
 {Object.entries(comparisonPanels).map(([key, panel]) => (
 <button
 key={key}
 type="button"
 onClick={() => setActiveComparison(key)}
 className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${activeComparison === key ? 'bg-foreground/10 text-foreground dark:text-foreground shadow-md' : 'bg-muted text-muted-foreground hover:text-zinc-200'}`}
 >
 {panel.title}
 </button>
 ))}
 </div>
 <div className="mt-8 rounded-[1.75rem] border border-border bg-card p-6">
 <div className="flex items-center justify-between">
 <div>
 <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Comparison</p>
 <h3 className="mt-2 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{comparisonPanels[activeComparison].title}</h3>
 </div>
 <div className="rounded-full border border-foreground/10 bg-foreground/10 p-3 text-foreground dark:text-foreground">
 <Zap className="h-5 w-5" />
 </div>
 </div>
 <p className="mt-4 text-sm leading-7 text-muted-foreground">{comparisonPanels[activeComparison].copy}</p>
 <div className="mt-6 flex flex-wrap gap-3">
 {comparisonPanels[activeComparison].stats.map((stat) => (
 <span key={stat} className="rounded-full border border-border bg-muted px-3 py-2 text-sm text-muted-foreground">
 {stat}
 </span>
 ))}
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 <section id="process" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="gsap-reveal max-w-3xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Our process</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 A calm, collaborative process designed for premium outcomes.
 </h2>
 </div>
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
 {processSteps.map((step, index) => (
 <motion.div
 key={step.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-60px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-muted p-6 shadow-md transition-all duration-500 hover:-translate-y-1 hover:border-foreground/10 hover:bg-muted"
 >
 <div className="inline-flex rounded-full border border-border bg-muted px-3 py-1 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">0{index + 1}</div>
 <h3 className="mt-4 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{step.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 <section id="portfolio" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="gsap-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Portfolio showcase</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Interactive case studies for high-impact digital brands.
 </h2>
 <p className="mt-4 text-lg leading-8 text-muted-foreground">
 Explore premium work with rich previews, before & after comparisons, device mockups, and measurable results.
 </p>
 </div>
 <div className="flex flex-wrap gap-2">
 {portfolioCategories.map((category) => (
 <button
 key={category}
 type="button"
 onClick={() => setActivePortfolioCategory(category)}
 className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${activePortfolioCategory === category ? 'bg-foreground/10 text-foreground dark:text-foreground shadow-md' : 'bg-muted text-muted-foreground hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white'}`}
 >
 {category}
 </button>
 ))}
 </div>
 </div>

 <div className="mt-10 grid gap-6 xl:grid-cols-3">
 {filteredPortfolioProjects.map((project, index) => (
 <motion.article
 key={project.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-80px' }}
 transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -10, scale: 1.01 }}
 onMouseEnter={() => setHoveredProject(project.title)}
 onMouseLeave={() => setHoveredProject(null)}
 className="group relative overflow-hidden rounded-[22px] border border-border bg-muted p-6 shadow-md transition-all duration-500 hover:border-foreground/10 hover:bg-muted"
 >
 <div className="relative overflow-hidden rounded-[1.75rem]">
 <img
 src={project.image}
 alt={project.title}
 className="h-72 w-full object-cover transition duration-700 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
 <div className="absolute left-4 top-4 rounded-full border border-border bg-black/50 px-3 py-1 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">
 {project.category}
 </div>
 <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-xs text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
 <Play className="h-3.5 w-3.5 text-foreground dark:text-foreground" />
 Video preview
 </div>
 <div className="absolute inset-x-4 bottom-4 rounded-[1.75rem] bg-black/50 p-4 ">
 <div className="flex items-start justify-between gap-4">
 <div>
 <p className="text-sm font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{project.title}</p>
 <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.role}</p>
 </div>
 <div className="rounded-[22px] border border-border bg-secondary px-3 py-2 text-right text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">
 <p>Timeline</p>
 <p className="mt-1 font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{project.timeline}</p>
 </div>
 </div>
 </div>
 </div>

 <div className="relative z-10 mt-6 space-y-4">
 <div className="grid gap-4 sm:grid-cols-2">
 <div className="rounded-[22px] border border-border bg-muted p-4 shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Technologies</p>
 <div className="mt-3 flex flex-wrap gap-2">
 {project.technologies.map((tech) => (
 <span key={tech} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
 {tech}
 </span>
 ))}
 </div>
 </div>
 <div className="rounded-[22px] border border-border bg-muted p-4 shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Client goals</p>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.goals}</p>
 </div>
 </div>

 <div className="grid gap-4 sm:grid-cols-3">
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-foreground/10 to-fuchsia-500/5 p-4 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Traffic</p>
 <p className="mt-3 text-2xl font-semibold">{project.results.traffic}</p>
 </div>
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-4 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Conversion</p>
 <p className="mt-3 text-2xl font-semibold">{project.results.conversion}</p>
 </div>
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-emerald-500/10 to-teal-500/5 p-4 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-emerald-300">Revenue</p>
 <p className="mt-3 text-2xl font-semibold">{project.results.revenue}</p>
 </div>
 </div>

 <div className="grid gap-4 sm:grid-cols-2">
 <div className="overflow-hidden rounded-[22px] border border-border bg-muted shadow-md">
 <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
 Before
 </div>
 <img src={project.beforeImage} alt={`${project.title} before`} className="h-24 w-full object-cover" />
 </div>
 <div className="overflow-hidden rounded-[22px] border border-border bg-muted shadow-md">
 <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-4 text-xs uppercase tracking-[0.35em] text-muted-foreground">
 After
 </div>
 <img src={project.afterImage} alt={`${project.title} after`} className="h-24 w-full object-cover" />
 </div>
 </div>

 <div className="mt-5 flex flex-wrap gap-3">
 <Button asChild className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-5 py-3 text-sm font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href={project.website} target="_blank" rel="noreferrer">
 Visit Website
 </a>
 </Button>
 </div>
 </div>
 </motion.article>
 ))}
 </div>
 </div>
 </section>

 <section className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="gsap-reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
 <div className="max-w-2xl">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Pricing preview</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Flexible engagement options for every stage of growth.
 </h2>
 </div>
 <div className="inline-flex rounded-full border border-border bg-secondary p-1 text-sm text-muted-foreground shadow-md">
 <button type="button" onClick={() => setIsYearly(true)} className={`rounded-full px-4 py-2 transition-all duration-300 ${isYearly ? 'bg-muted text-foreground dark:text-foreground dark:text-foreground dark:text-white' : ''}`}>
 Yearly
 </button>
 <button type="button" onClick={() => setIsYearly(false)} className={`rounded-full px-4 py-2 transition-all duration-300 ${!isYearly ? 'bg-muted text-foreground dark:text-foreground dark:text-foreground dark:text-white' : ''}`}>
 Monthly
 </button>
 </div>
 </div>

 <div className="mt-10 grid gap-6 lg:grid-cols-3">
 {pricingPlans.map((plan) => (
 <motion.article
 key={plan.name}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-60px' }}
 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
 className={`rounded-[1.75rem] border p-8 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-md ${plan.popular ? 'border-foreground/10 bg-foreground/10' : 'border-border bg-muted'}`}
 >
 {plan.popular && (
 <div className="mb-4 inline-flex rounded-full border border-foreground/10 bg-foreground/10 px-3 py-1 text-sm text-foreground dark:text-foreground">
 Popular
 </div>
 )}
 <h3 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{plan.name}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{plan.description}</p>
 <div className="mt-6 flex items-end gap-1">
 <span className="text-4xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">${isYearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}</span>
 <span className="pb-1 text-sm text-muted-foreground">/month</span>
 </div>
 <ul className="mt-8 space-y-3 text-sm text-muted-foreground">
 {plan.features.map((feature) => (
 <li key={feature} className="flex items-start gap-3">
 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground dark:text-foreground" />
 <span>{feature}</span>
 </li>
 ))}
 </ul>
 <Button asChild className="mt-8 rounded-full border-border bg-muted px-5 text-foreground dark:text-foreground dark:text-foreground dark:text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15">
 <a href="#contact">Start with {plan.name}</a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to transform your digital presence?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">Explore our full suite of marketing, design, and technical services — or let us build a custom plan tailored to your growth goals.</p>
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

export default ServicesPage;
