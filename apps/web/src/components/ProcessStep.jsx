import React from 'react';
import { motion } from 'framer-motion';

function ProcessStep({ number, title, description, index }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 className="flex gap-6 items-start"
 >
 <div className="flex-shrink-0">
 <div className="text-6xl font-bold text-primary/20" style={{ fontVariantNumeric: 'tabular-nums' }}>
 {number}
 </div>
 </div>
 <div className="flex-1 pt-2">
 <h3 className="text-2xl font-semibold mb-3 text-foreground">{title}</h3>
 <p className="text-muted-foreground leading-relaxed max-w-prose">{description}</p>
 </div>
 </motion.div>
 );
}

export default ProcessStep;
