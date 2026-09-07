import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

export default function BeforeAfter() {
 const metrics = [
 { label: "Qualified Leads", before: "12/mo", after: "54/mo", increase: "+350%", delay: 0.1 },
 { label: "Conversion Rate", before: "1.2%", after: "4.8%", increase: "+300%", delay: 0.2 },
 { label: "Customer Acquisition Cost", before: "$120", after: "$45", increase: "-62%", delay: 0.3, inverse: true },
 ];

 return (
 <div className="mx-auto max-w-[1200px] px-4 py-24 sm:px-6 lg:px-8">
 <div className="mb-16 text-center">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">The Impact</p>
 <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground dark:text-white sm:text-5xl">
 Transforming metrics into momentum.
 </h2>
 </div>

 <div className="grid gap-8 lg:grid-cols-2">
 {/* Before Card */}
 <motion.div
 initial={{ opacity: 0, x: -30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, ease: "easeOut" }}
 className="rounded-[2rem] border border-border bg-muted/30 p-8 sm:p-12"
 >
 <div className="mb-10">
 <h3 className="text-2xl font-semibold text-muted-foreground">The Baseline</h3>
 <p className="mt-2 text-sm text-muted-foreground">Standard metrics before our digital overhaul.</p>
 </div>
 
 <div className="space-y-8">
 {metrics.map((metric, idx) => (
 <div key={idx}>
 <div className="mb-2 flex justify-between text-sm font-medium text-muted-foreground">
 <span>{metric.label}</span>
 <span>{metric.before}</span>
 </div>
 <div className="h-2 w-full overflow-hidden rounded-full bg-border">
 <div className="h-full w-[25%] bg-muted-foreground/30" />
 </div>
 </div>
 ))}
 </div>
 </motion.div>

 {/* After Card */}
 <motion.div
 initial={{ opacity: 0, x: 30 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
 className="gradient-border luxury-surface rounded-[2rem] bg-card p-8 sm:p-12"
 >
 <div className="mb-10 flex items-center justify-between">
 <div>
 <h3 className="text-2xl font-semibold text-foreground dark:text-white">The Webcore Effect</h3>
 <p className="mt-2 text-sm text-foreground dark:text-foreground">Post-launch performance acceleration.</p>
 </div>
 <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground/10 text-foreground">
 <TrendingUp className="h-6 w-6" />
 </div>
 </div>
 
 <div className="space-y-8">
 {metrics.map((metric, idx) => (
 <div key={idx}>
 <div className="mb-2 flex justify-between text-sm font-medium">
 <span className="text-foreground dark:text-white">{metric.label}</span>
 <span className="flex items-center gap-2 text-foreground dark:text-white">
 {metric.after}
 <span className={`flex items-center text-xs font-bold ${metric.inverse ? 'text-emerald-400' : 'text-foreground'}`}>
 {metric.increase} <ArrowUpRight className="ml-0.5 h-3 w-3" />
 </span>
 </span>
 </div>
 <div className="h-2 w-full overflow-hidden rounded-full bg-border">
 <motion.div
 initial={{ width: "25%" }}
 whileInView={{ width: metric.inverse ? "40%" : "85%" }}
 viewport={{ once: true }}
 transition={{ duration: 1.2, delay: 0.4 + metric.delay, ease: "easeOut" }}
 className="h-full bg-gradient-to-r from-foreground to-violet-500"
 />
 </div>
 </div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 );
}
