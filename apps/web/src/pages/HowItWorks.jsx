import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { processSteps } from '@/data/processSteps.js';
import { ArrowRight, CheckCircle2, Clock, Eye, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

function HowItWorks() {
 const principles = [
 {
 title: 'Full Transparency',
 description: 'You get a private Slack channel with our developers and designers, plus access to our live work-in-progress Figma boards and build servers. No middle managers, no hidden schedules.',
 icon: Eye,
 accent: 'text-foreground bg-foreground/10'
 },
 {
 title: 'Native Performance',
 description: 'We do not build on top of slow, bloated templates. Every page is structured with custom React/Next.js components and clean styling systems, scoring 95+ on Google PageSpeed.',
 icon: Zap,
 accent: 'text-pink-500 bg-pink-500/10'
 },
 {
 title: 'Iteration Over Guessing',
 description: 'We ship critical pathways early to collect real user data. Instead of spending months speculating on design directions, we optimize layout and messaging based on conversion data.',
 icon: Sparkles,
 accent: 'text-violet-500 bg-violet-500/10'
 },
 {
 title: 'Security & Reliability',
 description: 'Our technical solutions include robust edge deployments, automated backups, SSL configs, and optimized API calls to ensure zero downtime and enterprise-grade data protection.',
 icon: Shield,
 accent: 'text-emerald-500 bg-emerald-500/10'
 }
 ];

 const processFaqs = [
 {
 question: 'How involved do I need to be in the process?',
 answer: 'We require a deep-dive kickoff meeting at the start to align on strategy and goals. After that, we share weekly async updates in Slack with interactive links. You can give feedback whenever fits your time.'
 },
 {
 question: 'Can we change priorities or add features mid-project?',
 answer: 'Yes. Our agile design and development sprints let us pivot easily. If we identify a new organic keyword or user pathway, we adjust the roadmap dynamically during our weekly check-ins.'
 },
 {
 question: 'What happens after the project launches?',
 answer: 'We do not just hand over the keys and walk away. Every project includes a post-launch support window to monitor search analytics, track conversion metrics, and ensure system updates run smoothly.'
 }
 ];

 return (
 <>
 <Helmet>
 <title>How it works | Webcore360</title>
 <meta
 name="description"
 content="Discover our transparent, data-driven 3-step digital delivery process designed to take your brand from planning to measurable growth."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <main className="relative z-10 pt-32">
 {/* Hero Section */}
 <section className="dark text-foreground px-4 pb-12 pt-16 sm:px-6 lg:px-8">
 <div className="mx-auto max-w-5xl text-center">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
 className="relative z-10"
 >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Clock className="h-4 w-4 text-foreground" />
 Our Delivery Framework
 </div>
 <h1 className="font-heading text-4xl font-semibold leading-[1.1] tracking-[-0.03em] text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 How we work to scale your brand.
 </h1>
 <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground sm:text-xl">
 A transparent, data-driven collaboration process built to take your digital products and acquisition strategies from planning to profit.
 </p>
 </motion.div>
 </div>
 </section>

 {/* Process Timeline Section */}
 <section className="px-4 py-16 sm:px-6 lg:px-8">
 <div className="mx-auto max-w-5xl">
 <div className="space-y-12">
 {processSteps.map((step, index) => (
 <motion.div
 key={step.slug}
 initial={{ opacity: 0, y: 32 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
 >
 <Link to={`/how-it-works/${step.slug}`} className="block group">
 <Card className="overflow-hidden border border-border bg-muted shadow-md transition-all duration-300 hover:shadow-md hover:border-foreground/10 rounded-[2rem]">
 <CardContent className="p-6 sm:p-10 relative">
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_40%)]" />
 <div className="relative flex flex-col md:flex-row gap-6 md:gap-8 items-start">
 <div className="flex-shrink-0">
 <div className="w-16 h-16 rounded-[22px] bg-foreground/10 text-foreground dark:text-foreground flex items-center justify-center border border-foreground/10 shadow-md">
 <span className="text-3xl font-bold">{step.number}</span>
 </div>
 </div>
 <div className="flex-1 w-full">
 <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
 <h3 className="text-2xl font-semibold text-foreground group-hover:text-foreground dark:group-hover:text-foreground transition-colors">
 {step.title}
 </h3>
 <span className="rounded-full border border-border bg-card px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
 {step.timeframe}
 </span>
 </div>
 <p className="text-muted-foreground leading-relaxed mb-6">
 {step.description}
 </p>
 
 <div className="mt-6 border-t border-border/60 pt-6">
 <p className="text-xs uppercase tracking-[0.25em] text-foreground dark:text-foreground font-semibold mb-4">Key Phase Deliverables</p>
 <div className="grid gap-3 sm:grid-cols-2">
 {step.details && step.details.map((detail, idx) => (
 <div key={idx} className="flex items-start gap-2.5 text-sm text-muted-foreground">
 <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground dark:text-foreground" />
 <span className="leading-6">{detail}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 </CardContent>
 </Card>
 </Link>
 </motion.div>
 ))}
 </div>
 </div>
 </section>

 {/* Philosophy Section */}
 <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/40 bg-muted/20">
 <div className="mx-auto max-w-5xl">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-16"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Core Principles</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
 Our development and scaling philosophy.
 </h2>
 </motion.div>

 <div className="grid gap-6 md:grid-cols-2">
 {principles.map((item, index) => {
 const Icon = item.icon;
 return (
 <motion.div
 key={item.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.5rem] sm:rounded-[2rem] border border-border bg-card p-6 sm:p-8 shadow-md"
 >
 <div className={`flex h-11 w-11 items-center justify-center rounded-[1rem] ${item.accent}`}>
 <Icon className="h-5 w-5" />
 </div>
 <h3 className="mt-5 text-xl font-semibold text-foreground dark:text-white">{item.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
 </motion.div>
 );
 })}
 </div>
 </div>
 </section>

 {/* Process FAQ Section */}
 <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/40">
 <div className="mx-auto max-w-4xl">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="text-center mb-12"
 >
 <HelpCircle className="h-8 w-8 text-foreground mx-auto mb-4" />
 <h2 className="text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-4xl">
 Process &amp; Partnership FAQs
 </h2>
 </motion.div>

 <div className="space-y-4">
 {processFaqs.map((faq, index) => (
 <Accordion key={index} type="single" collapsible>
 <AccordionItem value={`item-${index}`} className="rounded-[1.25rem] border border-border bg-muted px-5 py-1">
 <AccordionTrigger className="text-left text-base font-semibold text-foreground dark:text-white hover:no-underline">
 {faq.question}
 </AccordionTrigger>
 <AccordionContent className="pt-2 text-sm leading-7 text-muted-foreground">
 {faq.answer}
 </AccordionContent>
 </AccordionItem>
 </Accordion>
 ))}
 </div>
 </div>
 </section>

 {/* CTA Banner */}
 <section className="px-4 py-20 sm:px-6 lg:px-8 border-t border-border/40">
 <div className="mx-auto max-w-5xl text-center">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.5 }}
 >
 <p className="text-muted-foreground mb-6 font-medium">Ready to discuss your scaling roadmap?</p>
 <Button
 asChild
 className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 rounded-full text-base font-semibold transition-transform hover:-translate-y-0.5 shadow-lg shadow-primary/20"
 >
 <Link to="/contact-us">Contact Us</Link>
 </Button>
 </motion.div>
 </div>
 </section>
 </main>
 </div>
 </>
 );
}

export default HowItWorks;
