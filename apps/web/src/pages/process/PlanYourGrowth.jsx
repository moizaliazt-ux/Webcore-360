import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { processSteps } from '@/data/processSteps.js';

function PlanYourGrowth() {
 const currentStep = processSteps[0];
 const nextStep = processSteps[1];

 return (
 <>
 <Helmet>
 <title>Plan your growth — Webcore360</title>
 <meta name="description" content={currentStep.description} />
 </Helmet>


 <main className="pt-24 min-h-screen">
 <section className="py-20">
 <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5 }}
 className="mb-12"
 >
 <div className="flex items-center gap-4 mb-6">
 <div className="text-5xl font-bold text-primary">{currentStep.number}</div>
 <div>
 <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentStep.title}</h1>
 <div className="w-20 h-1 bg-primary rounded-full"></div>
 </div>
 </div>
 <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
 {currentStep.description}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="bg-card border border-border rounded-xl p-8 mb-12"
 >
 <h2 className="text-2xl font-semibold mb-6">What's included</h2>
 <ul className="space-y-4">
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">In-depth business analysis and competitive research</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Clear strategy roadmap with measurable KPIs</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Multi-channel approach and implementation timeline</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Budget allocation and resource planning</span>
 </li>
 </ul>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="flex flex-col md:flex-row gap-6 justify-between items-center p-8 bg-primary/5 border border-primary/20 rounded-xl"
 >
 <div>
 <h3 className="text-xl font-semibold mb-2">Ready for the next step?</h3>
 <p className="text-muted-foreground">Let's move to handover and execution</p>
 </div>
 <div className="flex gap-3">
 <Button
 asChild
 variant="outline"
 className="transition-all duration-200"
 >
 <Link to="/contact-us">Contact Us</Link>
 </Button>
 <Button
 asChild
 className="bg-primary text-primary-foreground hover:bg-primary/90"
 >
 <Link to={`/how-it-works/${nextStep.slug}`}>Next step →</Link>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>
 </main>

 </>
 );
}

export default PlanYourGrowth;
