import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Layers, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

function FeaturedCaseStudy({ study, reverse }) {
 return (
 <motion.article
 initial={{ opacity: 0, y: 32 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-120px' }}
 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
 className="group relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-border bg-muted shadow-md "
 >
 <div className={`grid gap-0 lg:grid-cols-2 items-center`}> 
 <div className={`relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-6 lg:p-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.1),transparent_30%)] pointer-events-none" />
 <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-border bg-card shadow-md">
 <img
 src={study.image}
 alt={study.client}
 className="h-[220px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px] md:h-[380px] lg:h-[520px]"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
 <div className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-2xl sm:rounded-3xl border border-border bg-muted px-3 py-2 sm:px-4 sm:py-3 text-sm text-foreground dark:text-foreground dark:text-foreground dark:text-white ">
 <p className="font-semibold">{study.client}</p>
 <p className="mt-1 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">{study.industry}</p>
 </div>
 <div className="pointer-events-none absolute bottom-6 left-6 right-6 hidden sm:block rounded-[22px] border border-border bg-black/30 p-5 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
 <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">Results snapshot</p>
 <div className="mt-4 grid gap-3 sm:grid-cols-3">
 {study.metrics.slice(0, 3).map((metric) => (
 <div key={metric.label} className="rounded-3xl bg-secondary p-4 text-sm">
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{metric.value}</p>
 <p className="mt-2 text-xs text-muted-foreground">{metric.label}</p>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>

 <div className={`relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] border border-border bg-secondary p-5 shadow-md lg:p-8 ${reverse ? 'lg:order-1 lg:pl-8' : 'lg:order-2 lg:pr-8'}`}>
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_45%)] opacity-20 pointer-events-none" />
 <div className="relative space-y-6 sm:space-y-8">
 <div className="space-y-4">
 <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground shadow-md">
 <Sparkles className="h-4 w-4 text-foreground dark:text-foreground" />
 Featured case study
 </div>
 <h3 className="text-2xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-3xl md:text-4xl">
 {study.client} — {study.role}
 </h3>
 <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
 {study.overview}
 </p>
 </div>

 <div className="grid gap-6 sm:grid-cols-2">
 <div className="space-y-4 rounded-[1.5rem] sm:rounded-[22px] border border-border bg-card p-5 sm:p-6">
 <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">The challenge</p>
 <p className="text-sm leading-7 text-muted-foreground">{study.challenge}</p>
 </div>
 <div className="space-y-4 rounded-[1.5rem] sm:rounded-[22px] border border-border bg-card p-5 sm:p-6">
 <p className="text-sm uppercase tracking-[0.35em] text-violet-700 dark:text-violet-300">Our solution</p>
 <p className="text-sm leading-7 text-muted-foreground">{study.solution}</p>
 </div>
 </div>

 <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
 <div className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-secondary p-4 sm:p-5 text-sm text-muted-foreground">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Services</p>
 <div className="mt-4 space-y-2">
 {study.services.map((service) => (
 <p key={service} className="leading-6">• {service}</p>
 ))}
 </div>
 </div>
 <div className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-secondary p-4 sm:p-5 text-sm text-muted-foreground">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Tech stack</p>
 <div className="mt-4 flex flex-wrap gap-2">
 {study.tech.map((item) => (
 <span key={item} className="rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
 {item}
 </span>
 ))}
 </div>
 </div>
 <div className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-secondary p-4 sm:p-5 text-sm text-muted-foreground">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Duration</p>
 <p className="mt-4 text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{study.timeline}</p>
 </div>
 <div className="rounded-[1.25rem] sm:rounded-[22px] border border-border bg-secondary p-4 sm:p-5 text-sm text-muted-foreground">
 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Team size</p>
 <p className="mt-4 text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{study.team}</p>
 </div>
 </div>

 <div className="rounded-[1.5rem] sm:rounded-[22px] border border-border bg-card p-5 sm:p-8 shadow-md">
 <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Result</p>
 <div className="mt-6 grid gap-4 sm:grid-cols-2">
 {study.metrics.map((metric) => (
 <div key={metric.label} className="rounded-3xl bg-secondary p-4">
 <p className="text-lg font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{metric.value}</p>
 <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
 </div>
 ))}
 </div>
 </div>

 <div className="rounded-[1.5rem] sm:rounded-[22px] border border-border bg-secondary p-5 sm:p-8 text-muted-foreground shadow-md">
 <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">Client testimonial</p>
 <p className="mt-4 text-lg sm:text-xl font-semibold leading-8 sm:leading-9 text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 “{study.quote}”
 </p>
 <p className="mt-4 text-sm uppercase tracking-[0.35em] text-muted-foreground">— {study.quoteAuthor}</p>
 </div>


 </div>
 </div>
 </div>
 </motion.article>
 );
}

export default FeaturedCaseStudy;
