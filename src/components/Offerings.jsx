import { useState, useEffect } from "react";
import { MapPin, Users, Settings, Mic, Bell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Offerings() {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Nearby Attractions",
      desc: "Discover what's worth stopping for without breaking flow.",
      icon: MapPin,
      align: "right",
    },
    {
      num: "02",
      title: "Explore | Join Trips",
      desc: "Join group rides that match your vibe and browse curated trips.",
      icon: Users,
      align: "left",
    },
    {
      num: "03",
      title: "Create | Manage Trips",
      desc: "Create structured group trips with checkpoints and timings.",
      icon: Settings,
      align: "right",
    },
    {
      num: "04",
      title: "Voice Chat | Group Map",
      desc: "Voice chat in waiting area. Group Map displays real-time locations.",
      icon: Mic,
      align: "left",
    },
    {
      num: "05",
      title: "Alerts | Checkpoints",
      desc: "Real-time alerts and structured checkpoints to keep aligned.",
      icon: Bell,
      align: "right",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % steps.length);
    }, 4000); // 4 seconds auto-highlight
    return () => clearInterval(interval);
  }, [steps.length]);

  return (
    <section id="offerings" className="w-full md:min-h-screen py-16 md:py-0 relative px-6 md:px-12 z-10 pointer-events-none flex items-center">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row pointer-events-auto">
        
        {/* Left Side: The Timeline Section */}
        <div className="w-full md:w-[50%] flex flex-col items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-4 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-display font-semibold mb-2 text-white tracking-tight">Browse Our Offerings</h2>
          </motion.div>

          <div className="relative w-full flex flex-col gap-1 md:gap-0 mt-2 md:mt-0">
            {/* The Central Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] md:-translate-x-1/2 bg-white/10 pointer-events-none" />

            {steps.map((step, i) => {
              const isActive = activeIndex === i;
              
              return (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative w-full flex items-center justify-center cursor-pointer group"
                  onMouseEnter={() => setActiveIndex(i)}
                >
                  
                  {/* Timeline Node */}
                  <div className="absolute left-6 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center gap-3 bg-[#0A0A0A] px-2 py-1 transition-colors duration-300">
                     {step.align === "right" ? (
                       <>
                         <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-white/5 transition-all duration-500 ${isActive ? 'bg-white scale-110' : 'bg-white/5 group-hover:bg-white/10'}`}>
                           <step.icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-200'}`} />
                         </div>
                         <div className={`font-ui font-bold text-xs transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                           {step.num}
                         </div>
                       </>
                     ) : (
                       <>
                         <div className="hidden md:block">
                           <div className={`font-ui font-bold text-xs transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                             {step.num}
                           </div>
                         </div>
                         
                         <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-white/5 transition-all duration-500 ${isActive ? 'bg-white scale-110' : 'bg-white/5 group-hover:bg-white/10'}`}>
                           <step.icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${isActive ? 'text-black' : 'text-gray-400 group-hover:text-gray-200'}`} />
                         </div>

                         <div className="md:hidden">
                           <div className={`font-ui font-bold text-xs transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-500'}`}>
                             {step.num}
                           </div>
                         </div>
                       </>
                     )}
                  </div>

                  {/* Content Container */}
                  <div className="w-full flex items-center">
                    {step.align === "left" ? (
                      <>
                        <div className="hidden md:flex w-1/2 pr-12 justify-end">
                          <motion.div 
                            animate={{ opacity: isActive ? 1 : 0.4, x: isActive ? 0 : -10 }}
                            className={`w-full max-w-[26rem] p-3 rounded-xl border transition-all duration-500 ${isActive ? 'bg-white/5 border-white/15 shadow-[0_0_30px_rgba(255,255,255,0.05)]' : 'bg-transparent border-transparent'} text-right`}
                          >
                            <h3 className={`font-display text-base md:text-lg font-semibold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-300'}`}>{step.title}</h3>
                            <p className="font-ui text-xs md:text-sm text-muted-foreground leading-snug">{step.desc}</p>
                          </motion.div>
                        </div>
                        <div className="w-full md:hidden pl-16 py-2 flex justify-start">
                           <motion.div 
                             animate={{ opacity: isActive ? 1 : 0.4, x: isActive ? 0 : 10 }}
                             className={`w-full p-3 rounded-xl border transition-all duration-500 ${isActive ? 'bg-white/5 border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-transparent border-transparent'} text-left`}
                           >
                            <h3 className={`font-display text-base font-semibold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-300'}`}>{step.title}</h3>
                            <p className="font-ui text-xs text-muted-foreground leading-snug">{step.desc}</p>
                          </motion.div>
                        </div>
                        <div className="hidden md:block w-1/2 pl-12"></div>
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block w-1/2 pr-12"></div>
                        <div className="w-full md:w-1/2 pl-16 md:pl-12 py-2 md:py-0 flex justify-start">
                           <motion.div 
                             animate={{ opacity: isActive ? 1 : 0.4, x: isActive ? 0 : 10 }}
                             className={`w-full md:max-w-[26rem] p-3 rounded-xl border transition-all duration-500 ${isActive ? 'bg-white/5 border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-transparent border-transparent'} text-left`}
                           >
                            <h3 className={`font-display text-base md:text-lg font-semibold mb-1 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-300'}`}>{step.title}</h3>
                            <p className="font-ui text-xs md:text-sm text-muted-foreground leading-snug">{step.desc}</p>
                          </motion.div>
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: Empty space for 3D Phone */}
        <div className="hidden md:block md:w-[50%]"></div>

      </div>
    </section>
  );
}
