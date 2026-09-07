import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function ServiceLayout({ title, description, features = [], children }) {
 return (
 <main className="pt-24">
 <section className="py-20">
 <div className="glass-panel mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
 <div className="mb-10 text-center">
 <p className="text-sm font-medium uppercase tracking-[0.35em] text-foreground dark:text-foreground">Premium automation</p>
 <h1 className="mt-4 text-4xl font-heading font-semibold tracking-[-0.03em] text-foreground dark:text-foreground dark:text-foreground dark:text-white sm:text-5xl">
 {title}
 </h1>
 <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-muted-foreground">
 {description}
 </p>
 </div>

 <div className="grid gap-5 md:grid-cols-2 mb-12">
 {features.map((f, i) => (
 <div key={i} className="glass-card p-6">
 <h3 className="text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white mb-3">{f.title}</h3>
 <p className="text-muted-foreground leading-7">{f.description}</p>
 </div>
 ))}
 </div>

 {children}

 <div className="mt-12 text-center">
 <Button asChild className="glow-button bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 text-foreground dark:text-foreground dark:text-foreground dark:text-white">
 <Link to="/contact-us">Get started</Link>
 </Button>
 </div>
 </div>
 </section>
 </main>
 );
}

export default ServiceLayout;
