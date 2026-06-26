import Hero from '../components/Hero';
import Features from '../components/Features';
import Offerings from '../components/Offerings';
import Dashboard from '../components/Dashboard';
import WhoWeAre from '../components/WhoWeAre';
import Stats from '../components/Stats';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="pointer-events-auto w-full bg-transparent">
      {/* Hero Section - transparent to see 3D Scene */}
      <div className="relative">
        <Hero />
        {/* Soft radial white light glows for depth and visual contrast */}
        <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-white/[0.03] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-white/[0.015] blur-[130px] rounded-full pointer-events-none" />
      </div>
      
      {/* Hero to Features Transition Divider */}
      <div className="w-full h-48 bg-transparent" />
      
      {/* Features Section - Transparent layout wrapper */}
      <div id="features" className="relative bg-transparent py-16 md:py-28 overflow-hidden text-neutral-900">
        <Features />
      </div>
      
      {/* Features to Offerings Transition Divider */}
      <div className="w-full h-48 bg-transparent" />
      
      {/* Offerings Section - Transparent to see 3D Phone on the right */}
      <div id="offerings" className="relative bg-transparent py-16 md:py-28 overflow-hidden">
        {/* Soft background light */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full pointer-events-none" />
        <Offerings />
      </div>
      
      {/* Offerings to Dashboard Transition Divider */}
      <div className="w-full h-48 bg-transparent" />
      
      {/* Dashboard Section - Transparent layout wrapper */}
      <div id="dashboard" className="relative py-16 md:py-28 overflow-hidden bg-transparent text-neutral-900">
        <Dashboard />
      </div>
      
      {/* Dashboard to WhoWeAre Transition Divider */}
      <div className="w-full h-48 bg-transparent" />
      
      {/* About & Footer Sections - Translucent grey-to-black transition backdrop */}
      <div id="whoweare" className="pointer-events-auto relative bg-transparent py-16 md:py-24 overflow-hidden">
        {/* Backlights for Pillars & Stats */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-white/[0.01] blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-1/3 left-10 w-[600px] h-[600px] bg-white/[0.01] blur-[140px] rounded-full pointer-events-none" />
        
        <WhoWeAre />
        
        <div className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-12" />
        
        <Stats />
        
        <div className="w-3/4 mx-auto h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent my-12" />
        
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
