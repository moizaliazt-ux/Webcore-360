import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

function ThemeSwitcher() {
 const { resolvedTheme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => setMounted(true), []);

 if (!mounted) return null;

 const isDark = resolvedTheme === 'dark';

 return (
 <button
 type="button"
 onClick={() => setTheme(isDark ? 'light' : 'dark')}
 className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-all duration-300 hover:border-foreground/10 hover:bg-muted"
 aria-label="Toggle theme"
 >
 {isDark
 ? <Sun className="h-5 w-5 text-amber-400" />
 : <Moon className="h-5 w-5 text-slate-600" />
 }
 </button>
 );
}

export default ThemeSwitcher;
