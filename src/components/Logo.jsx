import { motion } from "framer-motion";

export default function Logo({ className = "", animate = false }) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icon Part */}
      <div className="relative w-24 h-24 mb-4">
        {/* Solid Green Circle */}
        <motion.div 
          animate={animate ? { y: [0, -5, 0] } : {}}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-2 w-16 h-16 rounded-full bg-[#4FA88A]"
        />
        
        {/* Light Blue Crescent */}
        <motion.svg 
          animate={animate ? { rotate: [0, 5, -5, 0] } : {}}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          viewBox="0 0 100 100" 
          className="absolute bottom-0 left-0 w-20 h-20 text-[#cbeae4]"
        >
          <path 
            fill="currentColor" 
            d="M 10 40 C 10 80, 40 90, 80 80 C 60 85, 30 75, 20 40 Z" 
          />
        </motion.svg>
      </div>

      {/* Text Part */}
      <h2 className="font-display font-extrabold text-4xl tracking-[0.15em] text-white" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
        TRIP<span className="text-white/90">SYNC</span>
      </h2>
    </div>
  );
}
