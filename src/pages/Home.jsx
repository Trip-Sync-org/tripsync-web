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
    <div className="pointer-events-auto w-full">
      <Hero />
      
      <div id="features">
        <Features />
        <Offerings />
      </div>
      
      <div id="dashboard">
        <Dashboard />
      </div>
      
      <div id="whoweare" className="pointer-events-auto">
        <WhoWeAre />
        <Stats />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
