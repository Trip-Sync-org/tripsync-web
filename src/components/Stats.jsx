import { motion, useMotionValue, useTransform } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Globe, Activity } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import tripsyncVideo from "../assets/tripsync.mp4";

function Counter({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = (time - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    // Using Intersection Observer to start counting when visible
    // For simplicity in this demo, just using a small timeout, 
    // but typically you'd trigger this via whileInView.
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 500);
    
    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeout);
    };
  }, [end, duration]);

  return <>{count.toLocaleString()}{suffix}</>;
}

export default function Stats() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative w-full py-16 md:py-32 bg-transparent overflow-hidden flex flex-col items-center justify-center">
      
      {/* Data Lines Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-display font-black text-white tracking-tight mb-6">
          Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Impact</span>
        </h2>
        <div className="flex justify-center gap-12 text-center">
          <div>
            <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
               <Counter end={500} suffix="+" />
            </div>
            <div className="text-xs font-ui text-white/60 uppercase tracking-widest flex items-center gap-2 justify-center">
              <Globe className="w-3 h-3" /> Successful Trips
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2">
               <Counter end={10} suffix="K+" />
            </div>
            <div className="text-xs font-ui text-white/60 uppercase tracking-widest flex items-center gap-2 justify-center">
               <Activity className="w-3 h-3" /> Miles Logged
            </div>
          </div>
        </div>
      </motion.div>

      {/* 3D Interactive Video Container */}
      <div className="relative z-10 w-full max-w-4xl px-6 perspective-[1000px]">
        <motion.div 
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          onMouseMove={handleMouse}
          onMouseLeave={handleMouseLeave}
          onClick={togglePlay}
          className="relative w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden bg-[#121212] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] group cursor-pointer"
        >
          {/* Glassmorphic Top Bar */}
          <div 
            className="absolute top-0 left-0 right-0 h-12 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-6 z-30" 
            style={{ transform: "translateZ(30px)" }}
            onClick={(e) => e.stopPropagation()}
          >
             <div className="flex items-center gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500/70" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
               <div className="w-3 h-3 rounded-full bg-green-500/70" />
               <div className="ml-4 text-xs font-ui text-gray-300 tracking-wider font-semibold">
                 TRIPSYNC_SIMULATION_V2.mp4
               </div>
             </div>

             <div className="flex items-center gap-3">
               <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                 <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                 {isPlaying ? "Live Simulation" : "Paused"}
               </div>

               <button
                 type="button"
                 onClick={toggleMute}
                 className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-colors"
                 title={isMuted ? "Unmute" : "Mute"}
               >
                 {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
               </button>
             </div>
          </div>

          {/* Actual Video Element */}
          <video 
            ref={videoRef}
            src={tripsyncVideo}
            autoPlay
            loop
            muted={isMuted}
            playsInline
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover transition-opacity duration-700"
          />
          
          {/* Subtle Grid Overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] mix-blend-screen pointer-events-none" />
          
          {/* Play/Pause Overlay Button */}
          <div 
            className={`absolute inset-0 flex items-center justify-center z-20 pointer-events-none transition-all duration-300 ${
              isPlaying ? "opacity-0 group-hover:opacity-80" : "opacity-100"
            }`} 
            style={{ transform: "translateZ(50px)" }}
          >
             <div className="w-24 h-24 rounded-full bg-black/40 border border-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-500 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.15)] relative">
               {!isPlaying && (
                 <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20" />
               )}
               {isPlaying ? (
                 <Pause className="w-10 h-10 text-white" fill="currentColor" />
               ) : (
                 <Play className="w-10 h-10 text-white ml-2" fill="currentColor" />
               )}
             </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
