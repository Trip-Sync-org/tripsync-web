import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBtnHighlight, setIsBtnHighlight] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsBtnHighlight(true);
      setTimeout(() => setIsBtnHighlight(false), 800);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNavClick = (id) => {
    if (location.pathname !== '/') {
      // If we're not on the home page, go to home page first
      navigate('/');
      // Need a small delay to let the page render before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#0A0A0A]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300 pointer-events-auto">
      <div className="w-full px-4 md:px-12 h-20 md:h-24 flex items-center justify-between">
        
        {/* Logo */}
        <div className="shrink-0 cursor-pointer hover:opacity-80 transition-opacity flex items-center" onClick={() => handleNavClick('hero')}>
          <Logo layout="horizontal" />
        </div>

        {/* Links (Desktop) */}
        <div className="hidden md:flex items-center gap-8 bg-black/20 rounded-full px-8 py-3 border border-white/5">
          <button onClick={() => handleNavClick('offerings')} className="text-xs tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">Features</button>
          <Link to="/tech" className="text-xs tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">Tech</Link>
          <button onClick={() => window.location.href = "https://media.tripsync.live/app/tripsync-v1.0.1.apk"} className="text-xs tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">App</button>
          <button onClick={() => handleNavClick('whoweare')} className="text-xs tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">About</button>
        </div>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4">
          <button 
            onClick={() => window.location.href = "https://media.tripsync.live/app/tripsync-v1.0.1.apk"} 
            className={`whitespace-nowrap border px-5 py-2.5 md:px-8 md:py-3 rounded-full text-sm md:text-base font-bold tracking-wide transition-all duration-500 ${
              isBtnHighlight 
                ? 'bg-white text-black border-white scale-105 shadow-[0_0_35px_rgba(255,255,255,0.4)]' 
                : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] shadow-[0_0_15px_rgba(255,255,255,0.05)]'
            }`}
          >
            Download App
          </button>
          
          <button 
            className="md:hidden text-white/70 hover:text-white p-2 mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 gap-6">
              <button onClick={() => { handleNavClick('offerings'); setIsMobileMenuOpen(false); }} className="text-left text-sm tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">Features</button>
              <Link to="/tech" onClick={() => setIsMobileMenuOpen(false)} className="text-left text-sm tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">Tech</Link>
              <button onClick={() => { window.location.href = "https://media.tripsync.live/app/tripsync-v1.0.1.apk"; setIsMobileMenuOpen(false); }} className="text-left text-sm tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">App</button>
              <button onClick={() => { handleNavClick('whoweare'); setIsMobileMenuOpen(false); }} className="text-left text-sm tracking-widest uppercase font-ui text-white/60 hover:text-white transition-colors">About</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
