import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

function PremiumFeatureCard({ icon: Icon, title, description, index }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 24 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: '-100px' }}
 transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
 whileHover={{ y: -6, scale: 1.01 }}
 className="group"
 >
 <Card className="h-full overflow-hidden border-border bg-muted shadow-md transition-all duration-400 hover:border-foreground/10 hover:bg-muted">
 <CardContent className="p-6">
 <div className="flex h-14 w-14 items-center justify-center rounded-3xl border border-foreground/10 bg-gradient-to-br from-foreground/10 via-white/10 to-violet-500/10 text-foreground dark:text-foreground shadow-md transition duration-300 group-hover:-translate-y-0.5">
 <Icon className="h-6 w-6" />
 </div>
 <h3 className="mt-6 text-xl font-semibold text-foreground dark:text-foreground dark:text-foreground dark:text-white">{title}</h3>
 <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
 </CardContent>
 </Card>
 </motion.div>
 );
}

export default PremiumFeatureCard;
