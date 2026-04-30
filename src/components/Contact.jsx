import { Sparkles, Terminal, CheckCircle2, Loader2, Cpu, Globe, Shield } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState("idle"); // idle, loading, success
  const [logs, setLogs] = useState([
    "INITIALIZING_COMMS_LINK...",
    "SCANNING_FREQUENCIES...",
    "SECURE_LINE_ESTABLISHED."
  ]);
  const logEndRef = useRef(null);

  useEffect(() => {
    if (formState === "loading") {
      const newLogs = [
        "ENCRYPTING_SIGNAL...",
        "ROUTING_THROUGH_SATELLITE_MESH...",
        "HANDSHAKING_WITH_OPS_CENTER..."
      ];
      let i = 0;
      const interval = setInterval(() => {
        if (i < newLogs.length) {
          setLogs(prev => [...prev, newLogs[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 400);
      return () => clearInterval(interval);
    } else if (formState === "success") {
      setLogs(prev => [...prev, "SIGNAL_RECEIVED_BY_OPS.", "LINK_TERMINATED_SUCCESSFULLY."]);
    }
  }, [formState]);

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("loading");
    setTimeout(() => {
      setFormState("success");
      setTimeout(() => {
        setFormState("idle");
        setLogs(["INITIALIZING_COMMS_LINK...", "SCANNING_FREQUENCIES...", "SECURE_LINE_ESTABLISHED."]);
      }, 4000);
    }, 2000);
  };

  return (
    <section className="relative w-full py-8 md:py-32 bg-transparent flex justify-center px-4 md:px-6">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative w-full max-w-4xl bg-[#0a0f0d]/90 backdrop-blur-2xl border border-[#4FA88A]/20 rounded-[2rem] p-1 shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        <div className="flex flex-col md:flex-row w-full bg-[#0D1B17] rounded-[1.8rem] overflow-hidden">
          
          {/* Left Side: Terminal Form */}
          <div className="w-full md:w-3/5 p-4 md:p-14 border-b md:border-b-0 md:border-r border-white/5">
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-10">
               <Terminal className="w-4 h-4 md:w-5 md:h-5 text-[#4FA88A]" />
               <span className="font-ui text-[10px] md:text-xs text-[#4FA88A] tracking-[0.2em] uppercase font-bold">Tactical Support Terminal</span>
            </div>

            <h2 className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">Establish Link</h2>
            <p className="text-gray-400 font-ui text-[10px] md:text-sm mb-4 md:mb-10 max-w-sm">
              Our ops team is standing by to support your convoy.
            </p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3 md:gap-5">
              <div className="relative">
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 md:px-5 py-2 md:py-4 text-xs md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#4FA88A]/50 focus:bg-black/60 font-ui transition-all"
                  placeholder="Callsign / Name"
                />
              </div>
              <div className="relative">
                <input 
                  type="email" 
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 md:px-5 py-2 md:py-4 text-xs md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#4FA88A]/50 focus:bg-black/60 font-ui transition-all"
                  placeholder="Comms Frequency (Email)"
                />
              </div>
              <div className="relative">
                <textarea 
                  required
                  placeholder="Mission Details..." 
                  rows={2}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 md:px-5 py-2 md:py-4 text-xs md:text-base text-white placeholder:text-gray-600 focus:outline-none focus:border-[#4FA88A]/50 focus:bg-black/60 font-ui transition-all resize-none min-h-[50px] md:min-h-[80px]"
                />
              </div>
              
              <div className="mt-2 md:mt-4">
                <button 
                  type="submit" 
                  disabled={formState !== "idle"}
                  className={`relative w-full overflow-hidden px-6 py-2.5 md:px-12 md:py-4 rounded-xl font-ui text-[10px] md:text-sm font-bold tracking-[0.2em] uppercase transition-all duration-300
                    ${formState === "idle" ? 'bg-[#4FA88A] text-[#0D1B17] hover:bg-emerald-400 hover:scale-[1.02] shadow-[0_0_20px_rgba(79,168,138,0.3)]' : ''}
                    ${formState === "loading" ? 'bg-gray-800 text-gray-400 cursor-not-allowed' : ''}
                    ${formState === "success" ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.4)]' : ''}
                  `}
                >
                  <AnimatePresence mode="wait">
                    {formState === "idle" && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        Transmit Signal
                      </motion.span>
                    )}
                    {formState === "loading" && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center">
                        <Loader2 className="w-5 h-5 animate-spin" />
                      </motion.span>
                    )}
                    {formState === "success" && (
                      <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center justify-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> Received
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Terminal Output / Metrics */}
          <div className="w-full md:w-2/5 p-4 md:p-10 bg-black/20 flex flex-col font-mono text-[8px] md:text-[10px] tracking-wider text-[#4FA88A]/70 uppercase">
             <div className="flex items-center justify-between mb-4 md:mb-8 pb-2 md:pb-4 border-b border-[#4FA88A]/10">
                <div className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#4FA88A] animate-pulse" />
                   <span>System Status: Optimal</span>
                </div>
                <div className="flex gap-4">
                   <Globe className="w-2.5 h-2.5 md:w-3 md:h-3" />
                   <Shield className="w-2.5 h-2.5 md:w-3 md:h-3" />
                   <Cpu className="w-2.5 h-2.5 md:w-3 md:h-3" />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto max-h-[80px] md:max-h-[300px] mb-4 md:mb-8 scrollbar-hide space-y-1 md:space-y-2">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="opacity-30">[{new Date().toLocaleTimeString()}]</span>
                    <span className={i === logs.length - 1 ? "text-white" : ""}>{log}</span>
                  </div>
                ))}
                <div ref={logEndRef} />
             </div>

             <div className="mt-auto space-y-4 pt-4 border-t border-[#4FA88A]/10">
                <div>
                   <div className="flex justify-between mb-1">
                      <span>Signal Strength</span>
                      <span>98.2%</span>
                   </div>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "98.2%" }}
                        className="h-full bg-[#4FA88A]" 
                      />
                   </div>
                </div>
                <div>
                   <div className="flex justify-between mb-1">
                      <span>Encryption Depth</span>
                      <span>4096-BIT</span>
                   </div>
                   <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        className="h-full bg-[#4FA88A]" 
                      />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
