import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, animate } from 'framer-motion';
import {
  Cloud,
  Compass,
  Cpu,
  DollarSign,
  Headphones,
  LayoutGrid,
  Megaphone,
  Repeat,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Globe2,
  Eye,
  HeartPulse,
  Timer,
} from 'lucide-react';

const stats = [
  { label: 'Projects', value: 25, suffix: '+', icon: LayoutGrid, accent: 'from-foreground to-fuchsia-500' },
  { label: 'Happy Clients', value: 20, suffix: '+', icon: Users, accent: 'from-violet-400 to-fuchsia-500' },
  { label: 'Satisfaction', value: 98, suffix: '%', icon: HeartPulse, accent: 'from-emerald-400 to-teal-400' },
  { label: 'Years Experience', value: 2, suffix: '+', icon: Timer, accent: 'from-slate-400 to-slate-600' },
  { label: 'Experts', value: 20, suffix: '+', icon: Sparkles, accent: 'from-foreground to-violet-400' },
  { label: 'Support', value: 24, suffix: '/7', icon: Headphones, accent: 'from-fuchsia-400 to-violet-400' },
  { label: 'Countries', value: 15, suffix: '+', icon: Globe2, accent: 'from-amber-400 to-orange-500' },
  { label: 'Transparency', value: 100, suffix: '%', icon: Eye, accent: 'from-slate-400 to-foreground' },
];

const highlights = [
  {
    title: 'Product Velocity',
    description: '30+ launches delivered with fast iteration and polished execution.',
    icon: Sparkles,
    accent: 'from-fuchsia-400 to-foreground',
  },
  {
    title: 'Growth Experiments',
    description: '75+ live experiments driving measurable conversion improvements.',
    icon: TrendingUp,
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'Automated Systems',
    description: '250+ workflows and automations powering efficiency and scale.',
    icon: Cloud,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'Insight Reports',
    description: '540+ custom reports turning data into premium decision support.',
    icon: Eye,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Secure Foundations',
    description: 'Enterprise-grade security baked into every release and integration.',
    icon: ShieldCheck,
    accent: 'from-slate-400 to-foreground',
  },
  {
    title: 'Cloud-First Strategy',
    description: 'Infrastructure built for availability, performance, and scale.',
    icon: Cloud,
    accent: 'from-fuchsia-400 to-violet-400',
  },
];

function AnimatedCounter({ value, suffix, delay = 0 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      delay,
      duration: 1.8,
      ease: 'easeOut',
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [value, delay]);

  return (
    <span className="block text-5xl font-semibold tracking-[-0.05em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-6xl">
      {display}
      <span className="text-2xl font-medium text-foreground dark:text-foreground">{suffix}</span>
    </span>
  );
}

const features = [
  {
    title: 'Fast Delivery',
    description: 'Launch faster with premium delivery systems built for speed and precision.',
    icon: Rocket,
    accent: 'from-foreground to-fuchsia-500',
  },
  {
    title: 'Modern Design',
    description: 'Polished, contemporary interfaces that feel premium from every angle.',
    icon: LayoutGrid,
    accent: 'from-violet-400 to-fuchsia-500',
  },
  {
    title: 'SEO Optimized',
    description: 'Search-ready foundations, fast load performance, and better organic visibility.',
    icon: Eye,
    accent: 'from-emerald-400 to-teal-400',
  },
  {
    title: 'Scalable Architecture',
    description: 'Flexible systems that grow with traffic, products, and enterprise demand.',
    icon: Server,
    accent: 'from-slate-400 to-slate-600',
  },
  {
    title: 'Dedicated Team',
    description: 'Senior-minded talent aligned to your business goals and long-term success.',
    icon: Users,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent investment with premium impact and measurable ROI.',
    icon: DollarSign,
    accent: 'from-amber-400 to-orange-500',
  },
  {
    title: '24/7 Support',
    description: 'Always-on collaboration and fast response when momentum matters most.',
    icon: Headphones,
    accent: 'from-fuchsia-400 to-violet-400',
  },
  {
    title: 'Transparent Workflow',
    description: 'Clear milestones, status visibility, and no mystery in delivery.',
    icon: Repeat,
    accent: 'from-slate-400 to-foreground',
  },
  {
    title: 'Latest Technologies',
    description: 'Modern stacks and tools that keep your product ahead of the market.',
    icon: Cpu,
    accent: 'from-fuchsia-400 to-indigo-500',
  },
  {
    title: 'Business Strategy',
    description: 'Growth-minded planning that bridges product, marketing, and design.',
    icon: Compass,
    accent: 'from-emerald-400 to-lime-400',
  },
  {
    title: 'Marketing Experts',
    description: 'Campaign thinking and conversion expertise woven into every experience.',
    icon: Megaphone,
    accent: 'from-fuchsia-500 to-pink-500',
  },
  {
    title: 'Security',
    description: 'Hardened infrastructure, secure delivery, and trusted systems practices.',
    icon: ShieldCheck,
    accent: 'from-foreground to-slate-500',
  },
  {
    title: 'Performance',
    description: 'Speed and stability engineered for real-world conversion outcomes.',
    icon: Zap,
    accent: 'from-foreground to-violet-400',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Cloud-first foundations for availability, scale, and global reach.',
    icon: Cloud,
    accent: 'from-fuchsia-400 to-foreground',
  },
  {
    title: 'Future Proof Solutions',
    description: 'Adaptable systems built to stay relevant as your business evolves.',
    icon: Globe2,
    accent: 'from-violet-400 to-violet-300',
  },
];

function WhyChooseUs() {
  return (
    <div className="dark relative overflow-hidden text-foreground">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-[30rem] w-[30rem] rounded-full bg-foreground/10 blur-[140px]" />
        <div className="absolute right-[-8%] top-20 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.05),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_25%)]" />
        <div className="absolute inset-x-0 top-1/4 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />
      </div>

      <main className="relative z-10 px-4 py-28 sm:px-6 lg:px-8">
        <Helmet>
          <title>Why Choose WebCore 360 | Premium digital growth partner</title>
          <meta
            name="description"
            content="Discover why WebCore 360 is the premium growth partner for ambitious brands with fast delivery, modern design, secure architecture, and measurable results."
          />
        </Helmet>

        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Why Choose WebCore 360</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
              Premium outcomes built on speed, strategy, and modern infrastructure.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Discover the premium advantages that make WebCore 360 the trusted growth partner for ambitious brands.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: 'Elite Design & Product',
                text: 'Turn every touchpoint into a premium experience with polished design systems and brand-led product strategy.',
                icon: LayoutGrid,
                accent: 'from-violet-400 to-fuchsia-500',
              },
              {
                label: 'Business-led Growth',
                text: 'Align your digital roadmap to real business goals, revenue channels, and growth momentum.',
                icon: TrendingUp,
                accent: 'from-emerald-400 to-foreground',
              },
              {
                label: 'Trusted Execution',
                text: 'Clear communication, dependable delivery, and a senior team that owns quality end-to-end.',
                icon: Sparkles,
                accent: 'from-fuchsia-400 to-indigo-500',
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group overflow-hidden rounded-[22px] border border-border bg-card/90 p-8 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-foreground/10 hover:bg-secondary"
              >
                <div className="relative mb-6 h-14 w-14 rounded-3xl bg-gradient-to-br from-white/10 to-white/15 shadow-md">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                    className={`flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-foreground dark:text-foreground dark:text-foreground dark:text-white`}
                  >
                    <item.icon className="h-6 w-6" />
                  </motion.div>
                </div>
                <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">{item.label}</p>
                <p className="mt-4 text-lg leading-8 text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 rounded-[3rem] border border-foreground/10 bg-foreground/10 p-8 shadow-md ">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { value: '48h', label: 'Average kickoff turnaround' },
                { value: '12x', label: 'Higher velocity launches' },
                { value: '98%', label: 'Client satisfaction rate' },
              ].map((item) => (
                <div key={item.label} className="rounded-[22px] border border-border bg-card/90 p-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
                  <p className="text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{item.value}</p>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {features.map((feature, index) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative overflow-hidden rounded-[22px] border border-border bg-card/95 p-6 shadow-md transition-all duration-300 hover:border-foreground/10 hover:bg-secondary"
              >
                <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div className="absolute -right-6 top-6 h-28 w-28 rounded-full bg-secondary blur-2xl opacity-70" />
                <div className="absolute left-6 bottom-6 h-20 w-20 rounded-full bg-foreground/10 blur-2xl opacity-80" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut' }}
                    className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${feature.accent} text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md`}
                  >
                    <feature.icon className="h-7 w-7" />
                  </motion.div>
                  <div className="rounded-full border border-border bg-secondary px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-foreground dark:text-foreground">
                    Premium
                  </div>
                </div>

                <div className="relative z-10 mt-8">
                  <h2 className="text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{feature.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
                </div>

                <div className="relative z-10 mt-6 flex items-center gap-2 text-sm text-foreground dark:text-foreground">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-foreground animate-pulse" />
                  Floating micro interaction included
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-16 rounded-[22px] border border-border bg-muted p-8 shadow-md ">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { label: 'Speed', value: 'Rapid delivery and launch-ready execution' },
                { label: 'Clarity', value: 'Transparent workflow and milestone-based progress' },
                { label: 'Scale', value: 'Systems designed for growth, traffic, and new initiatives' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-border bg-card/90 p-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">{item.label}</p>
                  <p className="mt-4 text-lg leading-8 text-muted-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <section className="mt-16 rounded-[3rem] border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 p-8 shadow-md ">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Premium partner experience</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
                  More than a vendor — a long-term growth engine.
                </h2>
                <p className="mt-5 text-lg leading-8 text-muted-foreground">
                  From launch planning to ongoing optimization, we deliver systems that keep your brand relevant, memorable, and profitable.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    'Executive-grade planning',
                    'Cross-functional delivery',
                    'Performance monitoring',
                    'Growth-ready roadmaps',
                  ].map((item) => (
                    <div key={item} className="rounded-[22px] border border-border bg-card p-4 text-sm text-muted-foreground shadow-md">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[22px] border border-border bg-card/90 p-8 shadow-md">
                <div className="rounded-[1.75rem] bg-secondary p-6 text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md">
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Ready to accelerate</p>
                  <p className="mt-4 text-3xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">Let’s build a premium digital platform that scales.</p>
                  <p className="mt-4 text-sm leading-6 text-muted-foreground">
                    Speak with our senior growth team and get a custom roadmap for your next launch.
                  </p>
                  <button type="button" className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 px-6 py-3 text-sm font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                    Book a strategy session
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div className="mt-32 border-t border-border pt-20">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">State of the business</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
                Premium performance metrics that tell the story.
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Animated counters, wave-driven backgrounds, and glowing visuals to reinforce the strength of our delivery.
              </p>
            </div>

            <div className="relative mt-20 overflow-hidden rounded-[3rem] border border-border bg-card p-8 shadow-md ">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />
              <div className="absolute inset-x-0 top-1/2 h-1 bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              <div className="absolute inset-y-0 left-1/2 w-1 bg-gradient-to-b from-transparent via-violet-400/30 to-transparent" />

              <div className="absolute inset-0 bg-[length:160px_160px] bg-[linear-gradient(0deg,rgba(255,255,255,0.03),transparent_30%)]" />
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(18)].map((_, index) => (
                  <div
                    key={index}
                    className="absolute rounded-full bg-muted blur-sm"
                    style={{
                      width: `${Math.random() * 8 + 4}px`,
                      height: `${Math.random() * 8 + 4}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: 0.22,
                    }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
              >
                {stats.map((stat, index) => (
                  <motion.article
                    key={stat.label}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 24 }}
                    className="group relative overflow-hidden rounded-[22px] border border-border bg-card/95 p-8 shadow-md transition-all duration-300 hover:border-foreground/10 hover:bg-secondary"
                  >
                    <div className="absolute inset-0 rounded-[22px] bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
                    <div className="relative z-10 flex items-center justify-between gap-4">
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        className={`flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br ${stat.accent} text-foreground dark:text-foreground dark:text-white shadow-md`}
                      >
                        <stat.icon className="h-6 w-6" />
                      </motion.div>
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-muted text-[10px] text-foreground dark:text-foreground">
                        {index + 1}
                      </div>
                    </div>

                    <div className="relative z-10 mt-10">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 0.1} />
                      <p className="mt-4 text-sm leading-6 text-muted-foreground">{stat.label}</p>
                    </div>

                    <div className="absolute bottom-4 left-4 h-1.5 w-20 rounded-full bg-gradient-to-r from-foreground to-violet-400 opacity-70" />
                  </motion.article>
                ))}
              </motion.div>

              <div className="absolute inset-x-12 bottom-6 h-0.5 rounded-full bg-gradient-to-r from-transparent via-foreground/10 to-transparent" />
              <div className="absolute right-12 top-10 h-16 w-1 rounded-full bg-gradient-to-b from-foreground to-transparent opacity-75" />
              <div className="absolute left-14 top-16 h-1 w-20 rounded-full bg-gradient-to-r from-violet-300 to-transparent opacity-70" />
            </div>

            <div className="mt-12 rounded-[3rem] border border-border bg-card/90 p-6 shadow-md ">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group overflow-hidden rounded-[22px] border border-border bg-secondary p-6 text-foreground dark:text-foreground dark:text-white shadow-md transition-all duration-300 hover:border-foreground/10 hover:bg-muted"
                  >
                    <div className="relative mb-5 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-white/10 to-white/15 shadow-md">
                      <motion.div
                        animate={{ rotate: [0, 8, -8, 0] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                        className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${highlight.accent} text-foreground dark:text-foreground dark:text-white`}
                      >
                        <highlight.icon className="h-6 w-6" />
                      </motion.div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground dark:text-foreground dark:text-white">{highlight.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{highlight.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <section className="mt-14 rounded-[3rem] border border-foreground/10 bg-gradient-to-br from-foreground/10 via-transparent to-violet-500/10 p-8 shadow-md ">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Growth engine</p>
                  <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground dark:text-foreground dark:text-white sm:text-5xl">
                    More premium insight, more momentum.
                  </h2>
                  <p className="mt-5 text-lg leading-8 text-muted-foreground">
                    This section now shows not only scale, but the operational focus and intelligence behind every number.
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[
                      { title: 'Launch cadence', value: 'Weekly sprint cycles' },
                      { title: 'Conversion lift', value: '+18% average uplift' },
                      { title: 'Team focus', value: 'Dedicated account alignment' },
                      { title: 'Future-proof', value: 'Modular systems for next-stage growth' },
                    ].map((item) => (
                      <div key={item.title} className="rounded-[1.75rem] border border-border bg-secondary p-5 text-sm text-muted-foreground shadow-md">
                        <p className="text-xs uppercase tracking-[0.35em] text-foreground dark:text-foreground">{item.title}</p>
                        <p className="mt-3 font-semibold text-foreground dark:text-foreground dark:text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-[22px] border border-border bg-card/90 p-8 shadow-md">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.12),transparent_55%)]" />
                  <div className="absolute -left-10 top-10 h-24 w-24 rounded-full bg-foreground/10 blur-3xl" />
                  <div className="absolute right-10 bottom-10 h-28 w-28 rounded-full bg-violet-500/15 blur-3xl" />
                  <div className="relative z-10 grid gap-4">
                    {[
                      { label: 'Data-driven decisions', detail: 'Integrated analytics for every campaign and product release.' },
                      { label: 'Live optimization', detail: 'Continuous performance monitoring with fast iteration.' },
                      { label: 'Executive signal', detail: 'Premium reporting designed for leadership-level visibility.' },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1.75rem] border border-border bg-secondary p-5 text-foreground dark:text-white shadow-md">
                        <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">{item.label}</p>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[22px] border border-border bg-card/90 p-8 shadow-md"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Wave motion</p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground dark:text-white">Animated background waves</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Soft wave layers flow behind the counters, creating movement and depth without overwhelming the content.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                className="overflow-hidden rounded-[22px] border border-border bg-card/90 p-8 shadow-md"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Glow highlights</p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground dark:text-white">Floating glowing circles</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Glowing orbs and gradient lines hover in the layout to give the page a modern, premium data feel.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="overflow-hidden rounded-[22px] border border-border bg-card/90 p-8 shadow-md"
              >
                <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Gradient details</p>
                <h3 className="mt-4 text-3xl font-semibold text-foreground dark:text-white">Particles and gradient lines</h3>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  Particle fields and subtle gradient strokes add dimensional polish to the stat page.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default WhyChooseUs;
