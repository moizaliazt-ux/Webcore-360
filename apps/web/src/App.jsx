import React, { Suspense, lazy } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';

import Layout from '@/components/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage.jsx'));
const ServicesPage = lazy(() => import('./pages/ServicesPage.jsx'));
const PricingPage = lazy(() => import('./pages/PricingPage.jsx'));
const ContactUs = lazy(() => import('./pages/ContactUs.jsx'));
const AboutUs = lazy(() => import('./pages/AboutUs.jsx'));
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'));
const StrategicMarketing = lazy(() => import('./pages/services/StrategicMarketing.jsx'));
const CreativeDesign = lazy(() => import('./pages/services/CreativeDesign.jsx'));
const GraphicDesign = lazy(() => import('./pages/services/GraphicDesign.jsx'));
const VideoEditing = lazy(() => import('./pages/services/VideoEditing.jsx'));
const ContentWriting = lazy(() => import('./pages/services/ContentWriting.jsx'));
const SocialMediaManagement = lazy(() => import('./pages/services/SocialMediaManagement.jsx'));
const TechnicalSolutions = lazy(() => import('./pages/services/TechnicalSolutions.jsx'));
const SEO = lazy(() => import('./pages/services/SEO.jsx'));
const GoogleAds = lazy(() => import('./pages/services/GoogleAds.jsx'));
const AutomationServices = lazy(() => import('./pages/services/AutomationServices.jsx'));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage.jsx'));
const WhyChooseUs = lazy(() => import('./pages/WhyChooseUs.jsx'));
const PlanYourGrowth = lazy(() => import('./pages/process/PlanYourGrowth.jsx'));
const HandoverTheProject = lazy(() => import('./pages/process/HandoverTheProject.jsx'));
const CountTheProfit = lazy(() => import('./pages/process/CountTheProfit.jsx'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="min-h-screen grid place-items-center text-foreground">Loading experience...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/services/strategic-marketing" element={<StrategicMarketing />} />
            <Route path="/services/creative-design" element={<CreativeDesign />} />
            <Route path="/services/graphic-design" element={<GraphicDesign />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
            <Route path="/services/technical-solutions" element={<TechnicalSolutions />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/google-ads" element={<GoogleAds />} />
            <Route path="/services/automation-services" element={<AutomationServices />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/how-it-works/plan-your-growth" element={<PlanYourGrowth />} />
            <Route path="/how-it-works/handover-the-project" element={<HandoverTheProject />} />
            <Route path="/how-it-works/count-the-profit" element={<CountTheProfit />} />
          </Routes>
        </Suspense>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;