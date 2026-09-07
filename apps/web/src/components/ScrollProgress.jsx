import { useEffect, useState } from 'react';

function ScrollProgress() {
 const [progress, setProgress] = useState(0);

 useEffect(() => {
 const updateProgress = () => {
 const totalHeight = document.body.scrollHeight - window.innerHeight;
 const value = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
 setProgress(Math.min(100, Math.max(0, value)));
 };

 updateProgress();
 window.addEventListener('scroll', updateProgress, { passive: true });
 window.addEventListener('resize', updateProgress);

 return () => {
 window.removeEventListener('scroll', updateProgress);
 window.removeEventListener('resize', updateProgress);
 };
 }, []);

 return (
 <div aria-hidden="true" className="fixed left-0 top-0 z-[999] h-2 w-full overflow-hidden bg-secondary">
 <div
 className="h-full rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500 transition-[width] duration-150 ease-out"
 style={{ width: `${progress}%` }}
 />
 </div>
 );
}

export default ScrollProgress;
