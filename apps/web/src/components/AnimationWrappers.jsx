import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const defaultViewport = { once: true, margin: "-80px" };

export const FadeUp = ({ children, delay = 0, duration = 0.5, className = "" }) => (
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={defaultViewport}
 transition={{ duration, delay, ease: "easeOut" }}
 className={className}
 >
 {children}
 </motion.div>
);

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }) => (
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={defaultViewport}
 transition={{ duration, delay, ease: "easeOut" }}
 className={className}
 >
 {children}
 </motion.div>
);

export const SlideInLeft = ({ children, delay = 0, duration = 0.6, className = "" }) => (
 <motion.div
 initial={{ opacity: 0, x: -50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={defaultViewport}
 transition={{ duration, delay, ease: "easeOut" }}
 className={className}
 >
 {children}
 </motion.div>
);

export const SlideInRight = ({ children, delay = 0, duration = 0.6, className = "" }) => (
 <motion.div
 initial={{ opacity: 0, x: 50 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={defaultViewport}
 transition={{ duration, delay, ease: "easeOut" }}
 className={className}
 >
 {children}
 </motion.div>
);

export const ScaleIn = ({ children, delay = 0, duration = 0.5, className = "" }) => (
 <motion.div
 initial={{ opacity: 0, scale: 0.9 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={defaultViewport}
 transition={{ duration, delay, ease: "easeOut" }}
 className={className}
 >
 {children}
 </motion.div>
);

export const StaggerContainer = ({ children, staggerDelay = 0.1, delayChildren = 0, className = "" }) => (
 <motion.div
 initial="hidden"
 whileInView="visible"
 viewport={defaultViewport}
 variants={{
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: staggerDelay,
 delayChildren: delayChildren,
 }
 }
 }}
 className={className}
 >
 {children}
 </motion.div>
);

export const StaggerItem = ({ children, className = "", yOffset = 20 }) => (
 <motion.div
 variants={{
 hidden: { opacity: 0, y: yOffset },
 visible: { 
 opacity: 1, 
 y: 0,
 transition: { ease: "easeOut", duration: 0.5 }
 }
 }}
 className={className}
 >
 {children}
 </motion.div>
);

export const CountUp = ({ to, duration = 2, delay = 0, className = "" }) => {
 const [count, setCount] = useState(0);
 const controls = useAnimation();
 const [hasAnimated, setHasAnimated] = useState(false);

 useEffect(() => {
 let startTime;
 let animationFrame;

 const animate = (timestamp) => {
 if (!startTime) startTime = timestamp;
 const progress = timestamp - startTime;
 const percentage = Math.min(progress / (duration * 1000), 1);
 
 setCount(Math.floor(to * percentage));

 if (percentage < 1) {
 animationFrame = requestAnimationFrame(animate);
 }
 };

 if (hasAnimated) {
 setTimeout(() => {
 animationFrame = requestAnimationFrame(animate);
 }, delay * 1000);
 }

 return () => cancelAnimationFrame(animationFrame);
 }, [to, duration, delay, hasAnimated]);

 return (
 <motion.span
 className={className}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={defaultViewport}
 onViewportEnter={() => {
 if (!hasAnimated) setHasAnimated(true);
 }}
 >
 {count}
 </motion.span>
 );
};

export const TextReveal = ({ text, delay = 0, duration = 0.05, className = "" }) => {
 const words = text.split(" ");
 
 return (
 <motion.div
 className={className}
 initial="hidden"
 whileInView="visible"
 viewport={defaultViewport}
 variants={{
 hidden: { opacity: 0 },
 visible: {
 opacity: 1,
 transition: {
 staggerChildren: duration,
 delayChildren: delay,
 }
 }
 }}
 >
 {words.map((word, i) => (
 <motion.span
 key={i}
 className="inline-block mr-2"
 variants={{
 hidden: { opacity: 0, y: 10 },
 visible: { opacity: 1, y: 0, transition: { ease: "easeOut" } }
 }}
 >
 {word}
 </motion.span>
 ))}
 </motion.div>
 );
};
