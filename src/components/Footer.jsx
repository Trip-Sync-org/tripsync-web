import { ArrowUpRight, Linkedin, Instagram, Twitter, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-transparent border-t border-white/5 pt-16 md:pt-32 pb-6 md:pb-10 px-8 md:px-20 font-ui overflow-hidden">
      
      {/* Decorative background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-white/2 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Social Links */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 mb-6 md:pb-12 md:mb-12 gap-y-6 gap-x-4 md:gap-8">
          <a href="https://www.linkedin.com/company/tripsynclive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
               <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="https://www.instagram.com/tripsync.live" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
               <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">Instagram</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="https://x.com/TripSynclive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
               <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">Twitter X</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="mailto:support@tripsync.live" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-white transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-white/10 group-hover:border-white/30 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300">
               <Mail className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">Email</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Navigation: About, Feature, FAQ, Project, Pricing Container along with Terms & Conditions */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-row justify-between items-start md:items-center mb-12 md:mb-32 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 w-full gap-y-6 gap-x-4">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-left md:text-center">
            <button onClick={() => handleNavClick('whoweare')} className="hover:text-white transition-colors text-left uppercase">About</button>
            <button onClick={() => handleNavClick('offerings')} className="hover:text-white transition-colors text-left uppercase">Features</button>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-left md:text-center">
            <button onClick={() => handleNavClick('features')} className="hover:text-white transition-colors text-left uppercase">FAQs</button>
            <Link to="/tech" className="hover:text-white transition-colors text-left uppercase">Projects</Link>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-left md:text-center">
            <button onClick={() => handleNavClick('dashboard')} className="hover:text-white transition-colors text-left uppercase">Pricing</button>
            <Link to="/terms" className="hover:text-white transition-colors text-left uppercase text-white/70">Terms & Conditions</Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full">
          
          <div className="w-full md:w-auto flex flex-wrap justify-between md:flex-col gap-2 text-xs font-ui text-gray-600 order-2 md:order-1 px-4 md:px-0 mt-4 md:mt-0">
            <span>© TripSync 2026 | <Link to="/terms" className="hover:text-white transition-colors">Terms</Link> | <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link></span>
            <span className="md:hidden">Designed by Madlabs.</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none select-none order-1 md:order-2 w-full md:w-auto text-center">
            TRIPSYNC
          </h1>
          
          <div className="hidden md:block text-xs font-ui text-gray-600 text-right order-3">
            Designed by Madlabs.
          </div>
        </div>
      </div>
    </footer>
  );
}
