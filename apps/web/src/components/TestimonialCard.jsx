import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

function TestimonialCard({ quote, name, role, company, index }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="break-inside-avoid mb-6"
 >
 <Card className="border-border bg-card">
 <CardContent className="p-6">
 <Quote className="w-8 h-8 text-primary/20 mb-4" />
 <p className="text-card-foreground leading-relaxed mb-6 italic">"{quote}"</p>
 <div className="border-t border-border pt-4">
 <p className="font-semibold text-card-foreground">{name}</p>
 <p className="text-sm text-muted-foreground">{role}</p>
 <p className="text-sm text-muted-foreground">{company}</p>
 </div>
 </CardContent>
 </Card>
 </motion.div>
 );
}

export default TestimonialCard;
