import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
 {
 id: 1,
 content: "Webcore360 completely transformed our digital presence. Their strategic approach to our brand narrative resulted in a 41% increase in qualified leads within the first quarter.",
 author: "Sarah Jenkins",
 role: "CMO, Lumen Commerce",
 rating: 5,
 },
 {
 id: 2,
 content: "The level of premium craft they brought to our product launch was unmatched. From the interactive hero to the backend optimization, every detail was flawless.",
 author: "David Chen",
 role: "Founder, Northstar Labs",
 rating: 5,
 },
 {
 id: 3,
 content: "We partnered with Webcore360 to overhaul our acquisition engine. The automation systems they built accelerated our sales cycle by 2.3x.",
 author: "Marcus Thorne",
 role: "VP Growth, Harbor Capital",
 rating: 5,
 },
];

export default function TestimonialsSlider() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [direction, setDirection] = useState(1);
 const [isAutoPlaying, setIsAutoPlaying] = useState(true);

 useEffect(() => {
 if (!isAutoPlaying) return;
 const timer = setInterval(() => {
 setDirection(1);
 setCurrentIndex((prev) => (prev + 1) % testimonials.length);
 }, 6000);
 return () => clearInterval(timer);
 }, [isAutoPlaying]);

 const slideVariants = {
 enter: (direction) => ({
 x: direction > 0 ? 100 : -100,
 opacity: 0,
 scale: 0.95,
 }),
 center: {
 zIndex: 1,
 x: 0,
 opacity: 1,
 scale: 1,
 },
 exit: (direction) => ({
 zIndex: 0,
 x: direction < 0 ? 100 : -100,
 opacity: 0,
 scale: 0.95,
 }),
 };

 const handleNext = () => {
 setIsAutoPlaying(false);
 setDirection(1);
 setCurrentIndex((prev) => (prev + 1) % testimonials.length);
 };

 const handlePrev = () => {
 setIsAutoPlaying(false);
 setDirection(-1);
 setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
 };

 return (
 <div 
 className="relative mx-auto w-full max-w-4xl px-4 py-12"
 onMouseEnter={() => setIsAutoPlaying(false)}
 onMouseLeave={() => setIsAutoPlaying(true)}
 >
 <div className="relative h-[360px] sm:h-[300px] overflow-hidden">
 <AnimatePresence initial={false} custom={direction}>
 <motion.div
 key={currentIndex}
 custom={direction}
 variants={slideVariants}
 initial="enter"
 animate="center"
 exit="exit"
 transition={{ type: "spring", stiffness: 300, damping: 30 }}
 drag="x"
 dragConstraints={{ left: 0, right: 0 }}
 dragElastic={1}
 onDragEnd={(e, { offset, velocity }) => {
 const swipe = Math.abs(offset.x) * velocity.x;
 if (swipe < -10000) {
 handleNext();
 } else if (swipe > 10000) {
 handlePrev();
 }
 }}
 className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
 >
 <div className="glass w-full rounded-[2rem] p-8 sm:p-12 text-center shadow-2xl ">
 <div className="mb-6 flex justify-center gap-1">
 {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
 <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
 ))}
 </div>
 <p className="mb-8 text-lg font-medium leading-relaxed text-foreground dark:text-white sm:text-2xl">
 "{testimonials[currentIndex].content}"
 </p>
 <div>
 <p className="font-semibold text-foreground dark:text-white">{testimonials[currentIndex].author}</p>
 <p className="text-sm text-foreground dark:text-foreground">{testimonials[currentIndex].role}</p>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 <div className="mt-8 flex items-center justify-center gap-4">
 <button
 onClick={handlePrev}
 className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted dark:text-white"
 >
 <ChevronLeft className="h-5 w-5" />
 </button>
 <div className="flex gap-2">
 {testimonials.map((_, idx) => (
 <button
 key={idx}
 onClick={() => {
 setIsAutoPlaying(false);
 setDirection(idx > currentIndex ? 1 : -1);
 setCurrentIndex(idx);
 }}
 className={`h-2.5 rounded-full transition-all duration-300 ${
 idx === currentIndex ? "w-8 bg-foreground" : "w-2.5 bg-border hover:bg-muted-foreground"
 }`}
 />
 ))}
 </div>
 <button
 onClick={handleNext}
 className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:bg-muted dark:text-white"
 >
 <ChevronRight className="h-5 w-5" />
 </button>
 </div>
 </div>
 );
}
