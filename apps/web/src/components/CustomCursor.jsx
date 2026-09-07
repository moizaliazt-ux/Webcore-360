import { useEffect, useRef } from 'react';

function CustomCursor() {
 const dotRef = useRef(null);
 const glowRef = useRef(null);
 const hiddenRef = useRef(true);

 useEffect(() => {
 if (typeof window === 'undefined') return;

 const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;

 if (prefersReducedMotion || isTouchDevice) return;

 document.documentElement.classList.add('custom-cursor-enabled');

 const handleMouseMove = (event) => {
 const x = event.clientX;
 const y = event.clientY;

 if (dotRef.current) {
 dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
 }
 if (glowRef.current) {
 glowRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
 }

 if (hiddenRef.current) {
 hiddenRef.current = false;
 if (dotRef.current) dotRef.current.style.opacity = '1';
 if (glowRef.current) glowRef.current.style.opacity = '1';
 }
 };

 const hideCursor = () => {
 hiddenRef.current = true;
 if (dotRef.current) dotRef.current.style.opacity = '0';
 if (glowRef.current) glowRef.current.style.opacity = '0';
 };

 window.addEventListener('mousemove', handleMouseMove, { passive: true });
 window.addEventListener('mouseleave', hideCursor);
 window.addEventListener('mouseenter', handleMouseMove);

 return () => {
 window.removeEventListener('mousemove', handleMouseMove);
 window.removeEventListener('mouseleave', hideCursor);
 window.removeEventListener('mouseenter', handleMouseMove);
 document.documentElement.classList.remove('custom-cursor-enabled');
 };
 }, []);

 return (
 <>
 <div ref={glowRef} className="custom-cursor-glow pointer-events-none fixed left-0 top-0 z-[9999] opacity-0" />
 <div ref={dotRef} className="custom-cursor-dot pointer-events-none fixed left-0 top-0 z-[9999] opacity-0" />
 </>
 );
}

export default CustomCursor;
