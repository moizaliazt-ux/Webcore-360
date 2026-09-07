import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Sparkles, Zap, ShieldCheck, HelpCircle, Target, Search, MousePointerClick, PenTool, Share2, Palette, ImageIcon, Video, Code, Bot } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pricingPlans = [
  {
    name: 'Marketing & Growth',
    monthly: 199,
    yearly: 149,
    tagline: 'Comprehensive marketing, SEO, and social media management.',
    features: [
      'Strategic Marketing',
      'SEO Optimization',
      'Google Ads Management',
      'Content Writing',
      'Social Media Management',
    ],
    popular: false,
    color: 'from-blue-400 to-indigo-500',
    icon: Zap,
  },
  {
    name: 'Design & Creative',
    monthly: 249,
    yearly: 189,
    tagline: 'Stunning graphic design, video editing, and creative assets.',
    features: [
      'Creative Design',
      'Graphic Design',
      'Video Editing',
      'Brand Identity Assets',
      'UI/UX Enhancements',
    ],
    popular: true,
    color: 'from-fuchsia-500 via-violet-500 to-indigo-500',
    icon: Sparkles,
  },
  {
    name: 'Tech & Automation',
    monthly: 299,
    yearly: 229,
    tagline: 'Technical solutions and workflow automation for your business.',
    features: [
      'Technical Solutions',
      'Automation Services',
      'Custom API Integrations',
      'Workflow Optimization',
      'Dedicated Tech Support',
    ],
    popular: false,
    color: 'from-amber-400 via-orange-500 to-rose-500',
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: 'How do the lower pricing plans work?',
    answer: 'We have optimized our delivery framework using smart AI tools and automated pipelines to lower operational costs, passing 100% of those savings directly onto our clients without sacrificing premium quality.',
  },
  {
    question: 'Are there any hidden setup fees or contracts?',
    answer: 'No. All our plans operate on a simple month-to-month subscription basis. You can upgrade, downgrade, or cancel at any time with no penalties.',
  },
  {
    question: 'What is included in the "Unlimited website updates"?',
    answer: 'This includes copy changes, new landing page creations, blog formatting, technical bug fixes, performance optimizations, and layout tweaks on your existing platform.',
  },
  {
    question: 'Can I swap services between different packages?',
    answer: 'Yes! We are extremely flexible. During our onboarding strategy call, we will calibrate the exact scope of your chosen plan to align with your immediate growth milestones.',
  },
];

const individualServices = [
  { name: 'Strategic Marketing', price: 99 },
  { name: 'SEO Optimization', price: 79 },
  { name: 'Google Ads Management', price: 89 },
  { name: 'Content Writing', price: 49 },
  { name: 'Social Media Management', price: 69 },
  { name: 'Creative Design', price: 89 },
  { name: 'Graphic Design', price: 59 },
  { name: 'Video Editing', price: 129 },
  { name: 'Technical Solutions', price: 149 },
  { name: 'Automation Services', price: 99 },
];

function PricingPage() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <>
      <Helmet>
        <title>Pricing & Plans | Webcore360</title>
        <meta
          name="description"
          content="Premium full-stack marketing, design, and automation services at highly competitive prices. Transparent subscription plans for every growth stage."
        />
      </Helmet>

      <div className="relative min-h-screen overflow-x-hidden pt-28 pb-20 text-foreground">
        {/* Glow Effects */}
        <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute right-[-10%] top-[40%] h-[35rem] w-[35rem] rounded-full bg-fuchsia-500/10 blur-[130px]" />

        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-violet-500 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground dark:text-white sm:text-6xl">
              Flexible support for every growth stage.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Get the power of a full-scale marketing agency, design studio, and dev shop combined into one simple, predictable monthly subscription.
            </p>

            {/* Toggle */}
            <div className="mt-8 inline-flex items-center justify-center rounded-full border border-border bg-card p-1 text-sm shadow-md">
              <button
                type="button"
                onClick={() => setIsYearly(true)}
                className={`rounded-full px-5 py-2.5 transition-all duration-300 font-medium ${
                  isYearly ? 'bg-foreground text-background dark:bg-white dark:text-black shadow' : 'text-muted-foreground'
                }`}
              >
                Yearly (Save ~25%)
              </button>
              <button
                type="button"
                onClick={() => setIsYearly(false)}
                className={`rounded-full px-5 py-2.5 transition-all duration-300 font-medium ${
                  !isYearly ? 'bg-foreground text-background dark:bg-white dark:text-black shadow' : 'text-muted-foreground'
                }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 lg:grid-cols-3 items-stretch max-w-6xl mx-auto">
            {pricingPlans.map((plan) => {
              const Icon = plan.icon;
              return (
                <motion.article
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col justify-between rounded-[2.5rem] p-8 border bg-card transition-all duration-500 hover:-translate-y-2 shadow-lg ${
                    plan.popular
                      ? 'border-violet-500/50 shadow-violet-500/5 dark:shadow-violet-950/20 ring-1 ring-violet-500/30'
                      : 'border-border hover:border-foreground/10'
                  }`}
                >
                  <div>
                    {plan.popular && (
                      <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider shadow">
                        Most Popular
                      </span>
                    )}

                    <div className="flex items-center justify-between gap-4 mb-6">
                      <h3 className="text-2xl font-bold text-foreground dark:text-white">
                        {plan.name}
                      </h3>
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${plan.color} text-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground mb-8">
                      {plan.tagline}
                    </p>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-5xl font-extrabold tracking-tight text-foreground dark:text-white">
                          ${isYearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}
                        </span>
                        <span className="text-sm font-medium text-muted-foreground">/month</span>
                      </div>
                      <div className="mt-2 min-h-[24px]">
                        {isYearly ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs text-muted-foreground">
                              Billed annually (${(plan.yearly * 12).toLocaleString()}/yr)
                            </span>
                            <span className="inline-flex items-center rounded-md bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-500 ring-1 ring-inset ring-emerald-500/20">
                              Save ${( (plan.monthly - plan.yearly) * 12 ).toLocaleString()}/yr
                            </span>
                          </div>
                        ) : (
                          <span className="text-xs text-muted-foreground">
                            Billed monthly, cancel anytime
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="border-t border-border/80 my-6" />

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-violet-500 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    asChild
                    className={`w-full rounded-full py-6 text-base font-semibold shadow transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-fuchsia-500 via-violet-500 to-indigo-500 text-white border-0 hover:opacity-95'
                        : 'bg-secondary text-foreground border border-border hover:bg-muted'
                    }`}
                  >
                    <Link to="/contact-us">Start with {plan.name}</Link>
                  </Button>
                </motion.article>
              );
            })}
          </div>

          {/* Animated Marquee for Individual Services */}
          <div className="mt-32 max-w-[100vw] overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="text-center mb-10 space-y-3">
              <h2 className="text-3xl font-semibold text-foreground dark:text-white">Individual Service Pricing</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">Need something specific? Build your own package with our standalone services.</p>
            </div>
            
            <div className="relative flex max-w-full overflow-hidden py-5">
              <motion.div
                className="flex w-max space-x-6 px-6"
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                }}
              >
                {[...individualServices, ...individualServices, ...individualServices].map((service, index) => {
                  // Fallback to Sparkles if the specific icon wasn't found in this version of lucide-react
                  const Icon = service.icon || Sparkles; 
                  return (
                    <div
                      key={`${service.name}-${index}`}
                      className="group relative w-[320px] flex-shrink-0 flex flex-col justify-between rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-8 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_0_2rem_-0.5rem_rgba(139,92,246,0.3)] hover:border-violet-500/30 overflow-hidden"
                    >
                      {/* Subtle hover gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      
                      <div className="relative z-10">
                        <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.bg} ${service.color} transition-transform duration-300 group-hover:scale-110`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <h4 className="font-bold text-xl text-foreground dark:text-white mb-2">{service.name}</h4>
                        <p className="text-sm text-muted-foreground mb-8 line-clamp-2">Premium {service.name.toLowerCase()} execution delivered seamlessly to accelerate your growth.</p>
                      </div>
                      
                      <div className="relative z-10 flex items-baseline gap-1 mt-auto pt-6 border-t border-border/50 group-hover:border-violet-500/20 transition-colors duration-300">
                        <span className="text-4xl font-extrabold tracking-tight text-foreground dark:text-white group-hover:text-violet-500 transition-colors duration-300">${service.price}</span>
                        <span className="text-sm font-semibold text-muted-foreground">/mo</span>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
              
              {/* Fade Gradients for smooth edges */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
            </div>
          </div>

          {/* Sexy Extra Callout / Trust Banner */}
          <div className="mt-32 max-w-4xl mx-auto text-center rounded-[2.5rem] bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                Need a completely bespoke partnership?
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
                If you have specific campaign goals, complex tech requirements, or want to hire a dedicated full-time strategist, let's craft a custom plan together.
              </p>
              <div className="pt-4">
                <Button asChild className="rounded-full bg-white text-black hover:bg-slate-100 font-semibold px-8 py-5">
                  <Link to="/contact-us">Request custom scope</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <section className="mt-28 max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-3">
              <p className="text-xs uppercase tracking-[0.35em] text-violet-500 font-semibold">FAQ</p>
              <h2 className="text-3xl font-semibold text-foreground dark:text-white">Pricing & FAQ</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion key={faq.question} type="single" collapsible>
                  <AccordionItem value={`item-${index}`} className="rounded-3xl border border-border bg-card px-6 shadow-sm">
                    <AccordionTrigger className="text-left text-base font-semibold text-foreground dark:text-white hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </section>

        </div>
      </div>
    </>
  );
}

export default PricingPage;
