import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function ServiceCard({ icon: Icon, title, description, index, slug }) {
 return (
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.5, delay: index * 0.1 }}
 >
 <Link to={slug ? `/services/${slug}` : '#'} className="block h-full">
 <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-border">
 <CardContent className="p-6 flex flex-col h-full">
 <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
 <Icon className="w-6 h-6" />
 </div>
 <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
 <p className="text-muted-foreground leading-relaxed">{description}</p>
 </CardContent>
 </Card>
 </Link>
 </motion.div>
 );
}

export default ServiceCard;
