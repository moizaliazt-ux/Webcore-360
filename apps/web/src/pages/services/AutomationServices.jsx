import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 Bolt,
 CheckCircle2,
 Cpu,
 Database,
 Layers,
 Mail,
 Plug,
 ShieldCheck,
 Sparkles,
 Terminal,
 Zap,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'AI Chatbots',
 description: 'Conversational agents that answer questions, qualify leads, and automate customer interactions around the clock.',
 icon: Terminal,
 },
 {
 title: 'CRM Automation',
 description: 'Smart workflows that sync data, trigger actions, and maintain flawless lead and customer records.',
 icon: Database,
 },
 {
 title: 'Lead Generation',
 description: 'Automated systems that capture intent, score prospects, and route opportunities to your team instantly.',
 icon: Bolt,
 },
 {
 title: 'Email Automation',
 description: 'Personalized email journeys that move prospects through funnels with precision and speed.',
 icon: Mail,
 },
 {
 title: 'Workflow Automation',
 description: 'End-to-end automation designed to eliminate manual handoffs and accelerate repeatable processes.',
 icon: Layers,
 },
 {
 title: 'Custom AI Solutions',
 description: 'Tailored AI systems built for your unique business logic, data, and growth rhythms.',
 icon: Terminal,
 },
];

const integrations = [
 'Sales CRM',
 'Marketing platforms',
 'Support systems',
 'Analytics tools',
 'Payment gateways',
 'Internal databases',
];

const pricingPlans = [
 {
 name: 'Launch',
 price: '$6.5k',
 description: 'A high-impact automation package for smart lead capture and email sequencing.',
 features: ['AI chatbot setup', 'Email automation', 'CRM integration'],
 },
 {
 name: 'Accelerate',
 price: '$12k',
 description: 'A deeper AI workflow system with custom logic, integration orchestration, and monitoring.',
 features: ['Lead scoring', 'Workflow automation', 'Performance tuning'],
 featured: true,
 },
 {
 name: 'Enterprise',
 price: '$20k+',
 description: 'Full-service AI automation for business operations, growth systems, and data-driven workflows.',
 features: ['Custom AI solutions', 'Advanced integrations', 'Automation governance'],
 },
];

function AutomationServices() {
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
 <title>AI Automation — Webcore360</title>
 <meta
 name="description"
 content="Automate your business with AI-driven chatbots, CRM workflows, lead generation, email automation, and custom intelligence." 
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-15%] top-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia-500/15 blur-[160px]" />
 <div className="absolute right-[-15%] top-[10rem] h-[34rem] w-[34rem] rounded-full bg-violet-400/12 blur-[150px]" />
 <div className="absolute bottom-[-10%] left-1/4 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[140px]" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.1),transparent_40%)]" />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_45%)]" />
 <div className="absolute inset-0 opacity-40">
 <div className="absolute left-1/2 top-10 h-1 w-1 rounded-full bg-foreground/90 blur-xl" />
 <div className="absolute right-24 top-40 h-2 w-2 rounded-full bg-fuchsia-300/90 blur-xl" />
 <div className="absolute left-24 bottom-28 h-2 w-2 rounded-full bg-violet-300/80 blur-xl" />
 </div>
 </div>
 <main className="relative z-10">
 <section className="text-foreground relative px-4 pb-24 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Zap className="h-4 w-4 text-foreground dark:text-foreground" />
 Smart automation built for fast-moving teams and complex operations.
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Automate your business with AI.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 A dark-futuristic AI automation platform built to streamline workflows, generate leads, and power intelligent business systems.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-violet-400 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Launch automation</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#solutions">See solutions</a>
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
 <div className="absolute -right-4 bottom-10 h-24 w-24 rounded-[22px] border border-violet-300/20 bg-violet-400/10 shadow-md " />
 <div className="relative overflow-hidden rounded-[2.25rem] border border-border bg-card p-5 shadow-md ">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(129,140,248,0.14),transparent_45%)]" />
 <div className="relative grid gap-4 rounded-[1.75rem] border border-border bg-muted p-6 shadow-md">
 <div className="flex items-center justify-between gap-3">
 <div className="space-y-2">
 <p className="text-xs uppercase tracking-[0.3em] text-sky-700 dark:text-fuchsia-300">Neural network</p>
 <h2 className="text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">Realtime intelligence flow</h2>
 </div>
 <div className="rounded-[22px] border border-foreground/10 bg-foreground/10 px-3 py-2 text-xs text-foreground">Active</div>
 </div>
 <div className="relative h-72 overflow-hidden rounded-[22px] border border-border bg-card">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.06),transparent_40%)]" />
 <div className="absolute left-1/4 top-8 h-12 w-12 rounded-full border border-foreground/10 bg-foreground/10 shadow-md" />
 <div className="absolute right-1/3 top-28 h-10 w-10 rounded-full border border-violet-300/40 bg-violet-300/20 shadow-md" />
 <div className="absolute left-20 bottom-16 h-14 w-14 rounded-full border border-violet-400/40 bg-violet-400/20 shadow-md" />
 <motion.div
 animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute left-12 top-24 h-1.5 w-20 rounded-full bg-gradient-to-r from-foreground to-violet-400 opacity-70"
 />
 <motion.div
 animate={{ x: [0, -16, 0], y: [0, 10, 0] }}
 transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
 className="absolute right-20 top-12 h-1.5 w-24 rounded-full bg-gradient-to-r from-fuchsia-300 to-violet-400 opacity-70"
 />
 <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#02070f] to-transparent" />
 </div>
 </div>
 </div>
 </motion.div>
 </div>
 </section>

 <section id="solutions" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="mb-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">AI automation</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 A futuristic AI portfolio built to make your systems smarter, faster, and more connected.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 We deliver glowing AI automation with data flows, network nodes, and assistant-driven interactions that feel premium and ready for scale.
 </p>
 </motion.div>
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-card p-8 shadow-md "
 >
 <div className="flex items-center gap-3 text-sky-700 dark:text-fuchsia-300">
 <span className="inline-flex h-10 w-10 items-center justify-center rounded-[22px] bg-fuchsia-500/10 text-sky-800 dark:text-sky-200">
 <Bolt className="h-5 w-5" />
 </span>
 <div>
 <p className="text-sm uppercase tracking-[0.28em] text-sky-700 dark:text-fuchsia-300">AI assistant</p>
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">Your automated operations copilot.</p>
 </div>
 </div>
 <div className="mt-6 space-y-4 text-muted-foreground">
 <p className="rounded-[22px] border border-fuchsia-400/10 bg-muted p-4 text-sm leading-7">
 <span className="text-sky-700 dark:text-fuchsia-300">Assistant:</span> "I’ve routed the incoming leads, updated the CRM, and scheduled follow-up emails for your highest intent prospects. Shall I activate the next campaign sequence?"
 </p>
 <div className="grid gap-4 sm:grid-cols-2">
 {['Auto-routing', 'Smart scoring', 'Campaign triggers', 'Analytics sync'].map((item) => (
 <div key={item} className="rounded-[22px] border border-border bg-white/[0.03] p-4 text-sm text-muted-foreground shadow-md">
 <p className="font-medium text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item}</p>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 </div>

 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
 {services.map((service, index) => (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -10, scale: 1.02 }}
 className="group overflow-hidden rounded-[1.75rem] border border-border bg-muted p-7 shadow-md transition-all duration-300 hover:border-foreground/10 hover:bg-muted"
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-gradient-to-br from-foreground/10 to-violet-400/10 text-foreground dark:text-foreground shadow-md">
 <service.icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 <div className="mt-6 flex items-center gap-2 text-foreground dark:text-foreground">
 <CheckCircle2 className="h-4 w-4" />
 <span className="text-sm">Glowing intelligence built in</span>
 </div>
 </motion.article>
 ))}
 </div>
 </div>
 </section>

 <section id="integrations" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] items-center">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Integrations</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Connect AI to the tools you already use.
 </h2>
 <p className="mt-5 text-lg leading-8 text-muted-foreground">
 We integrate your automation with CRM, marketing, support, analytics, payments, and internal systems for a seamless data flow.
 </p>
 <div className="mt-8 grid gap-4 sm:grid-cols-2">
 {integrations.map((integration) => (
 <div key={integration} className="rounded-[22px] border border-border bg-card p-5 shadow-md">
 <p className="font-medium text-foreground dark:text-foreground dark:text-foreground dark:text-white">{integration}</p>
 </div>
 ))}
 </div>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[22px] border border-border bg-card p-8 shadow-md "
 >
 <div className="space-y-5">
 <div className="grid gap-4 sm:grid-cols-2">
 <div className="rounded-[22px] border border-foreground/10 bg-foreground/10 p-4 text-sky-100">
 <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-sky-700 dark:text-fuchsia-300">Live sync</div>
 <p className="mt-3 text-foreground dark:text-foreground dark:text-foreground dark:text-white">Realtime data flow between tools with zero manual transfer.</p>
 </div>
 <div className="rounded-[22px] border border-violet-300/20 bg-violet-400/10 p-4 text-sky-100">
 <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-sky-700 dark:text-fuchsia-300">Secure bridge</div>
 <p className="mt-3 text-foreground dark:text-foreground dark:text-foreground dark:text-white">Encrypted integration paths that keep your business data safe.</p>
 </div>
 </div>
 <div className="rounded-[22px] border border-border bg-muted p-4">
 <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Flow preview</p>
 <div className="mt-4 grid gap-3">
 <div className="relative overflow-hidden rounded-[22px] border border-fuchsia-400/10 bg-fuchsia-500/10 p-4">
 <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-foreground via-violet-300 to-violet-400" />
 <p className="text-sm text-foreground dark:text-foreground dark:text-foreground dark:text-white">Source system</p>
 <p className="mt-1 text-sm text-muted-foreground">Updates sent to CRM and email automation instantly.</p>
 </div>
 <div className="relative overflow-hidden rounded-[22px] border border-violet-400/10 bg-violet-500/10 p-4">
 <div className="absolute inset-y-0 left-0 w-1 rounded-full bg-gradient-to-b from-violet-400 via-fuchsia-400 to-fuchsia-400" />
 <p className="text-sm text-foreground dark:text-foreground dark:text-foreground dark:text-white">AI orchestration</p>
 <p className="mt-1 text-sm text-muted-foreground">Smart rules route actions based on intent and context.</p>
 </div>
 </div>
 </div>
 </div>
 </motion.div>
 </div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-sky-700 dark:text-fuchsia-300">Pricing</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Transparent pricing for every stage of AI automation.
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
 <a href="#contact">Book automation</a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to automate and scale your operations?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">From workflow automation to CRM integrations, we build intelligent systems that save time, reduce errors, and let your team focus on what matters most.</p>
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

export default AutomationServices;
