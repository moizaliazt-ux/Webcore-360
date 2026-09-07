import React from 'react';
import { Mail, Phone, MessageCircle, Facebook, Instagram, Linkedin, Pin, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { StaggerContainer, StaggerItem, ScaleIn, FadeIn } from './AnimationWrappers.jsx';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="text-foreground py-8 xs:py-10 sm-m:py-12 px-3 xs:px-4 sm:px-6 lg:px-8 font-sans z-50 relative">
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-foreground to-transparent opacity-50" />
            <div className="mx-auto max-w-7xl">
                {/* Top Section */}
                <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 gap-y-12 mb-12 mt-6">

                    {/* Column 1: Brand & Contact */}
                    <StaggerItem className="flex flex-col gap-6 lg:col-span-2">
                        <div className="flex items-center gap-3">
                            <Link to="/" className="flex items-center">
                                <Logo className="h-8 w-auto" />
                            </Link>
                        </div>

                        <div className="flex flex-col gap-4 text-sm text-muted-foreground font-medium mt-2">
                            <a href="mailto:info@webcore360.com" className="flex items-center gap-3 hover:text-foreground transition-colors">
                                <Mail className="h-4 w-4 text-foreground flex-shrink-0" />
                                info@webcore360.com
                            </a>
                            <a href="tel:+16099824542" className="flex items-center gap-3 hover:text-foreground transition-colors">
                                <Phone className="h-4 w-4 text-foreground flex-shrink-0" />
                                +1 (609) 982-4542
                            </a>
                            <a href="https://wa.me/16099824542" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground transition-colors">
                                <MessageCircle className="h-4 w-4 text-foreground flex-shrink-0" />
                                +1 (609) 982-4542
                            </a>
                            <a href="https://maps.google.com/?q=1+Britton+Pl+Ste+6,+Voorhees+Township,+NJ+08043,+United+States" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-foreground transition-colors text-left">
                                <MapPin className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                                <span>
                                    <strong className="block text-foreground">USA Office</strong>
                                    Echelon Professional Center<br />
                                    1 Britton Pl Ste 6, Voorhees Township<br />
                                    NJ 08043, United States
                                </span>
                            </a>
                            <a href="https://maps.google.com/?q=Plaza+%23+178+CCA,+Commercial+Sector+Sector+CCA+Dha+Phase+4,+Lahore,+54000" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-foreground transition-colors text-left">
                                <MapPin className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" />
                                <span>
                                    <strong className="block text-foreground">Pakistan Office</strong>
                                    Plaza # 178 CCA, Commercial Sector<br />
                                    CCA Dha Phase 4<br />
                                    Lahore, 54000
                                </span>
                            </a>
                        </div>

                        <div className="flex items-center gap-3 mt-2">
                            <a href="https://www.instagram.com/webcore360_official/" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded bg-secondary border border-border text-foreground hover:text-foreground hover:border-foreground/10 transition-colors">
                                <Instagram className="h-4 w-4" />
                            </a>
                            <a href="https://www.linkedin.com/company/webcore-360/" target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded bg-secondary border border-border text-foreground hover:text-foreground hover:border-foreground/10 transition-colors">
                                <Linkedin className="h-4 w-4" fill="currentColor" stroke="none" />
                            </a>
                        </div>
                    </StaggerItem>

                    {/* Column 2: Company */}
                    <StaggerItem className="flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-foreground">Company</h3>
                        <div className="flex flex-col gap-4 text-[13px] text-muted-foreground font-medium">
                            <Link to="/about-us" className="hover:text-foreground transition-colors">About Us</Link>
                            <Link to="/why-choose-us" className="hover:text-foreground transition-colors">Why Choose Us</Link>
                            <Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
                            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
                            <Link to="/how-it-works" className="hover:text-foreground transition-colors">How It Works</Link>
                            <Link to="/contact-us" className="hover:text-foreground transition-colors">Contact Us</Link>
                            <Link to="/services" className="hover:text-foreground transition-colors">All Services</Link>
                        </div>
                    </StaggerItem>

                    {/* Column 3: Marketing */}
                    <StaggerItem className="flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-foreground">Marketing</h3>
                        <div className="flex flex-col gap-4 text-[13px] text-muted-foreground font-medium">
                            <Link to="/services/strategic-marketing" className="hover:text-foreground transition-colors">Strategic Marketing</Link>
                            <Link to="/services/seo" className="hover:text-foreground transition-colors">SEO</Link>
                            <Link to="/services/google-ads" className="hover:text-foreground transition-colors">Google Ads</Link>
                            <Link to="/services/content-writing" className="hover:text-foreground transition-colors">Content Writing</Link>
                            <Link to="/services/social-media-management" className="hover:text-foreground transition-colors">Social Media</Link>
                        </div>
                    </StaggerItem>

                    {/* Column 4: Design & Media */}
                    <StaggerItem className="flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-foreground">Design & Media</h3>
                        <div className="flex flex-col gap-4 text-[13px] text-muted-foreground font-medium">
                            <Link to="/services/creative-design" className="hover:text-foreground transition-colors">Creative Design</Link>
                            <Link to="/services/graphic-design" className="hover:text-foreground transition-colors">Graphic Design</Link>
                            <Link to="/services/video-editing" className="hover:text-foreground transition-colors">Video Editing</Link>
                        </div>
                    </StaggerItem>

                    {/* Column 5: Tech Solutions */}
                    <StaggerItem className="flex flex-col gap-5">
                        <h3 className="text-lg font-bold text-foreground">Tech Solutions</h3>
                        <div className="flex flex-col gap-4 text-[13px] text-muted-foreground font-medium">
                            <Link to="/services/technical-solutions" className="hover:text-foreground transition-colors">Technical Solutions</Link>
                            <Link to="/services/automation-services" className="hover:text-foreground transition-colors">Automation Services</Link>
                        </div>
                    </StaggerItem>

                </StaggerContainer>

                {/* Bottom Section */}
                <FadeIn delay={0.4} className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-muted-foreground border-t border-border pt-6 pb-4">
                    <p>© Copyright {currentYear} by Webcore360. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                        <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Sitemap</a>
                        <a href="#" className="hover:text-foreground transition-colors">IMS Policy</a>
                        <a href="#" className="hover:text-foreground transition-colors">Terms & Conditions</a>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}

export default Footer;
