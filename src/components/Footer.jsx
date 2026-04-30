import { ArrowUpRight, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-transparent border-t border-white/5 pt-16 md:pt-32 pb-6 md:pb-10 px-8 md:px-20 font-ui overflow-hidden">
      
      {/* Decorative background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-[#4FA88A]/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#4FA88A]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Social Links */}
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-6 mb-6 md:pb-12 md:mb-12 gap-y-6 gap-x-4 md:gap-8">
          <a href="#" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-[#4FA88A] transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-[#4FA88A]/20 group-hover:border-[#4FA88A]/50 group-hover:shadow-[0_0_20px_rgba(79,168,138,0.2)] transition-all duration-300">
               <Github className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">GitHub</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-[#4FA88A] transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-[#4FA88A]/20 group-hover:border-[#4FA88A]/50 group-hover:shadow-[0_0_20px_rgba(79,168,138,0.2)] transition-all duration-300">
               <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-[#4FA88A] transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-[#4FA88A]/20 group-hover:border-[#4FA88A]/50 group-hover:shadow-[0_0_20px_rgba(79,168,138,0.2)] transition-all duration-300">
               <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">Instagram</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a href="#" className="flex items-center gap-2 md:gap-4 text-gray-400 hover:text-[#4FA88A] transition-all duration-300 group">
            <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display font-medium text-white group-hover:bg-[#4FA88A]/20 group-hover:border-[#4FA88A]/50 group-hover:shadow-[0_0_20px_rgba(79,168,138,0.2)] transition-all duration-300">
               <Twitter className="w-4 h-4 md:w-5 md:h-5" />
            </div>
            <span className="tracking-widest uppercase text-xs font-bold">Twitter X</span>
            <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Navigation */}
        <div className="flex flex-row justify-between items-center mb-12 md:mb-32 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 w-full">
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-left md:text-center">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Features</a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center">
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-right md:text-center">
            <a href="#" className="hover:text-white transition-colors">Projects</a>
            <a href="#" className="hover:text-white transition-colors">Pricing</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-6 w-full">
          
          <div className="w-full md:w-auto flex justify-between md:block text-xs font-ui text-gray-600 order-2 md:order-1 px-4 md:px-0 mt-4 md:mt-0">
            <span>© TripSync 2026 | <a href="#" className="hover:text-white transition-colors">License</a></span>
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
