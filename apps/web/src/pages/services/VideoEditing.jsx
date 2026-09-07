import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

import {
 ArrowRight,
 Camera,
 CheckCircle2,
 Film,
 MonitorPlay,
 Play,
 Sparkles,
 Video,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
const services = [
 {
 title: 'YouTube Productions',
 description: 'Cinematic brand films and launch stories made to perform across channels and search.',
 icon: MonitorPlay,
 },
 {
 title: 'Instagram Reels',
 description: 'Polished short-form content designed for high engagement and cultural relevance.',
 icon: Sparkles,
 },
 {
 title: 'TikTok Videos',
 description: 'Fast-paced, thumb-stopping creative built to capture attention in the first two seconds.',
 icon: Video,
 },
 {
 title: 'Corporate Films',
 description: 'Executive narratives, internal campaigns, and brand stories with premium polish.',
 icon: Camera,
 },
 {
 title: 'Advertisements',
 description: 'Strategic ad creative with final cuts ready for paid media and broadcast placement.',
 icon: Film,
 },
 {
 title: 'Motion Graphics',
 description: 'Luxury motion design and animated systems for product launches and brand storytelling.',
 icon: ArrowRight,
 },
];

const portfolio = [
 {
 title: 'Nova Launch',
 description: 'A cinematic brand film for a premium product rollout with motion-led storytelling.',
 image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80',
 },
 {
 title: 'Pulse Reels',
 description: 'Short-form social spots crafted for discovery, engagement, and shareability.',
 image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=600&q=80',
 },
 {
 title: 'Iconic Ads',
 description: 'High-production ad creative that felt cinematic and converted through strong messaging.',
 image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=600&q=80',
 },
];

const pricingPlans = [
 {
 name: 'Cut & Polish',
 price: '$4.8k',
 description: 'Professional editing and motion polish for one campaign or hero piece.',
 features: ['Color grade', 'Sound design', 'Two rounds of revisions'],
 },
 {
 name: 'Campaign',
 price: '$9.5k',
 description: 'A deeper video system with multiple formats, motion graphics, and launch-ready assets.',
 features: ['Short + long cuts', 'Motion graphics', 'Optimized deliverables'],
 featured: true,
 },
 {
 name: 'Signature',
 price: '$15k+',
 description: 'Full creative direction, editorial strategy, and premium cinematic execution.',
 features: ['Storyboarding', 'End-to-end production support', 'Creative consultation'],
 },
];

function VideoEditing() {
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
 <title>Video Editing — Webcore360</title>
 <meta
 name="description"
 content="Cinematic video editing for YouTube, Reels, TikTok, corporate films, motion graphics, and ad creative."
 />
 </Helmet>

 <div className="relative overflow-x-hidden text-foreground">
 <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
 <div className="absolute left-[-10%] top-0 h-[32rem] w-[32rem] rounded-full bg-foreground/10 blur-[150px]" />
 <div className="absolute right-[-10%] top-[8rem] h-[30rem] w-[30rem] rounded-full bg-fuchsia-500/15 blur-[150px]" />
 <div className="absolute bottom-[-8%] left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet-500/15 blur-[140px]" />
 </div>
 <main className="relative z-10">
 <section className="dark text-foreground px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pt-40">
 <div className="mx-auto grid max-w-[1400px] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/10 px-4 py-2 text-sm text-foreground shadow-md ">
 <Play className="h-4 w-4 text-foreground dark:text-foreground" />
 Professional videos that tell your story with cinematic detail.
 </div>
 <h1 className="font-heading text-5xl font-semibold leading-[0.92] tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl lg:text-7xl">
 Professional videos that tell your story.
 </h1>
 <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
 We cut cinematic content for brands, creators, and businesses with premium editing, motion graphics, and native platform performance.
 </p>
 <div className="mt-8 flex flex-col gap-3 sm:flex-row">
 <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-foreground via-fuchsia-400 to-violet-500 px-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
 <a href="#contact">Start your video project</a>
 </Button>
 <Button asChild variant="outline" size="lg" className="rounded-full border-border bg-muted px-6 text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <a href="#portfolio">Explore portfolio</a>
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
 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
 <div className="rounded-[22px] border border-border bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-5">
 <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-muted-foreground">
 <span>Video preview</span>
 </div>
 <div className="mt-5 relative overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-white/5 to-white/10 p-4">
 <motion.div
 initial={{ opacity: 0.8, scale: 1 }}
 whileHover={{ opacity: 1, scale: 1.03 }}
 transition={{ duration: 0.45, ease: 'easeOut' }}
 className="relative h-72 rounded-[22px] overflow-hidden group/video"
 >
 <img
 src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80"
 alt="Video editing timeline preview"
 className="w-full h-full object-cover opacity-70 transition-transform duration-500 group-hover/video:scale-105"
 />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.18),transparent_45%)]" />
 <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.1),transparent_60%)]" />
 <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
 </motion.div>
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Video services</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Cinematic editing for every platform and every moment.
 </h2>
 </motion.div>
 <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
 {services.map((service, index) => {
 const Icon = service.icon;
 return (
 <motion.article
 key={service.title}
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
 className="rounded-[1.75rem] border border-border bg-muted p-7 shadow-md "
 >
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-foreground/10 text-foreground dark:text-foreground">
 <Icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{service.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.description}</p>
 </motion.article>
 );
 })}
 </div>
 </div>
 </section>

 <section id="timeline" className="px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
 <div className="mx-auto max-w-[1400px]">
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
 className="max-w-3xl"
 >
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Editing process</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 A polished timeline from cut to final motion.
 </h2>
 </motion.div>
 <div className="mt-12 space-y-6">
 {['Ingest & Select', 'Assemble & Grade', 'Motion & Sound', 'Deliver & Optimize'].map((step, index) => (
 <motion.div
 key={step}
 initial={{ opacity: 0, x: 24 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: '-70px' }}
 transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
 className="group relative overflow-hidden rounded-[1.75rem] border border-border bg-muted p-6 shadow-md "
 >
 <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-foreground via-fuchsia-400 to-violet-500 opacity-0 transition duration-500 group-hover:opacity-100" />
 <div className="flex items-center gap-4 text-foreground dark:text-foreground">
 <div className="flex h-12 w-12 items-center justify-center rounded-[22px] border border-foreground/10 bg-foreground/10 text-xl font-semibold">{index + 1}</div>
 <h3 className="text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{step}</h3>
 </div>
 <p className="mt-4 text-sm leading-7 text-muted-foreground">
 {step === 'Ingest & Select' && 'We review footage, choose the strongest moments, and shape the story arc for maximum impact.'}
 {step === 'Assemble & Grade' && 'Rough cuts are refined with pacing, transitions, and cinematic color grading that feels branded and expressive.'}
 {step === 'Motion & Sound' && 'Titles, motion graphics, and sound design are layered to create a polished, immersive final edit.'}
 {step === 'Deliver & Optimize' && 'Final versions are exported, optimized for platforms, and delivered ready for launch.'}
 </p>
 </motion.div>
 ))}
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
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Portfolio</p>
 <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 Video work designed for premium storytelling and audience attention.
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
 whileHover={{ y: -8, scale: 1.01 }}
 className="group overflow-hidden rounded-[1.75rem] border border-border bg-card p-6 shadow-md "
 >
 <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-br from-foreground/10 to-fuchsia-500/10 p-5">
 <div className="h-52 rounded-[22px] overflow-hidden relative">
 <img
 src={item.image}
 alt={item.title}
 className="w-full h-full object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
 />
 <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(192,132,252,0.18),transparent_45%)]" />
 </div>
 </div>
 <h3 className="mt-6 text-2xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.title}</h3>
 <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
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
 Straightforward pricing for premium editing and motion services.
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
 <a href="#contact">Book your edit</a>
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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6 tracking-tight">Ready to create compelling video content?</h2>
          <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">From short-form social clips to long-form brand stories, our video editing team delivers polished, engaging content that keeps your audience watching.</p>
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

export default VideoEditing;
