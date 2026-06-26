import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading assets
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 800); // Cinematic pause at 100%
          return 100;
        }
        return prev + Math.floor(Math.random() * 5) + 1; // Random jumps for realism
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.2, 
        filter: "blur(20px)",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0A0A0A] text-white"
    >
      <div className="flex flex-col items-center relative z-10">
        
        {/* New Logo */}
        <div className="mb-12 animate-pulse">
          <Logo animate={true} />
        </div>
        
        {/* Speedometer/Progress bar feel */}
        <div className="w-64 md:w-96 h-[2px] bg-white/10 overflow-hidden relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white shadow-[0_0_10px_#ffffff]"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="mt-6 flex justify-between w-64 md:w-96 font-ui text-xs tracking-widest uppercase opacity-70">
          <span>Initializing Comms</span>
          <span>{progress}%</span>
        </div>
      </div>
      
      {/* Background glow for the gaming feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-50" />
    </motion.div>
  );
}
