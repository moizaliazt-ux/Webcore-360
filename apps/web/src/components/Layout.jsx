import { AnimatePresence, motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import CustomCursor from './CustomCursor.jsx';

import PageLoader from './PageLoader.jsx';
import ScrollToTop from './ScrollToTop.jsx';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { lazy, Suspense } from 'react';

const Hyperspeed = lazy(() => import('./Hyperspeed.jsx'));

const hyperspeedOptions = {
  distortion: 'turbulentDistortion',
  length: 400,
  roadWidth: 10,
  islandWidth: 2,
  lanesPerRoad: 3,
  fov: 90,
  fovSpeedUp: 150,
  speedUp: 2,
  carLightsFade: 0.4,
  totalSideLightSticks: 20,
  lightPairsPerRoadWay: 40,
  shoulderLinesWidthPercentage: 0.05,
  brokenLinesWidthPercentage: 0.1,
  brokenLinesLengthPercentage: 0.5,
  lightStickWidth: [0.12, 0.5],
  lightStickHeight: [1.3, 1.7],
  movingAwaySpeed: [60, 80],
  movingCloserSpeed: [-120, -160],
  carLightsLength: [12, 80],
  carLightsRadius: [0.05, 0.14],
  carWidthPercentage: [0.3, 0.5],
  carShiftX: [-0.8, 0.8],
  carFloorSeparation: [0, 5],
  colors: {
    roadColor: 0xffffff,
    islandColor: 0xf4f4f5,
    background: 0xffffff,
    shoulderLines: 0x000000,
    brokenLines: 0x000000,
    leftCars: [0x7C3AED, 0xA78BFA, 0x4C1D95],
    rightCars: [0x06B6D4, 0x3B82F6, 0x1E3A8A],
    sticks: 0x7C3AED,
  }
};

function Layout({ children }) {
 const location = useLocation();
 const navigate = useNavigate();
 const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
 const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 if (motionPreference) {
 document.documentElement.dataset.motion = 'reduced';
 }

  // Global click handler to redirect CTA buttons to /contact-us
  const handleGlobalClick = (e) => {
    // Only intercept <a> tags that look like CTA links (buttons wrapping anchors via asChild)
    const anchor = e.target.closest('a');
    if (anchor) {
      const href = anchor.getAttribute('href');
      // Skip if already going to contact-us, or if it's an external/utility link
      if (
        href === '/contact-us' ||
        href?.startsWith('http') ||
        href?.startsWith('mailto:') ||
        href?.startsWith('tel:') ||
        href?.includes('wa.me') ||
        href?.includes('calendly') ||
        href?.startsWith('#') ||
        anchor.getAttribute('target') === '_blank'
      ) {
        return;
      }
    }

    // Don't intercept raw <button> elements — those are functional UI (toggles, accordions, menus, etc.)
    // We only redirect anchor-based CTA buttons (Button asChild wrapping <Link> or <a>)
  };

 document.addEventListener('click', handleGlobalClick, true);

 // Initialize smooth scrolling with Lenis
 const lenis = new Lenis({
 duration: 1.2,
 easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
 orientation: 'vertical',
 gestureOrientation: 'vertical',
 smoothWheel: true,
 wheelMultiplier: 1,
 touchMultiplier: 2,
 });

 let rafId;
 function raf(time) {
 lenis.raf(time);
 rafId = requestAnimationFrame(raf);
 }
 rafId = requestAnimationFrame(raf);

 // Update ScrollTrigger on scroll if GSAP is loaded
 lenis.on('scroll', () => {
 if (window.ScrollTrigger) {
 window.ScrollTrigger.update();
 }
 });

 const loadTimer = setTimeout(() => setIsLoading(false), 900);
 return () => {
 clearTimeout(loadTimer);
 cancelAnimationFrame(rafId);
 lenis.destroy();
 document.removeEventListener('click', handleGlobalClick, true);
 };
 }, [navigate]);

 return (
 <div className="min-h-screen overflow-x-hidden text-foreground">
 <div className="fixed inset-0 z-[0] overflow-hidden bg-background pointer-events-none">
 <Suspense fallback={null}>
  <Hyperspeed effectOptions={hyperspeedOptions} />
 </Suspense>
 {/* Overlay to ensure text readability */}
 <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background/90 pointer-events-none" />
 </div>

 {/* CustomCursor removed */}
 <ScrollToTop />
 {isLoading && <PageLoader />}

 <Header />
 <AnimatePresence mode="wait" initial={false}>
 <motion.main
 key={location.pathname}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -15 }}
 transition={{ duration: 0.45, ease: 'easeOut' }}
 className="relative overflow-x-hidden"
 >
 {children}
 </motion.main>
 </AnimatePresence>
 <Footer />
 </div>
 );
}

export default Layout;
