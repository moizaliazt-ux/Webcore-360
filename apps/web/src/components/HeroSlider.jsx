import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';

const slides = [
 {
 id: 1,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/c1d07d6578c546af93dbb6b880dcac68.jpg',
 headline: 'Strategic Marketing That Drives Growth',
 subtext: 'Data-driven strategies aligned with your business goals',
 },
 {
 id: 2,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/e2ad6aecd622d2ce8c213f2254c0f6f1.jpg',
 headline: 'Creative Design That Captivates',
 subtext: 'Stunning visuals that communicate your brand message',
 },
 {
 id: 3,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/f72e57bfb91d911018222c0014037324.jpg',
 headline: 'Social Media That Builds Community',
 subtext: 'Engage audiences and amplify your brand across platforms',
 },
 {
 id: 4,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/bc909094c79930c03e1a11a6a32d33ee.jpg',
 headline: 'Technical Solutions That Scale',
 subtext: 'Robust infrastructure supporting your digital growth',
 },
 {
 id: 5,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/bd5e196c32f70554fada1b6b8e8038fa.jpg',
 headline: 'SEO That Increases Organic Visibility',
 subtext: 'Drive qualified traffic and rank higher in search results',
 },
 {
 id: 6,
 image: 'https://horizons-cdn.hostinger.com/53810c76-f4ab-48ae-b897-bafdb2b7670b/f56c894b16c4cde15627c92541d583b5.jpg',
 headline: 'Automation That Improves Efficiency',
 subtext: 'Streamline operations and focus on what matters most',
 },
];

function HeroSlider() {
 const [currentIndex, setCurrentIndex] = useState(0);
 const [isHovered, setIsHovered] = useState(false);
 const [touchStart, setTouchStart] = useState(null);
 const [touchEnd, setTouchEnd] = useState(null);

 const nextSlide = useCallback(() => {
 setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
 }, []);

 const prevSlide = useCallback(() => {
 setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
 }, []);

 const goToSlide = (index) => {
 setCurrentIndex(index);
 };

 // Autoplay
 useEffect(() => {
 if (isHovered) return;
 const timer = setInterval(nextSlide, 3000);
 return () => clearInterval(timer);
 }, [isHovered, nextSlide]);

 // Keyboard navigation
 useEffect(() => {
 const handleKeyDown = (e) => {
 if (e.key === 'ArrowLeft') prevSlide();
 if (e.key === 'ArrowRight') nextSlide();
 };
 window.addEventListener('keydown', handleKeyDown);
 return () => window.removeEventListener('keydown', handleKeyDown);
 }, [nextSlide, prevSlide]);

 // Touch handlers for swipe
 const minSwipeDistance = 50;
 const onTouchStart = (e) => {
 setTouchEnd(null);
 setTouchStart(e.targetTouches[0].clientX);
 };
 const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
 const onTouchEnd = () => {
 if (!touchStart || !touchEnd) return;
 const distance = touchStart - touchEnd;
 const isLeftSwipe = distance > minSwipeDistance;
 const isRightSwipe = distance < -minSwipeDistance;
 if (isLeftSwipe) nextSlide();
 if (isRightSwipe) prevSlide();
 };

 const handleNavClick = (e, href) => {
 e.preventDefault();
 const element = document.querySelector(href);
 if (element) {
 const offset = 80;
 const elementPosition = element.getBoundingClientRect().top;
 const offsetPosition = elementPosition + window.pageYOffset - offset;
 window.scrollTo({
 top: offsetPosition,
 behavior: 'smooth',
 });
 }
 };

 return (
 <section 
 id="hero"
 className="relative w-full h-[100dvh] overflow-hidden bg-black"
 onMouseEnter={() => setIsHovered(true)}
 onMouseLeave={() => setIsHovered(false)}
 onTouchStart={onTouchStart}
 onTouchMove={onTouchMove}
 onTouchEnd={onTouchEnd}
 aria-label="Hero Image Slider"
 >
 <AnimatePresence initial={false}>
 <motion.div
 key={currentIndex}
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.4, ease: "easeInOut" }}
 className="absolute inset-0"
 >
 <div 
 className="absolute inset-0 bg-cover bg-center bg-no-repeat"
 style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
 role="img"
 aria-label={slides[currentIndex].headline}
 />
 <div className="absolute inset-0 hero-gradient-overlay" />
 </motion.div>
 </AnimatePresence>

 <div className="relative z-10 h-full flex flex-col justify-center px-3 xs:px-4 sm-m:px-6 sm:px-12 lg:px-24 max-w-[1400px] mx-auto w-full">
 <AnimatePresence mode="wait">
 <motion.div
 key={currentIndex}
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: 20 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="max-w-3xl text-left"
 >
 <h1 
 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 xs:mb-6 leading-tight text-foreground dark:text-foreground dark:text-foreground dark:text-white text-shadow-sm"
 style={{ letterSpacing: '-0.02em' }}
 >
 {slides[currentIndex].headline}
 </h1>
 <p className="text-base xs:text-lg md:text-xl lg:text-2xl text-foreground dark:text-foreground dark:text-foreground dark:text-white/90 mb-8 xs:mb-10 leading-relaxed max-w-2xl text-shadow-sm">
 {slides[currentIndex].subtext}
 </p>
 <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4">
 <Button
 asChild
 size="lg"
 className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 active:scale-[0.98] text-base xs:text-lg px-6 py-4 xs:px-8 xs:py-6"
 >
 <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>
 Get in Touch
 </a>
 </Button>
 <Button
 asChild
 size="lg"
 variant="outline"
 className="w-full sm:w-auto bg-transparent text-foreground dark:text-foreground dark:text-foreground dark:text-white border-white hover:bg-muted hover:text-foreground dark:text-foreground dark:text-foreground dark:text-white transition-all duration-200 active:scale-[0.98] text-base xs:text-lg px-6 py-4 xs:px-8 xs:py-6"
 >
 <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>
 View Services
 </a>
 </Button>
 </div>
 </motion.div>
 </AnimatePresence>
 </div>

 {/* Dot Indicators */}
 <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
 {slides.map((_, index) => (
 <button
 key={index}
 onClick={() => goToSlide(index)}
 className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
 currentIndex === index 
 ? 'w-8 h-2.5 bg-primary' 
 : 'w-2.5 h-2.5 bg-secondary0 hover:bg-white/80'
 }`}
 aria-label={`Go to slide ${index + 1}`}
 aria-current={currentIndex === index}
 />
 ))}
 </div>
 </section>
 );
}

export default HeroSlider;
