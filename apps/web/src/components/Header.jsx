import React, { useEffect, useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, BarChart3, ChevronDown, Code2, Menu, Sparkles, Target } from 'lucide-react';
import Logo from './Logo.jsx';
import MagneticWrapper from './MagneticWrapper.jsx';


function Header() {
 const [isScrolled, setIsScrolled] = useState(false);
 const [isOpen, setIsOpen] = useState(false);
 const [servicesOpen, setServicesOpen] = useState(false);
 const [mobileSection, setMobileSection] = useState(null);
 const navigate = useNavigate();
 const location = useLocation();
 const isServicesActive = location.pathname.startsWith('/services');

 const megaMenuCategories = [
 {
 title: 'Marketing',
 items: [
 { label: 'Strategic Marketing', to: '/services/strategic-marketing' },
 { label: 'SEO', to: '/services/seo' },
 { label: 'Google Ads', to: '/services/google-ads' },
 { label: 'Content Writing', to: '/services/content-writing' },
 { label: 'Social Media', to: '/services/social-media-management' },
 ],
 },
 {
 title: 'Design & Creative',
 items: [
 { label: 'Creative Design', to: '/services/creative-design' },
 { label: 'Graphic Design', to: '/services/graphic-design' },
 { label: 'Video Editing', to: '/services/video-editing' },
 ],
 },
 {
 title: 'Tech Solutions',
 items: [
 { label: 'Technical Solutions', to: '/services/technical-solutions' },
 { label: 'Automation Services', to: '/services/automation-services' },
 ],
 },
 ];



 useEffect(() => {
 const handleScroll = () => {
 setIsScrolled(window.scrollY > 20);
 };

 window.addEventListener('scroll', handleScroll);
 return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 const navLinks = [
 { label: 'About Us', path: '/about-us', type: 'route' },
 { label: 'Process', path: '/how-it-works', type: 'route' },
 { label: 'Why choose us', path: '/why-choose-us', type: 'route' },
 { label: 'Pricing', path: '/pricing', type: 'route' },
 { label: 'Portfolio', path: '/portfolio', type: 'route' },
 ];

 const handleNavClick = (event, href) => {
 event.preventDefault();
 setIsOpen(false);
 const element = document.querySelector(href);
 if (element) {
 const offset = 90;
 const elementPosition = element.getBoundingClientRect().top;
 const offsetPosition = elementPosition + window.pageYOffset - offset;
 window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
 }
 };

 const handleLogoClick = (event) => {
 event.preventDefault();
 navigate('/');
 window.scrollTo({ top: 0, behavior: 'smooth' });
 };

 return (
 <header
 className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
 isScrolled
  ? 'border-b border-white/10 bg-[#0a1020]/80 backdrop-blur-md shadow-lg'
 : 'border-b border-transparent bg-transparent'
 }`}
 >
 <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
 <div className="flex h-16 sm:h-20 items-center justify-between">
 <MagneticWrapper strength={0.1}>
 <a href="/" onClick={handleLogoClick} className="flex items-center transition-all duration-200 hover:opacity-80 active:scale-95">
 <Logo className="h-8 w-auto" />
 </a>
 </MagneticWrapper>

 <nav className="hidden items-center gap-2 lg:flex">
 <div
 className="relative"
 onMouseEnter={() => setServicesOpen(true)}
 onMouseLeave={() => setServicesOpen(false)}
 >
 <button
 type="button"
 onClick={() => setServicesOpen((prev) => !prev)}
 className={`flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-card ${
 isServicesActive ? 'bg-card text-violet-500' : 'bg-secondary text-foreground dark:text-white'
 }`}
 >
 Services
 <ChevronDown
 className={`h-4 w-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-violet-500' : ''}`}
 />
 </button>

 <AnimatePresence>
 {servicesOpen && (
 <motion.div
 initial={{ opacity: 0, y: -8 }}
 animate={{ opacity: 1, y: 0 }}
 exit={{ opacity: 0, y: -8 }}
 transition={{ duration: 0.2, ease: "easeOut" }}
 className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+0.5rem)] z-40 w-[800px]"
 >
 <div className="overflow-hidden rounded-[22px] border border-border bg-background/90 shadow-md ">
 <div className="grid grid-cols-3 gap-6 p-8">
 {megaMenuCategories.map((group) => (
 <div key={group.title} className="flex flex-col gap-4">
 <h4 className="text-xs font-bold uppercase tracking-widest text-violet-500">
 {group.title}
 </h4>
 <div className="flex flex-col gap-2">
 {group.items.map((item) => {
 const isActive = location.pathname === item.to;
 return (
 <Link
 key={item.label}
 to={item.to}
 className={`group flex items-center justify-between rounded-[14px] p-3 -mx-3 transition-all duration-200 hover:bg-white/5 ${isActive ? 'bg-white/5' : ''}`}
 onClick={() => setServicesOpen(false)}
 >
 <span className={`text-[15px] font-medium transition-colors group-hover:text-foreground dark:text-white ${isActive ? 'text-foreground dark:text-white' : 'text-muted-foreground'}`}>
 {item.label}
 </span>
 <ArrowRight className={`h-4 w-4 text-violet-500 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'}`} />
 </Link>
 );
 })}
 </div>
 </div>
 ))}
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>

 {navLinks.map((link) =>
 link.type === 'route' ? (
 <Link
 key={link.label}
 to={link.path}
 className={`rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-white/5 hover:text-foreground dark:text-white ${
 location.pathname === link.path ? 'bg-white/5 text-foreground dark:text-white' : 'text-muted-foreground'
 }`}
 >
 {link.label}
 </Link>
 ) : (
 <a
 key={link.href}
 href={link.href}
 onClick={(event) => handleNavClick(event, link.href)}
 className="rounded-full px-4 py-2.5 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-white/5 hover:text-foreground dark:text-white"
 >
 {link.label}
 </a>
 )
 )}
 </nav>

 <div className="hidden items-center gap-4 lg:flex">
 <MagneticWrapper strength={0.15}>
 <Button asChild className={`rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-5 text-[15px] font-semibold text-white border-0 shadow-md transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
 location.pathname === '/contact-us' ? 'ring-2 ring-violet-500 ring-offset-2 ring-offset-background' : ''
 }`}>
 <Link to="/contact-us" className="flex items-center gap-2">
 <Sparkles className="h-4 w-4" />
 Contact Us
 </Link>
 </Button>
 </MagneticWrapper>
 </div>

 <Sheet open={isOpen} onOpenChange={setIsOpen}>
 <SheetTrigger asChild className="lg:hidden">
 <Button variant="ghost" size="icon" aria-label="Open menu" className="rounded-full text-foreground dark:text-white transition-all duration-300 hover:bg-white/10">
 <Menu className="h-6 w-6" />
 </Button>
 </SheetTrigger>
 <SheetContent side="right" className="w-full max-w-[320px] bg-background/95 border-l border-border">
 <div className="mt-8 space-y-6">
 <div className="space-y-3">
 <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Services</h3>
 {megaMenuCategories.map((group, index) => (
 <div key={group.title} className="rounded-[22px] border border-border bg-secondary p-4">
 <button
 type="button"
 onClick={() => setMobileSection(mobileSection === index ? null : index)}
 className={`flex w-full items-center justify-between text-left text-[15px] font-semibold transition-all duration-300 hover:text-violet-500 ${
 group.items.some(item => location.pathname === item.to) ? 'text-violet-500' : 'text-foreground dark:text-white'
 }`}
 >
 <span>{group.title}</span>
 <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileSection === index ? 'rotate-180' : ''}`} />
 </button>
 <AnimatePresence>
 {mobileSection === index && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 transition={{ duration: 0.2 }}
 className="overflow-hidden"
 >
 <div className="mt-4 space-y-1">
 {group.items.map((item) => {
 const isActive = location.pathname === item.to;
 return (
 <Link
 key={item.label}
 to={item.to}
 onClick={() => setIsOpen(false)}
 className={`block rounded-[14px] px-3 py-2 text-[14px] font-medium transition-all hover:bg-white/5 hover:text-foreground dark:text-white ${
 isActive ? 'bg-white/5 text-foreground dark:text-white' : 'text-muted-foreground'
 }`}
 >
 {item.label}
 </Link>
 );
 })}
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </div>
 ))}
 </div>
 <div className="space-y-2">
 <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">Navigation</h3>
 {navLinks.map((link) =>
 link.type === 'route' ? (
 <Link
 key={link.label}
 to={link.path}
 onClick={() => setIsOpen(false)}
 className={`block rounded-[22px] border px-4 py-3.5 text-[15px] font-medium transition-all hover:border-border hover:text-foreground dark:text-white ${
 location.pathname === link.path ? 'border-border bg-card text-foreground dark:text-white' : 'border-border bg-secondary text-muted-foreground'
 }`}
 >
 {link.label}
 </Link>
 ) : (
 <a
 key={link.href}
 href={link.href}
 onClick={(event) => handleNavClick(event, link.href)}
 className="block rounded-[22px] border border-border bg-secondary px-4 py-3.5 text-[15px] font-medium text-muted-foreground transition-all hover:border-border hover:text-foreground dark:text-white"
 >
 {link.label}
 </a>
 )
 )}
 </div>
 </div>
 </SheetContent>
 </Sheet>
 </div>
 </div>
 </header>
 );
}

export default Header;
