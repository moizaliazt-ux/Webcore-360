import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { processSteps } from '@/data/processSteps.js';

function CountTheProfit() {
 const currentStep = processSteps[2];
 const prevStep = processSteps[1];

 return (
 <>
 <Helmet>
 <title>Count the profit — Webcore360</title>
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
 <h2 className="text-2xl font-semibold mb-6">Key metrics we track</h2>
 <ul className="space-y-4">
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Lead generation and conversion rates</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Customer acquisition cost (CAC) and lifetime value (LTV)</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Revenue growth and ROI on marketing spend</span>
 </li>
 <li className="flex gap-3">
 <span className="text-primary font-semibold">✓</span>
 <span className="text-foreground">Brand awareness and market position improvements</span>
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
 <h3 className="text-xl font-semibold mb-2">Ready to get started?</h3>
 <p className="text-muted-foreground">Connect with our team today</p>
 </div>
 <div className="flex gap-3">
 <Button
 asChild
 variant="outline"
 className="transition-all duration-200"
 >
 <Link to={`/how-it-works/${prevStep.slug}`}>← Previous</Link>
 </Button>
 <Button
 asChild
 className="bg-primary text-primary-foreground hover:bg-primary/90"
 >
 <Link to="/contact-us">Contact Us</Link>
 </Button>
 </div>
 </motion.div>
 </div>
 </section>
 </main>

 </>
 );
}

export default CountTheProfit;
