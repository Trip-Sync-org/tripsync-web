import { Apple, Play, Users, MapPin, Radio } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-20 overflow-hidden pointer-events-none pt-20">
      
      {/* Floating App Data Cards */}
      <motion.div 
        initial={{ opacity: 0, x: -50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.5 }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
        className="absolute top-28 left-4 md:top-32 md:left-16 bg-[#111915]/80 backdrop-blur-md border border-[#4FA88A]/20 p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4 z-0"
      >
        <div className="w-10 h-10 rounded-full bg-[#4FA88A]/20 flex items-center justify-center">
          <Users className="w-5 h-5 text-[#4FA88A]" />
        </div>
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Active Convoy</p>
          <p className="text-sm font-bold text-white">12 Riders Synced</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50, y: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, 15, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.7 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
        className="absolute bottom-28 left-4 md:bottom-32 md:left-32 bg-[#111915]/80 backdrop-blur-md border border-[#4FA88A]/20 p-4 rounded-2xl shadow-2xl hidden lg:flex items-center gap-4 z-20"
      >
        <div className="w-10 h-10 rounded-full bg-[#4FA88A]/20 flex items-center justify-center">
          <MapPin className="w-5 h-5 text-[#4FA88A]" />
        </div>
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Route Integrity</p>
          <p className="text-sm font-bold text-[#4FA88A]">100% On Course</p>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: [0, -8, 0] }}
        transition={{ opacity: { duration: 1, delay: 0.9 }, y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
        className="absolute top-1/2 -translate-y-1/2 left-4 md:left-[50%] bg-[#111915]/80 backdrop-blur-md border border-white/5 p-4 rounded-2xl shadow-2xl hidden xl:flex items-center gap-4 z-20"
      >
        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
          <Radio className="w-5 h-5 text-white/70" />
        </div>
        <div>
          <p className="text-[10px] text-white/50 uppercase tracking-widest mb-0.5">Comms Status</p>
          <p className="text-sm font-bold text-white">Channel Open</p>
        </div>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="z-10 w-full md:w-[55%] pointer-events-auto"
      >
        <div className="bg-[#0a0f0d]/60 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-10 md:p-14 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),_0_0_30px_rgba(79,168,138,0.05)] text-left relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-[80%] h-32 bg-[#4FA88A]/10 blur-[80px] rounded-full group-hover:bg-[#4FA88A]/20 transition-colors duration-700" />
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-display font-bold leading-[0.95] tracking-tight mb-8 relative z-10"
          >
            <span className="block text-white mb-2">Ride Together.</span>
            <span className="inline-block text-[#4FA88A]">Arrive Together.</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-white/60 font-ui max-w-lg mb-12 relative z-10 leading-relaxed"
          >
            The world's most intelligent group travel companion — built for riders who move as one across any terrain.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-start relative z-10"
          >
            <button onClick={() => window.location.href = "https://expo.dev/artifacts/eas/hZbQUdZLVRoVLhjj7tnQnY.apk"} className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-white/5 border border-white/10 text-white hover:bg-white/10 h-14 px-8 gap-3 hover:scale-105 active:scale-95 duration-300">
              <Play className="w-5 h-5 fill-current" />
              Google Play
            </button>
            <button onClick={() => alert("Coming Soon!")} className="inline-flex items-center justify-center rounded-full text-sm font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-[#4FA88A] text-[#0D1B17] hover:bg-[#4FA88A]/90 h-14 px-8 gap-3 shadow-[0_0_30px_rgba(79,168,138,0.2)] hover:shadow-[0_0_40px_rgba(79,168,138,0.4)] hover:scale-105 active:scale-95 duration-300">
              <Apple className="w-5 h-5 fill-current" />
              App Store
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="mt-8 md:mt-16 flex flex-col items-start gap-4 opacity-60 w-full pl-10"
        >
          <div className="w-[1px] h-20 bg-[#4FA88A]/20 relative overflow-hidden">
            <motion.div 
              animate={{ 
                y: [0, 80],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-transparent via-[#4FA88A] to-transparent" 
            />
          </div>
          <span className="text-[10px] uppercase font-ui tracking-widest text-[#4FA88A]">Scroll to ride</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
