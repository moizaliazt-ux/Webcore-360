import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

function PageLoader() {
 return (
 <AnimatePresence>
 <motion.div
 className="fixed inset-0 z-[1200] grid place-items-center bg-slate-950/95 "
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 transition={{ duration: 0.45 }}
 >
 <div className="flex flex-col items-center gap-4 rounded-[22px] border border-border bg-secondary p-8 text-center shadow-md">
 <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-foreground/10">
 <div className="absolute inset-0 rounded-full border border-foreground/30 blur-xl" />
 <Loader2 className="relative h-10 w-10 text-foreground dark:text-foreground animate-spin" />
 </div>

 <div className="space-y-2">
 <p className="text-sm uppercase tracking-[0.35em] text-foreground dark:text-foreground">Preparing your experience</p>
 <div className="mx-auto flex h-3 w-28 overflow-hidden rounded-full bg-slate-950/70">
 <motion.div
 className="h-full rounded-full bg-gradient-to-r from-foreground via-fuchsia-500 to-violet-500"
 animate={{ x: ['-90%', '120%'] }}
 transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
 />
 </div>
 </div>
 </div>
 </motion.div>
 </AnimatePresence>
 );
}

export default PageLoader;
