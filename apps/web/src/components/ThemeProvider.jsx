import { useEffect, useState } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';

function ThemeProvider({ children }) {
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
 setMounted(true);
 }, []);

 return (
 <NextThemeProvider attribute="class" defaultTheme="light" forcedTheme="light">
 {mounted ? children : null}
 </NextThemeProvider>
 );
}

export default ThemeProvider;
