import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const FloatingShapes = () => {
 const { scrollYProgress } = useScroll();
 // Parallax mapping: as you scroll down, shapes move at different speeds
 const y1 = useTransform(scrollYProgress, [0, 1], [0, 400]);
 const y2 = useTransform(scrollYProgress, [0, 1], [0, -300]);

 return (
 <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
 {/* Abstract Shape 1: Orbiting Circles */}
 <motion.div 
 style={{ y: y1 }}
 animate={{ rotate: 360 }}
 transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
 className="absolute top-32 left-[10%] opacity-[0.15]"
 >
 <svg width="140" height="140" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
 <circle cx="100" cy="100" r="98" stroke="url(#paint0_linear)" strokeWidth="1.5" strokeDasharray="10 10"/>
 <circle cx="100" cy="100" r="70" stroke="url(#paint1_linear)" strokeWidth="1" strokeDasharray="5 5"/>
 <circle cx="100" cy="100" r="40" stroke="url(#paint0_linear)" strokeWidth="0.5"/>
 <defs>
 <linearGradient id="paint0_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
 <stop stopColor="#06B6D4" />
 <stop offset="1" stopColor="#4669B0" />
 </linearGradient>
 <linearGradient id="paint1_linear" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
 <stop stopColor="#4669B0" />
 <stop offset="1" stopColor="#06B6D4" />
 </linearGradient>
 </defs>
 </svg>
 </motion.div>

 {/* Abstract Shape 2: Wireframe Cubes */}
 <motion.div 
 style={{ y: y2 }}
 animate={{ rotate: -360 }}
 transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
 className="absolute top-64 right-[12%] opacity-[0.15]"
 >
 <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
 <rect x="25" y="25" width="150" height="150" rx="30" stroke="url(#paint2_linear)" strokeWidth="1.5"/>
 <rect x="50" y="50" width="100" height="100" rx="20" stroke="url(#paint3_linear)" strokeWidth="1" strokeDasharray="4 4"/>
 <path d="M25 25 L50 50 M175 25 L150 50 M25 175 L50 150 M175 175 L150 150" stroke="url(#paint2_linear)" strokeWidth="1"/>
 <defs>
 <linearGradient id="paint2_linear" x1="0" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
 <stop stopColor="#52525b" />
 <stop offset="1" stopColor="#a1a1aa" />
 </linearGradient>
 <linearGradient id="paint3_linear" x1="200" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
 <stop stopColor="#a1a1aa" />
 <stop offset="1" stopColor="#52525b" />
 </linearGradient>
 </defs>
 </svg>
 </motion.div>
 </div>
 );
};

export default FloatingShapes;
